import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Message from './components/Message';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Message />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
