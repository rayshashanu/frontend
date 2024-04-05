import axios from 'axios';
import { useEffect, useState } from 'react';
import Forget from '../components/forgot';

function Forgetpage(){
    const[email,setEmail] =useState('');
    const[new_password,setPassword] =useState('');
    const[Confirm_Password,setConfirmPassword] =useState('');
    const[error,setError] =useState('');

    useEffect(()=>{
        console.log('email is:',email);
        console.log('password is:',new_password)},[email,new_password])

    const handleSubmit = async() => {
            setError("password updated successfully");
            const response = await axios.post('http://localhost:2000/forgot',{
            email,new_password
            })
         if(response.data){
            console.log(response.data);

        }
        // }else{
        //     setError("password updated failed");
        // }
    }
  return (
    <>
    <div style={{backgroundImage:`url(3.avif)`,height:'800px',width:'1400px',backgroundSize:'cover',backgroundRepeat:'no-repeat',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',gap:'10px'}}>
        <h1>RESET_PASSWORD</h1>
        <tr>
            <td></td>
            <input type='text' placeholder='email_id....'name='Email_id' onChange={(e)=>setEmail(e.target.value)}  style={{width:'500px',padding:'10px'}}/>
        </tr>
        <tr>
            <td></td>
            <input type='text' placeholder='new password....'name='new_password' onChange={(e)=>setPassword(e.target.value)} style={{width:'500px',padding:'10px'}}/>
        </tr>
        <tr>
        <td></td>
        <input type='text' placeholder='confirm_password....'name='Confirm_Password' onChange={(e)=>setPassword(e.target.value)} style={{width:'500px',padding:'10px'}}/>
        </tr>
        <button onClick={handleSubmit} style={{backgroundColor:'grey',borderRadius:'10px',width:'100px',height:'30px'}}>submit</button>
        <div style={{color:'red'}}>{error}</div>
    </div>
    </>
  )
};

export default Forgetpage;