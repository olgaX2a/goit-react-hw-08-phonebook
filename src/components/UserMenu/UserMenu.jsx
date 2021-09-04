import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: "10px",
  },
};

function UserMenu({ email }) {
  return (
    <div style={styles.container}>
      <AccountCircleIcon color="primary" />
      <p>{email}</p>
    </div>
  );
}

export default UserMenu;
