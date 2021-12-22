import React from "react";
import {View, Text, Image} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Member_Detail from "../Screen/Member_Detail";
import Member_Detail_P from "../Screen/Member_Detail_P";
import Votes from "../Screen/Votes";
import Meetings from "../Screen/Meetings.js";
import Members from "../Screen/Members.js";
import Party_Votes from "../Screen/Party_Votes.js";
import {useColorScheme} from "react-native";

const NativeStack = createNativeStackNavigator();

const Stack_Law = () => {
    const isDark = useColorScheme() === "dark";
    return (
        <NativeStack.Navigator
            screenOptions={{
                headerShadowVisible: false,
                headerTitleStyle: {fontWeight: "bold"},
                headerBackTitleVisible: false,
                headerShown: false,
            }}>
            <NativeStack.Screen options={({navigation, route}) => ({})} name="본회의2" component={Meetings}></NativeStack.Screen>
            <NativeStack.Screen
                name="Votes"
                component={Votes}
                options={({navigation, route}) => ({
                    headerTintColor: "black",
                    headerShown: true,
                })}
            />
            <NativeStack.Screen
                name="Member_Detail_P"
                component={Member_Detail_P}
                options={({navigation, route}) => ({
                    headerTintColor: "black",
                    presentation: "modal",
                    headerShown: true,
                })}
            />
            <NativeStack.Screen
                name="Party_Votes"
                component={Party_Votes}
                options={({navigation, route}) => ({
                    headerTintColor: "black",
                    presentation: "modal",
                    headerShown: true,
                })}
            />
        </NativeStack.Navigator>
    );
};

export default Stack_Law;
