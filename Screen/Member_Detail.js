import React from "react";
import {View, Text, FlatList, Image, ActivityIndicator} from "react-native";
import Member_Law from "../Components/Member_Law";
import {assemblyApi} from "../api";
import {useQuery, useQueryClient} from "react-query";
const data = [
    {
        BILL_ID: "PRC_U2B1K1T0P0A7S1E5N1H8C5I9F5F9S4",
        BILL_NO: "2113079",
        BILL_NAME: "산업재산 정보의 관리 및 활용 촉진에 관한 법률안",
        COMMITTEE: "산업통상자원중소벤처기업위원회",
        PROPOSE_DT: "2021-11-02",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_U2B1K1T0P0A7S1E5N1H8C5I9F5F9S4&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 10인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_U2B1K1T0P0A7S1E5N1H8C5I9F5F9S4",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "김교흥,김윤덕,김홍걸,변재일,송재호,이동주,이성만,장철민,한병도",
        COMMITTEE_ID: "9700481",
    },
    {
        BILL_ID: "PRC_H2G1X1Y0N0J7Z1E5F2J0P1Y5M0P3I3",
        BILL_NO: "2113081",
        BILL_NAME: "발명진흥법 일부개정법률안",
        COMMITTEE: "산업통상자원중소벤처기업위원회",
        PROPOSE_DT: "2021-11-02",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_H2G1X1Y0N0J7Z1E5F2J0P1Y5M0P3I3&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 10인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_H2G1X1Y0N0J7Z1E5F2J0P1Y5M0P3I3",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "김교흥,김윤덕,김홍걸,변재일,송재호,이동주,이성만,장철민,한병도",
        COMMITTEE_ID: "9700481",
    },
    {
        BILL_ID: "PRC_Q2C1M0U8F2L3R1T3E3T0B5Z0J5R2J6",
        BILL_NO: "2112283",
        BILL_NAME: "중소기업제품 구매촉진 및 판로지원에 관한 법률 일부개정법률안",
        COMMITTEE: "산업통상자원중소벤처기업위원회",
        PROPOSE_DT: "2021-08-27",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_Q2C1M0U8F2L3R1T3E3T0B5Z0J5R2J6&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 12인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_Q2C1M0U8F2L3R1T3E3T0B5Z0J5R2J6",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "김윤덕,김정호,박상혁,송갑석,유정주,이동주,이성만,이소영,장철민,한준호,홍정민",
        COMMITTEE_ID: "9700481",
    },
    {
        BILL_ID: "PRC_N2V1S0I8D2K3N1G3E2E9S4A7C2X5R0",
        BILL_NO: "2112281",
        BILL_NAME: "조세특례제한법 일부개정법률안",
        COMMITTEE: "기획재정위원회",
        PROPOSE_DT: "2021-08-27",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_N2V1S0I8D2K3N1G3E2E9S4A7C2X5R0&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 10인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_N2V1S0I8D2K3N1G3E2E9S4A7C2X5R0",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "김정호,박상혁,송갑석,유정주,이동주,이성만,이소영,장철민,홍정민",
        COMMITTEE_ID: "9700300",
    },
    {
        BILL_ID: "PRC_J2C1K0X8K1Q7A1Q1N0J3Y2W6Y0E0V5",
        BILL_NO: "2112106",
        BILL_NAME: "전기안전관리법 일부개정법률안",
        COMMITTEE: "산업통상자원중소벤처기업위원회",
        PROPOSE_DT: "2021-08-19",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_J2C1K0X8K1Q7A1Q1N0J3Y2W6Y0E0V5&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 11인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_J2C1K0X8K1Q7A1Q1N0J3Y2W6Y0E0V5",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "김병기,김종민,김주영,신정훈,이광재,이동주,이용빈,장철민,조정훈,홍정민",
        COMMITTEE_ID: "9700481",
    },
    {
        BILL_ID: "PRC_C2U1J0T8T1K7A1E1V0Q4E2K0A5V4U3",
        BILL_NO: "2112123",
        BILL_NAME: "전기사업법 일부개정법률안",
        COMMITTEE: "산업통상자원중소벤처기업위원회",
        PROPOSE_DT: "2021-08-19",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_C2U1J0T8T1K7A1E1V0Q4E2K0A5V4U3&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 11인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_C2U1J0T8T1K7A1E1V0Q4E2K0A5V4U3",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "김병기,김종민,김주영,신정훈,이광재,이동주,이용빈,장철민,조정훈,홍정민",
        COMMITTEE_ID: "9700481",
    },
    {
        BILL_ID: "PRC_I2N1B0T7W2N9V1P6R5L0P3A8M1L3R6",
        BILL_NO: "2111888",
        BILL_NAME: "조세특례제한법 일부개정법률안",
        COMMITTEE: "기획재정위원회",
        PROPOSE_DT: "2021-08-03",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_I2N1B0T7W2N9V1P6R5L0P3A8M1L3R6&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 10인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_I2N1B0T7W2N9V1P6R5L0P3A8M1L3R6",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "김교흥,김주영,송갑석,이광재,이동주,이용빈,이장섭,장철민,정태호",
        COMMITTEE_ID: "9700300",
    },
    {
        BILL_ID: "PRC_X2J1O0W6P2B1K1A0S0A6N3P8X9I5D5",
        BILL_NO: "2111213",
        BILL_NAME: "대·중소기업 상생협력 촉진에 관한 법률 일부개정법률안",
        COMMITTEE: "산업통상자원중소벤처기업위원회",
        PROPOSE_DT: "2021-06-30",
        PROC_RESULT: "수정가결",
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_X2J1O0W6P2B1K1A0S0A6N3P8X9I5D5&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원등12인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_X2J1O0W6P2B1K1A0S0A6N3P8X9I5D5",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "김경협,김교흥,김병기,김윤덕,신영대,이동주,이성만,이용빈,이원욱,이장섭,한병도",
        COMMITTEE_ID: "9700481",
    },
    {
        BILL_ID: "PRC_W2M1G0C6T2F8H1N0Q5F0S3U0I7S5J9",
        BILL_NO: "2111168",
        BILL_NAME: "청소년 보호법 일부개정법률안",
        COMMITTEE: "여성가족위원회",
        PROPOSE_DT: "2021-06-29",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_W2M1G0C6T2F8H1N0Q5F0S3U0I7S5J9&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원등10인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_W2M1G0C6T2F8H1N0Q5F0S3U0I7S5J9",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "기동민,김교흥,김병기,김윤덕,양기대,이용빈,장철민,홍성국,홍정민",
        COMMITTEE_ID: "9700342",
    },
    {
        BILL_ID: "PRC_K2H1V0V4C2C3D1D1Y3D7W2P7D8G3U4",
        BILL_NO: "2109686",
        BILL_NAME: "액화석유가스의 안전관리 및 사업법 일부개정법률안",
        COMMITTEE: "산업통상자원중소벤처기업위원회",
        PROPOSE_DT: "2021-04-23",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_K2H1V0V4C2C3D1D1Y3D7W2P7D8G3U4&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 10인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_K2H1V0V4C2C3D1D1Y3D7W2P7D8G3U4",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "기동민,김윤덕,맹성규,이광재,이동주,이상헌,이용빈,이장섭,한준호",
        COMMITTEE_ID: "9700481",
    },
    {
        BILL_ID: "PRC_B2J1V0B4H1W6J1I0N1M1F0O1K7M5I2",
        BILL_NO: "2109653",
        BILL_NAME: "중소기업진흥에 관한 법률 일부개정법률안",
        COMMITTEE: "산업통상자원중소벤처기업위원회",
        PROPOSE_DT: "2021-04-22",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_B2J1V0B4H1W6J1I0N1M1F0O1K7M5I2&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원등13인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_B2J1V0B4H1W6J1I0N1M1F0O1K7M5I2",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "기동민,김성환,김윤덕,송갑석,이광재,이규민,이동주,이성만,이소영,이용빈,이장섭,조오섭",
        COMMITTEE_ID: "9700481",
    },
    {
        BILL_ID: "PRC_D2P1J0S2C1M9D1V0T5H3L5B3M1W6P4",
        BILL_NO: "2108617",
        BILL_NAME: "벤처투자 촉진에 관한 법률  일부개정법률안",
        COMMITTEE: "산업통상자원중소벤처기업위원회",
        PROPOSE_DT: "2021-03-08",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_D2P1J0S2C1M9D1V0T5H3L5B3M1W6P4&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원등10인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_D2P1J0S2C1M9D1V0T5H3L5B3M1W6P4",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "기동민,맹성규,송갑석,이광재,이규민,이용빈,이장섭,정춘숙,홍기원",
        COMMITTEE_ID: "9700481",
    },
    {
        BILL_ID: "PRC_J2F1O0Y3E0E5J0T9P5C7N3M4C6E6V9",
        BILL_NO: "2108586",
        BILL_NAME: "중소기업진흥에 관한 법률 일부개정법률안",
        COMMITTEE: "산업통상자원중소벤처기업위원회",
        PROPOSE_DT: "2021-03-05",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_J2F1O0Y3E0E5J0T9P5C7N3M4C6E6V9&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 12인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_J2F1O0Y3E0E5J0T9P5C7N3M4C6E6V9",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "고민정,박상혁,박홍근,신현영,유정주,이소영,이수진,장철민,전재수,한준호,홍정민",
        COMMITTEE_ID: "9700481",
    },
    {
        BILL_ID: "PRC_K2O1K0E1I1X4X1B0V5K0Q4D2R5Q9L2",
        BILL_NO: "2107927",
        BILL_NAME: "장애인복지법 일부개정법률안",
        COMMITTEE: "보건복지위원회",
        PROPOSE_DT: "2021-02-04",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_K2O1K0E1I1X4X1B0V5K0Q4D2R5Q9L2&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 10인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_K2O1K0E1I1X4X1B0V5K0Q4D2R5Q9L2",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "고영인,김윤덕,송갑석,위성곤,유동수,이광재,이성만,이용빈,장경태",
        COMMITTEE_ID: "9700341",
    },
    {
        BILL_ID: "PRC_K2G1M0Z1L2I7C1M8A0R5B0Z6L1L5A5",
        BILL_NO: "2107931",
        BILL_NAME: "가족관계의 등록 등에 관한 법률 일부개정법률안",
        COMMITTEE: "법제사법위원회",
        PROPOSE_DT: "2021-02-04",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_K2G1M0Z1L2I7C1M8A0R5B0Z6L1L5A5&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원등10인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_K2G1M0Z1L2I7C1M8A0R5B0Z6L1L5A5",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "고영인,김윤덕,송갑석,위성곤,유동수,이광재,이규민,이용빈,장경태",
        COMMITTEE_ID: "9700006",
    },
    {
        BILL_ID: "PRC_F2H1K0I1W2X7H1N8K0H6S2H1F8Z4U4",
        BILL_NO: "2107928",
        BILL_NAME: "폐기물관리법 일부개정법률안",
        COMMITTEE: "환경노동위원회",
        PROPOSE_DT: "2021-02-04",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_F2H1K0I1W2X7H1N8K0H6S2H1F8Z4U4&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 10인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_F2H1K0I1W2X7H1N8K0H6S2H1F8Z4U4",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "고영인,김윤덕,송갑석,위성곤,유동수,이규민,이성만,이용빈,장경태",
        COMMITTEE_ID: "9700038",
    },
    {
        BILL_ID: "PRC_O2T1I0V1H1G4N1W0G4W9B1T9V6O8O6",
        BILL_NO: "2107704",
        BILL_NAME: "중소기업 탈탄소경영 혁신 촉진을 위한 특별조치법안",
        COMMITTEE: "산업통상자원중소벤처기업위원회",
        PROPOSE_DT: "2021-01-27",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_O2T1I0V1H1G4N1W0G4W9B1T9V6O8O6&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 11인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_O2T1I0V1H1G4N1W0G4W9B1T9V6O8O6",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "김성환,김영배,송갑석,신정훈,유동수,이광재,이소영,이용빈,장철민,허영",
        COMMITTEE_ID: "9700481",
    },
    {
        BILL_ID: "PRC_T2T1N0X1Y2Y0E1K6K4T4M1L1G9D7K7",
        BILL_NO: "2107700",
        BILL_NAME: "소상공인 보호 및 지원에 관한 법률 일부개정법률안",
        COMMITTEE: "산업통상자원중소벤처기업위원회",
        PROPOSE_DT: "2021-01-27",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_T2T1N0X1Y2Y0E1K6K4T4M1L1G9D7K7&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 12인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_T2T1N0X1Y2Y0E1K6K4T4M1L1G9D7K7",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "김성환,김영배,송갑석,신정훈,유동수,이광재,이소영,이용빈,장철민,전혜숙,허영",
        COMMITTEE_ID: "9700481",
    },
    {
        BILL_ID: "PRC_Z2S1P0V1Y1U9B0T9B1T5D0U2E5X9R4",
        BILL_NO: "2107506",
        BILL_NAME: "국가균형발전 특별법 일부개정법률안",
        COMMITTEE: "산업통상자원중소벤처기업위원회",
        PROPOSE_DT: "2021-01-19",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_Z2S1P0V1Y1U9B0T9B1T5D0U2E5X9R4&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 10인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_Z2S1P0V1Y1U9B0T9B1T5D0U2E5X9R4",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "강병원,김윤덕,박재호,송갑석,양기대,이광재,이장섭,장철민,허영",
        COMMITTEE_ID: "9700481",
    },
    {
        BILL_ID: "PRC_Y2H1I0V1C1T4J1L3O5Z5V1F7O4C3D3",
        BILL_NO: "2107403",
        BILL_NAME: "소상공인 보호 및 지원에 관한 법률 일부개정법률안",
        COMMITTEE: "산업통상자원중소벤처기업위원회",
        PROPOSE_DT: "2021-01-15",
        PROC_RESULT: "대안반영폐기",
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_Y2H1I0V1C1T4J1L3O5Z5V1F7O4C3D3&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 15인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_Y2H1I0V1C1T4J1L3O5Z5V1F7O4C3D3",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "고영인,기동민,김원이,김윤덕,김종민,유동수,유정주,윤준병,이규민,이소영,이수진,이용빈,이장섭,한병도",
        COMMITTEE_ID: "9700481",
    },
    {
        BILL_ID: "PRC_I2K1S0O1T0O4H1O7A0B4S2Q1L6T6T3",
        BILL_NO: "2107171",
        BILL_NAME: "입양특례법 일부개정법률안",
        COMMITTEE: "보건복지위원회",
        PROPOSE_DT: "2021-01-05",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_I2K1S0O1T0O4H1O7A0B4S2Q1L6T6T3&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 11인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_I2K1S0O1T0O4H1O7A0B4S2Q1L6T6T3",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "고영인,김윤덕,김종민,송갑석,신동근,양경숙,유정주,이광재,이수진,이용빈",
        COMMITTEE_ID: "9700341",
    },
    {
        BILL_ID: "PRC_N2P1W0A1Z0T5B1P6F1O7J5X2C5K1G7",
        BILL_NO: "2107175",
        BILL_NAME: "아동학대범죄의 처벌 등에 관한 특례법 일부개정법률안",
        COMMITTEE: "법제사법위원회",
        PROPOSE_DT: "2021-01-05",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_N2P1W0A1Z0T5B1P6F1O7J5X2C5K1G7&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 10인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_N2P1W0A1Z0T5B1P6F1O7J5X2C5K1G7",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "고영인,김윤덕,김종민,송갑석,신동근,양경숙,유정주,이광재,이용빈",
        COMMITTEE_ID: "9700006",
    },
    {
        BILL_ID: "PRC_Y2B1M0H1M0T4A1A7P0L3U3E7B3Z2A4",
        BILL_NO: "2107167",
        BILL_NAME: "특정강력범죄의 처벌에 관한 특례법 일부개정법률안",
        COMMITTEE: "법제사법위원회",
        PROPOSE_DT: "2021-01-05",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_Y2B1M0H1M0T4A1A7P0L3U3E7B3Z2A4&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원등10인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_Y2B1M0H1M0T4A1A7P0L3U3E7B3Z2A4",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "고영인,김윤덕,김종민,송갑석,신동근,양경숙,유정주,이광재,이용빈",
        COMMITTEE_ID: "9700006",
    },
    {
        BILL_ID: "PRC_R2E0L1J2M0L9S0W9Q1G5B3O3C2G0L2",
        BILL_NO: "2106409",
        BILL_NAME: "도시형소공인 지원에 관한 특별법 일부개정법률안",
        COMMITTEE: "산업통상자원중소벤처기업위원회",
        PROPOSE_DT: "2020-12-14",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_R2E0L1J2M0L9S0W9Q1G5B3O3C2G0L2&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원등16인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_R2E0L1J2M0L9S0W9Q1G5B3O3C2G0L2",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "김두관,김원이,김윤덕,김종민,김홍걸,문진석,신동근,양경숙,양정숙,이광재,이용빈,이장섭,정춘숙,정태호,홍정민",
        COMMITTEE_ID: "9700481",
    },
    {
        BILL_ID: "PRC_E2O0X1Y1Q3Y0F1B1G2W2R2J1Y3Z8K5",
        BILL_NO: "2105877",
        BILL_NAME: "남녀고용평등과 일·가정 양립 지원에 관한 법률 일부개정법률안",
        COMMITTEE: "환경노동위원회",
        PROPOSE_DT: "2020-11-30",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_E2O0X1Y1Q3Y0F1B1G2W2R2J1Y3Z8K5&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 10인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_E2O0X1Y1Q3Y0F1B1G2W2R2J1Y3Z8K5",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "송갑석,송재호,양경숙,이개호,이광재,이용빈,정태호,진성준,한병도",
        COMMITTEE_ID: "9700038",
    },
    {
        BILL_ID: "PRC_M2L0Z1P1P1X9C1J1M1L7L4V1U1J7H6",
        BILL_NO: "2105525",
        BILL_NAME: "공공기관의 운영에 관한 법률 일부개정법률안",
        COMMITTEE: "기획재정위원회",
        PROPOSE_DT: "2020-11-19",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_M2L0Z1P1P1X9C1J1M1L7L4V1U1J7H6&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 11인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_M2L0Z1P1P1X9C1J1M1L7L4V1U1J7H6",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "송갑석,송재호,양경숙,이개호,이광재,이규민,이용빈,정태호,조응천,진성준",
        COMMITTEE_ID: "9700300",
    },
    {
        BILL_ID: "PRC_L2U0O1J1L1F2Y0Z9Z5O9I3G1P3Z0U2",
        BILL_NO: "2105231",
        BILL_NAME: "원자력 손해배상법 일부개정법률안",
        COMMITTEE: "과학기술정보방송통신위원회",
        PROPOSE_DT: "2020-11-12",
        PROC_RESULT: "대안반영폐기",
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_L2U0O1J1L1F2Y0Z9Z5O9I3G1P3Z0U2&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 10인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_L2U0O1J1L1F2Y0Z9Z5O9I3G1P3Z0U2",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "김경협,송갑석,송재호,신동근,이광재,이규민,이용빈,정춘숙,정태호",
        COMMITTEE_ID: "9700479",
    },
    {
        BILL_ID: "PRC_N2N0W0H9Y1X7N1E5N5M3O4C9P6O6O3",
        BILL_NO: "2103995",
        BILL_NAME: "전자장치 부착 등에 관한 법률 일부개정법률안",
        COMMITTEE: "법제사법위원회",
        PROPOSE_DT: "2020-09-17",
        PROC_RESULT: "대안반영폐기",
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_N2N0W0H9Y1X7N1E5N5M3O4C9P6O6O3&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 11인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_N2N0W0H9Y1X7N1E5N5M3O4C9P6O6O3",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "기동민,김두관,김윤덕,김홍걸,송갑석,신동근,이동주,이성만,이용빈,최인호",
        COMMITTEE_ID: "9700006",
    },
    {
        BILL_ID: "PRC_W2S0I0M9R1L7A1X5C4X5J1U7S3Z2K5",
        BILL_NO: "2103993",
        BILL_NAME: "아동·청소년의 성보호에 관한 법률 일부개정법률안",
        COMMITTEE: "여성가족위원회",
        PROPOSE_DT: "2020-09-17",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_W2S0I0M9R1L7A1X5C4X5J1U7S3Z2K5&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 11인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_W2S0I0M9R1L7A1X5C4X5J1U7S3Z2K5",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "기동민,김두관,김윤덕,김홍걸,송갑석,신동근,이동주,이성만,이용빈,최인호",
        COMMITTEE_ID: "9700342",
    },
    {
        BILL_ID: "PRC_Q2R0D0P9Z1H5V1O3U0N8M3P9B9S1G8",
        BILL_NO: "2103891",
        BILL_NAME: "희귀질환관리법 일부개정법률안",
        COMMITTEE: "보건복지위원회",
        PROPOSE_DT: "2020-09-15",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_Q2R0D0P9Z1H5V1O3U0N8M3P9B9S1G8&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 11인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_Q2R0D0P9Z1H5V1O3U0N8M3P9B9S1G8",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "기동민,김윤덕,남인순,변재일,송갑석,유동수,이개호,이규민,이용빈,정춘숙",
        COMMITTEE_ID: "9700341",
    },
    {
        BILL_ID: "PRC_R2P0Y0C9X1L5T1N0N3V5R0G5K2D0M9",
        BILL_NO: "2103885",
        BILL_NAME: "귀농어·귀촌 활성화 및 지원에 관한 법률 일부개정법률안",
        COMMITTEE: "농림축산식품해양수산위원회",
        PROPOSE_DT: "2020-09-15",
        PROC_RESULT: "원안가결",
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_R2P0Y0C9X1L5T1N0N3V5R0G5K2D0M9&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 12인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_R2P0Y0C9X1L5T1N0N3V5R0G5K2D0M9",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "기동민,김윤덕,김종민,김주영,남인순,맹성규,송갑석,신동근,유동수,이용빈,정춘숙",
        COMMITTEE_ID: "9700408",
    },
    {
        BILL_ID: "PRC_R2C0Q0I9A0C7R1C1V5I1N5F0Q3E4G0",
        BILL_NO: "2103546",
        BILL_NAME: "공직선거법 일부개정법률안",
        COMMITTEE: "행정안전위원회",
        PROPOSE_DT: "2020-09-07",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_R2C0Q0I9A0C7R1C1V5I1N5F0Q3E4G0&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 11인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_R2C0Q0I9A0C7R1C1V5I1N5F0Q3E4G0",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "기동민,김병기,김영호,김윤덕,김진표,송갑석,신동근,이용빈,장경태,정춘숙",
        COMMITTEE_ID: "9700480",
    },
    {
        BILL_ID: "PRC_G2R0N0L9K0M7A1O1Y1R4Z3L5W1M8S6",
        BILL_NO: "2103540",
        BILL_NAME: "공동주택관리법 일부개정법률안",
        COMMITTEE: "국토교통위원회",
        PROPOSE_DT: "2020-09-07",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_G2R0N0L9K0M7A1O1Y1R4Z3L5W1M8S6&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 11인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_G2R0N0L9K0M7A1O1Y1R4Z3L5W1M8S6",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "기동민,김병기,김윤덕,문진석,송갑석,신동근,위성곤,이용빈,전혜숙,정춘숙",
        COMMITTEE_ID: "9700407",
    },
    {
        BILL_ID: "PRC_D2G0U0Q9F0P7W1A0L2A2Z0U4I6A5R5",
        BILL_NO: "2103529",
        BILL_NAME: "국가재정법 일부개정법률안",
        COMMITTEE: "기획재정위원회",
        PROPOSE_DT: "2020-09-07",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_D2G0U0Q9F0P7W1A0L2A2Z0U4I6A5R5&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 10인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_D2G0U0Q9F0P7W1A0L2A2Z0U4I6A5R5",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "기동민,김병기,김윤덕,문진석,송갑석,신동근,유동수,장경태,전혜숙",
        COMMITTEE_ID: "9700300",
    },
    {
        BILL_ID: "PRC_W2U0Q0G9Z0T7Q1D0T1G1R2B7A8O5A6",
        BILL_NO: "2103524",
        BILL_NAME: "고등교육법 일부개정법률안",
        COMMITTEE: "교육위원회",
        PROPOSE_DT: "2020-09-07",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_W2U0Q0G9Z0T7Q1D0T1G1R2B7A8O5A6&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 12인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_W2U0Q0G9Z0T7Q1D0T1G1R2B7A8O5A6",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "기동민,김병기,김영호,김윤덕,김진표,송갑석,신동근,유동수,이용빈,장경태,정춘숙",
        COMMITTEE_ID: "9700512",
    },
    {
        BILL_ID: "PRC_A2C0Z0Z9L0V7D1C2J5O6A2A6U7B9V6",
        BILL_NO: "2103547",
        BILL_NAME: "주한미군 공여구역주변지역 등 지원 특별법 일부개정법률안",
        COMMITTEE: "행정안전위원회",
        PROPOSE_DT: "2020-09-07",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_A2C0Z0Z9L0V7D1C2J5O6A2A6U7B9V6&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 12인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_A2C0Z0Z9L0V7D1C2J5O6A2A6U7B9V6",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "기동민,김병기,김윤덕,문진석,송갑석,신동근,위성곤,유동수,장경태,전혜숙,정춘숙",
        COMMITTEE_ID: "9700480",
    },
    {
        BILL_ID: "PRC_T2K0M0K9G0Z7V1J0J1R0I1J3X6N8P4",
        BILL_NO: "2103523",
        BILL_NAME: "주택법 일부개정법률안",
        COMMITTEE: "국토교통위원회",
        PROPOSE_DT: "2020-09-07",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_T2K0M0K9G0Z7V1J0J1R0I1J3X6N8P4&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 12인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_T2K0M0K9G0Z7V1J0J1R0I1J3X6N8P4",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "기동민,김병기,김윤덕,문진석,송갑석,신동근,위성곤,유동수,장경태,전혜숙,정춘숙",
        COMMITTEE_ID: "9700407",
    },
    {
        BILL_ID: "PRC_W2P0Y0L9B0G7N1N0H5N8S1S1D1S1W4",
        BILL_NO: "2103534",
        BILL_NAME: "주한미군기지 이전에 따른 평택시 등의 지원 등에 관한 특별법 일부개정법률안",
        COMMITTEE: "국방위원회",
        PROPOSE_DT: "2020-09-07",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_W2P0Y0L9B0G7N1N0H5N8S1S1D1S1W4&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 12인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_W2P0Y0L9B0G7N1N0H5N8S1S1D1S1W4",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "기동민,김병기,김윤덕,문진석,송갑석,신동근,위성곤,유동수,장경태,전혜숙,정춘숙",
        COMMITTEE_ID: "9700019",
    },
    {
        BILL_ID: "PRC_G2E0D0H9W0Y7K1A0H1V2F1C7D4R1Z1",
        BILL_NO: "2103525",
        BILL_NAME: "주택임대차보호법 일부개정법률안",
        COMMITTEE: "법제사법위원회",
        PROPOSE_DT: "2020-09-07",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_G2E0D0H9W0Y7K1A0H1V2F1C7D4R1Z1&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 12인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_G2E0D0H9W0Y7K1A0H1V2F1C7D4R1Z1",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "기동민,김병기,김윤덕,문진석,송갑석,신동근,위성곤,유동수,장경태,전혜숙,정춘숙",
        COMMITTEE_ID: "9700006",
    },
    {
        BILL_ID: "PRC_H2J0E0C9X0F7S1Y1C0Q8E3Z3K6N4K6",
        BILL_NO: "2103536",
        BILL_NAME: "학교폭력예방 및 대책에 관한 법률 일부개정법률안",
        COMMITTEE: "교육위원회",
        PROPOSE_DT: "2020-09-07",
        PROC_RESULT: "대안반영폐기",
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_H2J0E0C9X0F7S1Y1C0Q8E3Z3K6N4K6&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 12인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_H2J0E0C9X0F7S1Y1C0Q8E3Z3K6N4K6",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "기동민,김병기,김영호,김윤덕,김진표,송갑석,신동근,유동수,이용빈,장경태,정춘숙",
        COMMITTEE_ID: "9700512",
    },
    {
        BILL_ID: "PRC_X2C0Z0N9L0U1A1Z6E3Q3O0D4E0A3D6",
        BILL_NO: "2103411",
        BILL_NAME: "남녀고용평등과 일·가정 양립 지원에 관한 법률 일부개정법률안",
        COMMITTEE: "환경노동위원회",
        PROPOSE_DT: "2020-09-01",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_X2C0Z0N9L0U1A1Z6E3Q3O0D4E0A3D6&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 12인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_X2C0Z0N9L0U1A1Z6E3Q3O0D4E0A3D6",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "기동민,김경협,김민석,김윤덕,김종민,송갑석,신동근,유동수,이원욱,이장섭,정춘숙",
        COMMITTEE_ID: "9700038",
    },
    {
        BILL_ID: "PRC_L2J0H0N9M0S1X1E5O3B7G1L4K1N0J9",
        BILL_NO: "2103402",
        BILL_NAME: "모자보건법 일부개정법률안",
        COMMITTEE: "보건복지위원회",
        PROPOSE_DT: "2020-09-01",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_L2J0H0N9M0S1X1E5O3B7G1L4K1N0J9&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 14인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_L2J0H0N9M0S1X1E5O3B7G1L4K1N0J9",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "기동민,김경협,김민석,김윤덕,김종민,송갑석,신동근,유동수,이용빈,이원욱,이장섭,정춘숙,조응천",
        COMMITTEE_ID: "9700341",
    },
    {
        BILL_ID: "PRC_V2O0I0L9N0Q1P1O5K3I5M5T9R8V7V4",
        BILL_NO: "2103401",
        BILL_NAME: "소득세법 일부개정법률안",
        COMMITTEE: "기획재정위원회",
        PROPOSE_DT: "2020-09-01",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_V2O0I0L9N0Q1P1O5K3I5M5T9R8V7V4&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 12인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_V2O0I0L9N0Q1P1O5K3I5M5T9R8V7V4",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "기동민,김경협,김민석,김윤덕,김주영,송갑석,위성곤,유동수,이원욱,이장섭,정춘숙",
        COMMITTEE_ID: "9700300",
    },
    {
        BILL_ID: "PRC_C2Q0A0R9Q0G1I1Q5U3P3X1C0G2A3P4",
        BILL_NO: "2103400",
        BILL_NAME: "저출산·고령사회기본법 일부개정법률안",
        COMMITTEE: "보건복지위원회",
        PROPOSE_DT: "2020-09-01",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_C2Q0A0R9Q0G1I1Q5U3P3X1C0G2A3P4&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 13인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_C2Q0A0R9Q0G1I1Q5U3P3X1C0G2A3P4",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "기동민,김경협,김민석,김윤덕,김종민,김주영,송갑석,신동근,유동수,이원욱,이장섭,정춘숙",
        COMMITTEE_ID: "9700341",
    },
    {
        BILL_ID: "PRC_M2M0Z0P7E0H1W1F6B4H2Q3E4F9K3S2",
        BILL_NO: "2101276",
        BILL_NAME: "규제자유특구 및 지역특화발전특구에 관한 규제특례법 일부개정법률안",
        COMMITTEE: "산업통상자원중소벤처기업위원회",
        PROPOSE_DT: "2020-07-01",
        PROC_RESULT: "대안반영폐기",
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_M2M0Z0P7E0H1W1F6B4H2Q3E4F9K3S2&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 18인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_M2M0Z0P7E0H1W1F6B4H2Q3E4F9K3S2",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "기동민,김경만,김민석,김병기,김영호,김원이,김윤덕,김종민,김홍걸,박성준,백혜련,신동근,이용빈,이용선,이장섭,진성준,허영",
        COMMITTEE_ID: "9700481",
    },
    {
        BILL_ID: "PRC_Q2F0W0Z7S0A1B1T5G4B9Y3R8Z7W0T7",
        BILL_NO: "2101272",
        BILL_NAME: "정보통신 진흥 및 융합 활성화 등에 관한 특별법 일부개정법률안",
        COMMITTEE: "과학기술정보방송통신위원회",
        PROPOSE_DT: "2020-07-01",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_Q2F0W0Z7S0A1B1T5G4B9Y3R8Z7W0T7&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 18인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_Q2F0W0Z7S0A1B1T5G4B9Y3R8Z7W0T7",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "기동민,김경만,김민석,김병기,김영호,김원이,김윤덕,김종민,김홍걸,박성준,백혜련,신동근,이용빈,이용선,이장섭,진성준,허영",
        COMMITTEE_ID: "9700479",
    },
    {
        BILL_ID: "PRC_L2O0W0P7D0K1Q1X6O1V6L3V7I7G0O3",
        BILL_NO: "2101274",
        BILL_NAME: "산업융합 촉진법 일부개정법률안",
        COMMITTEE: "산업통상자원중소벤처기업위원회",
        PROPOSE_DT: "2020-07-01",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_L2O0W0P7D0K1Q1X6O1V6L3V7I7G0O3&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 18인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_L2O0W0P7D0K1Q1X6O1V6L3V7I7G0O3",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "기동민,김경만,김민석,김병기,김영호,김원이,김윤덕,김종민,김홍걸,박성준,백혜련,신동근,이용빈,이용선,이장섭,진성준,허영",
        COMMITTEE_ID: "9700481",
    },
    {
        BILL_ID: "PRC_T2H0H0O7S0P1R1T6S1K8L5U1F4V2P9",
        BILL_NO: "2101275",
        BILL_NAME: "금융혁신지원 특별법 일부개정법률안",
        COMMITTEE: "정무위원회",
        PROPOSE_DT: "2020-07-01",
        PROC_RESULT: null,
        AGE: "21",
        DETAIL_LINK: "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_T2H0H0O7S0P1R1T6S1K8L5U1F4V2P9&ageFrom=21&ageTo=21",
        PROPOSER: "강훈식의원 등 18인",
        MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_T2H0H0O7S0P1R1T6S1K8L5U1F4V2P9",
        RST_PROPOSER: "강훈식",
        PUBL_PROPOSER: "기동민,김경만,김민석,김병기,김영호,김원이,김윤덕,김종민,김홍걸,박성준,백혜련,신동근,이용빈,이용선,이장섭,진성준,허영",
        COMMITTEE_ID: "9700008",
    },
];

