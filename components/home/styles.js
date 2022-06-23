import {
    StyleSheet,
    Dimensions
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';


const win = Dimensions.get('window');
const ratiow = win.width * 0.1;
const ratioh = win.height * 0.1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.darker,
    },
    bigTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 50,
        textAlign: 'center',
        padding: 10,
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 60,
        paddingRight: 60,
        marginBottom: 20,
    },
    navTextStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    separator: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'normal',
    },
    picList: {
        flex:1,
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: 'black',
        height: Dimensions.get('window').height -135,
        margin:5,
    },
    userbox: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        margin: 5,
    },
    userinfo: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
    },
    timeinfo: {
        alignItems: 'flex-end',
        color: 'white',
        fontWeight: 'normal',
        fontSize: 15,
    },
    username: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    location: {
        color: 'white',
        fontWeight: 'normal',
        fontSize: 15,
    },
    userImg: {
        width: ratiow,
        height: ratioh,
        aspectRatio: 1,
        overflow: "hidden",
        borderRadius: 150/3,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        top: 0,
        left: 0,
        margin: 5,
    },
});

export default styles;