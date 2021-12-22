import {useNavigation} from "@react-navigation/native";
import React from "react";
import {TouchableOpacity, Text, View, Dimensions, Pressable, StyleSheet, Image} from "react-native";
import {makeFontColor} from "../colors";
import Title from "./Title";
const Meeting = ({item}) => {
    const navigation = useNavigation();
    const goToDetail = () => {
        if (item.PROC_RESULT_CD === "원안가결" || item.PROC_RESULT_CD === "수정가결") {
            console.log("90000", item);
            navigation.navigate("Votes", {BILL_ID: item.BILL_ID, TITLE: item.BILL_NM});
        }
    };
    const max = Math.max(item.YES_TCNT, item.NO_TCNT, item.BLANK_TCNT);

    return (
        <Pressable
            style={{
                paddingHorizontal: 16,
                marginHorizontal: 16,
                paddingVertical: 18,
                borderRadius: 8,
                backgroundColor: "#ffffff",
                shadowColor: "rgba(0, 0, 0, 0.1)",
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
                shadowRadius: 12,
                shadowOpacity: 1,
            }}
            onPress={goToDetail}>
            <View>
                <Text style={{fontSize: 16, fontWeight: "bold", fontStyle: "normal", lineHeight: 21, letterSpacing: 0, color: "#212121"}}>{item.BILL_NM ?? item.BILL_NAME}</Text>
            </View>
            <View style={{paddingTop: 11}}>
                <Title title={"제안자"} value={item.PROPOSER}></Title>
                <Title title={"소관위원회"} value={item.COMMITTEE_NM}></Title>
                <Title title={"의결결과"} value={item.PROC_RESULT_CD}></Title>
                <Title title={"제안일"} value={item.PROPOSE_DT}></Title>
            </View>
            <View>
                <View style={{flexDirection: "row", height: 54, justifyContent: "space-between", alignItems: "center"}}>
                    <Pressable onPress={() => goToDetail(agree, "찬성")} style={[styles.button]}>
                        <Text style={[styles.text_style]}>총투표수</Text>
                        <Text style={[styles.text_style_number]}>{item.VOTE_TCNT ?? "0"}</Text>
                    </Pressable>
                    <View style={{width: 1, height: 10, backgroundColor: "#e8e8ef"}} />
                    <Pressable onPress={() => goToDetail(disagree, "반대")} style={[styles.button]}>
                        <Text style={[styles.text_style, {color: max === item.YES_TCNT ? "#000000" : "#7f8387"}]}>찬성</Text>
                        <Text style={[styles.text_style_number, {color: max === item.YES_TCNT ? "#5d9aff" : "#d5d8dd"}]}>{item.YES_TCNT ?? "0"}</Text>
                    </Pressable>
                    <View style={{width: 1, height: 10, backgroundColor: "#e8e8ef"}} />
                    <Pressable onPress={() => goToDetail(disagree, "반대")} style={[styles.button]}>
                        <Text style={[styles.text_style, {color: max === item.NO_TCNT ? "#000000" : "#7f8387"}]}>반대</Text>
                        <Text style={[styles.text_style_number, {color: max === item.NO_TCNT ? "#fb4759" : "#d5d8dd"}]}>{item.NO_TCNT ?? "0"}</Text>
                    </Pressable>
                    <View style={{width: 1, height: 10, backgroundColor: "#e8e8ef"}} />
                    <Pressable onPress={() => goToDetail(disagree, "반대")} style={[styles.button]}>
                        <Text style={[styles.text_style, {color: max === item.BLANK_TCNT ? "#000000" : "#7f8387"}]}>기권</Text>
                        <Text style={[styles.text_style_number, {color: max === item.BLANK_TCNT ? "#ffb132" : "#d5d8dd"}]}>{item.BLANK_TCNT ?? "0"}</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{paddingVertical: 14}}>
                <View style={{flexDirection: "row", alignItems: "center", paddingBottom: 4}}>
                    <Image source={require("../resourse/round1.png")}></Image>
                    <Text style={{marginLeft: 7, fontSize: 12, fontWeight: "bold", fontStyle: "normal", letterSpacing: 0, color: "#212121"}}>위원회 심사</Text>
                </View>

                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    <Text style={styles.date_title}>회부일</Text>
                    <Text style={styles.date}>{item.COMMITTEE_SUBMIT_DT ?? "0000-00-00"}</Text>
                    <Text style={styles.date_title}>상정일</Text>
                    <Text style={styles.date}>{item.COMMITTEE_PRESENT_DT ?? "0000-00-00"}</Text>
                    <Text style={styles.date_title}>의결일</Text>
                    <Text style={styles.date}>{item.COMMITTEE_PROC_DT ?? "0000-00-00"}</Text>
                </View>
            </View>
            <View style={{paddingBottom: 14}}>
                <View style={{flexDirection: "row", alignItems: "center", paddingBottom: 4}}>
                    <Image source={require("../resourse/round2.png")}></Image>
                    <Text style={{marginLeft: 7, fontSize: 12, fontWeight: "bold", fontStyle: "normal", letterSpacing: 0, color: "#212121"}}>법사위체계자구심사</Text>
                </View>

                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    <Text style={styles.date_title}>회부일</Text>
                    <Text style={styles.date}>{item.LAW_SUBMIT_DT ?? "0000-00-00"}</Text>
                    <Text style={styles.date_title}>상정일</Text>
                    <Text style={styles.date}>{item.LAW_PRESENT_DT ?? "0000-00-00"}</Text>
                    <Text style={styles.date_title}>의결일</Text>
                    <Text style={styles.date}>{item.LAW_PROC_DT ?? "0000-00-00"}</Text>
                </View>
            </View>
            <View style={{paddingBottom: 14}}>
                <View style={{flexDirection: "row", alignItems: "center", paddingBottom: 4}}>
                    <Image source={require("../resourse/round3.png")}></Image>
                    <Text style={{marginLeft: 7, fontSize: 12, fontWeight: "bold", fontStyle: "normal", letterSpacing: 0, color: "#212121"}}>본회의심의</Text>
                </View>

                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    <Text style={styles.date_title}>상정일</Text>
                    <Text style={styles.date}>{item.RGS_PRESENT_DT ?? "0000-00-00"}</Text>
                    <Text style={styles.date_title}>의결일</Text>
                    <Text style={styles.date}>{item.RGS_PROC_DT ?? "0000-00-00"}</Text>
                    {/* <Text style={styles.date_title}>의결일</Text>
                    <Text style={styles.date}>{item.COMMITTEE_PROC_DT ?? "0000-00-00"}</Text> */}
                </View>
            </View>
            <View style={{paddingBottom: 14}}>
                <View style={{flexDirection: "row", alignItems: "center", paddingBottom: 4}}>
                    <Image source={require("../resourse/round4.png")}></Image>
                    <Text style={{marginLeft: 7, marginRight: 4, fontSize: 12, fontWeight: "bold", fontStyle: "normal", letterSpacing: 0, color: "#212121"}}>정부이송일</Text>
                    <Text style={{fontSize: 12, fontWeight: "bold", fontStyle: "normal", letterSpacing: 0, color: "#212121"}}>{item.CURR_TRANS_DT ?? "0000-00-00"}</Text>
                </View>
            </View>
            <View>
                <View style={{flexDirection: "row", alignItems: "center", paddingBottom: 4}}>
                    <Image source={require("../resourse/round4.png")}></Image>
                    <Text style={{marginLeft: 7, marginRight: 4, fontSize: 12, fontWeight: "bold", fontStyle: "normal", letterSpacing: 0, color: "#212121"}}>공포일</Text>
                    <Text style={{fontSize: 12, fontWeight: "bold", fontStyle: "normal", letterSpacing: 0, color: "#212121"}}>{item.ANNOUNCE_DT ?? "0000-00-00"}</Text>
                </View>
            </View>
        </Pressable>
    );
};

export default Meeting;
const styles = StyleSheet.create({
    button: {
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
        color: "#7f8387",
        paddingBottom: 3,
    },
    text_style_number: {
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#7f8387",
    },
    date_title: {
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#919aa4",
    },
    date: {fontSize: 12, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0, color: "#222222"},
});
