const RELOAD_COMMUNITIES = 'hive/screen/RELOAD_COMMUNITIES';
const RELOAD_COMMUNITIES_SUCCEED = 'hive/screen/RELOAD_COMMUNITIES_SUCCEED';
const RELOAD_COMMUNITIES_FAILED = 'hive/screen/RELOAD_COMMUNITIES_FAILED';
const TOGGLE_SHOW_SCREEN = 'hive/screen/TOGGLE_SHOW_SCREEN';

export const actionTypes = {
  RELOAD_COMMUNITIES,
  RELOAD_COMMUNITIES_SUCCEED,
  RELOAD_COMMUNITIES_FAILED,
  TOGGLE_SHOW_SCREEN
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

const toggleShowScreen = () => ({
  type: TOGGLE_SHOW_SCREEN
});

export const actionCreators = {
  reloadCommunities,
  reloadCommunitiesSucceed,
  reloadCommunitiesFailed,
  toggleShowScreen
};
