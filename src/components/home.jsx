import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const logout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/login')
  }
  const user = useSelector((state) => state.user.user);

  return (
    <>
    <div style={{alignContent:'end',display:'flex',justifyContent:'flex-end',color:'black',backgroundColor:'grey',padding:'20px',flexDirection:'row',gap:'10px',width:'1350px'}}>
    <button style={{borderRadius:'10px',backgroundColor:'grey',width:'100px',height:'30px'}}onClick={logout}>login</button>
    </div>
    <centre>
    <div style={{backgroundImage:`url(5.avif)`,height:'800px',width:'1400px',backgroundSize:'cover',backgroundRepeat:'no-repeat',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',gap:'10px'}}>
      <h2 style={{border:'solid',borderRadius:'20px',borderColor:'grey',borderWidth:'20px'}}>Welcome Home!{user}</h2>
    </div>
    </centre>
    </>
  );
};

export default Home;
