import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../../redux/phonebook/phonebook-selectors";

import { addContact } from "../../redux/phonebook/phonebook-operations";

import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PhoneIcon from "@material-ui/icons/Phone";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function ContactForm() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const data = useSelector(getContacts);

  const [user, setUser] = useState({
    name: "",
    number: "",
  });

  const handleChangeUserInfo = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setUser(() => ({
      name: "",
      number: "",
    }));
  };

  const isInContactList = (contact) => {
    const normalizedName = contact.name.toLowerCase();
    const names = data.map((el) => el.name.toLowerCase());
    const existingName = names.find((name) => name === normalizedName);
    console.log("existingName :>> ", existingName);
    return existingName;
  };

  const handleUserFormSubmit = (event) => {
    event.preventDefault();

    if (!isInContactList(user)) {
      dispatch(addContact(user));
      resetForm();
    } else {
      return alert("This contact is already in contact list!");
    }
  };
  return (
    <div className={classes.paper}>
      <form onSubmit={handleUserFormSubmit} autoComplete="off">
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              fullWidth
              autoComplete="off"
              type="text"
              value={user.name}
              inputProps={{
                pattern:
                  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
                title:
                  "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.",
              }}
              onChange={handleChangeUserInfo}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <PhoneIcon />
          </Grid>
          <Grid item>
            <TextField
              required
              id="number"
              name="number"
              label="Number"
              fullWidth
              autoComplete="off"
              onChange={handleChangeUserInfo}
              type="tel"
              value={user.number}
              inputProps={{
                pattern:
                  "\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",
                title:
                  "Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +",
              }}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}></Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Add contact
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
