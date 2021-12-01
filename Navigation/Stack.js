import React from "react";
import {View, Text, Image} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Member_Detail from "../Screen/Member_Detail";
import Votes from "../Screen/Votes";
import Meetings from "../Screen/Meetings.js";
import Members from "../Screen/Members.js";

import {useColorScheme} from "react-native";

const NativeStack = createNativeStackNavigator();

const Stack = () => {
    const isDark = useColorScheme() === "dark";
    function BackBtn() {
        return <Image source={require("../resourse/imgBack.png")} style={{marginLeft: 10, width: 22, height: 22}} />;
    }
    return (
        <NativeStack.Navigator
            screenOptions={{
                headerShadowVisible: false,
                headerTitleStyle: {fontWeight: "bold"},
                headerBackTitleVisible: false,
            }}>
            <NativeStack.Screen name="국회의원" component={Members}></NativeStack.Screen>
            <NativeStack.Screen
                name="Member_Detail"
                component={Member_Detail}
                options={({navigation, route}) => ({
                    headerTintColor: "black",
                })}
            />
            <NativeStack.Screen name="Votes" component={Votes} />
        </NativeStack.Navigator>
    );
};

export default Stack;
