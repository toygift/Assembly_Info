import React, {useState, useEffect} from "react";
import {View, Text, FlatList, Dimensions, ActivityIndicator} from "react-native";
const width = Dimensions.get("window").width;
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import _ from "lodash";
import {useQuery, useQueryClient} from "react-query";
import Bdd from "../Components/Bdd";
import {assemblyApi} from "../api";

renderItem = ({item}) => {
    const background_color = item.RESULT_VOTE_MOD === "찬성" ? "#b4e830" : item.RESULT_VOTE_MOD === "기권" ? "#ffe500" : item.RESULT_VOTE_MOD === "반대" ? "#ff8463" : "gray";
    return (
        <View style={{width: width / 3, paddingVertical: 10, flexDirection: "column", margin: 1, backgroundColor: background_color, justifyContent: "center", alignItems: "center"}}>
            <View>
                <Text style={{color: item.RESULT_VOTE_MOD === "불참" ? "black" : "black", fontSize: 20, fontWeight: "bold"}}>{item.HG_NM}</Text>
            </View>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Text style={{color: item.RESULT_VOTE_MOD === "불참" ? "black" : "black", fontWeight: "bold"}}>{item.POLY_NM}</Text>
                {/* <View style={{marginLeft: 5, width: 10, height: 10, borderRadius: 10, backgroundColor: background_color}}></View> */}
            </View>
        </View>
    );
};

const Votes = ({
    navigation: {setOptions},
    route: {
        params: {BILL_ID, TITLE},
    },
}) => {
    useEffect(() => {
        setOptions({
            title: TITLE,
        });
    }, []);
    const [index, setIndex] = useState(0);
    const {isLoading: voteLoading, data: voteData, isRefetching: voteIsRefetching} = useQuery(["member_vote", BILL_ID], assemblyApi.member_vote);
    let end_of_party = [];
    if (voteData) {
        voteData.nojepdqqaweusdfbi[1].row.sort(function (a, b) {
            return a.HG_NM < b.HG_NM ? -1 : a.HG_NM > b.HG_NM ? 1 : 0;
        });

        const party = _.map(voteData.nojepdqqaweusdfbi[1].row, "POLY_NM");
        const type_of_party = _.uniq(party);

        for (let index = 0; index < type_of_party.length; index++) {
            let party = [];
            for (let index1 = 0; index1 < voteData.nojepdqqaweusdfbi[1].row.length; index1++) {
                if (type_of_party[index] === voteData.nojepdqqaweusdfbi[1].row[index1].POLY_NM) {
                    party.push(voteData.nojepdqqaweusdfbi[1].row[index1]);
                }
            }
            end_of_party.push({party: type_of_party[index], data: party});
        }
    }
    const loading = voteLoading;
    return loading ? (
        <View style={{flex: 1, justifyContent: "center"}}>
            <ActivityIndicator />
        </View>
    ) : voteData ? (
        <View style={{flex: 1}}>
            <SegmentedControl
                values={["이름순", "정당별"]}
                selectedIndex={index}
                onChange={e => {
                    setIndex(e.nativeEvent.selectedSegmentIndex);
                }}
            />
            {index === 1 ? <Bdd item={end_of_party}></Bdd> : <FlatList keyExtractor={item => item.MONA_CD} numColumns={3} data={voteData.nojepdqqaweusdfbi[1].row} renderItem={renderItem}></FlatList>}
        </View>
    ) : null;
};

export default Votes;
