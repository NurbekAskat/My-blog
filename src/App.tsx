import { Container, Typography } from '@mui/material';
import NavBar from './components/NavBar/NavBar';
import MutatePost from './pages/MutatePost/MutatePost';
import { Route, Routes } from 'react-router-dom';
import Posts from './pages/Posts/Posts';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';


function App() {

  return (
    <div className="">
      <header>
        <NavBar />
      </header>
      <Container component="main">
        <Routes>
          <Route path="/" element={<Posts/>}/>
          <Route path="/new-post" element={<MutatePost/>}/>
          <Route path="posts/:id/edit" element={<MutatePost/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="*" element={<Typography variant="h2">Not found</Typography>}/>
        </Routes>
      </Container>
    </div >
  );
}

export default App;
