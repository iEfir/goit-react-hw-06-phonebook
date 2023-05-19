import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import { Btn, Container, Item, Text } from './Contacts.styled';
import { deleteContact, selectContact } from 'redux/contactsSlice';
import { selectFilter } from 'redux/filtersSlice';
// import { selectorFilteredContacts } from 'redux/selectors';

const Contacts = () => {
  const contacts = useSelector(selectContact);

  const filter = useSelector(selectFilter);

  const values = Object.values(contacts);

  const localFiltredContacts = values.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  const dispatch = useDispatch();

  return (
    <Container>
      <ul>
        {localFiltredContacts.map(({ id, name, number }) => (
          <Item key={id}>
            <Text>
              {name}: {number}
            </Text>
            <Btn
              type="button"
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </Btn>
          </Item>
        ))}
      </ul>
    </Container>
  );
};

export default Contacts;

// Contacts.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };
