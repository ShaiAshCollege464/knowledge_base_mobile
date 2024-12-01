import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const CARD_WIDTH = width * 0.8; 
const CARD_HEIGHT = height * 0.5; 
const GRADIENT_COLOR = '#6a11cb';  

export const styles = StyleSheet.create({
  coursesPage: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Inter, sans-serif', 
    color: 'white',
    backgroundColor: GRADIENT_COLOR,
  },
  coursesContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'violet',
    shadowColor: 'violet', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  text: {
    color: 'black',
    fontSize: 24,
  },
  form: {
    width: width * 0.5, // 50% מרוחב המסך
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  formLabel: {
    width: width * 0.3, // 30% מרוחב המסך
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
  },
  formInput: {
    width: width * 0.3, // 30% מרוחב המסך
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 15,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
