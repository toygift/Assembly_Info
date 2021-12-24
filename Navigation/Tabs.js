import React from "react";
import {useColorScheme, Image} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Votes from "../Screen/Votes.js";
import Meetings from "../Screen/Meetings.js";
import Members from "../Screen/Members.js";
import Member_Detail from "../Screen/Member_Detail.js";

import Stack_Members from "./Stack_Members.js";
import Stack_Meetings from "./Stack_Meetings.js";
import Stack_Settings from "./Stack_Settings.js";
const Tab = createBottomTabNavigator();

const Tabs = () => {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === "dark";
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen options={{tabBarLabel: "국회의원", tabBarIcon: ({focused, color, size}) => <Image source={focused ? require("../resourse/icMemberOn.png") : require("../resourse/icMemberOff.png")} />}} name="members" component={Stack_Members}></Tab.Screen>
            <Tab.Screen options={{tabBarLabel: "본회의", tabBarIcon: ({focused, color, size}) => <Image source={focused ? require("../resourse/icConferenceOn.png") : require("../resourse/icConferenceOff.png")} />}} name="meetings" component={Stack_Meetings}></Tab.Screen>
            <Tab.Screen options={{tabBarLabel: "설정", tabBarIcon: ({focused, color, size}) => <Image source={focused ? require("../resourse/icSettingOn.png") : require("../resourse/icSettingOff.png")} />}} name="settings" component={Stack_Settings}></Tab.Screen>
        </Tab.Navigator>
    );
};

export default Tabs;
