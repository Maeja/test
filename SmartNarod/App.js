/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Realm from 'realm';
import {Button, Alert, StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';


function updateUI() {
    Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
            {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]
    )
    }
export default class App extends Component<{}> {
	constructor(props) {
		super(props);
		this.state = { realm: null };

	}


		componentWillMount() {
			Realm.open({
				schema: [{name: 'Dog', properties: {name: 'string'}}]
			}).then(realm => {
				realm.write(() => {
					realm.create('Dog', {name: 'Rex'});
				});
				this.setState({ realm });
                realm.addListener('change', updateUI);

            });
		}
	componentWillMountq() {
			Realm.open({
				schema: [{name: 'Dog', properties: {name: 'string'}}]
			}).then(realm => {
				realm.write(() => {
                    realm.create('Dog', {name: 'Rex'});
                });
                realm.addListener('change', updateUI);

            });
		}

		render() {
			const info = this.state.realm
				? 'Number of dogs in this Realm: ' + this.state.realm.objects('Dog').length
				: 'Loading...';

			return (
				<View style={styles.container}>
					<TouchableWithoutFeedback onPress={this.componentWillMountq}>
					<Text style={styles.welcome}>
						{info}
					</Text>
					</TouchableWithoutFeedback>
				</View>
			);
		}
	}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
