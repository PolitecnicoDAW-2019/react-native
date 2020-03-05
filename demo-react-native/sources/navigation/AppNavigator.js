import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/main';
import EditPlayer from '../screens/editPlayer';
import AddPlayer from '../screens/addPlayer';
import { MAINTITLE, EDITTITLE, ADDTITLE } from '../constants';

const Stack = createStackNavigator();

function AppNavigator() {
	return (
		<NavigationContainer initialRouteName="MainScreen">
			<Stack.Navigator>
				<Stack.Screen
					name="Main"
					component={MainScreen}
					options={{ title: MAINTITLE }}
				/>
				<Stack.Screen
					name="Edit"
					component={EditPlayer}
					options={{ title: EDITTITLE }}
				/>
				<Stack.Screen
					name="Add"
					component={AddPlayer}
					options={{ title: ADDTITLE }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default AppNavigator;
