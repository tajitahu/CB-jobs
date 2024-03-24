import React, { useState } from 'react';
import {
  Box,
  Modal,
  Button,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Stepper,
  Step,
  StepLabel,
  Slide,
  Grow,
  Container,
  Radio,
  FormControl,
  RadioGroup ,
  
} from '@mui/material';
import StepIcon from '@mui/material/StepIcon';
import {withStyles} from '@mui/styles';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const CustomStepIcon = withStyles({
    root: {
      '&$active': {
        color: '#00bc5e', 
        fontColor:'green',
      },
      '&$completed': {
        color: '#00bc5e'
      }
    },
    text: {
        fontFamily: 'Gotham Rounded',
        fontColor:'green',
    },
    label: {
        color: '#00bc5e', // Custom color for the step label text
      },
    active: {
        color: '#00bc5e'
    },
    completed: {
        color: '#00bc5e'
    }
})(props => <StepIcon {...props} />);

const CustomStepLabel = (props => <StepLabel StepIconComponent={CustomStepIcon} {...props} />);



// Your trainingList array and other components...

const trainingList = [
  'Archaeology and archaeological sciences',
  'Philosophy',
  'Theology and religious studies',
  'Social Sciences',
  'Geography & Politically Functional Geography',
  'Sociology, social policy, & Social Welfare',
  'Politics',
  'Economics',
  'Anthropology',
  'Engineering Systems',
  'History & geopolitics',
  'Professional Writing, Linguistics, Other languages, literature and culture',
  'Science & Technology',
  'Educating and Training Preneurship',
  'Teaching and lecturing',
  'Direct learning support',
  'Preparation for Life',
  'Foundations for learning and life',
  'Preparation for work',
  'Business, Administration and Laws',
  'Banking, Accounting and finance',
  'Administration',
  'Business management',
  'Marketing and sales',
  'Law and legal services',
  'Past College Entrance Exam Papers',
  'Past Secondary School Exam Papers',
  'Past University (High school) Exam Papers',
  'Technical Training',
  'Media Studies',
  'Design & Architecture',
  'Agriculture, Farming & Ecological Studies',
  'Manufacturing & Commerce',
  'Detailing & Repair Services Skills',
  'Chef & Hospitality Complaince',
  'Tourism & Promotion',
  'Health, health care, Esthetics, Medical & Pharmaceutics',
  'Animals Care, Training & wildlife Conservation',
  'Telecom',
  'Driver, Pilot Training & Refresher',
  'Security & Safety Trainings',
  'Basic IT',
  'Professional Sports training manuals',
  'Artistic Expression/Skills',
  'Health & Safety, Food Hygiene, Infection Control, Fire Safety, & related Courses',
  'Human Invention, Patenting, investment, & commercialization',
  'Estate Management & related skills',
  'Cypto, markets & Investment',
  'Creating & Running Foundations',
  'Other Resources',
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

const SignUpPage = () => {
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [type, setType] = useState('');
  const [trainingOptions, setTrainingOptions] = useState([]);
  const [gender, setGender] = useState('');

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  const { userType } = useParams();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleRegistration = (registrationType) => {
    setType(registrationType);
    handleOpen();
  };

  const handleTrainingChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setTrainingOptions((prevOptions) => [...prevOptions, value]);
    } else {
      setTrainingOptions((prevOptions) => prevOptions.filter((option) => option !== value));
    }
  };

  const handleSubmit = () => {
    
    // Validate form fields before setting the cookie
    if (formData.firstName && formData.lastName && formData.email && formData.password) {
     
      // Show Toastr notification
      toast.success('Registration successful!', {
        autoClose: 3000, // 3 seconds
        onClose: () => {
          // Clear form data and redirect after Toastr disappears
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
          });
          navigate('/login'); // Redirect to login page
        },
      });
    } else {
      toast.error('Please fill in all required fields.');
    }
  };

  return (
    <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Box >
      <Modal open={open} onClose={handleClose} TransitionComponent={Transition}>
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
          <Typography variant="h6">Select Your Training Types</Typography>
          {trainingList.map((training, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={trainingOptions.includes(training)}
                  onChange={handleTrainingChange}
                  value={training}
                  sx={{ '& .MuiSvgIcon-root': { transition: 'transform 0.3s ease-in-out' } }}
                />
              }
              label={training}
            />
          ))}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
            <Button variant="contained" onClick={handleClose}>Close</Button>
          </Box>
        </Box>
      </Modal>
      <Box sx={{ width: '100%', marginTop: 2 }}>

        <div className='d-flex justify-content-center'>
        <img src="/logos/logo2.png?cache_bust=123456" style={{ width: "200px" }} alt="Logo" />
          <div className='mt-5'>
            <h4>Join Us Our Team as {userType}</h4>
          </div>
        </div>
        <Stepper activeStep={activeStep}
         
          alternativeLabel className="g-stepper mt-sm-2 mt-md-31 mt-lg-51">
          <Step key="Personal">
            <CustomStepLabel>Personal Information</CustomStepLabel>
          </Step>
          <Step key="Contact">
            <CustomStepLabel>Contact Information</CustomStepLabel>
          </Step>
          <Step key="Account">
            <CustomStepLabel>Account Information</CustomStepLabel>
          </Step>
          {userType === 'training-provider' && ( // Check if the user type is 'TRAINING PROVIDER'}
          <Step key="Training">
          <CustomStepLabel>Area of Specialization</CustomStepLabel>
        </Step>
          ) }
          
        </Stepper>
        <form onSubmit={handleSubmit}>
          <Box mt={2}>
            {activeStep === 0 && (
              <Slide direction="right" in={activeStep === 0}>
                <Box>
                  <TextField
                    label="First Name"
                    name="firstName"
                    fullWidth
                    margin="normal"
                    required sx={{
                        '& .MuiInputBase-input': {
                          height: 'auto', // Auto height for inner input
                          paddingBottom: '10px', // Increase bottom padding
                        },
                      }}
                      value={formData.firstName}
                      onChange={handleChange}
                  />
                  <TextField
                    label="Last Name"
                    name="lastName"
                    fullWidth
                    margin="normal"
                    required sx={{
                        '& .MuiInputBase-input': {
                          height: 'auto', // Auto height for inner input
                          paddingBottom: '10px', // Increase bottom padding
                        },
                      }}
                      value={formData.lastName}
                      onChange={handleChange}
                  />
                 <FormControl component="fieldset" sx={{ mt: 2 }}>
                  <Typography variant="subtitle1" sx={{ mb: 1 }}>Gender</Typography>
                  <RadioGroup
                    aria-label="gender"
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio sx={{ '& .MuiSvgIcon-root': { transition: 'transform 0.3s ease-in-out' } }} />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio sx={{ '& .MuiSvgIcon-root': { transition: 'transform 0.3s ease-in-out' } }} />}
                      label="Female"
                    />
                  </RadioGroup>
                </FormControl>
                </Box>
              </Slide>
            )}
             {activeStep === 1 && (
              <Slide direction="left" in={activeStep === 1}>
                <Box>
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    fullWidth
                    margin="normal"
                    required sx={{
                        '& .MuiInputBase-input': {
                          height: 'auto', // Auto height for inner input
                          paddingBottom: '10px', // Increase bottom padding
                        },
                      }}
                      value={formData.email}
                      onChange={handleChange}
                  />
                  <TextField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    fullWidth
                    margin="normal" sx={{
                        '& .MuiInputBase-input': {
                          height: 'auto', // Auto height for inner input
                          paddingBottom: '10px', // Increase bottom padding
                        },
                      }}
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    required
                  />
                  <TextField
                    label="Country"
                    name="country"
                    fullWidth
                    margin="normal" sx={{
                        '& .MuiInputBase-input': {
                          height: 'auto', // Auto height for inner input
                          paddingBottom: '10px', // Increase bottom padding
                        },
                      }}
                    required
                  />
                 
                </Box>
              </Slide>
            )}
            {activeStep === 2 && (
              <Slide direction="right" in={activeStep === 2}>
                <Box>
                  
                  <TextField
                    label="Password"
                    name="password"
                    type="password"
                    fullWidth
                    margin="normal" sx={{
                        '& .MuiInputBase-input': {
                          height: 'auto', // Auto height for inner input
                          paddingBottom: '10px', // Increase bottom padding
                        },
                      }}
                      value={formData.password}
                      onChange={handleChange}
                    required
                  />
                  <TextField
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    fullWidth
                    margin="normal"
                    required sx={{
                        '& .MuiInputBase-input': {
                          height: 'auto', // Auto height for inner input
                          paddingBottom: '10px', // Increase bottom padding
                        },
                      }}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                  />
                </Box>
              </Slide>
            )}
            {activeStep === 3 && userType==='training-provider' && (
              <Slide direction="left" in={activeStep === 3}>
                <Box>
                  
                  <Typography variant="h6">Select Your Area of Specialization</Typography>
                  {trainingList.map((training, index) => (
                    <FormControlLabel
                      key={index}
                      control={
                        <Checkbox
                          checked={trainingOptions.includes(training)}
                          onChange={handleTrainingChange}
                          value={training}
                          sx={{ '& .MuiSvgIcon-root': { transition: 'transform 0.3s ease-in-out' } }}
                        />
                      }
                      label={training}
                    />
                  ))}
                </Box>
              </Slide>
            )}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
              <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
              {activeStep === 2 && userType !== 'training-provider' ? (
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                  Register
                </Button>
              ) : (
                activeStep !== 3  && (
                  <Button variant="contained" color="primary" onClick={handleNext}>
                    Next
                  </Button>
                )
              )}
              {activeStep === 3 && userType ==='training-provider' && (
                <Button variant="contained" color="primary" onClick={handleSubmit}>Register</Button>
              ) }
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
    </Container>
  );
};

export default SignUpPage;
