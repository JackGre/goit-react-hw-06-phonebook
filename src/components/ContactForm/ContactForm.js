import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

// import shortid from 'shortid';
import styles from './ContactForm.module.css';



class ContactForm extends Component {
state = {
    name: '',
    number: '',
    }
    onChange = (event) => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault() 
        this.props.onSubmit(this.state.name, this.state.number)
        this.setState({
            name: '',
            number: '',
        })
        // const check = contacts.find(el => el.name === name)
    
      
        // if (check) {
        //     alert(`${check.name} is already in contacts`)
        //     return;
        // }
    

    }

    render() {
        return (
            <form className={styles.Form} onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    value={this.state.name}
                    onChange={this.onChange}
                />
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    value={this.state.number}
                    onChange={this.onChange}
                />
                <button type="submit"
                >Add contact</button>
               
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onSubmit: (name, number) => dispatch(contactsActions.addContact(name, number)),
})

export default connect(null, mapDispatchToProps)(ContactForm);