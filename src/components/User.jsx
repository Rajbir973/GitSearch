/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
function User(props) {
  return (
    <>
    {
        props.load?<h1>LOADING.........</h1>:
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