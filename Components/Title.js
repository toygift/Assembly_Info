import React from "react";
import {Text, StyleSheet, View} from "react-native";
import {makeFontColor} from "../colors";
const Title = ({type, title, value}) => {
    const title_color = title === "정당" ? makeFontColor(value) : "#222222";
    const width = type === "member" ? 45 : 80;
    const padding = type === "member" ? 0 : 7;
    return (
        <View style={{flexDirection: "row", alignItems: "center", paddingBottom: padding}}>
            <Text style={[styles.key_text, {width: width}]}>{title}</Text>
            <Text style={[styles.value_text, {color: title_color}]}>{value}</Text>
        </View>
    );
};
export default Title;
const styles = StyleSheet.create({
    key_text: {fontSize: 13, fontWeight: "normal", fontStyle: "normal", color: "#919aa4"},
    value_text: {
        flex: 1,
        fontSize: 13,
        fontWeight: "normal",
        fontStyle: "normal",
    },
});
