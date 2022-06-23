import React, { useRef } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground
} from 'react-native';

import styles from './styles';

const PostSingle = (props) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.postImg}
                source={props.imageBig}
            >
                <Image
                    style={styles.postImgTop}
                    source={props.imageTop}
                />
            </ImageBackground>
        </View>
    );
}

export { PostSingle };