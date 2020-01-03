import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

// import './collection-item.styles.scss';
import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooter
} from './collection-item.styles';

import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer className="collection-item">
      <ImageContainer className="image" imageUrl={imageUrl} />
      <CollectionFooter>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </CollectionFooter>
      <CustomButton
        inverted
        onClick={() => addItem(item)}
        className="custom-button"
      >
        Add to cart
      </CustomButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(addItem(item))
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);
