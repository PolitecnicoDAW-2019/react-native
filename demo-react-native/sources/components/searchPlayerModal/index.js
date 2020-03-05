import React from 'react';
import {
	View,
	Modal,
	TextInput,
	KeyboardAvoidingView,
	Button
} from 'react-native';
import { searchPlayer } from '../../styles';
import { CLOSE_MODAL, COLOR_PRIMARY } from '../../constants';

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
					<View>
						<View style={searchPlayer.buttonRow}>
							<TextInput
								style={searchPlayer.text}
								onChangeText={text => onChangeText(text)}
								value={value}
							/>
							<Button
								title="Buscar"
								onPress={() => {
									handleSearch(value);
									handleCloseModal(false);
								}}
								color={COLOR_PRIMARY}
							/>
						</View>
					</View>
				</KeyboardAvoidingView>
			</View>
		</Modal>
	);
};

export default SearchPlayer;
