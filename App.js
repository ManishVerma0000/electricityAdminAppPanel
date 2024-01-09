import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './Screens/welcomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SingleDayTimeTable from './Screens/singleDayTimeTable';
import Tablecompponent from './Screens/tablecomponent';


import Table from './Screens/timeTable';
const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="WelcomeScreen"
                    component={WelcomeScreen}
                />
                <Stack.Screen
                    name="Table"
                    component={Table}
                />
                <Stack.Screen
                    name="SingleDayDetails"
                    component={SingleDayTimeTable}
                />
                <Stack.Screen
                    name="Tablecompponent"
                    component={Tablecompponent}
                />

            </Stack.Navigator>

        </NavigationContainer>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
