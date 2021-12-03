import React, {useEffect} from "react";
import {View, Text, FlatList, Image, ActivityIndicator} from "react-native";
import Member_Law from "../Components/Member_Law";
import {assemblyApi} from "../api";
import {useQuery, useQueryClient} from "react-query";
import Title from "../Components/Title";
import Member_Detail_Header from "../Components/Member_Detail_Header";

const renderHeader = (item, length) => {
    return <Member_Detail_Header item={item} length={length}></Member_Detail_Header>;
};
const Member_Detail = ({
    navigation: {setOptions},
    route: {
        params: {member_data},
    },
}) => {
    useEffect(() => {
        setOptions({
            title: "국회의원 뭐해",
        });
    }, []);
    const {isLoading: proposeLoading, data: proposeData, isRefetching: proposeIsRefetching} = useQuery(["member_propose", member_data], assemblyApi.member_propose);
    if (proposeData) {
    }
    const loading = proposeLoading;
    return loading ? (
        <View style={{flex: 1, justifyContent: "center"}}>
            <ActivityIndicator />
        </View>
    ) : proposeData ? (
        <FlatList
            ItemSeparatorComponent={() => {
                return <View style={{height: 10}}></View>;
            }}
            style={{backgroundColor: "white"}}
            contentContainerStyle={{backgroundColor: "white", paddingBottom: 30}}
            ListHeaderComponent={() => renderHeader(member_data, proposeData.nzmimeepazxkubdpn[1].row.length)}
            keyExtractor={item => item.BILL_ID}
            data={proposeData.nzmimeepazxkubdpn[1].row}
            renderItem={({item}) => {
                return <Member_Law member_data={member_data} item={item}></Member_Law>;
            }}></FlatList>
    ) : null;
};

export default Member_Detail;
