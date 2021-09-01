import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";

const styles = {
  title: {
    textAlign: "center",
  },
};

function ContactsPage() {
  return (
    <div>
      <h1 style={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 style={styles.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default ContactsPage;
