/* eslint-disable react/prop-types */
function CustomAlert({msg,type}) {
  console.log(msg,type)
    return (
    <>
        {msg && <h1 className={`${type}`}>{msg}</h1>}
    </>
  )
}

export default CustomAlert