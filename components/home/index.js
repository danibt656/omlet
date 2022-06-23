import React from 'react';
import {
    View,
    SafeAreaView,
    Text,
    FlatList,
    Image,
} from 'react-native';

import { NavBar } from './navbar';
import { PostSingle } from '../post';
import styles from './styles';

const appTitle = 'omlet'

const dummy = {
    imageBigName: require('../../assets/imgs/ares.jpg'),
    imageTopName: require('../../assets/imgs/profile.jpg'),
    username: 'testUser',
    nickname: 'Dani',
    location: 'Moralzarzal, España',
    joined: 'May 2022',
    userImg: require('../../assets/imgs/user.jpg'),
    delay: '2 hours late',
};


const Home = ({navigation}) => {
    const array = [1,2,3]

    const renderItem = ({item, index}) => {
        return(
            <View style={styles.picList}>
                <View style={styles.userbox}>
                    <Image
                        style={styles.userImg}
                        source={dummy.userImg}
                    />
                    <View style={styles.userinfo}>
                        <Text style={styles.username}>{dummy.username}</Text>
                        <Text style={styles.location}>{dummy.location}</Text>
                    </View>
                    <View style={styles.timeinfo}>
                        <Text style={styles.location}>{dummy.delay}</Text>
                    </View>
                </View>
                <PostSingle
                    imageBig={dummy.imageBigName}
                    imageTop={dummy.imageTopName}
                />
            </View>
        );
    };

    return (
        <SafeAreaView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.container}>
            
            <Text style={styles.bigTitle}>{appTitle}</Text>

            <NavBar navigation={navigation} style={styles.navBar}/>

            <FlatList
                data={array}
                renderItem={renderItem}
                pagingEnabled
                keyExtractor={item => item}
            />
        </SafeAreaView>
    );
}

export { Home, dummy, appTitle };