import {useNavigation} from "@react-navigation/native";
import React from "react";
import {TouchableOpacity, Text, View, Image} from "react-native";
import styled from "styled-components/native";

const Wrapper = styled.Pressable`
    flex: 1;
    flex-direction: row;
    margin-left: 16px;
    margin-right: 16px;
    padding-top: 10px;
    padding-bottom: 10px;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    border-radius: 12px;
    padding-left: 20px;
    padding-right: 20px;
    height: 175px;
    margin-bottom: 10px;
`;
const Name = styled.Text`
    font-size: 18px;
    font-weight: bold;
    font-style: normal;
    letter-spacing: 0;
    color: #222222;
    padding-bottom: 16px;
`;
const Sub_Wrapper = styled.View`
    flex-direction: row;
    align-items: center;
    padding-bottom: 5px;
`;

const Sub_Title = styled.Text`
    font-size: 13px;
    font-weight: normal;
    font-style: normal;
    letter-spacing: 0;
    color: #919aa4;
    width: 55px;
`;
const Party_Title = styled.Text`
    font-size: 13px;
    font-weight: 500;
    font-style: normal;
    letter-spacing: 0;
    color: #357fc4;
`;
const Etc_Title = styled.Text`
    font-size: 13px;
    font-weight: normal;
    font-style: normal;
    letter-spacing: 0;
    color: #222222;
    flex: 1;
`;
const Member = ({item}) => {
    const navigation = useNavigation();
    const goToDetail = () => {
        navigation.navigate("Member_Detail", {});
    };

    return (
        <Wrapper onPress={goToDetail}>
            <View style={{flex: 0.9}}>
                <Name>
                    {item.HG_NM} ({item.SEX_GBN_NM})
                </Name>
                <Sub_Wrapper>
                    <Sub_Title>정당명</Sub_Title>
                    <Party_Title>{item.POLY_NM}</Party_Title>
                </Sub_Wrapper>
                <Sub_Wrapper>
                    <Sub_Title>선거구</Sub_Title>
                    <Etc_Title>{item.ORIG_NM}</Etc_Title>
                </Sub_Wrapper>
                <Sub_Wrapper>
                    <Sub_Title>재선</Sub_Title>
                    <Etc_Title>{item.REELE_GBN_NM}</Etc_Title>
                </Sub_Wrapper>
                <Sub_Wrapper>
                    <Sub_Title>당선</Sub_Title>
                    <Etc_Title>{item.UNITS}</Etc_Title>
                </Sub_Wrapper>
                <Sub_Wrapper>
                    <Sub_Title>연락처</Sub_Title>
                    <Etc_Title>{item.TEL_NO}</Etc_Title>
                </Sub_Wrapper>
            </View>
            <Image style={{width: 100, height: 150, borderRadius: 150 / 20}} source={{uri: item.IMAGE}}></Image>
        </Wrapper>
    );
};

export default Member;
