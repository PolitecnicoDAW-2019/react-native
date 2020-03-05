import * as React from 'react';
import MainScreen from '../screens/main';
import EditPlayer from '../screens/editPlayer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MAINTITLE, EDITPLAYERTITLE } from '../constants';

const Stack = createStackNavigator();

export default function AppNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="MainScreen">
				<Stack.Screen
					name="MainScreen"
					component={MainScreen}
					options={{ title: MAINTITLE }}
				/>
				<Stack.Screen
					name="EditPlayer"
					component={EditPlayer}
					options={{ title: EDITPLAYERTITLE }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
