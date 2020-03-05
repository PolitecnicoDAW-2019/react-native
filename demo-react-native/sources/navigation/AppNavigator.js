import * as React from 'react';
import MainScreen from '../screens/main';
import EditPlayer from '../screens/editPlayer';
import AddPlayer from '../screens/addPlayer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MAIN_TITLE, EDIT_TITLE, ADD_TITLE } from '../constants';

const Stack = createStackNavigator();

export default function AppNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="MainScreen">
				<Stack.Screen
					name="MainScreen"
					component={MainScreen}
					options={{ title: MAIN_TITLE }}
				/>
				<Stack.Screen
					name="EditPlayer"
					component={EditPlayer}
					options={{ title: EDIT_TITLE }}
				/>
				<Stack.Screen
					name="AddPlayer"
					component={AddPlayer}
					options={{ title: ADD_TITLE }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
