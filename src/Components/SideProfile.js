import styled from "styled-components";

import { useState, useEffect } from "react";

import avatar from "../images/avatar.jpeg";
import overlay from "../images/overlay.png";
import bg from "../images/bg.jpg";

import Footer from "./Footer";

const ResponsiveProfileHeader = styled.div`
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -moz-align-items: -moz-flex-end;
  -webkit-align-items: -webkit-flex-end;
  -ms-align-items: -ms-flex-end;
  align-items: flex-end;
  -moz-justify-content: space-between;
  -webkit-justify-content: space-between;
  -ms-justify-content: space-between;
  justify-content: space-between;
  background-color: #1f1815;
  background-attachment: scroll, scroll;
  background-image: url(${overlay}), url(${bg});
  background-position: top left, top left;
  background-repeat: repeat, no-repeat;
  background-size: auto, 150%;
  color: rgba(255, 255, 255, 0.5);
  height: 100%;
  left: 0;
  padding: 8em 4em;
  position: fixed;
  text-align: right;
  top: 0;
  width: 35%;
  & > * {
    -moz-flex-shrink: 0;
    -webkit-flex-shrink: 0;
    -ms-flex-shrink: 0;
    flex-shrink: 0;
    width: 100%;
  }
  & > .inner {
    -moz-flex-grow: 1;
    -webkit-flex-grow: 1;
    -ms-flex-grow: 1;
    flex-grow: 1;
    margin: 0 0 2em 0;
  }
  & strong,
  b,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #ffffff;
  }
  & h1 {
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.35em;
    line-height: 1.75em;
    margin: 0;
  }
  @media screen and (max-width: 1280px) {
    padding: 6em 3em 3em 3em;
    width: 30%;
    & h1 {
      font-size: 1.25em;
    }
    & h1 br {
      display: none;
    }
    & > .inner {
      margin-bottom: 0;
    }
  }
`;

const InnerHeader = styled.div``;

const AvatarImage = styled.a`
  margin: 0 0 1em 0;
  width: 6.25em;
  border-radius: 100%;
  &:before {
    display: none;
  }
  & img {
    border-radius: 100%;
    width: 100%;
  }
`;

const ResponsiveFooterWrapper = styled.div`
  @media screen and (max-width: 737px) {
    display: none;
  }
`;

const ResponsiveHeaderWrapper = styled.div`
 
`;

const SideProfile = () => {
  return (
      <ResponsiveProfileHeader>
        <InnerHeader>
          <AvatarImage href="#" className="image avatar">
            <img src={avatar} alt="Samantha" />
          </AvatarImage>
          <h1>
            <strong>I am Samantha Figueroa</strong>, a full-stack web developer.
            <br /> Some other text for now.
          </h1>
        </InnerHeader>
        <ResponsiveFooterWrapper>
          <Footer></Footer>
        </ResponsiveFooterWrapper>
      </ResponsiveProfileHeader>
  );
};

export default SideProfile;
