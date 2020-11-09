function userPageSelector(state) {
  return state.usersPage;
}

export function usersSelector(state) {
  return userPageSelector(state).users;
}

export function userPageSizeSelector(state) {
  return userPageSelector(state).pageSize;
}

export function userTotalUsersCountSelector(state) {
  return userPageSelector(state).totalUsersCount;
}

export function userCurrentPageSelector(state) {
  return userPageSelector(state).currentPage;
}

export function userIsFetchingSelector(state) {
  return userPageSelector(state).isFetching;
}
