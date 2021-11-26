import {useNavigation} from "@react-navigation/native";
import React from "react";
import {TouchableOpacity, Text, View, Dimensions} from "react-native";
// import styled from "styled-components/native";
const width = Dimensions.get("window").width;
const Member_Law = ({item}) => {
    const navigation = useNavigation();
    const goToDetail = () => {
        navigation.navigate("Votes");
    };

    return (
        <TouchableOpacity onPress={goToDetail}>
            <View style={{flex: 1, borderWidth: 1, borderColor: "black", marginHorizontal: 20, padding: 20}}>
                <Text>{item.BILL_NAME}</Text>
                <Text>제안일 : {item.PROPOSE_DT}</Text>
                <Text>제안자 : {item.PROPOSER}</Text>
                <Text>대표발의자 : {item.RST_PROPOSER}</Text>
                <View style={{flexDirection: "row"}}>
                    <Text>공동발의자 : </Text>
                    <Text style={{flex: 1}}>{item.PUBL_PROPOSER}</Text>
                </View>
                <Text>처리상태 : {item.PROC_RESULT ?? "-"}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Member_Law;
