import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async () => {

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      console.error('Please fill in all fields');
      return;
    }
  

    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:2000/register', {
        firstName,
        lastName,
        email,
        password,
      });
      console.log(response.data); 
      if(response.data) {
        navigate('/login')
      }
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div style={{backgroundImage:`url(2.avif)`,height:'800px',width:'1400px',backgroundSize:'cover',backgroundRepeat:'no-repeat',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',gap:'10px'}}>
      <h2 style={{color:'black'}}>REGISTER</h2>
      <div>
        <label></label>
        <input style={{width:'500px',padding:'10px'}}
          placeholder='first name'
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label></label>
        <input style={{width:'500px',padding:'10px'}}
        placeholder='last name'
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label></label>
        <input style={{width:'500px',padding:'10px'}}
        placeholder='email id'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label></label>
        <input style={{width:'500px',padding:'10px'}}
        placeholder='enter password'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label></label>
        <input style={{width:'500px',padding:'10px'}}
        placeholder='Confirm_Password'
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <div style={{width:'500px',padding:'10px',textAlign:'center'}}>
      <button onClick={handleSubmit} style={{backgroundColor:'grey',width:'100px',height:'30px',flexDirection:'',padding:'10px',borderRadius:'30px'}}>Register</button>
      </div>
    </div>
  );
};

export default Register;
