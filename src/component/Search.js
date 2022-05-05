import classes from './Search.module.css';
import { useContext, useRef, useState } from 'react';
import { NoteContext } from '../context/NoteContext';


function Search(){
  const [_,dispatch] = useContext(NoteContext)
  const [value ,setValue] = useState("");
  const inputRef = useRef();

  const search=()=>{
    setValue(inputRef.current.value);
    dispatch({type:'FILTER', payload: value})
  }


   return <div className={classes.search}>
              <input ref={inputRef} type='text' value={value} onChange={search}/>
          </div>
}

export default Search;