import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  padding: 15px 0;
  align-items: center;
  font-size: 20px;
  border-bottom: 1px solid darkgray;

  .image-container {
    width: 23%;
    padding-right: 15px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .name,
  .price,
  .quantity {
    width: 23%;
  }

  .quantity {
    display: flex;

    .arrow {
      cursor: pointer;
      user-select: none;
    }

    .value {
      margin: 0 10px;
    }
  }

  .remove-button {
    padding-left: 12px;
    cursor: pointer;
    user-select: none;
  }
`;
