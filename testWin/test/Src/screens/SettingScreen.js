import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";


export default class SettingScreen extends Component {


    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={styles.textOr}>или введите свой</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 10
    },
    textContainer: {
        paddingVertical: 15,
        textAlign: 'center',
        fontSize: 16,
        paddingBottom: 10,
        color: '#9467AA'
    },
    textOr: {
        textAlign: 'center',
        fontSize: 14,
        paddingTop: 25,
        color: '#9467AA'
    },
    textUrl: {
        fontSize: 18,
        paddingTop: 8,
        paddingHorizontal: 6,
        color: '#9467AA'
    },
    imgContainer: {
        justifyContent: 'flex-end',
        resizeMode: 'contain',
        height: '100%',
        width: '100%'
    },
    inputViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    inputStyle: {
        height: 40,
        borderBottomWidth: 1,
        width: 250,
        borderBottomColor: '#C0C0C0',
        color: '#585858'
    }
});