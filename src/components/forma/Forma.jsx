import { Formik } from 'formik';
import { Notify } from 'notiflix';
// import PropTypes from 'prop-types';
import { Button, Forms, Input } from './Forma.styled';
import { addContacts, getContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

const Forma = () => {
  const initialValues = {
    name: '',
    number: '',
  };

  const contacts = useSelector(getContact);
  const dispatch = useDispatch();

  const name = contacts.map(contact => contact.name);

  const onSubmit = (values, { resetForm }) => {
    if (name.includes(values.name)) {
      Notify.warning(`${values.name} is already in contant`);

      return;
    } else {
      dispatch(addContacts(values));
    }

    resetForm();
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
