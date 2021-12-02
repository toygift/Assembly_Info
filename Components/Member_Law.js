import {useNavigation} from "@react-navigation/native";
import React from "react";
import {TouchableOpacity, Text, View, Dimensions, Pressable} from "react-native";
// import styled from "styled-components/native";
const width = Dimensions.get("window").width;
import Title from "./Title";
const Member_Law = ({item}) => {
    const navigation = useNavigation();
    const goToDetail = () => {
        if (item.PROC_RESULT === "원안가결" || item.PROC_RESULT === "수정가결") {
            navigation.navigate("Votes", {BILL_ID: item.BILL_ID});
        }
    };
    const exist = item.PROC_RESULT === "원안가결" || item.PROC_RESULT === "수정가결";
    return (
        <Pressable style={{paddingHorizontal: 16, marginHorizontal: 16, paddingVertical: 18, borderRadius: 8, backgroundColor: "#ffffff", borderStyle: "solid", borderWidth: 1, borderColor: exist ? "black" : "#e3e7e7"}} onPress={goToDetail}>
            <Text style={{fontSize: 16, marginBottom: 12, fontWeight: "bold", fontStyle: "normal", lineHeight: 21, letterSpacing: 0, color: "#212121"}}>{item.BILL_NAME}</Text>
            <Title title={"제안일"} value={item.PROPOSE_DT}></Title>
            <Title title={"제안자"} value={item.PROPOSER}></Title>
            <Title title={"대표발의자"} value={item.RST_PROPOSER}></Title>
            <Title title={"공동발의자"} value={item.PUBL_PROPOSER}></Title>
            <Title title={"처리상태"} value={item.PROC_RESULT ?? "-"}></Title>
        </Pressable>
    );
};

export default Member_Law;
