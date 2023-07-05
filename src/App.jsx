import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConnectedHomepage from './components/HomePage';
import Details from './components/Details';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConnectedHomepage />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;