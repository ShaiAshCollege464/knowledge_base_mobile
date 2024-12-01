import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const CARD_WIDTH = width * 0.8;
const CARD_HEIGHT = height * 0.5;
const GRADIENT_COLOR = '#6a11cb';
const ICON_HEIGHT_WIDTH = 40;


export const styles = StyleSheet.create({
  dashbourdPage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GRADIENT_COLOR,
  },
  dashbourdContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'violet',
    shadowColor: 'violet',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  knowledgeBase: {
    width: '100%',
    marginTop: -150,
    flexDirection: 'row'

  },
  text: {
    color: 'white',
    fontSize: 20,
    padding: 6,

  },
  tabText: {
    color: 'black',
    fontSize: 20,
    padding: 6,

  },
  tabsContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
  },
  tab: {
    width: width * 0.3,
    marginLeft: 5,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // רקע לבן שקוף חלקית
  },
  searchInput: {
    width: width * 0.33,
    marginLeft: 90,
    paddingLeft: 20,
    height: 40,
    paddingHorizontal: 5,
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // רקע לבן שקוף חלקית
  },
  logout: {
    color: 'black',
    fontSize: 20,
    marginLeft: 30,
    flexDirection: 'row',
    paddingTop: 6

  },
  logoutIcon: {
    width: ICON_HEIGHT_WIDTH,
    height: ICON_HEIGHT_WIDTH,
    flexDirection: 'row',
    marginLeft: -10

  },
  headline: {
    color: '#3D2B6E',
    fontSize: 24,
    padding: 15,
    marginTop: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    textShadowColor: 'white', // צבע קו המתאר
    textShadowRadius: 2, // מריחת הצל
  }


});
