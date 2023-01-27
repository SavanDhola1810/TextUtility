import React from 'react'

export default function Alert(props) {
    // const capitalize=(word)=>{
    //     const n=word.toLowerCase();
    //     return n.charAt(0).toUpperCase() + n.slice(1);
    // }
  return (
    //its need to det wenever value is set to null
    props.alert && <div>
       <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type}</strong> : {props.alert.msg}
        </div>
  </div>
  )
}

