import React from "react";
import {useColorScheme} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Votes from "../Screen/Votes.js";
import Meetings from "../Screen/Meetings.js";
import Members from "../Screen/Members.js";
import Member_Detail from "../Screen/Member_Detail.js";
import Propose from "../Screen/Propose.js";
import Stack from "./Stack.js";
import Stack_Law from "./Stack_Law.js";
const Tab = createBottomTabNavigator();

const Tabs = () => {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === "dark";
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            {/* <Tab.Screen name="본회의22" component={Votes}></Tab.Screen> */}
            <Tab.Screen name="탭1" component={Stack}></Tab.Screen>
            <Tab.Screen name="탭2" component={Stack_Law}></Tab.Screen>
        </Tab.Navigator>
    );
};

export default Tabs;
