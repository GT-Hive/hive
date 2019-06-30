const RELOAD_COMMUNITIES = 'hive/screen/RELOAD_COMMUNITIES';
const RELOAD_COMMUNITIES_SUCCEED = 'hive/screen/RELOAD_COMMUNITIES_SUCCEED';
const RELOAD_COMMUNITIES_FAILED = 'hive/screen/RELOAD_COMMUNITIES_FAILED';

export const actionTypes = {
  RELOAD_COMMUNITIES,
  RELOAD_COMMUNITIES_SUCCEED,
  RELOAD_COMMUNITIES_FAILED
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

export const actionCreators = {
  reloadCommunities,
  reloadCommunitiesSucceed,
  reloadCommunitiesFailed,
};
