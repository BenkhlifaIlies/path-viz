import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './common/button';
import Modal from './common/modal';
import { InstallSvg, CogSvg } from './common/icons';

interface IProps {
  setTutorialModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}
const FirstPage = () => {
  return (
    <>
      <p>
        At its core, a pathfinding algorithm seeks to
        <b> find the shortest path</b> between two points. PathViz visualizes
        various <b>path finding algorithms,</b>can be
        <b> installed </b> <InstallSvg /> and <b>used offline</b>.
      </p>
      <p>
        I sincerely hope you enjoy experimenting with this visualization tool as
        much as I enjoyed creating it!
      </p>
    </>
  );
};

const SecondPage = () => {
  return (
    <ul>
      <li>
        <b>Move the start and target nodes</b> by dragging them. Controle the
        execution<b> speed </b>from the settings menu.
      </li>
      <li>
        Click on the board to manually<b> add a "walls"</b>. You can
        <b> reset </b>the board and
        <b> maintain </b>the walls, or<b> completely clear</b> the board.
      </li>
      <li>
        Find out more in the settings menu <CogSvg />.
      </li>
    </ul>
  );
};

const TutorialModal = ({ setTutorialModalVisibility }: IProps) => {
  const [pageCounter, setPageCounter] = useState<number>(1);

  const handleNext = () => {
    if (pageCounter === 2) setTutorialModalVisibility(false);
    setPageCounter(pageCounter + 1);
  };

  const handlePrevious = () => {
    setPageCounter(pageCounter - 1);
  };

  const ModalContent = () => {
    return pageCounter === 1 ? (
      <FirstPage />
    ) : pageCounter === 2 ? (
      <SecondPage />
    ) : null;
  };

  return (
    <Modal
      title="Welcome to PathViz!"
      setOpenModal={setTutorialModalVisibility}
    >
      <Modal.Body>
        <ModalContent />
      </Modal.Body>
      <Modal.Footer>
        <StyledDiv>
          {pageCounter !== 1 && (
            <Button
              label="Previous"
              variant="primary"
              onClick={handlePrevious}
            />
          )}
          <Button
            label={pageCounter < 2 ? `Next` : `Close`}
            variant="primary"
            onClick={handleNext}
          />
        </StyledDiv>
      </Modal.Footer>
    </Modal>
  );
};

export default TutorialModal;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 1rem;
  span {
    display: flex;
  }
`;
