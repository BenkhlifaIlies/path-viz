import { useState, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/mainLayout';
import TutorialModal from './components/tutorialModal';

import './assets/styles/App.css';
import SettingsModal from './components/settingsModal';
import PageNotFound from './pages/404';
import About from './pages/about';
import { CellType, ContextType, Settings, ToastType } from './constants/types';
import { AppContext } from './context/context';
import Toast from './components/common/toast';
import NodeGrid from './components/nodeGrid';
import { creaateInitialGrid } from './helpers/gridgen';
import {
  finishNodeCol,
  finishNodeRow,
  initSettingsObj,
  startNodeCol,
  startNodeRow,
} from './constants/constants';
import useWindowSize from './hooks/useWindowSize';

function MyApp() {
  const [tutorialModalVisibility, setTutorialModalVisibility] =
    useState<boolean>(false);
  const [settingslModalVisibility, setSettingslModalVisibility] =
    useState<boolean>(false);
  const [notif, setNotif] = useState<ToastType[]>([]);

  const [Columns, Rows] = useWindowSize();
  const [settings, updateSettings] = useState<Settings>(initSettingsObj);

  const [values, updateValues] = useState<CellType[][]>(
    creaateInitialGrid(
      Rows,
      Columns,
      startNodeRow,
      startNodeCol,
      finishNodeRow,
      finishNodeCol,
    ),
  );

  useLayoutEffect(() => {
    if (window.sessionStorage.getItem('show-tutorial') !== 'false') {
      setTutorialModalVisibility(true);
      window.sessionStorage.setItem('show-tutorial', 'false');
    }
  }, []);

  const toggleModalVisibility = () => {
    setSettingslModalVisibility(!settingslModalVisibility);
  };

  const pushNotification = (message: string) => {
    setNotif([
      ...notif,
      {
        id: notif.length + 1,
        message,
      },
    ]);
  };

  const initContext: ContextType = {
    values,
    updateValues,
    settingslModalVisibility,
    toggleModalVisibility,
    settings,
    updateSettings,
    pushNotification,
  };

  return (
    <AppContext.Provider value={initContext}>
      <MainLayout>
        <NodeGrid columns={Columns} rows={Rows} />
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
        <Toast toastlist={notif} setList={setNotif} />
      </MainLayout>
    </AppContext.Provider>
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
