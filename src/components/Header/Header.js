import React from 'react';
import classes from './Header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <img
        alt="Компания"
        src="https://www.pricepony.com.ph/blog/wp-content/uploads/2018/07/company-name.jpg"
      />
    </header>
  );
}
export default Header;
