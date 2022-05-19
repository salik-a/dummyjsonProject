

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Users from '../screens/Users';
import UserDetail from '../screens/UserDetail';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Users" component={Users} />
                <Stack.Screen name="UserDetail" component={UserDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}