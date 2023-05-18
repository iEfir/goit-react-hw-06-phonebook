import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import { Btn, Container, Item, Text } from './Contacts.styled';
import { deleteContact, getContact, getFilter } from 'redux/contactsSlice';

const Contacts = () => {
  const contacts = useSelector(getContact);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  // const quantityContacts = contacts.length;

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <ul>
        {visibleContacts.map(({ id, name, number }) => (
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
