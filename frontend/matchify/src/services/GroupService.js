import axios from 'axios';

const API_URL = 'http://localhost:5000/api/study-groups';

// Function to create a new study group
export const createStudyGroup = async (studyGroupData) => {
  try {
    const response = await axios.post(API_URL, studyGroupData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error creating study group:', error);
    throw error;
  }
};

// Function to get all study groups
export const getAllStudyGroups = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching study groups:', error);
    throw error;
  }
};

// Function to get a study group by ID
export const getStudyGroupById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching study group by ID:', error);
    throw error;
  }
};
