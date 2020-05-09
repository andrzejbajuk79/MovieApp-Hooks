import styled from 'styled-components';

// grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));

// przy uzyciu auto fit jeden komponent rozciaga sie na cala szerokosc
// grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
// grid-row-gap: 2rem;
// grid-column-gap: 30px;
// display: grid;

// color: var(--mainWhite);
//  letter-spacing: var(--mainSpacing);

export const StyledGrid = styled.div`
 min-width: 1260px;
 margin: 0 20px;
 padding: 0 20px;
 h1 {
  font-size: 8.2rem;
  @media ${(props) => props.theme.mediaQueries.small} {
   font-size: 2.2rem;
  }
 }
`;

export const StyledGridContent = styled.div`
 display: grid;
 /* grid-template-columns: repeat(5, minmax(100px, 1fr)); */
 grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
 grid-row-gap: 10rem;
 grid-column-gap: 6rem;
 position: relative;
 .grid-element {
  animation: animateGrid 0.5s;
 }
 @keyframes animateGrid {
  from {
   opacity: 0;
  }
  to {
   opacity: 1;
  }
 }
 /* @media screen and (max-width: 1024px) {
 @media ${(props) => props.theme.mediaQueries.large} {
  grid-template-columns: repeat(4, minmax(100px, 1fr));
 }
 @media screen and (max-width: 768px) {
 @media ${(props) => props.theme.mediaQueries.medium} {
  grid-template-columns: repeat(3, minmax(100px, 1fr));
 }
 @media screen and (max-width: 600px) {
 @media ${(props) => props.theme.mediaQueries.small} {
  grid-template-columns: repeat(2, minmax(100px, 1fr));
 }
 @media screen and (max-width: 375px) {
 @media ${(props) => props.theme.mediaQueries.smallest} {
  grid-template-columns: repeat(1, 1fr);
 } */
`;
