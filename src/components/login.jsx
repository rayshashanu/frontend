import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const  navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {

    try {
      const response = await axios.post('http://localhost:2000/login', { email, password });
      const { firstName } = response.data;
      dispatch({ type: 'SET_USER', payload: firstName }); 
       if(response.data) {
        navigate('/');
       }       
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const redirecter = () => {
    navigate('/register');
  }

  return (
    <center>
    <div style={{backgroundImage:`url(1.avif)`,height:'800px',width:'1400px',backgroundSize:'cover',backgroundRepeat:'no-repeat',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',gap:'10px'}}>
      <h1 style={{width:'500px',padding:'10px',color:'black'}}>USER_LOGIN</h1>
      <div style={{borderRadius:'10px'}}>
        <label></label>
        <input placeholder='enter email_id' style={{width:'500px',padding:'10px'}}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label></label>
        <input placeholder='password' style={{width:'500px',padding:'10px'}}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div  style={{display:'flex',padding:'10px'}}>
      <button onClick={handleSubmit} style={{backgroundColor:'grey',width:'100px',height:'30px',padding:'10px',borderRadius:'30px'}}>Login</button> 
      <button onClick={redirecter} style={{backgroundColor:'grey',width:'100px',height:'30px',padding:'10px',borderRadius:'30px'}}>Register</button>
      <a href='' onClick={redirecter} style={{color:'blue',flexDirection:'column',display:'flex',justifyContent:'center',alignItems:'center'}}>Forget Password?</a>
      </div> 
    </div>
    </center>
  );
};

export default Login;
