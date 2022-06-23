import {
    StyleSheet,
    Dimensions
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';


const win = Dimensions.get('window');
const ratiow = win.width;
const ratioh = win.height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.darker,
    },
    bigTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 15,
        textAlign: 'center',
    },
    smallTitle: {
        color: 'gainsboro',
        fontWeight: 'normal',
        fontSize: 18,
        textAlign: 'center',
    },
    backBtn: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        top: 10,
        left: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    userImg: {
        width: ratiow/4,
        height: ratioh/4,
        aspectRatio: 1,
        overflow: "hidden",
        borderRadius: ratiow/3,
        flexDirection: 'row',
        alignSelf: 'center',
        top: 0,
        left: 0,
        margin: 5,
    },
    editBtn: {
        backgroundColor: "white",
        marginLeft: 50,
        marginRight: 50,
        marginTop: 15
    },
    editBtnTxt: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
    },
});

export default styles;