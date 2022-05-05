import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";
import classes from "./List.module.css";
import ListItem from "./ListItem";

function ContainerList() {
  const [data]= useContext(NoteContext)
  return (
    <div className={classes.content}>
      <ul>
         {data.filteredData && data.filteredData.map(el=><ListItem name={el}/>)}
      </ul>
    </div>
  );
}

export default ContainerList;
