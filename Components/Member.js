import {useNavigation} from "@react-navigation/native";
import React from "react";
import {Pressable, Text, View, Image} from "react-native";
import {makeFontColor} from "../colors";
const Member = ({item}) => {
    const navigation = useNavigation();
    const goToDetail = () => {
        navigation.navigate("Member_Detail", {});
    };
    return (
        <Pressable style={{flex: 1, backgroundColor: "yellow", paddingHorizontal: 20, paddingVertical: 18, flexDirection: "row", marginHorizontal: 16, marginVertical: 6, alignItems: "center", justifyContent: "space-between", borderRadius: 12, backgroundColor: "#ffffff"}} onPress={goToDetail}>
            <View style={{flex: 1}}>
                <Text style={{marginBottom: 16, fontSize: 18, fontWeight: "bold", fontStyle: "normal", letterSpacing: 0, color: "#222222"}}>
                    {item.HG_NM} ({item.SEX_GBN_NM})
                </Text>
                <View style={{flexDirection: "row"}}>
                    <View style={{flex: 1, paddingRight: 14}}>
                        <View style={{flexDirection: "row", alignItems: "center", paddingBottom: 6}}>
                            <Text style={{fontSize: 13, width: 55, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0, color: "#919aa4"}}>정당</Text>
                            <Text style={{color: makeFontColor(item.POLY_NM), fontSize: 13, fontWeight: "500", fontStyle: "normal", letterSpacing: 0}}>{item.POLY_NM}</Text>
                        </View>
                        <View style={{flexDirection: "row", alignItems: "center", paddingBottom: 6}}>
                            <Text style={{fontSize: 13, width: 55, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0, color: "#919aa4"}}>선거구</Text>
                            <Text style={{color: "#222222", fontSize: 13, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0}}>{item.ORIG_NM}</Text>
                        </View>
                        <View style={{flexDirection: "row", alignItems: "center", paddingBottom: 6}}>
                            <Text style={{fontSize: 13, width: 55, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0, color: "#919aa4"}}>재선</Text>
                            <Text style={{color: "#222222", fontSize: 13, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0}}>{item.REELE_GBN_NM}</Text>
                        </View>
                        <View style={{flexDirection: "row", alignItems: "center", paddingBottom: 6}}>
                            <Text style={{fontSize: 13, width: 55, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0, color: "#919aa4"}}>위원회</Text>
                            <Text style={{flex: 1, color: "#222222", fontSize: 13, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0}}>{item.CMIT_NM}</Text>
                        </View>
                        <View style={{flexDirection: "row", alignItems: "center", paddingBottom: 6}}>
                            <Text style={{fontSize: 13, width: 55, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0, color: "#919aa4"}}>연락처</Text>
                            <Text style={{color: "#222222", fontSize: 13, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0}}>{item.TEL_NO}</Text>
                        </View>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Text style={{fontSize: 13, width: 55, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0, color: "#919aa4"}}>사무실</Text>
                            <Text style={{color: "#222222", fontSize: 13, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0}}>{item.ASSEM_ADDR}</Text>
                        </View>
                    </View>
                    <Image style={{width: 75, height: 100, borderRadius: 8}} source={{uri: item.IMAGE}}></Image>
                </View>
            </View>
        </Pressable>
    );
};

export default Member;
