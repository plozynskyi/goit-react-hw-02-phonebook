import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  MainSection,
  PhoneBookTitle,
  NameTitle,
  FormBox,
  Input,
  AddBtn,
  ContactsBox,
  ContactsTitle,
  ContactItem,
  RemoveBtn,
  FilterBox,
} from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

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

  getFilteredBooks() {
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

  removeBook = id => {
    this.setState(({ contacts }) => {
      const newBooks = contacts.filter(item => item.id !== id);
      return { contacts: newBooks };
    });
  };

  addBook = e => {
    e.preventDefault();
    const { name, number } = this.state;
    if (this.isDuplicate(name, number)) {
      return Notify.failure(`'${name} is already exist'`);
    }

    this.setState(prevState => {
      const { name, number, contacts } = prevState;

      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      return { contacts: [newContact, ...contacts], name: '', number: '' };
    });
  };

  render() {
    const { addBook, handleChange } = this;
    const { name, number } = this.state;
    const items = this.getFilteredBooks();

    const contacts = items.map(({ id, name, number }) => (
      <ContactItem key={id}>
        {name}: {number}
        <RemoveBtn onClick={() => this.removeBook(id)} type="button">
          Delete
        </RemoveBtn>
      </ContactItem>
    ));

    return (
      <MainSection>
        <PhoneBookTitle>Phonebook</PhoneBookTitle>
        <FormBox>
          <form action="" onSubmit={addBook}>
            <div>
              <NameTitle>Name</NameTitle>
              <Input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </div>
            <div>
              <NameTitle>Number</NameTitle>
              <Input
                type="tel"
                name="number"
                value={number}
                onChange={handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </div>
            <AddBtn type="submit">Add contact</AddBtn>
          </form>
        </FormBox>
        <ContactsBox>
          <ContactsTitle>Contacts</ContactsTitle>
          <FilterBox>
            <label>Find contacts by name</label>
            <Input name="filter" onChange={handleChange} />
          </FilterBox>
          <ul>{contacts}</ul>
        </ContactsBox>
      </MainSection>
    );
  }
}

export default App;
