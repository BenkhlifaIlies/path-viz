import styled from 'styled-components';
import MainLayout from '../layouts/mainLayout';

const About = () => {
  return (
    <MainLayout>
      <Wrapper>
        <h1>About PathViz App</h1>
        <p>
          Path finding algorithms are methods for finding the shortest or most
          optimal path between two points in a graph, such as a map or a
          network. They are widely used in navigation, routing, artificial
          intelligence and many more fascinating applications.
        </p>
        <p>
          PathViz is a powerful tool that helps you visualize how different path
          finding algorithms work. With this app, you can see how algorithms
          like
          <b>
            {' '}
            Dijkstra’s algorithm, A* algorithm, Breadth-first search (BFS){' '}
          </b>
          and<b> Depth-first search (DFS) </b>work in real-time.
        </p>
        <p>
          This app is designed to be easy to use and understand. it
          automatically adapts to ur screen size and generates a grid
          accordingly, You can adjust the speed of the visualization to see how
          the algorithms perform.
        </p>
        <p>
          Whether you're a student learning about path finding algorithms for
          the first time or an experienced developer looking to optimize your
          code, Path-Viz can help you gain a deeper understanding of how these
          algorithms work.
        </p>
      </Wrapper>
    </MainLayout>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  padding-inline: 1rem;
  & h1 {
    padding: 1rem;
    width: fit-content;
    @media (min-width: 767px) {
      max-width: 80%;
    }
  }
  & p {
    padding-inline: 1rem;
    line-height: 1.5rem;
    text-align: justify;
    @media (min-width: 767px) {
      max-width: 80%;
    }
  }
`;

export default About;
