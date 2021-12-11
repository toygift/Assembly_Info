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
        const max = Math.max(agree.length, disagree.length, nonvote.length, absent.length);

        return (
            <View style={{flex: 1, padding: 16, backgroundColor: "#ffffff", marginTop: 10}}>
                <Text style={{fontSize: 18, fontWeight: "bold", fontStyle: "normal", letterSpacing: 0, color: "#222222", paddingBottom: 10}}>{item.party}</Text>
                <View style={{flex: 1, paddingHorizontal: 10, flexDirection: "row", height: 54, justifyContent: "space-between", alignItems: "center"}}>
                    <Pressable onPress={() => goToDetail(agree, "찬성")} style={[styles.button, {backgroundColor: max === agree.length ? "#5d9aff" : "#ffffff"}]}>
                        <Text style={[styles.text_style, {color: max === agree.length ? "#ffffff" : "#212121"}]}>찬성</Text>
                        <Text style={[styles.text_style_number, {color: agree.length === 0 ? "#dcdcdc" : max === agree.length ? "#ffffff" : "#212121"}]}>{agree.length}</Text>
                    </Pressable>
                    <Pressable onPress={() => goToDetail(disagree, "반대")} style={[styles.button, {backgroundColor: max === disagree.length ? "#fb4759" : "#ffffff"}]}>
                        <Text style={[styles.text_style, {color: max === disagree.length ? "#ffffff" : "#212121"}]}>반대</Text>
                        <Text style={[styles.text_style_number, {color: disagree.length === 0 ? "#dcdcdc" : max === disagree.length ? "#ffffff" : "#212121"}]}>{disagree.length}</Text>
                    </Pressable>
                    <Pressable onPress={() => goToDetail(nonvote, "기권")} style={[styles.button, {backgroundColor: max === nonvote.length ? "#ffb132" : "#ffffff"}]}>
                        <Text style={[styles.text_style, {color: max === nonvote.length ? "#ffffff" : "#212121"}]}>기권</Text>
                        <Text style={[styles.text_style_number, {color: nonvote.length === 0 ? "#dcdcdc" : max === nonvote.length ? "#ffffff" : "#212121"}]}>{nonvote.length}</Text>
                    </Pressable>
                    <Pressable onPress={() => goToDetail(absent, "불참")} style={[styles.button, {backgroundColor: max === absent.length ? "#8f8d8d" : "#ffffff"}]}>
                        <Text style={[styles.text_style, {color: max === absent.length ? "#ffffff" : "#212121"}]}>불참</Text>
                        <Text style={[styles.text_style_number, {color: absent.length === 0 ? "#dcdcdc" : max === absent.length ? "#ffffff" : "#212121"}]}>{absent.length}</Text>
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
        padding: 8,
        borderRadius: 2,
    },
    text_style: {
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        paddingBottom: 3,
    },
    text_style_number: {
        fontSize: 17,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
    },
});
