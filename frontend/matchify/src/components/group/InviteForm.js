import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, CircularProgress, Box } from '@mui/material';
import { toast } from 'react-hot-toast';

const InviteForm = ({ studyGroupId }) => {
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post('/api/study-groups/invite', { userId, studyGroupId });
      toast.success('User invited successfully!');
      setUserId(''); // Clear input field after successful invite
    } catch (error) {
      console.error('Error inviting user:', error);
      toast.error('Failed to invite user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Typography variant="h6" gutterBottom>Invite User</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          label="User ID"
          variant="outlined"
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
          margin="normal"
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
          sx={{ mt: 2 }}
        >
          {loading ? <CircularProgress size={24} /> : 'Invite'}
        </Button>
      </Box>
    </Container>
  );
};

export default InviteForm;
