import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./ContactForm.css";
import { useGetContactsQuery } from "../../redux/phonebook/phonebookApi";
import { useAddContactMutation } from "../../redux/phonebook/phonebookApi";

// function ContactForm() {
//   const { data } = useGetContactsQuery();
//   const [addContact] = useAddContactMutation();

//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");

//   const handleChangeUserInfo = (event) => {
//     const { name, value } = event.target;

//     switch (name) {
//       case "name":
//         setName(value.trim());
//         break;

//       case "number":
//         setNumber(value.trim());
//         break;

//       default:
//         return;
//     }
//   };

//   const resetForm = () => {
//     setName("");
//     setNumber("");
//   };

//   const isInContactList = (contact) => {
//     const normalizedName = contact.name.toLowerCase();
//     const names = data.map((el) => el.name.toLowerCase());
//     const existingName = names.find((name) => name === normalizedName);
//     return existingName;
//   };

//   const handleUserFormSubmit = (event) => {
//     event.preventDefault();

//     const contact = {
//       id: uuidv4(),
//       name: name,
//       number: number,
//     };

//     if (!isInContactList(contact)) {
//       addContact(contact);
//       resetForm();
//     } else {
//       return alert("This contact is already in contact list!");
//     }
//   };

//   return (
//     <form className="Form" onSubmit={handleUserFormSubmit}>
//       <label className="Form__label">
//         Name
//         <input
//           onChange={handleChangeUserInfo}
//           type="text"
//           name="name"
//           value={name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//           required
//         />
//       </label>

//       <label className="Form__label">
//         Number
//         <input
//           onChange={handleChangeUserInfo}
//           type="tel"
//           name="number"
//           value={number}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//           required
//         />
//       </label>
//       <button type="submit" className="Form__add-btn">
//         Add contact
//       </button>
//     </form>
//   );
// }
import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

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

  const { data } = useGetContactsQuery();
  console.log("data :>> ", data);
  const [addContact] = useAddContactMutation();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChangeUserInfo = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value.trim());
        break;

      case "number":
        setNumber(value.trim());
        break;

      default:
        return;
    }
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  const isInContactList = (contact) => {
    const normalizedName = contact.name.toLowerCase();
    const names = data.map((el) => el.name.toLowerCase());
    const existingName = names.find((name) => name === normalizedName);
    return existingName;
  };

  const handleUserFormSubmit = (event) => {
    event.preventDefault();

    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    if (!isInContactList(contact)) {
      addContact(contact);
      resetForm();
    } else {
      return alert("This contact is already in contact list!");
    }
  };
  return (
    <div className={classes.paper}>
      <form
        // noValidate
        onSubmit={handleUserFormSubmit}
        autoComplete="off"
      >
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            fullWidth
            autoComplete="off"
            // type="text"
            value={name}
            inputProps={{
              type: "text",
              pattern:
                "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
              title:
                "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.",
            }}
            onChange={handleChangeUserInfo}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="number"
            name="number"
            label="Number"
            fullWidth
            autoComplete="off"
            onChange={handleChangeUserInfo}
            // type="tel"
            value={number}
            inputProps={{
              type: "tel",
              pattern:
                "+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}",
              title:
                "Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +",
            }}
          />
        </Grid>
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
