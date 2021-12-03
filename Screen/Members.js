import React, {useCallback, useEffect, useState} from "react";
import {View, Text, ActivityIndicator} from "react-native";
import styled from "styled-components/native";
import Member from "../Components/Member";
import X2JS from "x2js";
import SearchBar from "react-native-platform-searchbar";
import {useQuery, useQueryClient} from "react-query";
import {assemblyApi} from "../api";
const Hangul = require("hangul-js");
const x2js = new X2JS();

const renderItem = ({item}) => {
    return <Member item={item}></Member>;
};
const FlatList = styled.FlatList``;
const Members = () => {
    const queryClient = useQueryClient();
    const {isLoading: nowLoading, data: nowData, isRefetching: memberIsRefetching} = useQuery(["members", "member_list"], assemblyApi.members);
    const {isLoading: imgLoading, data: imagData, isRefetching: imgIsRefetching} = useQuery(["members_image", "member_list_image"], assemblyApi.members_image);
    const keyExtractor = useCallback(item => item.MONA_CD.toString(), []);
    const [value, setValue] = useState("");

    let filtered = [];
    if (nowData && imagData) {
        nowData.nwvrqwxyaytdsfvhu[1].row.forEach(function (item) {
            var dis = Hangul.disassemble(item.HG_NM, true);
            var cho = dis.reduce(function (prev, elem) {
                elem = elem[0] ? elem[0] : elem;
                return prev + elem;
            }, "");
            item.DISASSEMBLED = cho;
        });
        var search1 = Hangul.disassemble(value).join(""); // ㄺ=>ㄹㄱ
        const rss = x2js.xml2js(imagData);
        nowData.nwvrqwxyaytdsfvhu[1].row.map((item, index) => {
            rss.response.body.items.item.map((item2, index) => {
                if (item.HG_NM === item2.empNm && item.HJ_NM === item2.hjNm) {
                    nowData.nwvrqwxyaytdsfvhu[1].row[index].IMAGE = item2.jpgLink;
                }
            });
        });
        // const filtered = nowData.nwvrqwxyaytdsfvhu[1].row.filter(function (item) {
        //     return item.HG_NM.includes(value) || item.DISASSEMBLED.includes(search1);
        // });
        filtered = nowData.nwvrqwxyaytdsfvhu[1].row.filter(function (item) {
            return item.HG_NM.includes(value) || item.DISASSEMBLED.includes(search1);
        });
    }
    const loading = nowLoading || imgLoading;
    return loading ? (
        <View style={{flex: 1, justifyContent: "center"}}>
            <ActivityIndicator />
        </View>
    ) : nowData ? (
        <View style={{flex: 1}}>
            <View style={{height: 56, backgroundColor: "#ffffff"}}>
                <SearchBar value={value} inputStyle={{backgroundColor: "#f5f5f5", height: 44, fontSize: 15, color: "#a0a0a0"}} style={{marginHorizontal: 16}} onChangeText={setValue} placeholder="국회의원을 검색해보세요" theme="light" platform="ios"></SearchBar>
            </View>
            <FlatList data={value === "" ? nowData.nwvrqwxyaytdsfvhu[1].row : filtered} renderItem={renderItem} contentContainerStyle={{backgroundColor: "#f2f3f5", marginTop: 6, paddingBottom: 30}} keyExtractor={keyExtractor} initialNumToRender={5} maxToRenderPerBatch={10} windowSize={10}></FlatList>
        </View>
    ) : null;
};

export default Members;
