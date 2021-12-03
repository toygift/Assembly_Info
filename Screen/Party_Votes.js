import React, {useState, useEffect} from "react";
import {View, Text, FlatList, Dimensions, ActivityIndicator} from "react-native";
import Vote_Color_Block from "../Components/Vote_Color_Block";
const width = Dimensions.get("window").width;

renderItem = ({item}) => {
    return <Vote_Color_Block item={item}></Vote_Color_Block>;
};

const Party_Votes = ({
    navigation: {setOptions},
    route: {
        params: {data, title},
    },
}) => {
    useEffect(() => {
        setOptions({
            title: title,
        });
    }, []);

    data.sort(function (a, b) {
        return a.HG_NM < b.HG_NM ? -1 : a.HG_NM > b.HG_NM ? 1 : 0;
    });

    return data ? (
        <View style={{flex: 1}}>
            <FlatList keyExtractor={item => item.MONA_CD} numColumns={data.length >= 3 ? 3 : data.length} data={data} renderItem={renderItem}></FlatList>
        </View>
    ) : null;
};

export default Party_Votes;
