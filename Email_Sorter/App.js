import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EmailSelectionScreen from './components/EmailSelectionScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Email Selection"
            component={ EmailSelectionScreen }
            options={{ title: "" }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;