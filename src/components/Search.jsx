/* eslint-disable react/prop-types */
import { useState } from "react";

function Search(props) {
  const [username, setUsername] = useState("");

  const onChangeHandler = (event) => {
    setUsername(event.target.value.trim());
  };

  return (
    <>
      <h1 className="h1-main">GITHUB SEARCH</h1>
      <label htmlFor="">
        <input type="text" id="" onChange={onChangeHandler} value={username} />
      </label>
      <button
        disabled={!username}
        className="btn-styling"
        onClick={() => props.reverseData(username)}
      >
        SEARCH
      </button>
    </>
  );
}

export default Search;
