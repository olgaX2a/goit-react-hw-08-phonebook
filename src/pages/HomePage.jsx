const styles = {
  container: {
    padding: "15px",
  },
  title: {
    textAlign: "center",
    margin: 0,
  },
  text: {
    textAlign: "left",
  },
};

function HomePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Phonebook</h1>
      <p style={styles.text}>
        This small application will help you to keep all of your contacts in one
        place. You can add, delete and search your contacts.
      </p>
      <p style={styles.text}>
        To start press Login if you have an account or Register to create an
        account.
      </p>
    </div>
  );
}

export default HomePage;
