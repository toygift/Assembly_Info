import React, {useCallback, useEffect, useState} from "react";
import {View, Text, ActivityIndicator} from "react-native";
import styled from "styled-components/native";
import Member from "../Components/Member";
import X2JS from "x2js";
import SearchBar from "react-native-platform-searchbar";
import {useQuery, useQueryClient} from "react-query";
import {assemblyApi} from "../api";
const Hangul = require("hangul-js");

const renderItem = ({item}) => {
    return <Member item={item}></Member>;
};
const getItemLayout = (data, index) => ({length: 175, offset: 175 * index, index});
const FlatList = styled.FlatList``;
const Members = () => {
    const queryClient = useQueryClient();
    const {isLoading: nowLoading, data: nowData, isRefetching: isRefetching} = useQuery(["members", "member_list"], assemblyApi.members);
    const keyExtractor = useCallback(item => item.MONA_CD.toString(), []);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [value, setValue] = useState("");
    // const x2js = new X2JS();
    // const rss = x2js.xml2js(data2);

    useEffect(() => {
        if (nowData) {
            let good = nowData.nwvrqwxyaytdsfvhu[1].row;
            good.forEach(function (item) {
                var dis = Hangul.disassemble(item.HG_NM, true);
                var cho = dis.reduce(function (prev, elem) {
                    elem = elem[0] ? elem[0] : elem;
                    return prev + elem;
                }, "");
                item.DISASSEMBLED = cho;
            });
            setData(good);
            setLoading(false);
        }
    }, []);

    var search1 = Hangul.disassemble(value).join(""); // ㄺ=>ㄹㄱ
    // console.log("value", member_data);
    // const filtered = members1
    //     .filter(function (item) {
    //         return item.HG_NM.includes(value) || item.DISASSEMBLED.includes(search1);
    //     })
    //     .forEach(function (item) {
    //         console.log("item", item);
    //     });

    // good.map((item, index) => {
    //     rss.response.body.items.item.map((item2, index) => {
    //         if (item.HG_NM === item2.empNm && item.HJ_NM === item2.hjNm) {
    //             good[index].IMAGE = item2.jpgLink;
    //         }
    //     });
    // });
    console.log("nowloading", nowLoading);

    return loading ? (
        <ActivityIndicator />
    ) : nowData ? (
        <View>
            <View style={{height: 56, backgroundColor: "#ffffff"}}>
                <SearchBar value={value} inputStyle={{backgroundColor: "#f5f5f5"}} style={{marginHorizontal: 16}} onChangeText={setValue} placeholder="국회의원을 검색해보세요" theme="light" platform="ios"></SearchBar>
            </View>
            <FlatList data={data} renderItem={renderItem} contentContainerStyle={{backgroundColor: "#f2f3f5", marginTop: 12}} keyExtractor={keyExtractor} getItemLayout={getItemLayout} initialNumToRender={5} maxToRenderPerBatch={10} windowSize={10}></FlatList>
        </View>
    ) : null;
};

export default Members;
