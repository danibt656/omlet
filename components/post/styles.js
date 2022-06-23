import {
    StyleSheet,
    Dimensions
} from 'react-native';

const win = Dimensions.get('window');
const ratiow = win.width * 0.15;
const ratioh = win.height * 0.2;
const marginCorner = win.width/50;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    postImg: {
        width: undefined,
        height: '100%',
        aspectRatio: 1,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    postImgTop: {
        width: ratiow,
        height: ratioh,
        aspectRatio: 2/3,
        borderRadius: 15,
        overflow: "hidden",
        flexDirection: 'row',
        alignSelf: 'flex-start',
        top: marginCorner,
        left: ratiow,
    },
});

export default styles;