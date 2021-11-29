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
const data2 = `<response>
<header>
    <resultCode>00</resultCode>
    <resultMsg>NORMAL SERVICE.</resultMsg>
</header>
<body>
    <items>
        <item>
            <deptCd>9771230</deptCd>
            <empNm>강기윤</empNm>
            <engNm>KANG GIYUN</engNm>
            <hjNm>姜起潤</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771230.jpg</jpgLink>
            <num>2685</num>
            <origNm>경남 창원시성산구</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771142</deptCd>
            <empNm>강대식</empNm>
            <engNm>KANG DAESIK</engNm>
            <hjNm>姜大植</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771142.jpg</jpgLink>
            <num>3050</num>
            <origNm>대구 동구을</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771174</deptCd>
            <empNm>강득구</empNm>
            <engNm>KANG DEUKGU</engNm>
            <hjNm>姜得求</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771174.jpg</jpgLink>
            <num>3085</num>
            <origNm>경기 안양시만안구</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771233</deptCd>
            <empNm>강민국</empNm>
            <engNm>KANG MINKUK</engNm>
            <hjNm>姜旻局</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771233.jpg</jpgLink>
            <num>3091</num>
            <origNm>경남 진주시을</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771283</deptCd>
            <empNm>강민정</empNm>
            <engNm>KANG MINJUNG</engNm>
            <hjNm>姜旼姃</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771283.jpg</jpgLink>
            <num>3019</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770933</deptCd>
            <empNm>강병원</empNm>
            <engNm>KANG BYUNGWON</engNm>
            <hjNm>姜炳遠</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770933.jpg</jpgLink>
            <num>2892</num>
            <origNm>서울 은평구을</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771116</deptCd>
            <empNm>강선우</empNm>
            <engNm>KANG SUNWOO</engNm>
            <hjNm>姜仙祐</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771116.jpg</jpgLink>
            <num>3006</num>
            <origNm>서울 강서구갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771276</deptCd>
            <empNm>강은미</empNm>
            <engNm>KANG EUNMI</engNm>
            <hjNm>姜恩美</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771276.jpg</jpgLink>
            <num>3033</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771168</deptCd>
            <empNm>강준현</empNm>
            <engNm>KANG JUNHYEON</engNm>
            <hjNm>康準鉉</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771168.jpg</jpgLink>
            <num>3014</num>
            <origNm>세종특별자치시을</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771007</deptCd>
            <empNm>강훈식</empNm>
            <engNm>KANG HOONSIK</engNm>
            <hjNm>姜勳植</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771007.jpg</jpgLink>
            <num>2855</num>
            <origNm>충남 아산시을</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771109</deptCd>
            <empNm>고민정</empNm>
            <engNm>KO MINJUNG</engNm>
            <hjNm>高旼廷</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771109.jpg</jpgLink>
            <num>3051</num>
            <origNm>서울 광진구을</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771180</deptCd>
            <empNm>고영인</empNm>
            <engNm>KO YOUNGIN</engNm>
            <hjNm>高永寅</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771180.jpg</jpgLink>
            <num>3017</num>
            <origNm>경기 안산시단원구갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770931</deptCd>
            <empNm>고용진</empNm>
            <engNm>KOH YONGJIN</engNm>
            <hjNm>高榕진</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770931.jpg</jpgLink>
            <num>2952</num>
            <origNm>서울 노원구갑</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771224</deptCd>
            <empNm>구자근</empNm>
            <engNm>KU JAKEUN</engNm>
            <hjNm>具滋根</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771224.jpg</jpgLink>
            <num>3027</num>
            <origNm>경북 구미시갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771165</deptCd>
            <empNm>권명호</empNm>
            <engNm>KWON MYUNGHO</engNm>
            <hjNm>權明浩</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771165.jpg</jpgLink>
            <num>3114</num>
            <origNm>울산 동구</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770679</deptCd>
            <empNm>권성동</empNm>
            <engNm>KWEON SEONGDONG</engNm>
            <hjNm>權性東</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770679.jpg</jpgLink>
            <num>2541</num>
            <origNm>강원 강릉시</origNm>
            <reeleGbnNm>4선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771108</deptCd>
            <empNm>권영세</empNm>
            <engNm>KWON YOUNGSE</engNm>
            <hjNm>權寧世</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771108.jpg</jpgLink>
            <num>299</num>
            <origNm>서울 용산구</origNm>
            <reeleGbnNm>4선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770977</deptCd>
            <empNm>권은희</empNm>
            <engNm>KWON EUNHEE</engNm>
            <hjNm>權垠希</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770977.jpg</jpgLink>
            <num>2824</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771259</deptCd>
            <empNm>권인숙</empNm>
            <engNm>KWON INSOOK</engNm>
            <hjNm>權仁淑</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771259.jpg</jpgLink>
            <num>3003</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770998</deptCd>
            <empNm>권칠승</empNm>
            <engNm>KWON CHILSEUNG</engNm>
            <hjNm>權七勝</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770998.jpg</jpgLink>
            <num>2842</num>
            <origNm>경기 화성시병</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770927</deptCd>
            <empNm>기동민</empNm>
            <engNm>KI DONGMIN</engNm>
            <hjNm>奇東旻</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770927.jpg</jpgLink>
            <num>2968</num>
            <origNm>서울 성북구을</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771258</deptCd>
            <empNm>김경만</empNm>
            <engNm>KIM KYUNGMAN</engNm>
            <hjNm>金京萬</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771258.jpg</jpgLink>
            <num>2978</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770712</deptCd>
            <empNm>김경협</empNm>
            <engNm>KIM KYUNGHYUP</engNm>
            <hjNm>金炅俠</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770712.jpg</jpgLink>
            <num>2606</num>
            <origNm>경기 부천시갑</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771152</deptCd>
            <empNm>김교흥</empNm>
            <engNm>KIM KYOHEUNG</engNm>
            <hjNm>金敎興</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771152.jpg</jpgLink>
            <num>150</num>
            <origNm>인천 서구갑</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771164</deptCd>
            <empNm>김기현</empNm>
            <engNm>KIM GIHYEON</engNm>
            <hjNm>金起炫</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771164.jpg</jpgLink>
            <num>558</num>
            <origNm>울산 남구을</origNm>
            <reeleGbnNm>4선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771181</deptCd>
            <empNm>김남국</empNm>
            <engNm>KIM NAMKUK</engNm>
            <hjNm>金南局</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771181.jpg</jpgLink>
            <num>2979</num>
            <origNm>경기 안산시단원구을</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770719</deptCd>
            <empNm>김도읍</empNm>
            <engNm>KIM DOEUP</engNm>
            <hjNm>金度邑</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770719.jpg</jpgLink>
            <num>2607</num>
            <origNm>부산 북구강서구을</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770997</deptCd>
            <empNm>김두관</empNm>
            <engNm>KIM DUKWAN</engNm>
            <hjNm>金斗官</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770997.jpg</jpgLink>
            <num>2836</num>
            <origNm>경남 양산시을</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771136</deptCd>
            <empNm>김미애</empNm>
            <engNm>KIM MIAE</engNm>
            <hjNm>金美愛</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771136.jpg</jpgLink>
            <num>3068</num>
            <origNm>부산 해운대구을</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770723</deptCd>
            <empNm>김민기</empNm>
            <engNm>KIM MINKI</engNm>
            <hjNm>金敏基</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770723.jpg</jpgLink>
            <num>2576</num>
            <origNm>경기 용인시을</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771120</deptCd>
            <empNm>김민석</empNm>
            <engNm>KIM MINSEOK</engNm>
            <hjNm>金民錫</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771120.jpg</jpgLink>
            <num>469</num>
            <origNm>서울 영등포구을</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771173</deptCd>
            <empNm>김민철</empNm>
            <engNm>KIM MINCHUL</engNm>
            <hjNm>金敏徹</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771173.jpg</jpgLink>
            <num>3097</num>
            <origNm>경기 의정부시을</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770941</deptCd>
            <empNm>김병기</empNm>
            <engNm>KIM BYUNGKEE</engNm>
            <hjNm>金炳基</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770941.jpg</jpgLink>
            <num>2902</num>
            <origNm>서울 동작구갑</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770984</deptCd>
            <empNm>김병욱</empNm>
            <engNm>KIM BYUNGWOOK</engNm>
            <hjNm>金炳旭</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770984.jpg</jpgLink>
            <num>2929</num>
            <origNm>경기 성남시분당구을</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771285</deptCd>
            <empNm>김병욱</empNm>
            <engNm>KIM BYONGWOOK</engNm>
            <hjNm>金炳旭</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771285.jpg</jpgLink>
            <num>3116</num>
            <origNm>경북 포항시남구울릉군</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771268</deptCd>
            <empNm>김병주</empNm>
            <engNm>KIM BYUNGJOO</engNm>
            <hjNm>金柄周</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771268.jpg</jpgLink>
            <num>3087</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770725</deptCd>
            <empNm>김상훈</empNm>
            <engNm>KIM SANGHOON</engNm>
            <hjNm>金相勳</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770725.jpg</jpgLink>
            <num>2591</num>
            <origNm>대구 서구</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770527</deptCd>
            <empNm>김상희</empNm>
            <engNm>KIM SANGHEE</engNm>
            <hjNm>金相姬</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770527.jpg</jpgLink>
            <num>2760</num>
            <origNm>경기 부천시병</origNm>
            <reeleGbnNm>4선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771024</deptCd>
            <empNm>김석기</empNm>
            <engNm>KIM SEOKKI</engNm>
            <hjNm>金碩基</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771024.jpg</jpgLink>
            <num>2878</num>
            <origNm>경북 경주시</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771195</deptCd>
            <empNm>김선교</empNm>
            <engNm>KIM SUNGYO</engNm>
            <hjNm>金善敎</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771195.jpg</jpgLink>
            <num>2995</num>
            <origNm>경기 여주시양평군</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770985</deptCd>
            <empNm>김성원</empNm>
            <engNm>KIM SUNGWON</engNm>
            <hjNm>金成願</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770985.jpg</jpgLink>
            <num>2911</num>
            <origNm>경기 동두천시연천군</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771208</deptCd>
            <empNm>김성주</empNm>
            <engNm>KIM SUNGJOO</engNm>
            <hjNm>金成柱</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771208.jpg</jpgLink>
            <num>2677</num>
            <origNm>전북 전주시병</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771089</deptCd>
            <empNm>김성환</empNm>
            <engNm>KIM SUNGWHAN</engNm>
            <hjNm>金星煥</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771089.jpg</jpgLink>
            <num>2887</num>
            <origNm>서울 노원구병</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771210</deptCd>
            <empNm>김수흥</empNm>
            <engNm>KIM SOOHEUNG</engNm>
            <hjNm>金洙興</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771210.jpg</jpgLink>
            <num>2996</num>
            <origNm>전북 익산시갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771220</deptCd>
            <empNm>김승남</empNm>
            <engNm>KIM SEUNGNAM</engNm>
            <hjNm>金承南</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771220.jpg</jpgLink>
            <num>2546</num>
            <origNm>전남 고흥군보성군장흥군강진군</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771144</deptCd>
            <empNm>김승수</empNm>
            <engNm>KIM SEUNGSU</engNm>
            <hjNm>金承洙</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771144.jpg</jpgLink>
            <num>3110</num>
            <origNm>대구 북구을</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771169</deptCd>
            <empNm>김승원</empNm>
            <engNm>KIM SEUNGWON</engNm>
            <hjNm>金勝源</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771169.jpg</jpgLink>
            <num>3060</num>
            <origNm>경기 수원시갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771111</deptCd>
            <empNm>김영배</empNm>
            <engNm>KIM YOUNGBAE</engNm>
            <hjNm>金永培</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771111.jpg</jpgLink>
            <num>3090</num>
            <origNm>서울 성북구갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771225</deptCd>
            <empNm>김영식</empNm>
            <engNm>KIM YEUNGSHIK</engNm>
            <hjNm>金英植</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771225.jpg</jpgLink>
            <num>3041</num>
            <origNm>경북 구미시을</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770975</deptCd>
            <empNm>김영주</empNm>
            <engNm>KIM YOUNGJOO</engNm>
            <hjNm>金榮珠</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770975.jpg</jpgLink>
            <num>145</num>
            <origNm>서울 영등포구갑</origNm>
            <reeleGbnNm>4선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770981</deptCd>
            <empNm>김영진</empNm>
            <engNm>KIM YOUNGJIN</engNm>
            <hjNm>金榮鎭</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770981.jpg</jpgLink>
            <num>2971</num>
            <origNm>경기 수원시병</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770934</deptCd>
            <empNm>김영호</empNm>
            <engNm>KIM YOUNGHO</engNm>
            <hjNm>金映豪</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770934.jpg</jpgLink>
            <num>2865</num>
            <origNm>서울 서대문구을</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771249</deptCd>
            <empNm>김예지</empNm>
            <engNm>KIM YEAJI</engNm>
            <hjNm>金睿智</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771249.jpg</jpgLink>
            <num>3086</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771186</deptCd>
            <empNm>김용민</empNm>
            <engNm>KIM YONGMIN</engNm>
            <hjNm>金容民</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771186.jpg</jpgLink>
            <num>2980</num>
            <origNm>경기 남양주시병</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771147</deptCd>
            <empNm>김용판</empNm>
            <engNm>KIM YONGPAN</engNm>
            <hjNm>金用判</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771147.jpg</jpgLink>
            <num>3052</num>
            <origNm>대구 달서구병</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771127</deptCd>
            <empNm>김웅</empNm>
            <engNm>KIM WOONG</engNm>
            <hjNm>金雄</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771127.jpg</jpgLink>
            <num>3069</num>
            <origNm>서울 송파구갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771214</deptCd>
            <empNm>김원이</empNm>
            <engNm>KIM WONI</engNm>
            <hjNm>金元二</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771214.jpg</jpgLink>
            <num>3075</num>
            <origNm>전남 목포시</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771206</deptCd>
            <empNm>김윤덕</empNm>
            <engNm>KIM YUNDUCK</engNm>
            <hjNm>金潤德</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771206.jpg</jpgLink>
            <num>2813</num>
            <origNm>전북 전주시갑</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771171</deptCd>
            <empNm>김은혜</empNm>
            <engNm>KIM EUNHYE</engNm>
            <hjNm>金恩慧</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771171.jpg</jpgLink>
            <num>3039</num>
            <origNm>경기 성남시분당구갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771288</deptCd>
            <empNm>김의겸</empNm>
            <engNm>KIMEUIKYEOM</engNm>
            <hjNm>金宜謙</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771288.jpg</jpgLink>
            <num>3077</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771023</deptCd>
            <empNm>김정재</empNm>
            <engNm>KIM JUNGJAE</engNm>
            <hjNm>金汀才</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771023.jpg</jpgLink>
            <num>2970</num>
            <origNm>경북 포항시북구</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771090</deptCd>
            <empNm>김정호</empNm>
            <engNm>KIM JUNGHO</engNm>
            <hjNm>金禎鎬</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771090.jpg</jpgLink>
            <num>2939</num>
            <origNm>경남 김해시을</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771009</deptCd>
            <empNm>김종민</empNm>
            <engNm>KIM JONGMIN</engNm>
            <hjNm>金鐘民</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771009.jpg</jpgLink>
            <num>2833</num>
            <origNm>충남 논산시계룡시금산군</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771192</deptCd>
            <empNm>김주영</empNm>
            <engNm>KIM JUYOUNG</engNm>
            <hjNm>金周暎</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771192.jpg</jpgLink>
            <num>3064</num>
            <origNm>경기 김포시갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770982</deptCd>
            <empNm>김진표</empNm>
            <engNm>KIM JINPYO</engNm>
            <hjNm>金振杓</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770982.jpg</jpgLink>
            <num>2775</num>
            <origNm>경기 수원시무</origNm>
            <reeleGbnNm>5선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770986</deptCd>
            <empNm>김철민</empNm>
            <engNm>KIM CHEOLMIN</engNm>
            <hjNm>金哲玟</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770986.jpg</jpgLink>
            <num>2967</num>
            <origNm>경기 안산시상록구을</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770741</deptCd>
            <empNm>김태년</empNm>
            <engNm>KIM TAENYEON</engNm>
            <hjNm>金太年</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770741.jpg</jpgLink>
            <num>556</num>
            <origNm>경기 성남시수정구</origNm>
            <reeleGbnNm>4선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771237</deptCd>
            <empNm>김태호</empNm>
            <engNm>KIM TAEHO</engNm>
            <hjNm>金台鎬</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771237.jpg</jpgLink>
            <num>2456</num>
            <origNm>경남 산청군함양군거창군합천군</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770742</deptCd>
            <empNm>김태흠</empNm>
            <engNm>KIM TAEHEUM</engNm>
            <hjNm>金泰欽</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770742.jpg</jpgLink>
            <num>2575</num>
            <origNm>충남 보령시서천군</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770991</deptCd>
            <empNm>김한정</empNm>
            <engNm>KIM HANJUNG</engNm>
            <hjNm>金漢正</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770991.jpg</jpgLink>
            <num>2932</num>
            <origNm>경기 남양주시을</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771223</deptCd>
            <empNm>김형동</empNm>
            <engNm>KIM HYUNGDONG</engNm>
            <hjNm>金亨東</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771223.jpg</jpgLink>
            <num>3129</num>
            <origNm>경북 안동시예천군</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771270</deptCd>
            <empNm>김홍걸</empNm>
            <engNm>KIM HONGGUL</engNm>
            <hjNm>金弘傑</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771270.jpg</jpgLink>
            <num>2994</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771216</deptCd>
            <empNm>김회재</empNm>
            <engNm>KIM HOIJAE</engNm>
            <hjNm>金會在</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771216.jpg</jpgLink>
            <num>2989</num>
            <origNm>전남 여수시을</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771134</deptCd>
            <empNm>김희곤</empNm>
            <engNm>KIM HEEGON</engNm>
            <hjNm>金熙坤</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771134.jpg</jpgLink>
            <num>3094</num>
            <origNm>부산 동래구</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771228</deptCd>
            <empNm>김희국</empNm>
            <engNm>KIM HEEKUK</engNm>
            <hjNm>金熙國</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771228.jpg</jpgLink>
            <num>2583</num>
            <origNm>경북 군위군의성군청송군영덕군</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770752</deptCd>
            <empNm>남인순</empNm>
            <engNm>NAM INSOON</engNm>
            <hjNm>南仁順</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770752.jpg</jpgLink>
            <num>2618</num>
            <origNm>서울 송파구병</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770753</deptCd>
            <empNm>노웅래</empNm>
            <engNm>NOH WOONGRAE</engNm>
            <hjNm>盧雄來</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770753.jpg</jpgLink>
            <num>133</num>
            <origNm>서울 마포구갑</origNm>
            <reeleGbnNm>4선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770755</deptCd>
            <empNm>도종환</empNm>
            <engNm>DO JONGHWAN</engNm>
            <hjNm>都鍾煥</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770755.jpg</jpgLink>
            <num>2585</num>
            <origNm>충북 청주시흥덕구</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771141</deptCd>
            <empNm>류성걸</empNm>
            <engNm>YOO SUNGKULL</engNm>
            <hjNm>柳性杰</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771141.jpg</jpgLink>
            <num>2812</num>
            <origNm>대구 동구갑</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771274</deptCd>
            <empNm>류호정</empNm>
            <engNm>RYU HOJEONG</engNm>
            <hjNm>柳好貞</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771274.jpg</jpgLink>
            <num>3035</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771091</deptCd>
            <empNm>맹성규</empNm>
            <engNm>MAENG SUNGKYU</engNm>
            <hjNm>孟聖奎</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771091.jpg</jpgLink>
            <num>2888</num>
            <origNm>인천 남동구갑</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771187</deptCd>
            <empNm>문정복</empNm>
            <engNm>MOON JEONGBOG</engNm>
            <hjNm>文貞福</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771187.jpg</jpgLink>
            <num>3132</num>
            <origNm>경기 시흥시갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771204</deptCd>
            <empNm>문진석</empNm>
            <engNm>MOON JINSEOG</engNm>
            <hjNm>文振碩</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771204.jpg</jpgLink>
            <num>3099</num>
            <origNm>충남 천안시갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771175</deptCd>
            <empNm>민병덕</empNm>
            <engNm>MIN BYOUNGDUG</engNm>
            <hjNm>閔炳德</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771175.jpg</jpgLink>
            <num>2987</num>
            <origNm>경기 안양시동안구갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771159</deptCd>
            <empNm>민형배</empNm>
            <engNm>MIN HYUNGBAE</engNm>
            <hjNm>閔馨培</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771159.jpg</jpgLink>
            <num>3121</num>
            <origNm>광주 광산구을</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770764</deptCd>
            <empNm>민홍철</empNm>
            <engNm>MIN HONGCHUL</engNm>
            <hjNm>閔洪喆</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770764.jpg</jpgLink>
            <num>2615</num>
            <origNm>경남 김해시갑</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770911</deptCd>
            <empNm>박광온</empNm>
            <engNm>PARK KWANGON</engNm>
            <hjNm>朴洸瑥</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770911.jpg</jpgLink>
            <num>2823</num>
            <origNm>경기 수원시정</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771248</deptCd>
            <empNm>박대수</empNm>
            <engNm>PARK DAESOO</engNm>
            <hjNm>朴大壽</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771248.jpg</jpgLink>
            <num>3095</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770767</deptCd>
            <empNm>박대출</empNm>
            <engNm>PARK DAECHUL</engNm>
            <hjNm>朴大出</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770767.jpg</jpgLink>
            <num>2768</num>
            <origNm>경남 진주시갑</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770768</deptCd>
            <empNm>박덕흠</empNm>
            <engNm>PARK DUKHYUM</engNm>
            <hjNm>朴德欽</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770768.jpg</jpgLink>
            <num>2488</num>
            <origNm>충북 보은군옥천군영동군괴산군</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770770</deptCd>
            <empNm>박범계</empNm>
            <hjNm>朴範界</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770770.jpg</jpgLink>
            <num>2580</num>
            <origNm>대전 서구을</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770090</deptCd>
            <empNm>박병석</empNm>
            <engNm>PARK BYEONGSEUG</engNm>
            <hjNm>朴炳錫</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770090.jpg</jpgLink>
            <num>211</num>
            <origNm>대전 서구갑</origNm>
            <reeleGbnNm>6선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771193</deptCd>
            <empNm>박상혁</empNm>
            <engNm>PARK SANGHYUK</engNm>
            <hjNm>朴商赫</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771193.jpg</jpgLink>
            <num>3059</num>
            <origNm>경기 김포시을</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771163</deptCd>
            <empNm>박성민</empNm>
            <engNm>PARK SEONGMIN</engNm>
            <hjNm>朴聖敏</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771163.jpg</jpgLink>
            <num>3070</num>
            <origNm>울산 중구</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771107</deptCd>
            <empNm>박성준</empNm>
            <engNm>PARK SUNGJOON</engNm>
            <hjNm>朴省俊</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771107.jpg</jpgLink>
            <num>3081</num>
            <origNm>서울 중구성동구을</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770944</deptCd>
            <empNm>박성중</empNm>
            <engNm>PARK SUNGJOONG</engNm>
            <hjNm>朴成重</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770944.jpg</jpgLink>
            <num>492</num>
            <origNm>서울 서초구을</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771135</deptCd>
            <empNm>박수영</empNm>
            <engNm>PARK SOOYOUNG</engNm>
            <hjNm>朴洙瑩</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771135.jpg</jpgLink>
            <num>3065</num>
            <origNm>부산 남구갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771162</deptCd>
            <empNm>박영순</empNm>
            <engNm>PARK YOUNGSOON</engNm>
            <hjNm>朴英淳</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771162.jpg</jpgLink>
            <num>3080</num>
            <origNm>대전 대덕구</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771030</deptCd>
            <empNm>박완수</empNm>
            <engNm>PARK WANSU</engNm>
            <hjNm>朴完洙</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771030.jpg</jpgLink>
            <num>2964</num>
            <origNm>경남 창원시의창구</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770774</deptCd>
            <empNm>박완주</empNm>
            <engNm>PARK WANJOO</engNm>
            <hjNm>朴完柱</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770774.jpg</jpgLink>
            <num>2608</num>
            <origNm>충남 천안시을</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770929</deptCd>
            <empNm>박용진</empNm>
            <engNm>PARK YONGJIN</engNm>
            <hjNm>朴用鎭</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770929.jpg</jpgLink>
            <num>489</num>
            <origNm>서울 강북구을</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770950</deptCd>
            <empNm>박재호</empNm>
            <engNm>PARK JAEHO</engNm>
            <hjNm>朴在昊</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770950.jpg</jpgLink>
            <num>2943</num>
            <origNm>부산 남구을</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770995</deptCd>
            <empNm>박정</empNm>
            <engNm>PARK JEUNG</engNm>
            <hjNm>朴釘</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770995.jpg</jpgLink>
            <num>2844</num>
            <origNm>경기 파주시을</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770932</deptCd>
            <empNm>박주민</empNm>
            <engNm>PARK JUMIN</engNm>
            <hjNm>朴柱民</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770932.jpg</jpgLink>
            <num>2915</num>
            <origNm>서울 은평구갑</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771125</deptCd>
            <empNm>박진</empNm>
            <engNm>PARK JIN</engNm>
            <hjNm>朴振</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771125.jpg</jpgLink>
            <num>732</num>
            <origNm>서울 강남구을</origNm>
            <reeleGbnNm>4선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770963</deptCd>
            <empNm>박찬대</empNm>
            <engNm>PARK CHANDAE</engNm>
            <hjNm>朴贊大</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770963.jpg</jpgLink>
            <num>2945</num>
            <origNm>인천 연수구갑</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771226</deptCd>
            <empNm>박형수</empNm>
            <engNm>PARK HYEUNGSOO</engNm>
            <hjNm>朴亨修</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771226.jpg</jpgLink>
            <num>3112</num>
            <origNm>경북 영주시영양군봉화군울진군</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770779</deptCd>
            <empNm>박홍근</empNm>
            <engNm>PARK HONGKEUN</engNm>
            <hjNm>朴洪根</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770779.jpg</jpgLink>
            <num>2767</num>
            <origNm>서울 중랑구을</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771148</deptCd>
            <empNm>배준영</empNm>
            <engNm>BAE JUNEYOUNG</engNm>
            <hjNm>裵俊英</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771148.jpg</jpgLink>
            <num>3127</num>
            <origNm>인천 중구강화군옹진군</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771277</deptCd>
            <empNm>배진교</empNm>
            <engNm>BAE JINGYO</engNm>
            <hjNm>裵晋敎</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771277.jpg</jpgLink>
            <num>3022</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771128</deptCd>
            <empNm>배현진</empNm>
            <engNm>BAE HYUNJIN</engNm>
            <hjNm>裵賢鎭</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771128.jpg</jpgLink>
            <num>2997</num>
            <origNm>서울 송파구을</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771137</deptCd>
            <empNm>백종헌</empNm>
            <engNm>BAEK JONGHEAN</engNm>
            <hjNm>白宗憲</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771137.jpg</jpgLink>
            <num>3122</num>
            <origNm>부산 금정구</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770980</deptCd>
            <empNm>백혜련</empNm>
            <engNm>BACK HYERYUN</engNm>
            <hjNm>白惠蓮</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770980.jpg</jpgLink>
            <num>2871</num>
            <origNm>경기 수원시을</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770356</deptCd>
            <empNm>변재일</empNm>
            <engNm>BYUN JAEILL</engNm>
            <hjNm>卞在一</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770356.jpg</jpgLink>
            <num>122</num>
            <origNm>충북 청주시청원구</origNm>
            <reeleGbnNm>5선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771218</deptCd>
            <empNm>서동용</empNm>
            <engNm>SEO DONGYONG</engNm>
            <hjNm>徐東榕</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771218.jpg</jpgLink>
            <num>3123</num>
            <origNm>전남 순천시광양시곡성군구례군을</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771166</deptCd>
            <empNm>서범수</empNm>
            <engNm>SUH BUMSOO</engNm>
            <hjNm>徐範洙</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771166.jpg</jpgLink>
            <num>3028</num>
            <origNm>울산 울주군</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771133</deptCd>
            <empNm>서병수</empNm>
            <engNm>SUH BYUNGSOO</engNm>
            <hjNm>徐秉洙</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771133.jpg</jpgLink>
            <num>174</num>
            <origNm>부산 부산진구갑</origNm>
            <reeleGbnNm>5선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771092</deptCd>
            <empNm>서삼석</empNm>
            <engNm>SEO SAMSEOK</engNm>
            <hjNm>徐參錫</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771092.jpg</jpgLink>
            <num>2940</num>
            <origNm>전남 영암군무안군신안군</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770784</deptCd>
            <empNm>서영교</empNm>
            <engNm>SEO YOUNGKYO</engNm>
            <hjNm>徐瑛敎</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770784.jpg</jpgLink>
            <num>2611</num>
            <origNm>서울 중랑구갑</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771176</deptCd>
            <empNm>서영석</empNm>
            <engNm>SEO YOUNGSEOK</engNm>
            <hjNm>徐暎錫</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771176.jpg</jpgLink>
            <num>3126</num>
            <origNm>경기 부천시정</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771236</deptCd>
            <empNm>서일준</empNm>
            <engNm>SEO ILJUN</engNm>
            <hjNm>徐一俊</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771236.jpg</jpgLink>
            <num>3029</num>
            <origNm>경남 거제시</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771254</deptCd>
            <empNm>서정숙</empNm>
            <engNm>SUH JUNGSOOK</engNm>
            <hjNm>徐正淑</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771254.jpg</jpgLink>
            <num>3046</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770786</deptCd>
            <empNm>설훈</empNm>
            <engNm>SUL HOON</engNm>
            <hjNm>薛勳</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770786.jpg</jpgLink>
            <num>488</num>
            <origNm>경기 부천시을</origNm>
            <reeleGbnNm>5선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771008</deptCd>
            <empNm>성일종</empNm>
            <engNm>SUNG ILJONG</engNm>
            <hjNm>成一鍾</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771008.jpg</jpgLink>
            <num>2920</num>
            <origNm>충남 서산시태안군</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771217</deptCd>
            <empNm>소병철</empNm>
            <engNm>SO BYUNGCHUL</engNm>
            <hjNm>蘇秉哲</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771217.jpg</jpgLink>
            <num>3083</num>
            <origNm>전남 순천시광양시곡성군구례군갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770999</deptCd>
            <empNm>소병훈</empNm>
            <engNm>SO BYUNGHOON</engNm>
            <hjNm>蘇秉勳</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770999.jpg</jpgLink>
            <num>2863</num>
            <origNm>경기 광주시갑</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771093</deptCd>
            <empNm>송갑석</empNm>
            <engNm>SONG GABSEOK</engNm>
            <hjNm>宋甲錫</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771093.jpg</jpgLink>
            <num>2972</num>
            <origNm>광주 서구갑</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771001</deptCd>
            <empNm>송기헌</empNm>
            <engNm>SONG KI HUN</engNm>
            <hjNm>宋基憲</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771001.jpg</jpgLink>
            <num>2928</num>
            <origNm>강원 원주시을</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770996</deptCd>
            <empNm>송석준</empNm>
            <engNm>SONG SEOGJUN</engNm>
            <hjNm>宋錫俊</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770996.jpg</jpgLink>
            <num>2880</num>
            <origNm>경기 이천시</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771094</deptCd>
            <empNm>송언석</empNm>
            <engNm>SONG EONSEOG</engNm>
            <hjNm>宋彦錫</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771094.jpg</jpgLink>
            <num>2977</num>
            <origNm>경북 김천시</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770967</deptCd>
            <empNm>송영길</empNm>
            <engNm>SONG YOUNGGIL</engNm>
            <hjNm>宋永吉</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770967.jpg</jpgLink>
            <num>202</num>
            <origNm>인천 계양구을</origNm>
            <reeleGbnNm>5선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771058</deptCd>
            <empNm>송옥주</empNm>
            <engNm>SONG OKJOO</engNm>
            <hjNm>宋玉珠</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771058.jpg</jpgLink>
            <num>2882</num>
            <origNm>경기 화성시갑</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771238</deptCd>
            <empNm>송재호</empNm>
            <engNm>SONG JAEHO</engNm>
            <hjNm>宋在祜</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771238.jpg</jpgLink>
            <num>3011</num>
            <origNm>제주 제주시갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770968</deptCd>
            <empNm>신동근</empNm>
            <engNm>SHIN DONGKUN</engNm>
            <hjNm>申東根</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770968.jpg</jpgLink>
            <num>2937</num>
            <origNm>인천 서구을</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771209</deptCd>
            <empNm>신영대</empNm>
            <engNm>SHIN YEONGDAE</engNm>
            <hjNm>申榮大</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771209.jpg</jpgLink>
            <num>3093</num>
            <origNm>전북 군산시</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771246</deptCd>
            <empNm>신원식</empNm>
            <engNm>SHIN WONSIK</engNm>
            <hjNm>申源湜</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771246.jpg</jpgLink>
            <num>3098</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771219</deptCd>
            <empNm>신정훈</empNm>
            <engNm>SHIN JEONGHOON</engNm>
            <hjNm>辛正勳</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771219.jpg</jpgLink>
            <num>2829</num>
            <origNm>전남 나주시화순군</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771257</deptCd>
            <empNm>신현영</empNm>
            <engNm>SHIN HYUNYOUNG</engNm>
            <hjNm>申賢榮</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771257.jpg</jpgLink>
            <num>3100</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770869</deptCd>
            <empNm>심상정</empNm>
            <engNm>SIM SANGJEUNG</engNm>
            <hjNm>沈相정</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770869.jpg</jpgLink>
            <num>102</num>
            <origNm>경기 고양시갑</origNm>
            <reeleGbnNm>4선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770587</deptCd>
            <empNm>안규백</empNm>
            <engNm>AHN GYUBACK</engNm>
            <hjNm>安圭伯</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770587.jpg</jpgLink>
            <num>2659</num>
            <origNm>서울 동대문구갑</origNm>
            <reeleGbnNm>4선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770372</deptCd>
            <empNm>안민석</empNm>
            <engNm>AN MINSUK</engNm>
            <hjNm>安敏錫</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770372.jpg</jpgLink>
            <num>105</num>
            <origNm>경기 오산시</origNm>
            <reeleGbnNm>5선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771132</deptCd>
            <empNm>안병길</empNm>
            <engNm>AN BYUNGGIL</engNm>
            <hjNm>安炳吉</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771132.jpg</jpgLink>
            <num>3045</num>
            <origNm>부산 서구동구</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771017</deptCd>
            <empNm>안호영</empNm>
            <engNm>AN HOYOUNG</engNm>
            <hjNm>安浩永</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771017.jpg</jpgLink>
            <num>2906</num>
            <origNm>전북 완주군진안군무주군장수군</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771273</deptCd>
            <empNm>양경숙</empNm>
            <engNm>YANG KYUNGSOOK</engNm>
            <hjNm>梁敬淑</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771273.jpg</jpgLink>
            <num>2988</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771143</deptCd>
            <empNm>양금희</empNm>
            <engNm>YANG KUMHEE</engNm>
            <hjNm>梁琴喜</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771143.jpg</jpgLink>
            <num>3113</num>
            <origNm>대구 북구갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771178</deptCd>
            <empNm>양기대</empNm>
            <engNm>YANG KIDAE</engNm>
            <hjNm>梁基大</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771178.jpg</jpgLink>
            <num>3062</num>
            <origNm>경기 광명시을</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771287</deptCd>
            <empNm>양이원영</empNm>
            <engNm>YANG YIWONYOUNG</engNm>
            <hjNm>梁李媛瑛</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771287.jpg</jpgLink>
            <num>3115</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771271</deptCd>
            <empNm>양정숙</empNm>
            <engNm>YANG JUNGSUK</engNm>
            <hjNm>梁貞淑</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771271.jpg</jpgLink>
            <num>3067</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771155</deptCd>
            <empNm>양향자</empNm>
            <engNm>YANG HYANGJA</engNm>
            <hjNm>梁香子</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771155.jpg</jpgLink>
            <num>3107</num>
            <origNm>광주 서구을</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771010</deptCd>
            <empNm>어기구</empNm>
            <engNm>EOH KIYKU</engNm>
            <hjNm>魚基龜</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771010.jpg</jpgLink>
            <num>2861</num>
            <origNm>충남 당진시</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771202</deptCd>
            <empNm>엄태영</empNm>
            <engNm>EOM TAEYOUNG</engNm>
            <hjNm>嚴泰永</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771202.jpg</jpgLink>
            <num>3071</num>
            <origNm>충북 제천시단양군</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771113</deptCd>
            <empNm>오기형</empNm>
            <engNm>OH GIHYOUNG</engNm>
            <hjNm>吳奇炯</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771113.jpg</jpgLink>
            <num>3044</num>
            <origNm>서울 도봉구을</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771172</deptCd>
            <empNm>오영환</empNm>
            <engNm>OH YEONGHWAN</engNm>
            <hjNm>吳永煥</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771172.jpg</jpgLink>
            <num>2981</num>
            <origNm>경기 의정부시갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771037</deptCd>
            <empNm>오영훈</empNm>
            <engNm>OH YOUNGHUN</engNm>
            <hjNm>吳怜勳</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771037.jpg</jpgLink>
            <num>2840</num>
            <origNm>제주 제주시을</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771261</deptCd>
            <empNm>용혜인</empNm>
            <engNm>YONG HYEIN</engNm>
            <hjNm>龍慧仁</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771261.jpg</jpgLink>
            <num>2982</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770871</deptCd>
            <empNm>우상호</empNm>
            <engNm>WOO SANGHO</engNm>
            <hjNm>禹相虎</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770871.jpg</jpgLink>
            <num>2453</num>
            <origNm>서울 서대문구갑</origNm>
            <reeleGbnNm>4선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770872</deptCd>
            <empNm>우원식</empNm>
            <engNm>WOO WONSHIK</engNm>
            <hjNm>禹元植</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770872.jpg</jpgLink>
            <num>85</num>
            <origNm>서울 노원구을</origNm>
            <reeleGbnNm>4선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771038</deptCd>
            <empNm>위성곤</empNm>
            <engNm>WI SEONGGON</engNm>
            <hjNm>魏聖坤</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771038.jpg</jpgLink>
            <num>2859</num>
            <origNm>제주 서귀포시</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771126</deptCd>
            <empNm>유경준</empNm>
            <engNm>YOO GYEONGJOON</engNm>
            <hjNm>兪京濬</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771126.jpg</jpgLink>
            <num>3131</num>
            <origNm>서울 강남구병</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771121</deptCd>
            <empNm>유기홍</empNm>
            <engNm>YOO KIHONG</engNm>
            <hjNm>柳基洪</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771121.jpg</jpgLink>
            <num>731</num>
            <origNm>서울 관악구갑</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770966</deptCd>
            <empNm>유동수</empNm>
            <engNm>YOO DONGSOO</engNm>
            <hjNm>柳東秀</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770966.jpg</jpgLink>
            <num>2885</num>
            <origNm>인천 계양구갑</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771199</deptCd>
            <empNm>유상범</empNm>
            <engNm>YOO SANGBUM</engNm>
            <hjNm>劉相凡</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771199.jpg</jpgLink>
            <num>2990</num>
            <origNm>강원 홍천군횡성군영월군평창군</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770912</deptCd>
            <empNm>유의동</empNm>
            <engNm>YU EUIDONG</engNm>
            <hjNm>兪義東</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770912.jpg</jpgLink>
            <num>2820</num>
            <origNm>경기 평택시을</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771266</deptCd>
            <empNm>유정주</empNm>
            <engNm>YOO JUNGJU</engNm>
            <hjNm>兪訂炷</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771266.jpg</jpgLink>
            <num>2986</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771118</deptCd>
            <empNm>윤건영</empNm>
            <engNm>YOUN KUNYOUNG</engNm>
            <hjNm>尹建永</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771118.jpg</jpgLink>
            <num>3058</num>
            <origNm>서울 구로구을</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770808</deptCd>
            <empNm>윤관석</empNm>
            <engNm>YOUN KWANSUK</engNm>
            <hjNm>尹官石</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770808.jpg</jpgLink>
            <num>2481</num>
            <origNm>인천 남동구을</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771227</deptCd>
            <empNm>윤두현</empNm>
            <engNm>YOON DOOHYUN</engNm>
            <hjNm>尹斗鉉</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771227.jpg</jpgLink>
            <num>3079</num>
            <origNm>경북 경산시</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771263</deptCd>
            <empNm>윤미향</empNm>
            <engNm>YOUN MEEHYANG</engNm>
            <hjNm>尹美香</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771263.jpg</jpgLink>
            <num>3009</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770598</deptCd>
            <empNm>윤상현</empNm>
            <engNm>YOON SANGHYUN</engNm>
            <hjNm>尹相現</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770598.jpg</jpgLink>
            <num>2638</num>
            <origNm>인천 동구미추홀구을</origNm>
            <reeleGbnNm>4선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771153</deptCd>
            <empNm>윤영덕</empNm>
            <engNm>YOON YOUNGDEOK</engNm>
            <hjNm>尹永德</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771153.jpg</jpgLink>
            <num>3118</num>
            <origNm>광주 동구남구갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770811</deptCd>
            <empNm>윤영석</empNm>
            <engNm>YOON YOUNGSEOK</engNm>
            <hjNm>尹永碩</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770811.jpg</jpgLink>
            <num>2547</num>
            <origNm>경남 양산시갑</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771170</deptCd>
            <empNm>윤영찬</empNm>
            <engNm>YOON YOUNGCHAN</engNm>
            <hjNm>尹永燦</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771170.jpg</jpgLink>
            <num>3049</num>
            <origNm>경기 성남시중원구</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771221</deptCd>
            <empNm>윤재갑</empNm>
            <engNm>YOON JAEKAB</engNm>
            <hjNm>尹才鉀</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771221.jpg</jpgLink>
            <num>3092</num>
            <origNm>전남 해남군완도군진도군</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770812</deptCd>
            <empNm>윤재옥</empNm>
            <engNm>YUN JAEOK</engNm>
            <hjNm>尹在玉</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770812.jpg</jpgLink>
            <num>2442</num>
            <origNm>대구 달서구을</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771239</deptCd>
            <empNm>윤주경</empNm>
            <engNm>YUN JUKEYNG</engNm>
            <hjNm>尹柱卿</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771239.jpg</jpgLink>
            <num>3000</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771212</deptCd>
            <empNm>윤준병</empNm>
            <engNm>YOON JOONBYEONG</engNm>
            <hjNm>尹準炳</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771212.jpg</jpgLink>
            <num>3061</num>
            <origNm>전북 정읍시고창군</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771240</deptCd>
            <empNm>윤창현</empNm>
            <engNm>YUN CHANGHYUN</engNm>
            <hjNm>尹暢賢</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771240.jpg</jpgLink>
            <num>3001</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771032</deptCd>
            <empNm>윤한홍</empNm>
            <engNm>YOON HANHONG</engNm>
            <hjNm>尹漢洪</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771032.jpg</jpgLink>
            <num>2876</num>
            <origNm>경남 창원시마산회원구</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770876</deptCd>
            <empNm>윤호중</empNm>
            <engNm>YUN HOJUNG</engNm>
            <hjNm>尹昊重</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770876.jpg</jpgLink>
            <num>57</num>
            <origNm>경기 구리시</origNm>
            <reeleGbnNm>4선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770813</deptCd>
            <empNm>윤후덕</empNm>
            <engNm>YOON HUDUK</engNm>
            <hjNm>尹厚德</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770813.jpg</jpgLink>
            <num>2573</num>
            <origNm>경기 파주시갑</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770905</deptCd>
            <empNm>이개호</empNm>
            <engNm>LEE KAIHO</engNm>
            <hjNm>李介昊</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770905.jpg</jpgLink>
            <num>1967</num>
            <origNm>전남 담양군함평군영광군장성군</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771198</deptCd>
            <empNm>이광재</empNm>
            <engNm>LEE KWANGJAE</engNm>
            <hjNm>李光宰</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771198.jpg</jpgLink>
            <num>3</num>
            <origNm>강원 원주시갑</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771232</deptCd>
            <empNm>이달곤</empNm>
            <engNm>LEE DALGON</engNm>
            <hjNm>李達坤</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771232.jpg</jpgLink>
            <num>2755</num>
            <origNm>경남 창원시진해구</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771260</deptCd>
            <empNm>이동주</empNm>
            <engNm>LEE DONGJU</engNm>
            <hjNm>李東洲</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771260.jpg</jpgLink>
            <num>3072</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771028</deptCd>
            <empNm>이만희</empNm>
            <engNm>LEE MANHEE</engNm>
            <hjNm>李晩熙</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771028.jpg</jpgLink>
            <num>2965</num>
            <origNm>경북 영천시청도군</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770602</deptCd>
            <empNm>이명수</empNm>
            <engNm>LEE MYOUNGSU</engNm>
            <hjNm>李明洙</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770602.jpg</jpgLink>
            <num>2764</num>
            <origNm>충남 아산시갑</origNm>
            <reeleGbnNm>4선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771154</deptCd>
            <empNm>이병훈</empNm>
            <engNm>LEE BYUNGHOON</engNm>
            <hjNm>李炳勳</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771154.jpg</jpgLink>
            <num>3018</num>
            <origNm>광주 동구남구을</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770414</deptCd>
            <empNm>이상민</empNm>
            <engNm>LEE SANGMIN</engNm>
            <hjNm>李相珉</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770414.jpg</jpgLink>
            <num>342</num>
            <origNm>대전 유성구을</origNm>
            <reeleGbnNm>5선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771207</deptCd>
            <empNm>이상직</empNm>
            <engNm>LEE SANGJIK</engNm>
            <hjNm>李相稷</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771207.jpg</jpgLink>
            <num>2809</num>
            <origNm>전북 전주시을</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771098</deptCd>
            <empNm>이상헌</empNm>
            <engNm>LEE SANGHEON</engNm>
            <hjNm>李相憲</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771098.jpg</jpgLink>
            <num>2907</num>
            <origNm>울산 북구</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771151</deptCd>
            <empNm>이성만</empNm>
            <engNm>LEE SUNGMAN</engNm>
            <hjNm>李成萬</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771151.jpg</jpgLink>
            <num>3084</num>
            <origNm>인천 부평구갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771185</deptCd>
            <empNm>이소영</empNm>
            <engNm>LEE SOYOUNG</engNm>
            <hjNm>李素永</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771185.jpg</jpgLink>
            <num>3038</num>
            <origNm>경기 의왕시과천시</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771284</deptCd>
            <empNm>이수진</empNm>
            <engNm>LEE SUJIN</engNm>
            <hjNm>李秀眞</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771284.jpg</jpgLink>
            <num>3030</num>
            <origNm>서울 동작구을</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771269</deptCd>
            <empNm>이수진</empNm>
            <engNm>LEE SOOJIN</engNm>
            <hjNm>李壽珍</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771269.jpg</jpgLink>
            <num>3036</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771003</deptCd>
            <empNm>이양수</empNm>
            <engNm>LEE YANGSOO</engNm>
            <hjNm>李亮壽</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771003.jpg</jpgLink>
            <num>493</num>
            <origNm>강원 속초시인제군고성군양양군</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771251</deptCd>
            <empNm>이영</empNm>
            <engNm>LEE YOUNG</engNm>
            <hjNm>李永</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771251.jpg</jpgLink>
            <num>3024</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771255</deptCd>
            <empNm>이용</empNm>
            <engNm>LEE YONG</engNm>
            <hjNm>李鏞</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771255.jpg</jpgLink>
            <num>3133</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771158</deptCd>
            <empNm>이용빈</empNm>
            <engNm>LEE YONGBIN</engNm>
            <hjNm>李龍彬</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771158.jpg</jpgLink>
            <num>2998</num>
            <origNm>광주 광산구갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771115</deptCd>
            <empNm>이용선</empNm>
            <engNm>LEE YONGSUN</engNm>
            <hjNm>李庸瑄</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771115.jpg</jpgLink>
            <num>3055</num>
            <origNm>서울 양천구을</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771184</deptCd>
            <empNm>이용우</empNm>
            <engNm>LEE YONGWOO</engNm>
            <hjNm>李龍雨</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771184.jpg</jpgLink>
            <num>2999</num>
            <origNm>경기 고양시정</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771015</deptCd>
            <empNm>이용호</empNm>
            <engNm>LEE YONGHO</engNm>
            <hjNm>李容鎬</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771015.jpg</jpgLink>
            <num>2835</num>
            <origNm>전북 남원시임실군순창군</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770826</deptCd>
            <empNm>이원욱</empNm>
            <engNm>LEE WONWOOK</engNm>
            <hjNm>李元旭</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770826.jpg</jpgLink>
            <num>2522</num>
            <origNm>경기 화성시을</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771213</deptCd>
            <empNm>이원택</empNm>
            <engNm>LEE WONTAEG</engNm>
            <hjNm>李源澤</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771213.jpg</jpgLink>
            <num>3047</num>
            <origNm>전북 김제시부안군</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771278</deptCd>
            <empNm>이은주</empNm>
            <engNm>LEE EUNJU</engNm>
            <hjNm>李恩周</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771278.jpg</jpgLink>
            <num>3002</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770878</deptCd>
            <empNm>이인영</empNm>
            <engNm>LEE INYOUNG</engNm>
            <hjNm>李仁榮</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770878.jpg</jpgLink>
            <num>47</num>
            <origNm>서울 구로구갑</origNm>
            <reeleGbnNm>4선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771201</deptCd>
            <empNm>이장섭</empNm>
            <engNm>LEE JANGSUB</engNm>
            <hjNm>李將燮</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771201.jpg</jpgLink>
            <num>3023</num>
            <origNm>충북 청주시서원구</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771060</deptCd>
            <empNm>이재정</empNm>
            <engNm>LEE JAEJUNG</engNm>
            <hjNm>李在汀</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771060.jpg</jpgLink>
            <num>2848</num>
            <origNm>경기 안양시동안구을</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771205</deptCd>
            <empNm>이정문</empNm>
            <engNm>LEE JUNGMUN</engNm>
            <hjNm>李楨文</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771205.jpg</jpgLink>
            <num>3124</num>
            <origNm>충남 천안시병</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770914</deptCd>
            <empNm>이종배</empNm>
            <engNm>LEE JONGBAE</engNm>
            <hjNm>李鍾培</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770914.jpg</jpgLink>
            <num>2826</num>
            <origNm>충북 충주시</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771242</deptCd>
            <empNm>이종성</empNm>
            <engNm>LEE JONGSEONG</engNm>
            <hjNm>李鍾成</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771242.jpg</jpgLink>
            <num>3108</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771138</deptCd>
            <empNm>이주환</empNm>
            <engNm>LEE JOOHWAN</engNm>
            <hjNm>李周桓</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771138.jpg</jpgLink>
            <num>3066</num>
            <origNm>부산 연제구</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770835</deptCd>
            <empNm>이채익</empNm>
            <engNm>LEE CHEIK</engNm>
            <hjNm>李埰益</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770835.jpg</jpgLink>
            <num>2467</num>
            <origNm>울산 남구갑</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771002</deptCd>
            <empNm>이철규</empNm>
            <engNm>LEE CHULGYU</engNm>
            <hjNm>李喆圭</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771002.jpg</jpgLink>
            <num>2951</num>
            <origNm>강원 동해시태백시삼척시정선군</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771190</deptCd>
            <empNm>이탄희</empNm>
            <engNm>LEE TAHNEY</engNm>
            <hjNm>李誕熙</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771190.jpg</jpgLink>
            <num>2985</num>
            <origNm>경기 용인시정</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771280</deptCd>
            <empNm>이태규</empNm>
            <engNm>LEE TAEKYU</engNm>
            <hjNm>李泰珪</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771280.jpg</jpgLink>
            <num>2914</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770836</deptCd>
            <empNm>이학영</empNm>
            <engNm>LEE HACKYOUNG</engNm>
            <hjNm>李學永</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770836.jpg</jpgLink>
            <num>2683</num>
            <origNm>경기 군포시</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771129</deptCd>
            <empNm>이해식</empNm>
            <engNm>LEE HAESIK</engNm>
            <hjNm>李海植</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771129.jpg</jpgLink>
            <num>3007</num>
            <origNm>서울 강동구을</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770837</deptCd>
            <empNm>이헌승</empNm>
            <engNm>LEE HUNSEUNG</engNm>
            <hjNm>李憲昇</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770837.jpg</jpgLink>
            <num>2682</num>
            <origNm>부산 부산진구을</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771157</deptCd>
            <empNm>이형석</empNm>
            <engNm>LEE HYUNGSEOK</engNm>
            <hjNm>李炯錫</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771157.jpg</jpgLink>
            <num>3054</num>
            <origNm>광주 북구을</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770839</deptCd>
            <empNm>인재근</empNm>
            <engNm>IN JAEKEUN</engNm>
            <hjNm>印在謹</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770839.jpg</jpgLink>
            <num>2609</num>
            <origNm>서울 도봉구갑</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771177</deptCd>
            <empNm>임오경</empNm>
            <engNm>LIM OKYEONG</engNm>
            <hjNm>林五卿</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771177.jpg</jpgLink>
            <num>3125</num>
            <origNm>경기 광명시갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771041</deptCd>
            <empNm>임이자</empNm>
            <engNm>LIM LEEJA</engNm>
            <hjNm>林利子</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771041.jpg</jpgLink>
            <num>2936</num>
            <origNm>경북 상주시문경시 </origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771000</deptCd>
            <empNm>임종성</empNm>
            <engNm>LIM JONGSEONG</engNm>
            <hjNm>林鍾聲</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771000.jpg</jpgLink>
            <num>2858</num>
            <origNm>경기 광주시을</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771203</deptCd>
            <empNm>임호선</empNm>
            <engNm>LIM HOSEON</engNm>
            <hjNm>林昊宣</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771203.jpg</jpgLink>
            <num>3004</num>
            <origNm>충북 증평군진천군음성군</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771110</deptCd>
            <empNm>장경태</empNm>
            <engNm>JANG KYUNGTAE</engNm>
            <hjNm>張耿態</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771110.jpg</jpgLink>
            <num>3102</num>
            <origNm>서울 동대문구을</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770954</deptCd>
            <empNm>장제원</empNm>
            <engNm>CHANG JEWON</engNm>
            <hjNm>張濟元</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770954.jpg</jpgLink>
            <num>2711</num>
            <origNm>부산 사상구</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771160</deptCd>
            <empNm>장철민</empNm>
            <engNm>CHULMIN JANG</engNm>
            <hjNm>張喆敏</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771160.jpg</jpgLink>
            <num>3048</num>
            <origNm>대전 동구</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771275</deptCd>
            <empNm>장혜영</empNm>
            <engNm>JANG HYEYEONG</engNm>
            <hjNm>張惠英</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771275.jpg</jpgLink>
            <num>3076</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771139</deptCd>
            <empNm>전봉민</empNm>
            <engNm>JEON BONGMIN</engNm>
            <hjNm>田奉珉</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771139.jpg</jpgLink>
            <num>3111</num>
            <origNm>부산 수영구</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771272</deptCd>
            <empNm>전용기</empNm>
            <engNm>JEON YONGGI</engNm>
            <hjNm>田溶冀</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771272.jpg</jpgLink>
            <num>2984</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770951</deptCd>
            <empNm>전재수</empNm>
            <engNm>CHUN JAESOO</engNm>
            <hjNm>田載秀</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770951.jpg</jpgLink>
            <num>2850</num>
            <origNm>부산 북구강서구갑</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771253</deptCd>
            <empNm>전주혜</empNm>
            <engNm>JUN JOOHYAE</engNm>
            <hjNm>全珠惠</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771253.jpg</jpgLink>
            <num>3034</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770846</deptCd>
            <empNm>전해철</empNm>
            <engNm>JEON HAECHEOL</engNm>
            <hjNm>全海澈</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770846.jpg</jpgLink>
            <num>2613</num>
            <origNm>경기 안산시상록구갑</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770926</deptCd>
            <empNm>전혜숙</empNm>
            <engNm>JUN HYESOOK</engNm>
            <hjNm>全惠淑</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770926.jpg</jpgLink>
            <num>2690</num>
            <origNm>서울 광진구갑</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771245</deptCd>
            <empNm>정경희</empNm>
            <engNm>CHUNG KYUNGHEE</engNm>
            <hjNm>丁慶姬</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771245.jpg</jpgLink>
            <num>3015</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771140</deptCd>
            <empNm>정동만</empNm>
            <engNm>JEONG DONGMAN</engNm>
            <hjNm>鄭東萬</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771140.jpg</jpgLink>
            <num>3025</num>
            <origNm>부산 기장군</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770881</deptCd>
            <empNm>정성호</empNm>
            <engNm>JUNG SUNGHO</engNm>
            <hjNm>鄭成湖</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770881.jpg</jpgLink>
            <num>2</num>
            <origNm>경기 양주시</origNm>
            <reeleGbnNm>4선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771012</deptCd>
            <empNm>정운천</empNm>
            <engNm>CHUNG WOONCHUN</engNm>
            <hjNm>鄭雲天</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771012.jpg</jpgLink>
            <num>2843</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771150</deptCd>
            <empNm>정일영</empNm>
            <engNm>CHUNG ILYOUNG</engNm>
            <hjNm>鄭日永</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771150.jpg</jpgLink>
            <num>3020</num>
            <origNm>인천 연수구을</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771103</deptCd>
            <empNm>정점식</empNm>
            <engNm>JEONG JEOMSIG</engNm>
            <hjNm>鄭点植</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771103.jpg</jpgLink>
            <num>3089</num>
            <origNm>경남 통영시고성군</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771006</deptCd>
            <empNm>정진석</empNm>
            <engNm>CHUNG JINSUK</engNm>
            <hjNm>鄭鎭碩</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771006.jpg</jpgLink>
            <num>237</num>
            <origNm>충남 공주시부여군청양군</origNm>
            <reeleGbnNm>5선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771189</deptCd>
            <empNm>정찬민</empNm>
            <engNm>JUNG CHANMIN</engNm>
            <hjNm>鄭燦敏</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771189.jpg</jpgLink>
            <num>2993</num>
            <origNm>경기 용인시갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771114</deptCd>
            <empNm>정청래</empNm>
            <engNm>JUNG CHUNGRAE</engNm>
            <hjNm>鄭淸來</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771114.jpg</jpgLink>
            <num>35</num>
            <origNm>서울 마포구을</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771068</deptCd>
            <empNm>정춘숙</empNm>
            <engNm>JUNG CHOUNSOOK</engNm>
            <hjNm>鄭春淑</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771068.jpg</jpgLink>
            <num>2950</num>
            <origNm>경기 용인시병</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771122</deptCd>
            <empNm>정태호</empNm>
            <engNm>JUNG TAEHO</engNm>
            <hjNm>鄭泰浩</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771122.jpg</jpgLink>
            <num>3117</num>
            <origNm>서울 관악구을</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771264</deptCd>
            <empNm>정필모</empNm>
            <engNm>JUNG PILMO</engNm>
            <hjNm>鄭必模</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771264.jpg</jpgLink>
            <num>3040</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771229</deptCd>
            <empNm>정희용</empNm>
            <engNm>JUNG HEEYONG</engNm>
            <hjNm>鄭熙溶</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771229.jpg</jpgLink>
            <num>3073</num>
            <origNm>경북 고령군성주군칠곡군</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770450</deptCd>
            <empNm>조경태</empNm>
            <engNm>CHO KYOUNGTAE</engNm>
            <hjNm>趙慶泰</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770450.jpg</jpgLink>
            <num>38</num>
            <origNm>부산 사하구을</origNm>
            <reeleGbnNm>5선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771247</deptCd>
            <empNm>조명희</empNm>
            <engNm>JO MYUNGHEE</engNm>
            <hjNm>曺明姬</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771247.jpg</jpgLink>
            <num>3005</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771243</deptCd>
            <empNm>조수진</empNm>
            <engNm>CHO SUJIN</engNm>
            <hjNm>趙修眞</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771243.jpg</jpgLink>
            <num>3063</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770973</deptCd>
            <empNm>조승래</empNm>
            <engNm>JO SEOUNGLAE</engNm>
            <hjNm>趙承來</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770973.jpg</jpgLink>
            <num>2872</num>
            <origNm>대전 유성구갑</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771156</deptCd>
            <empNm>조오섭</empNm>
            <engNm>JO OSEOP</engNm>
            <hjNm>曺五燮</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771156.jpg</jpgLink>
            <num>3043</num>
            <origNm>광주 북구갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770990</deptCd>
            <empNm>조응천</empNm>
            <engNm>CHO EUNGCHEON</engNm>
            <hjNm>趙應天</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770990.jpg</jpgLink>
            <num>2869</num>
            <origNm>경기 남양주시갑</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770456</deptCd>
            <empNm>조정식</empNm>
            <engNm>CHO JEONGSIK</engNm>
            <hjNm>趙正湜</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770456.jpg</jpgLink>
            <num>41</num>
            <origNm>경기 시흥시을</origNm>
            <reeleGbnNm>5선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771262</deptCd>
            <empNm>조정훈</empNm>
            <engNm>CHO JUNGHUN</engNm>
            <hjNm>趙廷訓</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771262.jpg</jpgLink>
            <num>3103</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771244</deptCd>
            <empNm>조태용</empNm>
            <engNm>CHO TAEYONG</engNm>
            <hjNm>趙太庸</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771244.jpg</jpgLink>
            <num>3053</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771235</deptCd>
            <empNm>조해진</empNm>
            <engNm>CHO HAEJIN</engNm>
            <hjNm>曺海珍</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771235.jpg</jpgLink>
            <num>2735</num>
            <origNm>경남 밀양시의령군함안군창녕군</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771215</deptCd>
            <empNm>주철현</empNm>
            <engNm>JU CHEOLHYEON</engNm>
            <hjNm>朱哲鉉</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771215.jpg</jpgLink>
            <num>3104</num>
            <origNm>전남 여수시갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770883</deptCd>
            <empNm>주호영</empNm>
            <engNm>JOO HOYOUNG</engNm>
            <hjNm>朱豪英</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770883.jpg</jpgLink>
            <num>730</num>
            <origNm>대구 수성구갑</origNm>
            <reeleGbnNm>5선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771250</deptCd>
            <empNm>지성호</empNm>
            <engNm>JI SEONGHO</engNm>
            <hjNm>池成浩</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771250.jpg</jpgLink>
            <num>3056</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770852</deptCd>
            <empNm>진선미</empNm>
            <engNm>JIN SUNMEE</engNm>
            <hjNm>陳善美</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770852.jpg</jpgLink>
            <num>2454</num>
            <origNm>서울 강동구갑</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771117</deptCd>
            <empNm>진성준</empNm>
            <engNm>JIN SUNGJOON</engNm>
            <hjNm>陳聲準</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771117.jpg</jpgLink>
            <num>2518</num>
            <origNm>서울 강서구을</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771112</deptCd>
            <empNm>천준호</empNm>
            <engNm>CHEON JUNHO</engNm>
            <hjNm>千俊鎬</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771112.jpg</jpgLink>
            <num>3120</num>
            <origNm>서울 강북구갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771282</deptCd>
            <empNm>최강욱</empNm>
            <engNm>CHOE KANGWOOK</engNm>
            <hjNm>崔康旭</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771282.jpg</jpgLink>
            <num>3042</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771119</deptCd>
            <empNm>최기상</empNm>
            <engNm>CHOI KISANG</engNm>
            <hjNm>崔基相</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771119.jpg</jpgLink>
            <num>3037</num>
            <origNm>서울 금천구</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771252</deptCd>
            <empNm>최승재</empNm>
            <engNm>CHOI SEUNGJAE</engNm>
            <hjNm>崔承宰</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771252.jpg</jpgLink>
            <num>3105</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771279</deptCd>
            <empNm>최연숙</empNm>
            <engNm>CHOI YOUNSUK</engNm>
            <hjNm>崔姸淑</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771279.jpg</jpgLink>
            <num>3088</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770952</deptCd>
            <empNm>최인호</empNm>
            <engNm>CHOI INHO</engNm>
            <hjNm>崔仁昊</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770952.jpg</jpgLink>
            <num>2948</num>
            <origNm>부산 사하구갑</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771188</deptCd>
            <empNm>최종윤</empNm>
            <engNm>CHOI JONGYOON</engNm>
            <hjNm>崔鍾允</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771188.jpg</jpgLink>
            <num>3057</num>
            <origNm>경기 하남시</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771194</deptCd>
            <empNm>최춘식</empNm>
            <engNm>CHOI CHUNSIK</engNm>
            <hjNm>崔春植</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771194.jpg</jpgLink>
            <num>3026</num>
            <origNm>경기 포천시가평군</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771231</deptCd>
            <empNm>최형두</empNm>
            <engNm>CHOI HYUNGDU</engNm>
            <hjNm>崔炯斗</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771231.jpg</jpgLink>
            <num>3021</num>
            <origNm>경남 창원시마산합포구</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771267</deptCd>
            <empNm>최혜영</empNm>
            <engNm>CHOI HYEYOUNG</engNm>
            <hjNm>崔惠英</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771267.jpg</jpgLink>
            <num>3012</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770962</deptCd>
            <empNm>추경호</empNm>
            <engNm>CHOO KYUNGHO</engNm>
            <hjNm>秋慶鎬</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770962.jpg</jpgLink>
            <num>2868</num>
            <origNm>대구 달성군</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771286</deptCd>
            <empNm>태영호</empNm>
            <engNm>TAE YONGHO</engNm>
            <hjNm>太永浩</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771286.jpg</jpgLink>
            <num>3106</num>
            <origNm>서울 강남구갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771234</deptCd>
            <empNm>하영제</empNm>
            <engNm>HA YOUNGJE</engNm>
            <hjNm>河榮帝</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771234.jpg</jpgLink>
            <num>3013</num>
            <origNm>경남 사천시남해군하동군</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770858</deptCd>
            <empNm>하태경</empNm>
            <engNm>HA TAEKEUNG</engNm>
            <hjNm>河泰慶</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770858.jpg</jpgLink>
            <num>2597</num>
            <origNm>부산 해운대구갑</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771197</deptCd>
            <empNm>한기호</empNm>
            <engNm>HAN KIHO</engNm>
            <hjNm>韓起鎬</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771197.jpg</jpgLink>
            <num>2567</num>
            <origNm>강원 춘천시철원군화천군양구군을</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771241</deptCd>
            <empNm>한무경</empNm>
            <engNm>HAN MOOKYUNG</engNm>
            <hjNm>韓茂景</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771241.jpg</jpgLink>
            <num>3074</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771211</deptCd>
            <empNm>한병도</empNm>
            <engNm>HAN BYUNGDO</engNm>
            <hjNm>韓秉道</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771211.jpg</jpgLink>
            <num>389</num>
            <origNm>전북 익산시을 </origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770859</deptCd>
            <empNm>한정애</empNm>
            <engNm>HAN JEOUNGAE</engNm>
            <hjNm>韓貞愛</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770859.jpg</jpgLink>
            <num>2469</num>
            <origNm>서울 강서구병</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771182</deptCd>
            <empNm>한준호</empNm>
            <engNm>HAN JUNHO</engNm>
            <hjNm>韓俊鎬</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771182.jpg</jpgLink>
            <num>3130</num>
            <origNm>경기 고양시을</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771196</deptCd>
            <empNm>허영</empNm>
            <engNm>HUH YOUNG</engNm>
            <hjNm>許榮</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771196.jpg</jpgLink>
            <num>3016</num>
            <origNm>강원 춘천시철원군화천군양구군갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771256</deptCd>
            <empNm>허은아</empNm>
            <engNm>HER EUNA</engNm>
            <hjNm>許垠娥</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771256.jpg</jpgLink>
            <num>3010</num>
            <origNm>비례대표</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771149</deptCd>
            <empNm>허종식</empNm>
            <engNm>HEO JONGSIK</engNm>
            <hjNm>許琮植</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771149.jpg</jpgLink>
            <num>3031</num>
            <origNm>인천 동구미추홀구갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771179</deptCd>
            <empNm>홍기원</empNm>
            <engNm>HONG KEEWON</engNm>
            <hjNm>洪起元</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771179.jpg</jpgLink>
            <num>3032</num>
            <origNm>경기 평택시갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770886</deptCd>
            <empNm>홍문표</empNm>
            <engNm>HONG MOONPYO</engNm>
            <hjNm>洪文杓</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770886.jpg</jpgLink>
            <num>736</num>
            <origNm>충남 홍성군예산군</origNm>
            <reeleGbnNm>4선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771146</deptCd>
            <empNm>홍석준</empNm>
            <engNm>HONG SUKJOON</engNm>
            <hjNm>洪碩晙</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771146.jpg</jpgLink>
            <num>2991</num>
            <origNm>대구 달서구갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771167</deptCd>
            <empNm>홍성국</empNm>
            <engNm>HONG SUNGKOOK</engNm>
            <hjNm>洪性國</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771167.jpg</jpgLink>
            <num>3008</num>
            <origNm>세종특별자치시갑</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770676</deptCd>
            <empNm>홍영표</empNm>
            <engNm>HONG YOUNGPYO</engNm>
            <hjNm>洪永杓</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770676.jpg</jpgLink>
            <num>2537</num>
            <origNm>인천 부평구을</origNm>
            <reeleGbnNm>4선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770864</deptCd>
            <empNm>홍익표</empNm>
            <engNm>HONG IHKPYO</engNm>
            <hjNm>洪翼杓</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770864.jpg</jpgLink>
            <num>2478</num>
            <origNm>서울 중구성동구갑</origNm>
            <reeleGbnNm>3선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771183</deptCd>
            <empNm>홍정민</empNm>
            <engNm>HONG JUNGMIN</engNm>
            <hjNm>洪貞敏</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771183.jpg</jpgLink>
            <num>2992</num>
            <origNm>경기 고양시병</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771145</deptCd>
            <empNm>홍준표</empNm>
            <engNm>HONG JOONPYO</engNm>
            <hjNm>洪準杓</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771145.jpg</jpgLink>
            <num>475</num>
            <origNm>대구 수성구을</origNm>
            <reeleGbnNm>5선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771130</deptCd>
            <empNm>황보승희</empNm>
            <engNm>HWANGBO SEUNGHEE</engNm>
            <hjNm>皇甫承希</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771130.jpg</jpgLink>
            <num>3119</num>
            <origNm>부산 중구영도구</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9771161</deptCd>
            <empNm>황운하</empNm>
            <engNm>HWANG UNHA</engNm>
            <hjNm>黃雲夏</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9771161.jpg</jpgLink>
            <num>3078</num>
            <origNm>대전 중구</origNm>
            <reeleGbnNm>초선</reeleGbnNm>
        </item>
        <item>
            <deptCd>9770936</deptCd>
            <empNm>황희</empNm>
            <engNm>HWANG HEE</engNm>
            <hjNm>黃熙</hjNm>
            <jpgLink>http://www.assembly.go.kr/photo/9770936.jpg</jpgLink>
            <num>2905</num>
            <origNm>서울 양천구갑</origNm>
            <reeleGbnNm>재선</reeleGbnNm>
        </item>
    </items>
    <numOfRows>300</numOfRows>
    <pageNo>1</pageNo>
    <totalCount>295</totalCount>
</body>
</response>`;
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

    const rss = x2js.xml2js(data2);
    if (nowData) {
        nowData.nwvrqwxyaytdsfvhu[1].row.forEach(function (item) {
            var dis = Hangul.disassemble(item.HG_NM, true);
            var cho = dis.reduce(function (prev, elem) {
                elem = elem[0] ? elem[0] : elem;
                return prev + elem;
            }, "");
            item.DISASSEMBLED = cho;
        });
        var search1 = Hangul.disassemble(value).join(""); // ㄺ=>ㄹㄱ

        nowData.nwvrqwxyaytdsfvhu[1].row.map((item, index) => {
            rss.response.body.items.item.map((item2, index) => {
                if (item.HG_NM === item2.empNm && item.HJ_NM === item2.hjNm) {
                    nowData.nwvrqwxyaytdsfvhu[1].row[index].IMAGE = item2.jpgLink;
                }
            });
        });
    }
    const filtered = nowData.nwvrqwxyaytdsfvhu[1].row.filter(function (item) {
        return item.HG_NM.includes(value) || item.DISASSEMBLED.includes(search1);
    });

    return nowLoading ? (
        <ActivityIndicator />
    ) : nowData ? (
        <View>
            <View style={{height: 56, backgroundColor: "#ffffff"}}>
                <SearchBar value={value} inputStyle={{backgroundColor: "#f5f5f5", height: 44, fontSize: 15, color: "#a0a0a0"}} style={{marginHorizontal: 16}} onChangeText={setValue} placeholder="국회의원을 검색해보세요" theme="light" platform="ios"></SearchBar>
            </View>
            <FlatList data={value === "" ? nowData.nwvrqwxyaytdsfvhu[1].row : filtered} renderItem={renderItem} contentContainerStyle={{backgroundColor: "#f2f3f5", marginTop: 6, paddingBottom: 100}} keyExtractor={keyExtractor} initialNumToRender={5} maxToRenderPerBatch={10} windowSize={10}></FlatList>
        </View>
    ) : null;
};

export default Members;
