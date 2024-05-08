import React,{useState} from 'react'
import axios from 'axios'

const App = () => {
  const [data,setData]=useState({
    username:"",
    email:"",
    password:"",
    confirmpassword:""
  })
  const{username,email,password,confirmpassword}=data;
  const changer = e => {
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitt = e =>{
    e.preventDefault()
    axios.post('https://signupform-23e5b-default-rtdb.firebaseio.com/register.json',data)
    .then(()=>alert("Submitted sucessfully"));
    if (username.length<=5){
      alert("Username should be of 5 letters")
    }
    else if(password!==confirmpassword){
      alert("PASSWORDS NOT MATCH");
    }
    else{
      console.log(data)
    }
  }


  return (
    <div>
      <center>
        <h1>SIGNUP FORM</h1>
        <form autoComplete="off" onSubmit={submitt}>
          <input type="text" name="username" value={username} placeholder='username' onChange={changer} />
          <br/>
          <input type="email" name="email" value={email} placeholder='email' onChange={changer}/>
          <br/>
          <input type="password" name="password" value={password} placeholder='password' onChange={changer}/>
          <br/>
          <input type="password" name="confirmpassword" value={confirmpassword} placeholder='confirmpassword' onChange={changer}/>
          <br/>
          <input type="submit" name="submit"/>
        </form>
      </center>
      
    </div>
  )
}

export default App


