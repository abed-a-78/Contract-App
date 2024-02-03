
//Use
import { useState } from "react";

//Components
import ContactList from "../ContractList/ContactList";
import inputs from "../../constants/inputs"

//Fake id
import { v4 } from "uuid";

//Style
import styles from "./Contact.module.css"


const Contact = () => {

    const [contacts, setContacts] = useState([]);
    const [alert, setAlert] = useState("");
    const [contact, setContact] = useState({
        id: "",
        name: "",
        lastName: "",
        email: "",
        phone: ""
    });

    const changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
        setContact(contact => ({ ...contact, [name]: value }))
    };

    const addHandler = () => {
        if (!contact.name || !contact.email || !contact.lastName || !contact.phone) {
            setAlert("please enter valid data!");
            return;
        }
        setAlert("");
        const newContact = { ...contact, id: v4() }
        setContacts((contacts) => [...contacts, newContact]);
        setContact({
            name: "",
            lastName: "",
            email: "",
            phone: ""
        })
    }

    const deleteHandler = (id) => {
        const newContacts = contacts.filter((contact) => contact.id !== id)
        setContacts(newContacts)
    }

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                {
                    inputs.map(input => (
                        <input
                            key={input.name}
                            type={input.type}
                            name={input.name}
                            placeholder={input.placeholder}
                            value={contact[input.name]}
                            onChange={changeHandler}
                        />
                    ))}
                <button onClick={addHandler}>Add Contact</button>
            </div>
            <div className={styles.alert}>
                {alert && <p>{alert}</p>}
            </div>
            <ContactList contacts={contacts} deleteHandler={deleteHandler} />
        </div>
    );
};

export default Contact;