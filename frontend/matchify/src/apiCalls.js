export const postCall = async (url, body) => {
  try {
      const options = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(body)
      };

      const token = localStorage.getItem('token');
      if (token) {
          options.headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(url, options);

      if (response.ok) {
          // Return the parsed JSON data
          const responseData = await response.json();
          return responseData;
      } else {
          // Handle the error response
          const errorData = await response.json();
          console.error('Failed to post data:', errorData);
          throw new Error(`Error ${response.status}: ${errorData.message || 'Failed to post'}`);
      }
  } catch (error) {
      console.error('Error:', error);
      throw error; // Re-throw error for handling in saga or other parts of the app
  }
};

export const getCall = async (url) => {
  try {
      const token = localStorage.getItem('token');
      const response = await fetch(url, {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json' // Add this to match your server's expected headers
          }
      });

      if (response.ok) {
          // Return the parsed JSON data
          const responseData = await response.json();
          return responseData;
      } else {
          // Handle the error response
          const errorData = await response.json();
          console.error('Failed to fetch data:', errorData);
          throw new Error(`Error ${response.status}: ${errorData.message || 'Failed to fetch'}`);
      }
  } catch (error) {
      console.error('Error in API Call:', error);
      throw error; // Re-throw error for handling in saga or other parts of the app
  }
};
