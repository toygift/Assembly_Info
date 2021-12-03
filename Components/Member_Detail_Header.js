import React from "react";
import {Text, StyleSheet, View, Image} from "react-native";
import {makeFontColor} from "../colors";
import Title from "./Title";
const Member_Detail_Header = ({item, length}) => {
    return (
        <View style={{flex: 1}}>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 24, marginBottom: 20, height: 52, backgroundColor: makeFontColor(item.POLY_NM)}}>
                <Text style={{fontSize: 18, fontWeight: "bold", fontStyle: "normal", letterSpacing: 0, color: "#ffffff"}}>
                    {item.HG_NM}({item.SEX_GBN_NM})
                </Text>
                <Image resizeMode={"cover"} style={{width: 34, height: 34, borderRadius: 34 / 2}} source={{uri: item.IMAGE}}></Image>
            </View>
            <View style={{flex: 1, paddingHorizontal: 24, paddingBottom: 13, justifyContent: "space-between"}}>
                <Title title={"정당"} value={item.POLY_NM}></Title>
                <Title title={"선거구"} value={item.ORIG_NM}></Title>
                <Title title={"소속위원회"} value={item.CMIT_NM}></Title>
                <Title title={"당선횟수"} value={item.REELE_GBN_NM}></Title>
                <Title title={"사무실전화"} value={item.TEL_NO}></Title>
                <Title title={"사무실호실"} value={item.ASSEM_ADDR}></Title>
                <Title title={"홈페이지"} value={item.HOMEPAGE}></Title>
                <Title title={"이메일"} value={item.E_MAIL}></Title>
                <Title title={"보좌관"} value={item.STAFF}></Title>
                <Title title={"비서관"} value={item.SECRETARY}></Title>
                <Title title={"비서"} value={item.SECRETARY2}></Title>
                <Title title={"악력"} value={item.POLY_NM}></Title>
            </View>
            {length !== null ? (
                <View>
                    <View style={{backgroundColor: "#f3f4f4", height: 10, marginBottom: 8}}></View>
                    <View style={{backgroundColor: "#ffffff", height: 40, paddingHorizontal: 24, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 6}}>
                        <Text style={{fontSize: 18, fontWeight: "bold", fontStyle: "normal", letterSpacing: 0, color: makeFontColor(item.POLY_NM)}}>현재 발의중 안건</Text>
                        <Text style={{fontSize: 13, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0, textAlign: "right", color: "#919aa4"}}>총 {length}건</Text>
                    </View>
                </View>
            ) : null}
        </View>
    );
};

export default Member_Detail_Header;
const styles = StyleSheet.create({});
