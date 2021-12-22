import React, {useState, useEffect, Fragment} from "react";
import {View, Text, FlatList, Dimensions, ActivityIndicator, SafeAreaView} from "react-native";
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

    const exist_data = _.has(voteData, "nojepdqqaweusdfbi");
    console.log("99", exist_data);
    if (exist_data) {
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
    }

    const loading = voteLoading;
    return loading ? (
        <View style={{flex: 1, justifyContent: "center"}}>
            <ActivityIndicator />
        </View>
    ) : voteData ? (
        <Fragment>
            <SafeAreaView style={{flex: 0, backgroundColor: "white"}} />
            <SafeAreaView style={{flex: 1}}>
                <View style={{backgroundColor: "white", height: 50, paddingTop: 10}}>
                    <SegmentedControl
                        values={["이름순", "정당별"]}
                        selectedIndex={index}
                        onChange={e => {
                            setIndex(e.nativeEvent.selectedSegmentIndex);
                        }}
                        style={{marginHorizontal: 18, backgroundColor: "white"}}
                    />
                </View>

                {index === 1 ? (
                    <Party
                        item={end_of_party.sort(function (a, b) {
                            return a.data.length < b.data.length ? 1 : a.data.length > b.data.length ? -1 : 0;
                        })}></Party>
                ) : (
                    <FlatList
                        keyExtractor={item => item.MONA_CD}
                        numColumns={4}
                        data={exist_data ? voteData.nojepdqqaweusdfbi[1].row : null}
                        renderItem={renderItem}
                        columnWrapperStyle={{
                            justifyContent: "flex-start",
                            marginLeft: 16,
                            marginRight: 12,
                        }}
                        contentContainerStyle={{paddingTop: 8}}
                        ItemSeparatorComponent={() => <View style={{height: 4}}></View>}
                        ListEmptyComponent={
                            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                                <Text>해당되는 데이터가 없습니다.</Text>
                            </View>
                        }></FlatList>
                )}
            </SafeAreaView>
        </Fragment>
    ) : null;
};

export default Votes;
