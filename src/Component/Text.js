import React,{useState} from 'react'

export default function Text(props) {
  const [text , setText] = useState("")
  const change= (event)=> {
        setText(event.target.value)
  }
  const upperclick=()=>{
    let a=text.toUpperCase()
    setText(a)
    props.showAlert("Converted to Uppercase","success")
      
  }
  const lowerclick=()=>{
    let a=text.toLowerCase()
    setText(a)
    props.showAlert("Converted to Lowercase","success")
    
      
  }

  return (
    <>
      <div>
          
            <h1 style={{color:props.mode=='light'?'black':'white'}} >{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control" style={{backgroundColor: props.mode=='light'?'white':'gray',color:props.mode=='light'?'black':'white'}} id="exampleFormControlTextarea1" value={text}  onChange={change}     rows="8"></textarea>
                <button className={`btn btn-${props.mode} my-3 mx-3`}   onClick={upperclick}  >Convert to Uppercase</button>
                <button className={`btn btn-${props.mode} my-3 mx-3`} onClick={lowerclick} >Convert to Lowercase</button>
            </div>
      </div> 
      <div className="container my-2">
        <h1 style={{color:props.mode=='light'?'black':'white'}}>Your Text Summary</h1>
        <p style={{color:props.mode=='light'?'black':'white'}}>{(text.split(" ").length)-1} words, {text.length} character</p>
        <p style={{color:props.mode=='light'?'black':'white'}}>{0.008 * text.split(" ").length} Minutes read</p>
      </div>
   </>   
  )
}
