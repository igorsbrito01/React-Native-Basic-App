import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';


const SwipperUnit = ({ imageUri }) => {

    return (
        <View style={styles.coneiner}>
            <Image
                resizeMode='cover'
                style={{ flex: 1, borderRadius: 15 }}
                source={{ uri: imageUri }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    coneiner: {
        flex: 1,
        marginVertical: 15,
        marginHorizontal: 15,
        borderRadius: 15,
    }
})


export { SwipperUnit };