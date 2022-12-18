import styled from "styled-components";

import SideProfile from "./SideProfile";
import Footer from "./Footer";

const LandingWrapper = styled.div`
  &,
  &:before,
  &:after {
    -moz-animation: none !important;
    -webkit-animation: none !important;
    -ms-animation: none !important;
    animation: none !important;
    -moz-transition: none !important;
    -webkit-transition: none !important;
    -ms-transition: none !important;
    transition: none !important;
  }
`;

const FooterWrapper = styled.div`
@media screen and (max-width: 737px) {
  display: none;
  
}

`

const LandingPage = () => {
  return (
    <LandingWrapper>
      <SideProfile></SideProfile>
      <Footer></Footer>
    </LandingWrapper>
  );
};

export default LandingPage;
