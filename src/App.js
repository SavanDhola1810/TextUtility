import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Text from './Component/Text';
// import About from './Component/About';
import Alert from './Component/Alert';
import react,{ useState } from 'react';


function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggle=()=>{
    if(mode == 'light'){
      setMode('dark')
      document.body.style.backgroundColor='gray'
      showAlert("DarkMode has been Enabled","success")
      document.title='TextUtil-DarkMode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("LightMode has been Enabled","success")
      document.title='TextUtil-WhiteMode'
    }
  }
  const toggle1=()=>{
    if(mode == 'light'){
      setMode('dark')
      document.body.style.backgroundColor='aqua'
      showAlert("GreenMode has been Enabled","success")
      
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("LightMode has been Enabled","success")
    }
  }
  return (
  <>
  
    <Navbar title="Textutils" about="About" mode={mode} toggle={toggle} toggle1={toggle1}/>  
    <Alert alert={alert}/>
    <div className="container my-3">
      <Text  heading="Enter the Text below" showAlert={showAlert} mode={mode} />
    </div>
  
  </>
  );
}

export default App;
