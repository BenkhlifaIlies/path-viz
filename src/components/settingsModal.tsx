import { useContext, useState } from 'react';
import styled from 'styled-components';

import Modal from './common/modal';
import Button from './common/button';
import DropDown from './common/dropDown';

import { Settings } from '../constants/types';
import { AppContext } from '../context/context';
import {
  algoOptions,
  animationoptions,
  mazeOptions,
} from '../constants/constants';

interface IProps {
  setSettingslModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

const SettingsModal = ({ setSettingslModalVisibility }: IProps) => {
  const { settings, updateSettings } = useContext(AppContext);

  const [currentSettings, setSettings] = useState<Settings>({
    ...settings,
  });

  const setField = (field: string, value: string | number) => {
    setSettings({
      ...currentSettings,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    updateSettings(currentSettings);
    setSettingslModalVisibility(false);
    // pushNotification('Settings updated.');
  };

  const handleClose = () => {
    setSettingslModalVisibility(false);
  };

  return (
    <Modal title="Settings" setOpenModal={setSettingslModalVisibility}>
      <Modal.Body>
        <Flex>
          <label htmlFor="algorithm">Algorithm</label>
          <div>
            <DropDown
              currentOption={currentSettings.algorithm}
              options={algoOptions}
              applyTo={'algorithm'}
              setField={setField}
            ></DropDown>
          </div>
        </Flex>
        <Flex>
          <label htmlFor="speed">Speed</label>
          <div>
            <DropDown
              currentOption={String(currentSettings.speed)}
              options={animationoptions}
              applyTo={'speed'}
              setField={setField}
            ></DropDown>
          </div>
        </Flex>
        <Flex>
          <label htmlFor="mazes and patterns">Mazes and patterns</label>
          <div>
            <DropDown
              currentOption={String(currentSettings.mazesAndPatterns)}
              options={mazeOptions}
              applyTo={'mazesAndPatterns'}
              setField={setField}
            ></DropDown>
          </div>
        </Flex>
      </Modal.Body>
      <Modal.Footer>
        <FlexEnd>
          <Button
            label="Cancel"
            variant="cancel"
            onClick={handleClose}
          ></Button>
          <Button
            label="Save"
            variant="primary"
            onClick={handleSubmit}
          ></Button>
        </FlexEnd>
      </Modal.Footer>
    </Modal>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-block: 1rem;
`;
const FlexEnd = styled(Flex)`
  justify-content: flex-end;
`;
export default SettingsModal;
