import React from "react";
import {useNavigation} from "@react-navigation/native";
import {View, Text, FlatList, Dimensions, ActivityIndicator, Pressable} from "react-native";
const width = Dimensions.get("window").width;

const Vote_Color_Block = ({item}) => {
    const navigation = useNavigation();

    const goToDetail = () => {
        navigation.navigate("Member_Detail_P", {members: item});
    };
    const background_color = item.RESULT_VOTE_MOD === "찬성" ? "#b4e830" : item.RESULT_VOTE_MOD === "기권" ? "#ffe500" : item.RESULT_VOTE_MOD === "반대" ? "#ff8463" : "gray";
    return (
        <Pressable onPress={goToDetail} style={{width: width / 3, paddingVertical: 10, flexDirection: "column", margin: 1, backgroundColor: background_color, justifyContent: "center", alignItems: "center"}}>
            <View>
                <Text style={{color: item.RESULT_VOTE_MOD === "불참" ? "black" : "black", fontSize: 20, fontWeight: "bold"}}>{item.HG_NM}</Text>
            </View>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Text style={{color: item.RESULT_VOTE_MOD === "불참" ? "black" : "black", fontWeight: "bold"}}>{item.POLY_NM}</Text>
                {/* <View style={{marginLeft: 5, width: 10, height: 10, borderRadius: 10, backgroundColor: background_color}}></View> */}
            </View>
        </Pressable>
    );
};

export default Vote_Color_Block;
