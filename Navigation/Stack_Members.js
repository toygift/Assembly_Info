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

const Stack_Members = () => {
    const isDark = useColorScheme() === "dark";
    return (
        <NativeStack.Navigator
            screenOptions={{
                headerShadowVisible: false,
                headerTitleStyle: {fontWeight: "bold"},
                headerBackTitleVisible: false,
            }}>
            <NativeStack.Screen options={{title: "국회의원"}} name="_국회의원" component={Members}></NativeStack.Screen>
            <NativeStack.Screen
                name="Member_Detail"
                component={Member_Detail}
                options={({navigation, route}) => ({
                    headerTintColor: "black",
                })}
            />
            <NativeStack.Screen
                name="Votes"
                component={Votes}
                options={({navigation, route}) => ({
                    headerTintColor: "black",
                })}
            />
            <NativeStack.Screen
                name="Member_Detail_P"
                component={Member_Detail_P}
                options={({navigation, route}) => ({
                    headerTintColor: "black",
                    presentation: "modal",
                })}
            />
            <NativeStack.Screen
                name="Party_Votes"
                component={Party_Votes}
                options={({navigation, route}) => ({
                    headerTintColor: "black",
                    presentation: "modal",
                })}
            />
        </NativeStack.Navigator>
    );
};

export default Stack_Members;
