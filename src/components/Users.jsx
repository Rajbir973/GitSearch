

/* eslint-disable react/prop-types */
import User from "./User"
function Users(props) {
  return (
    <>
      {props.data.map((ele) => {
        return (
        <>
            <User key={ele.id} info={ele}/>
        </>
        )
      })}
    </>
  )
}

export default Users