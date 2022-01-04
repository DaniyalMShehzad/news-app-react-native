// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import Login from '../screens/login';
// import styling from '../../styling'
// import SaveData from '../screens/savedata';

// function AppRouter() {
//     const Stack = createNativeStackNavigator();
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 {/* <Stack.Screen 
//                 options={{headerShown: false}}
//                 name="login" component={Login} /> */}
//                 <Stack.Screen name="Home" component={Home} />
//                 <Stack.Screen name="savedata" component={SaveData} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import styling from '../../styling'
import Home from '../screens/home';
import SaveData from '../screens/savedata';
const { Navigator, Screen } = createBottomTabNavigator();
const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        style={{height:"10%",}}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title='home' />
        <BottomNavigationTab title='savedata' />
    </BottomNavigation>
);
const TabNavigator = () => (
    <Navigator tabBar={props => <BottomTabBar {...props} />}>
        <Screen options={{headerShown: false}}  name='home' component={Home} />
        <Screen options={{headerShown: false}} name='savedata' component={SaveData} />
    </Navigator>
);
export const AppRouter = () => (
    <NavigationContainer>
        <TabNavigator  />
    </NavigationContainer>
);
const styles = StyleSheet.create({ ...styling })