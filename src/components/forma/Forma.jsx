import { Formik } from 'formik';
import { Notify } from 'notiflix';
// import PropTypes from 'prop-types';
import { Button, Forms, Input } from './Forma.styled';
import { addContacts, selectContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

const Forma = () => {
  const initialValues = {
    name: '',
    number: '',
  };

  const contacts = useSelector(selectContact);

  const dispatch = useDispatch();

  const nameCheck = name => {
    return contacts.filter(contact => contact.name.includes(name));
  };

  const onSubmit = (values, { resetForm }) => {
    resetForm();
    const check = nameCheck(values.name);

    if (check.length <= 0) {
      dispatch(addContacts(values));
      return;
    }

    Notify.warning(`${values.name} is already in contant`);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Forms>
        <label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="tel">
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button type="submit">Add contact</Button>
      </Forms>
    </Formik>
  );
};

export default Forma;

// Forma.propTypes = { addContact: PropTypes.func.isRequired };
