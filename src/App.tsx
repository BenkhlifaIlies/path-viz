import { useState, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/mainLayout';
import TutorialModal from './components/tutorialModal';

import './assets/styles/App.css';
import SettingsModal from './components/settingsModal';
import PageNotFound from './pages/404';
import About from './pages/about';

function MyApp() {
  const [tutorialModalVisibility, setTutorialModalVisibility] =
    useState<boolean>(false);
  const [settingslModalVisibility, setSettingslModalVisibility] =
    useState<boolean>(false);

  useLayoutEffect(() => {
    if (window.sessionStorage.getItem('show-tutorial') !== 'false') {
      setTutorialModalVisibility(true);
      window.sessionStorage.setItem('show-tutorial', 'false');
    }
  }, []);

  return (
    <>
      <MainLayout>
        <h1>Hello World!</h1>
        {tutorialModalVisibility && (
          <TutorialModal
            setTutorialModalVisibility={setTutorialModalVisibility}
          />
        )}
        {settingslModalVisibility && (
          <SettingsModal
            setSettingslModalVisibility={setSettingslModalVisibility}
          />
        )}
      </MainLayout>
    </>
  );
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyApp />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