// const renderItem = ({item}) => {
//     return <Member_Law item={item}></Member_Law>;
// };
const renderHeader = item => {
    return (
        <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            <View style={{marginBottom: 20}}>
                <Text>정당 : {item.POLY_NM}</Text>
                <Text>선거구 : {item.ORIG_NM}</Text>
                <Text>소속위원회 : {item.CMIT_NM}</Text>
                <Text>
                    당선횟수 : {item.REELE_GBN_NM}({item.UNITS})
                </Text>
                <Text>사무실전화 : {item.TEL_NO}</Text>
                <Text>사무실호실 : {item.ASSEM_ADDR}</Text>
                <Text>홈페이지 : {item.HOMEPAGE}</Text>
                <Text>이메일 : {item.E_MAIL}</Text>
                <Text>보좌관 : {item.STAFF}</Text>
                <Text>비서관 : {item.SECRETARY}</Text>
                <Text>비서 : {item.SECRETARY2}</Text>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Text>악력 : </Text>
                    <Text>터치하세요</Text>
                    {/* <Text>{item.MEM_TITLE}</Text> */}
                </View>
            </View>
            <Image style={{width: 100, height: 150, borderRadius: 150 / 20}} source={{uri: item.IMAGE}}></Image>
        </View>
    );
};
const Member_Detail = ({
    navigation: {setOptions},
    route: {
        params: {member_data},
    },
}) => {
    const {isLoading: proposeLoading, data: proposeData, isRefetching: proposeIsRefetching} = useQuery(["member_propose", member_data], assemblyApi.member_propose);
    if (proposeData) {
        console.log("iii", proposeData);
        // console.log("iii", proposeData.nwvrqwxyaytdsfvhu[1].row);
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
            ListHeaderComponent={() => renderHeader(member_data)}
            keyExtractor={item => item.BILL_ID}
            data={proposeData.nzmimeepazxkubdpn[1].row}
            renderItem={({item}) => {
                return <Member_Law item={item}></Member_Law>;
            }}></FlatList>
    ) : null;
};

export default Member_Detail;
