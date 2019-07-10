
import { COLORS } from './res';

const SAFE_AREA_VIEW = {
  width: '100%',
  height: '100%',
  backgroundColor: COLORS.WHITE,
  forceInset: {
    top: 'always',
    horizontal: 'never'
  }
};

export const NAV_CONFIGS = {
  navigationOptions: {
    headerTintColor: COLORS.BLACK,
    headerStyle: {
      marginLeft: 20
    }
  }
};

export default SAFE_AREA_VIEW;
