import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const CARD_WIDTH = width * 0.8; 
const CARD_HEIGHT = height * 0.5; 
const GRADIENT_COLOR = '#6a11cb';  

export const styles = StyleSheet.create({
    lacturerPage: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: GRADIENT_COLOR,
    },
})