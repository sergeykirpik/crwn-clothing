import React from 'react';
import { withRouter } from 'react-router-dom';

// import './menu-item.styles.scss';
import { MenuItemContainer, BackgroundImage } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => (
  <MenuItemContainer
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    size={size}
  >
    <BackgroundImage imageUrl={imageUrl} />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
