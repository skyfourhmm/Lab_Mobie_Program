import { Text, View, StyleSheet, Image,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import List from "./List"

export default function Header() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Details"
        component={List}
        options={{
          headerBackTitle: 'Custom Back',
          headerBackTitleStyle: { fontSize: 30 },
    }}
  />
</Stack.Navigator>
    </NavigationContainer>
  );
}