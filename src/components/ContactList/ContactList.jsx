import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/phonebook/phonebook-selectors";
import { filterContacts } from "../../helpers/filterContacts";
import {
  fetchContacts,
  deleteContact,
} from "../../redux/phonebook/phonebook-operations";
import { useEffect } from "react";
import { getContacts } from "../../redux/phonebook/phonebook-selectors";

import colorRandomizer from "../../helpers/cololorRandomizer";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(() => ({
  list: {
    width: "50vw",
  },
  avatar: {
    textTransform: "uppercase",
  },
}));

const ContactList = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const data = useSelector(getContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List className={classes.list}>
      {data &&
        filterContacts(data, filter).map(({ name, number, id }) => {
          return (
            <ListItem key={id}>
              <ListItemAvatar>
                <Avatar
                  className={classes.avatar}
                  style={{
                    backgroundColor: colorRandomizer(),
                  }}
                >
                  {name.slice(0, 1)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={name} secondary={number} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
    </List>
  );
};

export default ContactList;
