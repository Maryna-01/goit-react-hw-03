import styles from './Contact.module.css';

const Contact = ({ contact, deleteContact }) => {
    return (
        <li className={styles.contactItem}>
            <p>{contact.name}: {contact.number}</p>
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
        </li>
    );
};

export default Contact;
