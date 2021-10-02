import React from 'react';
import { connect } from 'react-redux';
import styles from './ContactFilter.module.css';
import contactsActions from '../../redux/contacts/contacts-actions';


const ContactFilter = ({ value, onChange }) => {
    return (
        <div className={styles.Filter}>
            <label>
                 Find contacts by name
                <input
                    type="text"
                    value={value}
                    onChange={onChange}></input>
            </label>
        </div>
    )
}

const mapStateToProps = (state) => ({
    value: state.contacts.filter
})

const mapDispatchToProps = dispatch => ({
    onChange: (e) => dispatch(contactsActions.changeFilter(e.target.value))
}
)
export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);
