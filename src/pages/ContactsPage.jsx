import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";

const styles = {
  container: {
    marginTop: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    margin: 0,
  },
};

function ContactsPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 style={styles.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default ContactsPage;
