import COLORS from './Colors';

const STYLES = {
  // Text styles
  TEXT_PRIMARY: {
    fontSize: 35,
    lineHeight: 40
  },
  TEXT_SECONDARY: {
    fontSize: 23,
    lineHeight: 30
  },
  TEXT_TERTIARY: {
    fontSize: 16,
    lineHeight: 20
  },
  TEXT_QUATERNARY: {
    fontSize: 12,
    lineHeight: 15
  },
  // Layout styles
  OUTER_CONTAINER: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
  HEADER_CONTAINER: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginVertical: 20,
  },
  TEXT_HEADING: {
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: 35,
    color: COLORS.BLACK,
  },
  PROFILE_IMG: {
    borderWidth: 3,
    borderRadius: 50,
    borderColor: COLORS.LIGHT_GRAY,
    height: 60,
    width: 60,
  },
};

export default STYLES;
