import {useNavigation} from "@react-navigation/native";
import React from "react";
import {TouchableOpacity, Text, View, Dimensions, FlatList} from "react-native";
// import styled from "styled-components/native";
const width = Dimensions.get("window").width;
import _ from "lodash";
const Bdd = ({item}) => {
    console.log("itemmm", item);
    const navigation = useNavigation();
    const goToDetail = () => {
        navigation.navigate("Votes");
    };
    renderItem2 = ({item}) => {
        console.log("render2222");
        const agree = _.filter(item.data, {RESULT_VOTE_MOD: "찬성"});
        const disagree = _.filter(item.data, {RESULT_VOTE_MOD: "반대"});
        const nonvote = _.filter(item.data, {RESULT_VOTE_MOD: "기권"});
        const absent = _.filter(item.data, {RESULT_VOTE_MOD: "불참"});
        return (
            <View>
                <Text>{item.party}</Text>
                <View style={{flexDirection: "row"}}>
                    <Text>찬성{agree.length}</Text>
                    <Text>반대{disagree.length}</Text>
                    <Text>기권{nonvote.length}</Text>
                    <Text>불참{absent.length}</Text>
                </View>
            </View>
        );
    };
    return <FlatList data={item} renderItem={renderItem2} keyExtractor={item => item.HG_NM}></FlatList>;
};

export default Bdd;
