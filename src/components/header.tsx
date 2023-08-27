import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Button from './common/button';
import Logo from '../assets/svg/pathviz.svg';
import { RunSvg, ClearSvg, ResetSvg, CogSvg } from './common/icons';
import { useContext } from 'react';
import { AppContext } from '../context/context';
import { creaateInitialGrid, resetGrid } from '../helpers/gridgen';
import findPathByAlgorithm from '../algorithms/index';
import {
  animateShortestPath,
  getNodesInShortestPathOrder,
} from '../helpers/animation';

const Header = () => {
  const {
    values: grid,
    settings,
    updateValues,
    toggleModalVisibility,
    pushNotification,
  } = useContext(AppContext);

  const findPath = async () => {
    await findPathByAlgorithm(
      grid,
      settings.algorithm,
      settings.speed,
      grid[settings.startNodeRow][settings.startNodeCol],
      grid[settings.finishNodeRow][settings.finishNodeCol],
      updateValues,
    );
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(
      grid[settings.finishNodeRow][settings.finishNodeCol],
    );

    await animateShortestPath(grid, nodesInShortestPathOrder);

    const toastMsg = `${settings.algorithm} finished executing successfully`;
    pushNotification(toastMsg);
  };

  const handleReset = () => {
    updateValues(
      resetGrid(grid, settings.finishNodeRow, settings.finishNodeCol),
    );
  };

  const handleClear = () => {
    updateValues(
      creaateInitialGrid(
        grid.length,
        grid[0].length,
        settings.startNodeRow,
        settings.startNodeCol,
        settings.finishNodeRow,
        settings.finishNodeCol,
      ),
    );
  };

  const { pathname } = useLocation();

  return (
    <HeaderWrapper>
      <Wrapper>
        <StyledDiv>
          <Link to={'/'}>
            <img src={Logo} alt="PathViz logo" />
            <span> PathViz </span>
          </Link>
        </StyledDiv>
        {pathname !== '/' ? null : (
          <>
            <ControlPanel>
              <Button variant="control-panel" label="run" onClick={findPath}>
                <RunSvg />
              </Button>
              <Button
                variant="control-panel"
                label="reset"
                onClick={handleReset}
              >
                <ResetSvg />
              </Button>
              <Button
                variant="control-panel"
                label="clear"
                onClick={handleClear}
              >
                <ClearSvg />
              </Button>
              <Button
                variant="control-panel"
                label=""
                onClick={toggleModalVisibility}
              >
                <CogSvg />
              </Button>
            </ControlPanel>
          </>
        )}
      </Wrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  padding-block: 1rem;
  background-color: var(--gray97);
  box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1440px;
  margin-inline: auto;
  padding-inline: 1rem;
  button span {
    display: none;
  }
  @media (min-width: 767px) {
    button span {
      display: flex;
    }
  }
`;
const StyledDiv = styled.div`
  a {
    align-items: center;
    display: flex;
    text-decoration: none;
    color: inherit;
    cursor: inherit;
    &:hover {
      cursor: pointer;
    }
    img {
      height: 2rem;
      width: 2rem;
    }
    span {
      padding-left: 0.25rem;
      text-align: center;
      caret-color: transparent;
    }
  }
`;
const ControlPanel = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &:last-child {
    width: fit-content;
    padding: unset;
  }
`;

export default Header;
