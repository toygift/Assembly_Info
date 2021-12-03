import React, {useEffect} from "react";
import {View, Text, FlatList, Image, ActivityIndicator} from "react-native";
import Member_Law from "../Components/Member_Law";
import {assemblyApi} from "../api";
import {useQuery, useQueryClient} from "react-query";
import Title from "../Components/Title";
import Member_Detail_Header from "../Components/Member_Detail_Header";
import X2JS from "x2js";
const x2js = new X2JS();
import _ from "lodash";
const renderHeader = (item, length) => {
    return <Member_Detail_Header item={item} length={length}></Member_Detail_Header>;
};
const Member_Detail_P = ({
    navigation: {setOptions},
    route: {
        params: {members},
    },
}) => {
    useEffect(() => {
        setOptions({
            title: "국회의원 뭐해",
        });
    }, []);
    const {isLoading: nowLoading, data: nowData, isRefetching: memberIsRefetching} = useQuery(["members", "member_list"]);
    const {isLoading: imgLoading, data: imagData, isRefetching: imgIsRefetching} = useQuery(["members_image", "member_list_image"]);
    const {isLoading: proposeLoading, data: proposeData, isRefetching: proposeIsRefetching} = useQuery(["member_propose", members], assemblyApi.member_propose);
    const rss = x2js.xml2js(imagData);
    nowData.nwvrqwxyaytdsfvhu[1].row.map((item, index) => {
        rss.response.body.items.item.map((item2, index) => {
            if (item.HG_NM === item2.empNm && item.HJ_NM === item2.hjNm) {
                nowData.nwvrqwxyaytdsfvhu[1].row[index].IMAGE = item2.jpgLink;
            }
        });
    });
    const filter_item = _.filter(nowData.nwvrqwxyaytdsfvhu[1].row, {HG_NM: members.HG_NM, HJ_NM: members.HJ_NM});
    const loading = nowLoading || imgLoading || proposeLoading;
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
            ListHeaderComponent={() => renderHeader(filter_item[0], proposeData.nzmimeepazxkubdpn[1].row.length)}
            keyExtractor={item => item.BILL_ID}
            data={proposeData.nzmimeepazxkubdpn[1].row}
            renderItem={({item}) => {
                return <Member_Law member_data={filter_item[0]} item={item}></Member_Law>;
            }}></FlatList>
    ) : null;
};

export default Member_Detail_P;
