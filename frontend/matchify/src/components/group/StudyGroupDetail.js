import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Card, CardContent, Typography, Button, CircularProgress } from '@mui/material';
import InviteForm from './InviteForm';
import { toast } from 'react-hot-toast';

const StudyGroupDetail = () => {
  const { id } = useParams();
  const [studyGroup, setStudyGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudyGroup = async () => {
      // Axios configuration object integrated
      const config = {
        method: 'get',
        url: `http://localhost:5000/api/study-groups/${id}`,
        headers: {}
      };

      try {
        const response = await axios(config);
        setStudyGroup(response.data);
      } catch (err) {
        console.error('Error fetching study group:', err);
        setError('Failed to load study group details');
        toast.error('Failed to load study group details');
      } finally {
        setLoading(false);
      }
    };

    fetchStudyGroup();
  }, [id]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography variant="h6" color="error">{error}</Typography>;
  if (!studyGroup) return <Typography variant="h6">Study group not found.</Typography>;

  return (
    <Container>
      <Typography variant="h3" gutterBottom>{studyGroup.name}</Typography>
      <Card>
        <CardContent>
          <Typography variant="h6">Description</Typography>
          <Typography>{studyGroup.description || 'No description provided'}</Typography>
        </CardContent>
      </Card>
      <InviteForm studyGroupId={id} />
    </Container>
  );
};

export default StudyGroupDetail;
