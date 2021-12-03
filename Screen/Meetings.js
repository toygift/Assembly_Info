import React, {useState, useEffect} from "react";
import {View, Text, FlatList} from "react-native";
import SegmentedControl from "@react-native-segmented-control/segmented-control";

const data1 = [
    {
        AGE: "21",
        BILL_NO: "2113222",
        BILL_NM: "임업·산림 공익기능 증진을 위한 직접지불제도 운영에 관한 법률안(대안)(농림축산식품해양수산위원장)",
        BILL_KIND: "법률안",
        PROPOSER: "농림축산식품해양수산위원장",
        COMMITTEE_NM: "농림축산식품해양수산위원회",
        PROC_RESULT_CD: "원안가결",
        VOTE_TCNT: 193,
        YES_TCNT: 192,
        NO_TCNT: null,
        BLANK_TCNT: 1,
        PROPOSE_DT: "2021-11-10",
        COMMITTEE_SUBMIT_DT: null,
        COMMITTEE_PRESENT_DT: "2021-10-05",
        COMMITTEE_PROC_DT: "2021-10-05",
        LAW_SUBMIT_DT: "2021-10-05",
        LAW_PRESENT_DT: "2021-11-09",
        LAW_PROC_DT: "2021-11-09",
        RGS_PRESENT_DT: "2021-11-11",
        RGS_PROC_DT: "2021-11-11",
        CURR_TRANS_DT: "2021-11-19",
        ANNOUNCE_DT: null,
        BILL_ID: "PRC_R2C1F0L9R3A0Z1N5B3F4I2Y7N3M0P2",
        LINK_URL: "https://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_R2C1F0L9R3A0Z1N5B3F4I2Y7N3M0P2",
        CURR_COMMITTEE_ID: "9700408",
    },
    {
        AGE: "21",
        BILL_NO: "2113223",
        BILL_NM: "청소년 보호법 일부개정법률안(대안)(여성가족위원장)",
        BILL_KIND: "법률안",
        PROPOSER: "여성가족위원장",
        COMMITTEE_NM: "여성가족위원회",
        PROC_RESULT_CD: "원안가결",
        VOTE_TCNT: 189,
        YES_TCNT: 182,
        NO_TCNT: null,
        BLANK_TCNT: 7,
        PROPOSE_DT: "2021-11-10",
        COMMITTEE_SUBMIT_DT: null,
        COMMITTEE_PRESENT_DT: "2021-10-22",
        COMMITTEE_PROC_DT: "2021-10-22",
        LAW_SUBMIT_DT: "2021-10-22",
        LAW_PRESENT_DT: "2021-11-09",
        LAW_PROC_DT: "2021-11-09",
        RGS_PRESENT_DT: "2021-11-11",
        RGS_PROC_DT: "2021-11-11",
        CURR_TRANS_DT: null,
        ANNOUNCE_DT: null,
        BILL_ID: "PRC_D2Z1O1J0M2G0I1F1E0Q9I2V1Z3G0T9",
        LINK_URL: "https://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_D2Z1O1J0M2G0I1F1E0Q9I2V1Z3G0T9",
        CURR_COMMITTEE_ID: "9700342",
    },
    {
        AGE: "21",
        BILL_NO: "2113205",
        BILL_NM: "골재채취법 일부개정법률안(대안)(국토교통위원장)",
        BILL_KIND: "법률안",
        PROPOSER: "국토교통위원장",
        COMMITTEE_NM: "국토교통위원회",
        PROC_RESULT_CD: "원안가결",
        VOTE_TCNT: 203,
        YES_TCNT: 202,
        NO_TCNT: null,
        BLANK_TCNT: 1,
        PROPOSE_DT: "2021-11-10",
        COMMITTEE_SUBMIT_DT: null,
        COMMITTEE_PRESENT_DT: "2021-09-16",
        COMMITTEE_PROC_DT: "2021-09-16",
        LAW_SUBMIT_DT: "2021-09-16",
        LAW_PRESENT_DT: "2021-11-09",
        LAW_PROC_DT: "2021-11-09",
        RGS_PRESENT_DT: "2021-11-11",
        RGS_PROC_DT: "2021-11-11",
        CURR_TRANS_DT: null,
        ANNOUNCE_DT: null,
        BILL_ID: "PRC_J2X1M0Q9Y1K5A1H0A3N4E0N5L2Z7Q3",
        LINK_URL: "https://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_J2X1M0Q9Y1K5A1H0A3N4E0N5L2Z7Q3",
        CURR_COMMITTEE_ID: "9700407",
    },
];
const data2 = [
    {
        AGE: "21",
        BILL_NO: "2111289",
        BILL_NAME: "2021년도 관광진흥개발기금운용계획변경안(정부)",
        BILL_KIND: "예산안",
        PROC_RESULT_CD: "원안가결",
        VOTE_TCNT: 235,
        YES_TCNT: 225,
        NO_TCNT: 2,
        BLANK_TCNT: 8,
        PROPOSE_DT: "2021-07-02",
        BDG_SUBMIT_DT: "2021-07-14",
        BDG_PRESENT_DT: "2021-07-24",
        BDG_PROC_DT: "2021-07-24",
        RGS_PRESENT_DT: "2021-07-24",
        RGS_PROC_DT: "2021-07-24",
        CURR_TRANS_DT: "2021-07-24",
        BILL_ID: "PRC_V2G1X0E7A0W2D0K9Y5F0Z0H4M5W3Z9",
        LINK_URL: "https://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_V2G1X0E7A0W2D0K9Y5F0Z0H4M5W3Z9",
        CURR_COMMITTEE_ID: "9700049",
        COMMITTEE_NM: "예산결산특별위원회",
    },
    {
        AGE: "21",
        BILL_NO: "2111288",
        BILL_NAME: "2021년도 문화예술진흥기금운용계획변경안(정부)",
        BILL_KIND: "예산안",
        PROC_RESULT_CD: "원안가결",
        VOTE_TCNT: 232,
        YES_TCNT: 223,
        NO_TCNT: 2,
        BLANK_TCNT: 7,
        PROPOSE_DT: "2021-07-02",
        BDG_SUBMIT_DT: "2021-07-14",
        BDG_PRESENT_DT: "2021-07-24",
        BDG_PROC_DT: "2021-07-24",
        RGS_PRESENT_DT: "2021-07-24",
        RGS_PROC_DT: "2021-07-24",
        CURR_TRANS_DT: "2021-07-24",
        BILL_ID: "PRC_Q2D1O0X7G0D2W0I9A4I9Z3T9G8H3V2",
        LINK_URL: "https://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_Q2D1O0X7G0D2W0I9A4I9Z3T9G8H3V2",
        CURR_COMMITTEE_ID: "9700049",
        COMMITTEE_NM: "예산결산특별위원회",
    },
    {
        AGE: "21",
        BILL_NO: "2111287",
        BILL_NAME: "2021년도 국민체육진흥기금운용계획변경안(정부)",
        BILL_KIND: "예산안",
        PROC_RESULT_CD: "수정가결",
        VOTE_TCNT: 234,
        YES_TCNT: 225,
        NO_TCNT: 2,
        BLANK_TCNT: 7,
        PROPOSE_DT: "2021-07-02",
        BDG_SUBMIT_DT: "2021-07-14",
        BDG_PRESENT_DT: "2021-07-24",
        BDG_PROC_DT: "2021-07-24",
        RGS_PRESENT_DT: "2021-07-24",
        RGS_PROC_DT: "2021-07-24",
        CURR_TRANS_DT: "2021-07-24",
        BILL_ID: "PRC_N2N1N0K7J0O2B0U9V4F8S1Z1X3H0T9",
        LINK_URL: "https://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_N2N1N0K7J0O2B0U9V4F8S1Z1X3H0T9",
        CURR_COMMITTEE_ID: "9700049",
        COMMITTEE_NM: "예산결산특별위원회",
    },
];
const data3 = [
    {
        AGE: "21",
        BILL_NO: "2113246",
        BILL_NM: "위문금 갹출의 건(의장)",
        BILL_KIND: "기타",
        PROPOSER_KIND_CD: "의장",
        PROPOSER: "의장",
        COMMITTEE_NM: null,
        PROC_RESULT_CD: "원안가결",
        VOTE_TCNT: null,
        YES_TCNT: null,
        NO_TCNT: null,
        BLANK_TCNT: null,
        PROPOSE_DT: "2021-11-11",
        COMMITTEE_SUBMIT_DT: null,
        COMMITTEE_PRESENT_DT: null,
        COMMITTEE_PROC_DT: null,
        RGS_PRESENT_DT: "2021-11-11",
        RGS_PROC_DT: "2021-11-11",
        CURR_TRANS_DT: null,
        ANNOUNCE_DT: null,
        BILL_ID: "PRC_F2N1R1P1B1N1L0A8W5Y9T3Z7E4F6B5",
        LINK_URL: "https://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_F2N1R1P1B1N1L0A8W5Y9T3Z7E4F6B5",
        CURR_COMMITTEE_ID: null,
    },
    {
        AGE: "21",
        BILL_NO: "2113244",
        BILL_NM: "정치개혁 특별위원회 구성결의안(국회운영위원장)",
        BILL_KIND: "기타",
        PROPOSER_KIND_CD: "위원장",
        PROPOSER: "국회운영위원장",
        COMMITTEE_NM: "국회운영위원회",
        PROC_RESULT_CD: "원안가결",
        VOTE_TCNT: 186,
        YES_TCNT: 186,
        NO_TCNT: null,
        BLANK_TCNT: null,
        PROPOSE_DT: "2021-11-10",
        COMMITTEE_SUBMIT_DT: null,
        COMMITTEE_PRESENT_DT: "2021-11-10",
        COMMITTEE_PROC_DT: "2021-11-10",
        RGS_PRESENT_DT: "2021-11-11",
        RGS_PROC_DT: "2021-11-11",
        CURR_TRANS_DT: null,
        ANNOUNCE_DT: null,
        BILL_ID: "PRC_O2Q1N1Z1K0D9X1N6I1W6Q3K6J7X4H1",
        LINK_URL: "https://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_O2Q1N1Z1K0D9X1N6I1W6Q3K6J7X4H1",
        CURR_COMMITTEE_ID: "9700005",
    },
    {
        AGE: "21",
        BILL_NO: "2112780",
        BILL_NM: "국회의원(곽상도) 사직의 건(곽상도의원)",
        BILL_KIND: "기타",
        PROPOSER_KIND_CD: "의원",
        PROPOSER: "곽상도의원",
        COMMITTEE_NM: null,
        PROC_RESULT_CD: "원안가결",
        VOTE_TCNT: null,
        YES_TCNT: null,
        NO_TCNT: null,
        BLANK_TCNT: null,
        PROPOSE_DT: "2021-10-05",
        COMMITTEE_SUBMIT_DT: null,
        COMMITTEE_PRESENT_DT: null,
        COMMITTEE_PROC_DT: null,
        RGS_PRESENT_DT: "2021-11-11",
        RGS_PROC_DT: "2021-11-11",
        CURR_TRANS_DT: null,
        ANNOUNCE_DT: null,
        BILL_ID: "PRC_Z2S1B1B0U0B5C1R5E4T4S4T0Y1I9S3",
        LINK_URL: "https://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_Z2S1B1B0U0B5C1R5E4T4S4T0Y1I9S3",
        CURR_COMMITTEE_ID: null,
    },
];
const data4 = [
    {
        AGE: "21",
        BILL_NO: "2100027",
        BILL_NAME: "2019회계연도 결산(정부)",
        BILL_KIND: "결산",
        PROC_RESULT_CD: "원안가결",
        VOTE_TCNT: 266,
        YES_TCNT: 262,
        NO_TCNT: null,
        BLANK_TCNT: 4,
        PROPOSE_DT: "2020-06-01",
        BDG_SUBMIT_DT: "2020-08-24",
        BDG_PRESENT_DT: "2020-08-24",
        BDG_PROC_DT: "2020-11-12",
        RGS_PRESENT_DT: "2020-11-19",
        RGS_PROC_DT: "2020-11-19",
        CURR_TRANS_DT: "2020-11-19",
        BILL_ID: "PRC_G2Y0B0S6Y0D1R1C4U1L6C5P4T4Q6Q7",
        LINK_URL: "https://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_G2Y0B0S6Y0D1R1C4U1L6C5P4T4Q6Q7",
        CURR_COMMITTEE_ID: "9700049",
        COMMITTEE_NM: "예산결산특별위원회",
    },
];
const renderItem = ({item}) => {
    const background_color = item.RESULT_VOTE_MOD === "찬성" ? "#b4e830" : item.RESULT_VOTE_MOD === "기권" ? "#ffe500" : "#ff8463";
    return (
        <View style={{paddingHorizontal: 20, paddingVertical: 10, flexDirection: "column", margin: 1, justifyContent: "center"}}>
            <View>
                <Text style={{color: "black", fontSize: 20}}>{item.BILL_NM ?? item.BILL_NAME}</Text>
            </View>
            <View style={{}}>
                <Text style={{color: "black"}}>제안자: {item.PROPOSER}</Text>
                <Text style={{color: "black"}}>소관위원회: {item.COMMITTEE_NM}</Text>
                <Text style={{color: "black"}}>의결결과: {item.PROC_RESULT_CD}</Text>
                <View style={{flexDirection: "row"}}>
                    <Text>제안일</Text>
                    <Text>{item.PROPOSE_DT}</Text>
                </View>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", flex: 1, borderWidth: 1, borderColor: "black"}}>
                <View style={{justifyContent: "center", alignItems: "center"}}>
                    <Text>총투표수</Text>
                    <Text>{item.VOTE_TCNT}</Text>
                </View>
                <View style={{justifyContent: "center", alignItems: "center"}}>
                    <Text>찬성</Text>
                    <Text>{item.YES_TCNT}</Text>
                </View>
                <View style={{justifyContent: "center", alignItems: "center"}}>
                    <Text>반대</Text>
                    <Text>{item.NO_TCNT}</Text>
                </View>
                <View style={{justifyContent: "center", alignItems: "center"}}>
                    <Text>기권</Text>
                    <Text>{item.BLANK_TCNT}</Text>
                </View>
            </View>
            <View style={{justifyContent: "space-between", flex: 1, borderWidth: 1, borderColor: "black"}}>
                <Text style={{textAlign: "center"}}>위원회심사</Text>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text>회부일</Text>
                        <Text>{item.COMMITTEE_SUBMIT_DT}</Text>
                    </View>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text>상정일</Text>
                        <Text>{item.COMMITTEE_PRESENT_DT}</Text>
                    </View>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text>의결일</Text>
                        <Text>{item.COMMITTEE_PROC_DT}</Text>
                    </View>
                </View>
            </View>
            <View style={{justifyContent: "space-between", flex: 1, borderWidth: 1, borderColor: "black"}}>
                <Text style={{textAlign: "center"}}>법사위체계자구심사</Text>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text>회부일</Text>
                        <Text>{item.LAW_SUBMIT_DT}</Text>
                    </View>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text>상정일</Text>
                        <Text>{item.LAW_PRESENT_DT}</Text>
                    </View>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text>의결일</Text>
                        <Text>{item.LAW_PROC_DT}</Text>
                    </View>
                </View>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", flex: 1, borderWidth: 1, borderColor: "black"}}>
                <Text style={{textAlign: "center"}}>본회의심의</Text>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text>본회의심의_상정일</Text>
                        <Text>{item.RGS_PRESENT_DT}</Text>
                    </View>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text>본회의심의_의결일</Text>
                        <Text>{item.RGS_PROC_DT}</Text>
                    </View>
                </View>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", flex: 1, borderWidth: 1, borderColor: "black"}}>
                {/* <Text style={{textAlign: "center"}}>법사위체계자구심사</Text> */}
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text>정부이송일</Text>
                        <Text>{item.CURR_TRANS_DT}</Text>
                    </View>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text>공포일</Text>
                        <Text>{item.ANNOUNCE_DT}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};
const Meetings = () => {
    const [index, setIndex] = useState(0);
    const [data, setData] = useState(data1);
    return (
        <View style={{flex: 1}}>
            <View style={{marginHorizontal: 20}}>
                <SegmentedControl
                    values={["법률안", "예산안", "기타", "결산"]}
                    selectedIndex={index}
                    onChange={e => {
                        let old = [];
                        if (e.nativeEvent.selectedSegmentIndex === 0) {
                            old = data1;
                        } else if (e.nativeEvent.selectedSegmentIndex === 1) {
                            old = data2;
                        } else if (e.nativeEvent.selectedSegmentIndex === 2) {
                            old = data3;
                        } else {
                            old = data4;
                        }
                        setData([...old]);
                    }}
                />
            </View>

            <FlatList
                ListHeaderComponent={
                    <View style={{backgroundColor: "white"}}>
                        <Text style={{fontSize: 20}}>검색</Text>
                    </View>
                }
                keyExtractor={item => String(item.BILL_NO)}
                style={{flex: 1}}
                data={data}
                renderItem={renderItem}></FlatList>
        </View>
    );
};

export default Meetings;
