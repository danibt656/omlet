import React from 'react';
import {
    TouchableOpacity,
    SafeAreaView,
    Text,
    View,
    Image,
    Button,
    TouchableHighlight,
} from 'react-native';

import styles from './styles';

import {dummy, appTitle} from '../home';

const Profile = ({navigation}) => {
    return (
        <SafeAreaView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.container}>
            
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('Home')
                    }
                >
                    <Text style={styles.backBtn}>❮</Text>
                </TouchableOpacity>
            </View>

            <Image
                style={styles.userImg}
                source={dummy.userImg}
            />

            <Text style={styles.bigTitle}>{dummy.nickname}</Text>
            <Text style={styles.smallTitle}>@{dummy.username}</Text>
            <Text style={styles.smallTitle}>Joined {appTitle} in {dummy.joined}</Text>
            
            <TouchableHighlight 
                style ={styles.editBtn}
            >
                <Text style={styles.editBtnTxt}>EDIT MY PROFILE</Text>
            </TouchableHighlight>

        </SafeAreaView>
    );
}

export { Profile };