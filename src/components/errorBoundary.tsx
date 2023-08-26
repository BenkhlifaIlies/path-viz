import { Component, ReactNode } from 'react';
import styled from 'styled-components';
import Button from './common/button';
import { ImSad } from './common/icons';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}
const Wrapper = styled.section`
  min-width: fit-content;
  text-align: center;
  max-width: 18rem;
  margin: auto;
  padding-inline: 2rem;
  svg {
    font-size: 10rem;
    color: var(--nice-blue);
  }
  button {
    display: inline-flex !important;
    margin: 1rem 0;
    padding: 0.5rem;
    font-weight: bold;
    background-color: var(--nice-blue);
    border-color: var(--nice-blue);
    span {
      display: flex;
    }
  }
`;

const Title = styled.h3`
  margin-top: 2rem;
  font-size: larger;
  color: var(--very-dark-blue);
`;

const ErrorComponent = () => {
  return (
    <Wrapper>
      <ImSad />
      <Title>Sorry... An error occured, reload the page please.</Title>
      <Button
        variant="primary"
        label="Reload The App"
        onClick={() => window.location.reload()}
      ></Button>
    </Wrapper>
  );
};

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <ErrorComponent />
        </>
      );
    }

    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
