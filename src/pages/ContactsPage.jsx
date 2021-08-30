import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";

function ContactsPage() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default ContactsPage;
