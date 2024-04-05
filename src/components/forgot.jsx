import { useNavigate } from 'react-router-dom';

const Forget= () => {
  const navigator = useNavigate()
    const redirecter = () => {
        navigator('/Forget');
    }    
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}> 
      {/* <a href='' onClick={redirecter} style={{color:'blue'}}>Forget Password?</a> */}
    </div>
  );
};

export default Forget;