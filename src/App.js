import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import TaskList from './components/TaskList'; // Assuming your TaskList component is in the components folder
// import AddTask from './components/AddTask'; // AddTask component to create new tasks
import Header from './components/Header'; // A simple header component
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Container>
                    <Header /> {/* Render the header */}
                    <Routes>
                        <Route path="/" element={<TaskList />} />
                        {/* <Route path="/add-task" element={<AddTask />} /> */}
                        {/* You can add more routes here for editing tasks, etc. */}
                    </Routes>
                </Container>
            </Router>
        </ThemeProvider>
    );
};

export default App;
