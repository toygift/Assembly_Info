import React from "react";
import {View, Text, Image} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {useColorScheme} from "react-native";
import Setting from "../Components/Setting";

const NativeStack = createNativeStackNavigator();

const Stack_Settings = () => {
    const isDark = useColorScheme() === "dark";
    return (
        <NativeStack.Navigator
            screenOptions={{
                headerShadowVisible: false,
                headerTitleStyle: {fontWeight: "bold"},
                headerBackTitleVisible: false,
            }}>
            <NativeStack.Screen
                options={({navigation, route}) => ({
                    title: "설정",
                })}
                name="setting"
                component={Setting}></NativeStack.Screen>
        </NativeStack.Navigator>
    );
};

export default Stack_Settings;
