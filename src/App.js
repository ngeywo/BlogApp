import Navbar from './Navbar.js';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create.js';
import PostDetails from './PostDetails.js';
import NotFound from './NotFound.js';



function App() {


  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="posts/:id" element={<PostDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
