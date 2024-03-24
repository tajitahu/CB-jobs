import React, { useState } from 'react';
import toastr from 'toastr';
import { Button,Container,Box,TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from './ui/logo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
      
        // Process the email here (e.g., send a reset password email)
        // Replace the following line with your actual logic
        // ...
      
        // Display success message using toastr with custom options
        toast.success('Check your email for password reset instructions', {
            autoClose: 3000, // 3 seconds
            onClose: () => {
              // Clear form data and redirect after Toastr disappears
              setLoading(false);
              navigate('/login'); // Redirect to login page
            },
          });
      
        // Simulate loader disable after toastr duration (optional)
       
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
        <h1 className='mb-2 mt-3'>Forgot Password</h1>
        <TextField
            type="email"
            label="Email"
            value={email}
            onChange={handleEmailChange}
            fullWidth  // Make the TextField take entire width
            sx={{
            '& .MuiInputBase-input': {
                height: 'auto',
                paddingBottom: '10px',
            },
            }}
        />
        <br/>
        
            <Button onClick={handleSubmit} disabled={loading} className='btn-success' sx={{
            backgroundColor: '#2196f3', // Set background color to green
            color: '#fff', // Set text color to white
            borderRadius: '8px', // Set border radius to 8px
            '&:hover': {
            backgroundColor: 'darkgreen', // Change background color on hover
            },
            }}>
            {loading ? 'Requesting...' : 'Request Password Reset'}
        </Button>
        <div class="pt-5 login-links">
            <span>Don't have an account yet?</span><Link class="ml-2" to="/signup/job-seeker">Sign Up</Link>
        <div class="mt-3"><Link to="/login">Login</Link></div>
        </div>
        </Box>
     </Container>
       
    );
};

export default ForgotPassword;