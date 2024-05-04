/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Beaneater from "./Beaneater";
function User(props) {
  return (
    <>
    {
        props.load?<h1><Beaneater/></h1>:
        <div className="div-user-1" key={props.info.id}>
            <img src={props.info.avatar_url}/>
            {/* <button className="btn-styling div-btn"><Link to={props.info.login} state={{ info:props.info }}>{props.info.login}</Link></button> */}
                <h3 key={props.info.id}><Link className="link" to={props.info.login} state={{ info:props.info }}>{props.info.login}</Link></h3>
        </div>
     } 
    </>
  )
}

export default User