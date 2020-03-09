import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { COLOR_PRIMARY, PLAYER_IMAGE } from '../../constants';
import { imagePicker } from '../../styles';

export default class ImagePickerCustom extends Component {
	state = {
		image: null
	};

	componentDidMount() {
		this.getPermissionAsync();
	}

	getPermissionAsync = async () => {
		if (Constants.platform.ios) {
			const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
			if (status !== 'granted') {
				alert('Sorry, we need camera roll permissions to make this work!');
			}
		}
	};

	_pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [16, 9],
			quality: 1
		});

		console.log(result);

		if (!result.cancelled) {
			this.setState({ image: result.uri });
		}
	};

	render() {
		let { image } = this.state;
		return (
			<View style={imagePicker.container}>
				<Button
					mode="contained"
					color={COLOR_PRIMARY}
					contentStyle={{ height: 50 }}
					children={PLAYER_IMAGE}
					style={imagePicker.button}
					onPress={this._pickImage}
				></Button>
				{image && (
					<Image source={{ uri: image }} style={imagePicker.image}></Image>
				)}
			</View>
		);
	}
}
