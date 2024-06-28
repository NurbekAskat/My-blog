import { Container, Typography } from '@mui/material';
import NavBar from './components/NavBar/NavBar';
import NewPost from './pages/NewPost/NewPost';
import { Route, Routes } from 'react-router-dom';
import Posts from './pages/Posts/Posts';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Container component="main">
        <Routes>
          <Route path="/" element={<Posts/>}/>
          <Route path="/new-post" element={<NewPost/>}/>
          <Route path="*" element={<Typography variant="h2">Not found</Typography>}/>
        </Routes>
      </Container>
    </>
  );
}

export default App;
