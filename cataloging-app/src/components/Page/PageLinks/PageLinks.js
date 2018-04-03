import { FontAwesome, Label } from '../../common/';

import PropTypes from 'prop-types';
import React from 'react';

export const PageLinks = ({ links, props, state, goToUrl }) => {
  return (<div className="page-links col-md-3">
    <div className="page-links-content list-group">
      <div className="list-group-item page-links-heading">
        <FontAwesome name="gears" fixedWidth size="lg" />&nbsp;<Label label="LABEL_OPTIONS" />
      </div>
      {links.filter(link => link.isVisible &&
        link.isVisible instanceof Function ? link.isVisible(props, state) : true)
        .map(link => (<a onClick={() => {
          goToUrl(link.url);
        }} key={link.name} className="page-link list-group-item">
          <FontAwesome name={link.icon} fixedWidth size="lg" />&nbsp;{link.label}</a>))}</div>
  </div>);
};

PageLinks.propTypes = {
  links: PropTypes.array,
  props: PropTypes.object,
  state: PropTypes.object,
  goToUrl: PropTypes.func.isRequired
};

