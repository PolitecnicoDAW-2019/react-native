import React, { Component } from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { COLOR_PRIMARY } from '../../constants';
import { imagePicker } from '../../styles';

export default class ImagePickerCustom extends Component {
	constructor(props) {
		super(props);
		const { onChangeImageCustom } = props;
		this.state = {
			image: null,
			onChangeImage: onChangeImageCustom
		};
	}

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
			aspect: [4, 3],
			quality: 1
		});
		const { onChangeImage } = this.state;

		if (!result.cancelled) {
			this.setState({ image: result.uri });
			onChangeImage(result.uri);
		}
	};

	render() {
		let { image } = this.state;
		return (
			<View style={imagePicker.container}>
				<Button
					mode="contained"
					style={imagePicker.button}
					color={COLOR_PRIMARY}
					contentStyle={{ height: 25 }}
					title="Pick an image from camera roll"
					onPress={this._pickImage}
				></Button>
				{image && (
					<Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
				)}
			</View>
		);
	}
}
