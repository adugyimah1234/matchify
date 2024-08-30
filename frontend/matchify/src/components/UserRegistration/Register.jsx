import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, TextField, Button, Typography } from '@mui/material';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { validateEmail, validatePassword } from '../helper'; // Import the required validation functions

const Register = (props) => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        if (props.registerStatus === 200) {
            toast.success('Registration Successful');
            navigate("/user-interests");
        }
    }, [props.registerStatus]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        const newErrors = { ...errors };
        if (name === 'name') {
            setName(value);
            newErrors.name = value.trim() !== '' ? '' : 'Name is required.';
        } else if (name === 'email') {
            setEmail(value);
            newErrors.email = validateEmail(value) ? '' : 'Invalid Email';
        } else if (name === 'password') {
            setPassword(value);
            newErrors.password = validatePassword(value) ? '' : 'Password must contain 8 characters with at least one uppercase, one lowercase, one digit, and one special character.';
        }
        setErrors(newErrors);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = {
            name: name.trim() !== '' ? '' : 'Name is required.',
            email: validateEmail(email) ? '' : 'Invalid Email',
            password: validatePassword(password) ? '' : 'Password must contain 8 characters with at least one uppercase, one lowercase, one digit, and one special character.',
        };

        setErrors(newErrors);

        if (isValidForm(newErrors)) {
            axios.post('http://localhost:5000/api/users/register', {
                name,
                email,
                password
            })
            .then(response => {
                toast.success('Registration Successful');
                navigate("/user-interests");
            })
            .catch(error => {
                toast.error('Registration failed. Please try again.');
                console.error(error);
            });
        } else {
            toast.error('Please check the form for errors.');
        }
    };

    const isValidForm = (errors) => {
        for (const key in errors) {
            if (errors[key]) {
                return false;
            }
        }
        return true;
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h2" gutterBottom color="#d44e1c" className="roboto-medium" style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5vh',
            }}>
                Collabora-Learn
            </Typography>
            <form onSubmit={handleSubmit} style={{ padding: 40, minWidth: "40vw" }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            name="name"
                            value={name}
                            onChange={handleChange}
                            error={!!errors.name}
                            helperText={errors.name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Email Address"
                            variant="outlined"
                            fullWidth
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Password"
                            variant="outlined"
                            fullWidth
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            error={!!errors.password}
                            helperText={errors.password}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" type="submit">
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

const mapStateToProps = (state) => ({
    registerStatus: state.registerStatus
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
