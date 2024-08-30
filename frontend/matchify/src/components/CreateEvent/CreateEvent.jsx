import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Grid, CircularProgress } from '@mui/material';
import axios from 'axios'; // Import Axios
import toast from "react-hot-toast";
import { getAPIURL } from '../../utils/common';
import { useNavigate } from 'react-router-dom';

const CreateEvent = () => {
  const navigate = useNavigate();

  const [eventName, setEventName] = useState('');
  const [description, setDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [additionalInstructions, setAdditionalInstructions] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);


    // Retrieve creatorId from local storage
    const creatorId = localStorage.getItem('user_id');

    if (!creatorId) {
      toast.error('User ID not found. Please log in.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        getAPIURL('api/events/create-event'),
        {
          eventName,
          description,
          eventDate,
          startTime,
          endTime,
          additionalInstructions,
          address,
          pincode,
          city,
          creatorId, // Include creatorId in the payload
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include token for authorization
          },
        }
      );

      if (response.status === 201) {
        toast.success('Event created successfully!');
        navigate("/dashboard");

        // Optionally, redirect or reset form here
      } else {
        toast.error('Failed to create event.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xl">
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2" gutterBottom color="#d44e1c" style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5vh',
          }}>
            Create Event
          </Typography>

          <div className="create-event-container">
            <form onSubmit={handleSubmit} style={{
              marginTop: '10vh', width: '50vw', padding: 40
            }}>
              <TextField
                fullWidth
                type="text"
                name="eventName"
                label="Event Name"
                variant="outlined"
                margin="normal"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                required
              />
              <TextField
                fullWidth
                type="text"
                name="description"
                label="Description"
                variant="outlined"
                margin="normal"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
              <TextField
                fullWidth
                type="date"
                name="eventDate"
                label="Event Date"
                variant="outlined"
                margin="normal"
                InputLabelProps={{ shrink: true }}
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                required
              />
              <TextField
                fullWidth
                type="time"
                name="startTime"
                label="Start Time"
                variant="outlined"
                margin="normal"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
              />
              <TextField
                fullWidth
                type="time"
                name="endTime"
                label="End Time"
                variant="outlined"
                margin="normal"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                required
              />
              <TextField
                fullWidth
                type="text"
                name="additionalInstructions"
                label="Additional Instructions"
                variant="outlined"
                margin="normal"
                value={additionalInstructions}
                onChange={(e) => setAdditionalInstructions(e.target.value)}
              />
              <TextField
                fullWidth
                type="text"
                name="address"
                label="Address"
                variant="outlined"
                margin="normal"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <TextField
                fullWidth
                type="text"
                name="pincode"
                label="Pincode"
                variant="outlined"
                margin="normal"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                required
              />
              <TextField
                fullWidth
                type="text"
                name="city"
                label="City"
                variant="outlined"
                margin="normal"
                value={city}
                onChange={(e) => setCity(e.target.value)}
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
                {loading ? <CircularProgress size={24} /> : 'Create Event'}
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateEvent;
