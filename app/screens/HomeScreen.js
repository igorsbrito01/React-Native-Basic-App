import React from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';

import ModalFilterPicker from 'react-native-modal-filter-picker'
import Swiper from 'react-native-swiper';
import Layout from '../constants/Layout';
import { SwipperUnit, UnitCard } from '../components';


const IMAGE_DEFAULT = 'https://wallpaperplay.com/walls/full/8/9/c/197767.jpg'
const IMAGE_CARD_DEFAULT = 'https://wallpapercave.com/wp/T1TiBBa.jpg'

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listBanners: [],
            listCards: [],

        }
    }

    componentWillMount() {

        let listBanners = [
            IMAGE_DEFAULT,
            IMAGE_DEFAULT,
            IMAGE_DEFAULT
        ]

        let listCards = [
            {
                title: 'Universes',
                imageUri: IMAGE_CARD_DEFAULT,
                shortDescription: 'Short Description'
            },
            {
                title: 'Universes',
                imageUri: IMAGE_CARD_DEFAULT,
                shortDescription: 'Short Description'
            },
            {
                title: 'Universes',
                imageUri: IMAGE_CARD_DEFAULT,
                shortDescription: 'Short Description'
            },
            {
                title: 'Universes',
                imageUri: IMAGE_CARD_DEFAULT,
                shortDescription: 'Short Description'
            },
            {
                title: 'Universes',
                imageUri: IMAGE_CARD_DEFAULT,
                shortDescription: 'Short Description'
            },
        ]

        this.setState({ listBanners, listCards: this.organizeCard2map(listCards) })
    }

    organizeCard2map = (list) => {
        let returnList = [];
        debugger;
        for (i = 0; list.length > i; i += 2) {
            row = [list[i], list[i + 1] == undefined ? null : list[i + 1]];

            returnList.push(row);
        }

        return returnList;
    }


    render() {
        return (
            <View style={styles.consteiner}>
                <StatusBar barStyle="light-content" />
                <View style={styles.topView}>
                    <Swiper style={styles.wrapper}
                        showsButtons={false}
                        dotColor="#fff">
                        {
                            this.state.listBanners.map((banner, key) => {
                                return (
                                    <SwipperUnit imageUri={banner} key={key} />
                                )
                            })
                        }
                    </Swiper>
                </View>
                <View style={styles.bottomView}>
                    <ScrollView >
                        {
                            this.state.listCards.map((cards, key) => {
                                return (
                                    <View style={styles.viewRow} key={key}>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <UnitCard
                                                title={cards[0].title}
                                                imageUri={cards[0].imageUri}
                                                shortDescription={cards[0].shortDescription}
                                            />
                                        </View>
                                        {
                                            cards[1] != null ?
                                                (
                                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                        <UnitCard
                                                            title={cards[1].title}
                                                            imageUri={cards[1].imageUri}
                                                            shortDescription={cards[1].shortDescription}
                                                        />
                                                    </View>
                                                ) : (
                                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                        {/* <UnitCard orientation='rigth' /> */}
                                                    </View>
                                                )
                                        }

                                    </View>
                                )
                            })
                        }
                    </ScrollView>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    consteiner: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#efefef"
    },
    topView: {
        flex: 1.5,
        justifyContent: "center"
    },
    bottomView: {
        flex: 3,
        paddingBottom: 20,
        marginHorizontal: 5

    },
    viewRow: {
        flexDirection: 'row',
        marginTop: 17,
        height: Layout.window.height * .25
    }
})