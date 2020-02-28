import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from '../screens/main';
import EditPlayer from '../screens/editPlayer';

export default createAppContainer(
	createStackNavigator(
		{
			Main: { screen: MainScreen },
			Edit: { screen: EditPlayer }
		},
		{
			initialRouteName: 'Main',
			defaultNavigationOptions: {
				headerStyle: {
					backgroundColor: '#4962f6'
				},
				headerTintColor: '#ffffff',
				headerTitleStyle: {
					fontWeight: 'bold'
				}
			}
		}
	)
);
