import React from 'react'
import { View, Text } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SongList from './SongList';

const Stack = createStackNavigator();

export default function Splash() {
    return (
        <NavigationContainer initialRouteName="Splash">
            <Stack.Navigator
            screenOptions={{
                headerShown: false
              }}
            >
                <Stack.Screen
                    name="Splash"
                    component={SplashScreen}
                />
                <Stack.Screen name="List" component={SongList} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

const SplashScreen = ({ navigation }) => {
    setTimeout(() => {
       
        navigation.navigate('List')
    }

        , 4000)
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text>Welcome to music app</Text>
        </View>

    )
}