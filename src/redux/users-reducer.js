const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
  users: [],
};
const usersReducer = (usersPage = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...usersPage,
        users: usersPage.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, follow: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...usersPage,
        users: usersPage.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, follow: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...usersPage,
        users: [...usersPage.users, ...action.users],
      };
    default:
      return usersPage;
  }
};

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
export default usersReducer;
