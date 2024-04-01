
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './ui/logo';
import { TextField ,Box,Button,Container}  from '@mui/material'
import { Link } from 'react-router-dom';
import { loginUser } from '../redux/userSlice';
import { useStateContext } from '../Context/ContextProvider';
import { useDispatch } from 'react-redux';
const Login = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const { setToken,setUser } = useStateContext();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    const handleLogin = () => {
        setLoading(true);
        if (formData.usr_email && formData.password) {
          // Register the user
         dispatch(loginUser(formData))
         .then((response) => {
             if (response.payload) {
              setToken(response.payload.token);
              setUser(response.payload.user);
              alert('Registration successful!')
             } else if (response.error) {
              alert('Registration Failed!')
             }
         });
         
        } else {
         alert('Please fill in all required fields.');
        }
    };

    return (
        <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center items horizontally
        justifyContent: 'center', // Center items vertically
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        paddingTop: '10px',
        paddingBottom: '20px',
        paddingLeft: '25px',
        paddingRight: '25px',
        marginTop: '50px',
        width: '60%',
      }}
    >
      <Logo />
      <h1 className='mb-2 mt-3'>Sign In</h1>
      <TextField
        type="email"
        label="Email"
        name="usr_email"
        value={formData.usr_email}
        onChange={handleChange}
        fullWidth  // Make the TextField take entire width
        sx={{
          '& .MuiInputBase-input': {
            height: 'auto',
            paddingBottom: '10px',
          },
        }}
      />
      <br/>
      <TextField
        type="password"
        label="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        fullWidth  // Make the TextField take entire width
        sx={{
          '& .MuiInputBase-input': {
            height: 'auto',
            paddingBottom: '10px',
          },
        }}
      />
      <br/>
      <label>
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        Remember me
      </label>
      <br/>
      <Button onClick={handleLogin} disabled={loading} className='btn-success' sx={{
    backgroundColor: '#2196f3', // Set background color to green
    color: '#fff', // Set text color to white
    borderRadius: '8px', // Set border radius to 8px
    '&:hover': {
      backgroundColor: 'darkgreen', // Change background color on hover
    },
  }}>
        {loading ? 'Logging in...' : 'Login'}
      </Button>
      <div class="pt-5 login-links">
        <span>Don't have an account yet?</span><Link class="ml-2" to="/signup/job-seeker">Sign Up</Link>
      <div class="mt-3"><Link to="/restore-password">Forgot Password?</Link></div>
      </div>
    </Box>
        </Container>
    );
};

export default Login; // Assuming you have a Logo component
