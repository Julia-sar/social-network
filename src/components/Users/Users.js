import React from 'react';
import classes from './Users.module.css';
import User from './User';

export default function Users(props) {
  const { totalUsersCount, pageSize, users = [], follow, unfollow } = props;

  const pagesCount = Math.min(Math.ceil(totalUsersCount / pageSize), 10);
  const pagesNumbers = [];
  for (let pageNumber = 1; pageNumber <= pagesCount; pageNumber++) {
    pagesNumbers.push(pageNumber);
  }

  return (
    <div>
      <div>
        {pagesNumbers.map((pageNumber) => (
          <button
            type="button"
            key={pageNumber}
            className={`${classes.page} ${
              props.currentPage === pageNumber && classes.selectedPage
            }`}
            onClick={() => {
              props.onPageChanged(pageNumber);
            }}
          >
            {pageNumber}
          </button>
        ))}
      </div>

      {users.map((user) => (
        <User key={user.id} user={user} follow={follow} unfollow={unfollow} />
      ))}
    </div>
  );
}
