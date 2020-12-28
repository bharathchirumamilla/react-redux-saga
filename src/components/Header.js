import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    return(
        <div><h3>{props.name}</h3></div>
    )
}

export default Header;

Header.propTypes = {
    name: PropTypes.string.isRequired
  };