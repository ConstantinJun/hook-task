import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";
import classes from "./Footer.module.css";

function Footer() {
  const [__, dispatch] = useContext(NoteContext);

  const addTask = () => {
    const valueTask = prompt("addTask");

    const Task = {
      name: valueTask,
    };

    fetch(
      "https://reacttodo-a4e88-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
      {
        method: "POST",
        body: JSON.stringify(Task),
      }
    )
      .then((el) => el.json())
      .then((taskid) =>
        dispatch({
          type: "ADD_POST",
          payload: { name: valueTask, id: taskid.name },
        })
      );
  };

  return (
    <footer className={classes.footer}>
      <button id="footer--btn" onClick={addTask}>
        <svg
          fill="none"
          stroke="#000"
          strokeWidth="2"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,18 L12,6 M6,12 L18,12" />
        </svg>
        add
      </button>
    </footer>
  );
}

export default Footer;
