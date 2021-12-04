import {useNavigation} from "@react-navigation/native";
import React from "react";
import {TouchableOpacity, Text, View, Dimensions, Pressable} from "react-native";
import {makeFontColor} from "../colors";
const Meeting = ({item}) => {
    const navigation = useNavigation();
    const goToDetail = () => {
        if (item.PROC_RESULT_CD === "원안가결" || item.PROC_RESULT_CD === "수정가결") {
            console.log("오홍~~~~~~~~~~~~~~~~~~~₩", item.BILL_ID);
            navigation.navigate("Votes", {BILL_ID: item.BILL_ID, TITLE: item.BILL_NAME});
        }
    };
    const background_color = item.RESULT_VOTE_MOD === "찬성" ? "#b4e830" : item.RESULT_VOTE_MOD === "기권" ? "#ffe500" : "#ff8463";
    const exist = item.PROC_RESULT_CD === "원안가결" || item.PROC_RESULT_CD === "수정가결";
    return (
        <Pressable style={{paddingHorizontal: 16, marginHorizontal: 16, paddingVertical: 18, borderRadius: 8, backgroundColor: "#ffffff", borderStyle: "solid", borderWidth: 1, borderColor: exist ? "red" : "#e3e7e7"}} onPress={goToDetail}>
            <View>
                <Text style={{color: "black", fontSize: 20}}>{item.BILL_NM ?? item.BILL_NAME}</Text>
            </View>
            <View style={{}}>
                <Text style={{color: "black"}}>제안자: {item.PROPOSER}</Text>
                <Text style={{color: "black"}}>소관위원회: {item.COMMITTEE_NM}</Text>
                <Text style={{color: "black"}}>의결결과: {item.PROC_RESULT_CD}</Text>
                <View style={{flexDirection: "row"}}>
                    <Text>제안일</Text>
                    <Text>{item.PROPOSE_DT}</Text>
                </View>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", flex: 1, borderWidth: 1, borderColor: "black"}}>
                <View style={{justifyContent: "center", alignItems: "center"}}>
                    <Text>총투표수</Text>
                    <Text>{item.VOTE_TCNT}</Text>
                </View>
                <View style={{justifyContent: "center", alignItems: "center"}}>
                    <Text>찬성</Text>
                    <Text>{item.YES_TCNT}</Text>
                </View>
                <View style={{justifyContent: "center", alignItems: "center"}}>
                    <Text>반대</Text>
                    <Text>{item.NO_TCNT}</Text>
                </View>
                <View style={{justifyContent: "center", alignItems: "center"}}>
                    <Text>기권</Text>
                    <Text>{item.BLANK_TCNT}</Text>
                </View>
            </View>
            <View style={{justifyContent: "space-between", flex: 1, borderWidth: 1, borderColor: "black"}}>
                <Text style={{textAlign: "center"}}>위원회심사</Text>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text>회부일</Text>
                        <Text>{item.COMMITTEE_SUBMIT_DT}</Text>
                    </View>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text>상정일</Text>
                        <Text>{item.COMMITTEE_PRESENT_DT}</Text>
                    </View>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text>의결일</Text>
                        <Text>{item.COMMITTEE_PROC_DT}</Text>
                    </View>
                </View>
            </View>
            <View style={{justifyContent: "space-between", flex: 1, borderWidth: 1, borderColor: "black"}}>
                <Text style={{textAlign: "center"}}>법사위체계자구심사</Text>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text>회부일</Text>
                        <Text>{item.LAW_SUBMIT_DT}</Text>
                    </View>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text>상정일</Text>
                        <Text>{item.LAW_PRESENT_DT}</Text>
                    </View>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text>의결일</Text>
                        <Text>{item.LAW_PROC_DT}</Text>
                    </View>
                </View>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", flex: 1, borderWidth: 1, borderColor: "black"}}>
                <Text style={{textAlign: "center"}}>본회의심의</Text>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text>본회의심의_상정일</Text>
                        <Text>{item.RGS_PRESENT_DT}</Text>
                    </View>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text>본회의심의_의결일</Text>
                        <Text>{item.RGS_PROC_DT}</Text>
                    </View>
                </View>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", flex: 1, borderWidth: 1, borderColor: "black"}}>
                {/* <Text style={{textAlign: "center"}}>법사위체계자구심사</Text> */}
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text>정부이송일</Text>
                        <Text>{item.CURR_TRANS_DT}</Text>
                    </View>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text>공포일</Text>
                        <Text>{item.ANNOUNCE_DT}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

export default Meeting;
