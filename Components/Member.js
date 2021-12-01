import {useNavigation} from "@react-navigation/native";
import React from "react";
import {Pressable, Text, View, Image, StyleSheet} from "react-native";
import Title from "./Title";
const Member = ({item}) => {
    const navigation = useNavigation();
    const goToDetail = () => {
        navigation.navigate("Member_Detail", {member_data: item});
    };
    return (
        <Pressable style={styles.container} onPress={goToDetail}>
            <View style={{flex: 1}}>
                <Text style={styles.name_text}>
                    {item.HG_NM} ({item.SEX_GBN_NM})
                </Text>
                <View style={{flexDirection: "row"}}>
                    <View style={{flex: 1, paddingRight: 14, justifyContent: "space-between"}}>
                        <Title type={"member"} title={"정당"} value={item.POLY_NM}></Title>
                        <Title type={"member"} title={"선거구"} value={item.ORIG_NM}></Title>
                        <Title type={"member"} title={"재선"} value={item.REELE_GBN_NM}></Title>
                        <Title type={"member"} title={"연락처"} value={item.TEL_NO}></Title>
                        <Title type={"member"} title={"사무실"} value={item.ASSEM_ADDR}></Title>
                    </View>
                    <View style={{justifyContent: "flex-end"}}>
                        <Image style={styles.image} source={{uri: item.IMAGE}}></Image>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

export default Member;
const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: "yellow", paddingHorizontal: 20, paddingVertical: 18, flexDirection: "row", marginHorizontal: 16, marginVertical: 6, alignItems: "center", justifyContent: "space-between", borderRadius: 12, backgroundColor: "#ffffff"},
    name_text: {marginBottom: 16, fontSize: 18, fontWeight: "bold", fontStyle: "normal", letterSpacing: 0, color: "#222222"},
    key_poly_text: {fontSize: 13, fontWeight: "500", fontStyle: "normal", letterSpacing: 0},
    image: {width: 75, height: 100, borderRadius: 8, alignItems: "flex-end"},
});
