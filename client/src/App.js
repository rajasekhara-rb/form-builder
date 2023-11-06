import logo from './logo.svg';
import './App.css';
import FormBuilder from './components/FormBuilder';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormPage from './components/FormPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<FormPage />}>
            <Route path='' element={<FormBuilder />} />
          </Route>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </Router>
      {/* <FormBuilder /> */}
    </div>
  );
}

export default App;
