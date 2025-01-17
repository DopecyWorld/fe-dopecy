import { Box, Grid, TextField, IconButton, InputAdornment, useTheme, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Import the styles for the phone input
import loginbg from '../../assets/images/loginbg.svg';
import CustomTypography from '../../components/typography/CustomTypography';
import LogoLoginScreen from '../../components/logos/LogoLoginScreen';
import ContainedButton from '../../components/buttons/ContainedButton';
import OutlinedButton from '../../components/buttons/OutlinedButton';
import googleicon from '../../assets/images/googleicon.svg';
import facebookicon from '../../assets/images/facebookicon.svg';
import { Link } from 'react-router-dom';

function SignUp() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [emailError, setEmailError] = useState('');

    const navigate = useNavigate();

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Validate email
        if (!validateEmail(email)) {
            setEmailError("Invalid email address");
            return;
        } else {
            setEmailError("");
        }

        // Validate passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Handle sign up logic here
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Password:', password);
        console.log('Remember Me:', rememberMe);

        // Redirect to the "/congratulation" route after successful sign-up
        navigate("/congratulation");

    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleMouseDownConfirmPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Grid container sx={{ flex: 1 }}>
                <Grid item xs={12} md={7} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${loginbg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'relative',
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(0deg, #D1D1D1 20%, #093E11 100%)',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                opacity: 0.7,
                                p: 8,
                            }}
                        >
                            <Grid container spacing={4} sx={{ flexDirection: 'column', alignItems: 'start' }}>
                                <Grid item>
                                    <LogoLoginScreen />
                                </Grid>
                                <Grid item xs={8}>
                                    <CustomTypography
                                        text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                        style={{
                                            fontWeight: '400',
                                            fontSize: '26px',
                                            lineHeight: '36px',
                                            color: 'text.white',
                                            textAlign: 'left',
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: { xs: 2, md: 4 } }}>
                    <Box sx={{ width: '100%', maxWidth: 400 }}>
                        <CustomTypography
                            text='Create Account'
                            style={{
                                fontWeight: '600',
                                fontSize: isSmallScreen ? '28px' : '35px',
                                lineHeight: '28px',
                                textAlign: 'left',
                                color: 'text.titleblack',
                                mb: 2
                            }}
                        />
                        <CustomTypography
                            text='Lorem Ipsum is simply dummy text'
                            style={{
                                fontWeight: '400',
                                fontSize: isSmallScreen ? '16px' : '18px',
                                lineHeight: '28px',
                                textAlign: 'left',
                                color: 'text.titleblack',
                                mb: 4
                            }}
                        />
                        <form onSubmit={handleSubmit}>
                            <CustomTypography
                                text='Username'
                                style={{
                                    fontWeight: '400',
                                    fontSize: '14px',
                                    lineHeight: '0px',
                                    textAlign: 'left',
                                    color: 'text.graybg3',
                                    pl: 2
                                }}
                            />
                            <TextField
                                placeholder='Username'
                                variant="outlined"
                                fullWidth
                                type='text'
                                margin="normal"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                sx={{ mb: 4, height: '48px' }}
                            />

                            <CustomTypography
                                text='Email'
                                style={{
                                    fontWeight: '400',
                                    fontSize: '14px',
                                    lineHeight: '0px',
                                    textAlign: 'left',
                                    color: 'text.graybg3',
                                    pl: 2
                                }}
                            />
                            <TextField
                                placeholder='Email or phone number'
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                sx={{ mb: 4, height: '48px' }}
                                error={!!emailError}
                                helperText={emailError}
                            />
                            <CustomTypography
                                text='Phone Number'
                                style={{
                                    fontWeight: '400',
                                    fontSize: '14px',
                                    lineHeight: '0px',
                                    textAlign: 'left',
                                    color: 'text.graybg3',
                                    pl: 2,
                                    mb: 2
                                }}
                            />
                            <PhoneInput
                                country={'us'}
                                value={phone}
                                onChange={(phone) => setPhone(phone)}
                                inputStyle={{ width: '100%', height: '48px', color: 'black' }}
                            />

                            <CustomTypography
                                text='Password'
                                style={{
                                    fontWeight: '400',
                                    fontSize: '14px',
                                    lineHeight: '0px',
                                    textAlign: 'left',
                                    color: 'text.graybg3',
                                    pl: 2,
                                    mt: 4
                                }}
                            />
                            <TextField
                                sx={{ mb: 4, height: '48px' }}
                                placeholder='Enter password'
                                type={showPassword ? 'text' : 'password'}
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <CustomTypography
                                text='Confirm Password'
                                style={{
                                    fontWeight: '400',
                                    fontSize: '14px',
                                    lineHeight: '0px',
                                    textAlign: 'left',
                                    color: 'text.graybg3',
                                    pl: 2
                                }}
                            />
                            <TextField
                                sx={{ mb: 4, height: '48px' }}
                                placeholder='Confirm password'
                                type={showConfirmPassword ? 'text' : 'password'}
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle confirm password visibility"
                                                onClick={handleClickShowConfirmPassword}
                                                onMouseDown={handleMouseDownConfirmPassword}
                                                edge="end"
                                            >
                                                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <ContainedButton
                                style={{ height: '40px', borderRadius: '6px', p: '10px, 24px, 10px, 24px' }}
                                text='Sign Up'
                                type="submit"
                                fullWidth
                            />


                            <Box sx={{ display: "flex", my: 2, alignItems: "center", justifyContent: 'space-between' }}>
                                <Box sx={{ width: "30%", height: "1px", bgcolor: "text.graytextB3" }}></Box>
                                <CustomTypography
                                    text='Or Continue with'
                                    style={{
                                        fontWeight: '400',
                                        fontSize: '15px',
                                        lineHeight: '20px',
                                        color: 'text.graytextB3',
                                        cursor: 'pointer',
                                    }}
                                />
                                <Box sx={{ width: "30%", height: "1px", bgcolor: "text.graytextB3" }}></Box>
                            </Box>

                            <OutlinedButton
                                style={{ height: '40px', borderRadius: '6px', p: '10px, 24px, 10px, 24px', mb: 2 }}
                                text='Sign In with Google'
                                type="submit"
                                fullWidth
                                leftimage={<Box sx={{ mr: 2 }} component={'img'} src={googleicon} alt='googleicon' />}
                            />

                            <OutlinedButton
                                style={{ height: '40px', borderRadius: '6px', p: '10px, 24px, 10px, 24px', mb: 2 }}
                                text='Sign In with Facebook'
                                type="submit"
                                fullWidth
                                leftimage={<Box sx={{ mr: 2 }} component={'img'} src={facebookicon} alt='facebookicon' />}
                            />
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 2 }}>

                                <CustomTypography
                                    text="Already have an account?"
                                    style={{
                                        fontWeight: '400',
                                        fontSize: '12px',
                                        lineHeight: '20px',
                                        color: 'text.titleblack',
                                        mr: 0.5
                                    }}
                                />
                                <Link to='/login'>
                                    <CustomTypography
                                        text='Login Now'
                                        style={{
                                            fontWeight: '400',
                                            fontSize: '12px',
                                            lineHeight: '20px',
                                            color: 'primary.main',
                                            cursor: 'pointer',
                                        }}
                                    />
                                </Link>
                            </Box>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default SignUp;
