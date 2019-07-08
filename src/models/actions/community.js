const RELOAD_COMMUNITIES = 'hive/community/RELOAD_COMMUNITIES';
const RELOAD_COMMUNITIES_SUCCEED = 'hive/community/RELOAD_COMMUNITIES_SUCCEED';
const RELOAD_COMMUNITIES_FAILED = 'hive/community/RELOAD_COMMUNITIES_FAILED';
const ADD_USER_TO_COMMUNITIES = 'hive/community/ADD_USER_TO_COMMUNITIES';

export const actionTypes = {
  RELOAD_COMMUNITIES,
  RELOAD_COMMUNITIES_SUCCEED,
  RELOAD_COMMUNITIES_FAILED,
  ADD_USER_TO_COMMUNITIES
};

const reloadCommunities = () => ({
  type: RELOAD_COMMUNITIES
});

const reloadCommunitiesSucceed = communities => ({
  type: RELOAD_COMMUNITIES_SUCCEED,
  communities
});

const reloadCommunitiesFailed = error => ({
  type: RELOAD_COMMUNITIES_FAILED,
  error
});

const addUserToCommunities = communities => ({
  type: ADD_USER_TO_COMMUNITIES,
  communities
});

export const actionCreators = {
  reloadCommunities,
  reloadCommunitiesSucceed,
  reloadCommunitiesFailed,
  addUserToCommunities
};
