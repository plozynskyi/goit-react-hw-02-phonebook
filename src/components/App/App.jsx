import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import PhoneBookList from '../PhoneBookList/PhoneBookList';
import PhoneBookFilter from '../PhoneBookFilter/PhoneBookFilter';
import PhoneBooksForm from '../PhoneBookForm/PhoneBookForm';

import {
  MainSection,
  FormBox,
  PhoneBookTitle,
  ContactsBox,
  ContactsTitle,
} from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContacts = ({ name, number }) => {
    if (this.isDuplicate(name, number)) {
      return Notify.failure(`'${name} is already exist'`);
    }

    this.setState(prevState => {
      const { contacts } = prevState;

      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      return { contacts: [newContact, ...contacts] };
    });
    return true;
  };

  removeContacts = id => {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(item => item.id !== id);
      return { contacts: newContacts };
    });
  };

  getFilteredContacts() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name, number }) => {
      return (
        name.toLowerCase().includes(normalizedFilter) ||
        number.toLowerCase().includes(normalizedFilter)
      );
    });

    return result;
  }

  isDuplicate(name, number) {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();
    const { contacts } = this.state;
    const result = contacts.find(({ name, number }) => {
      return (
        name.toLowerCase() === normalizedName &&
        number.toLowerCase() === normalizedNumber
      );
    });

    return Boolean(result);
  }

  handleFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  render() {
    const { addContacts, removeContacts, handleFilter } = this;
    const items = this.getFilteredContacts();
    const isContact = Boolean(items.length);

    return (
      <MainSection>
        <FormBox>
          <PhoneBookTitle>Phonebook</PhoneBookTitle>
          <PhoneBooksForm onSubmit={addContacts} />
        </FormBox>
        <ContactsBox>
          <ContactsTitle>Contacts</ContactsTitle>
          <PhoneBookFilter handleChange={handleFilter} />
          {isContact && (
            <PhoneBookList items={items} removeContacts={removeContacts} />
          )}
          {!isContact && <p>No contacts in list</p>}
        </ContactsBox>
      </MainSection>
    );
  }
}

export default App;
