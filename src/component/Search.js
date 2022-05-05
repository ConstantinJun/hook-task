import classes from "./Search.module.css";
import { useContext, useRef, useState,useId } from "react";
import { NoteContext} from "../context/NoteContext";

function Search() {
  const [_, dispatch] = useContext(NoteContext);
  const [value, setValue] = useState("");
  const inputRef = useRef();
  const id = useId();

  const search = () => {
    setValue(inputRef.current.value);
    dispatch({ type: "FILTER", payload: value });
  };

  return (
    <div className={classes.search}>
      <label htmlFor={id}>Do you have task today</label>
      <input  id={id} ref={inputRef} type="text" value={value} onChange={search} />
    </div>
  );
}

export default Search;
