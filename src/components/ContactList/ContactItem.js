import React from 'react';
import { connect } from 'react-redux';
import styles from './ContactItem.module.css';
import contactsActions from '../../redux/contacts/contacts-actions';

const ContactItem = ({contacts, onClick}) => {

    return (
        contacts.map(({ name, number, id }) => {
            return (
            <li className={styles.ContactItem} key={id}>
                <p>
                    <span>{name}</span>
                    <span>{number}</span>
                </p>
                    <button onClick={() => onClick(id)}>Delete</button>
            </li>
        )})

    )
}
const getVisibleContacts = (allContacts, filter) => {
   
     const normalizedFilter = filter.toLowerCase();
     return allContacts.filter(({name}) =>
         name.toLowerCase().includes(normalizedFilter))}

const mapStateToProps = (state) => {
    const { filter, items } = state.contacts;
    const visibleFilterContact = getVisibleContacts(items, filter)
    return {
        contacts: visibleFilterContact
    }
    
}

const mapDispatchToProps = dispatch => ({
    onClick: (id) => dispatch(contactsActions.removeContact(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);