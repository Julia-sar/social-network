function profilePageSelector(state) {
  return state.profilePage;
}

export function profileSelector(state) {
  return profilePageSelector(state).profile;
}

export function postsSelector(state) {
  return profilePageSelector(state).posts;
}

export function newPostTextSelector(state) {
  return profilePageSelector(state).newPostText;
}
