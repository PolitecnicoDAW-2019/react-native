import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import MainScreen from '../screens/main';
import EditPlayer from '../screens/editPlayer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function AppNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="MainScreen">
				<Stack.Screen
					name="MainScreen"
					component={MainScreen}
					options={{ title: 'Football App' }}
				/>
				<Stack.Screen
					name="EditPlayer"
					component={EditPlayer}
					options={{ title: 'Edit player' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
