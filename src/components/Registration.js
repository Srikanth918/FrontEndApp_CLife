////import axiosInstance from '../axiosConfig';
////import React, { useState } from 'react';
////import { useNavigate } from 'react-router-dom';
////import {
////  Typography,
////  Button,
////  Box,
////  Container,
////  Grid,
////  TextField,
////  Card,
////  CardHeader,
////  CardContent,
////  Checkbox,
////  FormControlLabel
////} from '@mui/material';
////
////export default function Registration() {
////  const [formData, setFormData] = useState({
////    firstName: '',
////    lastName: '',
////    email: '',
////    username: '',
////    password: '',
////    confirmPassword: '',
////    acceptedTerms: false,
////  });
////
////  const [error, setError] = useState('');
////  const navigate = useNavigate();
////
////  const handleChange = (e) => {
////    const { name, value, type, checked } = e.target;
////    setFormData({
////      ...formData,
////      [name]: type === 'checkbox' ? checked : value,
////    });
////  };
////
////  const validateEmail = (email) => {
////    // Simple email format validation
////    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
////  };
////
////  const handleSubmit = async (e) => {
////    e.preventDefault();
////    setError('');
////
////    // Validation
////    if (
////      !formData.firstName.trim() ||
////      !formData.lastName.trim() ||
////      !formData.email.trim() ||
////      !formData.username.trim() ||
////      !formData.password ||
////      !formData.confirmPassword
////    ) {
////      setError('Please fill in all required fields.');
////      return;
////    }
////
////    if (!validateEmail(formData.email)) {
////      setError('Please enter a valid email address.');
////      return;
////    }
////
////    if (formData.password.length < 6) {
////      setError('Password must be at least 6 characters long.');
////      return;
////    }
////
////    if (formData.password !== formData.confirmPassword) {
////      setError('Passwords do not match.');
////      return;
////    }
////
////    if (!formData.acceptedTerms) {
////      setError('You must accept the terms and conditions.');
////      return;
////    }
////
////    try {
////      const response = await axiosInstance.post(
////        '/register', // relative to baseURL in axiosConfig
////        {
////          firstName: formData.firstName,
////          lastName: formData.lastName,
////          email: formData.email,
////          username: formData.username,
////          password: formData.password,
////        },
////        {
////          headers: { 'Content-Type': 'application/json' },
////        }
////      );
////
////      if (response.status === 200 || response.status === 201) {
////        navigate('/registrationSuccess');
////      } else {
////        setError(response.data?.message || 'Registration failed.');
////      }
////    } catch (err) {
////      console.error(err);
////      setError(err.response?.data?.message || 'An error occurred during registration.');
////    }
////  };
////
////  return (
////    <Card sx={{ maxWidth: 700, margin: '30px auto', border: '3px solid #356' }}>
////      <CardHeader title="Register" />
////      <CardContent>
////        <Container maxWidth="xs">
////          <Box sx={{ mt: 0 }}>
////            <Typography variant="h4" align="center" gutterBottom>
////              Register
////            </Typography>
////            <form onSubmit={handleSubmit} noValidate>
////              <Grid container spacing={2}>
////                <Grid item xs={12} sm={6}>
////                  <TextField
////                    label="First Name"
////                    name="firstName"
////                    fullWidth
////                    required
////                    value={formData.firstName}
////                    onChange={handleChange}
////                    autoComplete="given-name"
////                  />
////                </Grid>
////                <Grid item xs={12} sm={6}>
////                  <TextField
////                    label="Last Name"
////                    name="lastName"
////                    fullWidth
////                    required
////                    value={formData.lastName}
////                    onChange={handleChange}
////                    autoComplete="family-name"
////                  />
////                </Grid>
////                <Grid item xs={12}>
////                  <TextField
////                    label="Email"
////                    name="email"
////                    type="email"
////                    fullWidth
////                    required
////                    value={formData.email}
////                    onChange={handleChange}
////                    autoComplete="email"
////                  />
////                </Grid>
////                <Grid item xs={12}>
////                  <TextField
////                    label="Username"
////                    name="username"
////                    fullWidth
////                    required
////                    value={formData.username}
////                    onChange={handleChange}
////                    autoComplete="username"
////                  />
////                </Grid>
////                <Grid item xs={12} sm={6}>
////                  <TextField
////                    label="Password"
////                    name="password"
////                    type="password"
////                    fullWidth
////                    required
////                    value={formData.password}
////                    onChange={handleChange}
////                    autoComplete="new-password"
////                  />
////                </Grid>
////                <Grid item xs={12} sm={6}>
////                  <TextField
////                    label="Confirm Password"
////                    name="confirmPassword"
////                    type="password"
////                    fullWidth
////                    required
////                    value={formData.confirmPassword}
////                    onChange={handleChange}
////                    autoComplete="new-password"
////                  />
////                </Grid>
////                <Grid item xs={12}>
////                  <FormControlLabel
////                    control={
////                      <Checkbox
////                        checked={formData.acceptedTerms}
////                        onChange={handleChange}
////                        name="acceptedTerms"
////                        color="primary"
////                      />
////                    }
////                    label="I accept the terms and conditions"
////                  />
////                </Grid>
////                {error && (
////                  <Grid item xs={12}>
////                    <Typography color="error" variant="body2" align="center">
////                      {error}
////                    </Typography>
////                  </Grid>
////                )}
////                <Grid item xs={12}>
////                  <Button type="submit" fullWidth variant="contained" color="primary">
////                    Register
////                  </Button>
////                </Grid>
////              </Grid>
////            </form>
////          </Box>
////        </Container>
////      </CardContent>
////    </Card>
////  );
////}
//
//import axiosInstance from '../axiosConfig';
//import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
//import {
//  Typography,
//  Button,
//  Box,
//  Container,
//  Grid,
//  TextField,
//  Card,
//  CardHeader,
//  CardContent,
//  Checkbox,
//  FormControlLabel,
//} from '@mui/material';
//
//export default function Registration() {
//  const [formData, setFormData] = useState({
//    firstName: '',
//    lastName: '',
//    email: '',
//    mobileNumber: '',
//    username: '',
//    password: '',
//    confirmPassword: '',
//    acceptedTerms: false,
//  });
//
//  const [otpSent, setOtpSent] = useState(false);
//  const [otp, setOtp] = useState('');
//  const [error, setError] = useState('');
//  const navigate = useNavigate();
//
//  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//
//  const validateMobile = (mobile) => /^[0-9]{10,15}$/.test(mobile);
//
//  const handleChange = (e) => {
//    const { name, value, type, checked } = e.target;
//    setFormData({
//      ...formData,
//      [name]: type === 'checkbox' ? checked : value,
//    });
//  };
//
//  const handleOtpChange = (e) => {
//    setOtp(e.target.value);
//  };
//
//  const sendOtp = async () => {
//    setError('');
//    // Validate email and mobile before sending OTP
//    if (!validateEmail(formData.email)) {
//      setError('Please enter a valid email to send OTP');
//      return;
//    }
//    if (!validateMobile(formData.mobileNumber)) {
//      setError('Please enter a valid mobile number to send OTP');
//      return;
//    }
//    try {
//      // Call backend to send OTP (to email and mobile)
//      await axiosInstance.post('/send-otp', {
//        email: formData.email,
//        mobileNumber: formData.mobileNumber,
//      });
//      setOtpSent(true);
//    } catch (err) {
//      setError('Failed to send OTP. Please try again.');
//    }
//  };
//
//  const handleVerifyAndRegister = async () => {
//    setError('');
//    // Validate all registration fields
//    if (
//      !formData.firstName.trim() ||
//      !formData.lastName.trim() ||
//      !validateEmail(formData.email) ||
//      !validateMobile(formData.mobileNumber) ||
//      !formData.username.trim() ||
//      !formData.password ||
//      !formData.confirmPassword
//    ) {
//      setError('Please fill all required fields with valid values.');
//      return;
//    }
//    if (formData.password.length < 6) {
//      setError('Password must be at least 6 characters.');
//      return;
//    }
//    if (formData.password !== formData.confirmPassword) {
//      setError('Passwords do not match.');
//      return;
//    }
//    if (!formData.acceptedTerms) {
//      setError('You must accept the terms and conditions.');
//      return;
//    }
//    if (otp.length === 0) {
//      setError('Please enter the OTP sent to your email and mobile.');
//      return;
//    }
//
//    try {
//      // Call backend to verify OTP and register user
//      const response = await axiosInstance.post(
//        '/verify-otp-register',
//        {
//          ...formData,
//          otp,
//        },
//        {
//          headers: { 'Content-Type': 'application/json' },
//        }
//      );
//      if (response.status === 200 || response.status === 201) {
//        navigate('/registrationSuccess');
//      } else {
//        setError(response.data?.message || 'Registration failed.');
//      }
//    } catch (err) {
//      setError(
//        err.response?.data?.message ||
//          'An error occurred during registration verification.'
//      );
//    }
//  };
//
//  return (
//    <Card sx={{ maxWidth: 700, margin: '30px auto', border: '3px solid #356' }}>
//      <CardHeader title="Register" />
//      <CardContent>
//        <Container maxWidth="xs">
//          <Box sx={{ mt: 0 }}>
//            <Typography variant="h4" align="center" gutterBottom>
//              Register
//            </Typography>
//            <form noValidate>
//              <Grid container spacing={2}>
//                <Grid item xs={12} sm={6}>
//                  <TextField
//                    label="First Name"
//                    name="firstName"
//                    fullWidth
//                    required
//                    value={formData.firstName}
//                    onChange={handleChange}
//                    autoComplete="given-name"
//                  />
//                </Grid>
//                <Grid item xs={12} sm={6}>
//                  <TextField
//                    label="Last Name"
//                    name="lastName"
//                    fullWidth
//                    required
//                    value={formData.lastName}
//                    onChange={handleChange}
//                    autoComplete="family-name"
//                  />
//                </Grid>
//                <Grid item xs={12}>
//                  <TextField
//                    label="Email"
//                    name="email"
//                    type="email"
//                    fullWidth
//                    required
//                    value={formData.email}
//                    onChange={handleChange}
//                    autoComplete="email"
//                    disabled={otpSent} // prevent change after sending OTP
//                  />
//                </Grid>
//                <Grid item xs={12}>
//                  <TextField
//                    label="Mobile Number"
//                    name="mobileNumber"
//                    fullWidth
//                    required
//                    value={formData.mobileNumber}
//                    onChange={handleChange}
//                    disabled={otpSent} // prevent change after sending OTP
//                  />
//                </Grid>
//                {!otpSent && (
//                  <Grid item xs={12}>
//                    <Button
//                      fullWidth
//                      variant="contained"
//                      color="secondary"
//                      onClick={sendOtp}
//                    >
//                      Send OTP
//                    </Button>
//                  </Grid>
//                )}
//                {otpSent && (
//                  <>
//                    <Grid item xs={12}>
//                      <TextField
//                        label="Enter OTP"
//                        name="otp"
//                        fullWidth
//                        value={otp}
//                        onChange={handleOtpChange}
//                        required
//                      />
//                    </Grid>
//                    <Grid item xs={12}>
//                      <TextField
//                        label="Username"
//                        name="username"
//                        fullWidth
//                        required
//                        value={formData.username}
//                        onChange={handleChange}
//                        autoComplete="username"
//                      />
//                    </Grid>
//                    <Grid item xs={12} sm={6}>
//                      <TextField
//                        label="Password"
//                        name="password"
//                        type="password"
//                        fullWidth
//                        required
//                        value={formData.password}
//                        onChange={handleChange}
//                        autoComplete="new-password"
//                      />
//                    </Grid>
//                    <Grid item xs={12} sm={6}>
//                      <TextField
//                        label="Confirm Password"
//                        name="confirmPassword"
//                        type="password"
//                        fullWidth
//                        required
//                        value={formData.confirmPassword}
//                        onChange={handleChange}
//                        autoComplete="new-password"
//                      />
//                    </Grid>
//                    <Grid item xs={12}>
//                      <FormControlLabel
//                        control={
//                          <Checkbox
//                            checked={formData.acceptedTerms}
//                            onChange={handleChange}
//                            name="acceptedTerms"
//                            color="primary"
//                          />
//                        }
//                        label="I accept the terms and conditions"
//                      />
//                    </Grid>
//                    {error && (
//                      <Grid item xs={12}>
//                        <Typography color="error" variant="body2" align="center">
//                          {error}
//                        </Typography>
//                      </Grid>
//                    )}
//                    <Grid item xs={12}>
//                      <Button
//                        fullWidth
//                        variant="contained"
//                        color="primary"
//                        onClick={handleVerifyAndRegister}
//                      >
//                        Verify OTP & Register
//                      </Button>
//                    </Grid>
//                  </>
//                )}
//              </Grid>
//            </form>
//          </Box>
//        </Container>
//      </CardContent>
//    </Card>
//  );
//}
//
import axiosInstance from '../axiosConfig';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Button,
  Box,
  Container,
  Grid,
  TextField,
  Card,
  CardHeader,
  CardContent,
  Checkbox,
  FormControlLabel,
} from '@mui/material';

