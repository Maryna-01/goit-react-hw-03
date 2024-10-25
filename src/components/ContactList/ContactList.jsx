const ContactList = ({ contacts, deleteContact }) => {
    return (
        <ul>
            {contacts.map(contact => (
                <li key={contact.id} className="contactItem">
                    <div className="contact-info">
                        <div className="icon-text-group">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="icon"
                            >
                                <path
                                    fill="currentColor"
                                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                                />
                            </svg>
                            <p>{contact.name}</p>
                        </div>
                        <div className="icon-text-group">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="icon"
                            >
                                <path
                                    fill="currentColor"
                                    d="M6.62 10.79a15.07 15.07 0 006.59 6.59l2.2-2.2a1.5 1.5 0 011.59-.33c1.71.57 3.57.88 5.5.88a1.5 1.5 0 011.5 1.5v3.5A1.5 1.5 0 0120.5 23a19.5 19.5 0 01-19.5-19.5A1.5 1.5 0 012.5 2H6A1.5 1.5 0 017.5 3.5c0 1.93.31 3.79.88 5.5a1.5 1.5 0 01-.33 1.59l-2.2 2.2z"
                                />
                            </svg>
                            <p>{contact.number}</p>
                        </div>
                    </div>
                    <button onClick={() => deleteContact(contact.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;

