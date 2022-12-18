import styled from "styled-components";

import overlay from "../images/overlay.png";
import bg from "../images/bg.jpg";

import { useBreakpointValue } from '@chakra-ui/react'

const ProfileFooter = styled.footer`
  & .icons {
    margin: 1em 0 0 0;
  }
  & .icons a {
    color: rgba(255, 255, 255, 0.4);
  }
  @media screen and (max-width: 980px){
    background-attachment: scroll;
    background-color: #1f1815;
    background-image: url("images/overlay.png"), url("../../images/bg.jpg");
    background-position: top left, bottom center;
    background-repeat: repeat, no-repeat;
    background-size: auto, cover;
    bottom: auto;
    left: auto;
    padding: 4em 4em 6em 4em;
    position: relative;
    text-align: center;
    width: 100%;
    & .icons{
      margin: 0 0 1em 0;
    }
  }
  @media screen and (min-width: 736px){
    padding: 2.25em 1.5em;

  }
`;

const Footer = () => {

  return (
    <ProfileFooter>
      <div className="inner">
        <ul className="">
          <li>
            <a href="#">
              <i className="icon fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="icon fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="icon fa-regular fa-envelope"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="icon fa-regular fa-file"></i>
            </a>
          </li>
        </ul>
      </div>
    </ProfileFooter>
  );
};

export default Footer;
