import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Container, Typography, CircularProgress, Box } from '@mui/material';
import { toast } from 'react-hot-toast';

const StudyGroupForm = () => {
    const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const url = 'http://localhost:5000/api/study-groups';
    
    try {
      // Configuration object for Axios request
      const config = {
        method: 'post',
        url,
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({ name, description })
      };

      // Making the Axios request
      const response = await axios(config);
      console.log(JSON.stringify(response.data));
      setName('');
      setDescription('');
      toast.success('Study group created successfully!');
      navigate("/study-groups");
    } catch (error) {
      console.error('Error saving study group:', error);
      setError('Failed to save study group');
    //   toast.error('Failed to save study group');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Create New Study Group
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        {error && <Typography color="error" variant="body2" gutterBottom>{error}</Typography>}
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          margin="normal"
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
          sx={{ mt: 2 }}
        >
          {loading ? <CircularProgress size={24} /> : 'Save'}
        </Button>
      </Box>
    </Container>
  );
};

export default StudyGroupForm;
