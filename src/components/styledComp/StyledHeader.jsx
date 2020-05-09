import styled from 'styled-components';

export const StyleHeader = styled.div`
 background: #1c1c1c;
 padding: 0 20px;
 box-sizing: border-box;

 .header-content {
  max-width: 1280px;
  min-height: 120px;
  padding: 20px 20px;
  margin: 0 auto;
  box-sizing: border-box;

  @media ${(props) => props.theme.mediaQueries.small} {
   font-size: 60%;
   max-width: 1280px;
   min-height: 0px;
  }
  /* @media screen and (max-width: 500px) {
   max-width: 1280px;
   min-height: 0px;
  } */
 }
`;
export const StyledRMDBLogo = styled.img`
 width: 250px;
 margin-top: 30px;

 @media ${(props) => props.theme.mediaQueries.small} {
  width: 150px;
  margin-top: 5px;
 }
`;

export const StyledTMDBLogo = styled.img`
 width: 122px;
 margin-top: 25px;
 float: right;

 @media ${(props) => props.theme.mediaQueries.small} {
  display: inline-block;
  width: 80px;
  margin-top: 0px;
 }
`;
