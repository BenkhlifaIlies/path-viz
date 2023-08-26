import { Router, Routes, Route } from 'react-router-dom';
import './assets/styles/App.css';
import MainLayout from './layouts/mainLayout';

function MyApp() {
  return (
    <>
      <MainLayout>
        <h1>Hello World!</h1>
      </MainLayout>
    </>
  );
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyApp />} />
      </Routes>
    </Router>
  );
};

export default App;
