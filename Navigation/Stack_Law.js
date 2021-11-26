import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Member_Detail from "../Screen/Member_Detail";
import Votes from "../Screen/Votes";
import Meetings from "../Screen/Meetings.js";
import Members from "../Screen/Members.js";

import {useColorScheme} from "react-native";

const NativeStack = createNativeStackNavigator();

const Stack_Law = () => {
    const isDark = useColorScheme() === "dark";
    return (
        <NativeStack.Navigator>
            <NativeStack.Screen name="본회의2" component={Meetings}></NativeStack.Screen>
        </NativeStack.Navigator>
    );
};

export default Stack_Law;
