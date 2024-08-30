import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardActions, Button, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const StudyGroupList = () => {
  const [studyGroups, setStudyGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudyGroups = async () => {
      // Configuration object for Axios request
      const config = {
        method: 'get',
        url: 'http://localhost:5000/api/study-groups/',
        headers: {}
      };

      try {
        const response = await axios(config);
        setStudyGroups(response.data);
      } catch (err) {
        console.error('Error fetching study groups:', err);
        setError('Failed to load study groups');
        toast.error('Failed to load study groups');
      } finally {
        setLoading(false);
      }
    };

    fetchStudyGroups();
  }, []);

  if (loading) return <Typography variant="h6">Loading...</Typography>;
  if (error) return <Typography variant="h6" color="error">{error}</Typography>;

  return (
    <Container>
      <Typography variant="h3" gutterBottom>Study Groups</Typography>
      <Link to="/study-groups/create">
        <Button variant="contained" color="primary" style={{ marginBottom: '20px' }}>
          Create New Study Group
        </Button>
      </Link>
      <Grid container spacing={4}>
        {studyGroups.length > 0 ? (
          studyGroups.map(group => (
            <Grid item xs={12} sm={6} md={4} key={group.study_group_id}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{group.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {group.description || 'No description provided'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to={`/study-groups/${group.study_group_id}`}>
                    <Button size="small" color="primary">View Details</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1">No study groups available.</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default StudyGroupList;
