import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
      const checkAuth = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/'); // Redirect to login page if token is not set
        }
        setLoading(false); // Stop loading after check
      };
      
      checkAuth();
    }, [navigate]);

    if (loading) {
      return <div>Loading...</div>; // Optionally add a spinner here
    }

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
