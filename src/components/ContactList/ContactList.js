import React from 'react';
import { connect } from 'react-redux';
import ContactItem from './ContactItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onClick}) => {
    return (
        <ul className={styles.ContactList}>
            <ContactItem contacts={contacts} onClick={onClick}/>
        </ul>
    );
}

const mapStateToProps = (state) => ({
    contacts: state.contacts.items
    
})

export default connect(mapStateToProps)(ContactList);