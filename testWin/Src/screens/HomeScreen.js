import React, {Component} from "react";
import {Button, Dimensions, StyleSheet, Text, View} from "react-native";
import {Actions} from "react-native-router-flux";

export default class HomeScreen extends Component {


    render() {
        return (
            <View >
                <Text>
                    Welcome to React Native!
                </Text>
                <Button
                    color='#9467AA'
                    title='Применить'
                    onPress={() =>
                        Actions.setting()
                    }
                />
                <Text>
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    urlStyle: {
        fontSize: 16,
        textAlign: 'center',
        color : '#ffffff'
    },
    cameraContainer: {
        height: Dimensions.get('window').height,
    },
    urlBackgroundStyle: {
        padding: 6,
        backgroundColor: 'rgba(148, 103, 170, 0.4)'
    }
});
