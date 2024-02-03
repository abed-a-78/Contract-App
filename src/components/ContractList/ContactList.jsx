//Style
import styles from "./ContactList.module.css";

//Component
import ContactItem from "../ContractItem/ContactItem";


const ContactList = ({ contacts, deleteHandler }) => {
    return (
        <div className={styles.container}>
            <h3>Contact List</h3>
            {
                contacts.length > 0 ? (
                    <ul className={styles.contacts}>
                        {contacts.map((contact) =>
                            <ContactItem key={contact.id} data={contact} deleteHandler={deleteHandler} />
                        )}
                    </ul>
                ) : <p className={styles.massage}>No Contacts Yet</p>
            }

        </div>
    );
};

export default ContactList;