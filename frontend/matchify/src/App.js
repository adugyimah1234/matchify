// Import necessary modules
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Container, CssBaseline } from '@mui/material';

// Import your components
import CreateEvent from './components/CreateEvent/CreateEvent';
import UserLogin from './components/UserLogin/Login';
import About from './components/About';
import Register from './components/UserRegistration/Register';
import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard/dashboard';
import ChatPage from './components/Chat/ChatPage';
import ViewEvent from './components/ViewEvent/VEvent';
import NavigationBar from './components/NavigationBar';  // Import the navigation bar component
import StudyGroupList from './components/group/StudyGroupList';
import StudyGroupDetail from './components/group/StudyGroupDetail';
import StudyGroupForm from './components/group/StudyGroupForm';
import UserInterestForm from './components/UserInterests/UserInterestForm';

// Study Group Components


export default function App() {
  return (
    <>
      <Router>
        <CssBaseline /> {/* Ensure consistent baseline styling */}
        <NavigationBar /> {/* Navigation bar at the top */}
        <Container maxWidth="lg" style={{ marginTop: '20px' }}>
          <Routes>
            {/* Existing routes */}
            <Route path="/" element={<UserLogin />} />
            <Route path="/view-event" element={<ViewEvent />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/create-event" element={<CreateEvent />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/user-interests" element={<UserInterestForm />} />
            
            {/* Study Group routes */}
            <Route path="/study-groups" element={<StudyGroupList />} />
            <Route path="/study-groups/create" element={<StudyGroupForm />} />
            <Route path="/study-groups/:id" element={<StudyGroupDetail />} />
          </Routes>
        </Container>
      </Router>
      <Toaster position="bottom-right" /> {/* Positioning the toaster */}
    </>
  );
}
