import { createContext, useEffect, useReducer } from "react";

const NoteContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "ADD_POST":
      return {
        filteredData: [...state.filteredData, action.payload],
        originalData: [...state.originalData, action.payload],
      };
    case "SET_POSTS":
      return { filteredData: action.payload, originalData: action.payload };
    case "FILTER":
      console.log(action.payload);
      return {
        ...state,
        filteredData: state.originalData.filter((el) =>
          el.name.includes(action.payload.trim())
        ),
      };
    case "DELETE":
      return {
        originalData: state.originalData.filter(
          (el) => el.id !== action.payload
        ),
        filteredData: state.filteredData.filter(
          (el) => el.id !== action.payload
        ),
      };
    case "CHANGE":
      return {
        ...state,
        filteredData: state.filteredData.map((el, ind) => {
          if (ind === action.payload) {
            return { ...el, status: !el.status };
          }
          return el;
        }),
      };
  }
}
function NoteContextProvider(props) {
  const [data, dispatch] = useReducer(reducer, {
    originalData: [],
    filteredData: [],
  });

  useEffect(() => {
    fetch(
      "https://reacttodo-a4e88-default-rtdb.europe-west1.firebasedatabase.app/tasks.json"
    )
      .then((repsone) => repsone.json())
      .then((data) => {
        let el = Object.keys(data).map((el) => {
          let name = data[el];
          return { ...name, id: el, status: false };
        });
        dispatch({ type: "SET_POSTS", payload: el });
      });
  }, []);
  return (
    <NoteContext.Provider value={[data, dispatch]}>
      {props.children}
    </NoteContext.Provider>
  );
}

export { NoteContext };
export default NoteContextProvider;
