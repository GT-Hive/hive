import { actionTypes } from '../actions/community';

const PROGRESS = {
  IDLE: 0,
  IN_PROGRESS: 1
};

const initialState = {
  communities: [],
  reloadCommunities: PROGRESS.IDLE
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RELOAD_COMMUNITIES:
      return {
        ...state,
        reloadCommunities: PROGRESS.IN_PROGRESS
      };
    case actionTypes.RELOAD_COMMUNITIES_SUCCEED:
      return {
        ...state,
        reloadCommunities: PROGRESS.IDLE,
        communities: action.communities
      };
    default:
      return state;
  }
};
