import { useCallback, useContext } from "react";
import { NoteContext } from "../context/NoteContext";
import classes from "./ContainerList.module.css";
import ListItem from "./ListItem";

function ContainerList() {
  const [data] = useContext(NoteContext);
  const countTask = (arr) => {
    return arr.filter((item) => item.status).length;
  };
  const memoCallback = useCallback(() => {
    return countTask(data.filteredData);
  }, [data.filteredData]);

  return (
    <div className={classes.content}>
      <div className={classes.title}>MemoTask:{memoCallback()}</div>
      <ul>
        {data.filteredData &&
          data.filteredData.map((el, ind) => (
            <ListItem key={ind} position={ind} name={el} />
          ))}
      </ul>
    </div>
  );
}

export default ContainerList;
