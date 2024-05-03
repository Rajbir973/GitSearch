/* eslint-disable react/prop-types */
import { useState } from "react";
import CustomAlert from "./CustomAlert";

function Search(props) {
  console.log(props);
  const [username, setUsername] = useState("");

  const onChangeHandler = (event) => {
    setUsername(event.target.value.trim());
  };

  return (
    <>
      <h1 className="h1-main main-style">GITHUB SEARCH</h1>
       <CustomAlert msg={props.alert.message}  type={props.alert.type}/>
      <label htmlFor="">
        <input type="text" id="" onChange={onChangeHandler} value={username} />
      </label>
      <button
        // disabled={!username}
        className="btn-styling"
        onClick={() => props.reverseData(username)}
      >
        SEARCH
      </button>
    </>
  );
}

export default Search;
