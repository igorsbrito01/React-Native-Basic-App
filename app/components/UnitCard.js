import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import Layout from '../constants/Layout';

const UnitCard = ({ imageUri, title, shortDescription }) => {
    const styles = StyleSheet.create({
        conteiner: {
            flex: 1,
            flexDirection: 'column',
            borderRadius: 15,
            alignItems: "center",
            width: Layout.window.width * .45
        },
        topView: {
            alignItems: 'center',
            flex: 2,
        },

        bottomView: {
            flex: 1,
            flexDirection: 'row',
            marginHorizontal: 5,
            paddingTop: 10
        },

        imageStyle: {
            flex: 1,
            width: Layout.window.width * .45,
            borderRadius: 10
        },

        titleStyle: {
            fontSize: 15,
            fontWeight: 'bold',
            color: '#969696'
        },

        percentageText: {
            color: '#fff',
            fontWeight: '500',
            borderRadius: 3,
            backgroundColor: '#001256',
            padding: 2,
            alignSelf: 'flex-end'
        },

    })

    return (
        <View style={styles.conteiner}>
            <View style={styles.topView}>
                <Image
                    resizeMode='contain'
                    style={styles.imageStyle}
                    resizeMethod='scale'
                    source={{ 'uri': imageUri }}
                />
            </View>


            <View style={styles.bottomView}>
                <View style={{ flex: 3 }}>
                    <Text style={styles.titleStyle}>{title}</Text>
                    <View >
                        <Text style={{ fontSize: 8 }}> {shortDescription}</Text>
                    </View>
                </View>
                <View style={{ flex: 1, }}>
                    <Text style={styles.percentageText}>30%</Text>
                </View>
            </View>

        </View>
    )
}


export { UnitCard }