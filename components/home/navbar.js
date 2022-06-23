import React, {useState} from 'react';
import {
    Text, 
    TouchableOpacity,
    View,
    Button,
} from 'react-native';

import styles from './styles';

const TextButton = ({navigation, title}) => {
    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate(title)
            }
            underlayColor="white"
        >
            <Text style={styles.navTextStyle}>{title}</Text>
        </TouchableOpacity>
    );
};

const NavBar = ({navigation}) => {
    return (
        <View style={styles.navBar}>
            <TextButton title='Dashboard' />
            <Text style={styles.separator}> | </Text>
            <TextButton title='Following' />
            <Text style={styles.separator}> | </Text>
            <TextButton title='Profile' navigation={navigation} />
        </View>
    );
}

export { NavBar };