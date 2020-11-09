import React from 'react';
import classes from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const links = [
  {
    to: '/profile',
    label: 'Profile',
  },
  {
    to: '/dialogs',
    label: 'Messages',
  },
  {
    to: '/news',
    label: 'News',
  },
  {
    to: '/music',
    label: 'Music',
  },
  {
    to: '/users',
    label: 'Find Users',
  },
  {
    to: '/settings',
    label: 'Settings',
  },
];

export default function NavBar() {
  return (
    <nav className={classes.nav}>
      <ul className={classes.links}>
        {links.map(({ to, label }) => (
          <li className={classes.link} key={to}>
            <NavLink to={to} activeClassName={classes.activeLink}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
