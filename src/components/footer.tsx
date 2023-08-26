import styled from 'styled-components';
import { Link } from 'react-router-dom';

import TwitterSvg from '../assets/svg/twitter.svg';
import LinkedinSvg from '../assets/svg/linkedin.svg';
import GithubSvg from '../assets/svg/github.svg';

const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <Container>
          <StyledUl className="list-style-none d-flex flex-items-center mb-3 mb-sm-0 lh-condensed-ultra">
            <StyledLi>
              <a href="https://twitter.com/IlyesBenkhlifa" target="_blank">
                <img
                  src={TwitterSvg}
                  height="18"
                  width="22"
                  alt="Twitter icon"
                  loading="lazy"
                  decoding="async"
                />
                <span className="sr-only">My Twitter</span>
              </a>
            </StyledLi>
            <StyledLi>
              <a
                href="https://www.linkedin.com/in/ilyesbenkhelifa/"
                target="_blank"
              >
                <img
                  src={LinkedinSvg}
                  height="18"
                  width="22"
                  alt="Linkedin icon"
                  loading="lazy"
                  decoding="async"
                />
                <span className="sr-only">My LinkedIn</span>
              </a>
            </StyledLi>
            <StyledLi>
              <a href="https://github.com/BenkhlifaIlies" target="_blank">
                <img
                  src={GithubSvg}
                  height="18"
                  width="22"
                  alt="Github icon"
                  loading="lazy"
                  decoding="async"
                />
                <span className="sr-only">My GitHub</span>
              </a>
            </StyledLi>
          </StyledUl>

          <nav>
            <StyledUl>
              <StyledLi>
                <Link to={'/about'}>About</Link>
              </StyledLi>
              <StyledLi>
                <a
                  href="https://github.com/BenkhlifaIlies/path-viz"
                  target="_blank"
                >
                  View Source
                </a>
              </StyledLi>
              <StyledLi>
                <a href="mailto:theiliesbenkhlifa@gmail.com">Contact</a>
              </StyledLi>
              <StyledLi>Blog</StyledLi>
            </StyledUl>
          </nav>
        </Container>
        <StyledHr />
        <StyledP>
          &copy; {new Date().getFullYear()} Benkhelifa Ilyes. | Made with
          <StyledSpan> &#9829;</StyledSpan> by Benkhelifa Ilyes.
        </StyledP>
      </Wrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: var(--gray97);
  padding: 20px;
  font-size: 15px;
  line-height: 24px;
  img {
    display: block;
    border-style: none;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    word-wrap: normal;
    border: 0;
  }
`;
const Wrapper = styled.div`
  max-width: 1440px;
  margin-inline: auto;
  padding-inline: 1rem;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 767px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    max-width: 1200px;
  }
`;
const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: baseline;
  text-align: center;
  padding-inline: unset;
  list-style: none;
  @media (min-width: 767px) {
    justify-content: space-evenly;
  }
`;
const StyledLi = styled.li`
  display: list-item;
  margin-right: 1rem;
  font-weight: 100;
  font-size: small;
  a {
    color: inherit;
    text-decoration: none;
  }
`;
const StyledHr = styled.hr`
  border-top-color: var(--gray);
`;
const StyledP = styled.p`
  font-size: 12px;
  font-weight: lighter;
  text-align: center;
  margin: 0;
`;
const StyledSpan = styled.span`
  color: var(--pure-red);
`;

export default Footer;
