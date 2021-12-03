import React from "react";
import {useNavigation} from "@react-navigation/native";
import {TouchableOpacity, Text, View, Dimensions, FlatList, StyleSheet, Pressable} from "react-native";
// import styled from "styled-components/native";
const width = Dimensions.get("window").width;
import _ from "lodash";
import {makeFontColor} from "../colors";
const Party = ({item}) => {
    const navigation = useNavigation();
    const goToDetail = (vote, title) => {
        if (vote.length !== 0) {
            navigation.navigate("Party_Votes", {data: vote, title: title});
        }
    };
    renderItem2 = ({item}) => {
        const agree = _.filter(item.data, {RESULT_VOTE_MOD: "찬성"});
        const disagree = _.filter(item.data, {RESULT_VOTE_MOD: "반대"});
        const nonvote = _.filter(item.data, {RESULT_VOTE_MOD: "기권"});
        const absent = _.filter(item.data, {RESULT_VOTE_MOD: "불참"});
        return (
            <View style={{flex: 1, padding: 20, backgroundColor: makeFontColor(item.party)}}>
                <Text style={{fontSize: 24, fontWeight: "bold", fontStyle: "normal", color: "#212121", paddingBottom: 10}}>{item.party}</Text>
                <View style={{flex: 1, paddingHorizontal: 10, flexDirection: "row", height: 60, justifyContent: "space-between", alignItems: "center", borderWidth: 1, borderRadius: 8}}>
                    <Pressable onPress={() => goToDetail(agree, "찬성")} style={styles.button}>
                        <Text style={styles.text_style}>찬성</Text>
                        <Text style={styles.text_style}>{agree.length}</Text>
                    </Pressable>
                    <Pressable onPress={() => goToDetail(disagree, "반대")} style={styles.button}>
                        <Text style={styles.text_style}>반대</Text>
                        <Text style={styles.text_style}>{disagree.length}</Text>
                    </Pressable>
                    <Pressable onPress={() => goToDetail(nonvote, "기권")} style={styles.button}>
                        <Text style={styles.text_style}>기권</Text>
                        <Text style={styles.text_style}>{nonvote.length}</Text>
                    </Pressable>
                    <Pressable onPress={() => goToDetail(absent, "불참")} style={styles.button}>
                        <Text style={styles.text_style}>불참</Text>
                        <Text style={styles.text_style}>{absent.length}</Text>
                    </Pressable>
                </View>
            </View>
        );
    };
    return <FlatList data={item} renderItem={renderItem2} keyExtractor={(item, index) => index}></FlatList>;
};

export default Party;

const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text_style: {
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 21,
        letterSpacing: 0,
        color: "#212121",
    },
});
