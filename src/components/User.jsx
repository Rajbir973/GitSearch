/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Beaneater from "./Beaneater";
function User(props) {
  return (
    <>
    {
        props.load?<h1><Beaneater/></h1>:
        <div>
            <img src={props.info.avatar_url}/>
            <button className="btn-styling div-btn"><Link to={props.info.login} state={{ info:props.info }}>{props.info.login}</Link></button>
            <div className="div-style" key={props.info.id}>
                <h1 key={props.info.id}>{props.info.login}</h1>
              </div>
        </div>
     } 
    </>
  )
}

export default User