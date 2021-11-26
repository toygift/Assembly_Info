import {useNavigation} from "@react-navigation/native";
import React from "react";
import {TouchableOpacity, Text, View, Image} from "react-native";
// import styled from "styled-components/native";

const Member = ({item}) => {
    const navigation = useNavigation();
    const goToDetail = () => {
        navigation.navigate("Member_Detail", {});
    };
    const background_color = item.POLY_NM === "국민의힘" ? "rgba(230, 30, 43,1)" : "rgba(0, 160, 226,1)";
    return (
        <TouchableOpacity style={{flex: 1, flexDirection: "row", paddingHorizontal: 20, paddingVertical: 10, alignItems: "center", justifyContent: "space-between"}} onPress={goToDetail}>
            <View style={{flex: 0.9}}>
                <View>
                    <Text>
                        이름: {item.HG_NM} ({item.SEX_GBN_NM})
                    </Text>
                </View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Text>정당명: </Text>
                    <Text style={{color: background_color}}>{item.POLY_NM}</Text>
                    {/* <View style={{marginLeft: 5, width: 10, height: 10, borderRadius: 10, backgroundColor: background_color}}></View> */}
                </View>
                <View>
                    <Text>선거구: {item.ORIG_NM}</Text>
                </View>
                <View>
                    <Text>재선: {item.REELE_GBN_NM}</Text>
                </View>
                <View>
                    <Text>당선: {item.UNITS}</Text>
                </View>
                <View>
                    <Text>연락처: {item.TEL_NO}</Text>
                </View>
                <View>
                    <Text>이메일 :{item.E_MAIL}</Text>
                </View>

                <View>
                    <Text>홈페이지: {item.HOMEPAGE}</Text>
                </View>
                <View>
                    <Text>사무실 호실: {item.ASSEM_ADDR}</Text>
                </View>
            </View>
            <Image style={{width: 100, height: 150, borderRadius: 150 / 20}} source={{uri: item.IMAGE}}></Image>
        </TouchableOpacity>
    );
};

export default Member;
