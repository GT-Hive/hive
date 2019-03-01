const RELOAD_COMMUNITIES = 'hive/screen/RELOAD_COMMUNITIES';
const RELOAD_COMMUNITIES_SUCCEED = 'hive/screen/RELOAD_COMMUNITIES_SUCCEED';

export const actionTypes = {
  RELOAD_COMMUNITIES,
  RELOAD_COMMUNITIES_SUCCEED
};

const reloadCommunities = () => ({
  type: RELOAD_COMMUNITIES
});

const reloadCommunitiesSucceed = communities => ({
  type: RELOAD_COMMUNITIES_SUCCEED,
  communities
});

export const actionCreators = {
  reloadCommunities,
  reloadCommunitiesSucceed
};
