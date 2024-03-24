
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './ui/logo';
import { TextField ,Box,Button,Container}  from '@mui/material'
import { Link } from 'react-router-dom';
const Login = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        setLoading(true);
        // Perform login logic here, e.g., making an API call

        // Simulating a successful login
        setTimeout(() => {
            setLoading(false);
            // Store user data in cookie
            document.cookie = 'userData=your_user_data_here; path=/';
            // Redirect to dashboard
            navigate('/dashboard');
        }, 2000);
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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
