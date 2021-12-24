import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Tabs from "./Tabs";

const Nav = createNativeStackNavigator();

const Root = () => (
    <Nav.Navigator screenOptions={{presentation: "push", headerShown: false}}>
        <Nav.Screen name="Tabs" component={Tabs} />
    </Nav.Navigator>
);
export default Root;
