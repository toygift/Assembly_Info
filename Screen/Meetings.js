import React, {useState, useEffect} from "react";
import {View, Text, FlatList, ActivityIndicator, Pressable} from "react-native";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import {useQuery, useQueryClient} from "react-query";
import {assemblyApi} from "../api";
import Meeting from "../Components/Meeting";

const Meetings = () => {
    const [index, setIndex] = useState(0);

    const {isLoading: legislative_billLoading, data: legislative_billData, isRefetching: legislative_billIsRefetching} = useQuery(["meeting", "legislative_bill"], assemblyApi.legislative_bill);
    const {isLoading: budgetLoading, data: budgetData, isRefetching: budgetIsRefetching} = useQuery(["meeting", "budget"], assemblyApi.budget);
    const {isLoading: etcLoading, data: etcData, isRefetching: etcIsRefetching} = useQuery(["meeting", "etc"], assemblyApi.etc);
    const {isLoading: balance_sheetLoading, data: balance_sheetData, isRefetching: balance_sheetIsRefetching} = useQuery(["meeting", "balance_sheet"], assemblyApi.balance_sheet);

    const loading = legislative_billLoading || budgetLoading || etcLoading || balance_sheetLoading;

    return loading ? (
        <View style={{flex: 1, justifyContent: "center"}}>
            <ActivityIndicator />
        </View>
    ) : (
        <View style={{flex: 1}}>
            <View>
                <SegmentedControl
                    values={["법률안", "예산안", "기타", "결산"]}
                    selectedIndex={index}
                    onChange={e => {
                        setIndex(e.nativeEvent.selectedSegmentIndex);
                    }}
                />
            </View>
            <FlatList
                style={{flex: 1}}
                data={index === 0 ? legislative_billData.nwbpacrgavhjryiph[1].row : index === 1 ? budgetData.nzgjnvnraowulzqwl[1].row : index === 2 ? etcData.nbslryaradshbpbpm[1].row : balance_sheetData.nkalemivaqmoibxro[1].row}
                renderItem={({item}) => {
                    return <Meeting item={item}></Meeting>;
                }}
                contentContainerStyle={{marginTop: 20}}
                ItemSeparatorComponent={() => {
                    return <View style={{height: 20}}></View>;
                }}
                keyExtractor={(item, index) => index}></FlatList>
        </View>
    );
};

export default Meetings;
