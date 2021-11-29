import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Member_Detail from "../Screen/Member_Detail";
import Votes from "../Screen/Votes";
import Meetings from "../Screen/Meetings.js";
import Members from "../Screen/Members.js";

import {useColorScheme} from "react-native";

const NativeStack = createNativeStackNavigator();

const Stack = () => {
    const isDark = useColorScheme() === "dark";
    return (
        <NativeStack.Navigator
            screenOptions={{
                headerShadowVisible: false,
            }}>
            <NativeStack.Screen name="국회의원" component={Members}></NativeStack.Screen>
            <NativeStack.Screen name="Member_Detail" component={Member_Detail} />
            <NativeStack.Screen name="Votes" component={Votes} />
        </NativeStack.Navigator>
    );
};

export default Stack;
{
    /* <NativeStack.Screen name="본회의" component={Meetings}></NativeStack.Screen> */
}
