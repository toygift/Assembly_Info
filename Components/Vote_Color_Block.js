import React from "react";
import {useNavigation} from "@react-navigation/native";
import {View, Text, FlatList, Dimensions, ActivityIndicator, Pressable} from "react-native";
const width = Dimensions.get("window").width;
import {makeVoteColor} from "../colors";
const Vote_Color_Block = ({item}) => {
    const navigation = useNavigation();

    const goToDetail = () => {
        navigation.navigate("Member_Detail_P", {members: item});
    };

    const background_color = makeVoteColor(item.RESULT_VOTE_MOD);
    return (
        <Pressable onPress={goToDetail} style={{marginRight: 4, width: (width - 32 - 12) / 4, height: 44, borderRadius: 2, paddingVertical: 10, flexDirection: "column", backgroundColor: background_color, justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontSize: 14, fontWeight: "bold", fontStyle: "normal", letterSpacing: 0, textAlign: "center", color: "#ffffff"}}>{item.HG_NM}</Text>
            <Text style={{fontSize: 9, marginTop: 2, fontWeight: "600", fontStyle: "normal", letterSpacing: 0, textAlign: "center", color: "#ffffff"}}>{item.POLY_NM}</Text>
        </Pressable>
    );
};

export default Vote_Color_Block;