export default function Registration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    username: '',
    password: '',
    confirmPassword: '',
    acceptedTerms: false,
  });

  // OTPs for email and mobile
  const [emailOtp, setEmailOtp] = useState('');
  const [mobileOtp, setMobileOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateMobile = (mobile) => /^\+\d{10,15}$/.test(mobile);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleEmailOtpChange = (e) => setEmailOtp(e.target.value);
  const handleMobileOtpChange = (e) => setMobileOtp(e.target.value);

  const sendOtp = async () => {
    setError('');
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email to send OTP');
      return;
    }
    if (!validateMobile(formData.mobileNumber)) {
      setError('Please enter a valid mobile number to send OTP');
      return;
    }
    try {
      await axiosInstance.post('/send-otp', {
        email: formData.email,
        mobileNumber: formData.mobileNumber,
      });
      setOtpSent(true);
    } catch (err) {
      setError('Failed to send OTP. Please try again.');
    }
  };

  const handleVerifyAndRegister = async () => {
    setError('');
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !validateEmail(formData.email) ||
      !validateMobile(formData.mobileNumber) ||
      !formData.username.trim() ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError('Please fill all required fields with valid values.');
      return;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (!formData.acceptedTerms) {
      setError('You must accept the terms and conditions.');
      return;
    }
    if (emailOtp.length === 0 || mobileOtp.length === 0) {
      setError('Please enter both email and mobile OTPs.');
      return;
    }

    try {
      const response = await axiosInstance.post(
        '/verify-otp-register',
        {
          ...formData,
          emailOtp,
          mobileOtp,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      if (response.status === 200 || response.status === 201) {
        navigate('/registrationSuccess');
      } else {
        setError(response.data?.message || 'Registration failed.');
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          'An error occurred during registration verification.'
      );
    }
  };

  return (
    <Card sx={{ maxWidth: 700, margin: '30px auto', border: '3px solid #356' }}>
      <CardHeader title="Register" />
      <CardContent>
        <Container maxWidth="xs">
          <Box sx={{ mt: 0 }}>
            <Typography variant="h4" align="center" gutterBottom>
              Register
            </Typography>
            <form noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First Name"
                    name="firstName"
                    fullWidth
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    name="lastName"
                    fullWidth
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    fullWidth
                    required
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    disabled={otpSent}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Mobile Number"
                    name="mobileNumber"
                    fullWidth
                    required
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    disabled={otpSent}
                  />
                </Grid>
                {!otpSent && (
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="secondary"
                      onClick={sendOtp}
                    >
                      Send OTP
                    </Button>
                  </Grid>
                )}
                {otpSent && (
                  <>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Email OTP"
                        name="emailOtp"
                        fullWidth
                        required
                        value={emailOtp}
                        onChange={handleEmailOtpChange}
                        placeholder="Enter OTP sent to email"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Mobile OTP"
                        name="mobileOtp"
                        fullWidth
                        required
                        value={mobileOtp}
                        onChange={handleMobileOtpChange}
                        placeholder="Enter OTP sent to mobile"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Username"
                        name="username"
                        fullWidth
                        required
                        value={formData.username}
                        onChange={handleChange}
                        autoComplete="username"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Password"
                        name="password"
                        type="password"
                        fullWidth
                        required
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete="new-password"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        fullWidth
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        autoComplete="new-password"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formData.acceptedTerms}
                            onChange={handleChange}
                            name="acceptedTerms"
                            color="primary"
                          />
                        }
                        label="I accept the terms and conditions"
                      />
                    </Grid>
                    {error && (
                      <Grid item xs={12}>
                        <Typography color="error" variant="body2" align="center">
                          {error}
                        </Typography>
                      </Grid>
                    )}
                    <Grid item xs={12}>
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleVerifyAndRegister}
                      >
                        Verify OTP & Register
                      </Button>
                    </Grid>
                  </>
                )}
                {!otpSent && error && (
                  <Grid item xs={12}>
                    <Typography color="error" variant="body2" align="center">
                      {error}
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </form>
          </Box>
        </Container>
      </CardContent>
    </Card>
  );
}

