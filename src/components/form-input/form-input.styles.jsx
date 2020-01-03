import styled, { css } from 'styled-components';

const colors = {
  'sub-color': 'grey',
  'main-color': 'black'
};

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${colors['main-color']};
`;

export const FormInputContainer = styled.div`
  position: relative;
  margin: 45px 0;

  .form-input {
    background: none;
    background-color: white;
    color: ${colors['sub-color']};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${colors['sub-color']};
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    &:focus ~ .form-input-label {
      ${shrinkLabel}
    }
  }

  input[type='password'] {
    letter-spacing: 0.3em;
  }

  .form-input-label {
    color: ${colors['sub-color']};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    &.shrink {
      ${shrinkLabel}
    }
  }
`;
