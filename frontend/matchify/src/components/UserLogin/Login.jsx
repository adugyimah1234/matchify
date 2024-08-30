import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography, Container, Grid, CircularProgress } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import toast from "react-hot-toast";
import { getAPIURL } from '../../utils/common';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const checkLoggedIn = () => {
            const sessionToken = localStorage.getItem('token');
            if (sessionToken) {
                navigate('/dashboard');
            }
        };

        checkLoggedIn();
    }, [navigate]);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(
                'http://localhost:5000/api/users/login', // API URL
                { email, password },
                { headers: { 'Content-Type': 'application/json' } }
            );

            if (response.status === 200) {
                const { jwt } = response.data;
                storeToken(jwt);
                toast.success('Login successful!');
                navigate('/dashboard');
            } else {
                setErrorMessage('Login failed. Please check your credentials and try again.');
                toast.error('Login failed.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            setErrorMessage('An error occurred. Please try again later.');
            toast.error('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const storeToken = (token) => {
        localStorage.setItem('token', token);
    };

    return (
        <Container maxWidth="xl">
            <Grid container justifyContent="center" alignItems="center" spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h2" gutterBottom color="#d44e1c" style={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5vh',
                    }}>
                        Collabora-Learn
                    </Typography>

                    <div className="login-container">
                        <form onSubmit={handleSubmit} style={{
                            marginTop: '10vh', width: '30vw', padding: 40
                        }}>
                            {errorMessage && (
                                <Typography variant="body2" color="error">
                                    {errorMessage}
                                </Typography>
                            )}
                            <TextField
                                fullWidth
                                type="email"
                                name="email"
                                label="E-Mail"
                                placeholder="youremailid@dal.ca"
                                variant="outlined"
                                margin="normal"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                            <TextField
                                fullWidth
                                type="password"
                                name="password"
                                label="Password"
                                variant="outlined"
                                margin="normal"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                            <Button 
                                type="submit" 
                                variant="contained" 
                                color="primary" 
                                fullWidth 
                                style={{ marginTop: 20 }}
                                disabled={loading}
                            >
                                {loading ? <CircularProgress size={24} /> : 'Login'}
                            </Button>
                            <Typography variant="body2" align="center" paddingTop={2} gutterBottom>
                                New to collaboralearn?
                                <Link to={"/register"} style={{ marginLeft: 5 }}>Click here</Link>
                            </Typography>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
