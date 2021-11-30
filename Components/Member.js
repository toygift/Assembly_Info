import {useNavigation} from "@react-navigation/native";
import React from "react";
import {Pressable, Text, View, Image, StyleSheet} from "react-native";
import {makeFontColor} from "../colors";
const Member = ({item}) => {
    const navigation = useNavigation();
    const goToDetail = () => {
        navigation.navigate("Member_Detail", {});
    };
    return (
        <Pressable style={styles.container} onPress={goToDetail}>
            <View style={{flex: 1}}>
                <Text style={styles.name_text}>
                    {item.HG_NM} ({item.SEX_GBN_NM})
                </Text>
                <View style={{flexDirection: "row"}}>
                    <View style={{flex: 1, paddingRight: 14}}>
                        <View style={{flexDirection: "row", alignItems: "center", paddingBottom: 6}}>
                            <Text style={styles.key_text}>정당</Text>
                            <Text style={styles.key_poly_text}>{item.POLY_NM}</Text>
                        </View>
                        <View style={{flexDirection: "row", alignItems: "center", paddingBottom: 6}}>
                            <Text style={styles.key_text}>선거구</Text>
                            <Text style={styles.value_text}>{item.ORIG_NM}</Text>
                        </View>
                        <View style={{flexDirection: "row", alignItems: "center", paddingBottom: 6}}>
                            <Text style={styles.key_text}>재선</Text>
                            <Text style={styles.value_text}>{item.REELE_GBN_NM}</Text>
                        </View>
                        <View style={{flexDirection: "row", alignItems: "center", paddingBottom: 6}}>
                            <Text style={styles.key_text}>위원회</Text>
                            <Text style={styles.value_text}>{item.CMIT_NM}</Text>
                        </View>
                        <View style={{flexDirection: "row", alignItems: "center", paddingBottom: 6}}>
                            <Text style={styles.key_text}>연락처</Text>
                            <Text style={styles.value_text}>{item.TEL_NO}</Text>
                        </View>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Text style={styles.key_text}>사무실</Text>
                            <Text style={styles.value_text}>{item.ASSEM_ADDR}</Text>
                        </View>
                    </View>
                    <Image style={styles.image} source={{uri: item.IMAGE}}></Image>
                </View>
            </View>
        </Pressable>
    );
};

export default Member;
const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: "yellow", paddingHorizontal: 20, paddingVertical: 18, flexDirection: "row", marginHorizontal: 16, marginVertical: 6, alignItems: "center", justifyContent: "space-between", borderRadius: 12, backgroundColor: "#ffffff"},
    name_text: {marginBottom: 16, fontSize: 18, fontWeight: "bold", fontStyle: "normal", letterSpacing: 0, color: "#222222"},
    key_poly_text: {color: makeFontColor(item.POLY_NM), fontSize: 13, fontWeight: "500", fontStyle: "normal", letterSpacing: 0},
    key_text: {fontSize: 13, width: 55, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0, color: "#919aa4"},
    value_text: {
        color: "#222222",
        fontSize: 13,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
    },
    image: {width: 75, height: 100, borderRadius: 8},
})
