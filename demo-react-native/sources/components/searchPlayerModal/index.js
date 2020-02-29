import React from 'react';
import {
	Text,
	View,
	Modal,
	TextInput,
	TouchableHighlight,
	KeyboardAvoidingView,
	StyleSheet,
	Button
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'flex-end',
		flexDirection: 'row'
	},
	content: {
		padding: 20,
		paddingBottom: 30,
		flex: 1,
		backgroundColor: '#ffffff',
		shadowOffset: { width: 0, height: -3 },
		shadowColor: 'black',
		shadowOpacity: 0.2,
		shadowRadius: 5,
		elevation: 30
		// width: 200
	},
	text: {
		borderBottomWidth: 1,
		padding: 5
	},
	closeIcon: {
		color: '#fff'
	},
	buttonRow: {
		flexDirection: 'row',
		marginTop: 10
	},
	block: {
		margin: 10
	}
});

const SearchPlayer = ({ modalVisible, handleCloseModal, handleSearch }) => {
	const [value, onChangeText] = React.useState('');
	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => {
				Alert.alert('Modal has been closed.');
			}}
		>
			<View style={styles.container}>
				<KeyboardAvoidingView
					style={styles.content}
					behavior={Platform.OS === 'ios' ? 'padding' : null}
				>
					<View>
						<View style={styles.buttonRow}>
							<TextInput
								style={{
									height: 40,
									borderColor: 'gray',
									borderWidth: 1,
									flex: 5,
									padding: 5
								}}
								onChangeText={text => onChangeText(text)}
								value={value}
							/>
							<Button
								title="Buscar"
								onPress={() => {
									handleSearch(value);
									handleCloseModal(false);
								}}
								color="#4962f6"
							/>
						</View>
					</View>
				</KeyboardAvoidingView>
			</View>
		</Modal>
	);
};

export default SearchPlayer;
