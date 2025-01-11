import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/selectors";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const filter = useSelector(selectNameFilter);
  const contacts = useSelector(selectFilteredContacts).filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );
  return (
    <>
      {contacts.length > 0 ? (
        <ul className={css.list}>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts found</p>
      )}
    </>
  );
};

export default ContactList;
