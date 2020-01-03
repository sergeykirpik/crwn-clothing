import styled from 'styled-components';

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  background-color: white;
  border: 1px solid black;
  z-index: 5;
  top: 80px;
  right: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;

  .cart-items {
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }

  .empty-message {
    font-size: 18px;
    margin: 50px auto;
  }

  button {
    margin-top: auto;
  }
`;
