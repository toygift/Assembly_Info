import {useNavigation} from "@react-navigation/native";
import React from "react";
import {Pressable, Text, View, Switch, StyleSheet, FlatList, Dimensions, Platform} from "react-native";
const width = Dimensions.get("window").width;
const data = ["1,000원", "2,000원", "5,000원", "10,000원"];
renderItem = ({item}) => {
    return (
        <View style={{paddingHorizontal: 6, height: 66, width: (width - 32) / 2}}>
            <View
                style={{
                    height: 66,
                    borderRadius: 6,
                    backgroundColor: "#ffffff",
                    shadowColor: "rgba(150, 157, 169, 0.12)",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowRadius: 6,
                    shadowOpacity: 1,
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "#d5d8dd",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <Text style={{fontSize: 11, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0, textAlign: "center", color: "#7f8387"}}>후원하기</Text>
                <Text style={{marginTop: 4, fontSize: 20, fontWeight: "bold", fontStyle: "normal", letterSpacing: 0, textAlign: "center", color: "#73787b"}}>{item}</Text>
            </View>
        </View>
    );
};
const Setting = ({item}) => {
    const navigation = useNavigation();
    const goToDetail = () => {
        navigation.navigate("Member_Detail", {member_data: item});
    };
    return (
        <View style={styles.container} onPress={goToDetail}>
            <View style={styles.section_style}>
                <Text style={styles.section_title}>서비스 설정/정보</Text>
            </View>
            <View style={[styles.row_style, {flexDirection: "row", justifyContent: "space-between", alignItems: "center"}]}>
                <Text style={styles.row_title}>다크모드 설정하기</Text>
                <Switch
                    // onValueChange={e => this._toggle_switch(e)}
                    value={true}
                    trackColor={{false: "gray", true: "#004f98"}}
                    thumbColor={Platform.OS === "android" ? "#e6e6e6" : "white"}
                    style={{
                        marginBottom: 2,
                        transform: [{scaleX: 0.7}, {scaleY: 0.7}],
                    }}></Switch>
            </View>
            <View style={styles.row_style}>
                <Text style={styles.row_title}>오픈소스 라이센스</Text>
            </View>
            <View style={styles.row_style}>
                <Text style={styles.row_title}>버전정보</Text>
            </View>
            <View style={{height: 1, backgroundColor: "#ededed", marginTop: 20}}></View>
            <View style={[styles.section_style, {marginTop: 12}]}>
                <Text style={styles.section_title}>서비스 후원하기</Text>
            </View>
            <View style={[styles.section_style]}>
                <Text style={{fontSize: 13, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0, color: "#7f8387"}}>모든 사용자가 서비스 이용에 불편함이 없도록 광고 및 로그인 없이 운영하고 있습니다.</Text>
            </View>
            <FlatList
                keyExtractor={item => item}
                numColumns={2}
                data={data}
                style={{marginTop: 10}}
                renderItem={renderItem}
                columnWrapperStyle={{
                    marginLeft: 16,
                }}
                ItemSeparatorComponent={() => <View style={{height: 12}}></View>}
                contentContainerStyle={{paddingTop: 8}}></FlatList>
        </View>
    );
};

export default Setting;

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: "white"},
    section_style: {height: 44, justifyContent: "center", paddingHorizontal: 16},
    row_style: {height: 48, justifyContent: "center", paddingHorizontal: 16},
    section_title: {fontSize: 13, fontWeight: "bold", fontStyle: "normal", letterSpacing: 0, color: "#7f8387"},
    row_title: {
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000",
    },
});
