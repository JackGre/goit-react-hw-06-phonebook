import React, { Component } from 'react';

import ContactForm from './components/ContactForm';
import ContactFilter from './components/ContactFilter';
import ContactList from './components/ContactList';

import styles from "./App.module.css";

class App extends Component {


  // onSubmit = (newContact) => {
  //   const check = this.state.contacts.find(el => {
  //     return el.name === newContact.name
  //   })
    
  //   console.log(check)
    
  //   if (check !== undefined) {
  //     alert(`${newContact.name} is already in contacts`)
  //     return;
  //   }
    
    
  //   this.setState(prevState => ({
  //     contacts: [newContact, ...prevState.contacts],
  //   }));
  // };

  render() {
    
    return (
      <div className={styles.Container}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <ContactFilter />
        <ContactList />
        
      </div>
    );
  }   
}

export default App;
