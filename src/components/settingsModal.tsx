// import { useState } from 'react';
import styled from 'styled-components';

import Modal from './common/modal';
import Button from './common/button';
import DropDown from './common/dropDown';
// import { Settings } from '../constants/types';

interface IProps {
  setSettingslModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

const SettingsModal = ({ setSettingslModalVisibility }: IProps) => {
  //   const [settings, setSettings] = useState<Settings>({
  //     algorithm,
  //     speed,
  //     startNodeRow,
  //     startNodeCol,
  //     finishNodeRow,
  //     finishNodeCol,
  //     mazesAndPatterns,
  //   });

  const setField = (field: string, value: string | number) => {
    // setSettings({
    //   ...settings,
    //   [field]: value,
    // });
    console.log(field, value);
  };

  const handleSubmit = () => {
    console.log('Settings updated.');
  };

  const handleClose = () => {
    console.log('Settings closed');
  };

  return (
    <Modal title="Settings" setOpenModal={setSettingslModalVisibility}>
      <Modal.Body>
        <Flex>
          <label htmlFor="algorithm">Algorithm</label>
          <div>
            <DropDown
              currentOption={'algo1'}
              options={['algo1', 'algo2']}
              applyTo={'algorithm'}
              setField={setField}
            ></DropDown>
          </div>
        </Flex>
        <Flex>
          <label htmlFor="speed">Speed</label>
          <div>
            <DropDown
              currentOption={String('200')}
              options={[100, 200, 500]}
              applyTo={'speed'}
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
