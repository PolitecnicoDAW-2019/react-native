import React from 'react';
import { View, Modal, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { searchPlayer } from '../../styles';
import { CLOSE_MODAL, COLOR_PRIMARY, COLOR_WHITE } from '../../constants';

const SearchPlayer = ({ modalVisible, handleCloseModal, handleSearch }) => {
	const [value, onChangeText] = React.useState('');
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => {
				Alert.alert(CLOSE_MODAL);
			}}
		>
			<View style={searchPlayer.container}>
				<KeyboardAvoidingView
					style={searchPlayer.content}
					behavior={Platform.OS === 'ios' ? 'padding' : null}
				>
					<TextInput
						style={searchPlayer.text}
						onChangeText={text => onChangeText(text)}
						value={value}
					></TextInput>
					<Button
						mode="contained"
						style={searchPlayer.button}
						color={COLOR_PRIMARY}
						contentStyle={{ height: 45 }}
						children="Buscar"
						onPress={() => {
							handleSearch(value);
							handleCloseModal(false);
						}}
					></Button>
				</KeyboardAvoidingView>
			</View>
		</Modal>
	);
};

export default SearchPlayer;
