import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Feed from "./src/screens/Feed";

const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Feed" component={Feed} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
