import React, {useState, useEffect} from "react";
import {View, Text, FlatList, Dimensions, ActivityIndicator} from "react-native";
const width = Dimensions.get("window").width;
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import _ from "lodash";
import {useQuery, useQueryClient} from "react-query";
import Party from "../Components/Party";
import {assemblyApi} from "../api";
import Vote_Color_Block from "../Components/Vote_Color_Block";

renderItem = ({item}) => {
    return <Vote_Color_Block item={item}></Vote_Color_Block>;
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
            {index === 1 ? (
                <Party
                    item={end_of_party.sort(function (a, b) {
                        return a.data.length < b.data.length ? 1 : a.data.length > b.data.length ? -1 : 0;
                    })}></Party>
            ) : (
                <FlatList keyExtractor={item => item.MONA_CD} numColumns={3} data={voteData.nojepdqqaweusdfbi[1].row} renderItem={renderItem}></FlatList>
            )}
        </View>
    ) : null;
};

export default Votes;
