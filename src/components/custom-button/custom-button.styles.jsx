import styled, { css } from 'styled-components';

const defaultButtonStyles = css`
  width: auto;
  min-width: 165px;
  height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  font-family: 'Open Sans Condensed';
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInButtonStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
    border: none;
    color: white;
  }
`;

const getCustomButtonStyles = ({ inverted, isGoogleSignIn }) => {
  return [
    defaultButtonStyles,
    inverted && invertedButtonStyles,
    isGoogleSignIn && googleSignInButtonStyles
  ];
};

export const CustomButtonContainer = styled.button`
  ${getCustomButtonStyles}
`;
