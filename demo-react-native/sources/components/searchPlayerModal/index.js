import React from 'react';
import {
	View,
	Modal,
	TextInput,
	KeyboardAvoidingView,
	Button
} from 'react-native';
import { searchPlayer } from '../../styles';
import { CLOSEMODAL, COLORPRIMARY } from '../../constants';

const SearchPlayer = ({ modalVisible, handleCLOSEMODAL, handleSearch }) => {
	const [value, onChangeText] = React.useState('');
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => {
				Alert.alert(CLOSEMODAL);
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
									handleCLOSEMODAL(false);
								}}
								color={COLORPRIMARY}
							/>
						</View>
					</View>
				</KeyboardAvoidingView>
			</View>
		</Modal>
	);
};

export default SearchPlayer;
