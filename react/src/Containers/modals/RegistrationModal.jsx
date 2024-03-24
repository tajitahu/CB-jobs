import React, { useState } from 'react';
import { Modal, Button, Box } from '@mui/material';
import { useModal } from '../../Context/ContextProvider';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const RegistrationModal = ({ open, onClose }) => {
  const [registrationType, setRegistrationType] = useState('');
  const { modalOpen, closeModal } = useModal();
  const navigate = useNavigate();

  const handleRegistration = (userType) => {
    // Logic to handle registration based on userType
    // For example, navigate to the signup page with the selected type
    navigate(`/signup/${encodeURIComponent(userType.toLowerCase().replace(/\s/g, '-'))}`);
  };

  return (
    <Modal open={open} onClose={onClose}>
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: '10px',
      }}
    >
      <h4 className='mb-5'>Select your account type</h4>
      <Box sx={{ textAlign: 'center' }}>
        <Button
          sx={{ width: '60%', borderRadius: '60px', backgroundColor: '#5867dd', borderColor: '#5867dd' }}
          className='btn-block mb-2 signUpBtn'
          variant="contained"
          onClick={() => handleRegistration('EMPLOYER')}
        >
          Employer
        </Button><br/>
        <Button
          sx={{ width: '60%', borderRadius: '60px',backgroundColor: '#fbaa00', borderColor: '#eea200' }}
          className="btn-sucess mb-2 signUpBtn"
          variant="contained"
          onClick={() => handleRegistration('TRAINING PROVIDER')}
        >
          Training Provider
        </Button><br/>
        <Button
          sx={{ width: '60%', borderRadius: '60px',backgroundColor: '#34bfa3', borderColor: '#34bfa3' }}
          className="btn-warning mb-2 signUpBtn"
          variant="contained"
          onClick={() => handleRegistration('AGENT')}
        >
          Agent/Jobcenter Africa
        </Button><br/>
        <Button
          sx={{ width: '60%', borderRadius: '60px',backgroundColor: '#21253f', borderColor: '#444b73' }}
          className="btn-sucess mb-2 signUpBtn"
          variant="contained"
          onClick={() => handleRegistration('JOB SEEKER')}
        >
          Job Seeker
        </Button><br/>
        <Button
          sx={{ width: '60%', borderRadius: '60px',backgroundColor: '#e7bf6a', borderColor: '#e7bf6a' }}
          className="btn-sucess mb-2 signUpBtn"
          variant="contained"
          onClick={() => handleRegistration('FREELANCER')}
        >
          Freelancer
        </Button>
      </Box>
    </Box>
  </Modal>
  
  );
};

export default RegistrationModal;
