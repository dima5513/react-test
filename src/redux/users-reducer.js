const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_COUNT = "SET_USERS_COUNT";

const initialState = {
  users: [],
  currentPage: 1,
  countItems: 10,
  totalCount: 0,
};
const usersReducer = (usersPage = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...usersPage,
        users: usersPage.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...usersPage,
        users: usersPage.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...usersPage,
        users: [...action.users],
      };

    case SET_CURRENT_PAGE:
      return {
        ...usersPage,
        currentPage: action.pageNumber,
      };
    case SET_USERS_COUNT:
      return {
        ...usersPage,
        totalCount: action.totalCount,
      };
    default:
      return usersPage;
  }
};

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
export const setCurrentPageActionCreator = (pageNumber) => ({
  type: SET_CURRENT_PAGE,
  pageNumber,
});
export const setTotalCountActionCreator = (totalCount) => ({
  type: SET_USERS_COUNT,
  totalCount,
});
export default usersReducer;
