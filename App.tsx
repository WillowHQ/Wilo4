import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import VoiceTest from './VoiceTest';

import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function PerformScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function ProgramScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Program!</Text>
    </View>
  );
}

function ScheduleScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Schedule!</Text>
    </View>
  );
}
function ShareScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Share!</Text>
    </View>
  );
}

const MobileNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={PerformScreen} />
      <Tab.Screen name="Program" component={ProgramScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="Share" component={ShareScreen} />
    </Tab.Navigator>
  )
}
const WebNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={PerformScreen} />
      <Drawer.Screen name="Program" component={ProgramScreen} />
      <Drawer.Screen name="Schedule" component={ScheduleScreen} />
      <Drawer.Screen name="Share" component={ShareScreen} />
    </Drawer.Navigator>
  )
}




export default function App() {
  return (
    <NavigationContainer>
      {Platform.OS === 'web' ? <WebNavigation /> : <MobileNavigation />}
      <StatusBar style="auto" />
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