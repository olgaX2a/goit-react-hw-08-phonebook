import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/phonebook/phonebook-selectors";
// import { filterContact } from "../../redux/phonebook/filterReducer";
import { filterContact } from "../../redux/phonebook/phonebook-actions";

import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Filter = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);
  const onFilterChange = (event) => {
    dispatch(filterContact(event.target.value));
  };
  return (
    <div className={classes.paper}>
      <TextField
        placeholder="Search contacts by name"
        type="text"
        variant="outlined"
        size="small"
        onChange={onFilterChange}
        value={filterValue}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Filter;
