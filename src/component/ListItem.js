import classes from "./ListItem.module.css";
import checkBtn from "../material/check.svg";
import renameBtn from "../material/rename.svg";
import copyBtn from "../material/copy.svg";
import removeBtn from "../material/remove.svg";
import { useCallback, useContext, useEffect, useState } from "react";
import { NoteContext } from "../context/NoteContext";

function ListItem(props) {
  const [_, dispatch] = useContext(NoteContext);

  const deletTask = () => {
    const url = `https://reacttodo-a4e88-default-rtdb.europe-west1.firebasedatabase.app/tasks/${props.name.id}.json`;
    fetch(url, {
      method: "DELETE",
    });
    dispatch({ type: "DELETE", payload: props.name.id });
  };

  const completeTask = () => {
    dispatch({ type: "CHANGE", payload: props.position });
  };

  return (
    <li className={classes.element}>
      <div className={classes.content}>
        <div className={classes.Listelement}>
          <span>
            <img src={checkBtn} alt="wrong" onClick={completeTask} />
          </span>
          <p>{props.name.name}</p>
        </div>
        <div className={classes.btnSection}>
          <span>
            <img src={removeBtn} alt="wrong" onClick={deletTask} />
          </span>
        </div>
      </div>
    </li>
  );
}

export default ListItem;
