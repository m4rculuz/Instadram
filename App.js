import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home.jsx'
import Login from './screens/Login.jsx';
import Profile from './screens/Profile.jsx';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SessionProvider, { useSessionContext } from './utils/context.js';
import Loading from './screens/Loading.jsx';
import Create from './screens/Create.jsx';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()


function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Tab.Screen name='Create' component={Create} options={{ headerShown: false }} />
      <Tab.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

function AppNavigator() {
  const value = useSessionContext()
  const logged = !!value.session
  const loading = value.loading
  return (
    <NavigationContainer>
      {loading && <Loading />}
      {!loading &&
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {logged && <Stack.Screen name='Main' component={Tabs} options={{ headerShown: false }} />}
          {!logged && <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />}
        </Stack.Navigator>
      }
    </NavigationContainer>
  )
}

export default function App() {

  return (
    <SessionProvider>
      <AppNavigator />
    </SessionProvider>

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
