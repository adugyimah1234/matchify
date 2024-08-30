import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css'; // Global CSS
import App from './App'; // Root component of your app
import { store, persistor } from './store'; // Redux store and persistor
import reportWebVitals from './reportWebVitals'; // Performance measurement
import 'bootstrap/dist/css/bootstrap.css'; // Bootstrap styles
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Material-UI theming

// Create a Material-UI theme
const theme = createTheme({
    palette: {
      primary: {
        main: '#d44e1c', // Primary color
      },
      secondary: {
        main: "#f9f1f0" // Secondary color
      }
    }
});

// Render the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// React.StrictMode is commented out, which can be uncommented for development to help identify issues
root.render(
    <Provider store={store}> {/* Provide Redux store to the app */}
      <PersistGate loading={null} persistor={persistor}> {/* Handle Redux Persist rehydration */}
        <ThemeProvider theme={theme}> {/* Apply Material-UI theme */}
          <App /> {/* Render the root component */}
        </ThemeProvider>
      </PersistGate>
    </Provider>
);

// Measure performance and send results to an analytics endpoint if needed
reportWebVitals();
