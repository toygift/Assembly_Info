import {useNavigation} from "@react-navigation/native";
import React, {useState} from "react";
import {View, Text, FlatList} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import Member from "../Components/Member";
import X2JS from "x2js";
const Hangul = require("hangul-js");
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

const data = [
    {
        HG_NM: "강기윤",
        HJ_NM: "姜起潤",
        ENG_NM: "KANG GIYUN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1960-06-04",
        JOB_RES_NM: "간사",
        POLY_NM: "국민의힘",
        ORIG_NM: "경남 창원시성산구",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "보건복지위원회",
        CMITS: "보건복지위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제19대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-1751",
        E_MAIL: "ggotop@naver.com",
        HOMEPAGE: "http://blog.naver.com/ggotop",
        STAFF: "김홍광, 한영애",
        SECRETARY: "지상훈, 최광림",
        SECRETARY2: "김영록, 안효상, 이유진, 홍지형, 김지훈",
        MONA_CD: "14M56632",
        MEM_TITLE: "[학력]\r\n마산공고(26회)\r\n창원대학교 행정학과\r\n중앙대학교 행정대학원 지방의회과 석사\r\n창원대학교 대학원 행정학 박사\r\n\r\n[경력]\r\n현) 국회 보건복지위원회 국민의힘 간사\r\n현) 국민의힘 소상공인살리기 특별위원회 부위원장\r\n현) 국민의힘 코로나19 대책 특별위원회 위원\r\n\r\n미래통합당 경남도당 민생특위 위원장\r\n제19대 국회의원 (새누리당/경남 창원시 성산구)\r\n새누리당 원내부대표",
        ASSEM_ADDR: "의원회관 937호",
    },
    {
        HG_NM: "강대식",
        HJ_NM: "姜大植",
        ENG_NM: "KANG DAESIK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1959-11-02",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "대구 동구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국방위원회",
        CMITS: "국방위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-5275",
        E_MAIL: "kds21341@naver.com",
        HOMEPAGE: null,
        STAFF: "박홍규, 정운태",
        SECRETARY: "유진영, 윤미라",
        SECRETARY2: "박순권, 김광연, 윤선영, 김현정, 송민욱",
        MONA_CD: "L2I9861C",
        MEM_TITLE: "[학력]\r\n송정초등학교\r\n안심중학교\r\n경북대학교 사범대학 부속고등학교\r\n영남대학교 경영대학원 경영학 석사\r\n영남대학교 대학원 경영학 박사\r\n\r\n[경력]\r\n현) 국민의힘 원내부대표 \r\n현) 제21대 국회의원 (대구 동구을/국민의힘)\r\n현) 제21대 국회 국방위원회 위원\r\n\r\n전) 대구광역시 동구 구청장\r\n전) 대구광역시 동구의회 의장\r\n전) 대구광역시 동구의회 의원\r\n전) 대구광역시 동구문화재단 이사장\r\n",
        ASSEM_ADDR: "의원회관 341호",
    },
    {
        HG_NM: "강득구",
        HJ_NM: "姜得求",
        ENG_NM: "KANG DEUKGU",
        BTH_GBN_NM: "음",
        BTH_DATE: "1963-05-27",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 안양시만안구",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "교육위원회",
        CMITS: "교육위원회, 예산결산특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2747~9",
        E_MAIL: "mainsail440@daum.net",
        HOMEPAGE: "https://blog.naver.com/dulipapa",
        STAFF: "서용선, 안홍식",
        SECRETARY: "최경순, 홍미하",
        SECRETARY2: "문형구, 최기섭, 조나연, 오세령, 배은경",
        MONA_CD: "8P37634C",
        MEM_TITLE: "2018. 10. ~ 2019. 5. 민주연구원 자치발전연구센터 본부장 \r\n2016. 10. ~ 2018. 3. 경기도 연정부지사\r\n2014.  7. ~ 2016. 1. 경기도의회 의장 \r\n2010.  7. ~ 2014. 6. 경기도의회 의원(2013. 7. ~ 2014. 6. 민주당 대표)\r\n1998.  7. ~ 2002. 6. 경기도의회 의원 ",
        ASSEM_ADDR: "의원회관 440호",
    },
    {
        HG_NM: "강민국",
        HJ_NM: "姜旻局",
        ENG_NM: "KANG MINKUK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1971-03-03",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "경남 진주시을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "정무위원회",
        CMITS: "정무위원회, 국회운영위원회, 중앙선거관리위원회 위원(문상부) 선출에 관한 인사청문특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-0797",
        E_MAIL: "strongwind01@naver.com",
        HOMEPAGE: null,
        STAFF: "강민승, 정경섭",
        SECRETARY: "국고은, 오경훈",
        SECRETARY2: "성환종, 사정아, 김오주, 이현우, 한지은",
        MONA_CD: "GX22581L",
        MEM_TITLE: "[학력]\r\n\r\n\r\n- 봉곡초등학교 졸업(14회)\r\n\r\n- 진주중학교 졸업(36회)\r\n\r\n- 진주동명고등학교 졸업(36회)\r\n\r\n- 경남대학교 법정대학 법학과 졸업\r\n\r\n- 경남대학교 대학원 법학과 졸업 (법학박사)\r\n\r\n \r\n\r\n[경력]\r\n\r\n\r\n- 전) 한국국제대학교 경찰복지행정학부 조교수\r\n\r\n- 전) 새누리당 중앙청년위원회 상임전국위원\r\n\r\n- 전) 새누리당 중앙당 부대변인\r\n\r\n- 전) 경상남도 도지사 비서실장\r\n\r\n- 전) 경상남도 정무보좌역\r\n\r\n- 전) 제10대 ·제11대 경상남도의회 의원\r\n\r\n- 전) 2015년 경남도교육청 소관 추경예산위원회 예·결산특별위원장\r\n\r\n- 전) 제10대 후반기 경상남도의회 의회운영위원회 부위원장\r\n\r\n- 전) 남부내륙철도 조기건설 특별위원회 부위원장\r\n\r\n- 전) 제11대 전반기 경상남도의회 건설소방위원회 위원장\r\n\r\n- 현) 제21대 국회의원 (경상남도 진주을)\r\n\r\n- 현) 제21대 국회 정무위원회 위원\r\n\r\n- 현) 국민의힘 원내대변인\r\n\r\n- 현) 국민의힘 중앙윤리위원회 위원\r\n\r\n- 현) 국민의힘 경상남도당 수석부위원장\r\n\r\n- 현) 국민의힘 라임·옵티머스 권력형 비리게이트 특별위원회 위원\r\n\r\n- 현) 국민의힘 중앙재해대책위원\r\n\r\n- 현) 국민의힘 정부정책 감시 특별위원 \r\n",
        ASSEM_ADDR: "의원회관 1007호",
    },
    {
        HG_NM: "강민정",
        HJ_NM: "姜旼姃",
        ENG_NM: "KANG MINJUNG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1961-04-26",
        JOB_RES_NM: "위원",
        POLY_NM: "열린민주당",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "교육위원회",
        CMITS: "교육위원회, 국회운영위원회, 예산결산특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-2477",
        E_MAIL: "kmj2020edu@gmail.com",
        HOMEPAGE: "https://blog.naver.com/kmgedu21",
        STAFF: "손성조, 윤호숙",
        SECRETARY: "김민혜, 김원석",
        SECRETARY2: "김수안, 김성용, 민지홍, 황연미, 양진영",
        MONA_CD: "P2N50879",
        MEM_TITLE: "현) 열린민주당 원내대표 \r\n\r\n전) 서울시교육청 혁신학교운영위원회 위원장\r\n전) 교육부 민주시민교육자문위원회 위원\r\n전) 교육자치정책협의회 위원\r\n전) 징검다리교육공동체 상임이사\r\n전) 서울시교육청 혁신교육지구 정책연구교사\r\n전) 북서울중학교 혁신부장\r\n초선 (21대)",
        ASSEM_ADDR: "의원회관 421호",
    },
    {
        HG_NM: "강병원",
        HJ_NM: "姜炳遠",
        ENG_NM: "KANG BYUNGWON",
        BTH_GBN_NM: "음",
        BTH_DATE: "1971-07-09",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 은평구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "보건복지위원회",
        CMITS: "보건복지위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-1422",
        E_MAIL: "kangbw89@gmail.com",
        HOMEPAGE: "http://kangbw.co.kr",
        STAFF: "장용득, 허호인",
        SECRETARY: "김모영, 김형모",
        SECRETARY2: "정선호, 박화준, 정수현, 차근솔, 모다빈",
        MONA_CD: "60490713",
        MEM_TITLE:
            "1971년 7월 9일 생\r\n서울대학교 농경제학과 졸업 (경제학사)\r\n\r\n[경력]\r\n1994 서울대학교 총학생회장\r\n1998 ~ 1999 ㈜대우인터네셔널 무역부문\r\n2002 제16대 대통령선거 노무현 대통령 후보 수행비서\r\n2003 제16대 대통령직 인수위원회 행정관\r\n2003 ~ 2007 노무현대통령 대통령비서실 청와대 행정관\r\n2011 ㈜글로원씨앤티 대표이사\r\n2011.1 ~2017.7 &#039사람사는세상 노무현재단&#039 기획위원\r\n2011 민주당 전략기획위원회 부위원장\r\n2012.08 ~ 2013.05 민주통합당 홍보위원회 부위원장\r\n2012 제18대 대통령선거 문재인 민주통합당 대통령후보 직능특보실 부실장\r\n2015.04 ~ 2015.12 새정치민주연합 부대변인\r\n2015.12 ~ 2016.08 더불어민주당 부대변인\r\n2016.03 ~ 더불어민주당 서울 은평(을) 지역위원장\r\n2016.05 ~ 제20대 국회의원 (더불어민주당 / 서울 은평구을)\r\n2016.05 ~ 2017.05 제20대 국회 전반기 국회운영위원회 위원\r\n2016.05 ~ 2018.04 제20대 국회 전반기 환경노동위원회 위원\r\n2016.05 ~ 2017.05 더불어민주당 원내부대표\r\n2016.05 ~ 2016.10 더불어민주당 <가계부채TF> 간사\r\n2016.10 ~ 더불어민주당 서울시당 을지키는민생실천위원회(을지로위원회) 위원장\r\n2016.11 ~ 2018.08 더불어민주당 전국청년위원회 운영위원\r\n2016.12 ~ 2018.08 더불어민주당 환경특별위원회 위원장\r\n2017.03 ~ 2017.05 문재인 더불어민주당 대통령후보 환경노동특보단장, 유세본부 부본부장, 종합상황본부 단장\r\n2017.03 ~ 2018.08 더불어민주당 중앙당 을지키는민생실천위원회(을지로위원회) 운영위원\r\n2017.06 ~ 2018.08 더불어민주당 정책위원회 부의장\r\n2017.06 ~ 2018.05 제20대 국회 전반기 예산결산특별위원회 위원\r\n2017.07 ~ 사람사는세상 노무현재단 상임운영위원\r\n2017.07 ~ 2018.08 더불어민주당 생활화학제품안전특별위원회 위원장\r\n2017.08 ~ 2018.08 더불어민주당 적폐청산위원회 위원\r\n2017.10 ~ 문재인 대통령 특사(2017 태국 국왕 장례식) \r\n2017.11 헌법재판소장 이진성 후보자 인사청문특별위원회 위원\r\n2017.12 ~ 2018.05 제20대 국회 미세먼지대책 특별위원회 위원\r\n2018.01 ~ 제20대 국회 운영위원회 위원\r\n2018.05 ~ 더불어민주당 원내대변인\r\n2018.07 ~ 제20대 국회 후반기 기획재정위원회 위원\r\n2018.10 ~ 더불어민주당 자치분권정책협의회 지방혁신균형발전추진단 추진위원\r\n2018.10 ~ 더불어민주당 동북아평화협력특별위원회 위원\r\n2019.02 ~ 더불어민주당 도시재생특별위원회 위원\r\n2019.11 ~ 문재인대통령 특별수행원(2019 아세안+3 정상회의) \r\n2020.04 ~ 제21대 국회의원 (더불어민주당 / 서울 은평구을)\r\n2020.06 ~ 제21대 국회 보건복지위원회 위원 \r\n2020.03~ 더불어민주당 코로나19 국난극복위원회 마스크공급확충팀장 \r\n2020.09~ 더불어민주당 정책위원회 선임부의장 \r\n2020.09~ 더불어민주당 미래전환 K-뉴딜위원회 디지털분과위원장 \r\n2021.03~ 제21대 국회 보건복지위원회 위원 \r\n2021.03~ 박영선 더불어민주당 서울시장 후보 종합상황본부장 \r\n2021.06 ~더불어민주당 미래전환 K-뉴딜위원회 상임부위원장 ",
        ASSEM_ADDR: "의원회관 932호",
    },
    {
        HG_NM: "강선우",
        HJ_NM: "姜仙祐",
        ENG_NM: "KANG SUNWOO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1978-06-02",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 강서구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "보건복지위원회",
        CMITS: "보건복지위원회, 예산결산특별위원회, 여성가족위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-5761~3",
        E_MAIL: "gangseo.kap@gmail.com",
        HOMEPAGE: "http://blog.naver.com/gangseo-kap",
        STAFF: "남경수, 이정효",
        SECRETARY: "김수상, 김연주",
        SECRETARY2: "강연수, 손여정, 성하구, 이동수, 최미지",
        MONA_CD: "MNZ4401T",
        MEM_TITLE: "□ 학력\r\n - 이화여자대학교 사범대학 영어교육학과 학사\r\n - 이화여자대학교 대학원 소비자인간발달학과 석사 \r\n - 미국 위스콘신대학교 매디슨 캠퍼스 \r\n   인간발달 및 가족학 박사 \r\n\r\n□ 주요 약력\r\n - (현) 국회 보건복지위원회 위원\r\n - (현) 국회 여성가족위원회 위원\r\n - (현) 국회 예산결산특별위원회 위원\r\n - (전) 더불어민주당 대변인\r\n - (전) 더불어민주당 원내부대표\r\n - (전) 대통령 직속 국가교육회의 전문위원 \r\n - (전) 미국 사우스다코타주립대학교 조교수\r\n\r\n\r\n[지역사무실]\r\n서울 강서구 강서로 205 케이빌딩 6층\r\nT: 02-2604-2300 / F:02-2604-2309",
        ASSEM_ADDR: "의원회관 738호",
    },
    {
        HG_NM: "강은미",
        HJ_NM: "姜恩美",
        ENG_NM: "KANG EUNMI",
        BTH_GBN_NM: "음",
        BTH_DATE: "1970-09-06",
        JOB_RES_NM: "위원",
        POLY_NM: "정의당",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "환경노동위원회",
        CMITS: "환경노동위원회, 예산결산특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-4162",
        E_MAIL: "em7086@gmail.com",
        HOMEPAGE: "blog.naver.com/kangem2024",
        STAFF: "안중언, 장화동, 정송도",
        SECRETARY: "김용재, 진은주",
        SECRETARY2: "장연경, 임미애, 신미희, 문다빈, 이승준",
        MONA_CD: "WMG57662",
        MEM_TITLE: "제21대 국회의원 \r\n\r\n정의당 원내대표\r\n정의당 부대표\r\n광주광역시 시의원\r\n광주광역시 서구 구의원 ",
        ASSEM_ADDR: "의원회관 514호",
    },
    {
        HG_NM: "강준현",
        HJ_NM: "康準鉉",
        ENG_NM: "KANG JUNHYEON",
        BTH_GBN_NM: "음",
        BTH_DATE: "1964-08-19",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "세종특별자치시을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국토교통위원회",
        CMITS: "국토교통위원회, 국회운영위원회, 예산결산특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6950",
        E_MAIL: "jhkang315@gmail.com",
        HOMEPAGE: "https://blog.naver.com/withusone2020",
        STAFF: "권민희",
        SECRETARY: "박동명, 이세영",
        SECRETARY2: "임예택, 김효숙, 홍유정, 안정균, 이수진",
        MONA_CD: "5KV96424",
        MEM_TITLE: "-21대 국회의원(세종특별자치시 을)\r\n-국회 국토교통위원회 위원\r\n-더불어민주당 세종시당위원장\r\n-더불어민주당 국가균형발전특별위원회 부위원장\r\n-더불어민주당 K-뉴딜위원회 지역균형뉴딜분과위원회 위원\r\n-더불어민주당 지방소멸대응TF 위원\r\n-더불어민주당 세종시 을 지역위원장\r\n\r\n-(前)세종특별자치시 정무부시장\r\n-(前)행정안전부 정책자문위원회 지방자치분권과 위원\r\n-(前)충남대학교 건축공학과 특임교수",
        ASSEM_ADDR: "의원회관 315호",
    },
    {
        HG_NM: "강훈식",
        HJ_NM: "姜勳植",
        ENG_NM: "KANG HOONSIK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1973-10-24",
        JOB_RES_NM: "간사",
        POLY_NM: "더불어민주당",
        ORIG_NM: "충남 아산시을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "산업통상자원중소벤처기업위원회",
        CMITS: "산업통상자원중소벤처기업위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-1045~47",
        E_MAIL: "gohoonsik@gmail.com",
        HOMEPAGE: "http://blog.naver.com/kanghunsik",
        STAFF: "신재동, 조재순",
        SECRETARY: "김영호, 윤재광",
        SECRETARY2: "이은빈, 정언주, 안재민, 이종혁, 김현미",
        MONA_CD: "TRE2429O",
        MEM_TITLE: "(현) 제20,21대 국회의원(재선)\r\n(현) 더불어민주당 충남도당위원장\r\n(현) 국회 산업통상자원중소벤처기업위원회 간사\r\n\r\n- 더불어민주당 수석대변인(전)\r\n- 국회 예산결산위원회 위원(전)\r\n- 국회 국토교통위원회 위원(전) \r\n- 국회 아동·여성·인권정책포럼 연구책임위원(전) \r\n- 국회 미세먼지대책특별위원회 위원(전)\r\n- 국회 운영위원회 위원(전)\r\n- 더불어민주당 원내대변인(전)\r\n- 더불어민주당 전략기획위원장(전)\r\n- 동국대언론정보대학원 신문방송학 겸임교수(전)\r\n- 뉴욕주립대학교 한국학연구소 객원연구원(전)\r\n- 건국대학교 총학생회장(전) \r\n- 건국대 경영학 학사(전) \r\n\r\n[충남 아산 지역사무실]\r\n충남 아산시 배방읍 배방로 22 삼영프라자 601호 \r\n041-548-5245 ",
        ASSEM_ADDR: "의원회관 722호",
    },
    {
        HG_NM: "고민정",
        HJ_NM: "高旼廷",
        ENG_NM: "KO MINJUNG",
        BTH_GBN_NM: "양",
        BTH_DATE: "1979-08-23",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 광진구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "보건복지위원회",
        CMITS: "보건복지위원회, 예산결산특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-4630~2",
        E_MAIL: "kominjung21@gmail.com",
        HOMEPAGE: "https://blog.naver.com/kominjung629",
        STAFF: "이상엽",
        SECRETARY: "윤수경, 이준승",
        SECRETARY2: "예한나, 노시평, 조준형, 김슬기, 박유선",
        MONA_CD: "WCD5518S",
        MEM_TITLE: "[경력]\r\n- 더불어민주당 제21대 국회의원 (서울 광진구을)\r\n- (전)더불어민주당 정책위원회 상임부의장\r\n- 제21대 국회 전반기 보건복지위원회 위원\r\n- 제21대 예산결산특별위원회 위원 \r\n- 더불어민주당 사회복지특별위원회 위원장\r\n\r\n- (전)대통령비서실 대변인 \r\n- (전)KBS 아나운서실 아나운서 \r\n\r\n[지역사무실 고캠]\r\n광진구 자양로28가길 23 \r\nT: 02-455-0629 / F: 02-446-0629",
        ASSEM_ADDR: "의원회관 629호",
    },
    {
        HG_NM: "고영인",
        HJ_NM: "高永寅",
        ENG_NM: "KO YOUNGIN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1963-07-07",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 안산시단원구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "보건복지위원회",
        CMITS: "보건복지위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-5490",
        E_MAIL: "koyoungin312@gmail.com",
        HOMEPAGE: "https://blog.naver.com/kyi4853",
        STAFF: "김남수, 김재권",
        SECRETARY: "김항기, 윤도희",
        SECRETARY2: "조선식, 홍봉수, 서호, 박수철, 김지예",
        MONA_CD: "4XG1439M",
        MEM_TITLE: "중대부고 졸업\r\n고려대학교 졸업\r\n고려대학교 정책대학원 경제학 석사\r\n현) 더불어민주당 안산단원갑 지역위원장\r\n현) 더불어민주당 정책위원회 상임부의장\r\n현) 더불어민주당 경기도당 부위원장\r\n현) 더불어민주당 사회적참사특별조사위원회 간사\r\n현) 더불어민주당 다문화위원장\r\n전) 신안산대학교 산업경영과 초빙교수",
        ASSEM_ADDR: "의원회관 312호",
    },
    {
        HG_NM: "고용진",
        HJ_NM: "高榕진",
        ENG_NM: "KOH YONGJIN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1964-08-06",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 노원구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "기획재정위원회",
        CMITS: "기획재정위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-4840",
        E_MAIL: "gogoyongjin@naver.com",
        HOMEPAGE: "http://blog.naver.com/kohyj64",
        STAFF: "문선희, 정철영",
        SECRETARY: "김하동, 윤선희",
        SECRETARY2: "김진환, 유재선, 최승환, 이대영, 김연진",
        MONA_CD: "6V37131U",
        MEM_TITLE: "현) 제21대 국회의원 / 더불어민주당 노원갑 지역위원장\r\n현) 국회 기획재정위원회 위원\r\n현) 더불어민주당 수석대변인\r\n\r\n전) 제20대 국회의원 \r\n전) 더불어민주당 원내부대표\r\n전) 더불어민주당 정책위원회 제3정조위원장\r\n전) 한국아동인구환경의원연맹(CPE) 회원\r\n전) 더불어민주당 정보통신특별위원회 위원장\r\n전) 더불어민주당 정책위원회 부의장\r\n전) 국회 과학기술정보방송통신위원회 위원\r\n전) 국회 평창동계올림픽 및 국제경기대회지원특위 위원\r\n전) 더불어민주당 공정언론특별위원회 위원\r\n전) 더불어민주당 오직민생특별위원회 사교육대책TF 위원\r\n\r\n- 1964년생\r\n- 종암초·대광중·대광고 졸업\r\n- 서울대학교 언론정보학과 및 동 대학원 석사 졸업\r\n- 재선 서울시의회 의원(제4·5대)\r\n- 노무현정부 청와대 행정관 \r\n- 환경공단 기획관리이사\r\n- 민주당 대표실 부실장\r\n",
        ASSEM_ADDR: "의원회관 816호",
    },
    {
        HG_NM: "구자근",
        HJ_NM: "具滋根",
        ENG_NM: "KU JAKEUN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1967-10-09",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "경북 구미시갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "산업통상자원중소벤처기업위원회",
        CMITS: "산업통상자원중소벤처기업위원회, 감사원장(최재해) 임명동의에 관한 인사청문특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-3190",
        E_MAIL: "can929292@naver.com",
        HOMEPAGE: "http://blog.naver.com/can929292",
        STAFF: "정연철, 허대윤",
        SECRETARY: "김일수, 정준용",
        SECRETARY2: "정한빈, 장철진, 문영수, 변자경, 정규민",
        MONA_CD: "7469929V",
        MEM_TITLE: "1967년 10월 9일생 \r\n동국대학교 법과대학 졸업 (법학과 석사) \r\n\r\n[경력] \r\n2021.06 ~ 국민의힘 반도체 특별위원회 위원\r\n2021.05 ~ 국민의힘 원내부대표\r\n2020.11 ~ 2021.06 국민의힘 정책위원회 제2정조위원회 부위원장\r\n2020.10 ~ 국민의힘 약자와의 동행위원회 정책동행분과 위원\r\n2020.09 ~ 국민의힘 국민통합위원회 김제시 호남동행국회의원\r\n2020.07 ~ 국민의힘 정책위원회 소상공인 살리기 특별위원회 위원\r\n2020.05 ~ 제21대 국회 전반기 산업통상자원중소벤처기업위원회 위원\r\n2020.05 ~ 제21대 국회의원 (경북 구미시갑/국민의힘)\r\n2019.06 ~ 2020.05 미래통합당 중앙위원회 지방자치분과 수석부위원장\r\n2018.10 ~ 2019.09 여의도연구원 정책자문위원\r\n2016.06 ~ 2020.04 ㈜태웅 CEO \r\n2015.02 ~ 2020.04 한국도덕운동경북협회 회장 \r\n2014.07 ~ 2016.01 제10대 경상북도의회 의원\r\n2010.07 ~ 2014.06 제9대 경상북도의회 의원\r\n2006.07 ~ 2010.03 제5대 구미시의회 의원 ",
        ASSEM_ADDR: "의원회관 408호",
    },
    {
        HG_NM: "권명호",
        HJ_NM: "權明浩",
        ENG_NM: "KWON MYUNGHO",
        BTH_GBN_NM: "양",
        BTH_DATE: "1961-01-10",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "울산 동구",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "산업통상자원중소벤처기업위원회",
        CMITS: "산업통상자원중소벤처기업위원회, 예산결산특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-5705, 지역 052-201-7676",
        E_MAIL: "kmh330575@naver.com",
        HOMEPAGE: "http://blog.naver.com/kmh330575",
        STAFF: "고광철, 배상원",
        SECRETARY: "맹일훈, 원종용",
        SECRETARY2: "신승구, 차호, 신옥형, 이재웅, 허진영",
        MONA_CD: "E9R4507P",
        MEM_TITLE: "[ 학 력 ]\r\n- 방어진초등학교 졸업\r\n- 방어진중학교 졸업\r\n- 학성고등학교 졸업\r\n- 울산대학교(전공:영어영문학과)졸업\r\n- 울산대학교 정책대학원(전공:공공정책전공)졸업\r\n\r\n[ 약 력 ]\r\n- 21대 국회의원(울산 동구 / 국민의힘) \r\n- 現 산업통상자원중소벤처기업위원회 위원\r\n- 現 국민의힘 원내부대표\r\n- 現 국민의힘 중소기업위원회 부위원장\r\n- 現 국민의힘 약자와의 동행 위원회 정책동행분과 \r\n      위원                                  \r\n- 現 국민의힘 소상공인 살리기 특별위원회 위원\r\n- 前 제7대 울산 동구청장\r\n- 前 울산광역시의회 부의장\r\n- 前 울산광역시 동구의회 의장\r\n",
        ASSEM_ADDR: "의원회관 618호",
    },
    {
        HG_NM: "권성동",
        HJ_NM: "權性東",
        ENG_NM: "KWEON SEONGDONG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1960-04-29",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "강원 강릉시",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "법제사법위원회",
        CMITS: "법제사법위원회",
        REELE_GBN_NM: "4선",
        UNITS: "제18대, 제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-3396~8 / 788-2469",
        E_MAIL: "ksdd22@naver.com",
        HOMEPAGE: "http://www.ksdd.net",
        STAFF: "권통일, 최영철",
        SECRETARY: "김대식, 김한규",
        SECRETARY2: "김린, 전영옥, 신윤정, 김근희, 김민식",
        MONA_CD: "GDG1847Z",
        MEM_TITLE:
            "1979.02  강릉명륜고등학교 졸업\r\n1984.02  중앙대학교 법학과 졸업\r\n1986.02  중앙대학교 대학원 (사법전공) 수료\r\n1985.11  제 27회 사법시험 합격\r\n1988.02  사법연수원 제 17기 수료\r\n1991.02  해군법무관 전역\r\n1991.03  수원지방검찰청 검사\r\n1993.09  춘천지방검찰청 강릉지청 검사\r\n1994.03  서울중앙지방검찰청 검사(특수)\r\n1996.08  법무부 인권과 검사\r\n1999.03  서울동부지방검찰청 검사 ？ 부부장검사\r\n2000.08  광주지방검찰청 장흥지청장\r\n2001.06  서울지방검찰청 부부장검사\r\n2002.08  광주지방검찰청 조사부장, 형사 제3부장검사\r\n2003.08  서울중앙지검 부부장 검사\r\n2004.08  대검찰청 범죄정보 제2담당관\r\n2005.04  인천지방검찰청 특별수사부 부장검사\r\n2006.02  광주고등검찰청 검사\r\n2006.04  의원면직 (법무법인 서정 구성원변호사)\r\n2007.04  강릉시 종합자원봉사센터 운영위원\r\n2007.06  한나라당 대통령후보 경선 국민검증위원회 실무위원\r\n2007.09  2007 선진국민 강원연대  상임대표\r\n2007.11  한나라당 클린정치위원회 법률지원단 팀장\r\n2008.12  제17대 대통령직인수인위원회 법무행정분과 상근자문위원       \r\n2008.07  대통령실 법무비서관\r\n2009.10  제18대 국회의원\r\n2010~   지식경제위원회 위원\r\n             한나라당 원내부대표 \r\n             예산결산특별위원회 위원\r\n             강원도당위원장\r\n2012.05  제19대 국회의원\r\n            새누리당 정책위 부의장\r\n            법제사법위원회 간사\r\n            예산결산특별위원회 위원\r\n            국회쇄신특별위원회 위원\r\n            평창동계올림픽 및 국제경기대회지원 특별위원회 위원\r\n2014.06  환경노동위원회 간사\r\n2015.07  새누리당 전략기획본부장\r\n",
        ASSEM_ADDR: "의원회관 820호",
    },
    {
        HG_NM: "권영세",
        HJ_NM: "權寧世",
        ENG_NM: "KWON YOUNGSE",
        BTH_GBN_NM: "양",
        BTH_DATE: "1959-02-24",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "서울 용산구",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "환경노동위원회",
        CMITS: "환경노동위원회",
        REELE_GBN_NM: "4선",
        UNITS: "제16대, 제17대, 제18대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-3103",
        E_MAIL: "yskys2020@naver.com",
        HOMEPAGE: "https://blog.naver.com/yskys2020",
        STAFF: "이정훈, 임준홍",
        SECRETARY: "민선홍, 이효진",
        SECRETARY2: "김용현, 김용종, 이수지, 김은총, 박준영",
        MONA_CD: "LG63087O",
        MEM_TITLE: "전)주중대사\r\n전)국회 정보위원장\r\n전)한나라당 최고위원,사무총장\r\n전)새누리당 사무총장,서울시당위원장 \r\n\r\n서울대학교 법학과 및 동 대학원 졸업(법학석사)\r\n미 하버드 케네디스쿨 졸업(행정학석사)",
        ASSEM_ADDR: "의원회관 450호",
    },
    {
        HG_NM: "권은희",
        HJ_NM: "權垠希",
        ENG_NM: "KWON EUNHEE",
        BTH_GBN_NM: "음",
        BTH_DATE: "1974-02-15",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의당",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "정무위원회",
        CMITS: "정무위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-1813",
        E_MAIL: "kwoneunhee0215@gmail.com",
        HOMEPAGE: "http://keh.kr",
        STAFF: "곽복률, 장철원",
        SECRETARY: "김주연",
        SECRETARY2: "남보라, 고선주, 김단아",
        MONA_CD: "YKW37422",
        MEM_TITLE:
            " 1993년 조선대 부속여고 졸업\r\n 1997년 전남대 사법학과 졸업\r\n 연세대 대학원 법학 석사 졸업\r\n \r\n 2001년 사법고시 합격(43회)\r\n 2004년 사법연수원 수료(33기)\r\n 2004년 권은희 법률사무소 개업\r\n 2005년 경찰청 경정 특채 합격\r\n 2005년 용인경찰서 수사과장\r\n 2006년 경찰청 법무과 근무(경정)\r\n 2007년 서초경찰서 수사과장, 수서경찰서 수사과장\r\n 2013년 송파경찰서 수사과장\r\n 2014년 관악경찰서 여성청소년과장\r\n\r\n (전) 국회 국민안전혁신특위 위원\r\n (전) 19대 국회의원 광주 광산(을)\r\n (전) 국회 국방위원회 위원·간사  \r\n (전) 국회 운영위원회 위원\r\n (전) 새정치민주연합 원내 법률부대표\r\n (전) 새정치민주연합 원내대표 비서실장\r\n (전) 국민의당 비상대책위원회 위원\r\n (전) 국민의당 정책위원회 수석부의장\r\n (전) 국민의당 제1정책조정위원장\r\n (전) 안전행정위원회 간사  \r\n (전) 국민의당 원내수석부대표\r\n (전) 국민의당 광주광역시당 위원장 \r\n (전) 20대 국회의원 광주 광산(을)\r\n (전) 운영위원회 간사\r\n (전) 바른미래당 광주광역시당위원장\r\n (전) 바른미래당 최고위원\r\n (전) 바른미래당 정책위의장\r\n (전) 행정안전위원회 법안심사소위원회 위원장 \r\n (전) 예산결산특별위원회 위원·간사 \r\n (전) 사법개혁특별위원회 위원·간사  \r\n (전) 행정안전위원회 간사\r\n (전) 행정안전위원회 제천화재관련평가소위원회 위원장 \r\n (전) 국민의당 창당준비위원회 부위원장 \r\n (전) 국민의당 최고위원\r\n\r\n (현) 21대 국회의원 (비례대표,3선)\r\n (현) 국민의당 원내대표 ",
        ASSEM_ADDR: "의원회관 904호",
    },
    {
        HG_NM: "권인숙",
        HJ_NM: "權仁淑",
        ENG_NM: "KWON INSOOK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1964-08-28",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "교육위원회",
        CMITS: "여성가족위원회, 교육위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-9241",
        E_MAIL: "iskwon317@naver.com",
        HOMEPAGE: "https://blog.naver.com/iskwon317",
        STAFF: "이윤상, 황윤정",
        SECRETARY: "이경민, 이택준",
        SECRETARY2: "김혜원, 전동명, 국서림, 조은재, 박지수",
        MONA_CD: "3TO11703",
        MEM_TITLE: "前 제15대 한국여성정책연구원 원장\r\n前 명지대학교 방목기초교육대학 교수\r\n前 미국 남 플로리다주립대학교 여성학과 교수\r\n前 미국 컬럼비아대학교 동아시아연구소 초청연구원\r\n前 미국 하버드대학교 한국학연구소 박사후 연구원",
        ASSEM_ADDR: "의원회관 317호",
    },
    {
        HG_NM: "권칠승",
        HJ_NM: "權七勝",
        ENG_NM: "KWON CHILSEUNG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1965-11-18",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 화성시병",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "농림축산식품해양수산위원회",
        CMITS: "농림축산식품해양수산위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-1250",
        E_MAIL: "anotherk7@gmail.com",
        HOMEPAGE: "http://blog.naver.com/k7wins",
        STAFF: "김회철, 이상헌, 정천호",
        SECRETARY: "이소영, 현다민",
        SECRETARY2: "신전학, 이우연, 김정현, 이원준, 김나경",
        MONA_CD: "C7E79345",
        MEM_TITLE: "1988년 삼성그룹 (공채28기)\r\n1997년 김대중 대통령후보 대선기획단\r\n1998년 민주당 중앙당 사무처 당직자\r\n2004년 노무현 대통령비서실 행정관\r\n2009년 국회의원 보좌관\r\n2010년 민주당 중앙당 상근부대변인 \r\n2010년 제8대 경기도의회 의원\r\n2013년 경기도의회 예산결산특별위원장\r\n2014년 제9대 경기도의회 의원\r\n2017년 더불어민주당 정책위원회 부의장\r\n2018년 더불어민주당 원내부대표\r\n2018년 더불어민주당 홍보소통위원장\r\n2020년 더불어민주당 수석사무부총장",
        ASSEM_ADDR: "의원회관 325호",
    },
    {
        HG_NM: "기동민",
        HJ_NM: "奇東旻",
        ENG_NM: "KI DONGMIN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1966-02-23",
        JOB_RES_NM: "간사",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 성북구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국방위원회",
        CMITS: "국방위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-3181",
        E_MAIL: "gidongmin@naver.com",
        HOMEPAGE: "http://blog.naver.com/gidongmin",
        STAFF: "김형식, 이지백",
        SECRETARY: "김두현, 문옥주",
        SECRETARY2: "이유정, 송현직, 윤하은, 박규태, 이주훈",
        MONA_CD: "B7R2742J",
        MEM_TITLE: "-국회 보건복지위원회 위원(현)\r\n-국회 남북관계개선특별위원회 위원(현)\r\n-더불어민주당 정책위원회 부의장(현)\r\n-더불어민주당 의원 정치행동그룹 더좋은미래\r\n 운영간사(현)\r\n\r\n-김대중 대통령 비서실 정무수석비서관실 보좌관\r\n-김근태 보건복지부장관 정책보좌관\r\n-국회 정책연구위원(2급)\r\n-박원순 서울시장후보 비서실장\r\n-서울특별시 정무수석비서관\r\n-서울특별시 정무부시장\r\n-성균관대학교 초빙교수\r\n-더불어민주당 원내대변인\r\n-국회 운영위원회 위원\r\n-문재인 후보 수행실장 \r\n\r\n-광주 인성고 졸업\r\n-성균관대학교 신문방송학과 졸업\r\n-성균관대학교 언론정보대학원 졸업(언론학 석사)\r\n-육군병장 만기제대\r\n-성균관대학교 총학생회장",
        ASSEM_ADDR: "의원회관 922호",
    },
    {
        HG_NM: "김경만",
        HJ_NM: "金京萬",
        ENG_NM: "KIM KYUNGMAN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1962-09-23",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "산업통상자원중소벤처기업위원회",
        CMITS: null,
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-9820",
        E_MAIL: "2020kkman@gmail.com",
        HOMEPAGE: "http://blog.naver.com/2020kkman",
        STAFF: "백종운, 오기철",
        SECRETARY: "이은지, 홍태식",
        SECRETARY2: "방준화, 김채영, 이병률, 이세형",
        MONA_CD: "1BX7234U",
        MEM_TITLE: "광주 살레시오 고등학교 졸업\r\n한국외국어대학교 영어과 졸업\r\n\r\n前 중소기업중앙회 경제정책본부장\r\n前 국세청 국세행정개혁위원회 소통과혁신분과 위원장",
        ASSEM_ADDR: "의원회관 611호",
    },
    {
        HG_NM: "김경협",
        HJ_NM: "金炅俠",
        ENG_NM: "KIM KYUNGHYUP",
        BTH_GBN_NM: "양",
        BTH_DATE: "1962-11-07",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 부천시갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "외교통일위원회",
        CMITS: "정보위원회, 외교통일위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-1190",
        E_MAIL: "ggh000@naver.com",
        HOMEPAGE: "http://www.kimgh.com",
        STAFF: "김민주, 봉재현",
        SECRETARY: "김동욱, 정공진",
        SECRETARY2: "이선희, 박희진, 최지나, 임미소, 이원호",
        MONA_CD: "ZKU88693",
        MEM_TITLE:
            "- 제19.20.21대 국회의원 (경기 부천시 갑)\r\n- 국회 기획재정위원회 위원 (2018.6~2020.5)\r\n- 국회 남북경협특별위원회 (간사)위원 (2018.8.~2020.5)\r\n- 더불어민주당 경기도당 위원장(2018.8.~2020.8)\r\n- 더불어민주당 수석사무부총장(2018.8.~2020.8)\r\n- 국회 외교통일위원회 (간사)위원 (2016.6.~2018.5)\r\n- 더불어민주당 제2정책조정위원장 (외교.통일.안보)\r\n- 국회 헌법개정특위 위원\r\n- 국회 국토교통위원회 위원 (2014.6. ~ 2016.5) \r\n- 국회 서민주거복지특별위원회 위원\r\n- 국회 지속가능발전 특별위원회 (간사)위원\r\n- 새정치민주연합 수석사무부총장\r\n- 새정치민주연합 을지로위원회 위원\r\n- 새정치민주연합 사회적경제정책협의회 부위원장\r\n- 새정치민주연합 세월호특별법 준비위원\r\n- 새정치민주연합 원내부대표(정책담담)\r\n- 새정치민주연합 정책위 부의장\r\n- 국회 환경노동위원회 위원(2012.5. ~ 2014.6)\r\n- 민주통합당 좋은일자리본부 위원 \r\n- 민주통합당 쌍용자동차대책특별위원회 위원 \r\n- 민주당 사람다운 생활 보장 노동.임금 TF 위원\r\n- 국회 남북관계발전 특별위원회 위원\r\n\r\n(현) 노무현재단 기획위원 \r\n\r\n(전) 노무현 대통령 청와대 사회조정비서관\r\n(전) 한국산업인력공단 상임감사\r\n(전) 부천근로장학재단 설립자 겸 이사장 \r\n(전) 부천 근로자종합복지관 관장\r\n(전) 한국노총 부천지역지부 의장 \r\n\r\n- 전남 장흥 출생 (1962년생) \r\n- 국립부산기계공업고등학교 졸업\r\n- 성균관대학교 사회학과 졸업\r\n- 고려대학교 노동대학원 경제학과 졸업\r\n- 한국기술교육대학 고용정책 박사과정 \r\n\r\n- 민주화운동(5.18 광주) 관련 2년2개월 옥살이\r\n- 2007년, 민주화운동 유공자(제5298호)로 인정",
        ASSEM_ADDR: "의원회관 813호",
    },
    {
        HG_NM: "김교흥",
        HJ_NM: "金敎興",
        ENG_NM: "KIM KYOHEUNG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1960-08-30",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "인천 서구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국토교통위원회",
        CMITS: "국토교통위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제17대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-1261 / 032-565-0806",
        E_MAIL: "kimkh4u@naver.com",
        HOMEPAGE: null,
        STAFF: "김병곤, 김정현",
        SECRETARY: "신동식, 유해용",
        SECRETARY2: "송이, 김성주, 김동현, 박정은, 배아름",
        MONA_CD: "X1K3667J",
        MEM_TITLE: "- 17, 21대 국회의원\r\n- 제30대 국회사무총장\r\n- 前 정세균 국회의장 비서실장\r\n- 前 인천광역시 정무부시장\r\n- 前 대한체육회 부회장(생활체육)\r\n- 前 중소기업연구원 원장\r\n- 前 인천대, 인하대, 가천대 초빙교수\r\n- 86년도 인천대 총학생회장\r\n- 동국대 대학원 정치학 박사과정 수료   ",
        ASSEM_ADDR: "의원회관 720호",
    },
    {
        HG_NM: "김기현",
        HJ_NM: "金起炫",
        ENG_NM: "KIM GIHYEON",
        BTH_GBN_NM: "음",
        BTH_DATE: "1959-02-21",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "울산 남구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "외교통일위원회",
        CMITS: "정보위원회, 국회운영위원회, 외교통일위원회",
        REELE_GBN_NM: "4선",
        UNITS: "제17대, 제18대, 제19대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-3874",
        E_MAIL: "together.eut@gmail.com",
        HOMEPAGE: null,
        STAFF: "김차영, 최연우",
        SECRETARY: "양성은, 이광우",
        SECRETARY2: "권영경, 이상찬, 류보라, 박유진",
        MONA_CD: "X7I4680R",
        MEM_TITLE: "- 부산동고 졸업\r\n- 서울대학교 법학과 졸업\r\n- 서울대학교 대학원 법학과 수료 \r\n- 제25회 사법시험 합격 \r\n\r\n현) 국민의힘 원내대표\r\n현) 제21대 국회의원 (울산 남구을 / 국민의힘) \r\n현) 국회운영위원회, 외교통일위원회, 정보위원회 위원\r\n전) 국민의힘 당대표 권한대행\r\n전) 울산광역시장 \r\n전) 제 17, 18, 19 대 국회의원 \r\n전) 새누리당 원내수석부대표·정책위의장 \r\n전) 대구지법·부산법원 울산지원 판사",
        ASSEM_ADDR: "의원회관 550호",
    },
    {
        HG_NM: "김남국",
        HJ_NM: "金南局",
        ENG_NM: "KIM NAMKUK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1982-10-22",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 안산시단원구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "법제사법위원회",
        CMITS: "법제사법위원회, 감사원장(최재해) 임명동의에 관한 인사청문특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2455",
        E_MAIL: "lawmaker0415@daum.net",
        HOMEPAGE: null,
        STAFF: "박지환, 양삼동",
        SECRETARY: "김선미",
        SECRETARY2: "최재영, 박승우, 윤경민, 노지수, 김정재",
        MONA_CD: "QHL3248U",
        MEM_TITLE: "[학력] \r\n- 서울대학교 대학원(박사과정) 법학 수료\r\n- 전남대학교 법학전문대학원 석사과정 졸업 \r\n- 중앙대학교 행정학과 졸업\r\n\r\n[경력] \r\n- 더불어민주당 제21대 국회의원 (안산 단원을) \r\n- 더불어민주당 전국대의원대회준비위원회 위원 (현)\r\n\r\n- 더불어민주당 을지키는민생실천위원회 법률위원(전) \r\n- 더불어민주당 을지로위원회 법률위원 (전) \r\n- 더불어민주당 법률위원회 자문위원 (전) \r\n- 더불어민주당 법률위원회 부위원장 (전) \r\n- 제19대 대통령선거 더불어민주당 후보 선거대책위원회 정책 부대변인 (전) \r\n\r\n[지역사무실] \r\n안산시 단원구 광덕대로 141 밀레니엄빌딩B동 603호\r\nT: 031-414-7555 / F:031-439-7555 ",
        ASSEM_ADDR: "의원회관 1011호",
    },
    {
        HG_NM: "김도읍",
        HJ_NM: "金度邑",
        ENG_NM: "KIM DOEUP",
        BTH_GBN_NM: "음",
        BTH_DATE: "1964-07-06",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "부산 북구강서구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "행정안전위원회",
        CMITS: "행정안전위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-1740",
        E_MAIL: "ldek3525@naver.com",
        HOMEPAGE: "http://www.김도읍.com",
        STAFF: "이종환, 최성준",
        SECRETARY: "김태명, 이재경",
        SECRETARY2: "최승한, 황인봉, 위서율, 김지연, 차유진",
        MONA_CD: "LH97552Q",
        MEM_TITLE:
            "경력\r\n 2016.12~2018.06  국회 산업통상자원위원회 위원 \r\n 2016.06~2016.12  국회 외교통일위원회 위원\r\n 2016.06~2016.12  국회 운영위원회 간사 \r\n 2016.05~2016.12  새누리당 원내수석부대표\r\n 2016.05~2020.05  제20대 국회의원(부산 북구강서구 을)\r\n\r\n 2012.07~2016.5  국회 법제사법위원회 위원 \r\n 2012.07~2016.5  국회 예산결산특별위원회 위원(4년 연속) \r\n 2012.05  제19대 국회의원 (부산 북구·강서구 을) \r\n\r\n\r\n 2016.02 새누리당 클린공천지원단 부단장\r\n 2015.12 새누리당 공천제도특별위원회 위원\r\n 2015.12 중앙윤리위원회 위원\r\n 2015.08 이기택 대법관후보자 인사청문특별위원회 위원\r\n 2012.07 국회 운영위원회 위원(원내부대표)\r\n 2015.02 이완구 국무총리후보자 인사청문특별위원회 위원\r\n 2015.01 새누리당 재해대책위원회 위원 \r\n 2015.01 국회 서민주거복지 특별위원회 위원\r\n 2014.12 특별감찰관 후보자추천위원회 위원\r\n 2014.11 국회예산결산특별위원회 예산안조정소위원회 위원\r\n 2014.10 아시아송페스티벌 조직위원장\r\n 2014.07 새누리당 제1정책조정위원회 간사\r\n 2014.04 새누리당 세월호사고 대책특별위원회 위원\r\n 2014.03 새누리당 부산시당 6.4 지방선거 공직후보자 추천관리위원회 위원\r\n 2014.02 새누리당 개인정보보호대책 특별위원회 위원\r\n 2014.02 조희대 대법관후보자 인사청문특별위원회 위원\r\n 2014.07 새누리당 재해대책위원회 위원\r\n 2013.07 국가정보원 댓글 의혹 사건 등의 진상규명을 위한 국정조사 특별위원회 위원 \r\n 2013.04 새누리당 동아시아 평화와 번영을 위한 역사바로세우기 특별위원회 위원 \r\n 2013.04 국회 방송공정성 특별위원회 위원 \r\n 2013.04 박한철 헌법재판소장후보자 인사청문특별위원회 위원 \r\n 2013.03 새누리당 4.24 재보궐선거 공직후보자 추천위원회 위원 \r\n 2013.01 이동흡 헌법재판소장후보자 인사청문특별위원회 위원 \r\n 2012.08 새누리당 아동·여성성범죄 근절특별위원회 위원\r\n 2012.08 국회 학교폭력대책 특별위원회 위원 \r\n 2012.07 새누리당 법률담당 원내부대표 \r\n 2012.06 대법관 인사청문 특별위원회 위원 \r\n 2012.06 새누리당 아동 학대방지 및 권리보장 특별위원회 위원 \r\n 2011.08 부산광역시북구 다문화가족지원센터 자문변호사 \r\n 2011.02 ~ 2012.05 변호사김도읍법률사무소 변호사 \r\n 2010.02 ~ 2011.02 부산지방검찰청 외사부 부장검사 \r\n 2009.08 ~ 2010.02 부산지방검찰청 공판부 부장검사 \r\n 1993.10 제35회 사법시험 합격 \r\n\r\n학력  \r\n 1984.03 ~ 1989.02 동아대학교 법학과\r\n 1980.03 ~ 1983.02 부산동고등학교\r\n\r\n수상\r\n 2017.02 국회도서관 이용 최우수 국회의원상\r\n 2016.11 선플재단(전국 청소년 선플 SNS기자단) 선정 국회의원 아름다운 말 선플상\r\n 2015.10 새누리당 국정감사 우수의원\r\n 2015.01 부산시민단체(부산시민단체협의회·부산경제살리기시민연대) 선정 지역공헌상\r\n 2014.12 입법 및 정책개발 정당추천 우수 국회의원\r\n 2014.11 새누리당 국정감사 우수의원\r\n 2013.11 새누리당 국정감사 우수의원\r\n 2012.12 입법 및 정책개발 정당추천 우수 국회의원\r\n 2012.10 새누리당 국정감사 베스트팀\r\n 2012.10 자랑스러운 동아인상",
        ASSEM_ADDR: "의원회관 452호",
    },
    {
        HG_NM: "김두관",
        HJ_NM: "金斗官",
        ENG_NM: "KIM DUKWAN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1959-04-10",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경남 양산시을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "기획재정위원회",
        CMITS: "기획재정위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2566",
        E_MAIL: "okdkkorea@gmail.com",
        HOMEPAGE: "http://www.okdk.kr",
        STAFF: "임근재, 홍준일",
        SECRETARY: "박찬규, 유승준",
        SECRETARY2: "김경원, 구수민, 신진영, 김다희",
        MONA_CD: "CI15627C",
        MEM_TITLE: "*  제 20대 국회의원\r\n*  국회 기획재정위원회위원 \r\n*  국회 예산결산특별위원회위원\r\n*  국회 남북관계개선특별위원회 위원\r\n*  경기 김포시갑 지역위원장(더불어민주당)\r\n*  (전) 새정치민주연합 중앙선대위 공동위원장\r\n*  (전) 제 34대 경상남도 도지사\r\n*  (전) 열린우리당 최고위원\r\n*  (전) 노무현 대통령비서실 정무특별보좌관\r\n*  (전) 제 5대 행정자치부 장관\r\n*  (전) 제38대 ~ 39대 경상남도 남해군수\r\n*  (전) 남해군 고현면 이어리 이장",
        ASSEM_ADDR: "의원회관 919호",
    },
    {
        HG_NM: "김미애",
        HJ_NM: "金美愛",
        ENG_NM: "KIM MIAE",
        BTH_GBN_NM: "음",
        BTH_DATE: "1969-10-06",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "부산 해운대구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "보건복지위원회",
        CMITS: "보건복지위원회, 여성가족위원회, 윤리특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-5680",
        E_MAIL: "015miae@naver.com",
        HOMEPAGE: "http://blog.naver.com/015law",
        STAFF: "김태효, 안중우",
        SECRETARY: "신영훈, 한정훈",
        SECRETARY2: "김경민, 조대웅, 강민경, 이주영, 이명순",
        MONA_CD: "3BC6890E",
        MEM_TITLE: "동아대학교 법학부 졸업\r\n사법연수원 34기\r\n\r\n현) 국민의힘 약자와의동행위원회 위원장\r\n전) 국민의힘 비상대책위원회 위원\r\n전) 국민의힘 저출생특별위원회 위원장\r\n\r\n전)부산변호사회 수석부회장\r\n전)전국입양가족연대 고문변호사\r\n\r\n\r\n",
        ASSEM_ADDR: "의원회관 1017호",
    },
    {
        HG_NM: "김민기",
        HJ_NM: "金敏基",
        ENG_NM: "KIM MINKI",
        BTH_GBN_NM: "음",
        BTH_DATE: "1966-04-28",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 용인시을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국방위원회",
        CMITS: "국방위원회, 정보위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-1930",
        E_MAIL: "kimminki@assembly.go.kr",
        HOMEPAGE: "http://blog.naver.com/kminki84",
        STAFF: "김완수, 박충훈",
        SECRETARY: "황병천",
        SECRETARY2: "서명희, 성혜련, 이봉원, 신민욱, 임용현",
        MONA_CD: "NTT8182Q",
        MEM_TITLE: "* 용인 기흥 출생\r\n* 기흥초등학교(29회), 신갈중학교(8회), 유신고등학교(9회)\r\n* 고려대학교 농업경제학과 84학번\r\n* 육군 제201특공여단 중위 전역(ROTC26기)\r\n\r\n* 제19~21대 국회의원(경기 용인시을)\r\n* 현) 국방위원회 위원\r\n* 현) 정보위원회 위원\r\n* 전) 국회 정보위원장\r\n* 전) 국회 행정안전위원회 위원\r\n* 전) 더불어민주당 제1정책조정위원장\r\n* 전) 제5대 용인시의회 민주당 대표의원\r\n* 전) 국회 재난안전대책특별위원회 위원\r\n* 전) 더불어민주당 수석사무부총장\r\n",
        ASSEM_ADDR: "의원회관 945호",
    },
    {
        HG_NM: "김민석",
        HJ_NM: "金民錫",
        ENG_NM: "KIM MINSEOK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1964-05-29",
        JOB_RES_NM: "위원장",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 영등포구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "보건복지위원회",
        CMITS: "보건복지위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제15대, 제16대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2390",
        E_MAIL: "newkms2030@gmail.com",
        HOMEPAGE: "http://kms2030.kr",
        STAFF: "변정화, 유광상",
        SECRETARY: "이은혜, 장명희",
        SECRETARY2: "백재승, 이진주, 김신명, 김미혜, 정택유",
        MONA_CD: "MLH1404S",
        MEM_TITLE: "○ 학력\r\n\r\n- 서울대학교 사회학과 졸업\r\n- 하버드대학교 행정학부 및 케네디스쿨 (공공정책대학원) 행정학 석사\r\n- 칭화대학교 법학석사\r\n- 뉴저지 러트거즈 대학교 뉴어크-로스쿨 법학박사\r\n\r\n○ 약력\r\n\r\n현) 제21대 국회 보건복지위원장\r\n현) 민주당 미래전환 K-뉴딜위원회 사회뉴딜분과 위원장\r\n현) 더불어민주당 포용국가비전위원장\r\n전) 더불어민주당 영등포3대국정과제특별위원장\r\n전) 민주연구원 원장\r\n전) 제19대 문재인 대통령 후보 종합상황본부장\r\n전) 민주당(현 더불어민주당) 최고위원\r\n전) 민주당 서울시장 후보(2002)\r\n전) 김대중 대통령 총재 비서실장\r\n전) 15,16대 국회의원(영등포구 을)\r\n전) 서울대학교 총학생회장",
        ASSEM_ADDR: "의원회관 506호",
    },
    {
        HG_NM: "김민철",
        HJ_NM: "金敏徹",
        ENG_NM: "KIM MINCHUL",
        BTH_GBN_NM: "양",
        BTH_DATE: "1967-11-18",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 의정부시을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "행정안전위원회",
        CMITS: "국회운영위원회, 행정안전위원회, 중앙선거관리위원회 위원(문상부) 선출에 관한 인사청문특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-5031",
        E_MAIL: "mckim6812@naver.com",
        HOMEPAGE: "https://blog.naver.com/kmc8952",
        STAFF: "김종갑, 유상선",
        SECRETARY: "임주헌, 진동규",
        SECRETARY2: "신하은, 신준섭, 박선영, 고유진, 박하영",
        MONA_CD: "6399076T",
        MEM_TITLE: "2021~ 더불어민주당 원내부대표\r\n2020~ 더불어민주당 경기도당 부위원장\r\n2020~ 제21대 국회의원(국회행정안전위원회 위원, 국회운영위원회 위원)\r\n2019~ 대통령소속 자치분권위원회 정책자문위원\r\n2018 더불어민주당 한반도경제통일위원회 부위원장, \r\n2017 제19대 문재인대통령후보 정무특보, \r\n2016~ 더불어민주당 의정부시(을) 지역위원회 위원장\r\n2014 새정치민주연합 당대표 정무특보\r\n2013 민주통합당 당대표 비서실 부실장\r\n2010~ (재)의정부예술의전당 이사\r\n2004~2013 국회의원 보좌관\r\n2003~2004 노무현정부 청와대 비서실 행정관\r\n2001 의정부시 청소년 지도협의회 초대 사무국장",
        ASSEM_ADDR: "의원회관 519호",
    },
    {
        HG_NM: "김병기",
        HJ_NM: "金炳基",
        ENG_NM: "KIM BYUNGKEE",
        BTH_GBN_NM: "음",
        BTH_DATE: "1961-07-10",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 동작구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국방위원회",
        CMITS: "국방위원회, 정보위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-1322",
        E_MAIL: "the.kim.weapon@gmail.com",
        HOMEPAGE: "http://blog.naver.com/kim-weapon",
        STAFF: "김민홍, 김정겸",
        SECRETARY: "김상욱, 이용명",
        SECRETARY2: "배영규, 박푸름, 이주현, 김문경, 김경희",
        MONA_CD: "8Q88373R",
        MEM_TITLE: "중동고등학교 졸업\r\n경희대학교 국민윤리학과 졸업\r\n\r\n국가정보원 근무(전)\r\n\r\n제20대, 제21대 국회의원(동작갑) \r\n제21대 국회 정보위원회 간사(현)\r\n제21대 국회 국방위원회 위원(현)\r\n제20대 국회 국방위원회 위원(전)\r\n제20대 국회 정보위원회 간사, 위원(전)\r\n더불어민주당 사드대책특위 위원(전)\r\n더불어민주당 당대표 특보단장(전)\r\n국정자문위원회 외교안보분과 위원(전)\r\n더불어민주당 적폐청산위원회 간사(전)\r\n더불어민주당 정책위원회 상임부의장(전)\r\n더불어민주당 일본경제침략특위 외교안보분과 위원(전)",
        ASSEM_ADDR: "의원회관 721호",
    },
    {
        HG_NM: "김병욱",
        HJ_NM: "金炳旭",
        ENG_NM: "KIM BYUNGWOOK",
        BTH_GBN_NM: "양",
        BTH_DATE: "1965-04-15",
        JOB_RES_NM: "간사",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 성남시분당구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "정무위원회",
        CMITS: "정무위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-3670",
        E_MAIL: "777byung@naver.com",
        HOMEPAGE: "http://blog.naver.com/777byung",
        STAFF: "왕홍곤, 최현",
        SECRETARY: "권오현, 신하영",
        SECRETARY2: "조제윤, 조유천, 윤혜지, 오희숙, 최정환",
        MONA_CD: "GFF1986K",
        MEM_TITLE:
            "[더불어민주당 김병욱 국회의원(분당을)]\r\n\r\n부산 배정고 졸업\r\n한양대 법학과 (4년 장학생조건으로 입학) 졸업\r\n고려대 MBA 졸업\r\n국민대 경영학 박사 \r\n\r\n(현)  제21대 국회의원 (경기 성남시분당구을/더불어민주당)\r\n(현)  제21대 국회 전반기 정무위원회 위원 간사\r\n(현)  더불어민주당 자본시장활성화 위원장\r\n(현)  더불어민주당 정책위원회 상임부의장\r\n(현)  더불어민주당 기후변화대응 및 에너지전환산업육성특별위원회 위원\r\n(현)  더불어민주당 혁신성장추진위원회 위원\r\n(현)  더불어민주당 을지로위원회 책임위원\r\n\r\n(전)  제20대 국회의원 (경기 성남시분당구을/더불어민주당)\r\n(전)  제20대 국회 후반기 정무위원회 위원 \r\n(전)  제20대 국회 후반기 국회운영위원회 위원\r\n(전)  더불어민주당 원내부대표 \r\n(전)  제20대 국회 전반기 교육문화체육관광위원회 위원\r\n(전)  제20대 국회 전반기 예산결산특별위원회 위원\r\n(전)  제20대 국회 미세먼지 대책 특별위원회 위원\r\n(전)  제19대 대선 문재인 후보 선거대책위원회 대변인\r\n(전)  제19대 대선 문재인 후보 경기도당 선거대책본부 공동본부장\r\n\r\n(전)  가천대학교 경영학과 겸임교수\r\n(전)  성남정책포럼 공동대표\r\n(전)  경제정의실천시민연합 상임집행위원\r\n(전)  전국증권유관기관노조협의회 의장\r\n(전)  분당구탁구연합회 회장\r\n(전)  국민대학교 겸임교수\r\n(전)  한국증권업협회(현 금융투자협회) 코스닥공시과장",
        ASSEM_ADDR: "의원회관 510호",
    },
    {
        HG_NM: "김병욱",
        HJ_NM: "金炳旭",
        ENG_NM: "KIM BYONGWOOK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1977-04-30",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "경북 포항시남구울릉군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "교육위원회",
        CMITS: "교육위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6430",
        E_MAIL: "kimbyongwook0415@gmail.com",
        HOMEPAGE: "https://blog.naver.com/ilungkim",
        STAFF: "남호균, 백관백",
        SECRETARY: "손희권, 이동찬",
        SECRETARY2: "오세웅, 박민지, 장현미, 윤영하",
        MONA_CD: "KB04377U",
        MEM_TITLE: "김병욱 국회의원 (포항시남구울릉군)\r\n\r\n포항고 졸업\r\n경북대 정치외교학 학사\r\n연세대 행정대학원 지방자치도시행정 석사\r\n\r\n(현) 제21대 국회의원\r\n(현) 제21대 국회 전반기 교육위원회 위원\r\n(현) 국회철강포럼 공동대표\r\n(현) 국민미래포럼 책임연구의원\r\n\r\n(전) 새누리당 대통령선거 중앙선거대책위원회 정세분석팀장\r\n(전) 국민의힘 정부정책감시 특별위원회 위원\r\n(전) 국민의힘 청년의힘 공동대표\r\n(전) 국민의힘 청년당 창당 추진위원회 공동위원장\r\n",
        ASSEM_ADDR: "의원회관 320호",
    },
    {
        HG_NM: "김병주",
        HJ_NM: "金柄周",
        ENG_NM: "KIM BYUNGJOO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1962-02-07",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "국방위원회",
        CMITS: "국방위원회, 국회운영위원회, 예산결산특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-4177",
        E_MAIL: "kimbyungjoo62@gmail.com",
        HOMEPAGE: "https://bit.ly/3jeADHA",
        STAFF: "곽병호, 김명기",
        SECRETARY: "김영환, 배성환",
        SECRETARY2: "황동현, 이주현, 이송은, 한지혁",
        MONA_CD: "GF286398",
        MEM_TITLE: "[학력]\r\n경기대학교 외교안보학 박사\r\n전남대학교 경영학 석사\r\n육군사관학교 40기 졸업\r\n강릉고등학교 졸업\r\n\r\n[경력]\r\n제21대 국회의원 국방위원회 위원\r\n현)더불어민주당 대변인(국방,안보)\r\n현)더불어민주당 원내부대표\r\n전)더불어민주당 안보대변인\r\n전)더불어민주당 정책위원회 상임부의장\r\n더불어민주당 K-뉴딜위원회 디지털 국방과제 책임의원\r\n전)더불어민주당 정책위원회부의장\r\n전)한미연합군사령부 부사령관\r\n전)육군 제3군단 군단장\r\n전)육군 미사일사령부 사령관\r\n전)육군 제30기계화보병사단 사단장\r\n전)육군 제2포병여단 여단장\r\n\r\n[수상내역]\r\n보국훈장 통일장\r\n미국 수훈장(Legion of Merit)\r\n대한불교조계종 불자대상\r\n보국훈장 천수장\r\n대통령 표창\r\n미국 근무공로훈장 (Meritorious Service Medal)",
        ASSEM_ADDR: "의원회관 447호",
    },
    {
        HG_NM: "김상훈",
        HJ_NM: "金相勳",
        ENG_NM: "KIM SANGHOON",
        BTH_GBN_NM: "음",
        BTH_DATE: "1963-01-25",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "대구 서구",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국토교통위원회",
        CMITS: "국토교통위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2310",
        E_MAIL: "kshdg11@gmail.com",
        HOMEPAGE: "http://kimsh.or.kr",
        STAFF: "채희춘, 홍지웅",
        SECRETARY: "안치욱, 오효택",
        SECRETARY2: "서민정, 신지홍, 김민영, 김서진, 노하은",
        MONA_CD: "1Y73132H",
        MEM_TITLE: "대구대건고 졸\r\n영남대학교 법학과 졸\r\n미국 오리건대학교 대학원 행정학 졸\r\n\r\n제 33회 행정고시\r\n대구시 일본파견주재관\r\n대구시 경제통상국 국장\r\n국회 한·중정치경제포럼 연구책임의원\r\n국회 산업통상자원위원회 위원\r\n새누리당 원내부대표\r\n국회 정부 및 공공기관 등의 해외자원개발 진상규명을 위한 국정조사특별위원회 위원\r\n국회 정치개혁특별위원회 위원\r\n새누리당 정책위원회 수석부의장\r\n국회 보건복지위원회 간사\r\n가습기살균제 사고 진상규명과 피해구제 및 재발방지를 위한 국정조사특별위원회 간사\r\n자유한국당 대구시당 위원장\r\n자유한국당 지방자치발전특별위원회 부위원장\r\n국회 국토교통위원회 위원",
        ASSEM_ADDR: "의원회관 944호",
    },
    {
        HG_NM: "김상희",
        HJ_NM: "金相姬",
        ENG_NM: "KIM SANGHEE",
        BTH_GBN_NM: "음",
        BTH_DATE: "1954-05-18",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 부천시병",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "과학기술정보방송통신위원회",
        CMITS: "과학기술정보방송통신위원회",
        REELE_GBN_NM: "4선",
        UNITS: "제18대, 제19대, 제20대, 제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-4173",
        E_MAIL: "shk@assembly.go.kr",
        HOMEPAGE: "http://blog.naver.com/shk407",
        STAFF: "유재은, 임채원",
        SECRETARY: "문영주, 박환희",
        SECRETARY2: "이범섭, 양지현, 김소연, 박수정, 김현량",
        MONA_CD: "UGH6481E",
        MEM_TITLE: "◇ 학력 \r\n\r\n-1972. 2 공주사대부속고등학교 졸업 \r\n-1976. 2 이화여자대학교 제약학과 졸업 \r\n\r\n◇ 경력 \r\n\r\n-한국여성민우회 상임대표 \r\n-여성환경연대 공동대표 \r\n-한국방송공사(KBS) 이사 \r\n-대통령자문 지속가능발전위원회 위원장 (장관급)\r\n-통합민주당 최고위원 \r\n-민주당 전국여성위원장 \r\n-민주당 부천소사 지역위원장 \r\n-민주당 원내부대표\r\n-국회 환경노동위원회, 교육과학기술위원회, 교육문화체육관광위원회, 국토교통위원회, 보건복지위원회 위원 \r\n-국회 여성가족위원회 간사\r\n-국회 예산결산특별위원회, 서민주거복지특별위원회 위원 \r\n-국회 국민건강복지포럼 공동대표 \r\n-국회 여성가족위원회 위원장 \r\n-국회 성평등정책포럼 대표\r\n-국회 민생경제특별위원회 위원장\r\n-국회 인구정책과 생활정치를 위한 의원모임 대표의원\r\n-더불어민주당 코로나19대책특별위원회 위원장\r\n-더불어민주당 여성정치참여확대위원회 위원장\r\n-문재인대통령 직속 저출산고령사회위원회 초대 부위원장\r\n\r\n◇ 현직 \r\n\r\n-제21대 국회 전반기 부의장\r\n-제21대 국회의원(4선, 경기 부천병)\r\n-제21대 국회 과학기술정보방송통신위원회 위원",
        ASSEM_ADDR: "의원회관 808호",
    },
    {
        HG_NM: "김석기",
        HJ_NM: "金碩基",
        ENG_NM: "KIM SEOKKI",
        BTH_GBN_NM: "음",
        BTH_DATE: "1954-08-06",
        JOB_RES_NM: "간사",
        POLY_NM: "국민의힘",
        ORIG_NM: "경북 경주시",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "외교통일위원회",
        CMITS: "외교통일위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-4170",
        E_MAIL: "7882576kj@hanmail.net",
        HOMEPAGE: "http://blog.naver.com/podoriksk",
        STAFF: "권형석, 오남택",
        SECRETARY: "김덕표, 부유민",
        SECRETARY2: "최영목, 박치웅, 박선정, 조익성, 한규식",
        MONA_CD: "ZYP7962W",
        MEM_TITLE: "◆학력 \r\n·계림초등학교 졸업 \r\n·경주중학교 졸업 \r\n·대륜고등학교 졸업 \r\n·영남대학교 행정학과 졸업 \r\n·동국대학교 행정대학원 석사 졸업\r\n·용인대학교 정치학 명예박사\r\n\r\n◆경력\r\n·국민의힘 조직부총장(현)\r\n·제21대 국회 외교통일위원회 간사(현)\r\n·국민의힘 재외동포위원장(현)\r\n·한일의원연맹 간사장(현)\r\n·제20·21대 국회의원(현)\r\n·제20대 국회 예산결산특별위원회 위원(전)\r\n·제20대 국회 국토교통위원회 위원(전)\r\n·한일의원연맹 상임간사(전)\r\n·자유한국당 비상대책위원회 전략기획부총장(전)\r\n·자유한국당 경북도당 위원장(전)\r\n·자유한국당 정책위원회 부의장(전)\r\n·자유한국당 국가안보특별위원회 부위원장(전)\r\n·자유한국당 경북도당 윤리위원장(전)\r\n·자유한국당 중앙연수원장(전)\r\n·자유한국당 경북도당 수석부위원장(전)\r\n·한국공항공사 사장(전) \r\n·주 오사카 총영사관 총영사(전) \r\n·서울지방경찰청 청장(전) \r\n·경북,대구지방경찰청 청장(전)",
        ASSEM_ADDR: "의원회관 1010호",
    },
    {
        HG_NM: "김선교",
        HJ_NM: "金善敎",
        ENG_NM: "KIM SUNGYO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1960-09-18",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "경기 여주시양평군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "농림축산식품해양수산위원회",
        CMITS: "농림축산식품해양수산위원회, 예산결산특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-4195",
        E_MAIL: "kimsg5358@naver.com",
        HOMEPAGE: null,
        STAFF: "추대동, 홍순기",
        SECRETARY: "김명원, 박하나",
        SECRETARY2: "손현덕, 박인선, 경은아, 박대한, 이선규",
        MONA_CD: "JNL7001A",
        MEM_TITLE: "제21대 국회의원(경기 여주시양평군/국민의힘)\r\n제21대 국회 전반기 농림축산식품해양수산위원회 위원\r\n\r\n전)경기도 양평군수(3선)\r\n전)전국청년시장군수구청장협의회 회장\r\n전)경기도동부권시장군수협의회 회장\r\n",
        ASSEM_ADDR: "의원회관 934호",
    },
    {
        HG_NM: "김성원",
        HJ_NM: "金成願",
        ENG_NM: "KIM SUNGWON",
        BTH_GBN_NM: "음",
        BTH_DATE: "1973-10-15",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "경기 동두천시연천군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "환경노동위원회",
        CMITS: "환경노동위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6566",
        E_MAIL: "kimsw910@naver.com",
        HOMEPAGE: "https://blog.naver.com/v0413ksw",
        STAFF: "양우식, 정성전",
        SECRETARY: "김준표, 황주룡",
        SECRETARY2: "조광현, 김은미, 최대호, 현지연, 권영기, 이희운",
        MONA_CD: "9D939735",
        MEM_TITLE: "학력\r\n고려대학교 대학원 공학박사\r\n\r\n경력\r\n제21대 국회의원(경기 동두천시연천군/국민의힘)\r\n제20대 국회의원(경기 동두천시연천군/자유한국당)\r\n\r\n국회 환경노동위원회 위원(현)\r\n국회 예산결산특별위원회 간사(현) \r\n국회 운영위원회 간사\r\n국회 윤리위원회 간사\r\n국회 정무위원회 위원\r\n국회 여성가족위원회 위원\r\n국회 남북경협특별위원회 위원\r\n국회 남북관계개선특별위원회 위원\r\n국회 가습기살균제 사고 진상규명과 피해규제 및 재발방지 대책마련을 위한 국정조사특별위원회 위원\r\n\r\n국민의힘 경기도당위원장(현)\r\n국민의힘 원내수석부대표\r\n국민의힘 국민통합위원회 부위원장\r\n미래통합당 대변인\r\n미래통합당 통일위원회 위원장\r\n미래통합당 경기도당 수석 부위원장\r\n자유한국당 경기도당 조직본부 북부권 본부장\r\n자유한국당 신정치혁신특별위원회 위원\r\n자유한국당 소상공인살리기경제특별위원회 위원\r\n자유한국당 2020 경제대전환위원회 위원\r\n자유한국당 디지털정당위원회 부위원장\r\n자유한국당 조직부총장\r\n자유한국당 원내대변인\r\n자유한국당 청년소통특별위원회 위원장\r\n자유한국당 조직강화특별위원회 위원\r\n자유한국당 경기도당 윤리위원회 위원장\r\n새누리당 원내부대표\r\n고려대학교 연구교수",
        ASSEM_ADDR: "의원회관 910호",
    },
    {
        HG_NM: "김성주",
        HJ_NM: "金成柱",
        ENG_NM: "KIM SUNGJOO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1964-04-10",
        JOB_RES_NM: "간사",
        POLY_NM: "더불어민주당",
        ORIG_NM: "전북 전주시병",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "보건복지위원회",
        CMITS: "보건복지위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제19대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-7380~2",
        E_MAIL: "ksjwithjj@naver.com",
        HOMEPAGE: "http://blog.naver.com/ksjwithjj",
        STAFF: "김민식, 김종우",
        SECRETARY: "김은애, 임양택",
        SECRETARY2: "박승하, 박인수, 송도희, 노주엽, 박순후",
        MONA_CD: "2UD1340H",
        MEM_TITLE: "- 제21대 국회의원(현)\r\n- 국회 보건복지위원회 간사(현)\r\n- 더불어민주당 코로나19국난극복위 방역본부장(현)\r\n- 더불어민주당 정책조정위원회 제6정조위원장 (현)\r\n- 더불어민주당 전북도당위원장(현)\r\n\r\n- 더불어민주당 코로나19국난극복위원회 대변인(전)\r\n- 제16대 국민연금공단 이사장(전)\r\n- 국정기획자문위원회 전문위원(전)\r\n- 민주연구원 부원장(전)\r\n- 더불어민주당 총선공약단 부단장(전)\r\n- 더불어민주당 정책위원회 수석부의장(전) \r\n- 국회 공적연금강화와 노후빈곤 해소를 위한 특별위원회 간사 (전)\r\n- 제19대 국회 후반기 보건복지위원회 간사(전)\r\n- 제19대 국회 운영위원회 위원/원내부대표(전)\r\n- 제19대 국회의원(더불어민주당/전북 전주시 덕진구)\r\n\r\n",
        ASSEM_ADDR: "의원회관 637호",
    },
    {
        HG_NM: "김성환",
        HJ_NM: "金星煥",
        ENG_NM: "KIM SUNGWHAN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1965-10-15",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 노원구병",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "산업통상자원중소벤처기업위원회",
        CMITS: "국회운영위원회, 산업통상자원중소벤처기업위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6271",
        E_MAIL: "kimnowongu@gmail.com",
        HOMEPAGE: "https://blog.naver.com/human-nowon",
        STAFF: "이규철, 이진우",
        SECRETARY: "김용정, 서학선",
        SECRETARY2: "정재삼, 주영광, 김지선, 공경남, 방정환",
        MONA_CD: "XSP20229",
        MEM_TITLE: "1995.07 ~ 1998.07  노원구의원\r\n1998.07 ~ 2002.06  서울시의원\r\n2003.04 ~ 2006.08  노무현대통령 청와대 정책실 행정관\r\n2006.08 ~ 2007.09  노무현대통령 청와대 정책조정비서관\r\n2008.09 ~ 2010.02  한국미래발전연구원 기획실장\r\n2010.07 ~ 2014.06  민선5기 노원구청장\r\n2014.07 ~ 2018.02  민선6기 노원구청장\r\n2018.06 ~ 2020.05  20대 국회의원\r\n2020.05 ~             21대 국회의원",
        ASSEM_ADDR: "의원회관 614호",
    },
    {
        HG_NM: "김수흥",
        HJ_NM: "金洙興",
        ENG_NM: "KIM SOOHEUNG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1961-04-29",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "전북 익산시갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "기획재정위원회",
        CMITS: "기획재정위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-6788-6221",
        E_MAIL: "iksan832@naver.com",
        HOMEPAGE: null,
        STAFF: "성현민, 정완창",
        SECRETARY: "송병욱",
        SECRETARY2: "소흥수, 박경록, 주현준, 최재현, 박미루",
        MONA_CD: "L7T64271",
        MEM_TITLE: "[학력]\r\n이리고등학교 졸업\r\n한국외국어대학교 영어과 학사\r\n미국 오리건대학교 정책학 석사\r\n성균관대학교 국정관리대학원 행정학 박사\r\n\r\n[경력]\r\n제10회 입법고시 합격\r\n국회 농림해양수산위 입법조사관 (사무관)\r\n국회 의사국 입법조사관 (서기관)\r\n국회 농림위, 행자위, 문방위 입법심의관 (부이사관)\r\n주미한국대사관 공사참사관\r\n국회 국제국장, G20 국회의장회의 준비단장, 예결특위 전문위원 (이사관)\r\n예산정책처 예산분석실장 (관리관)\r\n국회 국토교통위, 예결특위 수석전문위원 (차관보급)\r\n국회 사무차장 (차관급)\r\n제21대 국회의원(기획재정위원회)\r\n\r\n[상훈]\r\n국회사무총장표창\r\n국회의장표창\r\n대통령표창\r\n홍조근정훈장\r\n\r\n",
        ASSEM_ADDR: "의원회관 832호",
    },
    {
        HG_NM: "김승남",
        HJ_NM: "金承南",
        ENG_NM: "KIM SEUNGNAM",
        BTH_GBN_NM: "양",
        BTH_DATE: "1965-10-06",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "전남 고흥군보성군장흥군강진군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "농림축산식품해양수산위원회",
        CMITS: "농림축산식품해양수산위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제19대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-1091~2",
        E_MAIL: "snk651006@gmail.com",
        HOMEPAGE: null,
        STAFF: "김연규, 신선우",
        SECRETARY: "김영주, 오재현",
        SECRETARY2: "신희표, 권솔, 김근민, 서난영, 강주희",
        MONA_CD: "P2N4585G",
        MEM_TITLE: "[학력]\r\n전남고등학교\r\n전남대학교 국문학과\r\n전남대학교 행정대학원 행정학 석사\r\n\r\n[경력]\r\n현) 더불어민주당 전남도당위원장\r\n현) 국회 농림축산식품해양수산위원\r\n\r\n19대 국회의원(전남 고흥군보성군)\r\n새정치민주연합 원내부대표\r\n민주당 수석사무부총장\r\n광주테크노파크기업지원단장\r\n민주당 부대변인\r\n전남대 총학생회장",
        ASSEM_ADDR: "의원회관 739호",
    },
    {
        HG_NM: "김승수",
        HJ_NM: "金承洙",
        ENG_NM: "KIM SEUNGSU",
        BTH_GBN_NM: "음",
        BTH_DATE: "1965-07-05",
        JOB_RES_NM: "간사",
        POLY_NM: "국민의힘",
        ORIG_NM: "대구 북구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "문화체육관광위원회",
        CMITS: "문화체육관광위원회, 예산결산특별위원회, 언론·미디어 제도개선 특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-9518",
        E_MAIL: "kiminnotank@naver.com",
        HOMEPAGE: "https://blog.naver.com/kiminnotank",
        STAFF: "우기송",
        SECRETARY: "김준호, 신규하",
        SECRETARY2: "권순민, 김덕화, 신우현, 손다영, 김지윤",
        MONA_CD: "5K93695T",
        MEM_TITLE: "[학력]\r\n영신고등학교 졸업\r\n영남대학교 행정학과 학사\r\n美 North Carolina State University (행정학 석사/2002 가을학기~2004 봄학기)\r\n\r\n[경력]\r\n2020.05 ~ 국민의힘 원내부대표 (현)\r\n2020.05 ~ 제 21대 국회의원 (대구 북구을/국민의힘) (현)\r\n2018.08 ~ 2019.12 자치분권위원회 기획단장\r\n2015.11 ~ 2018.08 대구광역시 행정부시장\r\n2014.11 ~ 2015.11 행정자치부 창조정부기획관\r\n2013.04 ~ 2014.10 경상북도 기획조정실장\r\n2011.02 ~ 2013.03 청와대 기획비서관실 선임행정관\r\n2008.07 ~ 2010.12 주영한국대사관 행안관(참사관)\r\n2007.08 ~ 2008.02 행정자치부 자치행정팀장(3급)\r\n2006.02 ~ 2007.08 행정자치부 지방혁신관리팀 팀장\r\n1988 제 32회 행정고시 합격 (만 23세)",
        ASSEM_ADDR: "의원회관 711호",
    },
    {
        HG_NM: "김승원",
        HJ_NM: "金勝源",
        ENG_NM: "KIM SEUNGWON",
        BTH_GBN_NM: "음",
        BTH_DATE: "1969-07-08",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 수원시갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "문화체육관광위원회",
        CMITS: "국회운영위원회, 문화체육관광위원회, 예산결산특별위원회, 언론·미디어 제도개선 특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-5285",
        E_MAIL: "swkimsuwon@gmail.com",
        HOMEPAGE: "http://blog.naver.com/sw_with_suwon",
        STAFF: "이윤정, 장진산",
        SECRETARY: "유용선, 장준영",
        SECRETARY2: "홍석준, 신지민, 황현정, 박민준, 전가희",
        MONA_CD: "ATB59635",
        MEM_TITLE: "■ 학력\r\n- 수성고등학교 제31회 졸업\r\n- 서울대학교 법과대학 공법학과 88학번\r\n\r\n■ 주요 경력\r\n- 제21대 국회의원(더불어민주당, 경기도 수원시갑)\r\n- 더불어민주당 경기도당 부위원장 겸 기율위원장\r\n- 더불어민주당 수원시갑지역위원회 지역위원장\r\n- 전) 대통령비서실 정무수석실 행정관\r\n- 전) 법무법인 호민 대표변호사\r\n- 전) 대통령직속 국가균형발전위원회 국민소통 특별위원\r\n- 전) 국가권익위원회 법해석 전문위원\r\n- 전) 경기도 인사소청위원\r\n- 전) 경기도 행정심판위원\r\n- 전) 경기남부경찰청 인권위원장\r\n- 전) 중부지방국세청 자문변호사\r\n- 전) 법무법인 오늘 대표변호사\r\n- 전) 전주·수원지방법원 판사\r\n- 전) 육군 군법무관\r\n- 사법연수원 수료(제28기)",
        ASSEM_ADDR: "의원회관 723호",
    },
    {
        HG_NM: "김영배",
        HJ_NM: "金永培",
        ENG_NM: "KIM YOUNGBAE",
        BTH_GBN_NM: "양",
        BTH_DATE: "1967-03-08",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 성북구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "법제사법위원회",
        CMITS: "법제사법위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-1521",
        E_MAIL: "yb7841521@gmail.com ",
        HOMEPAGE: "https://blog.naver.com/clubyb",
        STAFF: "김준호, 이준기",
        SECRETARY: "목소영, 하동욱",
        SECRETARY2: "송세창, 노성민, 김태식, 김남균, 김수연",
        MONA_CD: "B7D7534L",
        MEM_TITLE: "■ 학력\r\n-고려대학교 대학원 정치외교학 박사수료\r\n-시라큐스대학교 맥스웰행정대학원 행정학 석사\r\n-고려대학교 정책대학원 도시및지방행정 석사\r\n-고려대학교 정치외교학과 졸\r\n\r\n■ 주요경력\r\n-더불어민주당 최고위원 (현)\r\n-더불어민주당 당대표 정무실장\r\n-더불어민주당 원내부대표\r\n-대통령직속 국가균형발전위원회 전략기획위원장\r\n-문재인 정부 청와대 정책조정/민정비서관\r\n-민선 5기,6기 성북구청장\r\n-전국자치분권개헌추진본부 상임대표\r\n-한국인권도시협의회 초대회장\r\n-유니세프 아동친화도시추진 지방정부협의회 초대회장(1,2기)\r\n-전국사회연대경제 지방정부협의회 회장\r\n-노무현 정부 청와대 정책기획위/행사기획 비서관\r\n\r\n■ 저서\r\n-정치의 반전을 꿈꾸다. 공저 (2019.12)\r\n-마을민주주의시대 마을공화국 (2018.06)\r\n-작은민주주의 사람의 마을 (2014.02)\r\n-동네안에 국가있다 (2013.04)\r\n-작은민주주의 친환경무상급식.공저 (2011.02)\r\n-님은 갔지만 보내지 아니하였습니다. 공저 (2010.03)",
        ASSEM_ADDR: "의원회관 627호",
    },
    {
        HG_NM: "김영식",
        HJ_NM: "金英植",
        ENG_NM: "KIM YEUNGSHIK",
        BTH_GBN_NM: "양",
        BTH_DATE: "1959-07-18",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "경북 구미시을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "과학기술정보방송통신위원회",
        CMITS: "과학기술정보방송통신위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-6788-6246",
        E_MAIL: "yeungshik20@naver.com",
        HOMEPAGE: "https://blog.naver.com/yeungshik20",
        STAFF: "김지관, 진성오",
        SECRETARY: "김성은, 박승용",
        SECRETARY2: "이수산, 김영민, 정지원, 강윤경",
        MONA_CD: "IOW1101J",
        MEM_TITLE: "[학력]\r\n1988-1992 펜실베이니아주립대학교 대학원 기계공학 박사\r\n1986-1988 아이오와대학교 대학원 기계공학 석사\r\n1982-1984 영남대학교 기계공학 석사\r\n1978-1982 영남대학교 기계공학 학사\r\n\r\n[경력]\r\n- 혁신형 SMR 국회 포럼 공동위원장\r\n- 한국공학한림원 일반회원\r\n- 제21대 국회의원\r\n- 제21대 국회 전반기 과학기술정보방송통신위원회 위원\r\n- 금오공과대학교 총장(前)\r\n- 금오공과대학교 기계시스템공학과 교수(前)\r\n- 지역중심 국`공립대학교 총장협의회 회장(前)\r\n- 창업진흥원 이사장(前)\r\n- 한국창업보육협회 회장(前)",
        ASSEM_ADDR: "의원회관 716호",
    },
    {
        HG_NM: "김영주",
        HJ_NM: "金榮珠",
        ENG_NM: "KIM YOUNGJOO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1955-07-27",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 영등포구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "교육위원회",
        CMITS: "교육위원회",
        REELE_GBN_NM: "4선",
        UNITS: "제17대, 제19대, 제20대, 제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-2470",
        E_MAIL: "kimyoungjoo2018@gmail.com",
        HOMEPAGE: "http://blog.naver.com/qufxod1004",
        STAFF: "김경훈, 조태상",
        SECRETARY: "이보남, 황정이",
        SECRETARY2: "이석재, 전승관, 허윤정, 손승희, 손혜민",
        MONA_CD: "0W194007",
        MEM_TITLE: "무학여고\r\n한국방송통신대\r\n서강대 경제대학원(경제학 석사) 졸\r\n전국금융노련 상임부위원장\r\n노무현대통령직 인수위원회 자문위원\r\n17, 19, 20대 국회의원\r\n통합민주당 사무총장\r\n국회 정무위원회 간사\r\n국회 환경노동위원회 위원장\r\n더불어민주당 최고위원\r\n문재인 정부 초대 고용노동부 장관",
        ASSEM_ADDR: "의원회관 526호",
    },
    {
        HG_NM: "김영진",
        HJ_NM: "金榮鎭",
        ENG_NM: "KIM YOUNGJIN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1967-09-10",
        JOB_RES_NM: "간사",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 수원시병",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "기획재정위원회",
        CMITS: "기획재정위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-8410",
        E_MAIL: "youngjink840@naver.com",
        HOMEPAGE: null,
        STAFF: "김경목, 노창식",
        SECRETARY: "윤석민, 이승협",
        SECRETARY2: "김동준, 김혜원, 김혜선, 황창민, 이유진",
        MONA_CD: "5765663F",
        MEM_TITLE: "- 1967. 충남 예산 출생\r\n- 1992. 중앙대학교 경영학과 졸업\r\n- 2015. 더불어민주당 수원시병 지역위원장\r\n- 2016. 제20대 국회의원 (경기 수원시병/더불어민주당)\r\n- 2017. 더불어민주당 전략기획위원장\r\n- 2019. 더불어민주당 민주연구원 부원장\r\n- 2020. 제21대 국회의원(경기 수원시병/더불어민주당)\r\n- (전) 더불어민주당 원내수석부대표\r\n- (전) 국회 운영위원회 간사\r\n- (전) 국회 농림수산식품해양수산위원회 위원\r\n- (현) 국회 기획재정위원회 위원",
        ASSEM_ADDR: "의원회관 840호",
    },
    {
        HG_NM: "김영호",
        HJ_NM: "金映豪",
        ENG_NM: "KIM YOUNGHO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1967-09-13",
        JOB_RES_NM: "간사",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 서대문구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "외교통일위원회",
        CMITS: "외교통일위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-4020~2",
        E_MAIL: "kim-youngho@naver.com",
        HOMEPAGE: "https://blog.naver.com/frencisco",
        STAFF: "김병운, 한유진",
        SECRETARY: "강병정, 김양훈",
        SECRETARY2: "이로운, 김대훈, 김나래, 노수빈, 신윤정",
        MONA_CD: "7BM2933Y",
        MEM_TITLE:
            "[학 력]\r\n북경대학교 졸업(국제학 학사)\r\n서강대학교 졸업(중국학 석사)\r\n\r\n[경 력]\r\n(현) 서울 서대문을 국회의원(제20대·21대)\r\n(현) 국회 외교통일위원회 위원\r\n\r\n(현) 더불어민주당 당대표비서실장 \r\n(현) 더불어민주당 서대문을 지역위원장\r\n\r\n(현) 더불어민주당 더좋은미래 정회원\r\n\r\n(현) 국회의원연구단체 ‘일치를 위한 정치포럼’ 정회원\r\n(현) 국회의원연구단체 ‘통일을넘어유라시아로’ 정회원\r\n(현) 국회의원연구단체 ‘미래경제연구회’ 준회원\r\n\r\n(현) 국회 포스트코로나 내외포럼 회원\r\n(현) 한국아동·인구·환경의원연맹(CPE) 정회원\r\n(현) ‘사단법인 돌바내’ 정회원\r\n\r\n(현) 한-호주 의원친선협회 부회장\r\n(현) 한-아르헨티나 의원친선협회 이사\r\n(현) 한- 모잠비크 의원친선협회 이사 \r\n\r\n(현) 사)세이프키즈코리아 고문\r\n(현) 사)국제교류연맹 이사\r\n(현) 사)운암김성숙선생기념사업회 이사\r\n(현) 사)민주화추친협의회 이사\r\n\r\n(전) 국회 외교통일위원회 간사\r\n(전) 국회 행정안전위원회 위원\r\n(전) 국회 운영위원회 위원\r\n(전) 국회 윤리특별위원회 위원\r\n(전) 국회 공공부문 채용비리 의혹 국정조사특별위원회 위원\r\n(전) 국회 재난안전대책특별위원회 간사\r\n\r\n(전) 더불어민주당 제2사무부총장\r\n(전) 더불어민주당 원내부대표\r\n(전) 더불어민주당 제2정조위원장\r\n(전) 더불어민주당 정책위원회 상임부의장\r\n(전) 더불어민주당 세계한인민주회의 부의장\r\n(전) 더불어민주당 재해대책특별위원회 위원장\r\n(전) 더불어민주당 사드대책위원회 간사\r\n(전) 더불어민주당 을지로위원회 위원\r\n(전) 더불어민주당 서민주거TF 위원\r\n(전) 더불어민주당 포항지열발전소·지진대책특별위원회 위원\r\n(전) 더불어민주당 원자력안전대책특별위원회 위원\r\n\r\n(전) 한-파키스탄 의원친선협회 부회장\r\n(전) 한-덴마크 의원친선협회 이사\r\n(전) 한-중 의원외교협의회 회원\r\n(전) 한중청년지도자포럼 대표위원\r\n(전) 스포츠투데이 기자\r\n\r\n\r\n\r\n\r\n\r\n\r\n",
        ASSEM_ADDR: "의원회관 445호",
    },
    {
        HG_NM: "김예지",
        HJ_NM: "金睿智",
        ENG_NM: "KIM YEAJI",
        BTH_GBN_NM: "음",
        BTH_DATE: "1980-12-13",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "문화체육관광위원회",
        CMITS: "문화체육관광위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-9515",
        E_MAIL: "yeajijoy@gmail.com",
        HOMEPAGE: null,
        STAFF: "안준상, 황동연",
        SECRETARY: "김선영, 김용현",
        SECRETARY2: "박상욱, 양형규, 박신향, 김태완",
        MONA_CD: "CNZ51556",
        MEM_TITLE:
            "[학  력]\r\n1987.3 ～ 1999.2 국립서울맹학교 (초,중,고)\r\n2000.3 ～ 2004.2 숙명여자대학교 학사 (피아노)\r\n2004.3 ～ 2007.2 숙명여자대학교 교육대학원 석사 (음악교육)\r\n2007.9 ～ 2009.5 존스홉킨스대학교 피바디 음악원 대학원 석사\r\n2010.9 ～ 2014.5 위스콘신대학교 매디슨캠퍼스 대학원 박사\r\n\r\n[경  력]\r\n2020.05 ～ (現) 제21대 국회의원 (비례대표/국민의힘)\r\n2020.07 ～ (現) 제21대 국회 전반기 문화체육관광위원회 위원\r\n2020.12 ～ (現) 국민의힘 장애인위원회 고문\r\n2020.10 ～ (現) 국민의힘 약자와의동행위원회 입법동행분과 위원\r\n2020.09 ～ (現) 국민의힘 호남동행국회의원 (광주광역시)\r\n2020.06 ～ (現) 국민의힘 저출생대책특별위원회 위원\r\n2020.06 ～ (現) 국회 동물복지국회포럼 준회원\r\n2020.06 ～ (現) 국회 약자의눈 정회원\r\n2020.05 ～ (現) 국회 글로벌외교안보포럼 정회원\r\n2020.05 ～ (現) 국회 혁신 4.0 연구포럼 정회원\r\n2020.03 ～ 2020.04 (前) 미래한국당 선거대책위원회 대변인\r\n2019.04 ～ 2020.12 (前) 한국장애예술인협회 이사\r\n2019.03 ～ 2020.02 (前) 숙명여대 문화예술대학원 피아노교수학전공 초빙대우 교수\r\n2018.02 ～ 2020.05 (前) 우리동작장애인자립생활센터 운영위원\r\n2016.01 ～ 2020.02 (前) 하트시각장애인 체임버오케스트라 단원\r\n2015.03 ～ 2019.02 (前) 숙명여대 피아노 실기강사\r\n2015.01 ～ 2020.02 (前) 유니온 앙상블 예술감독\r\n\r\n[수  상]\r\n2020. 제8회 국회의원 아름다운 말 선플상 수상\r\n2020. 국민의힘 2020 국정감사 우수의원\r\n2020. 쿠키뉴스 2020 국정감사 우수의원\r\n2019. 2019년 올해의 장애인상\r\n2017. 제12회 대한민국장애인문화예술 대상 음악부문 문화체육관광부 장관상\r\n2004. 명예대통령상‘ 21세기를 이끌어갈 우수인재상’  \r\n2001. 매헌콩쿨 전체부문 대상 및 교육인적자원부 장관상\r\n1992. 육영콩쿨 대상",
        ASSEM_ADDR: "의원회관 601호",
    },
    {
        HG_NM: "김용민",
        HJ_NM: "金容民",
        ENG_NM: "KIM YONGMIN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1976-06-05",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 남양주시병",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "법제사법위원회",
        CMITS: "법제사법위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-1530",
        E_MAIL: "fopeopler76@gmail.com",
        HOMEPAGE: "http://blog.naver.com/fopeopler",
        STAFF: "박준수, 윤여길",
        SECRETARY: "백태양",
        SECRETARY2: "백운화, 정재현, 김희주, 박시연, 김다원",
        MONA_CD: "OFE45081",
        MEM_TITLE: "○경력\r\n - (현) 제21대 국회의원 (경기 남양주시병)\r\n - (현) 법제사법위원회 위원\r\n\r\n - (전) 법무법인 양재 대표 변호사\r\n - (전) 법무부 2기 법무검찰개혁위원회 \r\n - (전) 법무부 검찰과거사위원회 \r\n - (전) 대검찰청 검찰개혁위원회 \r\n - (전) 민변 사무차장\r\n\r\n\r\n○학력\r\n - 한양대 법학과 졸업\r\n - 한국과학기술원(KAIST) 문술미래대학원 공학석사.",
        ASSEM_ADDR: "의원회관 902호",
    },
    {
        HG_NM: "김용판",
        HJ_NM: "金用判",
        ENG_NM: "KIM YONGPAN",
        BTH_GBN_NM: "양",
        BTH_DATE: "1958-01-05",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "대구 달서구병",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "행정안전위원회",
        CMITS: "행정안전위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-9480",
        E_MAIL: "jebek8969@gmail.com",
        HOMEPAGE: "https://blog.naver.com/kyp8969",
        STAFF: "김도훈, 박수철",
        SECRETARY: "박병규, 이기주",
        SECRETARY2: "위현서, 권혜진, 김정환, 최유리, 박진원",
        MONA_CD: "SVH3899R",
        MEM_TITLE: "현)\r\n제21대 국회 전반기 행정안전위원회 위원\r\n제21대 국회의원 (대구 달서구병/국민의힘)\r\n\r\n전)\r\n서울지방경찰청 청장\r\n경찰청 보안국 국장\r\n충북지방경찰청 청장\r\n서울지방경찰청 차장\r\n경찰청 보안국 국장\r\n주중 한국대사관 경찰주재관\r\n경찰청 외사관리관실\r\n서울 성동경찰서 서장 \r\n대구 달서경찰서 서장\r\n성주 경찰서 서장 \r\n제30회 행정고시 합격\r\n\r\n학력)\r\n영남대학교 경제학과 학사\r\n경북대학교 사범대학 부속고등학교\r\n달성중학교\r\n대구월배초등학교\r\n",
        ASSEM_ADDR: "의원회관 633호",
    },
    {
        HG_NM: "김웅",
        HJ_NM: "金雄",
        ENG_NM: "KIM WOONG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1970-05-05",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "서울 송파구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "환경노동위원회",
        CMITS: "환경노동위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6084",
        E_MAIL: "songpawoong@naver.com",
        HOMEPAGE: "http://blog.naver.com/songpawoong",
        STAFF: "지욱현, 현경주",
        SECRETARY: "박두리, 박정준",
        SECRETARY2: "심지은, 김수한, 심윤아, 나태선, 김종미",
        MONA_CD: "LQW3652K",
        MEM_TITLE: "1970년 5월 5일 생\r\n\r\n■ 학력\r\n· 순천고등학교 \r\n· 서울대학교 정치학과\r\n· 제29기 사법연수원 수료\r\n· 제39회 사법고시 합격\r\n\r\n■ 경력\r\n\r\n(현) 제21대 국회의원(서울 송파구갑)\r\n\r\n(전) 법무연수원 교수\r\n(전) 대검찰청 검찰연구관 \r\n(전) 대검찰청 미래기획·형사정책단장\r\n(전) 인천지방검찰청 부장검사\r\n(전) 제32대 광주지방검찰청 해남지청장\r\n(전) 서울중앙지방검찰청 부부장검사\r\n(전) 교육과학기술부장관 법무보좌관\r\n(전) 법무부 법무심의관실 검사 \r\n",
        ASSEM_ADDR: "의원회관 329호",
    },
    {
        HG_NM: "김원이",
        HJ_NM: "金元二",
        ENG_NM: "KIM WONI",
        BTH_GBN_NM: "음",
        BTH_DATE: "1968-11-11",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "전남 목포시",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "보건복지위원회",
        CMITS: "보건복지위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-5080~2",
        E_MAIL: "kimwoni923@gmail.com",
        HOMEPAGE: "http://blog.naver.com/kimwoni8182",
        STAFF: "김동현, 유영업",
        SECRETARY: "조은정, 조해경",
        SECRETARY2: "김지수, 유민석, 노희재, 백은우, 이경화",
        MONA_CD: "4L695580",
        MEM_TITLE: "국회 보건복지위원회 위원(현)\r\n국회 예산결산특별위원회 위원(현)\r\n국회 운영위원회 위원(현)\r\n서울시 정무부시장(전)\r\n사회부총리 겸 교육부장관 정책보좌관(전)\r\n김대중 대통령 청와대 행정관(전)\r\n김근태 국회의원 보좌관(전)\r\n\r\n신안출생\r\n목포 용호초 졸업\r\n목포 제일중 졸업\r\n목포 마리아회고 졸업\r\n성균관대학교 사학과 졸업",
        ASSEM_ADDR: "의원회관 923호",
    },
    {
        HG_NM: "김윤덕",
        HJ_NM: "金潤德",
        ENG_NM: "KIM YUNDUCK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1966-05-23",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "전북 전주시갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국토교통위원회",
        CMITS: "국토교통위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제19대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-4367~9",
        E_MAIL: "ydkim22@naver.com",
        HOMEPAGE: null,
        STAFF: "김동환, 천진심",
        SECRETARY: "오용운, 홍성진",
        SECRETARY2: "송동준, 백두산, 진윤호, 엄진향, 문창섭",
        MONA_CD: "JZY9937U",
        MEM_TITLE: "제21대 전주시갑 국회의원\r\n제25회 세계스카우트잼버리 공동조직위원장\r\n(현)더불어민주당 전주시갑 지역위원장\r\n(전)더불어민주당 전라북도당위원장\r\n(전)한국스카우트 전북연맹 연맹장\r\n(전)전라북도 경제통상진흥원 원장\r\n(전)시민행동21 공동대표",
        ASSEM_ADDR: "의원회관 814호",
    },
    {
        HG_NM: "김은혜",
        HJ_NM: "金恩慧",
        ENG_NM: "KIM EUNHYE",
        BTH_GBN_NM: "음",
        BTH_DATE: "1971-01-06",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "경기 성남시분당구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국토교통위원회",
        CMITS: "국토교통위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-0905",
        E_MAIL: "eunhye4400@naver.com",
        HOMEPAGE: "https://blog.naver.com/eunhye4400",
        STAFF: "서광수, 최성용",
        SECRETARY: "박형진, 송지훈",
        SECRETARY2: "심정윤, 조병진, 이준식, 이소리, 황희준",
        MONA_CD: "L5P27909",
        MEM_TITLE: "전) MBC 기자 앵커\r\n전) 청와대 대변인\r\n",
        ASSEM_ADDR: "의원회관 435호",
    },
    {
        HG_NM: "김의겸",
        HJ_NM: "金宜謙",
        ENG_NM: "KIMEUIKYEOM",
        BTH_GBN_NM: "음",
        BTH_DATE: "1963-05-22",
        JOB_RES_NM: "위원",
        POLY_NM: "열린민주당",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "문화체육관광위원회",
        CMITS: "문화체육관광위원회, 언론·미디어 제도개선 특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-9580~9582",
        E_MAIL: "kek9580@gmail.com",
        HOMEPAGE: null,
        STAFF: "박진형, 최승섭",
        SECRETARY: "김봄이래, 김재훈",
        SECRETARY2: "최재식, 조현준, 이시연, 정은솔, 박혜정",
        MONA_CD: "FIC9046Z",
        MEM_TITLE: "Kim Eui Kyeom\r\n\r\n(전)청와대 대변인\r\n(전)한겨레신문 기자",
        ASSEM_ADDR: "의원회관 406호",
    },
    {
        HG_NM: "김정재",
        HJ_NM: "金汀才",
        ENG_NM: "KIM JUNGJAE",
        BTH_GBN_NM: "음",
        BTH_DATE: "1966-02-15",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "경북 포항시북구",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "산업통상자원중소벤처기업위원회",
        CMITS: "산업통상자원중소벤처기업위원회, 여성가족위원회, 국회운영위원회, 중앙선거관리위원회 위원(문상부) 선출에 관한 인사청문특별위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-6831",
        E_MAIL: "lawjj@naver.com",
        HOMEPAGE: null,
        STAFF: "박문태, 이상신",
        SECRETARY: "김지훈, 이재양",
        SECRETARY2: "김재원, 김기완, 김은지, 이현주, 정경애",
        MONA_CD: "E1J8836Y",
        MEM_TITLE: "포항여자고등학교\r\n이화여자대학교 정치외교학 학사\r\n이화여자대학교대학원 석사\r\n프랭클린피어스법과대학원 졸업(J.D.)\r\n\r\n현)\r\n제21대 국회의원(포항 북구, 재선)\r\n국회 여성가족위원회 간사\r\n국회 산업통상자원중소벤처기업위원회 위원\r\n\r\n전)\r\n서울특별시의회(7?8대)의원\r\n서울특별시의회 문화체육관광위원회 위원장\r\n새누리당 중앙당 부대변인\r\n자유한국당 원내대변인\r\n국회 운영위원회 위원\r\n국회 과학기술정보방송통신위원회 위원\r\n국회 재난안전대책특별위원회 위원\r\n자유한국당 대표 경북지역 특보\r\n자유한국당 방송장악저지특위 간사\r\n자유한국당 원전대책특위 위원\r\n자유한국당 포항지진대책 TF 간사\r\n19대 대통령선거 자유한국당 중앙선거대책위원회 여성본부 대외협력본부장\r\n자유한국당 신적폐 저지 특별위원회 위원\r\n자유한국당 사회주의 개헌-정책 저지 투쟁본부 위원\r\n\r\n상훈)\r\n새누리당 국감우수의원상(2016)\r\n입법 및 정책개발 우수 국회의원상(2016)\r\nNGO 모니터단 선정 국정감사 우수의원(2016, 2017)\r\n자유한국당 국감우수의원상(2017)\r\n한국생활자치대상 국회의원 부분 대상(2017)\r\n법률소비자연맹 선정 제20대 국회 제2차년도 &#039헌정대상(의정종합대상)&#039(2018) \r\n한국신문방송인클럽 선정 국회의정대상(2018)\r\n여성정치발전인상(2018)",
        ASSEM_ADDR: "의원회관 914호",
    },
    {
        HG_NM: "김정호",
        HJ_NM: "金禎鎬",
        ENG_NM: "KIM JUNGHO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1960-06-18",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경남 김해시을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "산업통상자원중소벤처기업위원회",
        CMITS: "산업통상자원중소벤처기업위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-5871",
        E_MAIL: "kimjungho3359@daum.net ",
        HOMEPAGE: "http://www.kimjungho3359.com",
        STAFF: "김명진, 손낙구",
        SECRETARY: "정상운, 하광식",
        SECRETARY2: "박가영, 염승화, 장인정, 우승하, 김세련",
        MONA_CD: "9LD2641Q",
        MEM_TITLE: "- 제20대, 21대 국회의원\r\n- 現 국회 산업통상자원중소벤처기업위원회 위원\r\n- 現 더불어민주당 경남도당 위원장 (2020.08 ~ )\r\n- 前 더불어민주당 사회적경제위원회 위원장 (2018.10 ~ 2020.07)\r\n- 現 노무현재단 상임운영위원\r\n- 농업회사법인(주)봉하마을 대표이사 (2008.10. ~ 2018.06)\r\n- 노무현 대통령 참여정부 비서실 비서관, 행정관 역임\r\n- 민주주의민족통일부산연합 사무차장(1991~1993)\r\n- 부산대학교 상과대학 경제학과 졸업(1979년 입학 1995년 졸업)",
        ASSEM_ADDR: "의원회관 609호",
    },
    {
        HG_NM: "김종민",
        HJ_NM: "金鐘民",
        ENG_NM: "KIM JONGMIN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1964-05-12",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "충남 논산시계룡시금산군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "법제사법위원회",
        CMITS: "법제사법위원회, 언론·미디어 제도개선 특별위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-5920",
        E_MAIL: "withmin413@gmail.com",
        HOMEPAGE: null,
        STAFF: "박영호, 정운몽",
        SECRETARY: "심현덕, 장석원",
        SECRETARY2: "신동욱, 황규현, 김수민, 김진희, 김단아, 김은혜",
        MONA_CD: "M2Q9024I",
        MEM_TITLE: "학력\r\n장훈고등학교\r\n서울대학교 국어국문학 학사\r\n\r\n주요 경력\r\n내일신문 기자\r\n시사저널 기자\r\n청와대 홍보기획비서관실 행정관\r\n청와대 대변인 \r\n청와대 국정홍보비서관\r\n충청남도 정무부지사\r\n제20대 국회의원 (논산·계룡·금산)\r\n\r\n국회 소속위원회\r\n현) 법제사법위원회\r\n전) 국회운영위원회\r\n전) 정치개혁특별위원회\r\n전) 헌법개정 및 정치개혁 특별위원회\r\n전) 기획재정위원회\r\n전) 헌법개정특별위원회\r\n전) 예산결산특별위원회\r\n전) 지방재정·분권특별위원회\r\n\r\n더불어민주당\r\n전) 원내부대표\r\n전) 정책위원회 부의장\r\n\r\n수상 내역\r\n홍조근정훈장\r\n",
        ASSEM_ADDR: "의원회관 508호",
    },
    {
        HG_NM: "김주영",
        HJ_NM: "金周暎",
        ENG_NM: "KIM JUYOUNG",
        BTH_GBN_NM: "양",
        BTH_DATE: "1961-10-15",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 김포시갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "기획재정위원회",
        CMITS: "기획재정위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-5260",
        E_MAIL: "gimpolovekjy@gmail.com",
        HOMEPAGE: "https://blog.naver.com/peoplewin60",
        STAFF: "이경호, 이은영",
        SECRETARY: "이황재, 홍수정",
        SECRETARY2: "이장희, 한호, 김석태, 홍수민, 이하림",
        MONA_CD: "D6U6678O",
        MEM_TITLE: "제21대 국회 전반기 기획재정위원회 위원\r\n제21대 국회 전반기 기획재정위원회 조세소위원회 위원\r\n\r\n전) 더불어민주당 대외협력위원회 위원장\r\n전) 경제사회노동위원회 근로자 위원\r\n전) 일자리위원회 위원\r\n전) 저출산고령사회위원회 민간위원\r\n전) 한국노동조합총연맹 위원장",
        ASSEM_ADDR: "의원회관 520호",
    },
    {
        HG_NM: "김진표",
        HJ_NM: "金振杓",
        ENG_NM: "KIM JINPYO",
        BTH_GBN_NM: "양",
        BTH_DATE: "1947-05-04",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 수원시무",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국방위원회",
        CMITS: "국방위원회, 윤리특별위원회",
        REELE_GBN_NM: "5선",
        UNITS: "제17대, 제18대, 제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-3807",
        E_MAIL: null,
        HOMEPAGE: null,
        STAFF: "이병진, 조기훈",
        SECRETARY: "김선회, 이현진",
        SECRETARY2: "홍승화, 장영신, 김보경, 최은정, 오재호",
        MONA_CD: "Q9H5708M",
        MEM_TITLE: "행시13회\r\n재정경제부 세제실장\r\n김대중대통령비서실 정책기획수석\r\n국무조정실장\r\n노무현대통령직인수위원회 부위원장\r\n부총리 겸 재정경제부장관\r\n부총리 겸 교육인적자원부장관\r\n민주당 최고위원\r\n민주당 참좋은지방정부위원회 위원장\r\n민주당 원내대표\r\n국회 지방재정특별위원회 위원장\r\n국회 정치쇄신특별위원회 위원장\r\n국회 지방재정분권특별위원회 위원장\r\n국정기획자문위원회 위원장",
        ASSEM_ADDR: "의원회관 744호",
    },
    {
        HG_NM: "김철민",
        HJ_NM: "金哲玟",
        ENG_NM: "KIM CHEOLMIN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1957-02-15",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 안산시상록구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "교육위원회",
        CMITS: "교육위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2135",
        E_MAIL: "kcm8764@naver.com",
        HOMEPAGE: "http://blog.naver.com/kcm8764",
        STAFF: "김정훈, 이창민",
        SECRETARY: "전가영, 최성희",
        SECRETARY2: "정주영, 김은혜, 이성범, 최신영, 이재희",
        MONA_CD: "1MU99298",
        MEM_TITLE:
            "2017.03 ~ 을지키는 민생실천위원회 운영위원\r\n2017.01 ~ 표현의자유특별위원회 위원\\\r\n2016.12 ~ AI 및 구제역확산방지 특별위원회 위원\r\n2016.11 ~ 참좋은지방정부위원회 상임위원\r\n2016.09 ~ 세월호특별위원회 위원\r\n2016.06 ~ 제20대 국회 전반기 예산결산특별위원회 위원\r\n2016.06 ~ 제20대 국회 전반기 농림축산식품해양수산위원회 위원\r\n2016.05 ~ 제20대 안산상록을 국회의원\r\n2013 ~ 2014 제7대 경기중부권행정협의회 회장\r\n2012 ~ 2014 제1대 전국다문화도시협의회 회장\r\n2010 ~ 2014 민선5기 경기도 안산시장\r\n                 민주당 지방자치위원회 부위원장\r\n                 민주당 경기도당 중소기업특별위원회 위원장\r\n민주당 상록을 지역위원장 직무대행\r\n상록신용협동조합 이사장\r\n안산시육상경기연맹 회장\r\n안산중앙라이온스클럽 회장\r\n안산경제정의실천시민연합 자문위원\r\n안산환경운동연합 자문위원\r\n참안산사람들 공동대표\r\n안산늘푸른학교 후원회 회장\r\n안산종합건축사사무소 대표\r\n안산시건축사협회 회장\r\n국제라이온스클럽 354B지구 부총재\r\n경희대학교AMP 안산총동문회 회장\r\n안산시호남향우회 회장\r\n안산상록경찰서 선진질서위원회 위원장\r\n\r\n2006 ~ 2008 한양대학교 산업경영디자인대학원 경영학 석사\r\n1981 ~ 1991 한밭대학교 건축공학 학사\r\n1975    고등학교 졸업학력 검정고시\r\n1972 ~ 1974 경동고등학교 중퇴\r\n1969 ~ 1972 대전중학교\r\n1963 ~ 1969 대전중앙초등학교",
        ASSEM_ADDR: "의원회관 1019호",
    },
    {
        HG_NM: "김태년",
        HJ_NM: "金太年",
        ENG_NM: "KIM TAENYEON",
        BTH_GBN_NM: "음",
        BTH_DATE: "1965-03-20",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 성남시수정구",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "기획재정위원회",
        CMITS: "기획재정위원회",
        REELE_GBN_NM: "4선",
        UNITS: "제17대, 제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-4570, 031-751-4048",
        E_MAIL: "ktn0320@daum.net",
        HOMEPAGE: "http://www.ktn21.com",
        STAFF: "이창욱, 정진경",
        SECRETARY: "강경훈, 박기일",
        SECRETARY2: "안승태, 배지은, 천지현, 김채현",
        MONA_CD: "1WE5693J",
        MEM_TITLE: "제17,19, 20, 21대 국회의원(4선)\r\n\r\n전) 더불어민주당 원내대표\r\n전) 국회 운영위원회 위원장\r\n\r\n전) 더불어민주당 정책위의장\r\n전) 국정기획자문위원회 부위원장\r\n전) 국회 예산결산특별위원회 간사\r\n전) 국회 교육문화체육관광위원회 간사\r\n전) 국회 정치개혁특별위원회 간사\r\n\r\n\r\n\r\n\r\n",
        ASSEM_ADDR: "의원회관 504호",
    },
    {
        HG_NM: "김태호",
        HJ_NM: "金台鎬",
        ENG_NM: "KIM TAEHO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1962-08-21",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "경남 산청군함양군거창군합천군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "외교통일위원회",
        CMITS: "외교통일위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제18대, 제19대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-0896~7",
        E_MAIL: "taehoshgh@naver.com",
        HOMEPAGE: null,
        STAFF: "권정욱, 최기봉",
        SECRETARY: "김경수, 김영조",
        SECRETARY2: "최장현, 박수현, 박찬호, 김정민, 서유정",
        MONA_CD: "P0F1530P",
        MEM_TITLE: "서울대학교 대학원 교육학 박사\r\n제 36대 거창군 군수\r\n제 32대·33대 경상남도 도지사\r\n제 18대 · 19대 국회의원(김해을)\r\n前 새누리당 최고위원\r\n現 제 21대 국회의원\r\n국회 외교통일위원회",
        ASSEM_ADDR: "의원회관 907호",
    },
    {
        HG_NM: "김태흠",
        HJ_NM: "金泰欽",
        ENG_NM: "KIM TAEHEUM",
        BTH_GBN_NM: "양",
        BTH_DATE: "1963-01-11",
        JOB_RES_NM: "위원장",
        POLY_NM: "국민의힘",
        ORIG_NM: "충남 보령시서천군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "농림축산식품해양수산위원회",
        CMITS: "농림축산식품해양수산위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-4710",
        E_MAIL: "ktheum@hanmail.net",
        HOMEPAGE: "http://blog.naver.com/ktheum",
        STAFF: "한상필, 허정환",
        SECRETARY: "유혁, 한만형",
        SECRETARY2: "정민규, 서진원, 한주희, 함은영",
        MONA_CD: "TVF3669B",
        MEM_TITLE: "서강대 공공정책대학원 졸업 (행정학 석사)\r\n제 19, 20, 21대 국회의원(충남 보령시,서천군)\r\n(전) 국무총리실 행정관\r\n(전) 충청남도 정무부지사\r\n(전) 한나라당 충남도당 위원장\r\n(전) 국회 국토교통위원회 위원\r\n(전) 국회 기획재정위원회 위원\r\n(전) 새누리당 원내대변인\r\n(전) 자유한국당 최고위원\r\n(전) 국회 농림축산식품해양수산위원회 간사\r\n(전) 자유한국당 충남도당 위원장\r\n(현) 국회 운영위원회 위원\r\n(현) 국회 기획재정위원회 위원",
        ASSEM_ADDR: "의원회관 407호",
    },
    {
        HG_NM: "김한정",
        HJ_NM: "金漢正",
        ENG_NM: "KIM HANJUNG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1963-09-06",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 남양주시을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "정무위원회",
        CMITS: "정무위원회, 예산결산특별위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-0496",
        E_MAIL: "7840498@naver,com",
        HOMEPAGE: "http://blog.naver.com/hanjungkim",
        STAFF: "도보은, 최문희",
        SECRETARY: "성정익, 장미희",
        SECRETARY2: "이경일, 김상수, 우수연, 양명선, 이채은",
        MONA_CD: "09I2323E",
        MEM_TITLE:
            "○ 학력\r\n ㆍ1979년 2월   마산 동중학교 졸업\r\n ㆍ1982년 2월   서울 휘문고등학교 졸업\r\n ㆍ1989년 2월   서울대학교 사회과학대학 국제경제학과 졸업\r\n ㆍ1997년 6월   미국 Rutgers 뉴저지 주립대학교 대학원 박사과정 수료(국제정치 전공)                   (1994.9.-1997.6.)\r\n \r\n○ 경력\r\nㆍ1989 ~ 1992 민주당 김대중 총재 공보비서 \r\nㆍ1998 ~ 1999 국가정보원장 대외협력보좌역 \r\nㆍ1999 ~ 2003 국민의정부 청와대 제1부속실장 \r\nㆍ2000 김대중 대통령 평양 남북정상회담 수행 \r\nㆍ2003 ~ 2005 김대중 전직대통령 비서실 실장 (정무직 1급상당 비서관) \r\nㆍ2003 ~ 2005 아시아태평양민주지도자회의(FDL-AP) 사무총장 \r\nㆍ2006 ~ 2007 미국 코넬대학교 동아시아센터 초청연구원 \r\nㆍ2010 ~ 2011 가천대학교 사회정책대학원 교수, 대외협력처장 \r\nㆍ2011 박원순 서울특별시장 후보자 정책특보 \r\nㆍ2012 ~ 2012 문재인 대통령후보 수행단장, 민주통합당 인재영입위원회 부위원장 \r\nㆍ2011 ~ 2016 환경재단 기획위원 \r\nㆍ2013 ~ 2016 연세대학교 동아시아국제학부(원주) 객원교수 \r\nㆍ2010 ~ 사단법인 행동하는양심 상임이사 \r\nㆍ2014 ~ 노무현재단 운영위원 \r\nㆍ2016 ~ 민족화해협력범국민협의회 집행위원장\r\nㆍ2016 ~ 민족화해협력범국민협의회 집행위원장\r\nㆍ2016.05 ~ 2020.05 제20대 국회의원(경기 남양주시을/더불어민주당) \r\nㆍ2016.06 ~ 2017.05 제20대 국회 전반기 운영위원회 위원\r\nㆍ2016.06 ~ 2017.09 제20대 국회 전반기 농림축산식품해양수산위원회 위원\r\nㆍ2016.06 ~ 2017.05 더불어민주당 원내정책부대표\r\nㆍ2016.06 ~ 2017.05 제20대 국회 전반기 예산결산특별위원회 위원\r\nㆍ2016.07 ~ 2017.06 제20대 국회 전반기 미래일자리 특별위원회 위원\r\nㆍ2016.11 ~ 2017.01 박근혜 정부의 최순실 등 민간인에 의한 국정농단 의혹사건 진상규명을 위한 국정조사특별위원회 위원\r\nㆍ2017 제19대 대통령선거 더불어민주당 중앙선대위원회 전략본부 부본부장\r\nㆍ2017.08 ~ 2017.12 제20대 국회 정치개혁 특별위원회 위원\r\nㆍ2017.09 ~ 2018.05 제20대 국회 전반기 교육문화체육관광위원회 위원\r\nㆍ2018.03 ~ 2018.05 더불어민주당 원내대표 외교안보특보\r\nㆍ2018.07  제 20대 국회 하반기 행정안전위원회 위원\r\nㆍ2020.05 ~ 제21대 국회의원(경기 남양주시을/더불어민주당) \r\nㆍ2020.06 ~ 국회 한반도평화포럼 대표의원\r\nㆍ2020.06 ~ 제21대 국회 전반기 정무위원회 위원\r\nㆍ2020.06 ~ 제21대 국회 전반기 예산결산특별위원회 위원\r\nㆍ2020.09 ~ 더불어민주당 정책위원회 선임부의장\r\nㆍ2020.10 ~ 국회 한일의원연맹 상임간사\r\nㆍ2020.10 ~ 더불어민주당 국난극복 K-뉴딜위원회 코로나 국난극복본부 본부장\r\nㆍ2021.06 ~ 더불어민주당 국제위원회 위원장\r\n\r\n○ 저서\r\n<나의 멘토 김대중 : DJ와 함께한 청춘이야기> (2011)\r\n<남양주, 날다: 김한정의 경쾌한 도시정치 이야기> (2014)\r\n<남양주 시민과 함께 걸어가는 김한정의 길> (2016)",
        ASSEM_ADDR: "의원회관 631호",
    },
    {
        HG_NM: "김형동",
        HJ_NM: "金亨東",
        ENG_NM: "KIM HYUNGDONG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1975-03-25",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "경북 안동시예천군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "행정안전위원회",
        CMITS: "행정안전위원회, 중앙선거관리위원회 위원(문상부) 선출에 관한 인사청문특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-6788-6356",
        E_MAIL: "khyungdong@naver.com",
        HOMEPAGE: "https://blog.naver.com/khyungdong",
        STAFF: "권백신, 박균",
        SECRETARY: "권순구, 신종대",
        SECRETARY2: "남수용, 김미숙, 안문희, 심태현",
        MONA_CD: "JEZ3130Q",
        MEM_TITLE: "□ 학  력\r\n  ○ 사법시험 합격(45회)\r\n  ○ 서울대학교 언론정보학과 졸업\r\n  ○ 안동고등학교 졸업(42회)  \r\n  ○ 경덕중학교 졸업(38회) \r\n  ○ 안동초등학교 졸업(76회)\r\n  \r\n□ 주요경력\r\n  ○ 현) 21대 국회 행정안전위원회 위원\r\n  ○ 현) 21대 국회 예산결산특별위원회 위원\r\n  ○ 현) 국민의힘 윤리위원회 위원\r\n  ○ 현) 국민의힘 약자와의 동행위원회 현장동행 분과위원\r\n  ○ 현) 국민의힘 인국공 공정채용TF 위원\r\n  ○ 현) 국민의힘 부동산대책특위 위원\r\n  ○ 현) 노동법이론실무학회 이사\r\n  ○ 전) 법무법인 중앙법률원 대표 변호사\r\n  ○ 전) 한국노총 중앙법률원 부원장\r\n  ○ 전) OECD 산하 분쟁조정기구 국내연락사무소 한국 NCP 위원\r\n  ○ 전) 이주노동희망센터 이사",
        ASSEM_ADDR: "의원회관 1016호",
    },
    {
        HG_NM: "김홍걸",
        HJ_NM: "金弘傑",
        ENG_NM: "KIM HONGGUL",
        BTH_GBN_NM: "음",
        BTH_DATE: "1963-11-12",
        JOB_RES_NM: "위원",
        POLY_NM: "무소속",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "외교통일위원회",
        CMITS: "외교통일위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-0615",
        E_MAIL: "2020kimhonggul@gmail.com",
        HOMEPAGE: "http://blog.naver.com/hgkm615",
        STAFF: "김정호, 이현주",
        SECRETARY: "김용성, 이진경",
        SECRETARY2: "이승은, 이승렬, 김오현, 권예린, 강상원",
        MONA_CD: "PO64874I",
        MEM_TITLE: "현) 제21대 국회 전반기 외교통일위원회 위원\r\n전) 민족화해협력범국민협의회 대표상임의장\r\n전) 김대중이희호기념사업회 이사장\r\n전) 퍼모나대학교 태평양연구소 객원연구원",
        ASSEM_ADDR: "의원회관 615호",
    },
    {
        HG_NM: "김회재",
        HJ_NM: "金會在",
        ENG_NM: "KIM HOIJAE",
        BTH_GBN_NM: "양",
        BTH_DATE: "1962-11-24",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "전남 여수시을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국토교통위원회",
        CMITS: "국토교통위원회, 언론·미디어 제도개선 특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-3285 / 061-684-6600",
        E_MAIL: "khj539@naver.com",
        HOMEPAGE: "blog.naver.com/khj539",
        STAFF: "장용성, 조남웅",
        SECRETARY: "권영근, 김지호",
        SECRETARY2: "박선미, 정재환, 신윤정, 왕명희",
        MONA_CD: "M6H1705E",
        MEM_TITLE: "<주요 경력>\r\n- 제21대 여수을 국회의원\r\n- 국회국토교통위원회 위원\r\n- 더불어민주당 법률위원장\r\n\r\n- 전) 국회운영위원회 위원\r\n- 전) 더불어민주당 원내부대표\r\n- 전) 의정부지방검찰청 검사장\r\n- 전) 광주지방검찰청 검사장\r\n\r\n<수상 내역>\r\n- 자랑스런 여수인상(2016)\r\n- 홍조근정훈장(2011)\r\n",
        ASSEM_ADDR: "의원회관 831호",
    },
    {
        HG_NM: "김희곤",
        HJ_NM: "金熙坤",
        ENG_NM: "KIM HEEGON",
        BTH_GBN_NM: "양",
        BTH_DATE: "1964-12-17",
        JOB_RES_NM: "간사",
        POLY_NM: "국민의힘",
        ORIG_NM: "부산 동래구",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "정무위원회",
        CMITS: "정무위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6346",
        E_MAIL: "caesar1217@assembly.go.kr",
        HOMEPAGE: null,
        STAFF: "임병국, 진명구",
        SECRETARY: "송우현, 장지원",
        SECRETARY2: "신한섭, 김진만, 채지훈, 윤태건, 윤현숙",
        MONA_CD: "52P3934K",
        MEM_TITLE: "- 부산 동래고\r\n- 부산대학교 법학 학사\r\n- 연세대학교 행정대학원 석사\r\n\r\n현) 21대 국회의원(부산 동래구/ 국민의힘)\r\n현) 21대 국회 정무위원회 위원\r\n현) 미래통합당 부산광역시당 수석대변인\r\n전) 해양수산부 장관 정책보좌관\r\n전) 국회의원 보좌관\r\n전) 대통령비서실 정치특보실",
        ASSEM_ADDR: "의원회관 623호",
    },
    {
        HG_NM: "김희국",
        HJ_NM: "金熙國",
        ENG_NM: "KIM HEEKUK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1958-10-20",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "경북 군위군의성군청송군영덕군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국토교통위원회",
        CMITS: "국토교통위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제19대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-3136~8",
        E_MAIL: "heekuk1020@naver.com",
        HOMEPAGE: null,
        STAFF: "권태윤, 최승환",
        SECRETARY: "김동우, 오장택",
        SECRETARY2: "조하나, 김세림, 신영규, 이가영",
        MONA_CD: "6AR6743G",
        MEM_TITLE: "■ 학력사항\r\n- 경북고\r\n- 경북대 행정학과\r\n- 광운대 법학과 박사\r\n\r\n■ 경력사항\r\n- 제24회 행정고시 \r\n- 부산지방해양항만청 항만물류과 과장\r\n- 건설교통부 고속철도과 과장\r\n- 국토해양부 제2차관\r\n- 제19대 국회의원 (대구 중구남구/새누리당)\r\n- 제19대 국회 보건복지위원회 위원\r\n- 제19대 국회 예산결산특별위원회 위원\r\n- 제19대 국회 창조경제활성화특별위원회 위원\r\n- 제19대 국회 국토교통위원회 위원\r\n- 새누리당 중앙재해대책위원장\r\n- 제19대 국회 서민주거복지특별위원회 위원\r\n- 새누리당 민생정책특별위원회 부위원장\r\n- 한국건설법무학회 회장\r\n- 제21대 국회의원 (경북 군위군의성군청송군영덕군/국민의힘)(現)",
        ASSEM_ADDR: "의원회관 713호",
    },
    {
        HG_NM: "남인순",
        HJ_NM: "南仁順",
        ENG_NM: "NAM INSOON",
        BTH_GBN_NM: "양",
        BTH_DATE: "1958-11-05",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 송파구병",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "보건복지위원회",
        CMITS: "보건복지위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-5980",
        E_MAIL: "nisoon@na.go.kr",
        HOMEPAGE: "http://blog.naver.com/nisoon",
        STAFF: "김봉겸, 김은경",
        SECRETARY: "김영지, 김평수",
        SECRETARY2: "강성현, 김잔디, 이하나, 남민경, 정다인",
        MONA_CD: "04T3751T",
        MEM_TITLE: "현) 제21대 국회의원(서울 송파병)\r\n현) 국회 보건복지위원\r\n현) 더불어민주당 여성정치참여확대위원회 위원장\r\n현) 한국여성의정 공동대표\r\n현) 저출생·인구절벽대응국회포럼 공동대표\r\n현) 한국아동인구환경의원연맹(CPE) 회장 권한대행\r\n현) 더불어민주당 을지로위원회 고문\r\n현) 더불어민주당 민생연석회의 위원\r\n\r\n제19~20대 국회의원\r\n더불어민주당 최고위원\r\n더불어민주당 코로나19국난극복위원회 부위원장\r\n더불어민주당 민생연석회의 운영위원장\r\n더불어민주당 유치원·어린이집 공공성강화 특별위원회 위원장\r\n더불어민주당 보육특별위원장\r\n더불어민주당 젠더폭력대책특별위원장\r\n더불어민주당 여성가족위원장(20대 국회 전반기)\r\n새정치민주연합 전국여성위원장·원내부대표\r\n새정치민주연합 대외협력위원장\r\n19대 국회 아동·여성대상 성폭력대책 특별위원회 간사",
        ASSEM_ADDR: "의원회관 748호",
    },
    {
        HG_NM: "노웅래",
        HJ_NM: "盧雄來",
        ENG_NM: "NOH WOONGRAE",
        BTH_GBN_NM: "양",
        BTH_DATE: "1957-08-03",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 마포구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "환경노동위원회",
        CMITS: "정보위원회, 환경노동위원회",
        REELE_GBN_NM: "4선",
        UNITS: "제17대, 제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-6788-6386",
        E_MAIL: "wraenoh1@gmail.com",
        HOMEPAGE: "https://blog.naver.com/with_wraenoh",
        STAFF: "김성열, 조유진",
        SECRETARY: "김화용, 문관식",
        SECRETARY2: "고찬양, 박수철, 정주미, 김현지, 구세나",
        MONA_CD: "0827740Q",
        MEM_TITLE: "더불어민주당 국회의원(마포갑/17대,19대,20대,21대)\r\n더불어민주당 최고위원\r\n국회 환경노동위원회/정보위원회 위원\r\n디지털뉴딜라운드 공동수석의장\r\n&#039통일을 넘어 유라시아로&#039 국회연구단체 공동대표\r\n민주화추진협의회 자문위원\r\n민족화해협력범국민협의회 공동의장\r\n공덕초, 중앙대, 방통대, 동국대 대학원 졸업\r\n20대 국회 후반기 과학기술방송통신위원회 위원장\r\n20대 국회 전반기 교육문화체육관광위원회 위원\r\n더불어민주당 사교육대책특별위원장 (전)\r\n민주당 사무총장 (전)\r\n민주당 서울시당위원장 (전)\r\n국회 예산결산특별위원회 위원 (전)\r\nMBC 전국노조위원장 (전)\r\n매일경제신문, MBC 기자 (21년)",
        ASSEM_ADDR: "의원회관 901호",
    },
    {
        HG_NM: "도종환",
        HJ_NM: "都鍾煥",
        ENG_NM: "DO JONGHWAN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1955-09-27",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "충북 청주시흥덕구",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "교육위원회",
        CMITS: "교육위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2537",
        E_MAIL: "djhpoem@assembly.go.kr",
        HOMEPAGE: "http://blog.naver.com/djhpoem",
        STAFF: "천준호, 홍수진",
        SECRETARY: "나채선, 이대건",
        SECRETARY2: "송경화, 남상문, 이기훈, 정찬재, 송소연",
        MONA_CD: "J2O8643H",
        MEM_TITLE: "시인, 現 국회의원(3선-19 · 20 · 21대, 충북 청주흥덕)\r\n충북대학교 국어교육과 졸업\r\n충남대학교 대학원 졸업(문학박사)\r\n현) 국회 문화체육관광위원회 위원장\r\n\r\n전) 문화체육관광부 장관\r\n전) 국회 국방위원회 위원\r\n전) 국회 교육문화체육관광위원회 간사\r\n전) 국회 박근혜정부 국정농단 국정조사 특별위원\r\n전) 더불어민주당 대변인\r\n전) 더불어민주당 충북도당위원장\r\n전) 더불어민주당 한국사 교과서 국정화저지 특별위원장",
        ASSEM_ADDR: "의원회관 333호",
    },
    {
        HG_NM: "류성걸",
        HJ_NM: "柳性杰",
        ENG_NM: "YOO SUNGKULL",
        BTH_GBN_NM: "음",
        BTH_DATE: "1957-07-12",
        JOB_RES_NM: "간사",
        POLY_NM: "국민의힘",
        ORIG_NM: "대구 동구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "기획재정위원회",
        CMITS: "기획재정위원회, 예산결산특별위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제19대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-7141",
        E_MAIL: "7847142@naver.com",
        HOMEPAGE: "https://blog.naver.com/sungkull",
        STAFF: "배시열, 손정갑",
        SECRETARY: "조희창",
        SECRETARY2: "장영수, 남욱현, 김정열, 이환희, 김민선",
        MONA_CD: "8VY63414",
        MEM_TITLE:
            "□ 학력\r\n    - 대구초 / 경구중 / 경북고 졸업\r\n    - 경북대학교 경제학과 졸업\r\n    - 美 시라큐즈대학교 경제학 석사(1987.9~1989.12)\r\n    - 美 시라큐즈대학교 경제학 박사(1987.9~1991.12)\r\n\r\n□ 경력\r\n    - 2020.09~               국민의힘  제1 정책조정위원장\r\n    - 2020.08~               제21대 국회 전반기 기획재정위원회 경제재정소위원회 위원장\r\n    - 2020.07 ~              제21대 국회 전반기 기획재정위원회 위원, 간사\r\n    - 2020.06 ~              미래통합당 대구 동구갑 당원협의회 운영위원장\r\n    - 2020.05 ~              제21대 국회의원 (대구 동구갑/미래통합당)\r\n    - 2016.03 ~ 2016.05   제19대 국회의원 (대구 동구갑/무소속)\r\n    - 2015.09                 새누리당 대구광역시당 위원장\r\n    - 2015.08                 제19대 국회 공적연금 강화와 노후빈곤 해소를 위한 특별위원회 위원\r\n    - 2015.08                 새누리당 정책위원회 민생119본부 부본부장\r\n    - 2014.0 1                새누리당‘중소기업·소상공인특별위원회’위원\r\n    - 2013.06                 새누리당 정책위 기획재정 정책조정위원회 부위원장\r\n    - 2013.04 ~ 2013.09   국회 예산·재정개혁특별위원회 위원\r\n    - 2013.01 ~ 2013.02   제18대 대통령직 인수위원회 경제1분과 간사\r\n    - 2012.09 ~ 2012.11   국회 아동·여성대상 성폭력 대책특별위원회 위원\r\n    - 2012.07 ~ 2016.05   제19대 국회 기획재정위원회 위원, 조세소위원회 위원\r\n    - 2012.07 ~ 2014.05   제19대 국회 예산결산특별위원회 위원 예산안 등 조정소위원회 위원\r\n    - 2012.05 ~ 2016.03   제19대 국회의원 (대구 동구갑/새누리당)\r\n    - 2011.04                 국제과학비즈니스벨트위원회 당연직 위원\r\n    - 2010.08 ~ 2012.02   기획재정부 제2차관\r\n                               기획재정부 예산실 실장\r\n                               기획재정부 예산총괄심의관\r\n                               기획예산처 공공정책관\r\n                               기획예산처 균형발전재정기획관\r\n                               국민경제자문회의 대외산업실 실장\r\n                               기획예산처 과학환경예산과 과장\r\n                               제23회 행정고시 합격\r\n\r\n□ 상훈\r\n    홍조근정훈장, 황조근정훈장",
        ASSEM_ADDR: "의원회관 605호",
    },
    {
        HG_NM: "류호정",
        HJ_NM: "柳好貞",
        ENG_NM: "RYU HOJEONG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1992-08-09",
        JOB_RES_NM: "위원",
        POLY_NM: "정의당",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "산업통상자원중소벤처기업위원회",
        CMITS: "산업통상자원중소벤처기업위원회, 윤리특별위원회, 감사원장(최재해) 임명동의에 관한 인사청문특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-9740",
        E_MAIL: "help@ryuhojeong.com",
        HOMEPAGE: "http://ryuhojeong.com",
        STAFF: "양호영, 염종운",
        SECRETARY: "최강연, 황윤영",
        SECRETARY2: "이지은, 김유라, 임동준, 손예지, 배시은",
        MONA_CD: "NCP9875N",
        MEM_TITLE: "1992년 8월 9일 생\r\n이화여자대학교 사회학과 졸업\r\n\r\n[경력]\r\n(현) 제21대 국회의원(비례대표/정의당)\r\n(현) 제21대 국회 산업통상자원중소벤처기업위원회 위원\r\n(현) 제21대 국회 윤리특별위원회 위원\r\n\r\n(전) 정의당 원내수석부대표 겸 원내대변인\r\n(전) 정의당 원내부대표\r\n(전) 정의당 경기도당 여성위원회 위원장\r\n(전) 정의당 IT산업노동특별위원회 위원장\r\n(전) 민주노총 화섬식품노조 선전홍보부장\r\n(전) 스마일게이트 메가포트 마케팅실 대리",
        ASSEM_ADDR: "의원회관 513호",
    },
    {
        HG_NM: "맹성규",
        HJ_NM: "孟聖奎",
        ENG_NM: "MAENG SUNGKYU",
        BTH_GBN_NM: "음",
        BTH_DATE: "1962-04-05",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "인천 남동구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "농림축산식품해양수산위원회",
        CMITS: "농림축산식품해양수산위원회, 예산결산특별위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6181, 032-466-9100",
        E_MAIL: "minjoomsk@naver.com",
        HOMEPAGE: "https://blog.naver.com/minjoo_maeng",
        STAFF: "남기환, 신지혜",
        SECRETARY: "엄소영, 이귀성",
        SECRETARY2: "이광훈, 송지영, 김현주, 권나영, 김의찬",
        MONA_CD: "FJK3396E",
        MEM_TITLE: "<주요약력>\r\n\r\n2020.09 ~더불어민주당 예산결산위원회 위원장\r\n2020.06.~제21대 국회 전반기 농림축산식품해양수산위원회 위원\r\n2020.05.~제21대 국회의원(인천 남동구갑)\r\n2019.10.~더불어민주당 사회복지특별위원회위원장\r\n2019.08.~ 제20대 국회 예결산특별위원회 위원 \r\n2019.08.~ 제20대 국회 운영위원회 위원\r\n2019. 5.~ 더불어민주당 원내부대표\r\n2018.10.~ 더불어민주당 정책위원회 상임부의장\r\n2018. 7.~  제20대 국회후반기 보건복지위원회 위원\r\n2018. 6.~  제20대 국회의원(인천 남동구갑)\r\n2017. 6.~’18. 4.  문재인정부 국토교통부 제2차관\r\n2015. 7.~’17. 4.  제14대 강원도 경제부지사   \r\n2010. 2.    주중국대한민국대사관 공사참사관  \r\n2006. 4.    참여정부 청와대 민정수석실 행정관  \r\n1988. 4.    제31회 행정고시\r\n\r\n<학력사항>\r\n한국항공대학교 대학원 법학박사\r\n캐나다 맥길대학교 대학원 법학석사\r\n서울대학교 대학원 행정학 석사\r\n고려대학교 행정학 학사\r\n부평고등학교 졸업",
        ASSEM_ADDR: "의원회관 926호",
    },
    {
        HG_NM: "문정복",
        HJ_NM: "文貞福",
        ENG_NM: "MOON JEONGBOG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1967-01-10",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 시흥시갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국토교통위원회",
        CMITS: "국토교통위원회, 예산결산특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-9850",
        E_MAIL: "indobangrang@hanmail.net",
        HOMEPAGE: "https://blog.naver.com/indobangrang",
        STAFF: "김선옥, 김진경",
        SECRETARY: "신희성, 정동황",
        SECRETARY2: "백정균, 양윤정, 오승현, 김리휘, 이지아, 이민주",
        MONA_CD: "GOC54665",
        MEM_TITLE: "○ 학력\r\n - 성결대학교 사회복지학과 학사\r\n- 이화여자대학교 정책과학대학원 석사과정\r\n\r\n○ 경력\r\n- 전) 제6.7대 시흥시의회 의원 \r\n- 전) 사람사는세상 노무현재단 기획위원 \r\n- 전) 문재인대통령 비서실 선임행정관\r\n- 현) 더불어민주당 경기도당 시흥시갑 지역위원장\r\n- 현) 21대 국회의원\r\n- 현) 국토교통위원회 위원\r\n",
        ASSEM_ADDR: "의원회관 521호",
    },
    {
        HG_NM: "문진석",
        HJ_NM: "文振碩",
        ENG_NM: "MOON JINSEOG",
        BTH_GBN_NM: "양",
        BTH_DATE: "1962-02-12",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "충남 천안시갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국토교통위원회",
        CMITS: "국토교통위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-9030",
        E_MAIL: "jmoon123@naver.com",
        HOMEPAGE: "https://blog.naver.com/jmoon123",
        STAFF: "김도형, 유명식",
        SECRETARY: "길경덕, 한세효",
        SECRETARY2: "김종철, 이선민, 황신우, 김여진, 전지현",
        MONA_CD: "4U29186R",
        MEM_TITLE: "○학력\r\n1991년 중앙대 정치외교학과 졸업\r\n2010년 고려대학교 정책대학원 석사 졸업\r\n2018년 서울과학기술대학교 에너지환경대학원 박사과정 수료\r\n\r\n○경력\r\n- 21대 국회 충남 천안시갑 국회의원(더불어민주당)\r\n- 현) 더불어민주당 원내부대표\r\n- 현) 더불어민주당 을지로위원회 위원\r\n- 현) 사단법인 유관순열사기념사업회 고문\r\n- 전) 더불어민주당 코로나19 국난극복위원회 위원\r\n- 전) 국회상임위원회 위원 정수에 관한 규칙 개정 특별위원회\r\n- 전) 사단법인 유관순열사기념사업회 부회장\r\n- 전) 단국대학교 초빙교수\r\n- 전) 대통령직속 국가균형발전위원회 국민소통특별위원\r\n- 전) 행정안전부 지방자치단체 합동평가위원\r\n- 전) 양승조 충남도지사 비서실장\r\n- 전) 2017년 문재인 대통령후보 선거대책위 남평포럼 사무총장\r\n- 전) 2012년 문재인 대통령후보 선거대책본부 충남시민캠프 대표",
        ASSEM_ADDR: "의원회관 640호",
    },
    {
        HG_NM: "민병덕",
        HJ_NM: "閔炳德",
        ENG_NM: "MIN BYOUNGDUG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1970-12-20",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 안양시동안구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "정무위원회",
        CMITS: "정무위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-9540",
        E_MAIL: "anyangmin@gmail.com",
        HOMEPAGE: "https://blog.naver.com/anyangmin",
        STAFF: "김대경, 이재호",
        SECRETARY: "김병섭, 배장원",
        SECRETARY2: "이진원, 전영규, 한지영, 이민재, 신정태",
        MONA_CD: "TZ228122",
        MEM_TITLE: "-     현       직     -\r\n\r\n21대 더불어민주당 안양시동안구갑 국회의원 \r\n\r\n더불어민주당 경기도당 수석대변인\r\n\r\n더불어민주당 을지로위원회 상임위원\r\n\r\n제21대 국회 전반기 정무위원회 위원\r\n\r\n\r\n-     경       력     -\r\n\r\n(前)더불어민주당 검찰공정수사촉구특별위원회위원 \r\n\r\n(前)국가균형발전위원회 국민소통 특별위원\r\n\r\n(前)더불어민주당 을지로위원회 부위원장\r\n\r\n(前)더불어민주당 중앙당선거관리위원회 위원\r\n\r\n(前)2011년, 2014년 박원순 서울시장후보 법률지원단장 \r\n\r\n(前)서울특별시의회 입법 법률 고문\r\n\r\n(前)안양 부안초등학교 운영위원장\r\n\r\n(前)민주사회를위한변호사모임 민생경제위 간사\r\n\r\n(前)서울시 도시주택분과 정책자문위원\r\n\r\n(前)대한변호사협회 재개발·재건축 법률지원변호사\r\n\r\n(前)법무법인 &#039민본&#039 대표 변호사\r\n\r\n사법연수원 34기 \r\n\r\n전남 해남출생(1970년), 서울대 정치학과 졸업 ",
        ASSEM_ADDR: "의원회관 927호",
    },
    {
        HG_NM: "민형배",
        HJ_NM: "閔馨培",
        ENG_NM: "MIN HYUNGBAE",
        BTH_GBN_NM: "음",
        BTH_DATE: "1961-06-15",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "광주 광산구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "정무위원회",
        CMITS: "정무위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-6788-6426",
        E_MAIL: "mhb1961@naver.com",
        HOMEPAGE: "https://blog.naver.com/gjminsim",
        STAFF: "김지성, 이정기",
        SECRETARY: "박수미, 윤영일",
        SECRETARY2: "정호윤, 양경민, 이창우, 김단야, 최진영",
        MONA_CD: "VRY5522V",
        MEM_TITLE: "■ 학력\r\n-목포고 졸업\r\n-전남대학교 사회학 박사\r\n\r\n■ 주요경력\r\n(현) 제21대 국회의원(광주 광산구을)\r\n(현) 국회 정무위원회 위원\r\n\r\n(현) 더불어민주당 광주 광산구을 지역위원장 \r\n(현) 더불어민주당 사회적경제위원회 위원장\r\n(현) 더불어민주당 탄소중립특별위원회 위원\r\n(현) 더불어민주당 미디어혁신특별위원회 위원\r\n(현) 더불어민주당 을지로위원회 위원 \r\n(현) 더불어민주당 산업재해예방TF 위원  \r\n\r\n(전) 문재인 대통령 사회정책비서관\r\n(전) 문재인 대통령 자치발전비서관\r\n(전) 광주광역시 광산구청장 \r\n(전) 노무현 대통령 사회조정비서관\r\n\r\n■ 저서\r\n-2019. 정치의 반전을 꿈꾸다 (메디치미디어)\r\n-2017. 광주의 권력 (단비P&amp;B)\r\n-2015. 내일의 권력 (단비P&amp;B)\r\n-2013. 자치가 진보다 (메디치미디어)\r\n\r\n■ 좌우명\r\n-화이부동 (和而不同)\r\n",
        ASSEM_ADDR: "의원회관 534호",
    },
    {
        HG_NM: "민홍철",
        HJ_NM: "閔洪喆",
        ENG_NM: "MIN HONGCHUL",
        BTH_GBN_NM: "양",
        BTH_DATE: "1961-04-18",
        JOB_RES_NM: "위원장",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경남 김해시갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국방위원회",
        CMITS: "국방위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6490",
        E_MAIL: null,
        HOMEPAGE: "http://www.민사랑.com/",
        STAFF: "김대승, 오연달",
        SECRETARY: "한주연",
        SECRETARY2: "이상헌, 임주성, 이상훈, 류주연",
        MONA_CD: "O6D8329R",
        MEM_TITLE: "[학 력]  \r\n\r\n 김해동광초등학교 졸업 \r\n 김해중학교 졸업\r\n 김해고등학교 졸업\r\n 부산대학교 법학과 졸업\r\n 부산대학교 대학원 법학과 졸업(법학석사)\r\n\r\n[경 력] \r\n제21대 국회의원(3선, 경남 김해시갑)\r\n국회 국방위원회 위원장\r\n\r\n (前) 육군 법무감(준장)\r\n (前) 고등군사법원 법원장\r\n (前) 국방부 인사소청위원회 위원장 \r\n (前) 중앙행정심판위원회 비상임위원\r\n\r\n (前) 제19,20대 국회의원\r\n (前) 더불어민주당 경상남도당 위원장\r\n (前) 더불어민주당 제2정책조정위원장\r\n (前) 더불어민주당 최고위원\r\n (前) 더불어민주당 제4차 정기전국대의원대회 선거관리위원장(2020.05.29.~08.29)\r\n (前) 국회 국토교통위원회 간사\r\n (前) 국회 국방위원회 간사\r\n (前) 국회 평창동계올림픽 및 국제경기대회지원 특별위원회 위원\r\n (前) 국회 예산결산특별위원회 위원(2012, 2014, 2015, 2017년, 2018년)\r\n (前) 대법관 인사청문특위 간사\r\n (前) 국회 국토교통위원회 간사\r\n (前) 국회 남북경제협력특별위원회 위원\r\n (前) 국회 군 인권개선 및 병영문화혁신특별위원회 위원\r\n (前) 국회 지방자치발전특별위원회 위원\r\n (前) 국회 세월호 침몰사고 진상규명을 위한 국정조사 특별위원회 위원\r\n (前) 새정치민주연합 원내부대표\r\n (前) 민주당 수석사무부총장",
        ASSEM_ADDR: "본청 421호(국방위원장실)/ 의원회관 554호",
    },
    {
        HG_NM: "박광온",
        HJ_NM: "朴洸瑥",
        ENG_NM: "PARK KWANGON",
        BTH_GBN_NM: "양",
        BTH_DATE: "1957-03-26",
        JOB_RES_NM: "위원장",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 수원시정",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "법제사법위원회",
        CMITS: "법제사법위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-5364",
        E_MAIL: "sotong533@gmail.com",
        HOMEPAGE: "http://blog.naver.com/kopark2012",
        STAFF: "이용국, 이한돌",
        SECRETARY: "신청수, 홍순웅",
        SECRETARY2: "차진완, 오영하, 한소진, 김세린",
        MONA_CD: "K3W33496",
        MEM_TITLE: "MBC 도쿄 특파원, 앵커, 보도국 통일외교부장, 정치국제에디터, 논설위원, 보도국장\r\n제18대 대통령 선거 문재인대통령후보 선거대책위원회 대변인\r\n민주당 홍보위원장\r\n새정치민주연합 대변인\r\n제19대 국회의원\r\n제19대 국회 기획재정위원회 위원\r\n제19대 국회 운영위원회 위원\r\n새정치민주연합 원내부대표\r\n더불어민주당 문재인 당대표 비서실장\r\n현) 제20대 국회의원\r\n더불어민주당 수석대변인\r\n국정기획자문위원회 대변인 겸 경제분과 위원\r\n국회 기획재정위원회 간사\r\n국회 예산결산특별위원회 위원\r\n더불어민주당 국민연금 공공투자정책추진 특별위원회 위원장\r\n더불어민주당 제3정조위 위원장\r\n더불어민주당 경기도당 위원장\r\n현)국회 과학기술정보방송통신위원회 위원\r\n현)더불어민주당 최고위원",
        ASSEM_ADDR: "의원회관 533호",
    },
    {
        HG_NM: "박대수",
        HJ_NM: "朴大壽",
        ENG_NM: "PARK DAESOO",
        BTH_GBN_NM: "양",
        BTH_DATE: "1960-08-30",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "환경노동위원회",
        CMITS: "환경노동위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-1238",
        E_MAIL: null,
        HOMEPAGE: null,
        STAFF: "박현영, 한길완",
        SECRETARY: "윤창혁, 윤태식",
        SECRETARY2: "최미아, 한상훈, 김영춘, 권세현, 서유진",
        MONA_CD: "B7H6207C",
        MEM_TITLE: "[경력사항]\r\n- 現 국민의힘 노동위원회 위원장\r\n- 現 제21대 국회 전반기 환경노동위원회 위원\r\n- 現 제21대 국회의원 (비례대표/국민의힘)\r\n- 前 미래통합당 노동위원회 위원장\r\n- 前 제21대 국회의원 (비례대표/미래통합당)\r\n- 前 최저임금위원회 근로자위원\r\n- 前 경제사회발전노사정위원회 노동시장구조개선특별위원회 위원\r\n- 前 서울지방노동위원회 근로자위원\r\n- 前 서울시자원봉사센터 이사\r\n- 前 한국노동조합총연맹 서울특별시지역본부 의장\r\n- 前 전국연합노동조합연맹 부위원장\r\n- 前 대한항공노동조합 위원장\r\n\r\n[학력사항]\r\n- 한국항공대학교 대학원 항공경영학 석사",
        ASSEM_ADDR: "의원회관 622호",
    },
    {
        HG_NM: "박대출",
        HJ_NM: "朴大出",
        ENG_NM: "PARK DAECHUL",
        BTH_GBN_NM: "음",
        BTH_DATE: "1961-03-18",
        JOB_RES_NM: "위원장",
        POLY_NM: "국민의힘",
        ORIG_NM: "경남 진주시갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "환경노동위원회",
        CMITS: "환경노동위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6750",
        E_MAIL: "dcparkjj@assembly.go.kr",
        HOMEPAGE: "http://blog.naver.com/dcparkjj",
        STAFF: "김성욱, 최두식",
        SECRETARY: "박선후, 정진효",
        SECRETARY2: "황승호, 김세아, 심효은, 김윤재",
        MONA_CD: "W4X85128",
        MEM_TITLE: "<학력> \r\n·진주고등학교 졸업(49회) \r\n·연세대학교 정치외교학과 졸업 \r\n·연세대학교 행정대학원 졸업 \r\n\r\n<경력> \r\n·새누리당 대변인\r\n·국회 미래창조과학방송통신위원회 위원 \r\n·국회 예산·결산특별위원회 위원\r\n·진주·부산 발전협의회 고문 \r\n·前 새누리당 원내부대표\r\n·前 국회 운영위원회 위원 \r\n (국회방송심의소위원회 위원장) \r\n·前 서울신문 정치부장 \r\n·前 서울신문 논설위원 \r\n·前 부경대학교 겸임교수 ",
        ASSEM_ADDR: "의원회관 802호",
    },
    {
        HG_NM: "박덕흠",
        HJ_NM: "朴德欽",
        ENG_NM: "PARK DUKHYUM",
        BTH_GBN_NM: "음",
        BTH_DATE: "1953-10-18",
        JOB_RES_NM: "위원",
        POLY_NM: "무소속",
        ORIG_NM: "충북 보은군옥천군영동군괴산군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "농림축산식품해양수산위원회",
        CMITS: "농림축산식품해양수산위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6550",
        E_MAIL: "parkdukhyum@naver.com",
        HOMEPAGE: null,
        STAFF: "김필수, 전상인",
        SECRETARY: "박현문, 유대종",
        SECRETARY2: "정서영, 최윤희, 이동구, 오세현, 송혜민",
        MONA_CD: "N4R2421C",
        MEM_TITLE: "한양대학교 토목공학 박사\r\n\r\n국회 환경노동위원회 위원\r\n\r\n전 ) 충청북도 스카우트연맹 연맹장\r\n전) 제20대 국회 후반기 국토교통위원회 간사\r\n전) 제20대 국회 후반기 예산결산특별위원회 위원\r\n전) 자유한국당 정책위 부의장\r\n전) 자유한국당 총선기획단 위원\r\n전) 자유한국당 비상대책위원회 위원\r\n전) 재난안전대책특별위원회 위원\r\n전) 자유한국당 충북도당 위원장\r\n전) 새누리당 조직부총장 \r\n전) 새누리당 중앙연수원 원장\r\n전) 새누리당 충북도당 위원장\r\n전) 새누리당 재해대책위원회 위원장\r\n전) 대한전문건설협회 중앙회 회장\r\n",
        ASSEM_ADDR: "의원회관 604호",
    },
    {
        HG_NM: "박범계",
        HJ_NM: "朴範界",
        ENG_NM: null,
        BTH_GBN_NM: "음",
        BTH_DATE: "1963-04-27",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "대전 서구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "환경노동위원회",
        CMITS: "환경노동위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6960",
        E_MAIL: null,
        HOMEPAGE: "http://www.bkfire.co.kr/",
        STAFF: "문병남, 윤종우",
        SECRETARY: "강래원",
        SECRETARY2: "정영모, 강대우, 최수아, 최미나",
        MONA_CD: "7R156073",
        MEM_TITLE: "2021. 1. ~ 제68대 법무부장관\r\n2021. 2. ~ 제21대 국회 환경노동위원회 위원\r\n2020. 6. ~ 2021. 1. 제21대 국회 법제사법위원회 위원\r\n2018. 11. ~ 20220. 11. 더불어민주당 당무감사원장\r\n2018. 더불어민주당 수석대변인\r\n2018. 1. ~ 2018. 6. 제20대 국회 사법개혁특별위원회 간사\r\n2017. 7. ~ 2018. 2. 더불어민주당 최고위원\r\n2017. 5. ~ 2017. 7. 국정기획자문위 정치행정분과위원장\r\n2016. 11. ~ 2017. 1.제20대 국회 박근혜 정부의 최순실 등 민간인에 의한 국정농단 의혹사건 진상규명을 위한 국정조사 특별위원회 간사\r\n2016. 6. ~ 2017. 9.제20대 국회 법제사법위원회 간사\r\n2013. 6. ~ 2013. 8.제19대 국회 국가정보원 댓글 의혹 사건 등의 진상규명을 위한 국정조사 특별위원회 위원\r\n2012. 7. ~ 2014. 5.제19대 국회법제사법위원회 위원\r\n2003. 청와대 민정2비서관, 법무비서관\r\n2003. 대법원 사법개혁위원회 간사\r\n2001. 3. ~ 2002. 10. 대전지방법원 판사\r\n1998. 3. ~ 2001. 2. 전주지방법원 판사\r\n1996. 4. ~ 1998. 3. 서울지방법원 판사\r\n1994. 2. ~ 1996. 3. 서울지방법원 남부지원 판사\r\n1991. 제33회 사법시험 합격\r\n1985. 3. ~ 1989. 2. 연세대학교 법학과",
        ASSEM_ADDR: "의원회관 837호",
    },
    {
        HG_NM: "박병석",
        HJ_NM: "朴炳錫",
        ENG_NM: "PARK BYEONGSEUG",
        BTH_GBN_NM: "양",
        BTH_DATE: "1952-01-25",
        JOB_RES_NM: "위원",
        POLY_NM: "무소속",
        ORIG_NM: "대전 서구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "외교통일위원회",
        CMITS: null,
        REELE_GBN_NM: "6선",
        UNITS: "제16대, 제17대, 제18대, 제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-6788-6461",
        E_MAIL: "pbs2100@gmail.com",
        HOMEPAGE: null,
        STAFF: "박승규, 송석근",
        SECRETARY: "김민숙, 좌승택",
        SECRETARY2: "이영해, 조연길, 최지연, 임규보, 이초롱",
        MONA_CD: "BLC8630L",
        MEM_TITLE: "대전고,\r\n성균관대법대졸,\r\n한양대신방과박사과정,\r\n워싱턴대(UW)초빙연구원,\r\n중앙일보홍콩특파원부국장겸경제부장,\r\n서울시정무부시장,\r\n민주당원내부총무·총재특보,\r\n민주당 대변인,\r\n예산결산특별위원회 간사\r\n열린우리당 행복중심복합도시 건설특별위원장\r\n정무위원회 위원장\r\n국회부의장(19대 전반기)",
        ASSEM_ADDR: "의원회관 804호",
    },
    {
        HG_NM: "박상혁",
        HJ_NM: "朴商赫",
        ENG_NM: "PARK SANGHYUK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1973-03-20",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 김포시을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국토교통위원회",
        CMITS: "국토교통위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2417~9",
        E_MAIL: "gimpo_park@naver.com",
        HOMEPAGE: null,
        STAFF: "손현우, 송봉빈",
        SECRETARY: "송동민, 장윤순",
        SECRETARY2: "이교영, 박현규, 안진성, 오성환, 김기윤",
        MONA_CD: "HXT76735",
        MEM_TITLE: "2013 경찰대학교 외래교수\r\n\r\n2014 ~ 2016 법무법인 창조 변호사\r\n \r\n2013 ~ 2015 서울특별시의회 입법 법률 고문\r\n\r\n2016 ~ 2017 서울특별시 정무보좌관\r\n\r\n2017 ~ 2019  문재인정부 청와대 대통령비서실 행정관\r\n\r\n2019 ~ 2020 김포와더불어 박상혁 법률사무소 대표변호사\r\n\r\n2020.05 ~ 제21대 경기 김포시을 국회의원\r\n\r\n2020.07 ~ 제21대 국회 전반기 국토교통위원회 위원\r\n\r\n2020.09 ~ 2021.04 제21대 국회 전반기 국회운영위원회 위원\r\n\r\n2020.09 ~ 2021.04 더불어민주당 원내부대표",
        ASSEM_ADDR: "의원회관 817호",
    },
    {
        HG_NM: "박성민",
        HJ_NM: "朴聖敏",
        ENG_NM: "PARK SEONGMIN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1959-04-19",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "울산 중구",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국토교통위원회",
        CMITS: "국토교통위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-1258",
        E_MAIL: "smpark3340@naver.com",
        HOMEPAGE: "http://blog.naver.com/usmpark ",
        STAFF: "김정식, 김태형",
        SECRETARY: "김고은, 윤정준",
        SECRETARY2: "안현진, 정강수, 나소영, 지은영, 김도헌",
        MONA_CD: "X3170462",
        MEM_TITLE: "[ 학 력 ] \r\n- 울산대학교 정책대학원 행정학 석사\r\n- 울산대학교 행정학 학사\r\n\r\n[ 약 력 ] \r\n- 現 국민의힘 원내부대표\r\n- 現 국민의힘 울산광역시당 위원장\r\n- 現 제21대 국회 국토교통위원회 예산결산기금심사소위원회 위원장\r\n- 現 제21대 국회 국토교통위원회 위원\r\n- 現 제21대 국회의원(울산 중구 / 국민의힘)\r\n- 前 전국시장·군수·구청장협의회 회장\r\n- 前 민선 5·6기 울산 중구청장\r\n- 前 울산광역시 중구의회 의장\r\n",
        ASSEM_ADDR: "의원회관 1008호",
    },
    {
        HG_NM: "박성준",
        HJ_NM: "朴省俊",
        ENG_NM: "PARK SUNGJOON",
        BTH_GBN_NM: "음",
        BTH_DATE: "1969-04-23",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 중구성동구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "법제사법위원회",
        CMITS: "법제사법위원회, 감사원장(최재해) 임명동의에 관한 인사청문특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-8430",
        E_MAIL: "pksjoffice@naver.com",
        HOMEPAGE: "https://blog.naver.com/pksjoffice",
        STAFF: "고수석, 한현규",
        SECRETARY: "고우영, 이재민",
        SECRETARY2: "양원선, 박상욱, 김형준, 박민정, 이찬웅",
        MONA_CD: "IL74008M",
        MEM_TITLE: "1996 2011 KBS 아나운서\r\n2011~2020 JTBC 아나운서\r\n2020.05~제21대 국회의원(서울중구성동구을)\r\n2020.07~제21대 국회 전반기 국회운영위원회 위원\r\n2020.07~2021.01 제21대 국회 전반기 국방위원회 위원\r\n2021.01~제21대 국회 전반기 법제사법위원회 위원",
        ASSEM_ADDR: "의원회관 324호",
    },
    {
        HG_NM: "박성중",
        HJ_NM: "朴成重",
        ENG_NM: "PARK SUNGJOONG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1958-08-01",
        JOB_RES_NM: "간사",
        POLY_NM: "국민의힘",
        ORIG_NM: "서울 서초구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "과학기술정보방송통신위원회",
        CMITS: "과학기술정보방송통신위원회, 언론·미디어 제도개선 특별위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-4364",
        E_MAIL: "sjpark101@hanmail.net",
        HOMEPAGE: "http://blog.naver.com/sjpark580801",
        STAFF: "박창삼, 옥동석",
        SECRETARY: "김재헌, 박소연",
        SECRETARY2: "유재원, 신석훈, 김미정, 이형준, 조경원",
        MONA_CD: "DAN6731C",
        MEM_TITLE: "<경력>\r\n국민의힘 서울특별시당 위원장(현)\r\n국회 과학기술정보방송통신위원회 간사(현)\r\n자유한국당 미디어특별위원회 공동위원장(전)\r\n심산김창숙선생기념사업회 회장(전)\r\n자유한국당 홍보본부장(전)\r\n국회 안전행정위원회 간사(전)\r\n국회 예산결산특별위원회 위원(전)\r\n서초구청장(전)\r\n사랑의 열매 사무총장(전)\r\n육군학사장교 총동문회장(전)\r\n대통령 비서실 행정관(전)\r\n행정고시 23회\r\n\r\n<학력>\r\n성균관대학교 행정학과 학사\r\n서울대학교 행정대학원 석사\r\n성균관대학교 도시행정학 박사",
        ASSEM_ADDR: "의원회관 936호",
    },
    {
        HG_NM: "박수영",
        HJ_NM: "朴洙瑩",
        ENG_NM: "PARK SOOYOUNG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1964-01-07",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "부산 남구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "정무위원회",
        CMITS: "정무위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-3760",
        E_MAIL: "psyfor2020@naver.com",
        HOMEPAGE: "http://blog.naver.com/psyfor2020",
        STAFF: "김현태, 박기업",
        SECRETARY: "안성완, 오현석",
        SECRETARY2: "김현민, 김다솜, 안지용, 김재영, 박세민",
        MONA_CD: "FU87526G",
        MEM_TITLE: "□ 주요경력\r\n- 한반도선진화재단 대표(2018.9.~2020.5.)\r\n- 매일경제신문 칼럼니스트(2016.1.~2019.12.)\r\n- 아주대학교 공공정책대학원 초빙교수(2015.10.~2019.2.)\r\n- 경기도 행정1부지사(2013.4.~2015.9.)\r\n- 경기도 기획조정실장(2010.9.~2012.1.)\r\n- 경기도 경제투자실장(2009.11.~2010.9.)\r\n- 안전행정부 인사기획관(2008.5.~2009.11.)\r\n- 안전행정부 혁신정책관(2008.3.~2008.5.)\r\n- 중앙인사위원회 성과후생국장(2007.10.~2008.3.)\r\n- 대통령비서실 인사수석실 선임행정관(2005.7.~2006.2.)\r\n※제29회 행정고등고시 합격(1985.11.)\r\n\r\n□ 주요학력\r\n- 버지니아 폴리테크닉 주립대학교(행정학 박사)\r\n- 하버드대학교(정책학 석사)\r\n- 서울대학교 행정대학원(행정학 석사)\r\n- 서울대학교 법과대학(법학사)\r\n",
        ASSEM_ADDR: "의원회관 437호",
    },
    {
        HG_NM: "박영순",
        HJ_NM: "朴英淳",
        ENG_NM: "PARK YOUNGSOON",
        BTH_GBN_NM: "음",
        BTH_DATE: "1964-12-07",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "대전 대덕구",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국토교통위원회",
        CMITS: "국토교통위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2066",
        E_MAIL: "pys6427@naver.com",
        HOMEPAGE: "http://blog.naver.com/ysb3860",
        STAFF: "서영완, 정동규",
        SECRETARY: "이태주, 최은희",
        SECRETARY2: "최계영, 정연호, 서은정, 오해인, 김지인",
        MONA_CD: "40S1959J",
        MEM_TITLE: "충남대 영어영문학과 졸업\r\n\r\n제21대 국회의원 (더불어민주당, 대전대덕구)\r\n현) 국회 국토교통위원회 위원\r\n현) 더불어민주당 대전광역시당 위원장\r\n현) 더불어민주당 을지로위원회 위원\r\n\r\n전) 노무현대통령 청와대 행정관\r\n전) 문재인대통령 청와대 선임행정관\r\n전) 대전광역시 정무부시장\r\n전) 충남대학교 총학생회장",
        ASSEM_ADDR: "의원회관 430호",
    },
    {
        HG_NM: "박완수",
        HJ_NM: "朴完洙",
        ENG_NM: "PARK WANSU",
        BTH_GBN_NM: "양",
        BTH_DATE: "1955-08-26",
        JOB_RES_NM: "간사",
        POLY_NM: "국민의힘",
        ORIG_NM: "경남 창원시의창구",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "행정안전위원회",
        CMITS: "행정안전위원회, 중앙선거관리위원회 위원(문상부) 선출에 관한 인사청문특별위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-7773",
        E_MAIL: "wansu705@naver.com",
        HOMEPAGE: null,
        STAFF: "이영일, 전정배",
        SECRETARY: "강석, 차형보",
        SECRETARY2: "박정희, 최지윤, 박성준, 조승우, 김소영",
        MONA_CD: "D0C85236",
        MEM_TITLE:
            "2020.07 ~ 제21대 국회전반기 행정안전위원회간사\r\n2020.05 ~ 제21대 국회의원(경남 창원시의창구/국민의힘)\r\n2020.02 미래통합당 사무총장\r\n2020.02 ~ 2020.05 제20대 국회의원 (경남 창원시의창구/미래통합당)\r\n2019.12 ~ 2020.02 자유한국당 사무총장\r\n2019.04 자유한국당 신정치혁신특별위원회 공천혁신소위원회 위원\r\n2019.01 제20대 국회 후반기 행정안전위원회 위원\r\n2018.07 ~ 2019.01 제20대 국회 후반기 국토교통위원회 위원\r\n2017.02 자유한국당 비상대책위원회 위원\r\n2017.02 자유한국당 지방자치위원회 위원장\r\n2017.02 ~ 2020.02 제20대 국회의원 (경남 창원시의창구/자유한국당)\r\n2017.01 ~ 2017.02 새누리당 비상대책위원회 위원\r\n2016.12 새누리당 최고위원\r\n2016.09 ~ 2017.02 새누리당 지방자치위원회 위원장\r\n2016.07 제20대 국회 민생경제특별위원회 위원\r\n2016.06 제20대 국회 전반기 국토교통위원회 위원\r\n2016.05 ~ 2017.02 제20대 국회의원 (경남 창원시의창구/새누리당)\r\n2014.10 ~ 2015.12 제6대 인천국제공항공사 사장\r\n2010.07 ~ 2014.02 제1대 경상남도 창원시 시장\r\n~ 2014.02 세계생태교통연맹 초대의장\r\n2009.06 국제교육도시연합 아시아태평양네트워크 의장\r\n2007.11 ~ 2014.01 세계지방자치단체연합 세계위원\r\n2006 ~ 2010.06 제20대 경상남도 창원시 시장\r\n2004 ~ 2005 제19대 경상남도 창원시 시장\r\n2003 가야대학교 행정대학원 원장\r\n경상남도 김해시 부시장\r\n경상남도청 농정국 국장\r\n경상남도청 경제통상국 국장\r\n경상남도 합천군 군수\r\n1979 제23회 행정고등고시 합격",
        ASSEM_ADDR: "의원회관 705호",
    },
    {
        HG_NM: "박완주",
        HJ_NM: "朴完柱",
        ENG_NM: "PARK WANJOO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1966-11-10",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "충남 천안시을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "행정안전위원회",
        CMITS: "행정안전위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-7560",
        E_MAIL: "lasco21@hanmail.net",
        HOMEPAGE: "http://blog.naver.com/withwanju/",
        STAFF: "김경희, 송노한",
        SECRETARY: "구형서, 정지혜",
        SECRETARY2: "남지혜, 최혜원, 최승연, 이다정, 방주영",
        MONA_CD: "A3H7195R",
        MEM_TITLE: "[약력]\r\n\r\n■ (현)제19·20대·21대 국회의원\r\n■ (현)더불어민주당 정책위의장\r\n■ (현)한국아동인구환경의원연맹 부회장\r\n■ (전)국회 농림축산식품해양수산위원회 간사 및 농림법안소위 위원장 \r\n■ (전)더불어민주당 최고위원\r\n■ (전)더불어민주당 충남도당위원장\r\n■ (전)더불어민주당 수석대변인\r\n■ (전)더불어민주당 원내수석부대표\r\n■ (전)국회 예산결산특별위원회 위원 \r\n■ (전)국회 정치개혁특별위원회 위원 \r\n■ (전)새정치민주연합 원내대변인\r\n■ (전)제20대 국회운영위원회 위원\r\n■ (전)제20대 국회 예산결산특별위원회 위원\r\n■ (전)제19대 국회산업통상자원위원회 위원\r\n■ (전)해외자원개발 진상규명을 위한 국정조사특별위원회 위원\r\n■ (전)새정치민주연합 원내기획부대표\r\n■ (전)국회여성가족위원회 위원\r\n■ (전)국회지속가능발전특별위원회 위원\r\n■ (전)허베이스피리트호 유류피해대책특별위원회 위원\r\n■ (전)대한장애인당구협회 회장\r\n■ (전)아.태정치학회 고문\r\n■ (전)문재인 대통령 후보 선대위 총무 부본부장\r\n■ (전)민주당 중앙당 부대변인\r\n■ (전)민주당 충남도당 대변인\r\n■ (전)민주당 행복도시 원안사수 특별위원회 부위원장\r\n\r\n\r\n[학력]\r\n■ 천안 직산 삼은초등학교(6회)\r\n■ 천안중학교(31회)\r\n■ 천안 중앙고등학교(15회)\r\n■ 성균관대학교 한국철학과(`89 부총학생회장)",
        ASSEM_ADDR: "의원회관 702호",
    },
    {
        HG_NM: "박용진",
        HJ_NM: "朴用鎭",
        ENG_NM: "PARK YONGJIN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1971-04-17",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 강북구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "정무위원회",
        CMITS: "정무위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-9721",
        E_MAIL: "gangbuk24@gmail.com",
        HOMEPAGE: null,
        STAFF: "박상필, 이시성",
        SECRETARY: "박수빈, 홍석현",
        SECRETARY2: "박찬호, 강기철, 김민영, 김민하, 서다은, 최인준",
        MONA_CD: "PEP6922S",
        MEM_TITLE: "성균관대학교 사회학 학사\r\n성균관대학교 국정관리대학원 행정학 석사\r\n\r\n전) 민주당 대변인\r\n전) 새정치민주연합 홍보위원장\r\n전) 더불어민주당 정책위원회 부의장\r\n전) 더불어민주당 비상대책위 대표 비서실장\r\n전) 더불어민주당 원내부대표\r\n전) 국회 4차산업혁명특별위원회 간사",
        ASSEM_ADDR: "의원회관 428호",
    },
    {
        HG_NM: "박재호",
        HJ_NM: "朴在昊",
        ENG_NM: "PARK JAEHO",
        BTH_GBN_NM: "양",
        BTH_DATE: "1959-02-13",
        JOB_RES_NM: "간사",
        POLY_NM: "더불어민주당",
        ORIG_NM: "부산 남구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "행정안전위원회",
        CMITS: "행정안전위원회, 중앙선거관리위원회 위원(문상부) 선출에 관한 인사청문특별위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-5512",
        E_MAIL: "2016pjh@gmail.com",
        HOMEPAGE: "http://blog.naver.com/pjh0586",
        STAFF: "김남원, 이수경",
        SECRETARY: "김미애, 노영명",
        SECRETARY2: "김대평, 장수정, 이은제, 박찬, 도선호",
        MONA_CD: "QUO78839",
        MEM_TITLE:
            "[학력] \r\n1977년 부산 동성고졸업 \r\n1987년 부산외국어대학교 졸업\r\n1997년 중앙대학교 행정대학원 졸업\r\n\r\n[수상]\r\n2020 더불어민주당 국정감사 우수의원상\r\n2020 부산그린트러스트 초록의정상\r\n2019 환경운동연합 우수환경의원(국토생태분야)\r\n2019 더불어민주당 국정감사 우수의원상\r\n2018 더불어민주당 국정감사 우수의원상\r\n2017 환경운동연합 최우수환경의원(탈핵분야)\r\n2017 자랑스러운 동성인상\r\n2017 부산로봇산업협회 감사패\r\n2017 소상공인연합회 초정상\r\n2017 원자력안전상\r\n2016 원자력안전상\r\n2016 국회를 빛낸 바른 언어상\r\n2016 환경운동연합 우수환경의원(탈핵원전안전 분야)\r\n1998 홍조근정훈장\r\n\r\n[저서] \r\n&#039대한민국 공기업에 고함&#039(2008) \r\n&#039당신이 선물입니다&#039(2013)\r\n\r\n[경력사항]\r\n2020년 제21대 국회의원 (부산 남구을 / 더불어민주당)\r\n2020년 제21대 국회 전반기 행정안전위원회 위원\r\n2019년 더불어민주당 주거복지특별위원회 위원장\r\n2019년 동남권 관문공항 추진기획단 공동기획단장\r\n2018년 민선 7기 부산시장직 인수위원회 인수위원장\r\n2018년 제20대 국회 후반기 국토교통위원회 위원\r\n2017년 더불어민주당 제19대 문재인 대통령후보 중앙선거대책위원회 지역균형정책위원회 부위원장\r\n2017년 더불어민주당 조직강화특별위원회 위원\r\n2017년 제20대 국회 예산결산특별위원회 위원\r\n2017년 더불어민주당 정책위원회 상임부의장\r\n2016년 국회 윤리특별위원회 위원\r\n2016년 국회 정치발전특별위원회 위원\r\n2016년 국회 미래도시창생과재생을위훤연구모임 대표\r\n2016년 국회 탈핵에너지전환 국회의원 모임 위원\r\n2016년 더불어민주당 을지로위원회 운영위원\r\n2016년 제20대 국회 전반기 산업통상자원중소벤처기업위원회 위원\r\n2016년 제20대 국회의원 (부산 남구을 / 더불어민주당)\r\n2012년 민주통합당, 민주당, 새정치민주연합 부산시당 위원장\r\n2012년 민주통합당 제18대 대통령선거 부산선대위 상임선대위원장\r\n2005년 국민체육진흥공단 이사장\r\n2003년 참여정부 대통령 비서실 정무2비서관\r\n1995년 문민정부 대통령 비서실 총무 인사 비서관\r\n1988년 서석재 前국회의원 보좌관\r\n\r\n",
        ASSEM_ADDR: "의원회관 737호",
    },
    {
        HG_NM: "박정",
        HJ_NM: "朴釘",
        ENG_NM: "PARK JEUNG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1962-11-19",
        JOB_RES_NM: "간사",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 파주시을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "문화체육관광위원회",
        CMITS: "문화체육관광위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-3781",
        E_MAIL: "pjkorea21c@naver.com",
        HOMEPAGE: "http://blog.naver.com/pjkorea21c",
        STAFF: "서정민, 홍창훈",
        SECRETARY: "염민규, 한천수",
        SECRETARY2: "권민준, 성민채, 박경덕, 이효동, 고현조",
        MONA_CD: "4019850M",
        MEM_TITLE:
            "● 학력 \r\n- 파주 금촌초·문산동중, 동인천고 졸업\r\n- 서울대 학사·서울대 대학원 석사\r\n- 중국 국립무한대 국제관계학 박사\r\n\r\n● 경력 \r\n- 국회 문화체육관광위원회 간사\r\n- 국회 외교통일위원회 간사(전)\r\n- 더불어민주당 상생형지역일자리특별위원회 위원\r\n- 더불어민주당 당현대화추진특별위원회 위원\r\n- 더불어민주당 한반도경제통일교류특별위원회 간사\r\n- 더불어민주당 지방혁신균형발전추진단 접경지역분과위원회 추진위원\r\n- 더불어민주당 동북아평화협력특별위원회 위원\r\n- 더불어민주당 정책위원회 상임부의장\r\n- 국회 윤리특별위원회 위원(전)\r\n- 국회 산업통상자원중소벤처기업위원회 위원(전)\r\n- 국회 청년미래특별위원회 위원\r\n- 대통령직속 북방경제협력위원회 특별고문\r\n- 제19대 대통령선거 더불어민주당 문재인후보 중앙선거대책위원회 총괄본부장\r\n- 세계한인민주회의 부의장\r\n- 더불어민주당 경기도당 수석부위원장\r\n- 더불어민주당 100일 민생상황실 일자리창출팀장(전)\r\n- 더불어민주당 원내부대표(전)\r\n- 더불어민주당 청년일자리TF 간사(전)\r\n- 더불어민주당 파주을 지역위원장\r\n- 더불어민주당 원외협의회장(전)\r\n- 더불어민주당 남북교류협력특위 부위원장(전)\r\n- 새정치민주연합 국제위원장(전)\r\n- 민주당 교육복지특별위원장(전)\r\n- 민주당 정책위원회 부의장(전)\r\n- 참여정부 대통령 직속 동북아시대위 자문위원(전)\r\n- 중국 국립우한대 객좌교수(전)\r\n- 고려대 뇌공학연구소 연구교수(전)\r\n- 서울신문 명예논설위원(전)\r\n- 서울대 파주·고양 총동문회 회장(전)\r\n- PJ실버 합창단 이사장(전)\r\n- 파주시 새마을 지회장(전)\r\n- 파주시 축구협회 회장(전)\r\n- 파주시 야구협회 회장(전)\r\n- 박정어학원 CEO(전)\r\n- 박씨 대종친회 파주시 회장(신라오릉보존회)(전)\r\n",
        ASSEM_ADDR: "의원회관 318호",
    },
    {
        HG_NM: "박주민",
        HJ_NM: "朴柱民",
        ENG_NM: "PARK JUMIN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1973-11-21",
        JOB_RES_NM: "간사",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 은평구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "법제사법위원회",
        CMITS: "법제사법위원회, 감사원장(최재해) 임명동의에 관한 인사청문특별위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-8690",
        E_MAIL: "joomincenter@gmail.com",
        HOMEPAGE: "http://www.joomincenter.com",
        STAFF: "김인아, 안진모",
        SECRETARY: "남혜진, 황종섭",
        SECRETARY2: "서지원, 김영진, 최경은",
        MONA_CD: "6AU2417B",
        MEM_TITLE: "○ 학력 \r\n1992년 대원외국어고등학교 중국어과 졸업\r\n1998년 서울대 법학과 졸업\r\n\r\n○ 대표 경력\r\n- 대한민국 공군 중위 전역\r\n- 제45회 사법시험 합격\r\n- 전) 법무법인 이공 변호사\r\n- 전) 민주사회를 위한 변호사모임(민변) 사무차장\r\n- 전) 참여연대 부집행위원장\r\n- 세월호 가족대책위 법률대리인\r\n- 쌍용차 해고 근로자 법률지원\r\n- 촛불집회 관련 야간집회/시위금지 헌법소원\r\n- 노무현 대통령 서거 당시 서울광장 차벽설치 헌법소원\r\n- 한일군사정보협정 관련 정보공개청구소송 등 다수 공익 변호 활동\r\n- 20대 국회 서울 은평갑 국회의원(더불어민주당)\r\n- 전)국회 법제사법위원회·여성가족위원회·헌법개정및정치개혁특위원회 위원\r\n- 전)더불어민주당 정책위원회 부의장\r\n- 전)더불어민주당 적폐청산위원회 위원\r\n- 전)국회 사법개혁특별위위원회 위원\r\n- 전)더불어민주당 국회혁신특별위원회 위원장\r\n- 전)더불어민주당 검찰개혁특별위원회 공동위원장 \r\n- 전)더불어민주당 당현대화추진특별위원회 위원장\r\n- 전)더불어민주당 최고위원\r\n- 현)더불어민주당 세월호특별위원회 위원장 \r\n- 현)국회 법제사법위원회 위원 간사\r\n",
        ASSEM_ADDR: "의원회관 608호",
    },
    {
        HG_NM: "박진",
        HJ_NM: "朴振",
        ENG_NM: "PARK JIN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1956-09-16",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "서울 강남구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "외교통일위원회",
        CMITS: "외교통일위원회, 예산결산특별위원회",
        REELE_GBN_NM: "4선",
        UNITS: "제16대, 제17대, 제18대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-9071",
        E_MAIL: "dolphin1956@naver.com",
        HOMEPAGE: "http://parkjin.kr/",
        STAFF: "김우식, 박진석",
        SECRETARY: "윤석민, 이창훈",
        SECRETARY2: "박민영, 이준희, 이대우, 남보라, 김현정",
        MONA_CD: "QKO6165V",
        MEM_TITLE: "학력\r\n- 경기고등학교 졸업\r\n- 서울대학교 법과대학 법학과 졸업\r\n- 하버드대학교 케네디스쿨 행정학 석사 (MPA)\r\n- 옥스퍼드대학교 정치학 박사 (D.Phil)\r\n- 뉴욕대학교 법학석사 (LLM)\r\n\r\n경력\r\n- 제11회 외무고등고시 합격\r\n- 해군장교 복무\r\n- 영국 뉴캐슬대학교 정치학과 조교수\r\n- 대통령 비서실 공보비서관, 정무비서관\r\n- 미국 뉴욕주 변호사\r\n- 제16대, 17대, 18대 국회의원 (서울 종로)\r\n- 국회외교통상통일위원장\r\n- 한국외국어대학교 석좌교수\r\n- 사단법인 아시아미래연구원 이사장\r\n- 한영협회(Korea-Britain Society) 회장\r\n- 한미협회 (Korea-America Association) 회장\r\n\r\n현직\r\n- 제 21대 국회의원 (서울 강남 을) \r\n- 국민의힘(구 미래통합당) 외교안보 특별위원회 위원장",
        ASSEM_ADDR: "의원회관 846호",
    },
    {
        HG_NM: "박찬대",
        HJ_NM: "朴贊大",
        ENG_NM: "PARK CHANDAE",
        BTH_GBN_NM: "음",
        BTH_DATE: "1967-05-10",
        JOB_RES_NM: "간사",
        POLY_NM: "더불어민주당",
        ORIG_NM: "인천 연수구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "교육위원회",
        CMITS: "교육위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-5477",
        E_MAIL: "parkcd0214@gmail.com",
        HOMEPAGE: "http://blog.naver.com/starhanmia",
        STAFF: "전기은, 한만송",
        SECRETARY: "김종호, 유광종",
        SECRETARY2: "노원선, 양세미, 배진우, 박상현, 김우성",
        MONA_CD: "BT62420K",
        MEM_TITLE: " *학력\r\n-인하대학교 경영학 학사\r\n-서울대학교 대학원 경영학 석사\r\n\r\n*주요경력\r\n-금융감독원 공시 및 회계감독국 근무\r\n-인하대학교 경영학과 겸임교수\r\n-한국 및 미국 공인회계사\r\n-삼일 회계법인 국제부(PWC)근무\r\n-한미회계법인 부대표,경인본부장\r\n-인천환경공단 감사",
        ASSEM_ADDR: "의원회관 815호",
    },
    {
        HG_NM: "박형수",
        HJ_NM: "朴亨修",
        ENG_NM: "PARK HYEUNGSOO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1965-10-20",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "경북 영주시영양군봉화군울진군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "기획재정위원회",
        CMITS: "기획재정위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-4165",
        E_MAIL: "7844165@naver.com",
        HOMEPAGE: null,
        STAFF: "김상현, 박민구",
        SECRETARY: "강신호, 주동근",
        SECRETARY2: "장서현, 김진환, 이강희, 강인구, 조근애",
        MONA_CD: "6U243644",
        MEM_TITLE: "○ 학력\r\n1989.02      서울대학교 법과대학 사법학과 졸업\r\n1984.02      대구 영진고등학교 졸업\r\n1981.02      울진 평해중학교 졸업\r\n\r\n\r\n○ 경력\r\n2020.06 -    제21대 국회의원\r\n2020.07 -    국회 기획재정위원회 위원\r\n2020.07 -    국회 예산결산특별위원회 위원\r\n2020.06 -    국민의힘 영주영양봉화울진 당협위원장\r\n2020.02 -    국민의힘 법률자문위원\r\n\r\n2019.06      자유한국당 법률자문위원(전)\r\n2015.05      대구지체장애인협회 고문변호사(전)\r\n2014.01      대구고등검찰청 부장검사(전)\r\n1993.02      제22기 사법연수원 수료\r\n1990.09      제32회 사법시험 합격",
        ASSEM_ADDR: "의원회관 1018호",
    },
    {
        HG_NM: "박홍근",
        HJ_NM: "朴洪根",
        ENG_NM: "PARK HONGKEUN",
        BTH_GBN_NM: "양",
        BTH_DATE: "1969-10-08",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 중랑구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "기획재정위원회",
        CMITS: "기획재정위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-8370",
        E_MAIL: "maumgil88@gmail.com",
        HOMEPAGE: "http://blog.naver.com/bakhonggeun",
        STAFF: "김동영, 장석원",
        SECRETARY: "김길전, 박승진",
        SECRETARY2: "고강섭, 최광원, 채정임, 허선경, 나채영",
        MONA_CD: "S824682L",
        MEM_TITLE: "제 19,20,21대 국회의원\r\n국회 예산결산특별위원회 위원장\r\n국회 기획재정위원회 위원\r\n동물복지국회포럼 공동대표\r\n정의로운전환, 그린뉴딜의원모임 공동대표\r\n민족화해협력범국민협의회 정책위원장\r\n\r\n\r\n\r\n국회 예산결산특별위원회 간사(前)\r\n더불어민주당 원내수석부대표(前)\r\n국회운영위원회 간사(前)\r\n더불어민주당 을지키는민생실천위원회 위원장(前)\r\n과학기술정보방송통신위원회 간사(前)\r\n새정치민주연합 당대표 비서실장(前)\r\n\r\n",
        ASSEM_ADDR: "의원회관 641호",
    },
    {
        HG_NM: "배준영",
        HJ_NM: "裵俊英",
        ENG_NM: "BAE JUNEYOUNG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1970-10-21",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "인천 중구강화군옹진군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "기획재정위원회",
        CMITS: "예산결산특별위원회, 기획재정위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-5087",
        E_MAIL: null,
        HOMEPAGE: null,
        STAFF: "박종효, 유원종",
        SECRETARY: "박병일, 이영상",
        SECRETARY2: "이소림, 오세준, 임주석, 황희석, 장경석",
        MONA_CD: "QQP4727N",
        MEM_TITLE: "■ 학력 \r\n인하대학교 물류학 박사 수료 \r\n미국 컬럼비아대학교 국제행정대학원 국제관계학 석사 졸업 \r\n연세대학교 정치외교학 졸업 \r\n인천 선인고등학교 졸업 \r\n\r\n■주요경력\r\n \r\n現 제 21대 국회의원(인천 중구·강화군·옹진군)\r\n現 국민의힘 당대변인 \r\n現 교육위원회 · 예결위원회 위원 \r\n現 국민의힘 부동산 정상화특위 위원 \r\n現 한국유네스코위원회 위원 \r\n\r\n미래통합당 원내부대표 (전) \r\n인하대학교 물류전문대학원 겸임교수(전) \r\n인천항만물류협회 회장(전) \r\n국회 대변인실 부대변인(전) \r\n제17대 대통령직 인수위원회 대변인실 상임 자문위원(전) \r\n외교통상부 한미/한EU FTA 전문가 자문단 자문위원(전) \r\n대통령비서실(공보비서실) 행정관(전) ",
        ASSEM_ADDR: "의원회관 829호",
    },
    {
        HG_NM: "배진교",
        HJ_NM: "裵晋敎",
        ENG_NM: "BAE JINGYO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1968-08-26",
        JOB_RES_NM: "위원",
        POLY_NM: "정의당",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "정무위원회",
        CMITS: "정무위원회, 국회운영위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-3080~2",
        E_MAIL: "bjg517@naver.com",
        HOMEPAGE: "https://blog.naver.com/bjg21",
        STAFF: "안창현, 최승원",
        SECRETARY: "공석환, 이연주",
        SECRETARY2: "장용훈, 이덕재, 김은승, 엄예은, 구순례",
        MONA_CD: "A2V51235",
        MEM_TITLE: "○ 인천대학교 대학원 행정학과 석사과정 수료\r\n○ 정의당 원내대표\r\n○ 남동구위원회 위원장 \r\n○ 전) 인천광역시 남동구청장(2010~2014)\r\n○ 전) 인천광역시 교육청 감사관(2014~2015)\r\n○ 전) 6기 정의당 민생본부 본부장\r\n",
        ASSEM_ADDR: "의원회관 517호",
    },
    {
        HG_NM: "배현진",
        HJ_NM: "裵賢鎭",
        ENG_NM: "BAE HYUNJIN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1983-11-06",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "서울 송파구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "문화체육관광위원회",
        CMITS: "문화체육관광위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-2062",
        E_MAIL: null,
        HOMEPAGE: "http://blog.naver.com/trustbhj",
        STAFF: "강감창, 나경범",
        SECRETARY: "양재유, 유지민",
        SECRETARY2: "김신현, 정은경, 김지선, 김하은, 김선웅, 최상진",
        MONA_CD: "4X525582",
        MEM_TITLE: "<학력>\r\n- 숙명여자대학교 정보방송학 학사 \r\n- 북한대학원대학교 북한학 석사 수료\r\n\r\n<경력>\r\n- (전) MBC 앵커.기자\r\n- (전) 국민의힘 원내대변인.원내부대표\r\n- 제21대 국회의원(서울 송파구을/국민의힘)\r\n- 국회 운영위원회 위원\r\n- 국회 문화체육관광위원회 위원\r\n- 국민의힘 부동산시장 정상화 특별위원회 위원\r\n\r\n<수상경력>\r\n- 2020 국민의힘 국정감사 우수위원",
        ASSEM_ADDR: "의원회관 1015호",
    },
    {
        HG_NM: "백종헌",
        HJ_NM: "白宗憲",
        ENG_NM: "BAEK JONGHEAN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1962-12-23",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "부산 금정구",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "보건복지위원회",
        CMITS: "보건복지위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-3977",
        E_MAIL: "bjh438@naver.com",
        HOMEPAGE: null,
        STAFF: "김영상, 박재오",
        SECRETARY: "서차관, 이범희",
        SECRETARY2: "김도형, 박수향, 정진수, 백다윤, 신상윤",
        MONA_CD: "CAA7713A",
        MEM_TITLE: "[ 학   력]\r\n\r\n- 명륜초등학교 졸업\r\n- 동해중학교 졸업\r\n- 브니엘고등학교 졸업\r\n- 경성대학교 화학과 졸업\r\n- 부산대학교 환경대학교 도시계획과 졸업\r\n- 경성대학교 명예 법학박사\r\n\r\n\r\n\r\n[ 경   력 ]\r\n\r\n- 現 제21대 부산 금정구 국회의원\r\n- 現 제21대 국회 보건복지위원회 위원\r\n- 前 (주) 백산금속 대표이사\r\n- 부산광역시의회 의장 (제7대 후반기)\r\n- 前 자유한국당 부산시당 금정구 당협위원장\r\n- 제 4, 5, 6, 7대 부산광역시의회 의원\r\n- 제6대 부산광역시의회 전반기, 후반기 부의장\r\n- 제7대 부산광역시의회 전반기 새누리당 원내대표\r\n- 前 새마을문고 부산시지부부회장\r\n- 前 부산장애인총연합회 금정구지부 후원회장\r\n- 前 한국자유총연맹 금정구지부 부지부장\r\n- 前 금정소방서 의용소방대장",
        ASSEM_ADDR: "의원회관 438호",
    },
    {
        HG_NM: "백혜련",
        HJ_NM: "白惠蓮",
        ENG_NM: "BACK HYERYUN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1967-02-17",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 수원시을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "행정안전위원회",
        CMITS: "행정안전위원회, 중앙선거관리위원회 위원(문상부) 선출에 관한 인사청문특별위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-6130",
        E_MAIL: "bhrassembly0217@gmail.com",
        HOMEPAGE: "100hyeryun.blog.me",
        STAFF: "권훈, 전용두",
        SECRETARY: "임소현, 장한별",
        SECRETARY2: "차광일, 한민금, 주의현, 원서연, 엄휘은",
        MONA_CD: "HSS7466Y",
        MEM_TITLE: "2021. 5~ 제21대 국회 행정안전위원회 위원\r\n2016. 6~ 2021. 5 제20, 21대 국회 법제사법위원회 위원\r\n2016. 5~ 제20대 국회의원 (수원(을)/더불어민주당)\r\n2017. 5~ 더불어민주당 대변인",
        ASSEM_ADDR: "의원회관 833호",
    },
    {
        HG_NM: "변재일",
        HJ_NM: "卞在一",
        ENG_NM: "BYUN JAEILL",
        BTH_GBN_NM: "양",
        BTH_DATE: "1948-09-02",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "충북 청주시청원구",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "과학기술정보방송통신위원회",
        CMITS: "과학기술정보방송통신위원회",
        REELE_GBN_NM: "5선",
        UNITS: "제17대, 제18대, 제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-1626",
        E_MAIL: "bji@assembly.go.kr",
        HOMEPAGE: "http://blog.naver.com/open1197news",
        STAFF: "신동주",
        SECRETARY: "김승태, 김주희",
        SECRETARY2: "이수현, 유연성, 김경미, 정재우, 임도빈",
        MONA_CD: "MO52543L",
        MEM_TITLE: "미국 펜실베니아대학교 대학원 졸업,\r\n정보통신부차관, \r\n국무총리국무조정실 산업심의관",
        ASSEM_ADDR: "의원회관 701호",
    },
    {
        HG_NM: "서동용",
        HJ_NM: "徐東榕",
        ENG_NM: "SEO DONGYONG",
        BTH_GBN_NM: "양",
        BTH_DATE: "1964-09-02",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "전남 순천시광양시곡성군구례군을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "교육위원회",
        CMITS: "교육위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6120",
        E_MAIL: null,
        HOMEPAGE: "https://blog.naver.com/dyongseo",
        STAFF: "양승준, 홍기돈",
        SECRETARY: "김보람, 박광호",
        SECRETARY2: "이필기, 장승빈, 이동원, 이다경",
        MONA_CD: "0PK7354M",
        MEM_TITLE: "[학력]\r\n- 1977 광양서초등학교 졸업\r\n- 1980 광양중학교 졸업\r\n- 1983 순천고등학교 졸업\r\n- 1989 연세대학교 행정학과 졸업\r\n\r\n[경력]\r\n- 현) 제 21대 국회의원\r\n- 현) 국회 전반기 교육위원회 위원\r\n- 현) 국회 예산결산특별위원회 위원\r\n- 현) 더불어민주당 K-뉴딜 위원회 사회적 뉴딜분과 위원\r\n- 현) 더불어민주당 을지로위원회 상임위원회 위원\r\n- 더불어민주당 사회적참사 TF 위원 ",
        ASSEM_ADDR: "의원회관 321호",
    },
    {
        HG_NM: "서범수",
        HJ_NM: "徐範洙",
        ENG_NM: "SUH BUMSOO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1963-09-17",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "울산 울주군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "행정안전위원회",
        CMITS: "행정안전위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6277",
        E_MAIL: "bumsoo917@naver.com",
        HOMEPAGE: null,
        STAFF: "윤치업, 정재원",
        SECRETARY: "변희섭, 최인식",
        SECRETARY2: "서영진, 장경희, 변재윤, 김민진, 조유나",
        MONA_CD: "L7J93733",
        MEM_TITLE: "제33회 행정고시 합격\r\n울산지방경찰청 방범과장 (총경)\r\n울산지방경찰청 차장 (경무관)\r\n경찰청 교통국장\r\n경찰청 생활안전국장 (치안감)\r\n제20대 울산지방경찰청 청장\r\n제1대 경기북부지방경찰청 청장\r\n경찰대학 학장 (치안정감)\r\n자유한국당 울주군 당협위원장\r\n현 국민의힘 울주군 당협위원장\r\n현 국민의힘 울산시당 위원장",
        ASSEM_ADDR: "의원회관 617호",
    },
    {
        HG_NM: "서병수",
        HJ_NM: "徐秉洙",
        ENG_NM: "SUH BYUNGSOO",
        BTH_GBN_NM: "양",
        BTH_DATE: "1952-01-09",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "부산 부산진구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "기획재정위원회",
        CMITS: "기획재정위원회",
        REELE_GBN_NM: "5선",
        UNITS: "제16대, 제17대, 제18대, 제19대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-1885",
        E_MAIL: "suhbs8680@naver.com",
        HOMEPAGE: null,
        STAFF: "김성수, 김홍식",
        SECRETARY: "정재관, 최준연",
        SECRETARY2: "김선기, 한경섭, 임예림, 최윤재, 김희라",
        MONA_CD: "CT85313K",
        MEM_TITLE:
            "2020.05~ 제21대 국회의원(부산 부산진구갑/국민의힘)\r\n2014.07~2018.06 제36대 부산광역시 시장\r\n2012.07 제19대 국회 기획재정위원회 위원\r\n2012.05~2013.05 새누리당 사무총장\r\n2012.05~2014.05 제19대 국회의원(부산 해운대구기장군갑/새누리당)\r\n2012.02~2012.05 제18대 국회의원(부산 해운대구기장군갑/새누리당)\r\n2012.02~2012.05 새누리당 도시재생 특별위원회 위원장\r\n2012.02~2012.05 새누리당 재외국민협력위원회 위원장\r\n2011.08~2012.02 한나라당 재외국민협력위원회 위원장\r\n2011.07~2012.05 한나라당 지역발전특별위원회 위원장\r\n2011.01~2012.05 한나라당 도시재생 특별위원회 위원장\r\n2010~2012.11 국회 행정안전위원회 위원\r\n2010~2010.01 국회 기획재정위원회 위원\r\n2010.07~2011.05 한나라당 최고위원\r\n2008.08 제18대 국회 기획재정위원회 위원장\r\n2008.05~2012.02 제18대 국회의원(부산 해운대구기장군갑/한나라당)\r\n2007.09~2008.08 한나라당 여의도연구소 소장\r\n2006.06~2007.09 한나라당 부산시당 위원장\r\n2005.11~2005.12 한나라당 정책위원회 의장\r\n2004.~현재 사)부산장애인총연합회 고문\r\n2004.05~2008.05 제17대 한나라당 국회의원\r\n2002.08~2004.05 제16대 한나라당 국회의원\r\n2002~2014.03 새누리당 해운대구 기장군갑 당원협의회 운영위원장\r\n2001.01~2018 사)부산시청년연합회 상임고문\r\n2000.01~2002.02 부산시 해운대구 구청장\r\n1994~2000 새마을운동 해운대구지회 지회장\r\n1993~1999 동백장학회 회장\r\n1992~2015.02 동부산대학 금융경영과 겸임교수\r\n",
        ASSEM_ADDR: "의원회관 552호",
    },
    {
        HG_NM: "서삼석",
        HJ_NM: "徐參錫",
        ENG_NM: "SEO SAMSEOK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1959-08-03",
        JOB_RES_NM: "간사",
        POLY_NM: "더불어민주당",
        ORIG_NM: "전남 영암군무안군신안군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "농림축산식품해양수산위원회",
        CMITS: "농림축산식품해양수산위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-9501",
        E_MAIL: "3s0011@naver.com",
        HOMEPAGE: "http://3s0011.com",
        STAFF: "김행준, 황준하",
        SECRETARY: "조경숙, 최원석",
        SECRETARY2: "최은석, 고성석, 임정섭, 김유란, 김두성",
        MONA_CD: "FOK3459D",
        MEM_TITLE: null,
        ASSEM_ADDR: "의원회관 1022호",
    },
    {
        HG_NM: "서영교",
        HJ_NM: "徐瑛敎",
        ENG_NM: "SEO YOUNGKYO",
        BTH_GBN_NM: "양",
        BTH_DATE: "1964-11-11",
        JOB_RES_NM: "위원장",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 중랑구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "행정안전위원회",
        CMITS: "행정안전위원회, 중앙선거관리위원회 위원(문상부) 선출에 관한 인사청문특별위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-8490",
        E_MAIL: "youngkyos@naver.com",
        HOMEPAGE: "http://blog.naver.com/youngkyos",
        STAFF: "문경희, 정재헌",
        SECRETARY: "신현수, 안재형",
        SECRETARY2: "김은희, 임규호, 김지은, 최찬희",
        MONA_CD: "TKJ4800F",
        MEM_TITLE: "이화여대 정치외교학과\r\n이화여대대학원 동아시아학 박사과정 수료\r\n참여정부 청와대 춘추관장 겸 보도지원 비서관\r\n민주통합당 원내부대표\r\n새정치민주연합 원내대변인\r\n더불어민주당 원내수석부대표\r\n국회 법사위, 국방위, 운영위, 예결위 위원\r\n국회 사법개혁특별위원회 간사\r\n국회 교육위원회 간사\r\n국회 행정안전위원회 위원장(현)",
        ASSEM_ADDR: "의원회관 718호",
    },
    {
        HG_NM: "서영석",
        HJ_NM: "徐暎錫",
        ENG_NM: "SEO YOUNGSEOK",
        BTH_GBN_NM: "양",
        BTH_DATE: "1964-09-16",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 부천시정",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "보건복지위원회",
        CMITS: "보건복지위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-9671",
        E_MAIL: "guseng@hanmail.net",
        HOMEPAGE: "http://blog.naver.com/guseng",
        STAFF: "김형준, 이협",
        SECRETARY: "유경현, 최형규",
        SECRETARY2: "김춘성, 김경문, 김민지, 박유빈, 유조은",
        MONA_CD: "XR24352K",
        MEM_TITLE:
            "< 경력사항 >\r\n- 제21대 부천시(정) 국회의원\r\n-더불어민주당 보건의료특별위원회 위원장\r\n- 더불어민주당 을지로위원회 상임운영위원\r\n- 더불어민주당 국난극복 K-뉴딜위원회 백신·치료제TF 팀장/사회적뉴딜분과 위원/디지털뉴딜분과 위원\r\n-더불어민주당 필수노동자 보호TF 정책추진단 위원\r\n\r\n- 부천시호남향우회 총연합회 상임부회장\r\n- 제19대 대통령선거 더불어민주당 문재인후보 중앙선대위 넥스트대한민국 특별위원회 부위원장\r\n- 더불어민주당 경기도당 부천오정지역위원회 운영위원장\r\n- 제9대 경기도의회 의원\r\n- 부천시농구협회 회장\r\n- 부천시장애인체육회 수석부회장\r\n- 베르네천 살리기 운동본부 자문위원장\r\n- 제1대 재부천광양향우회 회장\r\n- 부천실내경마장폐쇄를위한추진위원회 위원장\r\n- 제21대 부천시약사회 회장\r\n- 제4대 부천육영재단 이사장\r\n- 제3대 부천시의회 전반기 행정복지위원회 위원장\r\n- 제2·3·4대 부천시의원\r\n- 구생약국 대표약사\r\n\r\n< 학력 사항 >\r\n- 순천금당고등학교 졸업\r\n- 성균관대학교 약학과 졸업\r\n- 가톨릭대학교 행정대학원 졸업\r\n\r\n< 수상 >\r\n- 환경처 장관상 수상\r\n- 대한약사회 제44회 약사 금탑상 수상\r\n- 더불어민주당 국정감사 우수위원상 수상\r\n- 중독예방시민연대 제3회 이용자보호대상(제도개선 부문) 수상\r\n- 여성소비자신문 2020 선한 영향력 국회의원 위촉패 수여",
        ASSEM_ADDR: "의원회관 645호",
    },
    {
        HG_NM: "서일준",
        HJ_NM: "徐一俊",
        ENG_NM: "SEO ILJUN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1965-05-10",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "경남 거제시",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "기획재정위원회",
        CMITS: "기획재정위원회, 감사원장(최재해) 임명동의에 관한 인사청문특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-1797",
        E_MAIL: "sijkorea@gmail.com",
        HOMEPAGE: "http://blog.naver.com/greatgeoje",
        STAFF: "박용안, 제방훈",
        SECRETARY: "김태명, 하현수",
        SECRETARY2: "배종근, 이충근, 이지은, 박경호, 강유선",
        MONA_CD: "MR210505",
        MEM_TITLE: "ㅁ경력\r\n제21대 국회의원(경남 거제)\r\n\r\n(前) 대통령실 행정관\r\n(前) 거제시 부시장\r\n(前) 경상남도 문화관광체육국장\r\n(前) 경상남도 재난안전건설본부장\r\n(前) 2002 FIFA 월드컵 조직위원회 근무\r\n(前) 서울특별시청 근무\r\n(前) 거제군청 9급 임용\r\n\r\nㅁ학력\r\n서울시립대학교 대학원 행정학 박사\r\n연세대학교 행정대학원 정책학 석사\r\n방송통신대학교 행정학과 졸업\r\n마산고등학교 졸업\r\n연초중학교 졸업\r\n",
        ASSEM_ADDR: "의원회관 805호",
    },
    {
        HG_NM: "서정숙",
        HJ_NM: "徐正淑",
        ENG_NM: "SUH JUNGSOOK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1953-02-18",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "보건복지위원회",
        CMITS: "보건복지위원회, 여성가족위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-1255",
        E_MAIL: "suhjs708@naver.com",
        HOMEPAGE: "http://blog.naver.com/suhjs708",
        STAFF: "권순일, 박경필",
        SECRETARY: "고경령, 박경은",
        SECRETARY2: "한은주, 김영환, 정연주, 조소나, 박정현",
        MONA_CD: "WFU14784",
        MEM_TITLE: "경북여고, 이화여대 약학과\r\n중앙대 병원임상약학 석사, 약물학 박사 \r\n2019 ~ 미래통합당 중앙당 재정위원\r\n2018 ~ 2019. 미래통합당 서울시당 수석부위원장\r\n2017 ~ 사단법인 국민통합 이사장\r\n2014.12 ~ 2016.12 건강보험심사평가원 상임감사\r\n2013 ~ 2016 제9대 한국여약사회 회장, 대한약사회 정책단장\r\n2013.07 ~ 2015.02 한국여성단체협의회 여성정치참여위원장\r\n2012.02 ~ 2013.08 새누리당 상임전국위원\r\n2011.09 ~ 2012.02 한나라당 상임전국위원\r\n2010.11 ~ 해냄복지회 이사장\r\n2010 ~ 2011 한나라당 중앙위원회 부의장\r\n2009 ~ 2010 제7대 서울특별시의회 녹색성장지원특별위원회 위원장\r\n2007 ~ 2008 제7대 서울특별시의회 여성특별위원회 위원장\r\n2006 ~ 2010 제7대 서울특별시의원\r\n2006 ~ 2010 서울특별시의회 한일의원연맹 간사장",
        ASSEM_ADDR: "의원회관 708호",
    },
    {
        HG_NM: "설훈",
        HJ_NM: "薛勳",
        ENG_NM: "SUL HOON",
        BTH_GBN_NM: "음",
        BTH_DATE: "1953-04-23",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 부천시을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국방위원회",
        CMITS: "국방위원회",
        REELE_GBN_NM: "5선",
        UNITS: "제15대, 제16대, 제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-8570",
        E_MAIL: "sulhoon21@naver.com",
        HOMEPAGE: "http://www.sulhoon.com",
        STAFF: "백황선, 이재영",
        SECRETARY: "김혜민, 오선희, 정웅재",
        SECRETARY2: "김대주, 박미경, 임정민, 권준홍, 한지현",
        MONA_CD: "OW53107J",
        MEM_TITLE: "마산중.고등학교 졸업\r\n고려대 사학과 졸업\r\n김대중총재보좌관\r\n새정치국민회의 기획조정위원장\r\n새천년민주당 시민사회위원장\r\n중국 북경대학교 아태연구원 교수급객좌연구원\r\n행동하는양심 부이사장\r\n새희망포럼 대표\r\n민족화해협력범국민협의회(민화협) 공동상임의장\r\n국회 기획재정위원\r\n국회 남북관계발전특별위원\r\n민주통합당 부천원미을지역위원장\r\n민주통합당 비상대책위원\r\n새정치민주연합 공공부문민영화저지특별위원장\r\n국회 교육문화체육관광위원장\r\n국회 농림축산식품해양수산위원장\r\n더불어민주당 검찰공정수사촉구특별위원회 위원장\r\n더불어민주당 최고위원\r\n제15.16.19. 20, 21대 국회의원",
        ASSEM_ADDR: "의원회관 948호",
    },
    {
        HG_NM: "성일종",
        HJ_NM: "成一鍾",
        ENG_NM: "SUNG ILJONG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1963-03-19",
        JOB_RES_NM: "간사",
        POLY_NM: "국민의힘",
        ORIG_NM: "충남 서산시태안군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국방위원회",
        CMITS: "국방위원회, 국회운영위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6290",
        E_MAIL: "sij5140@naver.com",
        HOMEPAGE: "https://blog.naver.com/sij5140",
        STAFF: "김태륜, 유봉동",
        SECRETARY: "김길수, 박정호",
        SECRETARY2: "김용운, 여미애, 정재도, 권용범, 하지웅",
        MONA_CD: "7XY7109I",
        MEM_TITLE: "□ 경력 \r\n제 20·21대 국회의원(서산시태안군)\r\n미래통합당 비상대책위원회 위원\r\n미세먼지 문제해결을 위한 국가기후환경회의 위원\r\n\r\n(前) 미래통합당 원내대변인\r\n(前) 미래통합당 소상공인위원회 위원장\r\n(前) 국회 보건복지위·정무위·운영위·윤리특위 위원\r\n(前) 국회 예산결산특별위원회 위원(계수조정소위 위원)\r\n(前) 자유한국당 충청남도당 위원장\r\n(前) 새누리당, 자유한국당 원내부대표\r\n(前) ㈜엔바이오컨스 창업 회장\r\n(前) 고려대학교 그린스쿨대학원 겸임교수\r\n(前) (사)독도사랑운동본부 총재\r\n\r\n□수상\r\nNGO모니터단 선정 국감우수위원 4년 연속 수상\r\n국회의원 입법대상(한국입법학회)\r\n국회의원 헌정대상(의정종합대상, 법률소비자연맹) 전·후반기\r\n자유한국당 국정감사 우수위원\r\n소상공인연합회 감사패 수상\r\n은탑산업훈장 수훈\r\nSeoul Success Award 수상(서울신문)\r\n‘10년후 한국을 빛낼 100인의 리더’선정(동아일보)\r\n포브스 최고경영자 대상 수상(포브스코리아)\r\n창조경제 CEO 대상(녹색환경부문, 동아일보)\r\n\r\n□ 학력\r\n광운대학교 대학원 환경공학 박사\r\n고려대학교 정책대학원 도시및지방행정학 석사\r\n고려대학교 경영학과 학사\r\n서산고등학교",
        ASSEM_ADDR: "의원회관 423호",
    },
    {
        HG_NM: "소병철",
        HJ_NM: "蘇秉哲",
        ENG_NM: "SO BYUNGCHUL",
        BTH_GBN_NM: "음",
        BTH_DATE: "1958-02-15",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "전남 순천시광양시곡성군구례군갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "법제사법위원회",
        CMITS: "법제사법위원회, 감사원장(최재해) 임명동의에 관한 인사청문특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-4410",
        E_MAIL: "sbcpr21@gmail.com",
        HOMEPAGE: "https://blog.naver.com/sobyungchul1",
        STAFF: "김진남, 이정원",
        SECRETARY: "이서진, 전은미",
        SECRETARY2: "정대중, 고영훈, 정광현, 하미라, 강문수",
        MONA_CD: "17M85910",
        MEM_TITLE: "[학력]\r\n· 서울대학교 법학과 학사\r\n\r\n[경력]\r\n· 현) 제21대 국회 법제사법위원회 위원\r\n· 전) 전남 신성장 추진위원회 위원\r\n· 전) 순천대학교 법학과 석좌교수\r\n· 전) 농협대학교 석좌교수\r\n· 전) 한국소년보호협회 이사\r\n· 전) 제38대 법무연수원 원장\r\n· 전) 대구 고등검찰청 검사장",
        ASSEM_ADDR: "의원회관 928호",
    },
    {
        HG_NM: "소병훈",
        HJ_NM: "蘇秉勳",
        ENG_NM: "SO BYUNGHOON",
        BTH_GBN_NM: "음",
        BTH_DATE: "1954-06-03",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 광주시갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국토교통위원회",
        CMITS: "국토교통위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-5020",
        E_MAIL: "sotong848@daum.net",
        HOMEPAGE: "http://blog.naver.com/sotongsa",
        STAFF: "박정선, 황길선",
        SECRETARY: "김민준, 소준원",
        SECRETARY2: "이용준, 김성래, 이지나, 이유진, 이세라",
        MONA_CD: "ZDR63255",
        MEM_TITLE: "[학력]\r\n전주고등학교 졸업\r\n성균관대학교 철학과 졸업\r\n\r\n[경력]\r\n2018.08. ~ 더불어민주당 제2사무부총장(조직)\r\n2018.08. ~ 더불어민주당 경기도당 교육연수위원회 위원장\r\n2016.05. ~ 제20대 국회 행정안전위원회 위원\r\n2016.05. ~ 제20대 국회의원(경기 광주시갑/더불어민주당)\r\n전)제20대 국회 전반기 예산결산특별위원회 위원\r\n전)더불어민주당 정책위원회 상임부의장\r\n전)더불어민주당 교육연수원 부원장\r\n전)더불어민주당 문화예술특별위원회 위원장\r\n전)더불어민주당 경기도당 부위원장\r\n전)도서출판 산하 대표\r\n전)민주희망 쇄신연대 상임집행위원\r\n전)열린우리당 국정자문위원\r\n전)민주당 출판문화진흥특별위원장\r\n전)(사)한강소사이어티 이사장\r\n전)남북민간교류협의회 사무총장",
        ASSEM_ADDR: "의원회관 848호",
    },
    {
        HG_NM: "송갑석",
        HJ_NM: "宋甲錫",
        ENG_NM: "SONG GABSEOK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1966-10-10",
        JOB_RES_NM: "간사",
        POLY_NM: "더불어민주당",
        ORIG_NM: "광주 서구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "산업통상자원중소벤처기업위원회",
        CMITS: "산업통상자원중소벤처기업위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-5750",
        E_MAIL: "kssong800518@daum.net",
        HOMEPAGE: "https://blog.naver.com/kssong3928",
        STAFF: "유영용",
        SECRETARY: "박현숙, 신윤수",
        SECRETARY2: "박범준, 유민환, 안민우, 김은민, 윤희상",
        MONA_CD: "RD42006Y",
        MEM_TITLE: "[ 출생 ]\r\n - 전남 고흥 출생(1966)\r\n\r\n[ 학력 ]\r\n - 광주 광덕고등학교 졸업\r\n - 전남대학교 경영대학 졸업\r\n\r\n[ 경력 ]\r\n더불어민주당 전략기획위원장 (현)\r\n더불어민주당 대선경선기획단 총괄간사 (현)\r\n더불어민주당 민주연구원 부원장 (현)\r\n더불어민주당 광주광역시당위원장 (현)\r\n더불어민주당 을지로위원회 상임운영위원 (현)\r\n(사) 남북경제문화협력재단 이사 (현)\r\n(사) 광주학교 교장 (현)\r\n노무현재단 광주 지역위원회 고문 (현)\r\n국회 산업통상자원중소벤처기업위원회 간사\r\n더불어민주당 중앙당 대변인\r\n제20대 국회 예산결산특별위원회 위원\r\n제20대 국회 윤리특별위원회위원\r\n문재인 대통령 후보 비서실 부실장\r\n더불어민주당 정책위원회 부의장\r\n전대협 4기 의장\r\n전남대학교 총학생회 회장",
        ASSEM_ADDR: "의원회관 1020호",
    },
    {
        HG_NM: "송기헌",
        HJ_NM: "宋基憲",
        ENG_NM: "SONG KI HUN",
        BTH_GBN_NM: "양",
        BTH_DATE: "1963-10-02",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "강원 원주시을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "법제사법위원회",
        CMITS: "법제사법위원회, 언론·미디어 제도개선 특별위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6150",
        E_MAIL: "peacesong1@naver.com",
        HOMEPAGE: "http://www.peacesong1.blog.me",
        STAFF: "김영호, 신수철",
        SECRETARY: "이진희, 홍현표",
        SECRETARY2: "장지은, 이교희, 장유진, 최휘정, 권기완",
        MONA_CD: "SQ36001H",
        MEM_TITLE: "▷ 원주시 호저면 주산리 출생 \r\n▷ 원주고등학교 졸업 \r\n▷ 서울대학교 법과 대학 졸업 \r\n\r\n▷ 육군 중위 법무관 전역 / 제22사단, 8군단\r\n\r\n▷ 제28회 사법시험 (합격) \r\n▷ 제18기 사법연수원 (수료) \r\n▷ 서울지검/ 대구지검 안동지청/ 인천지검/ 부산지검 검사\r\n▷ 변호사 송기헌 법률사무소 (대표 변호사) \r\n▷ 사회복지법인 밥상공동체복지재단 (법인이사) \r\n\r\n-----------------------------------------\r\n\r\n▶ 제20대, 21대 국회의원 (강원 원주을) \r\n▶ 국회 법제사법위원회 (위원)\r\n▷ 20대 국회 법제사법위원회 (간사)\r\n▷ 20대 국회 평창동계올림픽 및 국제경기대회지원특위 (간사)\r\n▷ 20대 국회 운영위, 산자중기위, 여가위, 예결위, 사법개혁특위 (위원)\r\n\r\n▶ 현)더불어민주당 중앙위원회 부의장\r\n▶ 현)더불어민주당 당무감사원장\r\n▷ 전)더불어민주당 정책위원회 선임부의장\r\n▷ 전)더불어민주당 법률위원장\r\n▷ 전)제7회 전국동시지방선거 중앙선거대책위원회 공명선거본부장(법률지원)\r\n▷ 전)제21대 국회의원선거 중앙선거대책위원회 공명선거본부장(법률지원)\r\n▷ 전)제19대 대통령선거 문재인후보 법률특보단장\r\n",
        ASSEM_ADDR: "의원회관 535호",
    },
    {
        HG_NM: "송석준",
        HJ_NM: "宋錫俊",
        ENG_NM: "SONG SEOGJUN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1964-03-10",
        JOB_RES_NM: "간사",
        POLY_NM: "국민의힘",
        ORIG_NM: "경기 이천시",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국토교통위원회",
        CMITS: "국토교통위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-3161",
        E_MAIL: "734ssj@gmail.com",
        HOMEPAGE: "http://blog.naver.com/seogjuns",
        STAFF: "류명현, 박범영",
        SECRETARY: "김종현, 한승주",
        SECRETARY2: "김정규, 장억수, 김인환, 이주원, 박종원",
        MONA_CD: "CNW5754J",
        MEM_TITLE: "이천 송곡초 졸업(32회)\r\n이천 경남중 졸업(23회)\r\n이천 경남종고~서울 인창고 졸업(29회)\r\n서울대학교 국제경제학과 (경제학 학사)\r\n서울대학교 행정대학원 정책학 전공(행정학 석사)\r\n美, 미주리대학교 경제학과 (경제학 박사)\r\n現 제21대 국회의원(경기 이천)\r\n現 국회 국토교통위원회 위원\r\n現 국민의힘 정책위원회 부의장\r\n現 국민의힘 부동산시장 정상화 특별위원회 위원장\r\n現 국민의힘 소상공인 살리기 특별위원회 부위원장\r\n現 한국방송통신대학교 운영위원회 위원\r\n행정고시 34회 합격\r\n해병장교 학사 21기\r\n前 국민의힘, 미래통합당 경기도당 위원장\r\n前 제20대 국회의원(경기 이천)\r\n前 미래통합당 원내부대표\r\n前 자유한국당 정책위원회 부의장\r\n前 자유한국당 원내부대표\r\n前 국회 국토교통위원회 위원\r\n前 국회 보건복지위원회 위원\r\n前 건설교통부 주거복지과 과장\r\n前 대통령비서실 행정관\r\n前 국토해양부 재정담당관\r\n前 국무총리실 새만큼사업추진기획단 국장\r\n前 국토해양부 국토정보정책관\r\n前 국토교통부 대변인\r\n前 국토교통부 건설정책국 국장\r\n前 서울지방국토관리청 청장",
        ASSEM_ADDR: "의원회관 734호",
    },
    {
        HG_NM: "송언석",
        HJ_NM: "宋彦錫",
        ENG_NM: "SONG EONSEOG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1963-05-16",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "경북 김천시",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국토교통위원회",
        CMITS: "국토교통위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-3011",
        E_MAIL: null,
        HOMEPAGE: null,
        STAFF: "박찬윤, 양창열",
        SECRETARY: "김광수, 황현성",
        SECRETARY2: "최상준, 김영익, 김윤희, 신용제, 조현규",
        MONA_CD: "6EN68926",
        MEM_TITLE: "1963년 5월 16일생\r\n경상북도 김천시 구성면 미평리\r\n\r\n[학력]\r\nㆍ뉴욕주립대학교 대학원 경제학 박사\r\nㆍ뉴욕주립대학교 대학원 경제학 석사\r\nㆍ서울대학교 법학과 학사\r\nㆍ경북고등학교\r\nㆍ김천 석천중학교\r\nㆍ김천 중앙초등학교\r\n\r\n[경력]\r\nㆍ제20대 국회의원(경북 김천시)\r\nㆍ자유한국당 경북도당 김천시 당협위원장\r\nㆍ(전) 국민대학교 특임교수\r\nㆍ(전) 기획재정부 제2차관\r\nㆍ(전) 기획재정부 예산실장\r\nㆍ(전) 기획재정부 예산실 예산총괄심의관\r\nㆍ(전) 기획재정부 예산실 행정예산심의관\r\nㆍ(전) 기획재정부 예산실 경제예산심의관\r\nㆍ(전) 기획재정부 예산실 행정예산심의관\r\nㆍ행정고시 제29회",
        ASSEM_ADDR: "의원회관 427호",
    },
    {
        HG_NM: "송영길",
        HJ_NM: "宋永吉",
        ENG_NM: "SONG YOUNGGIL",
        BTH_GBN_NM: "양",
        BTH_DATE: "1963-03-21",
        JOB_RES_NM: "위원장",
        POLY_NM: "더불어민주당",
        ORIG_NM: "인천 계양구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "외교통일위원회",
        CMITS: "외교통일위원회",
        REELE_GBN_NM: "5선",
        UNITS: "제16대, 제17대, 제18대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-8957",
        E_MAIL: "songyounggil@naver.com",
        HOMEPAGE: "http://blog.naver.com/songyounggil",
        STAFF: "장철영, 한상범",
        SECRETARY: "이경복, 이정아",
        SECRETARY2: "문세종, 김휘동, 주소희, 김민경, 신수연",
        MONA_CD: "PAO22428",
        MEM_TITLE: "- 전라남도 고흥 출생\r\n- 연세대 경영학과/ 초대 직선 총학생회장\r\n- 사법고시 합격(36회), 변호사, 민주화를위한변호사모임 회원\r\n- 한국방송통신대학교 중어중문, 일본학\r\n- 現 제21대 국회 외교통일위원회 위원장\r\n- 現 국회 한국-러시아 의회외교포럼 회장\r\n- 現 대통령직속 북방경제협력위원회 특별고문\r\n- 現 더불어민주당 외교통일안보자문회의 의장\r\n- 前 더불어민주당 동북아평화협력특별위원회 위원장\r\n- 前 문재인 대통령 러시아 특사\r\n- 前 제19대 문재인대통령후보 중앙선거대책위원회 총괄본부장\r\n- 前 민선 5기 인천광역시장",
        ASSEM_ADDR: "의원회관 818호",
    },
    {
        HG_NM: "송옥주",
        HJ_NM: "宋玉珠",
        ENG_NM: "SONG OKJOO",
        BTH_GBN_NM: "양",
        BTH_DATE: "1965-12-20",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 화성시갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "환경노동위원회",
        CMITS: "환경노동위원회, 여성가족위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-6788-5631",
        E_MAIL: "songok4740@naver.com",
        HOMEPAGE: "http://blog.naver.com/songok4740",
        STAFF: "김선홍, 최동규",
        SECRETARY: "이원희",
        SECRETARY2: "김진호, 형찬우, 임선영, 경세현, 박민지",
        MONA_CD: "3249208I",
        MEM_TITLE: "21대 국회 여성가족위원회 위원장\r\n더불어민주당 노동존중실천 국회의원단 책임의원\r\n더불어민주당 을지로위원회 소속 국회의원\r\n(前)국회 환경노동위원회 위원장\r\n(前)더불어민주당 원내부대표\r\n(前)더불어민주당 대변인\r\n(前)더불어민주당 미세먼지대책특별위원회 위원장\r\n(前)더불어민주당 경기도당 을지키는민생실천위원회 위원장",
        ASSEM_ADDR: "국회 본청 548호 여가위원장실",
    },
    {
        HG_NM: "송재호",
        HJ_NM: "宋在祜",
        ENG_NM: "SONG JAEHO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1960-12-20",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "제주 제주시갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "정무위원회",
        CMITS: "정무위원회, 예산결산특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-1631",
        E_MAIL: "songjeju2020@gmail.com",
        HOMEPAGE: null,
        STAFF: "강신혁, 윤정배",
        SECRETARY: "김명언, 하재이",
        SECRETARY2: "강정욱, 김세진, 변성철, 신희범, 김지은",
        MONA_CD: "LM13674V",
        MEM_TITLE: "○2020.7.~ 더불어민주당 제주특별자치도당 위원장\r\n○2020.6.~ 제21대 국회의원 (제주시갑, 더불어민주당)\r\n○2017.8.~ 2020.2. 대통령직속 국가균형발전위원회 위원장\r\n○2000.3.~ 2020.2. 제주대학교 관광개발학과 교수\r\n○2017.5.  문재인정부 국정기획자문위원\r\n○2013.2.~ 2015.1 한국미래발전연구원장\r\n○2006.3 ~ 2008.9 한국문화관광연구원장\r\n○2006.~2008. 유네스코 한국위원",
        ASSEM_ADDR: "의원회관 834호",
    },
    {
        HG_NM: "신동근",
        HJ_NM: "申東根",
        ENG_NM: "SHIN DONGKUN",
        BTH_GBN_NM: "양",
        BTH_DATE: "1961-12-22",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "인천 서구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국토교통위원회",
        CMITS: "국토교통위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6142~4, (F)02-6788-6675",
        E_MAIL: "sdkwin16@gmail.com",
        HOMEPAGE: "https://blog.naver.com/skdc2875",
        STAFF: "이상규, 홍웅표",
        SECRETARY: "안중근, 이현주",
        SECRETARY2: "이영철, 김성한, 김정은, 류정민, 김승은",
        MONA_CD: "G1570880",
        MEM_TITLE: "▶ 경력\r\n현) 국회 국토교통위원회 위원\r\n현) 더불어민주당 정치개혁TF 단장\r\n현) 더불어민주당 소확행위원회 위원장\r\n현) 더불어민주당 부산지역 정관경 토착비리 조사특위 위원장\r\n현) 더불어민주당 인천서구(을) 지역위원회 위원장\r\n현) 제21대 인천서구을 국회의원(재선)\r\n\r\n전) 더불어민주당 최고위원\r\n전) 더불어민주당 원내부대표\r\n전) 국회 문화체육관광위원회 간사\r\n전) 국회 법제사법위원회 위원\r\n전) 국회 여성가족위원회 위원\r\n전) 국회 보건복지위원회 위원\r\n전) 새정치민주연합 인천시당위원장\r\n전) 인천광역시 정무부시장\r\n전) 인천의료관광재단 이사장\r\n민주화운동 관련자\r\n전) 보건의료대표자회의 의장\r\n전) 건강사회를 위한 치과의사회 회장\r\n전) 한국청년연합 공동준비위원장\r\n전) 신동근 치과의원 원장\r\n전) 경희대 삼민투 위원장\r\n\r\n▶ 학력\r\n서울대 대학원 치의학박사과정 수료\r\n서울대 대학원 치의학과 석사\r\n경희대 치대 졸업\r\n국립전북기계공고 졸업",
        ASSEM_ADDR: "의원회관 732호",
    },
    {
        HG_NM: "신영대",
        HJ_NM: "申榮大",
        ENG_NM: "SHIN YEONGDAE",
        BTH_GBN_NM: "음",
        BTH_DATE: "1968-01-15",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "전북 군산시",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "산업통상자원중소벤처기업위원회",
        CMITS: "산업통상자원중소벤처기업위원회, 예산결산특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-1524",
        E_MAIL: "syd@assembly.go.kr",
        HOMEPAGE: "https://blog.naver.com/shinyd85",
        STAFF: "권민철, 선학수",
        SECRETARY: "심권택, 조대희",
        SECRETARY2: "오현숙, 최은선, 김보현, 김경훈, 박노권",
        MONA_CD: "AFH96856",
        MEM_TITLE: "현)산업통상자원중소벤처기업위원회 위원\r\n현)더불어민주당 대변인\r\n전)국회운영위원회 위원\r\n전)더불어민주당 원내부대표\r\n전)노무현대통령 비서실 행정관\r\n전)민주당 중앙당 부대변인\r\n전)대통령 직속 국가균형 발전위원회 전문위원\r\n전)연세대학교 객원교수",
        ASSEM_ADDR: "의원회관 610호",
    },
    {
        HG_NM: "신원식",
        HJ_NM: "申源湜",
        ENG_NM: "SHIN WONSIK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1958-07-24",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "국방위원회",
        CMITS: "국방위원회, 정보위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-9630",
        E_MAIL: "wonteam20@naver.com",
        HOMEPAGE: null,
        STAFF: "김태현, 여운모",
        SECRETARY: "김범준, 이재인",
        SECRETARY2: "정사영, 소재평, 신은경, 김기정, 신진현",
        MONA_CD: "SRP7336N",
        MEM_TITLE: "- 제21대 국회의원(국민의힘 / 비례대표) \r\n- 제21대 국회 국방위원ㆍ정보위원\r\n- 국민의힘 제4정책조정위원장\r\n- 국민의힘 천안함 장병 및 유족지원 TF 위원장\r\n- 국민의힘 대외협력위원회 부위원장\r\n- 국민의힘 외교안보특별위원회 간사\r\n- 국민의힘 군 성범죄 진상규명 및 재발방지 특위 위원\r\n- 국민의힘 북한 사이버테러 위기 대응 TF 위원\r\n- 국민의힘 간첩혐의사건 진상규명 TF 위원\r\n- 전) 제21대 국회 운영위원\r\n\r\n[학 력] \r\n- 부산동성고등학교 (23회)\r\n- 육군사관학교 (37기)\r\n- 경남대학교 대학원 경영학 석사\r\n- 국민대학교 대학원 경영학 박사\r\n\r\n[군경력]\r\n- 합동참모본부 합동작전과장\r\n- 육군사관학교 생도대장\r\n- 육군 제3보병사단장\r\n- 국방부 정책기획관\r\n- 육군 수도방위사령관\r\n- 합동참모본부 작전본부장\r\n- 합동참모본부 합동참모차장\r\n\r\n[일반경력]\r\n- 고려대학교 연구교수 겸 동 대학 아세아문제연구소 연구위원\r\n- 조선일보 칼럼 필진\r\n- 대한민국 수호 예비역 장성단 공동대표\r\n- 자유한국당 북핵 폐기추진 특별위원회 위원\r\n- 미래한국당 제21대 국회의원 선거대책위원회 외교.통일.국방정책위원회 본부장",
        ASSEM_ADDR: "의원회관 745호",
    },
    {
        HG_NM: "신정훈",
        HJ_NM: "辛正勳",
        ENG_NM: "SHIN JEONGHOON",
        BTH_GBN_NM: "음",
        BTH_DATE: "1964-12-06",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "전남 나주시화순군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "산업통상자원중소벤처기업위원회",
        CMITS: "산업통상자원중소벤처기업위원회, 예산결산특별위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제19대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-4277",
        E_MAIL: null,
        HOMEPAGE: "https://blog.naver.com/newnaju21",
        STAFF: "김용석, 정찬호",
        SECRETARY: "배혜진, 최태강",
        SECRETARY2: "류종옥, 전승현, 노미선, 박성태, 김나연",
        MONA_CD: "M7O7878U",
        MEM_TITLE: "- 영산포중졸업\r\n- 광주인성고졸업\r\n- 고려대학교 정경대학 신문방송학과 졸업\r\n- 5.6대 전남도의회 의원 \r\n- 민선3.4기 나주시장\r\n- 대통령비서실 농어업비서관실 농어업비서관\r\n- 국가균형발전위원회 지역정책 공약특별위원회 위원장\r\n- (현)19.21대 국회의원",
        ASSEM_ADDR: "의원회관 547호",
    },
    {
        HG_NM: "신현영",
        HJ_NM: "申賢榮",
        ENG_NM: "SHIN HYUNYOUNG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1980-11-17",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "보건복지위원회",
        CMITS: "보건복지위원회, 예산결산특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-6788-6691~4",
        E_MAIL: "21shy740@gmail.com",
        HOMEPAGE: null,
        STAFF: "이백휴, 천정길",
        SECRETARY: "신아람, 한지성",
        SECRETARY2: "정위지, 박대율, 이재원, 임현재, 김경혜",
        MONA_CD: "F5Y4026Q",
        MEM_TITLE: "가톨릭대학교 의과대학 졸 \r\n연세대학교 보건대학원 역학과 석사 졸업 \r\n가톨릭관동대학교 의학과 박사 졸업\r\n\r\n(현)제21대 더불어민주당 국회의원\r\n(현)더불어민주당 원내대변인\r\n(전)더불어민주당 정책위원회 상임부의장 \r\n(전)더불어민주당 원내부대표\r\n(전)한국여자의사회 법제이사\r\n(전)대한의사협회 홍보이사겸 대변인\r\n(전)대한전공의협의회 복지이사\r\n(전)명지병원 가정의학과 과장\r\n(전)한양대 의과대학 조교수\r\n(전)방송통신심의위원회 광고자문특별위원회 위원\r\n(전)통일보건의료학회 홍보이사\r\n(전)대한가정의학회/의사회 보험이사",
        ASSEM_ADDR: "의원회관 740호",
    },
    {
        HG_NM: "심상정",
        HJ_NM: "沈相정",
        ENG_NM: "SIM SANGJEUNG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1959-02-20",
        JOB_RES_NM: "위원",
        POLY_NM: "정의당",
        ORIG_NM: "경기 고양시갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국토교통위원회",
        CMITS: "국토교통위원회",
        REELE_GBN_NM: "4선",
        UNITS: "제17대, 제19대, 제20대, 제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-9530",
        E_MAIL: "713sim@naver.com",
        HOMEPAGE: "https://blog.naver.com/713sim",
        STAFF: "류성재, 박정훈",
        SECRETARY: "김혜련, 이종훈",
        SECRETARY2: "박성일, 최윤석, 장명진, 최경희, 황혜준",
        MONA_CD: "SU53086M",
        MEM_TITLE: "심상정이 여러분의 자부심이 되겠습니다. 고양갑 국회의원 심상정입니다.\r\n\r\n- 국회 정치개혁특별위원회 위원장\r\n- 17, 19, 20대 국회의원 (진보정당 최초 3선)\r\n- 정의당 3기 상임 대표\r\n- 19대 대선 정의당 대통령 후보\r\n- 전국금속노동조합 사무처장\r\n- 서울대학교 사범대학 사회교육과 졸업",
        ASSEM_ADDR: "의원회관 743호",
    },
    {
        HG_NM: "안규백",
        HJ_NM: "安圭伯",
        ENG_NM: "AHN GYUBACK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1961-04-29",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 동대문구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국방위원회",
        CMITS: "국방위원회",
        REELE_GBN_NM: "4선",
        UNITS: "제18대, 제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-4181",
        E_MAIL: "intoan429@gmail.com",
        HOMEPAGE: "http://www.safe100.or.kr",
        STAFF: "성영준, 황집필",
        SECRETARY: "김병기",
        SECRETARY2: "김준태, 김현빈, 김명학, 김혜원, 심재용",
        MONA_CD: "TST4507I",
        MEM_TITLE:
            "(現)제18·19·20·21대 국회의원(서울 동대문구갑)\r\n(現)국회 국방위원회 위원\r\n(現)제21대 국회스카우트의원연맹 회장\r\n(現)성균관대학교 총동창회 부회장\r\n\r\n­－평화민주당 1기 공채합격\r\n－평민신문, 신민당보 기자\r\n－제15대 김대중 대통령 후보 선거대책본부 조직2국장\r\n－새천년민주당 조직국장, 지방자치국장\r\n－제16대 대통령 당선자 노무현 대통령직 인수위원회 전문위원\r\n－민주당 조직위원회 위원장, 인재영입위원\r\n－통합민주당 조직위원회 위원장\r\n－민주당 지방자치위원회 위원장, 조직강화 특별위원회 위원\r\n－2010년 지방선거 민주당 서울시당 공직선거 후보자추천위원회 위원\r\n－2010년 지방선거 민주당 경기도당 공직선거후보자추천 재심위원회 위원장\r\n－민주당 원내부대표\r\n－국회 국방위원회 위원, 민주당 간사\r\n－국회 독도영토 수호특별대책위원회 위원\r\n－국회운영위원회, 행정안전위원회, 문화체육관광방송위원회 위원\r\n－국회 예산결산특별위원회 위원\r\n－제18대 민주통합당 대선 선대위 총괄 조직부본부장\r\n－2013년 10월 민주당 재보궐선거기획단장\r\n－국회 국방위원회 민주당 간사\r\n－국가정보원 등 국가기관의 정치적 중립성 강화를 위한 제도개선 특별위원회 위원\r\n－국회 운영위원회 새정치민주연합 간사\r\n－새정치민주연합 원내수석부대표\r\n－더불어민주당 전략홍보본부장\r\n－더불어민주당 사무총장\r\n - 국회 국토교통위원회 위원\r\n－제19대 문재인 대통령 후보 중앙선거대책위원회 총무본부장\r\n－동국대학교 행정대학원 객원교수\r\n－더불어민주당 서울특별시당 위원장\r\n－더불어민주당 최고위원\r\n - 제20대 국회 후반기 국방위원회 위원장\r\n－더불어민주당 전국대의원대회 준비위원회 위원장\r\n\r\n\r\n - 제18대 한-벨 국회의원 친선협회 부회장\r\n - 제18대 한-노르웨이 국회의원 친선협회 이사\r\n - 제19대 한-러시아 국회의원 친선협회 회장\r\n - 제19대 한-노르웨이 국회의원 친선협회 부회장\r\n - 제19대 한-아랍에미리트 국회의원 친선협회 이사\r\n - 제19대 한-멕시코 국회의원 친선협회 이사\r\n - 제20대 한-베네수엘라 국회의원 친선협회 회장\r\n - 제20대 한-중국 국회의원 외교협의회 부회장\r\n - 제20대 한-노르웨이 국회의원 친선협회 이사\r\n",
        ASSEM_ADDR: "의원회관 807호",
    },
    {
        HG_NM: "안민석",
        HJ_NM: "安敏錫",
        ENG_NM: "AN MINSUK",
        BTH_GBN_NM: "양",
        BTH_DATE: "1966-08-13",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 오산시",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "교육위원회",
        CMITS: "교육위원회",
        REELE_GBN_NM: "5선",
        UNITS: "제17대, 제18대, 제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-3877~9",
        E_MAIL: "amsams0606@gmail.com",
        HOMEPAGE: "https://blog.naver.com/ams0506",
        STAFF: "문경식, 양승신",
        SECRETARY: "김병국, 이영기",
        SECRETARY2: "김동성, 안은하, 이정연, 전예슬, 안신영",
        MONA_CD: "ZA54991S",
        MEM_TITLE: "美 노던콜로라도주립대학교 교육학박사\r\n5선 (17, 18, 19, 20, 21대) 국회의원\r\n(전) 국회 예산결산위원회 간사\r\n(전) 국회 문화체육관광위 위원장 \r\n(현) 국회 교육문화포럼 대표\r\n(현) 국회 외교통일위원회 위원",
        ASSEM_ADDR: "의원회관 920호",
    },
    {
        HG_NM: "안병길",
        HJ_NM: "安炳吉",
        ENG_NM: "AN BYUNGGIL",
        BTH_GBN_NM: "음",
        BTH_DATE: "1962-02-02",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "부산 서구동구",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "농림축산식품해양수산위원회",
        CMITS: "농림축산식품해양수산위원회, 언론·미디어 제도개선 특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-5970",
        E_MAIL: "anbg02@naver.com",
        HOMEPAGE: "https://blog.naver.com/anbg02",
        STAFF: "임성재, 홍춘호",
        SECRETARY: "김영해, 최원녕",
        SECRETARY2: "오한나, 이용운, 진유정, 권기림, 서예나",
        MONA_CD: "6MO8786S",
        MEM_TITLE: "[경력]\r\n(현) 제21대 국회의원(부산 서구동구)\r\n(현) 국회 농림축산식품해양수산위원회\r\n(현) 국민의힘 정책위원회 제2정책조정위원회 부위원장\r\n\r\n(전) 국민의힘 대변인\r\n(전) 자유한국당 중앙위원회 해양수산분과위원장\r\n(전) 부산일보 대표이사 사장, 발행인\r\n(전) 한국지방신문협회 회장\r\n\r\n[학력]\r\n진주고등학교\r\n부산대학교 법학과\r\n부산대학교 행정대학원 석사\r\n동아대학교 대학원 행정학 박사",
        ASSEM_ADDR: "의원회관 528호",
    },
    {
        HG_NM: "안호영",
        HJ_NM: "安浩永",
        ENG_NM: "AN HOYOUNG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1965-10-11",
        JOB_RES_NM: "간사",
        POLY_NM: "더불어민주당",
        ORIG_NM: "전북 완주군진안군무주군장수군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "환경노동위원회",
        CMITS: "환경노동위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-9751",
        E_MAIL: "ahnho065@gmail.com",
        HOMEPAGE: "http://blog.naver.com/lawanhoyoung",
        STAFF: "박성수, 이보라",
        SECRETARY: "송기택, 오상윤",
        SECRETARY2: "유춘성, 강태우, 박선우, 유하연, 김혜진",
        MONA_CD: "XEF29171",
        MEM_TITLE: "1965년10월11일 생\r\n전북 진안 출생\r\n\r\n[학력]\r\n-전라 고등학교\r\n-연세 대학교 법학과\r\n-전북 대학교 대학원 법학과 박사수료\r\n-제25기 사법연수원 수료\r\n-제35 사법시험 합격\r\n\r\n[약력]\r\n-21대 국회 환경노동위원회 간사 위원\r\n-20대 국회 국토교통위원회 위원\r\n-20대 국회 예산결산특별위원회 위원\r\n              예산안등 조정 소위원회 위원\r\n-20대 국회 의원(완주군,진안군,무주군,장수군)\r\n\r\n-더불어민주당 정책위원회 부의장\r\n-더불어민주당 적폐청산위원회 위원(국토위)\r\n-더불어민주당 10대 국정과제 부동산안정 및서민주거복지 TF 간사\r\n-더불어민주당 호남특별위원회 위원\r\n-더불어민주당 법률위원장(전)\r\n-더불어민주당 원내부대표(전)\r\n\r\n-법무법인 백제 대표변호사(전)\r\n-국민농업전북포럼 공동대표(전)\r\n-민주사회를위한 변호사모임 전주전북지부장(전)\r\n-진안군, 무주군, 전주시 고문변호사(전)\r\n-전북겨레하나 공동대표 및 후원이사회장(전)\r\n-진안YMCA 주민권익센터 단장(전)\r\n-참여자치 전북시민연대 공동대표(전)\r\n-전주여성의전화 후원이사회 이사장(전)\r\n",
        ASSEM_ADDR: "의원회관 1024호",
    },
    {
        HG_NM: "양경숙",
        HJ_NM: "梁敬淑",
        ENG_NM: "YANG KYUNGSOOK",
        BTH_GBN_NM: "양",
        BTH_DATE: "1962-09-06",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "기획재정위원회",
        CMITS: "기획재정위원회, 예산결산특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-4091",
        E_MAIL: "kyungsook_0906@naver.com",
        HOMEPAGE: "http://blog.naver.com/jongroyang",
        STAFF: "김상일",
        SECRETARY: "이도희, 채희락",
        SECRETARY2: "김수진, 조대치얼, 장지은",
        MONA_CD: "9V18755A",
        MEM_TITLE: "제21대 국회의원\r\n前 한국재정정책연구원장\r\n더불어민주당 정책위 부의장 / 전국여성위 부위원장\r\n前 제4.5대 서울시의원 / 서울시의회 재정경제위원장\r\n前 고려대 정부학연구소 교수\r\n前 서울시립대 행정학과 초빙교수\r\n前 (사)남북경협국민운동본부 공동대표\r\n국회 우수입법선정위원",
        ASSEM_ADDR: "의원회관 414호",
    },
    {
        HG_NM: "양금희",
        HJ_NM: "梁琴喜",
        ENG_NM: "YANG KUMHEE",
        BTH_GBN_NM: "양",
        BTH_DATE: "1961-11-15",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "대구 북구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "산업통상자원중소벤처기업위원회",
        CMITS: "여성가족위원회, 산업통상자원중소벤처기업위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-7451~7453",
        E_MAIL: "ygoldh8999@naver.com",
        HOMEPAGE: "https://blog.naver.com/ygoldh8999",
        STAFF: "박종욱, 이현진",
        SECRETARY: "김홍석, 이은정",
        SECRETARY2: "유도영, 김균서, 양지, 권기환, 백승미",
        MONA_CD: "VG24001G",
        MEM_TITLE: "- 학 력 \r\n1968.03 ~ 1974.02 대구 남산초등학교\r\n1974.03 ~ 1977.02 대구 대명여자중학교\r\n1977.03 ~ 1980.02 대구 남산여자고등학교\r\n1980.03 ~ 1984.02 경북대학교 전자공학과\r\n\r\n- 경력 \r\n2020.07 ~ 현재 \t       국회 산업통상자원중소벤처기업위원회 위원\r\n2020.07 ~ 현재 \t       국회 여성가족위원회 위원\r\n2020.05 ~ 현재           제21대 국회의원(대구 북구갑/국민의힘)\r\n2019.09 ~ 현재 \t        현) IECD 위원회 자문위원\r\n2018.12 ~ 현재      \t현) 세계직능중소상공인총연합회 자문위원\r\n2019.04 ~ 2020.04 \t전) 의회행정박람회 조직위원회 부위원장\r\n2018.03 ~ 2020.04 \t전) 한국여성유권자연맹 중앙회장\r\n2017.12 ~ 2019.12 \t전) 대검찰청수사심의위원회 위원\r\n2017.09 ~ 2019.08 \t전) 민주평통자문회의 위원\r\n2016.07 ~ 2018.06 \t전) 한·중 경제문화교류협회 회장\r\n1985.03 ~ 1995.02 \t전) 대구 상서여자상업고등학교 교사",
        ASSEM_ADDR: "의원회관 553호",
    },
    {
        HG_NM: "양기대",
        HJ_NM: "梁基大",
        ENG_NM: "YANG KIDAE",
        BTH_GBN_NM: "양",
        BTH_DATE: "1962-10-12",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 광명시을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "행정안전위원회",
        CMITS: "행정안전위원회, 예산결산특별위원회, 중앙선거관리위원회 위원(문상부) 선출에 관한 인사청문특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6195",
        E_MAIL: "8746195@gmail.com",
        HOMEPAGE: "https://blog.naver.com/kdyang62",
        STAFF: "박상현, 유종상",
        SECRETARY: "이화중, 최병민",
        SECRETARY2: "정혜아, 김기홍, 유진, 김경태, 박수빈",
        MONA_CD: "KUO3574J",
        MEM_TITLE: "○ 학력 \r\n - 전주고등학교 졸업\r\n - 서울대학교 졸업\r\n\r\n○ 경력\r\n - 2020.05 ~ 제21대 국회의원(현, 경기 광명을)\r\n - 2020.06 ~ 국회 예산결산특별위원회 위원(현)\r\n - 2020.06 ~ 국회 행정안전위원회 위원(현)\r\n - 2020.03 ~ 더불어민주당 광명을지역위원회 위원장(현)\r\n - 2018.05 ~ (사)유라시아평화철도포럼 상임대표(현)\r\n - 2020.03 ~ 2020.04 더불어민주당 정책위 부의장\r\n - 2018.08 ~ 2019.08 국립한국교통대학교 특임교수\r\n - 2010.07 ~ 2018.03 경기 재선 광명시장\r\n - 2017.02~2018.03 더불어민주당 사회경제적위원회 부위원장\r\n - 2012. 중국 연변과학기술대학교 명예교수\r\n - 2006 ~ 2008 중국 국립우한대학 객좌교수\r\n - 2001.07 ~ 2002. 07 미국 버클리대 객원연구원\r\n - 2008.09~2010.08 민주당 당대표 언론특보\r\n - 2006. 열린우리당 수석부대변인\r\n - 1988.04~2004.01 동아일보 정치.경제.사회부 기자\r\n - 2020.09 중앙선관위원 인사청문특위 간사\r\n - 2020.09 더불어민주당 선임직 당무위원\r\n - 2020.09 더불어민주당 경기도당 부위원장\r\n - 2020.09 더불어민주당 경기도당 지방자치분권위원장\r\n - 2020.10 더불어민주당 미디어·언론 상생 TF 부단장",
        ASSEM_ADDR: "의원회관 418호",
    },
    {
        HG_NM: "양이원영",
        HJ_NM: "梁李媛瑛",
        ENG_NM: "YANG YIWONYOUNG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1971-05-14",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "산업통상자원중소벤처기업위원회",
        CMITS: "산업통상자원중소벤처기업위원회, 여성가족위원회, 감사원장(최재해) 임명동의에 관한 인사청문특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-8834~6",
        E_MAIL: "yangyi.assembly@gmail.com",
        HOMEPAGE: "http://www.yangyi.kr",
        STAFF: "이동훈, 최완",
        SECRETARY: "손원익, 이희춘",
        SECRETARY2: "박진영, 최혜진, 윤다진, 김나래, 유하림",
        MONA_CD: "7O71647Z",
        MEM_TITLE: "현) 국회기후위기그린뉴딜연구회책임연구위원\r\n\r\n\r\n전) 더불어민주당 환경특위 위원장\r\n전) 더불어민주당 탄소중립위원회 위원\r\n전)더불어민주당K-뉴딜위원회그린뉴딜분과위원\r\n\r\n전) 에너지전환포럼 사무처장 \r\n전) 국가기후환경회의저감위원회 위원\r\n전) 서울시에너지정책위원회에너지수요관리분과위원장\r\n전) 환경운동연합에너지국 처장\r\n전) 핵없는 사회를 위한 공동행동 공동집행위원장 \r\n\r\n학력) \r\n서강대학교 생물학전공 화학부전공\r\nKDI국제정책대학원 공공정책학 석사\r\n독일라이프치히 경영전문대학원 MBA 석사",
        ASSEM_ADDR: "의원회관 502호",
    },
    {
        HG_NM: "양정숙",
        HJ_NM: "梁貞淑",
        ENG_NM: "YANG JUNGSUK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1965-03-12",
        JOB_RES_NM: "위원",
        POLY_NM: "무소속",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "과학기술정보방송통신위원회",
        CMITS: "과학기술정보방송통신위원회, 예산결산특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-9130",
        E_MAIL: "jsyang7735@gmail.com",
        HOMEPAGE: null,
        STAFF: "임현, 전병훈",
        SECRETARY: "김애라, 임성우",
        SECRETARY2: "김석렬, 이정길, 임석열, 이유정, 고지은",
        MONA_CD: "PZA4062H",
        MEM_TITLE: "[주요학력]\r\n- 서울 혜원여자고등학교 졸업\r\n- 이화여자대학교 법학과 학사 졸업\r\n- 이화여자대학교 법학대학원 박사 수료\r\n\r\n[주요경력]\r\n- (현) 21대 국회의원 비례대표\r\n- (현) 국회 과학기술정보방송통신위원회 위원\r\n- (전) 더불어민주당 법률위원회 부위원장\r\n- (전) 제19대 대통령선거 더불어민주당 법률 특보\r\n- (전) 대한변호사협회 인권위원회 위원\r\n- (전) 행정안전부 일제강제동원피해자 지원재단 감사\r\n- (전) 법무부 정책위원회 위원\r\n- (전) 이화여대 이화법조인회 회장\r\n- (전) 한국여성변호사회 부회장\r\n- (전) 법무법인 서울중앙 변호사",
        ASSEM_ADDR: "의원회관 1003호",
    },
    {
        HG_NM: "양향자",
        HJ_NM: "梁香子",
        ENG_NM: "YANG HYANGJA",
        BTH_GBN_NM: "음",
        BTH_DATE: "1967-04-04",
        JOB_RES_NM: "위원",
        POLY_NM: "무소속",
        ORIG_NM: "광주 서구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "기획재정위원회",
        CMITS: "기획재정위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-8971",
        E_MAIL: "bestwest1967@gmail.com",
        HOMEPAGE: "http://blog.naver.com/bestwest1967",
        STAFF: "송경민, 윤미혜",
        SECRETARY: "양성현",
        SECRETARY2: "이창현, 박대훈, 이경은",
        MONA_CD: "WHV3448W",
        MEM_TITLE: "2021.04.~\r\n더불어민주당 반도체기술특별위원회 부위원장\r\n\r\n2020.09 ~ \r\n더불어민주당 미래전환 K-뉴딜위원회 부위원장\r\n\r\n2020.08 ~ 2021.04\r\n더불어민주당 최고위원\r\n\r\n2020.07 ~ \r\n제21대 국회 전반기 기획재정위원회 위원\r\n\r\n2020.07 ~ \r\n제21대 국회 전반기 예산결산특별위원회 위원\r\n\r\n2020.05 ~ \r\n제21대 국회의원 (광주 서구을/더불어민주당)\r\n\r\n2019.09.~ 2020.07.\r\n더불어민주당 일본경제침략대책특별위원회 부위원장\r\n\r\n2018.08.~ 2019.08.\r\n국가공무원인재개발원 원장\r\n\r\n2016.08 ~ 2018.08\r\n더불어민주당 최고위원\r\n\r\n2014.01\r\n삼성전자 메모리사업부 플래시설계팀 상무",
        ASSEM_ADDR: "의원회관 626호",
    },
    {
        HG_NM: "어기구",
        HJ_NM: "魚基龜",
        ENG_NM: "EOH KIYKU",
        BTH_GBN_NM: "양",
        BTH_DATE: "1963-01-10",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "충남 당진시",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "농림축산식품해양수산위원회",
        CMITS: "농림축산식품해양수산위원회, 국회운영위원회, 예산결산특별위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-4360 / 041-356-2020",
        E_MAIL: null,
        HOMEPAGE: "https://blog.naver.com/kiyku",
        STAFF: "구본현, 조영학",
        SECRETARY: "박영화, 채성우",
        SECRETARY2: "최성연, 고은아, 장한빛, 최명수, 박하은, 정주영",
        MONA_CD: "8FB1535Y",
        MEM_TITLE:
            "[주요현직]\r\n- 20대·21대 국회의원(더불어민주당, 충남 당진시)\r\n- 국회 농림축산식품해양수산위원회 위원\r\n- 국회 운영위원회 위원\r\n- 더불어민주당 제2기 원내대표단 원내선임부대표\r\n- 국회철강포럼 공동대표\r\n- 더불어민주당 2050 탄소중립특별위원회 자원순환분과장\r\n- 유네스코 한국위원회 위원\r\n- 제21대국회 의원친선협회 한·카메룬 회장\r\n- 한·EU 국회의원 외교협의회 회원\r\n\r\n\r\n[주요경력]\r\n- (전)더불어민주당 제3기 원내대표단 원내부대표\r\n- (전)산업통상자원중소벤처기업위원회 위원\r\n- (전)국회 예산결산특별위원회 위원\r\n- (전)더불어민주당 충청남도당위원장\r\n- (전)더불어민주당 리쇼어링 TF 단장\r\n- (전)더불어민주당 상생형지역일자리특별위원회 위원장\r\n- (전)더불어민주당 민생평화상황실 혁신성장팀 간사\r\n- (전)더불어민주당 해양수산특별위원회 위원장\r\n- (전)대통령자문 경제사회발전노사정위원회 전문위원\r\n- (전)한국노총 중앙연구원 연구위원\r\n- (전)고려대학교 경제연구소 연구교수\r\n- (전)순천향대학교 총학생회장\r\n- 오스트리아 빈 국립대학교(Universitat  Wien) 경제학 학사·석사·박사\r\n\r\n[수상실적]\r\n- 2021 법률소비자연맹 국회의원 헌정대상\r\n- 2021 대한민국을 빛낸 13인 대상 국가발전공헌 부문\r\n- 2020 머니투데이 the300 국감스코어보드 대상\r\n- 2020 한국공공정책학회 대한민국 공공정책 의정대상\r\n- 2020 지방자치TV 대한민국 의정대상 \r\n- 2019 대한민국 TOP LEADERS 대상\r\n- 2019 더불어민주당 국정감사 우수의원\r\n- 2019 지방자치TV 대한민국 의정대상\r\n- 2018 전국지역신문협회 국회의원 부분 의정대상\r\n- 2018 법률소비자연맹 국회의원 헌정대상\r\n- 2018 대한민국 글로벌브랜드대상\r\n- 2018 대한민국 자랑스런 한국인 대상 벤처기업 부문 공로상\r\n- 2018 원자력안전 의정활동 우수의원\r\n- 2018 서울평화문화대상 의정대상\r\n- 2018 더불어민주당 국정감사 우수의원\r\n- 2018 지방자치TV 국정감사 우수의원\r\n- 2017 대한민국 탑리더스 대상\r\n- 2017 국회의원 아름다운 말 선플상\r\n- 2017 NGO모니터단 국정감사 우수의원\r\n- 2017 더불어민주당 국정감사 우수의원",
        ASSEM_ADDR: "의원회관 632호",
    },
    {
        HG_NM: "엄태영",
        HJ_NM: "嚴泰永",
        ENG_NM: "EOM TAEYOUNG",
        BTH_GBN_NM: "양",
        BTH_DATE: "1958-01-22",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "충북 제천시단양군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "산업통상자원중소벤처기업위원회",
        CMITS: "산업통상자원중소벤처기업위원회, 예산결산특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-6788-6756~9",
        E_MAIL: "2040jd@gmail.com",
        HOMEPAGE: "https://blog.naver.com/ty2394",
        STAFF: "박정윤, 윤경순",
        SECRETARY: "염성관, 유병석",
        SECRETARY2: "이정수, 안병욱, 서보영, 김진우, 권영희",
        MONA_CD: "8348421R",
        MEM_TITLE: "[경력]\r\n(현)제21대 국회의원 (충북 제천시단양군/국민의힘)\r\n(현)국민의힘 원내부대표\r\n국민의힘 충북도당 위원장\r\n자유한국당 충북도당 위원장\r\n민선 제3, 4대 충청북도 제천시 시장\r\n민선 제1, 2대 충청북도 제천시의회 의원\r\n새누리당 대외협력위원회 수석부위원장\r\n여의도연구소 정치행정분과 정책자문위원\r\n전국청년시장·군수·구청장 모임(청목회) 회장\r\n제천시 인재육성재단 이사장\r\n제천 국제 한방바이오엑스포 조직위원장\r\n제천 국제 음악영화제 조직위원장\r\n한나라당 중앙당 대외협력위원회 부위원장\r\n중부내륙중심권 행정협력회 회장\r\n한나라당 미래연대 지방자치발전위원장\r\n한나라당 제천지구당, 단양지구당 위원장\r\n바르게살기운동 제천시협의회 부회장\r\n대우자동차 제천판매, 단양판매 대표이사\r\n한국청년회의소 충북지구 JC지구이사\r\n\r\n[학력]\r\n명지대학교 정치학 박사과정 수료\r\n세명대학교 경영행정대학원 행정학 석사\r\n충북대학교 화학공학 학사\r\n제천고등학교\r\n제천중학교\r\n제천동명초등학교\r\n\r\n[수상 내역]\r\n2010 제34회 국가생산성대상\r\n2009 제18회 대한민국무궁화대상\r\n2009 예술경영리더상\r\n\r\n[지역 사무실]\r\n제천: 충청북도 제천시 명륜로 97 의림빌딩 3층\r\n단양: 충청북도 단양군 삼봉로 307 3층\r\n\r\n전화: 043-646-0415 \r\n팩스: 043-651-0415",
        ASSEM_ADDR: "의원회관 821호",
    },
    {
        HG_NM: "오기형",
        HJ_NM: "吳奇炯",
        ENG_NM: "OH GIHYOUNG",
        BTH_GBN_NM: "양",
        BTH_DATE: "1966-11-25",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 도봉구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "정무위원회",
        CMITS: "정무위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-6788-6761",
        E_MAIL: "okhyung628@naver.com",
        HOMEPAGE: "http://blog.naver.com/okgihyoung",
        STAFF: "김종석, 신동림",
        SECRETARY: "권태준, 홍성우",
        SECRETARY2: "민경배, 이다영, 박대창, 유지원, 서문정",
        MONA_CD: "OIA3741M",
        MEM_TITLE: "[학력]\r\n1985 광주 조선대학교부속고등학교 졸업\r\n1991 서울대학교 법과대학 졸업\r\n2000 제29기 사법연수원 졸업\r\n2005 미국 University of California, Berkeley Boalt Hall School of Law (L.L.M. course) 졸업\r\n\r\n[경력]\r\n1997 제39회 사법시험합격\r\n2000~2015 법무법인 태평양 변호사\r\n2005 미국 뉴욕주 변호사시험 합격(2008년 뉴욕주 변호사 자격 취득)\r\n2008~2015 법무법인 태평양 상해사무소 수석대표\r\n2016~2016 더불어민주당 뉴파티위원회 위원\r\n2016~2018 더불어민주당 한반도 경제통일위원회 위원\r\n2016~2019 더불어민주당 서울특별시당 도봉을 지역위원장\r\n2017 민주연구원 부원장\r\n2018.06~2019.05 더불어민주당 원내대표 비서실장\r\n2019.07.~2020.08 더불어민주당 일본경제침략대책특별위원회 간사\r\n2020.05~제21대 국회의원 (서울 도봉구을/더불어민주당)\r\n2020.07~제21대 국회 전반기 정무위원회 위원\r\n2020.07~제21대 국회 전반기 예산결산특별위원회 위원",
        ASSEM_ADDR: "의원회관 628호",
    },
    {
        HG_NM: "오영환",
        HJ_NM: "吳永煥",
        ENG_NM: "OH YEONGHWAN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1988-02-10",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 의정부시갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "행정안전위원회",
        CMITS: "행정안전위원회, 예산결산특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-6788-6766",
        E_MAIL: "119heartsaver@naver.com",
        HOMEPAGE: "https://blog.naver.com/119heartsaver",
        STAFF: "이윤근, 최환",
        SECRETARY: "노진석, 임주연",
        SECRETARY2: "신재민, 정수미, 정선호, 정진호, 조재원",
        MONA_CD: "MY318392",
        MEM_TITLE: "더불어민주당 국회의원\r\n국회 행정안전위원회 위원\r\n더불어민주당 재해대책특별위원회 위원장\r\n서울시립대학교(소방방재학과)졸업\r\n(전)중앙119구조본부 근무\r\n(전)119특수구조단 산악구조대원",
        ASSEM_ADDR: "의원회관 1021호",
    },
    {
        HG_NM: "오영훈",
        HJ_NM: "吳怜勳",
        ENG_NM: "OH YOUNGHUN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1968-12-14",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "제주 제주시을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "행정안전위원회",
        CMITS: "행정안전위원회, 중앙선거관리위원회 위원(문상부) 선출에 관한 인사청문특별위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-5621",
        E_MAIL: "7845621@naver.com",
        HOMEPAGE: "https://blog.naver.com/younghun3706",
        STAFF: "이민언, 정원태",
        SECRETARY: "박병준, 이영민",
        SECRETARY2: "오승훈, 김창용, 전서형, 김기환, 김유라, 이유신",
        MONA_CD: "21N57758",
        MEM_TITLE: "현) 제21대 국회 상반기 행정안전위원회 위원\r\n현) 더불어민주당 제주시을 지역위원회 위원장\r\n현) 국회 민주주의와 복지국가 연구회 공동대표\r\n현) 더불어민주당 불자회 연등회 회장\r\n\r\n전) 더불어민주당 당대표 비서실장\r\n전) 한일의원연맹 상임간사\r\n전) 더불어민주당 정책위 상임부의장\r\n전) 더불어민주당 제주특별자치도당 위원장\r\n전) 더불어민주당 원내부대표\r\n전) 더불어민주당 원내대변인\r\n전) 제19대 대통령선거 문재인후보 선대위 대변인\r\n전) 제주특별자치도의회 운영위원장\r\n전) 제주 4·3도민연대 사무국장\r\n전) 제주대학교 총학생회장",
        ASSEM_ADDR: "의원회관 731호",
    },
    {
        HG_NM: "용혜인",
        HJ_NM: "龍慧仁",
        ENG_NM: "YONG HYEIN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1990-04-12",
        JOB_RES_NM: "위원",
        POLY_NM: "기본소득당",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "기획재정위원회",
        CMITS: "기획재정위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-3063",
        E_MAIL: "hello@yonghyein.kr",
        HOMEPAGE: "https://yonghyein.kr",
        STAFF: "장흥배, 최승현",
        SECRETARY: "서태성, 오준호",
        SECRETARY2: "최기원, 이혜정, 김준호, 금동운, 김지수",
        MONA_CD: "GE71932C",
        MEM_TITLE: "2014~2014   세월호 희생자 추모 ‘가만히 있으라’ 침묵행진 제안자\r\n2017~2019   기본소득정치연대 대표\r\n2017~         현) 온국민기본소득운동본부 운영위원\r\n2018~         현) 경기도기본소득위원회 위원\r\n2019~         현) 2020 대한민국 기본소득 박람회 조직위원회 대변인\r\n2020~2020   기본소득당 상임대표\r\n2020~         현) 제21대 국회의원",
        ASSEM_ADDR: "의원회관 541호",
    },
    {
        HG_NM: "우상호",
        HJ_NM: "禹相虎",
        ENG_NM: "WOO SANGHO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1962-12-12",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 서대문구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "과학기술정보방송통신위원회",
        CMITS: "과학기술정보방송통신위원회",
        REELE_GBN_NM: "4선",
        UNITS: "제17대, 제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-3071",
        E_MAIL: "wsh2016v@gmail.com",
        HOMEPAGE: "http://www.woosangho.com",
        STAFF: "이후민, 홍용표",
        SECRETARY: "송은경, 신채호",
        SECRETARY2: "김동균, 김준모, 나서라, 안승운, 박진용, 박태희",
        MONA_CD: "V0O5343U",
        MEM_TITLE: "[ 학력 ]\r\n서울 용문고등학교 졸업\r\n연세대학교 국어국문학과 졸업\r\n연세대학교 행정대학원 졸업\r\n\r\n[ 경력 ]\r\n(현)\r\n제20대 국회의원(서울 서대문갑)\r\n\r\n중국 연태대학교 객좌교수\r\n북한대학원대학교 초빙교수\r\n(사)한국소아당뇨인협회 고문\r\n(사)이한열기념사업회 이사\r\n\r\n(전)\r\n더불어민주당 원내대표\r\n더불어민주당 제19대 대선 공동선대위원장\r\n민주당 국정원개혁운동본부 국민홍보단장\r\n민주통합당 제18대 대통령선거 중앙선거대책위원회 공보단장\r\n민주통합당 최고위원\r\n민주통합당 제19대 총선 전략홍보본부장\r\n10.26 서울특별시장 재보궐선거 박원순 후보 대변인\r\n4.27 강원도지사 재보궐선거 최문순 후보 대변인\r\n연세대학교 총동문회 상임이사\r\n민주정책연구원 이사\r\n민주통합당 대변인\r\n민주당 대변인\r\n열린우리당 대변인\r\n통합민주당 대변인\r\n대통합민주신당 대변인\r\n열린우리당 중앙위원\r\n청년정보문화센터 소장\r\n도서출판 두리 대표\r\n전국대학생대표자협의회 동우회 회장\r\n1987년 연세대학교 총학생회장\r\n제17,19대 국회의원 \r\n\r\n",
        ASSEM_ADDR: "의원회관 404호",
    },
    {
        HG_NM: "우원식",
        HJ_NM: "禹元植",
        ENG_NM: "WOO WONSHIK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1957-09-18",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 노원구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "기획재정위원회",
        CMITS: "기획재정위원회",
        REELE_GBN_NM: "4선",
        UNITS: "제17대, 제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-3601~3",
        E_MAIL: "reform1-1@hanmail.net",
        HOMEPAGE: "http://우원식.kr",
        STAFF: "박기영, 이지환",
        SECRETARY: "김복식, 김유림",
        SECRETARY2: "박이강, 정수영, 문봉애, 신지수, 임선아",
        MONA_CD: "XBT9550Q",
        MEM_TITLE:
            "연세대학교 토목공학과 학사\r\n연세대학교 공학대학원 환경공학 석사\r\n\r\n더불어민주당 20대 국회 2기 원내대표\r\n제17대, 제19대, 제20대, 제21대 국회의원(서울 노원구을)\r\n국회 기획재정위원회 위원(현)\r\n국회 기후위기그린뉴딜연구회 대표의원(현)\r\n국회 생명안전포럼 대표의원(현)\r\n여천 홍범도장군기념사업회 이사장 (현)\r\n독립기념관 비상임 이사(현)\r\n더불어민주당 민생연석회의 수석부의장(현)\r\n더불어민주당 국가균형발전특별위원회 위원장(현)\r\n\r\n국회 남북경제협력특별위원회 위원 (전)\r\n더불어민주당 을지로위원회 위원장(전)\r\n새정치민주연합 상임최고위원(전)\r\n새정치민주연합 당권재민 혁신위원회 위원(전)\r\n민주통합당 원내대변인(전)\r\n민주통합당 원내수석부대표(전)\r\n열린우리당 사무총장 직무대행(전)\r\n민주당 대외협력위원회 위원장(전)\r\n민주통합당 문재인 대선후보 선거대책위원회 총무본부장(전)\r\n민주통합당 손학규 대선경선후보 선거대책위원회 부위원장(전)\r\n박원순 서울시장 후보 선거대책본부 조직본부장(전)\r\n더불어민주당 문재인 대선후보 선거대책위원회 을지로민생본부 공동본부장(전)\r\n더불어민주당 기후변화대응 및 에너지전환산업육성특별위원회 위원장 (전)\r\n더불어민주당 민생연석회의 민생정책교육홍보위원장(전)\r\n더불어민주당 민생연석회의 편의점 최저수익보장 분과위원회 위원장 (전)\r\n더불어민주당 당헌당규강령정책위원회 위원장(전)\r\n\r\n가습기살균제 국정조사특별위원회 위원장(전)\r\n국회 교육문화체육관광위원회 위원(전)\r\n국회 세월호 침몰사고의 진상 규명을 위한 국정조사특별위원회 위원(전)\r\n국회연구단체 서울균형발전 국회의원모임 대표(전)\r\n노무현 정부 대통령직인수위 정무분과 자문위원(전)\r\n\r\n환경관리공단 관리이사(전)\r\n건국대학교 생명환경과학대학 겸임교수(전)\r\n\r\n환경정의시민연대 운영위원(전)\r\n환경을 사랑하는 중랑천사람들 운영위원장(전)\r\n강남북균형발전 주민연대회의 의장(전)\r\n대한장애인보치아연맹 회장(전)\r\n사단법인 신명나는 한반도 자전거에 사랑을 싣고 이사장(전)\r\n민주주의자 김근태 추모사업회 공동위원장(전)\r\n한국스카우트 서울북부연맹 연맹장(전)\r\n\r\n저서/ 섬진강-은어의 꿈(2005)\r\n저서/ 금  강-강과 사람들(2006)\r\n저서/ 어머니의 강(2011)\r\n저서/ 그래도 정치는 희망이다(2013)",
        ASSEM_ADDR: "의원회관 501호",
    },
    {
        HG_NM: "위성곤",
        HJ_NM: "魏聖坤",
        ENG_NM: "WI SEONGGON",
        BTH_GBN_NM: "음",
        BTH_DATE: "1968-01-20",
        JOB_RES_NM: "간사",
        POLY_NM: "더불어민주당",
        ORIG_NM: "제주 서귀포시",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "농림축산식품해양수산위원회",
        CMITS: "농림축산식품해양수산위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6450",
        E_MAIL: "wishjeju@hanmail.net",
        HOMEPAGE: null,
        STAFF: "이창민, 이호중",
        SECRETARY: "이준석, 한희석",
        SECRETARY2: "이경태, 박성준, 강누리, 최다영",
        MONA_CD: "RQQ3807K",
        MEM_TITLE: null,
        ASSEM_ADDR: "의원회관 717호",
    },
    {
        HG_NM: "유경준",
        HJ_NM: "兪京濬",
        ENG_NM: "YOO GYEONGJOON",
        BTH_GBN_NM: "음",
        BTH_DATE: "1961-06-17",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "서울 강남구병",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "기획재정위원회",
        CMITS: "기획재정위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2051",
        E_MAIL: "y0890@assembly.go.kr",
        HOMEPAGE: "https://blog.naver.com/gangnamforyou ",
        STAFF: "이한수, 허남춘",
        SECRETARY: "김길영, 이영현",
        SECRETARY2: "정윤경, 장수진, 강두현, 박해주, 노애자",
        MONA_CD: "9L57027L",
        MEM_TITLE: "[학력]\r\n  · 부산 해동고등학교\r\n  · 서울대학교 경제학과 학사  \r\n  · 고려대학교 대학원 경제학 석사 \r\n  · 미국 코넬대학교 경제학 박사\r\n\r\n[경력]\r\n  · 제21대 국회의원(서울시 강남구병) \r\n  · 미래통합당 서울시당 강남(병) 당협위원장\r\n  · 국회 기획재정위원회 위원\r\n\r\n  · (전) 제31대 한국노동경제학회 회장\r\n  · (전) 한국기술교육대학교 인력개발전문대학원장\r\n  · (전) 제15대 통계청장\r\n  · (전) 한국기술교육대학교 교수\r\n  · (전) 최저임금심의위원회 공익위원\r\n  · (전) KDI 국제정책대학원 교수\r\n  · (전) KDI 재정복지정책연구부장\r\n  · (전) KDI 인적자원정책연구부장\r\n  · (전) KDI 수석이코노미스트\r\n  · (전) 국민경제자문회의 위원\r\n  · (전) 중앙노동위원회 공익위원\r\n  · (전) KDI 재정·사회정책연구부장\r\n  · (전) 고용노동부장관 자문관\r\n  · (전) KDI 선임연구위원 \r\n  · (전) KDI 재정성과평가실장\r\n  · (전) 미국 코넬대학교 초빙교수\r\n  · (전) KDI 공공투자관리센터 정책연구실장\r\n  · (전) KDI 연구위원\r\n  · (전) 한국노동연구원 부연구위원",
        ASSEM_ADDR: "의원회관 434호",
    },
    {
        HG_NM: "유기홍",
        HJ_NM: "柳基洪",
        ENG_NM: "YOO KIHONG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1958-06-11",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 관악구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "외교통일위원회",
        CMITS: "외교통일위원회, 감사원장(최재해) 임명동의에 관한 인사청문특별위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제17대, 제19대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-7901",
        E_MAIL: "yookihong1001@gmail.com",
        HOMEPAGE: "https://blog.naver.com/youngkor",
        STAFF: "박동국, 전성원",
        SECRETARY: "김현호, 이민희",
        SECRETARY2: "송정아, 윤성준, 김수연, 박유림, 김민석",
        MONA_CD: "8FC9697X",
        MEM_TITLE: "17·19·21대 국회의원(서울 관악갑)\r\n21대 국회 교육위원회 위원장\r\n더불어민주당 교육특별위원회 위원장\r\n노무현재단 기획위원\r\n5·18 광주민주화운동 국가유공자\r\n미래교육희망 이사장(前)\r\n더불어민주당 중앙당선거관리위원회 위원장(前)\r\n더불어민주당 조직강화특별위원회 위원(前)\r\n새정치민주연합 수석대변인(前)\r\n19대 국회 교육문화체육관광위원회 간사(前)\r\n국민의 정부 청와대 정책기획실 국장(前)\r\n민주화운동청년연합 의장(前)",
        ASSEM_ADDR: "의원회관 1001호",
    },
    {
        HG_NM: "유동수",
        HJ_NM: "柳東秀",
        ENG_NM: "YOO DONGSOO",
        BTH_GBN_NM: "양",
        BTH_DATE: "1961-09-18",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "인천 계양구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "정무위원회",
        CMITS: "정무위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-3543",
        E_MAIL: "newds61@naver.com",
        HOMEPAGE: "http://blog.naver.com/newds61",
        STAFF: "김기석, 최창열",
        SECRETARY: "박종현, 손민호",
        SECRETARY2: "최해룡, 김휘종, 나규미, 최수정, 송지현",
        MONA_CD: "GX38539O",
        MEM_TITLE: "1961년 전북 부안 출생 \r\n전라고, 연세대 경영학과 졸업 \r\n\r\n국회 정무위원회 위원(현)\r\n더불어민주당 사회적경제위원회 부위원장(현)\r\n더불어민주당 가상통화 T/F 위원(현)\r\n\r\n국회 산업통상자원중소벤처기업위원회 위원(전)\r\n국회 전반기 예산결산특별위원회 위원(전)\r\n국회 미세먼지 대책 특별위원회 위원(전)\r\n더불어민주당 원내대표단 정책부대표(전)\r\n더불어민주당 원내대표단 예산부대표(전)\r\n\r\n민선7기 인천시장 인수위 재정/예산 혁신위원회 위원장(전)\r\n민선5기 인천시장 인수위 전문위원(전)\r\n인천도시공사 상임감사(전)\r\n인천시 공익사업선정위원(전)\r\n세동회계법인 공인회계사(전)\r\n인덕회계법인 인천지점 대표공인회계사(전)\r\n북인천세무서 과세적부심 심사위원(전)\r\n계양구 결산감사위원(전)\r\n경인여대 감사(전)\r\n계양복지지원협의회장(현)\r\n계양구 방위협의회 부회장(현)",
        ASSEM_ADDR: "의원회관 810호",
    },
    {
        HG_NM: "유상범",
        HJ_NM: "劉相凡",
        ENG_NM: "YOO SANGBUM",
        BTH_GBN_NM: "음",
        BTH_DATE: "1966-06-04",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "강원 홍천군횡성군영월군평창군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "법제사법위원회",
        CMITS: "법제사법위원회, 윤리특별위원회, 국회운영위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-4760",
        E_MAIL: "sbyoo64@naver.com",
        HOMEPAGE: "https://blog.naver.com/sbyoo64",
        STAFF: "김원호, 최영수",
        SECRETARY: "김도형, 이세호",
        SECRETARY2: "박동일, 황세원, 표인수, 장주영, 이지성",
        MONA_CD: "MU69217P",
        MEM_TITLE: "■ 학력\r\n\r\n· 경기고등학교\r\n· 서울대학교 법학 학사\r\n· 제31회 사법시험 합격\r\n· 제21기 사법연수원\r\n\r\n■ 경력\r\n\r\n(전) 서울중앙지방검찰청 3차장 검사\r\n(전) 창원지방검찰청 검사장\r\n(현) 국민의힘 원내부대표 \r\n(현) 국회 법제사법위원회 위원\r\n(현) 국회 예산결산특별위원회 위원\r\n(현) 국민의힘 인권위원회 위원장",
        ASSEM_ADDR: "의원회관 736호",
    },
    {
        HG_NM: "유의동",
        HJ_NM: "兪義東",
        ENG_NM: "YU EUIDONG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1971-06-23",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "경기 평택시을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "정무위원회",
        CMITS: "정무위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-7351",
        E_MAIL: "ptopen730@naver.com",
        HOMEPAGE: "http://yueuidong.com",
        STAFF: "이윤재, 이은석",
        SECRETARY: "윤나영, 조병수",
        SECRETARY2: "정정화, 이민지, 김일권, 송민규, 신지수",
        MONA_CD: "MRK4871S",
        MEM_TITLE: "<주요학력> \r\n- 한국외국어대학교 졸업 \r\n- 미국 캘리포니아대학교 센디에이고 대학원 졸업\r\n  태평양지역국제관계 석사(수학기간 1999. 9. ~ 2001. 6) \r\n\r\n<주요경력>\r\n- 제19·20·21대 국회의원(국민의힘, 경기평택시을)\r\n- 국회 정무위원회 위원(현)\r\n- 국회 정무위원회 법안심사제2소위원회 위원장(전)\r\n- 국회 정무위원회 간사(전)\r\n- 국회 운영위원회 위원 및 간사(전)\r\n- 국회 메르스특별대책위원회 위원(전)",
        ASSEM_ADDR: "의원회관 947호",
    },
    {
        HG_NM: "유정주",
        HJ_NM: "兪訂炷",
        ENG_NM: "YOO JUNGJU",
        BTH_GBN_NM: "양",
        BTH_DATE: "1975-12-13",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "문화체육관광위원회",
        CMITS: "문화체육관광위원회, 여성가족위원회, 예산결산특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-6788-6821",
        E_MAIL: "junshine905@naver.com",
        HOMEPAGE: null,
        STAFF: "임정석, 정재우",
        SECRETARY: "방문주, 주영헌",
        SECRETARY2: "류채화, 박수희, 민경식, 남현욱, 이시현",
        MONA_CD: "0WL9321T",
        MEM_TITLE: "<학력>\r\n- 동국대학교 영상대학원 영화영상 박사과정 수료\r\n- 동국대학교 문화예술대학원 영화영상 석사\r\n\r\n<경력>\r\n- 더불어민주당 원내부대표\r\n- 제21대 국회 전반기 문화체육관광위원회 위원\r\n- 제21대 국회 전반기 여성가족위원회 위원\r\n- 제21대 예산결산특별위원회 위원\r\n- 제21대 국회의원(비례대표/더불어민주당)\r\n- (전) 국가지식재산위원회 민간위원\r\n- (전) 한국애니메이션산업협회 회장",
        ASSEM_ADDR: "의원회관 905호",
    },
    {
        HG_NM: "윤건영",
        HJ_NM: "尹建永",
        ENG_NM: "YOUN KUNYOUNG",
        BTH_GBN_NM: "양",
        BTH_DATE: "1969-09-26",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 구로구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "외교통일위원회",
        CMITS: "외교통일위원회, 정보위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-1534",
        E_MAIL: "younky926@gmail.com",
        HOMEPAGE: null,
        STAFF: "여정민, 최일곤",
        SECRETARY: "서한우, 안본아",
        SECRETARY2: "전성건, 김민주, 김충일, 강은구, 신지원",
        MONA_CD: "GP07421U",
        MEM_TITLE: null,
        ASSEM_ADDR: "의원회관 727호",
    },
    {
        HG_NM: "윤관석",
        HJ_NM: "尹官石",
        ENG_NM: "YOUN KWANSUK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1960-08-17",
        JOB_RES_NM: "위원장",
        POLY_NM: "더불어민주당",
        ORIG_NM: "인천 남동구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "정무위원회",
        CMITS: "정무위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-4380",
        E_MAIL: "winneryks@naver.com",
        HOMEPAGE: "http://blog.naver.com/winneryks",
        STAFF: "허남동",
        SECRETARY: "박남문, 유달진",
        SECRETARY2: "이유정, 조용석, 이연주, 성채린, 윤소현",
        MONA_CD: "JMY9959W",
        MEM_TITLE: "* 보성고 졸업\r\n* 한양대학교 신문학과 졸업\r\n* 더불어민주당 정책위원회 수석부의장\r\n* 더불어민주당 인천시당위원장\r\n* 남동을 지역위원회 위원장\r\n* 국회 국토교통위원회 더불어민주당 간사\r\n* 국회 스카우트 의원 연맹 이사\r\n* 인천시 문화복지 자문위원\r\n* (전) 문재인 담쟁이 캠프(대통령 예비 후보) 대변인\r\n* (전) 민선5기 인천시청 초대 대변인\r\n* (전) 민주개혁을 위한 인천시민연대 초대 사무처장\r\n* (전) 실업극복국민운동 인천본부 초대 사무처장",
        ASSEM_ADDR: "의원회관 644호",
    },
    {
        HG_NM: "윤두현",
        HJ_NM: "尹斗鉉",
        ENG_NM: "YOON DOOHYUN",
        BTH_GBN_NM: "양",
        BTH_DATE: "1961-05-12",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "경북 경산시",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "정무위원회",
        CMITS: "정무위원회, 예산결산특별위원회, 언론·미디어 제도개선 특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-5281",
        E_MAIL: "gyeongsan.love@gmail.com",
        HOMEPAGE: "http://blog.naver.com/yoondhno1",
        STAFF: "박원진, 이희동",
        SECRETARY: "박선연, 이승직",
        SECRETARY2: "이상원, 전경진, 양혜나, 장진영, 이선아",
        MONA_CD: "7JC3239L",
        MEM_TITLE: "1961년생. \r\n심인고, 경북대 인문대 영문과, 건국대 행정대학원, \r\n자유한국당 대표특별보좌역\r\n同 중앙당 공천관리위원\r\n대통령비서실 홍보수석\r\n국민대 행정대학원 특임교수\r\n한국케이블TV 방송협회장\r\nYTN 보도국장",
        ASSEM_ADDR: "의원회관 602호",
    },
    {
        HG_NM: "윤미향",
        HJ_NM: "尹美香",
        ENG_NM: "YOUN MEEHYANG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1965-02-10",
        JOB_RES_NM: "위원",
        POLY_NM: "무소속",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "환경노동위원회",
        CMITS: "환경노동위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-0790",
        E_MAIL: "mhyang530@naver.com",
        HOMEPAGE: "https://blog.naver.com/mhyang530",
        STAFF: "손보경, 조정훈",
        SECRETARY: "안선미, 황경의",
        SECRETARY2: "배꽃나라, 노진실, 장정인, 이혜진, 조영일",
        MONA_CD: "KNM3215T",
        MEM_TITLE: "- 남해출생\r\n- 한신대학교 신학과\r\n- 이화여자대학교 사회복지대학원 \r\n- 한국기독교장로회 여신도회전국연합회 간사\r\n- 한국여성재단 사무처장\r\n- 한국정신대문제대책협의회 상임대표\r\n- 전쟁과여성인권박물관 관장\r\n- 일본군성노예제 문제해결을 위한 정의기억연대 이사장\r\n- 3.1운동 및 대한민국임시정부수립 100주년 기념사업추진위원회 미래희망분과위원회 위원\r\n- 21대 국회의원 (비례대표) / 국회 전반기 환경노동위원회 위원",
        ASSEM_ADDR: "의원회관 530호",
    },
    {
        HG_NM: "윤상현",
        HJ_NM: "尹相現",
        ENG_NM: "YOON SANGHYUN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1962-12-01",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "인천 동구미추홀구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "문화체육관광위원회",
        CMITS: "문화체육관광위원회",
        REELE_GBN_NM: "4선",
        UNITS: "제18대, 제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-4481",
        E_MAIL: "shyoon@na.go.kr",
        HOMEPAGE: null,
        STAFF: "안우철, 이상택",
        SECRETARY: "이지완, 정윤창",
        SECRETARY2: "김재경, 김승자, 이상록, 김효은, 권혜원",
        MONA_CD: "MSY7784L",
        MEM_TITLE: "서울대학교 경제학과\r\n미국 조지타운대학원 외교학 석사 \r\n미국 조지워싱턴대 국제정치학 박사\r\n\r\n하버드대학교 및 미국 의회조사국 객원연구원\r\n미국 존스홉킨스 국제관계대학원(SAIS) 동북아문제담당 초빙조교수\r\n서울대학교 초빙교수\r\n인하대학교 교육연구소 연구교수\r\n\r\n재인천 충남도민회 고문\r\n인천광역시 축구연합회 회장\r\n인천광역시 배드민턴연합회 자문위원\r\n남구 태권도연합회 고문\r\n남구 야구연합회 고문\r\n한국교통장애인협회 인천 시지부 자문위원\r\n인천 개인택시운송사업조합 자문위원\r\n\r\n제18, 19, 20, 21대 국회의원(현)\r\n국회 문화체육관광위원회 위원(현)\r\n새누리당 사무총장\r\n새누리당 원내수석부대표\r\n새누리당 대변인\r\n새누리당 원내부대표\r\n새누리당 국제위원장\r\n새누리당 인천광역시당위원장\r\n새누리당 외교역량강화특별위원회 부위원장\r\n새누리당 6.4 지방선거 인천시당 공천심사 위원장\r\n국회 정보위원회 간사\r\n국회 운영위원회 간사\r\n국회 외교통일위원회 위원장",
        ASSEM_ADDR: "의원회관 529호",
    },
    {
        HG_NM: "윤영덕",
        HJ_NM: "尹永德",
        ENG_NM: "YOON YOUNGDEOK",
        BTH_GBN_NM: "양",
        BTH_DATE: "1969-09-07",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "광주 동구남구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "외교통일위원회",
        CMITS: "국회운영위원회, 외교통일위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02)784 3870~2",
        E_MAIL: "yyd0415v@naver.com",
        HOMEPAGE: null,
        STAFF: "양동훈, 이경훈",
        SECRETARY: "김영삼, 이소연",
        SECRETARY2: "신희성, 하대준, 박경훈, 정진의, 오진솔",
        MONA_CD: "KFS1358P",
        MEM_TITLE: "[출 생] \r\n - 전남 담양 출생(1969년)\r\n\r\n[학 력]\r\n - 중국 북경대학 (법학박사-국제정치학 전공)\r\n - 조선대학교 대학원 (정치외교학 석사)\r\n - 조선대학교 (정치외교학 학사)\r\n\r\n[약 력]\r\n - 더불어민주당 정책위부의장(현)\r\n - 문재인대통령 민정수석실 행정관\r\n\r\n - 조선대학교 정치외교학과 초빙객원교수\r\n - 전남대학교 5.18연구소&#039 연구교수\r\n\r\n - (사)지역공공정책플랫폼 &#039광주로(路)&#039 이사 겸 연구소장\r\n - 광주 YMCA 이사 겸 시민운동위원장\r\n - 참여자치21 지방자치위원장\r\n - 근로정신대 할머니와 함께하는 시민모임 운영위원\r\n - 조선대학교 총학생회장, 남총련 건준위 의장\r\n",
        ASSEM_ADDR: "의원회관 715호",
    },
    {
        HG_NM: "윤영석",
        HJ_NM: "尹永碩",
        ENG_NM: "YOON YOUNGSEOK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1964-10-07",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "경남 양산시갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "산업통상자원중소벤처기업위원회",
        CMITS: "산업통상자원중소벤처기업위원회, 예산결산특별위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-4861",
        E_MAIL: "hangomy@assembly.go.kr",
        HOMEPAGE: null,
        STAFF: "김정일, 장준명",
        SECRETARY: "백창현, 장호경",
        SECRETARY2: "이정훈, 공유신, 방나래, 김혜란, 정영민",
        MONA_CD: "9VR65006",
        MEM_TITLE: "성균관대 정치외교학과 졸업\r\n미국 듀크대 정책학 석사(2002~2004)\r\n제37회 행정고등고시 합격(1993년)\r\n(前)서울시 마케팅담당관/지방 부이사관\r\n아시아도시연맹 이사장\r\n제19대 국회의원",
        ASSEM_ADDR: "의원회관 941호",
    },
    {
        HG_NM: "윤영찬",
        HJ_NM: "尹永燦",
        ENG_NM: "YOON YOUNGCHAN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1964-08-05",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 성남시중원구",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "과학기술정보방송통신위원회",
        CMITS: "과학기술정보방송통신위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2704",
        E_MAIL: "yyc8361@naver.com",
        HOMEPAGE: "https://blog.naver.com/yyc8361",
        STAFF: "김선, 김승철",
        SECRETARY: "박지현, 정희정",
        SECRETARY2: "김진국, 전지연, 류재순, 정다인, 전설아",
        MONA_CD: "XWX1513T",
        MEM_TITLE: "(현)더불어민주당 정보통신특별위원장\r\n(현)더불어민주당 K뉴딜위원회 디지털뉴딜 분과 간사\r\n(현)국회의원연구단체 디지털 혁신과 미래 포럼 대표의원\r\n(현)더불어민주당 중앙당후원회 전국청년위원회 후원회장\r\n\r\n(전) 대통령비서실 국민소통수석비서관\r\n(전) 문재인 대통령후보 선대위 SNS본부 공동 본부장\r\n(전) 네이버 부사장\r\n(전) 동아일보 정치부 차장",
        ASSEM_ADDR: "의원회관 726호",
    },
    {
        HG_NM: "윤재갑",
        HJ_NM: "尹才鉀",
        ENG_NM: "YOON JAEKAB",
        BTH_GBN_NM: "음",
        BTH_DATE: "1955-02-10",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "전남 해남군완도군진도군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "농림축산식품해양수산위원회",
        CMITS: "농림축산식품해양수산위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-1460",
        E_MAIL: "yoonjg542@naver.com",
        HOMEPAGE: "https://url.kr/iNsVb4",
        STAFF: "경성석, 이인구",
        SECRETARY: "금용석, 이경식",
        SECRETARY2: "홍형주, 노수균, 이우형, 황선희, 선한민",
        MONA_CD: "SE233396",
        MEM_TITLE: "○경력\r\n·제21대 국회의원(현)\r\n·목포해양대학교 초빙교수(2012~2015)\r\n·해군 군수사령관(2011)\r\n·더불어민주당 해남완도진도지역위원장(현)\r\n·더불어민주당 5.18민주화운동 40주년 특별위원회 부위원장(현)\r\n·더불어민주당 문재인 대통령후보 안보특보(전)\r\n·더불어민주당 안보특위 부위원장(전)\r\n·더불어민주당 전남도당 농축수산유통 특별위원장(전)\r\n·더불어민주당 정책위원회 부의장(전)\r\n·대통령직속 국가균형발전위원회 국민소통특별위원(전)\r\n·대통령소속 자치분권위원회 정책자문위원(전)\r\n·해양수산특별위원회 부위원장(전)\r\n\r\n○ 학력\r\n·경남대학교 경영대학원 경영학석사 졸업(2003)\r\n·해군사관학교 32기 졸업(78년 소위 임관)\r\n·광주숭의실고 졸업(12회)\r\n·해남화산중학교 졸업(71회)\r\n·해남화산초등학교 졸업(42회)\r\n\r\n○ 상훈\r\n·대한민국 보국훈장 천수장\r\n·대통령 표창\r\n·국방부장관 표창 등 다수\r\n\r\n○ 저서\r\n·시련은 용기를 낳고, 바다는 희망을 키운다\r\n·더불어 꾸는 꿈 윤재갑",
        ASSEM_ADDR: "의원회관 542호",
    },
    {
        HG_NM: "윤재옥",
        HJ_NM: "尹在玉",
        ENG_NM: "YUN JAEOK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1961-09-10",
        JOB_RES_NM: "위원장",
        POLY_NM: "국민의힘",
        ORIG_NM: "대구 달서구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "정무위원회",
        CMITS: "정무위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-4871",
        E_MAIL: "7882579@naver.com",
        HOMEPAGE: null,
        STAFF: "노병근",
        SECRETARY: "권보선, 이고운",
        SECRETARY2: "김미혜, 이주원, 이상일, 김도영, 김예인, 정의찬",
        MONA_CD: "ZRF3039U",
        MEM_TITLE: "학력\r\n- 경찰대학 졸업(1기)\r\n- 연세대학교 경찰행정학과 졸업(석사)\r\n- 동국대학교 경찰행정학과(박사수료)\r\n\r\n주요경력\r\n- 한국일보 선정 2000년대를 빛낼 100인\r\n- 경북지방경찰청장\r\n- 경기지방경찰청장\r\n- 새누리당 기획위원장\r\n- 제18대 대통령선거 새누리당 종합상황실 정세분석단장",
        ASSEM_ADDR: "의원회관 710호",
    },
    {
        HG_NM: "윤주경",
        HJ_NM: "尹柱卿",
        ENG_NM: "YUN JUKEYNG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1959-05-03",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "정무위원회",
        CMITS: "정무위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-7057",
        E_MAIL: "bela0524@naver.com",
        HOMEPAGE: null,
        STAFF: "박장혁, 임지홍",
        SECRETARY: "김민정, 서우태",
        SECRETARY2: "손선엽, 홍유정, 이일배, 권용태, 김현지",
        MONA_CD: "ZDP5704Q",
        MEM_TITLE: " - 제21대 국회의원(비례대표/국민의힘)\r\n - 前) 제10대 독립기념관 관장\r\n - 前) 대통령소속 국민대통합위원회 위원\r\n - 前) 매헌 윤봉길 기념사업회 이사\r\n - 前) 국민의힘 정강정책개정특별위원회 위원\r\n - 前) 국회 국방위원회 위원\r\n - 국회 정무위원회, 예산결산특별위원회 위원",
        ASSEM_ADDR: "의원회관 828호",
    },
    {
        HG_NM: "윤준병",
        HJ_NM: "尹準炳",
        ENG_NM: "YOON JOONBYEONG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1961-03-03",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "전북 정읍시고창군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "환경노동위원회",
        CMITS: "환경노동위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-1860",
        E_MAIL: "yjb870053@naver.com",
        HOMEPAGE: "http://theminjb.com/",
        STAFF: "권보근, 이준",
        SECRETARY: "박정호, 이찬",
        SECRETARY2: "유현철, 신기철, 한성경, 백은선",
        MONA_CD: "JC14718Q",
        MEM_TITLE: "[경  력]\r\n\r\n2019.6~2019.12 더불어민주당 정읍고창 지역위원장\r\n2018.1~2019.4   서울특별시 행정1부시장\r\n2016.6~2017.6   서울시 도시교통본부장\r\n1982                제26회 행정고시 합격\r\n\r\n[학  력]\r\n\r\n서울시립대학교 대학원 법학 박사\r\n서울대학교 대학원 행정학 석사\r\n서울대학교 독어독문학과 졸업\r\n",
        ASSEM_ADDR: "의원회관 522호",
    },
    {
        HG_NM: "윤창현",
        HJ_NM: "尹暢賢",
        ENG_NM: "YUN CHANGHYUN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1960-07-28",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "정무위원회",
        CMITS: "정무위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2855",
        E_MAIL: "yunch5270@gmail.com",
        HOMEPAGE: null,
        STAFF: "김재학, 문주현",
        SECRETARY: "김기린, 이영수",
        SECRETARY2: "이수영, 백성록, 이영아, 이성현, 김주환",
        MONA_CD: "40E3739H",
        MEM_TITLE: "충북 청주 출생\r\n대전고등학교 졸업\r\n서울대 경제학과 졸업\r\n美 시카고대 경제학 박사 졸업\r\n\r\n\r\n제21대 국회의원(비례대표)\r\n前 서울시립대 경영학부 교수\r\n\r\n前 자유한국당 혁신위원회 위원\r\n前 공적자금관리위원회 민간위원장\r\n前 대통령직속 규제개혁위원회 위원\r\n前 제7대 한국금융연구원 원장\r\n前 바른사회시민회의 사무총장",
        ASSEM_ADDR: "의원회관 826호",
    },
    {
        HG_NM: "윤한홍",
        HJ_NM: "尹漢洪",
        ENG_NM: "YOON HANHONG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1962-11-01",
        JOB_RES_NM: "간사",
        POLY_NM: "국민의힘",
        ORIG_NM: "경남 창원시마산회원구",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "법제사법위원회",
        CMITS: "법제사법위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2371",
        E_MAIL: null,
        HOMEPAGE: "http://blog.naver.com/uhh609",
        STAFF: "남기석, 박태훈",
        SECRETARY: "박충원",
        SECRETARY2: "이학종, 이원행, 김대원, 강선정, 정희성",
        MONA_CD: "8X15119P",
        MEM_TITLE: "-학력-\r\n▶ 합포초, 마산중, 마산고등학교\r\n▶ 서울대학교 졸업 \r\n▶ 서울대학교 행정대학원 행정학 석사\r\n▶ 서울시립대학교 행정학 박사\r\n-약력-\r\n▶ 제 20대 국회의원 (경남 창원시 마산회원구/새누리당)\r\n▶ 제 32대 경상남도 행정부지사 (前) \r\n▶ 대통령실 행정자치비서관 (前) \r\n▶ 서울시 행정과장·기획담당관 (前)\r\n▶ 제32회 행정고시 합격 ",
        ASSEM_ADDR: "의원회관 823호",
    },
    {
        HG_NM: "윤호중",
        HJ_NM: "尹昊重",
        ENG_NM: "YUN HOJUNG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1963-03-27",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 구리시",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국방위원회",
        CMITS: "정보위원회, 국회운영위원회, 국방위원회",
        REELE_GBN_NM: "4선",
        UNITS: "제17대, 제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-4961~3",
        E_MAIL: "hjyun9292@naver.com",
        HOMEPAGE: "http://blog.naver.com/hjyun327",
        STAFF: "박준혁, 이강일",
        SECRETARY: "안완섭, 정은철",
        SECRETARY2: "이슬기, 이다솜, 남슬비아, 황진옥, 김지연",
        MONA_CD: "M0A1658U",
        MEM_TITLE: "춘천고, 서울대 철학과 졸업\r\n제17대, 19대, 20대, 21대 국회의원\r\n\r\n더불어민주당 원내대표(現)\r\n국회 운영위원회 위원장(現)\r\n더불어민주당 검찰개혁특별위원회 위원장\r\n국회 법제사법위원회 위원장\r\n더불어민주당 사무총장\r\n국회 국토교통위원회 위원\r\n국회 환경노동위원회 위원\r\n국회 예산결산특별위원회 간사위원\r\n국정기획자문위원회 기획분과위원장\r\n더불어민주당 국민주권선거대책위원회 정책본부장\r\n더불어민주당 정책위의장\r\n국회 서민주거복지특별위원회 간사위원\r\n국회 기획재정위원회 간사위원\r\n국회 예산결산특별위원회 위원\r\n더불어민주당 유능한경제정당위원회 기획위원장\r\n더불어민주당 사회적경제위원회 수석부위원장\r\n새정치민주연합 디지털소통본부장\r\n민주통합당 사무총장\r\n민주당 전략기획위원장\r\n민주당 수석사무부총장\r\n열린우리당 대변인\r\n새천년민주당 부대변인\r\n청와대 민정/정책기획 비서실 행정관\r\n새정치국민회의 부대변인",
        ASSEM_ADDR: "의원회관 648호",
    },
    {
        HG_NM: "윤후덕",
        HJ_NM: "尹厚德",
        ENG_NM: "YOON HUDUK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1957-01-09",
        JOB_RES_NM: "위원장",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 파주시갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "기획재정위원회",
        CMITS: "기획재정위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-6788-6901",
        E_MAIL: "yoons609@hanmail.net",
        HOMEPAGE: "http://pajulove.kr",
        STAFF: "김영동, 윤규식",
        SECRETARY: "김동렬, 이승주",
        SECRETARY2: "김미연, 김우섭, 김국희, 강지영, 류지해",
        MONA_CD: "O7R5461J",
        MEM_TITLE: "■ 학력\r\n· 연세대학교 사회학과 졸업\r\n· 연세대학교 경제대학원 석사 졸업\r\n\r\n■ 주요경력\r\n· 제19, 20대 국회의원(경기 파주시갑)\r\n· 국회 기획재정위원회 위원(현)\r\n· 국회 예산결산특별위원회 간사(전)\r\n· 국회 국방위원회 간사(전)\r\n· 국회 국토교통위원회 위원(전)\r\n· 문재인정부 국정기획자문위원회 위원(전)\r\n· 참여정부 국무총리 비서실장(전)\r\n· 참여정부 청와대 정책조정비서관, 정무비서관, 기획조정비서관, 업무조정비서관, 국정과제비서관(전)\r\n",
        ASSEM_ADDR: "의원회관 943호",
    },
    {
        HG_NM: "이개호",
        HJ_NM: "李介昊",
        ENG_NM: "LEE KAIHO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1959-06-23",
        JOB_RES_NM: "위원장",
        POLY_NM: "더불어민주당",
        ORIG_NM: "전남 담양군함평군영광군장성군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "농림축산식품해양수산위원회",
        CMITS: "농림축산식품해양수산위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2165",
        E_MAIL: "7880291@naver.com",
        HOMEPAGE: "http://blog.naver.com/lgh59623",
        STAFF: "이영규, 황인기",
        SECRETARY: "박일남, 송진원",
        SECRETARY2: "정고운, 곽세문, 조용주",
        MONA_CD: "I7R13867",
        MEM_TITLE: " · 금호고, 전남대 경영학과 졸업\r\n · 제24회 행정고등고시 합격(만21세)\r\n · 내무부 지방자치기획단 운영담당관\r\n · 김대중 대통령직인수위원회 행정관\r\n · 목포시, 여수시, 광양시 부시장\r\n · 전남 관광문화국장, 자치행정국장, 기획관리실장\r\n · 행자부 공무원노사협력관, 행안부 기업협력지원관\r\n · 제35대 전라남도 행정부지사(2009. 07 ∼ 2011. 10)\r\n · 민주통합당 중앙위원(前)\r\n · 국회운영위원회 위원(前)\r\n · 새정치민주연합 원내부대표(前)\r\n · 더불어민주당 비상대책위원회 위원(前)\r\n · 창조경제활성화특별위원회 위원(前)\r\n · 미래창조과학방송통신위원회 위원(前)\r\n · 더불어민주당 윤리심판원 부원장(前)\r\n · 국회 농림축산식품해양수산위원회 간사(前)\r\n · 예산결산특별위원회 위원(前)\r\n · 더불어민주당 제4정책조정 위원장(前)\r\n · 국정기획자문위원회 경제 2분과 위원장 (前)\r\n · 국회 농림축산식품해양수산위원회 위원장 직무대리(前)\r\n · 더불어민주당 전남도당 위원장\r\n · 더불어민주당 최고위원\r\n\r\n\r\n\r\n\r\n ",
        ASSEM_ADDR: "의원회관 719호",
    },
    {
        HG_NM: "이광재",
        HJ_NM: "李光宰",
        ENG_NM: "LEE KWANGJAE",
        BTH_GBN_NM: "양",
        BTH_DATE: "1965-02-28",
        JOB_RES_NM: "위원장",
        POLY_NM: "더불어민주당",
        ORIG_NM: "강원 원주시갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "외교통일위원회",
        CMITS: "외교통일위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제17대, 제18대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2690",
        E_MAIL: null,
        HOMEPAGE: "https://blog.naver.com/yeskjwj",
        STAFF: "송상훈, 황세희",
        SECRETARY: "고명균, 김건우",
        SECRETARY2: "윤무영, 임현우, 나유경, 전소희, 장강빈",
        MONA_CD: "4A067125",
        MEM_TITLE: "전) 참여정부 국정상황실장\r\n전) 17대, 18대 국회의원\r\n전) 35대 강원도지사\r\n현) 21대 국회의원\r\n현) 더불어민주당 K-뉴딜본부장\r\n현) 국회 외교통일위원회 위원장",
        ASSEM_ADDR: "의원회관 643호",
    },
    {
        HG_NM: "이달곤",
        HJ_NM: "李達坤",
        ENG_NM: "LEE DALGON",
        BTH_GBN_NM: "음",
        BTH_DATE: "1953-09-11",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "경남 창원시진해구",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "보건복지위원회",
        CMITS: "보건복지위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제18대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6264~6",
        E_MAIL: "ldg200020@naver.com",
        HOMEPAGE: "http://band.us/@dalgon",
        STAFF: "안소동, 최장호",
        SECRETARY: "이종명, 이찬영",
        SECRETARY2: "김성한, 윤영일, 최하빈, 유주형, 김훈",
        MONA_CD: "QUM8288K",
        MEM_TITLE:
            "1953년 9월 11일 생\r\n\r\n~1987\t하버드대학교 대학원 정책학 박사\r\n1983\t        하버드대학교 대학원 정책학 석사\r\n1982~1983  이스트캐롤라이나대학교대학원 정치학 석사\r\n1977~1981  서울대학교 행정대학원 행정학 석사\r\n1972~1977  서울대학교 공학 학사\r\n\r\n\r\n[경력]\r\n\r\n2020.05~            제21대 국회의원 (경남 창원시 진해구 / 국민의힘)\r\n2020.05~            국민의힘 정책위원회 부의장\r\n\t                가천대학교 법과대학 석좌교수\r\n2019.03~            서울대학교 행정대학원 명예교수\r\n~2018                창원세계사격선수권대회 조직위원회 위원장\r\n2012\t                가천대학교 법과대학 교수\r\n2012.02~2013.03  대통령비서실 정무수석\r\n\t                하이닉스 사외이사\r\n2011.03\t        경원대학교 행정학과 석좌교수\r\n\t                지방행정체제개편추진위원회 민간위원\r\n2011.01\t        제9대 서울시정개발연구원 이사장\r\n2009.02~2010.03  행정안전부 장관\r\n2008.11\t        한미 FTA TF팀 한나라당 부위원장\r\n2008.08\t        한나라당 대표 특보단\r\n2008.08\t        제18대 국회 지식경제위원회 위원\r\n2008.08     \t        제18대 국회 윤리특별위원회 위원\r\n2008.06\t        제18대 한나라당 비례대표 국회의원\r\n2007.12~2008.02  제17대 대통령직 인수위원회 법무행정분과 위원\r\n2007\t                한국행정학회 회장\r\n2007\t                중앙공무원교육원 겸임교수\r\n2006~2007          자연보호중앙연맹 상임이사\r\n2005~2006          국무총리실 정책평가위원회 위원\r\n2005~2006          서울대학교 행정대학원 원장\r\n2005~2007          태권도협회 이사\r\n2004~2008          국무총리소속 행정협의조정위원회 위원\r\n2000\t                한국협상학회 회장\r\n1999~2003          중앙권한의 지방이양추진위원회 위원\r\n1999~2000          국무총리실 정책평가위원회 위원\r\n1998~2000          한국지방행정연구원 원장\r\n1998\t                4대 사회보험통합추진기획단 위원\r\n1998~2000          경찰개혁위원회 위원\r\n1995~1996          행정안전부 정책자문위원, 국가전문행정연수원 지도교수\r\n1995~1996          서울특별시 분쟁조정위원회 위원\r\n1995\t                한국행정학회 연구위원장\r\n1994\t                한국정책학회 총무위원장\r\n1993\t                한국정치학회 상임이사\r\n1991~1993          국방부 정책자문위원\r\n1990~1994          국가공기업 평가단 평가위원\r\n1989~1994          21세기위원회 위원, 간사\r\n1987~1988          미국 하버드대학교 EEPC Reserch Assiociate\r\n1985~1987          미국 하버드대학교 옌칭학자\r\n\t                미국 일리노이스대학교 연구교수\r\n\t                일본 와세다대학 방문교수",
        ASSEM_ADDR: "의원회관 616호",
    },
    {
        HG_NM: "이동주",
        HJ_NM: "李東洲",
        ENG_NM: "LEE DONGJU",
        BTH_GBN_NM: "음",
        BTH_DATE: "1972-09-04",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "산업통상자원중소벤처기업위원회",
        CMITS: "산업통상자원중소벤처기업위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-9761~3",
        E_MAIL: "fairness933@gmail.com",
        HOMEPAGE: null,
        STAFF: "서경옥, 송용한",
        SECRETARY: "이기정, 최지용",
        SECRETARY2: "이채영, 김인태, 남혜민, 유수진, 정경수",
        MONA_CD: "RO593601",
        MEM_TITLE: "(현) 제21대 더불어민주당 국회의원\r\n(현) 제21대 국회 전반기 산업통상자원중소벤처기업위원회 위원\r\n(현) 더불어민주당 을지로위원회 상임운영위원\r\n(현) 더불어민주당 국난극복 k-뉴딜위원회 경제본부 실업대책TF 팀장 \r\n(현) 더불어민주당 을지키는민생실천위원회 위원\r\n(전) 더불어민주당 코로나19 국난극복위원회 민생일자리TF 위원\r\n(전) 더불어민주당 코로나19 국난극복위원회 일자리고용TF 위원\r\n(전) 경기도 공정경제추진위원\r\n(전) 참여연대 민생희망본부 실행위원\r\n(전) 대한민국 중소벤처기업부 정책기획위원\r\n(전) 서울시 경제민주화추진위원\r\n(전) 한국중소상인자영업자총연합회 상임부회장\r\n(전) 전국중소유통상인협회 정책기획실장",
        ASSEM_ADDR: "의원회관 933호",
    },
    {
        HG_NM: "이만희",
        HJ_NM: "李晩熙",
        ENG_NM: "LEE MANHEE",
        BTH_GBN_NM: "음",
        BTH_DATE: "1963-12-11",
        JOB_RES_NM: "간사",
        POLY_NM: "국민의힘",
        ORIG_NM: "경북 영천시청도군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "농림축산식품해양수산위원회",
        CMITS: "농림축산식품해양수산위원회, 윤리특별위원회, 예산결산특별위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-5901",
        E_MAIL: "yc20002@naver.com",
        HOMEPAGE: "http://band.us/@yc20002",
        STAFF: "강성우, 김수용",
        SECRETARY: "김연준, 손영우",
        SECRETARY2: "김무찬, 조성진, 서주연, 김준수, 정상락",
        MONA_CD: "OSV9142K",
        MEM_TITLE: "(현) 제20대·21대 국회의원\r\n     (국민의힘/ 경북 영천시 청도군)\r\n(현) 예산결산특별위원회 간사\r\n(현) 농림축산식품해양수산위원회 위원\r\n(현) 윤리특별위원회 위원\r\n(현) 국민의힘 정책위원회 제2정책조정위원장",
        ASSEM_ADDR: "의원회관 819호",
    },
    {
        HG_NM: "이명수",
        HJ_NM: "李明洙",
        ENG_NM: "LEE MYOUNGSU",
        BTH_GBN_NM: "음",
        BTH_DATE: "1955-02-11",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "충남 아산시갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "행정안전위원회",
        CMITS: "행정안전위원회",
        REELE_GBN_NM: "4선",
        UNITS: "제18대, 제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-5711",
        E_MAIL: "mslee3@assembly.go.kr",
        HOMEPAGE: "http://blog.naver.com/asanpride",
        STAFF: "김영환, 김태국",
        SECRETARY: "이두현, 이병재",
        SECRETARY2: "김민정, 박혁진, 신우정, 박효진, 이정인",
        MONA_CD: "6YT83269",
        MEM_TITLE: "·대전고, 성균관대 행정학 학사·석사·박사\r\n·現) 국회 행정안전위원회 위원\r\n·現) 국회 한-아랍에미리트 친선협회 회장\r\n·前) 국회 보건복지위원회 위원장\r\n·前) 국회 한-아제르바이잔 친선협회 회장\r\n·前) 자유한국당 인재영입위원회 위원장\r\n·前) 충청남도 행정부지사\r\n·前) 나사렛대·건양대 부총장\r\n·한국희귀질환재단 설립 발기인\r\n·로타리·적십자 봉사회 회원\r\n·아산문인협회 회원\r\n·금산군수, 대통령비서실, 내무부, 국무총리실 근무\r\n·제22회 행정고시 합격",
        ASSEM_ADDR: "의원회관 606호",
    },
    {
        HG_NM: "이병훈",
        HJ_NM: "李炳勳",
        ENG_NM: "LEE BYUNGHOON",
        BTH_GBN_NM: "음",
        BTH_DATE: "1957-03-18",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "광주 동구남구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "문화체육관광위원회",
        CMITS: "문화체육관광위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6443",
        E_MAIL: "lbh0318@hanmail.net",
        HOMEPAGE: "https://blog.naver.com/leebh0318",
        STAFF: "강원, 김홍일",
        SECRETARY: "김진성, 이승환",
        SECRETARY2: "김태범, 최은지, 조재욱, 김의혁, 서훈",
        MONA_CD: "HKJ99607",
        MEM_TITLE: "[학력]\r\n-광주 서중학교\r\n-광주 제일고등학교 졸업\r\n-고려대학교 법과대학 행정학과 졸업 \r\n-전남대학교 일반대학원 행정학과 (행정학박사)\r\n\r\n[경력]\r\n-제24회 행정고등고시 합격 \r\n-행정중심복합도시건설청(세종시) 주민지원본부장\r\n-문화체육관광부 아시아문화중심도시추진단장\r\n-한국지방자치학회 부회장\r\n-제19대 문재인 대통령 후보 광주 총괄선대본부장 \r\n-광주광역시 문화경제부시장\r\n\r\n[저서]\r\n- 문화 속에 미래가 있다(2001), 디자인하우스 \r\n-사랑한다면 반만 취하라(2006), 현대문예(수필)\r\n-아시아로 통하는 문화(2011), 열화당\r\n-문화가 밥이다(2016), 전라도닷컴\r\n-비워야 채운다(2018), 이문출판사\r\n-더불어사는경제 나누는 일자리(2019), 이문출판사\r\n\r\n\r\n",
        ASSEM_ADDR: "의원회관 443호",
    },
    {
        HG_NM: "이상민",
        HJ_NM: "李相珉",
        ENG_NM: "LEE SANGMIN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1958-01-22",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "대전 유성구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "외교통일위원회",
        CMITS: "외교통일위원회",
        REELE_GBN_NM: "5선",
        UNITS: "제17대, 제18대, 제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-0924",
        E_MAIL: "smlee@assembly.go.kr",
        HOMEPAGE: "https://blog.naver.com/lawlsm2016",
        STAFF: "조원휘, 허동혁",
        SECRETARY: "김경화, 박상인",
        SECRETARY2: "김항중, 이대영, 전형우, 김예니, 이유리",
        MONA_CD: "ZYH1940A",
        MEM_TITLE: "제17, 18, 19, 20, 21대 국회의원(대전 유성구을)\r\n충남대 법대졸업 ,변호사\r\n(현) 국회 외교통일위원회 위원\r\n(현) 국회 4차산업혁명포럼 공동대표\r\n(현) 더불어민주당 중앙당선거관리위원장\r\n\r\n(전) 국회 사법개혁특별위원회 위원장\r\n(전) 국회 법제사법위원회 위원장\r\n(전) 더불어민주당 국회세종의사당추진특별위원회 공동위원장\r\n(전) 더불어민주당 검찰개혁특별위원회 공동위원장\r\n(전) 더불어민주당 과학기술특위·정보통신특위 위원장",
        ASSEM_ADDR: "의원회관 401호",
    },
    {
        HG_NM: "이상직",
        HJ_NM: "李相稷",
        ENG_NM: "LEE SANGJIK",
        BTH_GBN_NM: "양",
        BTH_DATE: "1963-01-30",
        JOB_RES_NM: "위원",
        POLY_NM: "무소속",
        ORIG_NM: "전북 전주시을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국방위원회",
        CMITS: "국방위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제19대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-1781",
        E_MAIL: "sangjik21c@naver.com",
        HOMEPAGE: null,
        STAFF: "윤삼정",
        SECRETARY: "박성웅, 백창민, 송미경",
        SECRETARY2: "강경미, 정제일, 서영화",
        MONA_CD: "CFE3998F",
        MEM_TITLE: "[학력]\r\n - 동국대 경영학과 학사\r\n - 고려대 경영대학원 경영학 석사\r\n\r\n[경력]\r\n- 현) 제21대 국회의원(전주시을)\r\n- 현) 국회 문화체육관광위원회, 예산결산특별위원회 위원\r\n- 전) 중소벤처기업진흥공단 이사장\r\n- 전) 대통령 직속 일자리위원회 위원\r\n- 전) 민주통합당 원내부대표\r\n- 전) 민주통합당 직능위원장\r\n- 전) 제19대 국회의원(정무위원회, 예산결산특별위원회 위원)",
        ASSEM_ADDR: "의원회관 507호",
    },
    {
        HG_NM: "이상헌",
        HJ_NM: "李相憲",
        ENG_NM: "LEE SANGHEON",
        BTH_GBN_NM: "음",
        BTH_DATE: "1954-07-10",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "울산 북구",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "문화체육관광위원회",
        CMITS: "문화체육관광위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-8630~2",
        E_MAIL: "leesh_2018@naver.com",
        HOMEPAGE: "https://blog.naver.com/leesh_2018",
        STAFF: "이도경, 이재관",
        SECRETARY: "안창률, 조호제",
        SECRETARY2: "정재령, 이정하, 김인화, 최명주, 조예슬",
        MONA_CD: "WVU2479T",
        MEM_TITLE: " ▶ 학력\r\n\r\n- 동국대학교 대학원 호텔관광경영학 박사\r\n\r\n ▶ 경력\r\n\r\n (前)\r\n- 울산 흥사단 대표\r\n- 울산시민단체협의회 공동대표\r\n- 명성재건학교 교사\r\n- 노무현 대통령 후보 울산선거대책본부장\r\n- 문재인 대통령 후보 울산선거대책본부장\r\n- 민주평화통일자문회의 울산북구협의회장\r\n- 야학전국연합회 상임고문\r\n- 울산누리학교장\r\n- 울산노인대학장\r\n- 농소중학교 총동문회장 \r\n- 동북아관광개발 연구원장\r\n- 더불어민주당 중앙당 정책위원회 상임부의장\r\n- 더불어민주당 지방혁신균형발전추진단 위원\r\n\r\n\r\n (現)\r\n- 국회의원 (제 20대, 21대)\r\n- 더불어민주당 울산광역시당 위원장\r\n- 더불어민주당 지역균형뉴딜분과위원회 위원\r\n- 더불어민주당 지방소멸 대응 TF 위원\r\n- 국가유공자\r\n- 청소년지도사\r\n- 사회복지사\r\n- 국민훈장 석류장 수상",
        ASSEM_ADDR: "의원회관 1006호",
    },
    {
        HG_NM: "이성만",
        HJ_NM: "李成萬",
        ENG_NM: "LEE SUNGMAN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1961-11-04",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "인천 부평구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "산업통상자원중소벤처기업위원회",
        CMITS: "산업통상자원중소벤처기업위원회, 예산결산특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6090",
        E_MAIL: "giant.smlee@gmail.com",
        HOMEPAGE: "http://smlee6409.blog.me",
        STAFF: "김왕태, 김주호",
        SECRETARY: "노현진, 이종찬",
        SECRETARY2: "정진성, 이슬아, 김민수, 손유민, 김동준",
        MONA_CD: "8KF7223D",
        MEM_TITLE: "* 학력\r\n연세대학교 물리학과 졸업\r\n제36회 행정고시합격\r\n\r\n* 경력\r\n현)더불어민주당 인천부평구갑 지역위원장\r\n현)더불어민주당 정책위원회 상임부의장\r\n현) 더불어민주당 재외동포위원장 \r\n\r\n전)더불어민주당 인천시당 정책의원장\r\n전)제6대 인천광역시 시의회 후반기 의장\r\n전)인하대 행정대학원 겸임교수\r\n\r\n\r\n",
        ASSEM_ADDR: "의원회관 532호",
    },
    {
        HG_NM: "이소영",
        HJ_NM: "李素永",
        ENG_NM: "LEE SOYOUNG",
        BTH_GBN_NM: "양",
        BTH_DATE: "1985-02-10",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 의왕시과천시",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "산업통상자원중소벤처기업위원회",
        CMITS: "산업통상자원중소벤처기업위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-1051",
        E_MAIL: "hello@imsoyoung.kr",
        HOMEPAGE: "https://blog.naver.com/soyoung8lee",
        STAFF: "김세호, 양재원",
        SECRETARY: "박태준, 송일용",
        SECRETARY2: "김미경, 윤영주, 한신혜, 손지희, 김선영",
        MONA_CD: "WTR5885Y",
        MEM_TITLE: "◆ 현  직 \r\n- 더불어민주당 대변인\r\n- 더불어민주당 미래전환 K-뉴딜위원회 그린뉴딜분과 간사\r\n- 더불어민주당 탄소중립특별위원회 실행위원회 간사\r\n\r\n◆ 경  력\r\n- 더불어민주당 원내부대표\r\n- 더불어민주당 코로나19국난극복위원회 포스트코로나본부 한국형뉴딜TF 위원\r\n- 국가기후환경회의 저감위원회 전문위원\r\n- 녹색성장위원회 민간위원\r\n- 김앤장 법률사무소 변호사\r\n- 제41기 사법연수원 수료\r\n- 제51회 사법시험 합격\r\n\r\n◆ 학  력 \r\n- 서울대학교 대학원 법학 석사과정 수료\r\n- 성균관대학교 법학 학사\r\n- 백영고등학교",
        ASSEM_ADDR: "의원회관 546호",
    },
    {
        HG_NM: "이수진",
        HJ_NM: "李壽珍",
        ENG_NM: "LEE SOOJIN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1969-05-14",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "환경노동위원회",
        CMITS: "여성가족위원회, 환경노동위원회, 국회운영위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-6351",
        E_MAIL: "leesj545@hanmail.net",
        HOMEPAGE: "https://blog.naver.com/sjl2778",
        STAFF: "한동균, 홍은광",
        SECRETARY: "김숙진, 변철환",
        SECRETARY2: "김유나, 임동신, 김민정, 강민성, 전경헌",
        MONA_CD: "0R68099X",
        MEM_TITLE: "2021.04. ~            더불어민주당 원내부대표\r\n2021.12. ~            더불어민주당 국가균형발전특별위원회 부위원장\r\n2020.12. ~            더불어민주당 전국여성위원회 여성리더십센터 소장\r\n2020.09. ~            더불어민주당 코로나19국난극복위원회 보육(가정)TF 팀장\r\n2020.03.                전 더불어민주당 코로나19국난극복위원회 부위원장\r\n2018.09. ~ 2020.03. 전 더불어민주당 최고위원\r\n2016.12. ~ 2018.08. 전 더불어민주당 전국노동위원회 위원장\r\n2015.09. ~ 2018.     전 중앙노동위원회 근로자위원\r\n2015.04. ~ 2016.01. 전 더불어민주당 부대변인\r\n2015.02. ~ 2020.04. 전 한국노동조합총연맹 부위원장\r\n2015.01. ~ 2018.12. 전 국민건강보험공단 재정운영위원회 위원\r\n2014.11. ~ 2020.04. 전 한국노총 전국의료산업노동조합연맹 위원장\r\n2011.04. ~ 2017.     전 한국노총 의료노련 연세의료원노동조합 위원장",
        ASSEM_ADDR: "의원회관 545호",
    },
    {
        HG_NM: "이수진",
        HJ_NM: "李秀眞",
        ENG_NM: "LEE SUJIN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1969-11-03",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 동작구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "법제사법위원회",
        CMITS: "국회운영위원회, 법제사법위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-3174",
        E_MAIL: "sujinleehope@gmail.com",
        HOMEPAGE: "http://blog.naver.com/sujinleehope",
        STAFF: "박용규, 시명준",
        SECRETARY: "강준우, 이수현",
        SECRETARY2: "박선영, 홍혜린, 박상선, 허웅, 이호진",
        MONA_CD: "D4L60530",
        MEM_TITLE: "2021.05 ~ 제21대 국회 전반기 법제사법위원회 위원\r\n2021.05 ~ 제21대 국회 전반기 운영위원회 위원\r\n2021.04 ~ 더불어민주당 원내부대표\r\n2020.09 ~ 2021.06  더불어민주당 젠더폭력신고상담센터 센터장\r\n2020.07 ~ 2021.05 제21대 국회 전반기 산업통상자원중소벤처기업위원회 위원\r\n2020.07 ~ 2021.08 제21대 국회 전반기 여성가족위원회 위원\r\n2020.05 ~ 제21대 국회의원 (서울 동작구을/더불어민주당)\r\n\r\n2019.02 ~ 2020.01 수원지방법원 부장판사\r\n2017.02 ~ 2019.02 대전지방법원 부장판사\r\n2015.02 ~ 2017.02 대법원 재판연구관\r\n2011.02 ~ 2014.02 서울남부지방법원 판사\r\n2009.02 ~ 2011.02 서울중앙지방법원 판사\r\n2002.02 제31기 사법연수원 수료\r\n1998. 제40회 사법시험 합격\r\n",
        ASSEM_ADDR: "의원회관 735호",
    },
    {
        HG_NM: "이양수",
        HJ_NM: "李亮壽",
        ENG_NM: "LEE YANGSOO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1967-08-15",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "강원 속초시인제군고성군양양군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "농림축산식품해양수산위원회",
        CMITS: "농림축산식품해양수산위원회, 여성가족위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-8150",
        E_MAIL: "2yangs6288@naver.com",
        HOMEPAGE: null,
        STAFF: "길재철, 장순칠",
        SECRETARY: "장종락, 최정식",
        SECRETARY2: "송연정, 이화은, 박성훈, 이주연, 오혜인",
        MONA_CD: "S9U45255",
        MEM_TITLE:
            "* 학 력\r\n- 고려대학교 학사\r\n- 속초고등학교\r\n- 설악중학교\r\n- 교동초등학교\r\n\r\n* 경 력\r\n- 제20대,21대 국회의원(강원도 속초시.인제군.고성군.양양군)\r\n- 국민의힘 대통령후보 수석대변인\r\n\r\n- 국민의힘 전국위원회 부의장(前)\r\n- 국민의힘 정책위원회 부의장(前)\r\n- 국민의힘 4.7재보궐선거 경선준비위원회 위원(前)\r\n- 자유한국당 원내부대표.원내대변인(前)\r\n- 자유한국당 총선기획단 위원(前)\r\n- 자유한국당 소상공인특별위원회 위원 (前)\r\n- 자유한국당 국가미래비전특별위원회 위원 (前)\r\n- 자유한국당 중앙직능위원회 해양수산분과위원장 (前)\r\n- 자유한국당 강원도당 위원장(前)\r\n- 자유한국당 법률자문위원회 부위원장(前)\r\n- 자유한국당 인재영입위원회 위원(前)\r\n- 자유한국당 중앙선거대책위 전략기획본부 위원(前)\r\n- 자유한국당 중앙선거대책위 공명선거추진 위원(前)\r\n- 자유한국당 선거기획단 청년본부장(前)\r\n- 자유한국당 민생특별위원회 위원(前)\r\n- 자유한국당 청년소통특별위원회 위원(前)\r\n- 국회 정치발전특별위원회 위원(前)\r\n- 국회지방재정.분권특별위원회 위원(前)\r\n- 새누리당 원내부대표(前)\r\n- 정치평론가(前)\r\n- 새누리당 수석부대변인(前)\r\n- 대통령비서실 행정관(前)\r\n\r\n\r\n* 수상내역\r\n- 2021  대한민국소비자대상_사회적가치입법부문\r\n- 2020  국정감사 친환경베스트의원 [(사)한국환경정보연구센터]\r\n- 2020  제15대 한농연 우수국감의원\r\n- 2019  국정감사NGO모니터단 국정감사 국리민복상\r\n- 2019  국정감사 스코어보드 대상 (머니투데이&amp;법률앤미디어)\r\n- 2019  제20대 2019 국정감사 우수 의정활동 대상[(사)한국유권자총연맹]\r\n- 2019  자유한국당 국정감사 우수의원\r\n- 2019  국회의원 아름다운 말 선플상\r\n- 2019  인터넷에코어워드 인터넷핫픽 국회의원대상\r\n- 2019  제8회 국회를 빛낸 바른 정치언어상(으뜸언어상)\r\n- 2018  국정감사NGO모니터단 국정감사 국리민복상\r\n- 2018  한국수산업경영인중앙연합회 국정감사 우수국회의원\r\n- 2018  법률소비자연맹 국회의원 헌정대상\r\n- 2017  국정감사NGO모니터단 국정감사 우수국회의원\r\n- 2017  자유한국당 국정감사 우수의원\r\n- 2017  유권자시민행동 대한민국 유권자대상\r\n- 2017  법률소비자연맹 국회의원 헌정대상\r\n- 2016  새누리당 국정감사 우수의원\r\n- 2016  대한민국 평화안보대상",
        ASSEM_ADDR: "의원회관 938호",
    },
    {
        HG_NM: "이영",
        HJ_NM: "李永",
        ENG_NM: "LEE YOUNG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1969-06-06",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "행정안전위원회",
        CMITS: "행정안전위원회, 국회운영위원회, 중앙선거관리위원회 위원(문상부) 선출에 관한 인사청문특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-2174",
        E_MAIL: "futurekorea20@naver.com",
        HOMEPAGE: "http://blog.naver.com/futurekorea20",
        STAFF: "권오훈, 이종태",
        SECRETARY: "손성민, 이혜인",
        SECRETARY2: "이승민, 김학구, 전효수, 금성윤, 이선우",
        MONA_CD: "1X376850",
        MEM_TITLE: "제21대 국회의원(비례대표/국민의힘)\r\n국회 행정안전위원회 위원\r\n국민의힘 정부정책 감시특별위원회 위원장\r\n국민의힘 디지털정당위원회 위원장\r\n국민의힘 사모펀드 비리방지 및 피해구제 특별위원회 위원\r\n국민의힘 경제혁신위원회 위원\r\n\r\n[학 력]\r\n한국과학기술원(KAIST) 암호학 박사수료\r\n한국과학기술원(KAIST) 암호학 석사\r\n광운대학교 수학과 학사\r\n\r\n[경 력]\r\n前 테르텐 대표이사\r\n前 한국여성벤처협회 회장\r\n前 산업통상자원부 통상조약 국내대책위원회 민간위원\r\n前 사이버작전사령부 자문위원\r\n前 한국저작권보호원 이사\r\n前 한국소프트웨어산업협회 부회장\r\n前 국가기술자문회의 위원\r\n前 한국무역협회 부회장",
        ASSEM_ADDR: "의원회관 337호",
    },
    {
        HG_NM: "이용",
        HJ_NM: "李鏞",
        ENG_NM: "LEE YONG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1978-06-23",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "문화체육관광위원회",
        CMITS: "문화체육관광위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-5076",
        E_MAIL: "yonglee0623@naver.com",
        HOMEPAGE: "https://blog.naver.com/yonglee0623",
        STAFF: "김상조, 문승현",
        SECRETARY: "곽재욱, 조재한",
        SECRETARY2: "정우창, 김군나, 이정민, 안재현, 원치완, 최지호",
        MONA_CD: "5UN9725L",
        MEM_TITLE:
            "학력사항\r\n2016 ~ 한국체육대학교 대학원 스포츠산업경영 박사과정 재학\r\n~ 2013 연세대학교 교육대학원 체육교육 석사\r\n\r\n경력사항\r\n2020.11~ 제21대 국회 전반기 국회운영위원회 위원\r\n2020.10~ 국민의힘 약자와의동행위원회 현장동행분과 위원\r\n2020.09~ 국민의힘 저출생특별위원회 위원\r\n2020.09~ 국민의힘 원내부대표\r\n2020.07~ 제21대 국회 전반기 문화체육관광위원회 위원\r\n2020.05~2020.09 미래통합당 원내부대표\r\n2020.05~2020.09 미래통합당 저출생특별위원회 위원\r\n2020.05 ~ 제21대 국회의원\r\n            봅슬레이 스켈레톤 국제연맹 스포츠 위원\r\n2018 평창 동계올림픽 봅슬레이스켈레톤 국가대표 총감독\r\n       봅슬레이스켈레톤 국가대표 총감독\r\n2014 소치 동계올림픽 봅슬레이스켈레톤 국가대표 감독\r\n       강원도청 봅슬레이스켈레톤팀 감독\r\n2010 제21회 밴쿠버 동계올림픽 남자 루지 국가대표\r\n1998 제18회 나가노 동계올림픽 남자 루지 국가대표\r\n        강원도청 선수\r\n\r\n수상내역 \r\n2018 제56회 대한민국 체육상 시상식 지도상\r\n2018 제23회 코카콜라 체육대상 우수지도자상\r\n2016 대한체육회 체육상 시상식 지도자부문 우수상\r\n2010 삼섬 두근두근 Tomorrow 캠페인 두근두근 네티즌 금메달\r\n\r\n저서\r\n우린 팀원 [Team one 스켈레톤 봅슬레이 이용 총감독의] <무한 2018.04.05>",
        ASSEM_ADDR: "의원회관 338호",
    },
    {
        HG_NM: "이용빈",
        HJ_NM: "李龍彬",
        ENG_NM: "LEE YONGBIN",
        BTH_GBN_NM: "양",
        BTH_DATE: "1964-12-15",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "광주 광산구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "과학기술정보방송통신위원회",
        CMITS: "과학기술정보방송통신위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-4291",
        E_MAIL: "gwangsan.lyb@gmail.com",
        HOMEPAGE: "http://blog.naver.com/fmdoc4u",
        STAFF: "김동헌, 김형균",
        SECRETARY: "정수명, 정현주",
        SECRETARY2: "박태진, 정희찬, 조성윤, 김은지, 서경진",
        MONA_CD: "GKD32201",
        MEM_TITLE:
            "■ 학력\r\n1996 전남대학교 의학과\r\n1983 금호고등학교\r\n1980 숭의중학교\r\n1976 광주남초등학교\r\n\r\n■ 대표 경력\r\n더불어민주당 대변인(현)\r\n더불어민주당 원내부대표(전)\r\n더불어민주당 광주광역시당 광산구갑 지역위원장(현)\r\n더불어민주당 국난극복 미래전환 K-뉴딜위원회 그린뉴딜분과 위원(현)\r\n더불어민주당 백신·치료제 특별위원회 위원(현)\r\n더불어민주당 2050탄소중립특별위원회 자원순환분과/건물분과 위원(현)\r\n더불어민주당 공공의료TF 위원(현)\r\n더불어민주당 을지로위원회 위원(현)\r\n더불어민주당 세월호특별위원회 위원(현)\r\n더불어민주당 사회적경제위원회 입법추진단(현)\r\n더불어민주당 6·15남북공동선언20주년특별위원회 위원(현)\r\n더불어민주당 5.18 40주년 특별위원회 부위원장(현)\r\n\r\n광주광역시 비정규직센터 이사장(전)\r\n광주광역시 이주민건강인권센터 이사장(전)\r\n대한가정의학회 광주전남 지회장(전)\r\n광주광역시 가정의학과 의사회 회장(전)\r\n시민플랫폼 나들 대표(전)\r\n광주시 의사협회 사회참여 이사(전)\r\n이용빈 가정의학과의원 원장(전)\r\n\r\n■ 수상 내역\r\n2020 더불어민주당 국정감사 우수의원상\r\n2020 국정감사NGO모니터단 국정감사 국리민복상\r\n2020 원자력 안전 우수의원상\r\n2020 한국평화언론대상 의료봉사대상\r\n2020 한국언론미디어그룹 대한민국 의정대상\r\n2019 제1회 복지TV호남방송 방송대상 정치부문 의료봉사대상\r\n2019 한국지역발전대상 봉사부문 대상\r\n2019 더불어민주당 제로페이 전국 확산을 위한 캠페인 당대표 특별포상\r\n2019 더불어민주당 당무감사 최우수 지역위원회 당대표 특별포상\r\n2019 더불어민주당 전국지역위원회 우수활동 사례 공모전 민주대상\r\n2019 보령의료봉사상\r\n2018 대한민국 자랑스러운 한국인 사회부문 공로상\r\n2018 광주광역시의사회 무등의림상 봉사상\r\n2014 대한가정의학회 올해의 가정의 상\r\n2010 보건복지부장관 표창\r\n2009 대한가정의학회 자랑스러운 개원 회원상",
        ASSEM_ADDR: "의원회관 527호",
    },
    {
        HG_NM: "이용선",
        HJ_NM: "李庸瑄",
        ENG_NM: "LEE YONGSUN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1958-02-12",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 양천구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "외교통일위원회",
        CMITS: "외교통일위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-7727",
        E_MAIL: "yslee9282@naver.com",
        HOMEPAGE: "http://blog.naver.com/2020yslee",
        STAFF: "김종길, 장현명",
        SECRETARY: "곽병관, 손주연",
        SECRETARY2: "김정은, 김대현, 이은지, 김남기, 박정후",
        MONA_CD: "9JF4562W",
        MEM_TITLE: "서울대학교 토목공학과 학사\r\n광주고등학교\r\n\r\n전) 대통령비서실 시민사회수석\r\n전) 여성이만드는일과미래 이사\r\n전) 내가꿈꾸는나라 공동대표\r\n전) 혁신과 통합 상임대표\r\n전) 시민사회단체연대회의 공동대표\r\n전) 시민평화포럼 공동대표\r\n전) 민주통합당 공동대표\r\n전) 우리민족서로돕기운동 공동대표\r\n전) 겨레의 숲 상임이사\r\n전) 민주평화통일자문회의 상임위원\r\n전) 전국노동운동단체협의회 중앙집행위원\r\n전) 경제정의실천시민연합 기획실장",
        ASSEM_ADDR: "의원회관 931호",
    },
    {
        HG_NM: "이용우",
        HJ_NM: "李龍雨",
        ENG_NM: "LEE YONGWOO",
        BTH_GBN_NM: "양",
        BTH_DATE: "1964-02-01",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 고양시정",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "정무위원회",
        CMITS: "정무위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-8780",
        E_MAIL: "minjoolee2020@gmail.com",
        HOMEPAGE: "http://blog.naver.com/ywlee9501",
        STAFF: "김성영, 이승현",
        SECRETARY: "박광채, 전상규",
        SECRETARY2: "한진, 최성원, 조재성, 유신욱, 강소라",
        MONA_CD: "G7512472",
        MEM_TITLE: "(현)제21대 국회 정무위원회 위원\r\n(현)더불어민주당 정책위원회 상임부의장\r\n서울대 경제학과 졸업, 서울대 경제학 석사, 박사\r\n(전)더불어민주당 규제혁신특별위원장\r\n(전)국회 4차산업혁명특위 자문위원\r\n(전)한국카카오은행 공동대표이사\r\n",
        ASSEM_ADDR: "의원회관 313호",
    },
    {
        HG_NM: "이용호",
        HJ_NM: "李容鎬",
        ENG_NM: "LEE YONGHO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1960-03-20",
        JOB_RES_NM: "위원",
        POLY_NM: "무소속",
        ORIG_NM: "전북 남원시임실군순창군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "보건복지위원회",
        CMITS: "보건복지위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2570",
        E_MAIL: "614lyh@naver.com",
        HOMEPAGE: "http://blog.naver.com/614lyh",
        STAFF: "양준호, 오진웅",
        SECRETARY: "복일기, 이정훈",
        SECRETARY2: "안은경, 김두희, 박진형, 신정원",
        MONA_CD: "DBA1057Z",
        MEM_TITLE: "전주고\r\n서울대학교 산업공학과 학사\r\n\r\n경향신문 정치부 차장(전)\r\n국무총리 비서실 공보담당비서관(전)\r\n국회사무처 홍보기획관(전)\r\n국민의당 원내대변인(전)\r\n국민의당 정책위의장\r\n제20대 국회의원",
        ASSEM_ADDR: "의원회관 518호",
    },
    {
        HG_NM: "이원욱",
        HJ_NM: "李元旭",
        ENG_NM: "LEE WONWOOK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1963-03-20",
        JOB_RES_NM: "위원장",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 화성시을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "과학기술정보방송통신위원회",
        CMITS: "과학기술정보방송통신위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6471",
        E_MAIL: "ewon33@gmail.com",
        HOMEPAGE: "http://blog.naver.com/ewon33",
        STAFF: "서선미, 최면호",
        SECRETARY: "김소탈, 유지홍",
        SECRETARY2: "김영환, 남민우, 전성균, 이시은, 김수환",
        MONA_CD: "16D7652C",
        MEM_TITLE: "충남 보령 출신/ 고려대학교 법학과 졸업\r\n제19·20·21대 국회의원\r\n(현)국회 정무위원회 위원\r\n(현)국회세계한인경제포럼 대표\r\n(현)국회모빌리티포럼 공동대표\r\n(현)노무현재단 기획위원\r\n(현)(사)행동하는 양심 이사\r\n사회복지사(2급) / 숲해설가(산림청 인증)\r\n\r\n[국회경력]\r\n산업통상자원위원회 위원\r\n국토교통위원회 간사\r\n기획재정위원회 간사\r\n과학기술정보방송통신위원회 간사\r\n창조경제활성화특위 위원\r\n동북아역사왜곡대책특위 위원\r\n민생경제특위 위원\r\n대법관 인사청문회특위 위원\r\n감사원장 인사청문회특위 위원\r\n국회신재생에너지포럼 공동대표\r\n국회해외동포무역경제포럼 부회장\r\n\r\n[더불어민주당 주요 당직]\r\n원내 수석부대표\r\n전략기획위원장\r\n정책위원회 제3, 4 정책조정위원장\r\n국가경제자문회의 자문위원\r\n혁신성장추진위원회 위원\r\n문재인대선후보 선대위 집단지성센터 단장\r\n국회혁신특별위원회 위원\r\n포용국가비전위원회 위원",
        ASSEM_ADDR: "의원회관 841호",
    },
    {
        HG_NM: "이원택",
        HJ_NM: "李源澤",
        ENG_NM: "LEE WONTAEG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1970-01-25",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "전북 김제시부안군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "농림축산식품해양수산위원회",
        CMITS: "농림축산식품해양수산위원회, 여성가족위원회, 예산결산특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-6788-7031",
        E_MAIL: "we1taeg@daum.net",
        HOMEPAGE: null,
        STAFF: "이창무, 이해규",
        SECRETARY: "김재훈, 이기언",
        SECRETARY2: "이은석, 권순영, 김동우, 박경, 박성훈",
        MONA_CD: "DAV7257X",
        MEM_TITLE: null,
        ASSEM_ADDR: "의원회관 523호",
    },
    {
        HG_NM: "이은주",
        HJ_NM: "李恩周",
        ENG_NM: "LEE EUNJU",
        BTH_GBN_NM: "음",
        BTH_DATE: "1969-09-02",
        JOB_RES_NM: "위원",
        POLY_NM: "정의당",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "행정안전위원회",
        CMITS: "행정안전위원회, 중앙선거관리위원회 위원(문상부) 선출에 관한 인사청문특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-5601",
        E_MAIL: "515.lee.ej@gmail.com",
        HOMEPAGE: null,
        STAFF: "김성희, 박선민",
        SECRETARY: "배혜정, 이승환",
        SECRETARY2: "김형근, 김보미, 이다예, 전태혁, 박경민",
        MONA_CD: "W1Q6753M",
        MEM_TITLE: "변화의 결과로 증명하는 정의로운 정치!\r\n21대 정의당 국회의원 이은주입니다.\r\n\r\n(현) 정의당 노원구위원회 운영위원\r\n(전) 정의당 시민을위한공공기관특별위원장\r\n(전) 서울지하철노조 정책실장\r\n(전) 서울지하철노조 여성부장\r\n(전) 서울지하철노조 역무 지회장\r\n(전) 서울특별시 노사정 서울모델협의회 실무위원\r\n(전) 서울특별시 대중교통요금제도 및 경영혁신 TF위원",
        ASSEM_ADDR: "의원회관 515호",
    },
    {
        HG_NM: "이인영",
        HJ_NM: "李仁榮",
        ENG_NM: "LEE INYOUNG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1964-06-28",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 구로구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "기획재정위원회",
        CMITS: "기획재정위원회",
        REELE_GBN_NM: "4선",
        UNITS: "제17대, 제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6811~3",
        E_MAIL: "liy1964@empal.com",
        HOMEPAGE: "https://blog.naver.com/liy1964",
        STAFF: "장백건, 황훈",
        SECRETARY: "양명희, 홍성자",
        SECRETARY2: "장병민, 성정미, 김지한",
        MONA_CD: "3ZR4438W",
        MEM_TITLE: "충북 충주 출생\r\n충주 중·고등학교 졸업\r\n고려대학교 언론대학원 언론학 석사 졸업\r\n\r\n고려대학교 20대 총학생회장\r\n전국대학생대표자협의회(전대협) 1기 의장\r\n민주당, 민주통합당 최고위원\r\n국회 남북경제협력특별위원회 위원장\r\n더불어민주당 원내대표\r\n제 41대 대한민국 통일부 장관\r\n\r\n2003 제1회 박종철 인권상 수상\r\n2015 안중근 평화대상",
        ASSEM_ADDR: "의원회관 801호",
    },
    {
        HG_NM: "이장섭",
        HJ_NM: "李將燮",
        ENG_NM: "LEE JANGSUB",
        BTH_GBN_NM: "음",
        BTH_DATE: "1963-05-14",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "충북 청주시서원구",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "산업통상자원중소벤처기업위원회",
        CMITS: "산업통상자원중소벤처기업위원회, 예산결산특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-4441",
        E_MAIL: null,
        HOMEPAGE: null,
        STAFF: "김종기, 김진오",
        SECRETARY: "박찬중, 임재진",
        SECRETARY2: "서준원, 김종수, 정은선, 장익진, 김은채",
        MONA_CD: "7I09543O",
        MEM_TITLE: "2020.06 ~ 제21대 국회 전반기 산업통상자원중소벤처기업위원회 위원\r\n2020.05 ~ 제21대 국회의원 (충북 청주시서원구/더불어민주당)\r\n2017.11 ~ 2019.12 충청북도 정무부지사\r\n2017 문재인 대통령비서실 선임행정관\r\n2016 정세균 국회의장 비서관\r\n2012 노영민 국회의원 보좌관\r\n2011 국회 교섭단체 민주당 정책연구위원\r\n2004 노영민 국회의원 보좌관\r\n2002 민주당충북도당 대변인\r\n1992 통일시대국민회의 집행위원\r\n1988 청주민주운동청년연합 사무국장\r\n1986 충북민주화운동협의회 상임위원",
        ASSEM_ADDR: "의원회관 442호",
    },
    {
        HG_NM: "이재정",
        HJ_NM: "李在汀",
        ENG_NM: "LEE JAEJUNG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1974-08-02",
        JOB_RES_NM: "간사",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 안양시동안구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "외교통일위원회",
        CMITS: "외교통일위원회, 윤리특별위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-2677",
        E_MAIL: "leejjlaw@gmail.com",
        HOMEPAGE: "https://blog.naver.com/leejjlaw",
        STAFF: "김서경, 장연희",
        SECRETARY: "송지홍, 이재연",
        SECRETARY2: "김수철, 고나형, 이택민, 임세훈, 임채민",
        MONA_CD: "UQ282145",
        MEM_TITLE: "(現)21대 더불어민주당 안양시동안구을 국회의원\r\n(現)국회 윤리특별위원회 위원\r\n(現)국회 외교통일위원회 위원\r\n(現)더불어민주당 안양시 동안을 지역위원장\r\n(前)20대 더불어민주당 비례대표 국회의원\r\n(前)더불어민주당 당대변인\r\n(前)국회 행정안전위원회 위원\r\n(前)더불어민주당 국회혁신특별위원회 위원\r\n(前)국회 예산결산특별위원회 위원\r\n(前)더불어민주당 국민통합위원회 상임부위원장\r\n(前)더불어민주당 정책위부의장\r\n(前)국회 여성가족위원회 위원\r\n(前)국회 운영위원회 위원\r\n(前)더불어민주당 원내대변인\r\n\r\n민주사회를 위한 변호사 모임 사무차장\r\n참여연대 공익법센터 운영위원\r\n세계 시각장애인 경기대회 조직위원회 조직위원 겸 감사\r\n민주사회를 위한 변호사 모임 언론위원회 위원",
        ASSEM_ADDR: "의원회관 543호",
    },
    {
        HG_NM: "이정문",
        HJ_NM: "李楨文",
        ENG_NM: "LEE JUNGMUN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1973-01-05",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "충남 천안시병",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "정무위원회",
        CMITS: "정무위원회, 윤리특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2350",
        E_MAIL: "ljm935@na.go.kr",
        HOMEPAGE: "https://blog.naver.com/jongmunlee415",
        STAFF: "박종갑, 조기호",
        SECRETARY: "박경이, 박현식",
        SECRETARY2: "김요한, 김혜수, 김세환, 황한솔, 전정화",
        MONA_CD: "O0I2045I",
        MEM_TITLE: "[경력] \r\n▶ 제21대 국회의원\r\n▶ 국회 정무위원회 위원\r\n▶ 국회 예산결산특별위원회 위원\r\n▶ 더불어민주당 세월호특별위원회 위원\r\n▶ (전) 천안시 고문변호사\r\n▶ (전) 대전지방법원 천안지원 국선변호인\r\n▶ (전) 대전지방법원 천안지원 민사ㆍ가사 소송구조 지정변호사\r\n▶ (전) 더불어민주당 정책위원회 부의장\r\n▶ (전) 더불어민주당 천안병 을지키는 민생실천위원회 위원장\r\n▶ (전) 더불어민주당 천안병 청년위원회 위원장\r\n▶ (전) 북일장학문화재단 이사\r\n▶ (전) 충남연구원 이사\r\n▶ (전) 청룡적십자사봉사회 회원\r\n▶ (전) 충남장애인권익옹호기관 장애인학대판정위원회 위원\r\n▶ (전) 천안청년회의소 감사\r\n▶ (전) 천안청년100인회 감사\r\n▶ 제43회 사법시험 합격 \r\n\r\n[학력] \r\n▶ 한양대 법학과 졸업 \r\n▶ 천안 신안초(13회) 졸업\r\n▶ 천안 천성중(19회) 졸업\r\n▶ 북일고(13회) 졸업",
        ASSEM_ADDR: "의원회관 935호",
    },
    {
        HG_NM: "이종배",
        HJ_NM: "李鍾培",
        ENG_NM: "LEE JONGBAE",
        BTH_GBN_NM: "음",
        BTH_DATE: "1957-05-30",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "충북 충주시",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국토교통위원회",
        CMITS: "국토교통위원회, 예산결산특별위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-4131~3",
        E_MAIL: "victoryljb@naver.com",
        HOMEPAGE: null,
        STAFF: "김성훈, 임순묵",
        SECRETARY: "김영진, 장민호",
        SECRETARY2: "김교범, 이지영, 이미향, 김주현, 김정재",
        MONA_CD: "HSW1214Q",
        MEM_TITLE: "(현) 국민의힘 정책위원회 의장\r\n(현) 제21대 국회의원(국민의힘, 충북충주)\r\n\r\n- 국회 예산결산특별위원회 간사\r\n- 국회 산업통상자원중소벤처기업위원회 간사\r\n- 국회 교육문화체육관광위원회 간사\r\n- 제19, 20대 국회의원\r\n- 민선 5기 충주시장\r\n- 행정안전부 제2차관",
        ASSEM_ADDR: "의원회관 913호",
    },
    {
        HG_NM: "이종성",
        HJ_NM: "李鍾成",
        ENG_NM: "LEE JONGSEONG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1970-02-17",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "보건복지위원회",
        CMITS: "보건복지위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2374, 02-6788-7066",
        E_MAIL: "217jongseong@naver.com",
        HOMEPAGE: "http://blog.naver.com/217jongseong",
        STAFF: "박종현, 성종호",
        SECRETARY: "김종길, 송효근",
        SECRETARY2: "이상호, 최희연, 임계영, 장서윤, 한창현",
        MONA_CD: "FDC3144T",
        MEM_TITLE: "현) 제21대 국회의원(국민의힘 비례대표)\r\n현) 국회 보건복지위원회 위원\r\n현) 국민의힘 중앙장애인위원장\r\n현) 국민의힘 국민대통합위원회 위원\r\n현) 국민의힘 정부정책감사특위 위원\r\n현) 국민의힘 약자와의 동행위원회 위원\r\n현) 국민의힘 사회안전망 및 고용유연성 강화특위 위원\r\n전) 미래통합당 정강정책개정특위 위원\r\n전) (사)한국지체장애인협회 사무총장\r\n전) 보건복지부 장애인종합판정체계 개편추진단 자문위원\r\n전) 정부업무평가위원회 국정과제 평가전문위원회 위원\r\n전) 한국장애인고용공단 비상임이사\r\n전) 국민연금공단 장애등급심사위원회 위원\r\n전) 문화체육관광부 체육국 장애인문화체육과 과장",
        ASSEM_ADDR: "의원회관 707호",
    },
    {
        HG_NM: "이주환",
        HJ_NM: "李周桓",
        ENG_NM: "LEE JOOHWAN",
        BTH_GBN_NM: "양",
        BTH_DATE: "1967-08-20",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "부산 연제구",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "산업통상자원중소벤처기업위원회",
        CMITS: "산업통상자원중소벤처기업위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6066",
        E_MAIL: "leejoohwan3@naver.com",
        HOMEPAGE: "https://blog.naver.com/leejoohwan3",
        STAFF: "송인환, 임원식",
        SECRETARY: "박종명, 장영정",
        SECRETARY2: "유기홍, 송기철, 김유진, 오희정, 박선희",
        MONA_CD: "3RW63706",
        MEM_TITLE: "[학력]\r\n- 금성고등학교\r\n- 동국대 경제학과\r\n- 롱아일랜드대학교 경영대학원 경영학 석사\r\n- 한국해양대학교 대학원 박사과정 수료\r\n\r\n[현직]\r\n- 제21대 국회의원(부산 연제구/미래통합당)\r\n- 국회 산업자원통상중소벤처기업위원회 위원\r\n- 미래통합당 원내부대표\r\n- 미래통합당 미래산업일자리특위 위원\r\n- 미래통합당 소상공인살리기특위 위원\r\n\r\n[경력]\r\n- 제6대 부산광역시의회 의원\r\n- 자유한국당 부산광역시당 연제구당협위원장\r\n- 자유한국당 부산광역시당 수석대변인",
        ASSEM_ADDR: "의원회관 917호",
    },
    {
        HG_NM: "이채익",
        HJ_NM: "李埰益",
        ENG_NM: "LEE CHEIK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1955-05-27",
        JOB_RES_NM: "위원장",
        POLY_NM: "국민의힘",
        ORIG_NM: "울산 남구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "문화체육관광위원회",
        CMITS: "문화체육관광위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-1366",
        E_MAIL: "lci8572@naver.com",
        HOMEPAGE: "http://www.이채익.com",
        STAFF: "박성해, 엄보섭",
        SECRETARY: "김기석, 이영걸",
        SECRETARY2: "김진수, 황진라, 정해영, 이선호",
        MONA_CD: "WDS6044S",
        MEM_TITLE: "■ 경력\r\n\r\n현) 울산 남구갑 국회의원(19,20,21대)\r\n현) 국회 문화체육관광위원회 위원장\r\n현) 울산지역 문제 해결플랫폼 공동위원장\r\n현) 한-카타르 의원친선협회 회장\r\n현) 국회 국가에너지정책포럼 대표의원\r\n\r\n전) 21대 국회 국방위원회 위원\r\n전) 20대 국회 행정안전위원회 간사\r\n전) 20대 국회 행정안전위원회 법안소위위원장\r\n전) 20대 국회 산업통상자원위원회 간사\r\n전) 20대 국회 예산결산특별위원회 위원\r\n전) 20대 국회 코로나19 대책 특위 위원\r\n\r\n전) 19대 국회 산업통상자원위원회 위원\r\n전) 19대 국회 운영위원회 위원\r\n전) 19대 국회 예산결산특별위원회 위원\r\n\r\n전) 미래통합당 제1정책조정위원장\r\n전) 미래통합당 북한선원 강제북송 진상규명 TF위원\r\n전) 자유한국당 소상공인특별위원장\r\n전) 자유한국당 정책위원회 부의장\r\n전) 새누리당 울산시당위원장\r\n전) 새누리당 원내부대표\r\n전) 울산광역시 남구청장(초대, 2대)\r\n전) 울산항만공사 사장\r\n\r\n\r\n■ 학력\r\n\r\n브니엘고등학교 졸업\r\n울산대학교 경영학과 졸업\r\n동국대학교 지역개발대학원 행정학 석사\r\n울산대학교 대학원 행정학 박사",
        ASSEM_ADDR: "국회 본관 511호",
    },
    {
        HG_NM: "이철규",
        HJ_NM: "李喆圭",
        ENG_NM: "LEE CHULGYU",
        BTH_GBN_NM: "음",
        BTH_DATE: "1957-09-20",
        JOB_RES_NM: "간사",
        POLY_NM: "국민의힘",
        ORIG_NM: "강원 동해시태백시삼척시정선군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "산업통상자원중소벤처기업위원회",
        CMITS: "산업통상자원중소벤처기업위원회, 예산결산특별위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-9811",
        E_MAIL: null,
        HOMEPAGE: null,
        STAFF: "윤준호, 이태훈",
        SECRETARY: "김영범, 이재용",
        SECRETARY2: "김완기, 박상우, 이광희, 심다솔, 정가은",
        MONA_CD: "TZP9391O",
        MEM_TITLE: "2020.09 ~ : 국민의힘 전략기획부총장\r\n2020.05 ~ : 제21대 국회의원 (강원 동해시태백시삼척시정선군/국민의힘)\r\n2020.07 ~ : 제21대 국회 전반기 산업통상자원중소벤처기업위원회 간사\r\n2020.02 ~ 2020.05 : 제20대 국회의원 (강원 동해시삼척시/미래통합당)\r\n2011.11 ~ 2012.02 : 경기지방경찰청 청장\r\n2010.09 ~ 2011.11 : 경찰청 정보국 국장",
        ASSEM_ADDR: "의원회관 939호",
    },
    {
        HG_NM: "이탄희",
        HJ_NM: "李誕熙",
        ENG_NM: "LEE TAHNEY",
        BTH_GBN_NM: "음",
        BTH_DATE: "1978-11-03",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 용인시정",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "교육위원회",
        CMITS: "교육위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-8940",
        E_MAIL: "leetanhi1@gmail.com",
        HOMEPAGE: null,
        STAFF: "서혜진, 황연실",
        SECRETARY: "이동찬",
        SECRETARY2: "고미진, 노승일, 이제문, 김혜진, 이혜지",
        MONA_CD: "9S151177",
        MEM_TITLE: "▷ 前 서울중앙지방법원 판사\r\n▷ 前 헌법재판소 헌법연구관\r\n▷ 前 공익인권법재단 공감 공익변호사\r\n▷ 前 법무검찰개혁위원회 위원\r\n\r\n▶ 現 제21대 국회의원 (경기 용인정)\r\n▶ 現 교육위원회 위원",
        ASSEM_ADDR: "의원회관 505호",
    },
    {
        HG_NM: "이태규",
        HJ_NM: "李泰珪",
        ENG_NM: "LEE TAEKYU",
        BTH_GBN_NM: "음",
        BTH_DATE: "1964-03-22",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의당",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "외교통일위원회",
        CMITS: "외교통일위원회, 윤리특별위원회, 예산결산특별위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-8101",
        E_MAIL: "leetk918@gmail.com",
        HOMEPAGE: "http://ltk2016635.blog.me",
        STAFF: "곽준성, 배동수",
        SECRETARY: "박종국, 윤정원",
        SECRETARY2: "이완호, 성유진, 김현희, 원지우, 김근유, 신호진",
        MONA_CD: "QTW6852F",
        MEM_TITLE: "2020.09- 제21대 국회 전반기 윤리특별위원회 위원\r\n2020.07- 제21대 국회 전반기 외교통일위원회 위원\r\n2020.05- 제21대 국회의원(비례대표/국민의당)\r\n2020-03- 국민의당 총선기획단장\r\n2020.03- 국민의당 최고위원\r\n2020.02- 국민의당 사무총장\r\n2018.02-2020.2 제20대 국회의원(비례대표/바른미래당)",
        ASSEM_ADDR: "의원회관 918호",
    },
    {
        HG_NM: "이학영",
        HJ_NM: "李學永",
        ENG_NM: "LEE HACKYOUNG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1952-04-16",
        JOB_RES_NM: "위원장",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 군포시",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "산업통상자원중소벤처기업위원회",
        CMITS: "산업통상자원중소벤처기업위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-8051",
        E_MAIL: "youngcamp1@gmail.com",
        HOMEPAGE: "http://blog.naver.com/leehackyoung",
        STAFF: "성기황, 전재현",
        SECRETARY: "임소연, 허남진",
        SECRETARY2: "박하늘, 한보란, 이현재, 윤혜영, 정선우",
        MONA_CD: "K5F2023J",
        MEM_TITLE: "○학력\r\n1971.03 ~ 1985.08   전남대학교 국어국문학과 졸업\r\n1992.03 ~ 1996.08   전남대학교 대학원 정책학 석사 졸업\r\n○경력\r\n2003.05 ~ 2011.02  한국YMCA 전국연맹 사무총장\r\n2003.03 ~ 2011.02  시민사회단체연대회의 상임공동대표\r\n2006.03 ~ 2012.01  희망제작소 이사\r\n2006.01 ~ 2008.12  한국NGO학회 부회장\r\n2004.11 ~ 2009.05  국무총리실 부속 시민사회발전위원회 위원\r\n2003.05 ~ 2011.02  노무현재단 이사\r\n2012.04 ~ 2016.04  19대 국회의원(경기 군포), 민주통합당 윤리위원회 위원장\r\n2016.04 ~ 현재      20대 국회의원 (경기 군포시 을), 더불어민주당 을지로위원회 위원장, \r\n                          상반기 국회 정무위원회 더불어민주당 간사 ",
        ASSEM_ADDR: "의원회관 331호",
    },
    {
        HG_NM: "이해식",
        HJ_NM: "李海植",
        ENG_NM: "LEE HAESIK",
        BTH_GBN_NM: "양",
        BTH_DATE: "1963-11-13",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 강동구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "행정안전위원회",
        CMITS: "행정안전위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2171",
        E_MAIL: null,
        HOMEPAGE: null,
        STAFF: "박덕수",
        SECRETARY: "성시웅, 신재경",
        SECRETARY2: "임현빈, 곽움, 김정향, 허은영, 김영준",
        MONA_CD: "CCU1009B",
        MEM_TITLE: "[학력]\r\n- 마산고등학교\r\n- 서강대학교 학사 \r\n- 서강대학교 공공정책대학원 정치학 석사 \r\n- 서울시립대학교 대학원 도시행정학 박사과정 수료 \r\n\r\n\r\n[경력]\r\n- 제21대 국회의원(서울강동을)\r\n- 더불어민주당 대변인(전) \r\n- 강동구청장 3선(2008~2018) \r\n- 대통령 소속 자치분권위원회 위원(전) \r\n- 대한민국 건강도시협의회 의장(전) \r\n- 더불어민주당 기초단체장협의회장(전) \r\n- 서울시 구청장협의회장(전) \r\n- 서강대학교 총학생회장 \r\n",
        ASSEM_ADDR: "의원회관 730호",
    },
    {
        HG_NM: "이헌승",
        HJ_NM: "李憲昇",
        ENG_NM: "LEE HUNSEUNG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1963-05-11",
        JOB_RES_NM: "위원장",
        POLY_NM: "국민의힘",
        ORIG_NM: "부산 부산진구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국토교통위원회",
        CMITS: "국토교통위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-7911",
        E_MAIL: "ilovebusanjin@hanmail.net",
        HOMEPAGE: null,
        STAFF: "김병하, 김창수",
        SECRETARY: "최수정, 추인희",
        SECRETARY2: "전효선, 박유미, 손추성, 최지희, 남주은",
        MONA_CD: "EVH1507C",
        MEM_TITLE: "< 학 력 >                \r\n2009 ~ 2011    한국해양대학교 대학원 무역학 박사과정 \r\n1993 ~ 1996    조지워싱턴 대학교 대학원 정치관리학 석사 \r\n1988 ~ 1991    노스웨스턴 대학교 대학원 사회학 석사 \r\n1981 ~ 1988    고려대학교 사회학, 경영학 학사 \r\n1978 ~ 1981    금성고등학교 25회졸업(총동창회 부회장)\r\n1975 ~ 1978    개성중학교 27회졸업(운영위원장)\r\n1969 ~ 1975    개금초등학교 7회졸업(총동창회 회장)\r\n\r\n< 주요경력 >\r\n2012 ~             제19대 국회의원, 새누리당 부산시당 대변인\r\n2011 ~             한나라당 부대변인\r\n2008 ~ 2010      부산광역시청 대외협력보좌관\r\n2007 ~ 2007      한나라당 박근혜 경선수행부단장\r\n2003 ~ 2003      한나라당 보좌관협의회 부회장",
        ASSEM_ADDR: "의원회관 425호",
    },
    {
        HG_NM: "이형석",
        HJ_NM: "李炯錫",
        ENG_NM: "LEE HYUNGSEOK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1961-10-05",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "광주 북구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "행정안전위원회",
        CMITS: "행정안전위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-1307",
        E_MAIL: "hslee2020bk@gmail.com",
        HOMEPAGE: "https://blog.naver.com/hslee2016",
        STAFF: "김기봉, 이동윤",
        SECRETARY: "이부일, 정재현",
        SECRETARY2: "정재성, 이종찬, 김태균, 김주희, 주수경",
        MONA_CD: "IOW8224X",
        MEM_TITLE: "현) 제21대 국회의원 (광주광역시 북구을)\r\n현) 더불어민주당 &quot;5.18 민주화운동 40주년 특별위원회&quot; 위원장\r\n\r\n전) 더불어민주당 최고위원\r\n전) 광주광역시 경제부시장\r\n전) 노무현대통령 청와대 사회조정3비서관\r\n전) 광주광역시의회 의장\r\n전) 광주은행 노조위원장\r\n\r\n전남대학교 대학원 정치학 석사\r\n조선대학교 법학과 학사\r\n",
        ASSEM_ADDR: "의원회관 836호",
    },
    {
        HG_NM: "인재근",
        HJ_NM: "印在謹",
        ENG_NM: "IN JAEKEUN",
        BTH_GBN_NM: "양",
        BTH_DATE: "1953-11-11",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 도봉구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "보건복지위원회",
        CMITS: "보건복지위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-8091",
        E_MAIL: "ijgalso@daum.net",
        HOMEPAGE: "http://www.ijk.or.kr",
        STAFF: "강경만, 한성희",
        SECRETARY: "박상근, 이기진",
        SECRETARY2: "정지혁, 강준희, 김혜진, 이준배, 서은아",
        MONA_CD: "UM51067K",
        MEM_TITLE: "[학력]\r\n이화여자대학교 사회학과 졸업\r\n\r\n[주요경력]\r\n제19·20·21대 국회의원(서울 도봉갑)\r\n국회 보건복지위원회 간사(2016.06 ~ 2018.06)\r\n국회 행정안전위원회 위원장(2018.07 ~ 2019.06)\r\n국회 여성가족위원회 위원장(2019.06 ~ 2020.05)\r\n국회의원 연구단체 국회&#039민주주의와 복지국가 연구회&#039 대표의원(현)\r\n국회의원 연구단체 국회&#039존엄한 삶을 위한 웰다잉 연구회&#039 대표의원(현)\r\n이화여자대학교 민주동우회 회장\r\n민주통합 시민행동 공동대표\r\n서울민주통일민중운동연합 의장\r\n민주헌법쟁취국민운동본부 상임집행위원\r\n민주화실천가족운동협의회(민가협) 총무\r\n김근태재단 이사장\r\n로버트 케네디 인권상 수상",
        ASSEM_ADDR: "의원회관 806호",
    },
    {
        HG_NM: "임오경",
        HJ_NM: "林五卿",
        ENG_NM: "LIM OKYEONG",
        BTH_GBN_NM: "양",
        BTH_DATE: "1971-12-11",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 광명시갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "문화체육관광위원회",
        CMITS: "국회운영위원회, 문화체육관광위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "국회) 784-6396 광명) 2682-0415",
        E_MAIL: "lok0415@hanmail.net",
        HOMEPAGE: "https://blog.naver.com/oklim777",
        STAFF: "김영민, 정용준",
        SECRETARY: "김혜리, 이지수, 최민",
        SECRETARY2: "송유미, 노예영, 박지용, 김소희, 김종호",
        MONA_CD: "4T026790",
        MEM_TITLE:
            "- 당 원내부대표\r\n- 당 20대 대선선대위 직능부본부장\r\n- 당 체육특별위원회 위원장\r\n- 당 세계한인민주회의 부의장\r\n- 당 정책위 상임부의장\r\n- 당 국회추천공직자자격심사특위 위원\r\n- 당 경기도당 을지키는민생실천위원회 위원장\r\n- 당 중앙당선거관리위원회 위원 \r\n- 당 서울시장후보 선대위 체육홍보특별위원장\r\n- 당 을지로위원회 위원\r\n- 당 21대 총선선대위 문화강국위원회 위원\r\n- 더불어민주당 영입인재\r\n\r\n- 국회문화체육관광위원회\r\n- 국회운영위원회\r\n- 국회여성가족위원회\r\n- e스포츠발전을위한 국회의원 모임 부대표\r\n- 국회 아시아정당국제회의 의원연맹(ICAPP) 정회원 \r\n- 국회혁신적 포용국가 미래비전 정회원\r\n- 국회교육문화포럼 정회원\r\n- 국회문화콘텐츠연구포럼 정회원\r\n- 국회한일의원연맹 감사\r\n\r\n- 한국체육대학교 학사/석사/이학박사\r\n- MBC,SBS,JTBC3 핸드볼 해설위원\r\n- 서울시청 여자핸드볼팀 감독\r\n- 대한체육회 이사\r\n- 국민체육진흥공단 비상임 이사\r\n- 아테네올림픽 여자핸드볼 은메달(2004)\r\n- 애틀란타올림픽 여자핸드볼 은메달(1996)\r\n- 바르셀로나올림픽 여자핸드볼 금메달(1992)\r\n\r\n- 2021대한민국 헌정대상 (법률소비자연맹)\r\n- 2020국감 우수의원 (NGO모니터단)\r\n- 2020국감 우수의원 (쿠키뉴스)\r\n\r\n- 한국을 빛낸 사회발전 대상 (2021)\r\n- 한국국악협회 특별공로대상 (2021)\r\n- 한국기자연합회 국제평화공헌대상 (2021)\r\n- 대한민국 여성체육대상 지도자상(2014)\r\n- YWCA 젊은 여성지도자상(2009)\r\n- 국제핸드볼연맹 올해의 선수상(1996)\r\n- 체육훈장 청룡장(1992년)",
        ASSEM_ADDR: "의원회관 729호",
    },
    {
        HG_NM: "임이자",
        HJ_NM: "林利子",
        ENG_NM: "LIM LEEJA",
        BTH_GBN_NM: "음",
        BTH_DATE: "1964-03-05",
        JOB_RES_NM: "간사",
        POLY_NM: "국민의힘",
        ORIG_NM: "경북 상주시문경시 ",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "환경노동위원회",
        CMITS: "환경노동위원회, 국회운영위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-6970",
        E_MAIL: "llj11@hanmail.net",
        HOMEPAGE: "http://blog.naver.com/llj11",
        STAFF: "박준용, 안재민",
        SECRETARY: "정성한, 허성은",
        SECRETARY2: "조윤형, 최윤호, 김재령, 권준혁, 최세황",
        MONA_CD: "EH27538E",
        MEM_TITLE: "제21대 국회의원(경상북도 상주시문경시/국민의힘)\r\n\r\n제21대 국회 전반기 예산결산특별위원회 위원\r\n제21대 국회 전반기 환경노동위원회 간사(국민의힘)\r\n\r\n국민의힘 경상북도당 상주시문경시 당원협의회 운영위원장\r\n국민의힘 제5정조위원장\r\n국민의힘 약자와의동행위원회 입법동행분과위원장\r\n국민의힘 코로나19대책특별위원회 위원\r\n",
        ASSEM_ADDR: "의원회관 747호",
    },
    {
        HG_NM: "임종성",
        HJ_NM: "林鍾聲",
        ENG_NM: "LIM JONGSEONG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1965-08-05",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 광주시을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "환경노동위원회",
        CMITS: "환경노동위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-8380",
        E_MAIL: "5321tempia@hanmail.net",
        HOMEPAGE: "http://blog.naver.com/ijs5321",
        STAFF: "설동찬, 전우선",
        SECRETARY: "서동호, 오준영",
        SECRETARY2: "송경하, 황다경, 김균태, 김현주, 이주란, 천정우, 최예린",
        MONA_CD: "E6U4345C",
        MEM_TITLE: "[학력]\r\n한양대학교 행정자치대학원 졸업(석사)\r\n\r\n[주요경력]\r\n제20대 국회의원 경기 광주시을(오포,초월,곤지암,도척)\r\n제20대 국회 국토교통위원회 위원\r\n청년미래특별위원회 위원\r\n국회 규제개혁포럼 공동대표\r\n더불어민주당 조직사무부총장\r\n더불어민주당 2018지방선거기획단·조직강화특별위원회·당원자격심사위원회 위원\r\n더불어민주당 국민통합위원회 상임부위원장\r\n더불어민주당 도시농업특별위원회 위원장\r\n더불어민주당 서민주거TF 주거공급소위원회 위원\r\n(사)국제장애인문화교류협회중앙회 자문위원\r\n\r\n제7, 8대 경기도의회 의원(전)\r\n경기도의회 교육위원회 간사·도시환경위원장(전)\r\n경기도의회 저탄소녹색성장연구회 회장(전)\r\n민주당 경기도당 청년위원장(전)\r\n민주당 중앙당 청년위원회 상임부위원장(전)\r\n광주청년회의소 회장(전)\r\n광주시 청소년오케스트라 초대단장(전)",
        ASSEM_ADDR: "의원회관 845호",
    },
    {
        HG_NM: "임호선",
        HJ_NM: "林昊宣",
        ENG_NM: "LIM HOSEON",
        BTH_GBN_NM: "음",
        BTH_DATE: "1964-09-27",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "충북 증평군진천군음성군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "행정안전위원회",
        CMITS: "행정안전위원회, 중앙선거관리위원회 위원(문상부) 선출에 관한 인사청문특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-1730",
        E_MAIL: "limhoseon2020@naver.com",
        HOMEPAGE: "http://blog.naver.com/propol21",
        STAFF: "이규연, 최석오",
        SECRETARY: "박미래, 연홍율",
        SECRETARY2: "김다나, 모성현, 임기택, 김준성, 유순호",
        MONA_CD: "FH777496",
        MEM_TITLE: "충북고등학교 졸업\r\n경찰대학교 졸업\r\n\r\n제21대 국회의원(충북 증평군진천군음성군)\r\n현) 국회 행정안전위원회 위원\r\n현) 국회 예산결산특별위원회 위원\r\n현) 더불어민주당 원내부대표\r\n현) 더불어민주당 재정위원회 위원장\r\n\r\n전) 국회 운영위원회 위원\r\n전) 경찰청 차장\r\n전) 대통령비서실 행정관",
        ASSEM_ADDR: "의원회관 429호",
    },
    {
        HG_NM: "장경태",
        HJ_NM: "張耿態",
        ENG_NM: "JANG KYUNGTAE",
        BTH_GBN_NM: "음",
        BTH_DATE: "1983-10-12",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 동대문구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국토교통위원회",
        CMITS: "국회운영위원회, 국토교통위원회, 여성가족위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-3106",
        E_MAIL: "letskt2020@gmail.com",
        HOMEPAGE: "http://blog.naver.com/jktkt",
        STAFF: "김상혁, 박지만",
        SECRETARY: "김석현, 임채혁",
        SECRETARY2: "김태우, 변아영, 오정훈, 이혜원, 황금나라",
        MONA_CD: "RPN2293B",
        MEM_TITLE: "○ 학력 \r\n- 순천고등학교 졸업\r\n- 서울시립대학교 행정학 학사\r\n- 연세대학교 정치학 석사\r\n- 성균관대학교 국정전문대학원\r\n　행정학 박사 과정 수료\r\n\r\n○ 경력 \r\n- 대한민국 육군 병장 만기전역\r\n- 21대국회 서울동대문구을 국회의원\r\n　(더불어민주당)\r\n- 현) 국회 국토교통위원회 위원\r\n- 현) 더불어민주당 전국청년위원장\r\n\r\n- 전) 서울시립대학교 총학생회장\r\n- 전) 민주당 대학생특별위원장\r\n- 전) 더불어민주당 서울특별시당 대변인",
        ASSEM_ADDR: "의원회관 1005호",
    },
    {
        HG_NM: "장제원",
        HJ_NM: "張濟元",
        ENG_NM: "CHANG JEWON",
        BTH_GBN_NM: "음",
        BTH_DATE: "1967-04-13",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "부산 사상구",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "법제사법위원회",
        CMITS: "법제사법위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제18대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-3851",
        E_MAIL: "jfirst607@naver.com ",
        HOMEPAGE: "http://blog.jfirst21.com",
        STAFF: "김민수, 안은전",
        SECRETARY: "박가현, 박종보",
        SECRETARY2: "김현준, 이대훈, 이예슬, 조혜아, 장우진",
        MONA_CD: "CZB4125D",
        MEM_TITLE: "[학력]\r\n 중앙대학교 신문방송학과·신문방송대학원 졸업\r\n\r\n[경력]\r\n 前) 국회 안전행정위원회 위원\r\n 前) 국회 예산결산특별위원회 위원\r\n 前) 국회 저출산·고령화대책특별위원회 간사\r\n 前) 새누리당 저출산·고령화 대책특별위원회 위원장\r\n 前) 자유한국당 수석대변인\r\n 前) 자유한국당 중앙위원회 상임전국위원 및 제3본부장위원 및 본부장\r\n 前) 국회 사법개혁특별위원회 간사\r\n 前) 국회 예산결산특별위원회 간사\r\n 前) 국회 정치개혁특별위원회 간사\r\n 前) 국회 예산결산특별위원회 위원\r\n 前) 대법관(노태악) 임명동의에 관한 인사청문특별위원회 간사\r\n 前) 중앙선거관리위원회 위원(조병현·조성대) 선출에 관한 인사청문특별위원회 위원장\r\n \r\n 現) 국회 법제사법위원회위원",
        ASSEM_ADDR: "의원회관 607호",
    },
    {
        HG_NM: "장철민",
        HJ_NM: "張喆敏",
        ENG_NM: "CHULMIN JANG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1983-05-16",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "대전 동구",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "환경노동위원회",
        CMITS: "환경노동위원회, 예산결산특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2187",
        E_MAIL: "jcm5440@gmail.com",
        HOMEPAGE: "http://blog.naver.com/jcm5440",
        STAFF: "이지혜, 정근모",
        SECRETARY: "김봉성, 조영호",
        SECRETARY2: "정용, 김연화, 이창호, 권도경, 이종서, 오송하",
        MONA_CD: "2NV6751W",
        MEM_TITLE: "(학력)\r\n서대전고등학교(27회) 졸업\r\n서울대학교 정치학과 졸업\r\n서울대학교 행정대학원 정책학 석사과정 수료\r\n\r\n(경력)\r\n前 홍영표 국회의원 보좌관\r\n前 더불어민주당 원내대표 정책조정실장(2급상당)\r\n더불어민주당 전국대의원대회준비위원회 대변인\r\n환경노동위원회 위원",
        ASSEM_ADDR: "의원회관 1009호",
    },
    {
        HG_NM: "장혜영",
        HJ_NM: "張惠英",
        ENG_NM: "JANG HYEYEONG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1987-04-08",
        JOB_RES_NM: "위원",
        POLY_NM: "정의당",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "기획재정위원회",
        CMITS: "기획재정위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-1845(의원회관516호)",
        E_MAIL: "janghyeyeong21@gmail.com",
        HOMEPAGE: "http://janghyeyeong.com",
        STAFF: "김진욱, 조현수",
        SECRETARY: "신동승, 조아라",
        SECRETARY2: "김다정, 박진선, 유완선, 서정진, 장태린",
        MONA_CD: "GAV6441G",
        MEM_TITLE: "&quot;존엄과 평등의 새로운 미래를 열겠습니다&quot;\r\n\r\n- 美 시사주간지 <TIME 100 NEXT 2021 선정>\r\n- 정의당 정책위원회 의장\r\n- 정의당 차별금지법제정 추진본부장\r\n- 정의당 원내수석부대표 겸 원내대변인(전)\r\n- 정의당 혁신위원장(2020.5월-8월)\r\n- 21대 총선 정의당 청년선거대책본부장\r\n- 5기 정의당 미래정치특별위원장\r\n- 비영리재단법인 와글 사무국장(2019)",
        ASSEM_ADDR: "의원회관 516호",
    },
    {
        HG_NM: "전봉민",
        HJ_NM: "田奉珉",
        ENG_NM: "JEON BONGMIN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1972-10-21",
        JOB_RES_NM: "위원",
        POLY_NM: "무소속",
        ORIG_NM: "부산 수영구",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "보건복지위원회",
        CMITS: "보건복지위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-4591",
        E_MAIL: "jbm102100@na.go.kr",
        HOMEPAGE: null,
        STAFF: "김영창, 윤위",
        SECRETARY: "김형영, 이자영",
        SECRETARY2: "김성수, 박현태, 심재분, 김선주, 황지혜",
        MONA_CD: "DPZ7685X",
        MEM_TITLE: "제21대 국회 전반기 보건복지위원회 위원 \r\n\r\n전) 2018 부산광역시의회 부의장\r\n전) 2014 부산광역시의회 운영위원장\r\n전) 2014 전국시도의회 운영위원장협의회 회장\r\n전) 2014 새누리당 부산시당 부대변인 \r\n전) 2008.06 - 2018.06 제 5·6·7대 부산광역시의회 의원(수영 제2지구)\r\n\r\n\r\n",
        ASSEM_ADDR: "의원회관 551호",
    },
    {
        HG_NM: "전용기",
        HJ_NM: "田溶冀",
        ENG_NM: "JEON YONGGI",
        BTH_GBN_NM: "음",
        BTH_DATE: "1991-10-26",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "문화체육관광위원회",
        CMITS: "문화체육관광위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2843",
        E_MAIL: "braveplane@gmail.com",
        HOMEPAGE: "https://blog.naver.com/braveplane91",
        STAFF: "오경환, 허용",
        SECRETARY: "강승우, 두경서",
        SECRETARY2: "오선혜, 김영훈, 조유리, 김성수, 한재호",
        MONA_CD: "TJW93720",
        MEM_TITLE: "- 더불어민주당 전국대학생위원회 위원장\r\n- 더불어민주당 공천관리위원회 위원\r\n- 국가균형발전위원회 국민소통 특별 위원\r\n- 더불어민주당 중앙당당원자격심사위원회 위원\r\n- 더불어민주당 제19대 대통령선거 중앙선거대책위원회 청년위원회 미래세대공동본부장\r\n- 경기도대학생협의회 회장\r\n- 제34대 한양대학교 ERICA 총학생회장",
        ASSEM_ADDR: "의원회관 1023호",
    },
    {
        HG_NM: "전재수",
        HJ_NM: "田載秀",
        ENG_NM: "CHUN JAESOO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1971-04-20",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "부산 북구강서구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "정무위원회",
        CMITS: "정무위원회, 예산결산특별위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-7431",
        E_MAIL: "613jjs@gmail.com",
        HOMEPAGE: "https://blog.naver.com/jsstory7",
        STAFF: "김동영, 선용규",
        SECRETARY: "박영주, 정주영",
        SECRETARY2: "김소연, 이슬지, 정진영, 이선규, 김태영",
        MONA_CD: "9YO73104",
        MEM_TITLE: "[학력]\r\n- 동국대학교 대학원 정치학과 석사과정 졸업\r\n- 동국대학교 역사교육과 학사과정 졸업\r\n- 구덕고등학교 졸업\r\n\r\n[경력]\r\n- 현) 더불어민주당 제 21대 국회의원(부산 북구·강서구 갑)\r\n- 현) 제 21대 국회 정무위원회 위원\r\n- 현) 제 21대 국회 운영위원회 위원\r\n- 현) 제 21대 국회 윤리특별위원회 간사\r\n- 현) 더불어민주당 국가균형발전특별위원회 부위원장\r\n\r\n- 전) 더불어민주당 제 20대 국회의원(부산 북구·강서구 갑)\r\n- 전) 더불어민주당 원내선임부대표\r\n- 전) 더불어민주당 부산광역시당 위원장\r\n- 전) 더불어민주당 원내부대표\r\n- 전) 제 20대 국회 정무위원회 위원\r\n- 전) 제 20대 국회 윤리특별위원회 위원\r\n- 전) 제 20대 국회 민생경제특별위원회 위원\r\n- 전) 제 20대 국회 예산결산특별위원회 위원\r\n- 전) 제 20대 국회 교육문화체육관광위원회 위원\r\n- 전) 청와대 제 2부속실장\r\n- 전) 청와대 경제정책수석실 행정관\r\n- 전) 경제부총리 겸 재정경제부장관 정책보좌관\r\n- 전) 대통령직 인수위원회 경제1분과 행정관 ",
        ASSEM_ADDR: "의원회관 613호",
    },
    {
        HG_NM: "전주혜",
        HJ_NM: "全珠惠",
        ENG_NM: "JUN JOOHYAE",
        BTH_GBN_NM: "음",
        BTH_DATE: "1966-07-15",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "법제사법위원회",
        CMITS: "법제사법위원회, 여성가족위원회, 윤리특별위원회, 국회운영위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-9340",
        E_MAIL: "jhjoy827@naver.com",
        HOMEPAGE: "https://blog.naver.com/jhjoy827",
        STAFF: "박영미, 박종진",
        SECRETARY: "김태현, 송한준",
        SECRETARY2: "정성안, 김지선, 김민태, 이휘윤",
        MONA_CD: "71J2365L",
        MEM_TITLE:
            "1966년 7월 15일생 \r\n서울대법과대학 사법학과 졸업\r\n\r\n2020.11~  국민의힘 정책위원회 제3정책조정위원회 부위원장\r\n2020.10~  국민의힘 약자와의 동행위원회 국민동행분과 위원\r\n2020.09~  국민의힘 정책위원회 포털공정대책특위 위원\r\n2020.09~  국민의힘 국민통합위원회 위원\r\n2020.09~  제21대 국회의원 (비례대표/국민의힘)\r\n2020.08~  제21대 국회 공직자윤리위원회 위원\r\n2020.08~  미래통합당 성폭력대책특별위원회 위원\r\n2020.07~  미래통합당 저출생대책특별위원회 아이중심분과 위원장\r\n2020.07~  제21대 국회 법제사법위원회 위원\r\n2020.07~  제21대 국회 여성가족위원회 위원\r\n2020.05~  미래통합당 원내부대표\r\n2020.05    제21대 국회의원 (비례대표/미래통합당)\r\n2017.10    법제처 법령해석심의위원회 위원\r\n2017.08    법률신문사 논설위원\r\n2017.05    대한변호사협회 일과 가정 양립을 위한 위원회 위원장\r\n2016.07    여성가족부 청년여성멘토링 대표멘토\r\n2016.01~2020.11  한국여성변호사회 부회장\r\n2015.04    국가인권위원회 자유권제1전문위원회 위원\r\n2015.03    고려대학교 법학전문대학원 겸임교수\r\n2014.05    여성가족부 사이버멘토링 대표멘토\r\n2014.03~2020.03  법무법인 태평양 변호사\r\n2013.02~2014.02  서울중앙지방법원 부장판사\r\n2011.02~2013.02  서울동부지방법원 부장판사\r\n2010.02~2011.02  수원지방법원 부장판사\r\n2008.02~2010.02  사법연수원 교수, 부장판사\r\n2007.02~2008.02  광주지방법원 부장판사\r\n1992.03     서울지방법원 동부지원 판사\r\n1992.02     제21기 사법연수원\r\n1989         제31회 사법시험 합격\r\n",
        ASSEM_ADDR: "의원회관 827호",
    },
    {
        HG_NM: "전해철",
        HJ_NM: "全海澈",
        ENG_NM: "JEON HAECHEOL",
        BTH_GBN_NM: "음",
        BTH_DATE: "1962-05-18",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 안산시상록구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "기획재정위원회",
        CMITS: "기획재정위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-8901",
        E_MAIL: "sangrokgab@naver.com",
        HOMEPAGE: "http://blog.naver.com/jhc05",
        STAFF: "박정대, 백수현",
        SECRETARY: "송우일, 최찬규",
        SECRETARY2: "이재경, 정영미, 신유리, 이상민",
        MONA_CD: "BM63269Y",
        MEM_TITLE: "2012. 05 ~ 제19대 국회의원(경기 안산상록갑)\r\n2007. 12 ~ 2012. 05 법무법인 해마루 대표변호사\r\n2010. 안산환경운동연합 자문위원\r\n2009. 노무현재단 상임운영위원\r\n2008. ~ 민주통합당 안산상록갑 지역위원장\r\n2006. 05 ~ 2007. 12 대통령비서실 민정수석비서관\r\n2003. 07 대통령소속 의문사진상규명위원회 위원\r\n2001. 01 ~ 2004. 05 법무법인 해마루 변호사\r\n2001~2002 미국워싱턴주립대학교잭슨스쿨 객원 연구원\r\n1999. 민주사회를 위한 변호사모임 언론위원회 위원장\r\n1998. 대한변호사협회 인권위원\r\n1996. 민주사회를 위한 변호사모임 대외협력위원회 위원장\r\n1994. 안산시 고문변호사\r\n1987. 제29회 사법시험 합격\r\n1985. 고려대학교 법학과 졸업\r\n1981. 마산중앙고등학교 졸업\r\n1978. 목포영흥중학교 졸업 \r\n1975. 목포대성초등학교 졸업",
        ASSEM_ADDR: "의원회관 930호",
    },
    {
        HG_NM: "전혜숙",
        HJ_NM: "全惠淑",
        ENG_NM: "JUN HYESOOK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1955-05-05",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 광진구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "과학기술정보방송통신위원회",
        CMITS: "과학기술정보방송통신위원회, 예산결산특별위원회, 언론·미디어 제도개선 특별위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제18대, 제20대, 제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-8340",
        E_MAIL: "jhsook7612@gmail.com",
        HOMEPAGE: "https://blog.naver.com/jhsook7612",
        STAFF: "김종화, 서정환",
        SECRETARY: "박세환, 한경달",
        SECRETARY2: "신종환, 염시진, 이연숙, 정현학, 공혜빈",
        MONA_CD: "N9X9673B",
        MEM_TITLE:
            "제21대 국회의원(서울 광진구갑 / 더불어민주당)\r\n\r\n국회 과학기술정보방송통신위원회 위원\r\n국회 예산결산특별위원회 위원\r\n국회 언론미디어제도개선특별위원회 위원\r\n국회 지구촌보건복지포럼 대표의원\r\n국회 서민금융활성화 및 소상공인지원포럼 공동대표의원\r\n국회 한일의원연맹 여성위원회 위원장\r\n국회 한·벨기에 의원친선협회 회장\r\n국회 한·몽골 의원친선협회 이사\r\n더불어민주당 최고위원\r\n더불어민주당 백신치료제특별위원회 위원장\r\n대한민국 청소년의회 자문위원\r\n사단법인 청년과미래 명예이사장\r\n\r\n<경 력>\r\n국회 행정안전위원회 위원장(19.6~20.5)\r\n국회 여성가족위원회 위원장(18.7~19.6)\r\n국회 미세먼지대책 특별위원회 위원장 (17.12~18.05)\r\n국회 윤리특별위원회 간사 및 위원장 대행 (16.06~17.12)\r\n국회 보건복지위원회 위원(16.6~19.6)\r\n문재인 대통령 인도·호주 특사단 대표의원 (17.06)\r\n더불어민주당 국난극복K-뉴딜위원회 공동위원장(20.10~21.04)\r\n더불어민주당 대한민국 회복과 도약 선거대책위원회 직능본부장(21.03~21.04)\r\n더불어민주당 노후원전 안전조사 TF 위원장(21.02~21.04)\r\n더불어민주당 당대표 특별보좌역(20.09~21.03)\r\n더불어민주당 전국직능대표자회의 의장(20.9~21.04)\r\n더불어민주당 가덕신공항특별위원회 부위원장(21.03~21.04)\r\n더불어민주당 민생연석회의 위원\r\n더불어민주당 노동현장대형안전사고방지대책특별위원회 위원장(20.7.15~20.8.28)\r\n더불어민주당 대한민국미래준비 선거대책위원회 코로나대책추진단 공동단장(20.2~20.4)\r\n더불어민주당 중앙당 공직선거후보자 추천관리위원회 위원(20.1~20.4)\r\n더불어민주당 조직강화특위 위원(19.1~19.8)\r\n더불어민주당 사회복지특별위원장(16.06.14~18.07.14)\r\n더불어민주당 교육연수원장 (17.05~18.09)\r\n더불어민주당 서울특별시당 공직선거후보자추천관리위원장 (18.04~18.06)\r\n제19대 대통령선거 문재인후보 중앙선대위 보건복지특보단장 및 의료정책위원장 (17.04~17.05)\r\n\r\n<수 상>\r\n*2021년*\r\n쿠키뉴스 2021 국정감사 우수의원\r\n뉴스더원 제1회 대한민국 자치대상 국회의원부문 보건복지 대상\r\n*2020년*\r\n더불어민주당 2020년 국정감사 우수 의원상\r\n원자력 안전과 미래 제6회 원자력안전상\r\n머니투데이 The300 - 2020 최우수법률상 본상\r\n제2회 당뇨병 의정대상\r\nJJC지방자치TV 의정대상\r\n사단법인 청년과미래 청년친화우수국회의원 소통부문\r\n*2019년*\r\n국정감사NGO모니터단 국리민복상 우수 상임위원장상\r\n한국신문방송인클럽 제4회 대한민국 사회발전대상 국회의정부문 대상\r\nJJC지방자치TV 대한민국 국정감사 우수 위원장\r\n제7회 대한민국모범국회의원대상 대상\r\n한국인터넷신문협회 제20대 국회 의정대상\r\n한국을 빛낸 범죄예방인물 대상 의정대상\r\n수도권일보 시사뉴스 2019 국정감사 우수의원상\r\n대한민국브랜드대상 최우수의정브랜드상\r\n세계언론협회 제1회 WFPL 국회의정평가대상 최우수상\r\n한국바른언론인협회 대한민국위대한국민대상 여성리더부문대상 우수상\r\n2019 국회의원 아름다운 말 대상 선플대상\r\nMBN &amp; 한국여성유권자연맹, &#039참 괜찮은 의원상&#039\r\n더불어민주당 당대표 1급 특별 포상(우수지역위원장)\r\n대한민국 가족지킴이 대상 올해의 여성 대상\r\n*2018년*\r\n연합뉴스 국감인물 &#039사회적 약자를 지키는 국감&#039\r\n한국언론기자협회 2018 대한민국 모범 국회의원 대상 특별대상\r\n국회 공공정책연구원 2018 공공정책대상 입법부문\r\n*2017년*\r\n유권자시민행동 대한민국 유권자 대상\r\n쿠키뉴스 국정감사 우수의원\r\n법률소비자연맹 제20대 국회 헌정대상 의정종합대상\r\nJJC 지방자치TV 대한민국 의정대상\r\n*2016년*\r\n제18회 백봉 라용균 선생 기념사업회 백봉신사상\r\n머니투데이 The 300 국정감사 종합평가 최고 평가\r\n국정감사NGO모니터단의 국정감사 우수 국회의원\r\n푸드투데이 국정감사 우수 국회의원",
        ASSEM_ADDR: "의원회관 906호",
    },
    {
        HG_NM: "정경희",
        HJ_NM: "丁慶姬",
        ENG_NM: "CHUNG KYUNGHEE",
        BTH_GBN_NM: "음",
        BTH_DATE: "1958-01-26",
        JOB_RES_NM: "간사",
        POLY_NM: "국민의힘",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "교육위원회",
        CMITS: "교육위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-1571",
        E_MAIL: null,
        HOMEPAGE: null,
        STAFF: "신상한, 이충현",
        SECRETARY: "김경한, 박준수",
        SECRETARY2: "김연주, 조운현, 이창호, 박가현, 남궁민",
        MONA_CD: "USR7059P",
        MEM_TITLE: "[학력]\r\n경기여자고등학교\r\n서울대학교 역사교육과 학사\r\n서울대학교 대학원 서양사학과 석사\r\n서울대학교 대학원 서양사학과 박사\r\n\r\n[경력]\r\n현) 제21대 국회 전반기 교육위원회 위원\r\n현) 국민의힘 정책위원회 부동산시장 정상화 특별위원회 위원\r\n\r\n[수상내역]\r\n2020 국민의힘 국정감사 우수의원\r\n2020 국정감사 NGO 모니터단 국정감사 국리민복상\r\n2020 에듀인뉴스 국정감사 최우수 의원상\r\n",
        ASSEM_ADDR: "의원회관 335호",
    },
    {
        HG_NM: "정동만",
        HJ_NM: "鄭東萬",
        ENG_NM: "JEONG DONGMAN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1965-07-18",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "부산 기장군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국토교통위원회",
        CMITS: "국토교통위원회, 예산결산특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-8071",
        E_MAIL: "dongmanjeong432@gmail.com",
        HOMEPAGE: "http://blog.naver.com/dongbu1538",
        STAFF: "김승원, 이태호",
        SECRETARY: "김상웅, 이수철",
        SECRETARY2: "임이랑, 안영진, 최정욱, 김민정, 박건희",
        MONA_CD: "DAY6557K",
        MEM_TITLE: "<학력>\r\n부산대학교 경영대학원 경영학 석사\r\n\r\n<경력>\r\n제21대 국회의원(부산 기장군/국민의힘) \r\n제21대 국회 전반기 국토교통위원회 위원\r\n국회 예산결산특별위원회 위원\r\n국민의힘 원내부대표\r\n국민의힘 탈원전 피해 및 국토파괴 대책 특별위원회 위원 \r\n아시아인권의원연맹 사무총장\r\n제7대 부산광역시의회 의원\r\n제7대 부산광역시 예산결산특별위원회 위원\r\n제6대 기장군의회 의원",
        ASSEM_ADDR: "의원회관 432호",
    },
    {
        HG_NM: "정성호",
        HJ_NM: "鄭成湖",
        ENG_NM: "JUNG SUNGHO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1961-09-10",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 양주시",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "기획재정위원회",
        CMITS: "기획재정위원회",
        REELE_GBN_NM: "4선",
        UNITS: "제17대, 제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-8991(의원회관 646호)",
        E_MAIL: "jsh35351@naver.com",
        HOMEPAGE: "http://blog.naver.com/jsh35351",
        STAFF: "서준섭, 정원철",
        SECRETARY: "이광근, 정희태",
        SECRETARY2: "강유진, 배상진, 최정빈, 김선진, 이규현",
        MONA_CD: "V429892C",
        MEM_TITLE: "대신고등학교 졸업\r\n서울대학교 법학 학사\r\n제28회 사법시험 합격\r\n사법연수원 제18기 수료\r\n육군 제3사단 법무관 복무\r\n\r\n민주사회를 위한 변호사 모임 회원\r\n의정부YMCA 이사\r\n경기북부환경운동연합 공동대표\r\n연천군청 고문변호사\r\n제17대 열린우리당 국회의원(경기 양주·동두천)\r\n법제사법위원회 위원\r\n건설교통위원회 위원\r\n열린우리당 원내부대표\r\n동두천시청 고문변호사\r\n경기도교육청 고문변호사\r\n의정부시청 고문변호사\r\n경기 교원장학재단 감사\r\n민주정책연구원 부원장\r\n제19대 민주통합당 국회의원(경기 양주·동두천)\r\n기획재정위원회 위원\r\n국회운영위원회 간사\r\n민주통합당 대변인\r\n한국·러시아 의원친선협회 간사\r\n민주당 원내수석부대표\r\n국토교통위원회 간사\r\n교통법안심사소위원회 위원장",
        ASSEM_ADDR: "의원회관 646호",
    },
    {
        HG_NM: "정운천",
        HJ_NM: "鄭雲天",
        ENG_NM: "CHUNG WOONCHUN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1954-04-10",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "기획재정위원회",
        CMITS: "예산결산특별위원회, 기획재정위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-8975",
        E_MAIL: "706gbs@gmail.com",
        HOMEPAGE: "http://blog.naver.com/jeonjujeong",
        STAFF: "김보현, 정경복",
        SECRETARY: "박상조, 신중호",
        SECRETARY2: "이규현, 민경환, 이다솜, 고준혁, 빈자영",
        MONA_CD: "NZF1659U",
        MEM_TITLE: "[학 력] \r\n - 고려대학교 농업경제학 학사 \r\n - 남성고등학교  졸업 \r\n\r\n[약 력]\r\n - 現 국민의힘 전북도당위원장\r\n - 現 국민의힘 국민통합위원장\r\n - 前 미래한국당 최고위원\r\n - 前 예산결산특별위원(20대국회 4년연속)\r\n - 前 새로운보수당 공동대표\r\n - 前 새로운보수당 정책위의장\r\n - 前 바른미래당 최고위원 \r\n - 前 바른정당 최고위원\r\n - 前 한나라당 최고위원\r\n - 前 한식재단 이사장\r\n - 前 농림수산식품부 장관 \r\n - 前 한국농업CEO연합회 회장 \r\n - 前 한국신지식농업인회 회장 \r\n",
        ASSEM_ADDR: "의원회관 706호",
    },
    {
        HG_NM: "정일영",
        HJ_NM: "鄭日永",
        ENG_NM: "CHUNG ILYOUNG",
        BTH_GBN_NM: "양",
        BTH_DATE: "1957-08-14",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "인천 연수구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "기획재정위원회",
        CMITS: "기획재정위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6651~3",
        E_MAIL: "ilyeong4037871@gmail.com",
        HOMEPAGE: "http://blog.naver.com/chung10park",
        STAFF: "강지은, 윤영표",
        SECRETARY: "최정윤, 최종희",
        SECRETARY2: "채수용, 고지혜, 김준희, 문미주, 최신",
        MONA_CD: "LT72093S",
        MEM_TITLE: "- 연세대 경영학과 졸업\r\n- 서울대 정책학 석사학위 수여\r\n- 옥스퍼드대학교 발전경제학 석사학위 수여\r\n- 리즈대학교 경제학 박사학위 수여 \r\n- 행정고시 23회 합격\r\n\r\n現 제21대 국회의원(인천연수구을)\r\n現 제21대 국회 기획재정위원회 위원 \r\n\r\n前 제21대 국회 예산결산특별위원회 위원\r\n前 인천국제공항공사 사장\r\n前 교통안전공단 이사장 \r\n前 국토교통부 교통정책실장 \r\n前 국토교통부 항공정책실장 ",
        ASSEM_ADDR: "의원회관 540호",
    },
    {
        HG_NM: "정점식",
        HJ_NM: "鄭点植",
        ENG_NM: "JEONG JEOMSIG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1965-07-15",
        JOB_RES_NM: "간사",
        POLY_NM: "국민의힘",
        ORIG_NM: "경남 통영시고성군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "농림축산식품해양수산위원회",
        CMITS: "농림축산식품해양수산위원회, 감사원장(최재해) 임명동의에 관한 인사청문특별위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6327",
        E_MAIL: "jsjeong0403@naver.com",
        HOMEPAGE: "https://blog.naver.com/jsjeong0403",
        STAFF: "김광섭, 최재호",
        SECRETARY: "이병훈, 이호준",
        SECRETARY2: "임장수, 공민서, 양희숙, 김소현, 이예지",
        MONA_CD: "LJK4960Z",
        MEM_TITLE: "■ 학력\r\n· 서울대학교 대학원 법학석사\r\n· 서울대학교 법학과\r\n· 창원 경상고등학교(7회)\r\n· 고성중학교(30회)\r\n· 대성초등학교(31회)\r\n\r\n■ 경력\r\n· 국회 농림축산식품해양수산위원회 위원(현)\r\n· 국회 운영위원회 위원(현)\r\n· 국민의힘 법률자문위원회 위원장(현)\r\n· 대검찰청 공안부장(검사장)(전)\r\n· 창원지방검찰청 통영지청장(전)",
        ASSEM_ADDR: "의원회관 714호",
    },
    {
        HG_NM: "정진석",
        HJ_NM: "鄭鎭碩",
        ENG_NM: "CHUNG JINSUK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1960-09-04",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "충남 공주시부여군청양군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "외교통일위원회",
        CMITS: "외교통일위원회",
        REELE_GBN_NM: "5선",
        UNITS: "제16대, 제17대, 제18대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-5070",
        E_MAIL: "jsemail@naver.com",
        HOMEPAGE: "http://blog.naver.com/chungjinsuk",
        STAFF: "김동현, 김혁종",
        SECRETARY: "김국성, 김성겸",
        SECRETARY2: "편희석, 이민규, 조지형, 김단비, 배지연, 이은정",
        MONA_CD: "NQR1206Q",
        MEM_TITLE:
            "[주요경력]\r\n· 국회 외교통일위원회 위원(현)\r\n· 자유한국당 경제파탄대책특별위원회 위원장\r\n· 새누리당 원내대표·대표 권한대행(전)\r\n· 국회 운영위원장(전)\r\n· 국회 국방위원회, 정보위원회 위원(전)\r\n· 제20대 국회의원(4선, 현)\r\n· 자유한국당 공주·부여·청양 당원협의회 위원장(현)\r\n· 고려대학교 미래성장연구소 초빙교수\r\n· 새누리당 충청남도지사후보\r\n· 국회사무총장(장관급) \r\n· 국회의장 비서실장\r\n· 청와대 대통령실 정무수석비서관\r\n· 제18대 국회의원(삼선)\r\n· 제17대 국회의원(재선)\r\n· 제16대 국회의원(초선)\r\n· 국회 정보위원회 위원장\r\n· 국회 규제개혁특별위원회 위원장\r\n· 국회 한-일 의원연맹 21세기위원회 위원장\r\n· 국회 한-페루 의원친선협회 회장\r\n· 국민중심당 원내대표？최고위원\r\n· 자민련 대변인\r\n· 재단법인 계룡장학회 이사장\r\n· 관훈클럽 회원\r\n· 세계태권도연맹 고문\r\n· 한국일보 논설위원\r\n· 한국일보 워싱턴 특파원\r\n· 美 아메리칸大 국제관계대학 객원교수\r\n\r\n[수상 및 저서]\r\n· 황조근정훈장\r\n· 백상기자대상 4회\r\n· 한국기자협회 기자상 2회\r\n· 일요신문 21c 한국인상\r\n· 국회 입법·정책 최우수 국회의원\r\n· 국정감사 NGO모니터단 우수위원상\r\n· 전국지역신문협회 의정활동부문 국회의원 대상\r\n· 저서: 사다리정치, 총성없는 전선「격동의 한·미·일 현대 외교 비사」\r\n\r\n[지역 사무실]\r\n· 공주시 신관로 51로 2층, (T)041-855-4131, (F)041-857-4130\r\n· 부여군 부여읍 사비로 109 3층, (T)041-837-4131, (F)041-837-4132\r\n· 청양군 청양읍 중앙로 147 2층, (T)041-944-0971, (F)041-944-0792",
        ASSEM_ADDR: "의원회관 946호",
    },
    {
        HG_NM: "정찬민",
        HJ_NM: "鄭燦敏",
        ENG_NM: "JUNG CHANMIN",
        BTH_GBN_NM: "양",
        BTH_DATE: "1958-05-16",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "경기 용인시갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "교육위원회",
        CMITS: "교육위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2316~8",
        E_MAIL: "jungchanmin@naver.com",
        HOMEPAGE: null,
        STAFF: null,
        SECRETARY: null,
        SECRETARY2: null,
        MONA_CD: "SBK1544B",
        MEM_TITLE: "<경력>\r\n제21대 국회의원 (경기 용인시갑/국민의힘)\r\n제21대 국회 전반기 예산결산특별위원회 결산심사소위원회 위원\r\n제21대 국회 전반기 교육위원회 위원\r\n제21대 국회 전반기 예산결산특별위원회 위원\r\n제21대 국회의원 (경기 용인시갑/미래통합당)\r\n\r\n<수상내역>\r\n2021 NBN선정 혁신 인물 대상\r\n2021 대한민국 글로벌크라운 대상 정치부문\r\n2020 국정감사 NGO 모니터단 선정 국정감사 국리민복상\r\n2020 대한민국 공공정책대상 의정부문 대상\r\n2020 국민의힘 국정감사 우수의원",
        ASSEM_ADDR: "의원회관 621호",
    },
    {
        HG_NM: "정청래",
        HJ_NM: "鄭淸來",
        ENG_NM: "JUNG CHUNGRAE",
        BTH_GBN_NM: "음",
        BTH_DATE: "1965-04-18",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 마포구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "문화체육관광위원회",
        CMITS: "문화체육관광위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제17대, 제19대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-4316",
        E_MAIL: "ssaribi0415@naver.com",
        HOMEPAGE: "https://blog.naver.com/mapopower",
        STAFF: "송지원, 윤혜연",
        SECRETARY: "김수경, 장영준",
        SECRETARY2: "이정아, 오나윤, 안준모, 권경랑, 최다함",
        MONA_CD: "2385336L",
        MEM_TITLE: "주요경력\r\n- 제 17·19·21대 국회의원(마포구을)\r\n-한일의원연맹 미래위원장\r\n-유네스코 한국위원회 위원\r\n- 더불어민주당 마포구(을) 지역위원장\r\n- 더불어민주당 최고위원(前)\r\n- 더불어민주당 가계부채특별위원장(前)\r\n- 제19대 국회 정보위원회 간사\r\n- 제19대 국회 안전행정위원회 간사\r\n- 제19대 국회 국정원국정조사특별위원회 간사\r\n- 제17대 국회 문화관광위원회 간사\r\n- e스포츠&amp;게임산업 발전을 위한 국회의원 모임 회장(前)\r\n- (사)한국독립유공자협회 자문위원(前)\r\n- 박영석기념관 추진위원회 위원(前)\r\n- 김근태기념치유센터 설립추진위원회 위원(前)\r\n- 더불어민주당 문재인 대통령후보 중앙선대위\r\n- 국민참여공동본부장(前)\r\n- 더불어민주당 마포구(을) 지역위원장\r\n\r\n 저서 \r\n- 정치, 알아야 세상을 바꾼다 (2019, 자음과모음)\r\n- 정세현 ？ 정청래와 함께 평양 갑시다 (2018, 푸른숲)\r\n- 정청래의 국회의원 사용법 (2016, 푸른숲)\r\n- 거침없이 정청래 (2015, 자음과모음)\r\n- 유쾌한 정치여행 (2011, 호두나무)\r\n- 정통 시사인물 셀프탐구 OK 정청래 (2011, 호두나무)\r\n- 사람만이 사람 사는 세상을 만든다 (2003, 황소걸음)",
        ASSEM_ADDR: "의원회관 449호",
    },
    {
        HG_NM: "정춘숙",
        HJ_NM: "鄭春淑",
        ENG_NM: "JUNG CHOUNSOOK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1964-01-08",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 용인시병",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "보건복지위원회",
        CMITS: "보건복지위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-3740",
        E_MAIL: "hopejung@na.go.kr",
        HOMEPAGE: "http://blog.naver.com/chounsook_jung",
        STAFF: "김용천, 최대환",
        SECRETARY: "강승림, 손정우",
        SECRETARY2: "맹현, 이재정, 조은아, 이훈희, 김명환, 한우철",
        MONA_CD: "MD083627",
        MEM_TITLE: "강남대학교 사회복지전문대학원 사회복지학 박사\r\n前한국여성의전화 상임대표\r\n前서울시 성평등위원회 위원\r\n前대법원 양형위원회 자문위원\r\n前더불어민주당 혁신위원회 위원\r\n\r\n前더불어민주당 대외협력위원회 위원장\r\n前더불어민주당 보육특별위원회 위원장\r\n前제19대 대통령선거 중앙선거대책위원회 종합상황본부 단장\r\n前제20대 국회 전후반기 보건복지위원회 위원\r\n前제20대 국회 전후반기 여성가족위원회 위원\r\n前국회 헌법개정 및 정치개혁 특별위원회 위원\r\n前더불어민주당 원내대변인\r\n",
        ASSEM_ADDR: "의원회관 630호",
    },
    {
        HG_NM: "정태호",
        HJ_NM: "鄭泰浩",
        ENG_NM: "JUNG TAEHO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1963-03-20",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 관악구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "산업통상자원중소벤처기업위원회",
        CMITS: "산업통상자원중소벤처기업위원회, 예산결산특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-5073",
        E_MAIL: "jth5073@gmail.com",
        HOMEPAGE: null,
        STAFF: "가민경, 고봉준",
        SECRETARY: "김민상, 정선인, 최기원",
        SECRETARY2: "김진, 이선정, 임화영, 안재경, 하담",
        MONA_CD: "UHB5553T",
        MEM_TITLE: "[학력]\r\n서울 인창고등학교 졸업\r\n서울대학교 사회복지학 학사\r\n뉴욕주립대학교 대학원 행정학 석사 (MPA 1999.9~2000.12)\r\n\r\n[경력]\r\n21대 국회의원(서울 관악을)\r\n국회 산업통상자원중소벤처기업위원회 위원\r\n더불어민주당 전략기획위원장\r\n더불어민주당 국난극복K뉴딜위원회 정책기획단장\r\n더불어민주당 4.7재보궐선거 선거기획단 간사 \r\n국가경제자문회의 거시경제복지노동환경위원회 위원\r\n민주연구원 부원장\r\n전) 더불어민주당 정책위원회 상임부의장\r\n전) 더불어민주당 코로나19 국난극복위원회\r\n일자리·고용TF 단장\r\n전) 더불어민주당 난곡선경전철추진특별위원장\r\n전) 문재인 대통령비서실 일자리수석\r\n전) 노무현 대통령비서실 대변인\r\n전) 김대중 대통령직 인수위원회 행정관\r\n전) 새정치민주연합 다문화위원회 부위원장\r\n전) 미국 콜롬비아대학교 동아시아연구소 객원연구원\r\n\r\n[저서]\r\n정치가 된 일자리(2020. 1)\r\n대통령 당선인이 해야할 첫번째 일(2011.12)\r\n",
        ASSEM_ADDR: "의원회관 422호",
    },
    {
        HG_NM: "정필모",
        HJ_NM: "鄭必模",
        ENG_NM: "JUNG PILMO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1958-06-03",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "과학기술정보방송통신위원회",
        CMITS: "과학기술정보방송통신위원회, 언론·미디어 제도개선 특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6355",
        E_MAIL: "pmjung537@gmail.com",
        HOMEPAGE: "http://blog.naver.com/pmjung58",
        STAFF: "이수남, 이정훈",
        SECRETARY: "원종현, 정인미",
        SECRETARY2: "김진겸, 연강성, 박주희, 전성하",
        MONA_CD: "3425169D",
        MEM_TITLE: "[학력]\r\n성균관대학교 대학원 언론학 박사 졸업\r\n\r\n[경력]\r\n현) 더불어민주당 비례대표 국회의원\r\n전) KBS 부사장\r\n전) KBS &#039미디어 인사이드&#039 앵커\r\n전) KBS 보도본부 해설위원\r\n전) KBS 보도본부 1TV뉴스제작팀 팀장\r\n전) KBS 보도본부 경제과학팀 팀장\r\n전) KBS &#039경제전망대&#039 앵커 겸 데스크\r\n전) KBS 보도본부 기자",
        ASSEM_ADDR: "의원회관 537호",
    },
    {
        HG_NM: "정희용",
        HJ_NM: "鄭熙溶",
        ENG_NM: "JUNG HEEYONG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1976-10-01",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "경북 고령군성주군칠곡군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "과학기술정보방송통신위원회",
        CMITS: "과학기술정보방송통신위원회, 예산결산특별위원회, 언론·미디어 제도개선 특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-8540",
        E_MAIL: "heeyong4you@naver.com",
        HOMEPAGE: null,
        STAFF: "장기정, 최우영",
        SECRETARY: "윤다솜, 이명옥",
        SECRETARY2: "최수영, 이흥진, 이지윤, 임승균, 김소정",
        MONA_CD: "PFG2137X",
        MEM_TITLE: "(현) 제21대 고령군성주군칠곡군 국회의원\r\n(현) 국회 예산결산특별위원회 위원\r\n(현) 국회 과학기술정보방송통신위원회 위원\r\n(현) 국민의힘 중앙재해대책위 위원장\r\n(현) 국민의힘 국민통합위 위원\r\n(현) 국민의힘 경북도당 윤리위원장\r\n(현) 국민의힘 정책위 백신TF위원\r\n(현) 국민의힘 정책위 제3정책조정위원회 부위원장\r\n(전) 국회 운영위원회 위원\r\n(전) 국민의힘 원내부대표\r\n(전) 국민의힘 저출생대책 특위 위원\r\n(전) 국민의힘 정부정책감시 특위 위원\r\n(전) 이철우 경상북도 도지사 경제특별보좌관\r\n(전) 국회의원 보좌관\r\n(전) 한전 KDN",
        ASSEM_ADDR: "의원회관 436호",
    },
    {
        HG_NM: "조경태",
        HJ_NM: "趙慶泰",
        ENG_NM: "CHO KYOUNGTAE",
        BTH_GBN_NM: "음",
        BTH_DATE: "1968-01-10",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "부산 사하구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "교육위원회",
        CMITS: "교육위원회, 예산결산특별위원회",
        REELE_GBN_NM: "5선",
        UNITS: "제17대, 제18대, 제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6380",
        E_MAIL: "yeskt@hanmail.net",
        HOMEPAGE: null,
        STAFF: "성창용, 이동영",
        SECRETARY: "배준성, 조용택",
        SECRETARY2: "최호림, 유현호, 박수혜, 김영우, 이지연, 이하얀",
        MONA_CD: "5KV82250",
        MEM_TITLE: "- 제 17, 18, 19, 20, 21대 국회의원\r\n- 부산대학교 공학 박사\r\n- 전) 미래통합당 최고위원\r\n- 전) 제20대 국회 전반기 기획재정위원회 위원장\r\n- 전) 자유한국당 인재영입위원장\r\n- 현) 한·대만의원친선협회 회장",
        ASSEM_ADDR: "의원회관 636호",
    },
    {
        HG_NM: "조명희",
        HJ_NM: "曺明姬",
        ENG_NM: "JO MYUNGHEE",
        BTH_GBN_NM: "음",
        BTH_DATE: "1955-09-14",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "국방위원회",
        CMITS: "국방위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-3255",
        E_MAIL: "843mhjo@gmail.com",
        HOMEPAGE: "https://blog.naver.com/mhjo7312",
        STAFF: "채영권, 황찬일",
        SECRETARY: "김샛별, 한희광",
        SECRETARY2: "윤희진, 조태희, 이유연, 김이진, 맹요셉",
        MONA_CD: "S741317G",
        MEM_TITLE: "[경력]\r\n-제21대 국회의원 (비례대표/국민의힘)\r\n-국민의힘 원내부대표\r\n-국민의힘 미래산업일자리특별위원회 위원장\r\n-국회 ICT융합포럼 공동대표\r\n-국회 국토공간정보정책포럼 공동대표\r\n\r\n-경북대학교 항공위성시스템전공 교수 (前)\r\n-대통령소속 국가우주위원회 위원 (前)\r\n-국가과학기술위원회 위원 (前)\r\n-아시아 GIS(지리정보시스템)학회 회장 (前)\r\n-전국여교수연합회 부회장 (前)\r\n-한국여성과학기술단체총연합회 이사/대의원 (前)\r\n-UNCRD 유엔지역개발센터/GIS Unit 연구원 (前)\r\n\r\n[학력]\r\n-日 도카이대학 대학원 해양연구과 해양원격탐사/GIS 공학박사\r\n-경북대학교 대학원 지리학과 자연지리학.원격탐사 전공 문학박사",
        ASSEM_ADDR: "의원회관 843호",
    },
    {
        HG_NM: "조수진",
        HJ_NM: "趙修眞",
        ENG_NM: "CHO SUJIN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1972-06-19",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "법제사법위원회",
        CMITS: "법제사법위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-9423",
        E_MAIL: "assembly2020@naver.com",
        HOMEPAGE: "https://blog.naver.com/assembly2020",
        STAFF: "김춘식, 안준철",
        SECRETARY: "김진천, 조재현",
        SECRETARY2: "강효나, 조형원, 이미림, 홍준현",
        MONA_CD: "YLS4431M",
        MEM_TITLE: "【 학 력 】\r\n\r\n· 고려대학교 불어불문학 학사\r\n· 동국대학교 언론정보대학원 신문방송학과 석사\r\n· 동국대학교 대학원 미디어커뮤니케이션학과\r\n 박사 재학 \r\n\r\n【 경 력 】\r\n\r\n· 제21대 국회의원\r\n  (2020.05. ~ )\r\n· 미래한국당 대변인\r\n  (2020.04. ~ 2020.05.)\r\n· 동아일보 미디어연구소 부장\r\n  (2018.07. ~ 2020.03.) \r\n· 동아일보 논설위원실 논설위원(부장)\r\n  (2018.01. ~ 2018.06.)\r\n· 파리 고등사회과학원(EHESS) 초청연구원\r\n  (2016.07. ~ 2017.07.)\r\n· 동아일보 정치부 차장\r\n  (2010.07. ~ 2017.12.)",
        ASSEM_ADDR: "의원회관 339호",
    },
    {
        HG_NM: "조승래",
        HJ_NM: "趙承來",
        ENG_NM: "JO SEOUNGLAE",
        BTH_GBN_NM: "양",
        BTH_DATE: "1968-02-21",
        JOB_RES_NM: "간사",
        POLY_NM: "더불어민주당",
        ORIG_NM: "대전 유성구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "과학기술정보방송통신위원회",
        CMITS: "과학기술정보방송통신위원회, 여성가족위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2640",
        E_MAIL: "yuseong0413@daum.net",
        HOMEPAGE: "http://blog.naver.com/yuseong0413",
        STAFF: "강두식, 권태돈",
        SECRETARY: "장세형, 정아름, 차진영",
        SECRETARY2: "송준영, 이정은, 우상훈, 김현중, 최수경",
        MONA_CD: "FYI20317",
        MEM_TITLE:
            "[학력]\r\n● 충남대학교 평화안보대학원 석사\r\n● 충남대학교 사회학과 학사\r\n● 대전 한밭고등학교\r\n● 대전 대신초등학교/대신중학교\r\n\r\n[현직]\r\n● 제20,21대 국회의원 \r\n● 국회 과학기술정보방송통신위원회 간사\r\n● 국회 과학기술정보방송통신위원회 과학기술원자력법안심사소위 위원장\r\n● 국회 여성가족위원회 위원\r\n● 더불어민주당 제4정책조정위원장\r\n● 더불어민주당 K-뉴딜위원회 디지털 분과 위원장\r\n● 더불어민주당 우주항공방위산업TF 공동단장\r\n● 더불어민주당 가상자산TF 위원\r\n● 더불어민주당 미디어혁신특별위원회 위원\r\n● 더불어민주당 백신.치료제특별위원회 위원\r\n● 더불어민주당 반도체기술특별위원회 위원\r\n● 더불어민주당 국가균형발전특별위원회 부위원장\r\n● 더불어민주당 대전유성구갑 지역위원회 위원장\r\n● 유네스코한국위원회 위원\r\n● 국회 문화콘텐츠포럼 대표\r\n● 대한민국 게임포럼 대표\r\n\r\n[경력]\r\n● 국회 교육위원회 간사\r\n● 국회 교육문화체육관광위원회 위원\r\n● 국회 예산결산특별위원회 위원\r\n● 국회 운영위원회 위원\r\n● 국회 지방재정분권특별위원회 위원 \r\n● 국회 코로나19대책특별위원회 위원\r\n● 민주연구원 부원장 \r\n● 더불어민주당 원내선임부대표\r\n● 더불어민주당 원내부대표 \r\n● 더불어민주당 교육특별위원회 위원장\r\n● 더불어민주당 대전광역시당 위원장\r\n● 더불어민주당 미래전환 K-뉴딜위원회 입법지원단장\r\n● 더불어민주당 규제혁신추진단 K-뉴딜TF 팀장\r\n● 더불어민주당 코로나19국난극복상황실 상황실장\r\n● 더불어민주당 코로나19국난극복위원회 돌봄교육대책TF단장\r\n● 더불어민주당 국회세종의사당추진특별위원회 간사\r\n● 더불어민주당 유치원·어린이집 공공성 강화 특별위원회 간사\r\n● 더불어민주당 전략기획자문위원회 부위원장 \r\n● 더불어민주당 남북문화체육협력특별위원회 부위원장\r\n● 한국영화를 사랑하는 국회의원 모임 공동대표\r\n● 문재인대통령 에콰도르 특사\r\n● 문재인 국민주권선거대책위원회 정책부본부장\r\n● 충청남도지사 비서실장\r\n● 대통령 비서실 사회조정비서관\r\n● 순천향대학교 지역정책연구원 부원장\r\n● 단국대학교 초빙교수",
        ASSEM_ADDR: "의원회관 940호",
    },
    {
        HG_NM: "조오섭",
        HJ_NM: "曺五燮",
        ENG_NM: "JO OSEOP",
        BTH_GBN_NM: "양",
        BTH_DATE: "1968-07-19",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "광주 북구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국토교통위원회",
        CMITS: "예산결산특별위원회, 국토교통위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-8191~3",
        E_MAIL: "hana-king@hanmail.net",
        HOMEPAGE: "https://blog.naver.com/hana-king",
        STAFF: "김영삼, 김형환",
        SECRETARY: "최민, 홍돈석",
        SECRETARY2: "김성환, 신정훈, 이명원, 정슬기, 정은지",
        MONA_CD: "25I8709Q",
        MEM_TITLE: "[출생]\r\n- 전남 담양 출생(1968)\r\n\r\n[학력]\r\n- 광주 동신고등학교 졸업\r\n- 전남대학교 신문방송학과 졸업\r\n\r\n[경력]\r\n(현)제 21대 국회 국토교통위원회 위원\r\n(현)더불어민주당 광주광역시 북구갑 지역위원장\r\n(현)더불어민주당 정책위 상임 부의장\r\n(전)더불어민주당 중앙당 부대변인\r\n(전)더불어민주당 중앙당 정책위 부의장\r\n(전)국가균형발전위원회 대변인,소통기획관\r\n(전)제 6,7대 광주광역시의회 의원\r\n\r\n사) 나무심는사람들 이사\r\n사) 희망나무 이사\r\n사) 대인 홍남순변호사 기념사업회 이사\r\n재) 관현 장학재단 이사 ",
        ASSEM_ADDR: "의원회관 638호",
    },
    {
        HG_NM: "조응천",
        HJ_NM: "趙應天",
        ENG_NM: "CHO EUNGCHEON",
        BTH_GBN_NM: "음",
        BTH_DATE: "1962-09-17",
        JOB_RES_NM: "간사",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 남양주시갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국토교통위원회",
        CMITS: "국토교통위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2717",
        E_MAIL: "chopros312@gmail.com",
        HOMEPAGE: "http://blog.naver.com/chopros",
        STAFF: "조현욱, 최관욱",
        SECRETARY: "김은의, 민들레",
        SECRETARY2: "정승민, 김원철, 박진수, 정서전, 정소연",
        MONA_CD: "CDL93608",
        MEM_TITLE: "- 1962. 대구광역시 출생\r\n- 1985. 서울대학교 공법학과 졸업\r\n- 2000. 김대중 대통령비서실 민정수석실 행정관\r\n- 2004. 노무현정부 부패방지위원회 실태조사단장\r\n- 2005. 수원지방검찰청 공안부장검사 \r\n- 2006. 법무부장관 정책보좌관\r\n- 2008. 이명박정부 국가정보원 원장 특별보좌관\r\n- 2013. 제18대 대통령직인수위원회 법질서사회안전분과 전문위원\r\n- 2013. 청와대 공직기강비서관\r\n- 2016. 제20대 국회의원 (경기 남양주시갑/더불어민주당)\r\n- 2019. 더불어민주당 정책위원회 상임부의장\r\n- 2020. 더불어민주당 정책위원회 제5정조위원장\r\n- 現 국회 국토교통위원회 간사위원\r\n- 現 더불어민주당 정책위원회 선임부의장",
        ASSEM_ADDR: "의원회관 847호",
    },
    {
        HG_NM: "조정식",
        HJ_NM: "趙正湜",
        ENG_NM: "CHO JEONGSIK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1963-12-25",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 시흥시을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "과학기술정보방송통신위원회",
        CMITS: "과학기술정보방송통신위원회, 정보위원회",
        REELE_GBN_NM: "5선",
        UNITS: "제17대, 제18대, 제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2760~2",
        E_MAIL: "7842760@naver.com",
        HOMEPAGE: "http://cjs.or.kr",
        STAFF: "이정희, 한인환",
        SECRETARY: "강영석, 도수만",
        SECRETARY2: "김재훈, 박은숙, 김은희, 최민서, 이정성",
        MONA_CD: "IN328264",
        MEM_TITLE: "동성고등학교 졸업\r\n연세대 건축공학과 졸업\r\n연세대 행정대학원(도시 및 지방행정) 졸업\r\n故 제정구의원 정책 보좌\r\n\r\n現 더불어민주당 정책위의장\r\n現 국회 통합과 상생 포럼 대표의원\r\n現 한-우크라이나 의원친선협회 회장\r\n\r\n前 국회 국토교통위원회 위원장\r\n前 새정치민주연합 사무총장\r\n前 새정치민주연합 경기도 공천심사위원회 위원장\r\n前 민주당 경기도당 위원장\r\n前 민주당 원내부대표 및 원내대변인\r\n前 민주당 야권통합협상위원회 협상대표단 단장\r\n前 민주통합당 19대 총선 공천심사위원회 위원",
        ASSEM_ADDR: "의원회관 454호",
    },
    {
        HG_NM: "조정훈",
        HJ_NM: "趙廷訓",
        ENG_NM: "CHO JUNGHUN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1972-10-07",
        JOB_RES_NM: "위원",
        POLY_NM: "시대전환",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "산업통상자원중소벤처기업위원회",
        CMITS: "산업통상자원중소벤처기업위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2181",
        E_MAIL: "chojunghun544@naver.com",
        HOMEPAGE: "http://blog.naver.com/chojunghun544",
        STAFF: "권병태, 최병현",
        SECRETARY: "유경선, 윤재훈",
        SECRETARY2: "구애림, 이종학, 최하예, 김수현, 박설희, 노영서",
        MONA_CD: "WJL30106",
        MEM_TITLE: "2020.05. ~ 21대 국회의원(비례대표/시대전환)\r\n2020.01. ~ 2020.03. 시대전환 공동대표\r\n2017.12. ~ 2019.12. 북방경제협력위원회 민간위원\r\n2017.03. ~ 2020.03. 아주대 통일연구소 소장\r\n2017.03. ~ 2020.03. 아주대 세계학연구소 중앙아시아센터 소장\r\n2017.03. ~ 2020.03. 아주대 국제대학원 초빙교수\r\n2016.06. ~ 2017.02. 여시재 부원장\r\n2015.09. ~ 2016.05. 세계은행 우즈베키스탄 사무소 대표\r\n2012.09. ~ 2015.08. 세계은행 팔레스타인 사무소 차석\r\n2005.08. ~ 2009.07. 세계은행 동유럽 지역국 거버넌스 선임전문관",
        ASSEM_ADDR: "의원회관 544호",
    },
    {
        HG_NM: "조태용",
        HJ_NM: "趙太庸",
        ENG_NM: "CHO TAEYONG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1956-08-29",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "외교통일위원회",
        CMITS: "외교통일위원회, 정보위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-8231",
        E_MAIL: "ty709ho@gmail.com",
        HOMEPAGE: null,
        STAFF: "박정현, 장영일",
        SECRETARY: "안정민, 장혁준",
        SECRETARY2: "한정훈, 주보라, 조하나, 오경섭, 최아녕",
        MONA_CD: "I434361W",
        MEM_TITLE: "▶2021.6.~2021.8. 국민의힘 정책위원회 부의장\r\n▶2020.11.~2021.6. 국민의힘 정책위원회 제4정책조정위원회 부위원장\r\n▶2020.10.~현재. 국민의힘 북한인권 및 탈북자 납북자 위원회 고문\r\n▶2020.10.~현재. 국민의힘 약자와의동행위원회 국민동행분과위원\r\n▶2020.9.~현재. 국민의힘 국제위원장\r\n▶2020.7.~현재. 제21대 국회 전반기 정보위원회 위원\r\n▶2020.7.~현재. 제21대 국회 전반기 외교통일위원회 위원\r\n▶2020.6.~현재. 국회 글로벌외교안보포럼 연구책임의원\r\n▶2020.5~현재. 제21대 국회의원 (비례대표)\r\n▶2015.10~2017.5. 국가안보실 제1차장\r\n▶2015.10~2017.5. 국가안전보장회의 사무처장\r\n▶2014.2.~2015.10. 외교부 제1차관",
        ASSEM_ADDR: "의원회관 709호",
    },
    {
        HG_NM: "조해진",
        HJ_NM: "曺海珍",
        ENG_NM: "CHO HAEJIN",
        BTH_GBN_NM: "양",
        BTH_DATE: "1963-08-04",
        JOB_RES_NM: "위원장",
        POLY_NM: "국민의힘",
        ORIG_NM: "경남 밀양시의령군함안군창녕군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "교육위원회",
        CMITS: "교육위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제18대, 제19대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-1513",
        E_MAIL: "chohaejin0804@naver.com",
        HOMEPAGE: null,
        STAFF: "이상이, 조연경",
        SECRETARY: "이지현, 장동진",
        SECRETARY2: "김새난슬, 임성락, 이지섭, 조주령, 차은경",
        MONA_CD: "Z6R3959C",
        MEM_TITLE: "(전) 새누리당 원내수석부대표\r\n(전) 새누리당 정책위 부의장\r\n(전) 새누리당 경남도당위원장\r\n(전) 한나라당 대변인",
        ASSEM_ADDR: "의원회관 410호",
    },
    {
        HG_NM: "주철현",
        HJ_NM: "朱哲鉉",
        ENG_NM: "JU CHEOLHYEON",
        BTH_GBN_NM: "음",
        BTH_DATE: "1959-03-12",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "전남 여수시갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "농림축산식품해양수산위원회",
        CMITS: "농림축산식품해양수산위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6341~3",
        E_MAIL: "jassembly536@gmail.com",
        HOMEPAGE: "blog.naver.com/jjwc306",
        STAFF: "김재민, 정송호",
        SECRETARY: "김일주, 유무성",
        SECRETARY2: "정학근, 박진규, 김준랑, 임선경, 박민라",
        MONA_CD: "T465023H",
        MEM_TITLE: "前) 민선6기 여수시장\r\n前) 대검찰청 강력부장\r\n前) 광주·창원 검사장\r\n前) 법무부 법죄예방정책국장\r\n現) 더불어민주당 여수시(갑) 지역위원장\r\n現) 농림축산식품 해양수산위원회 위원",
        ASSEM_ADDR: "의원회관 536호",
    },
    {
        HG_NM: "주호영",
        HJ_NM: "朱豪英",
        ENG_NM: "JOO HOYOUNG",
        BTH_GBN_NM: "양",
        BTH_DATE: "1960-12-10",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "대구 수성구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "과학기술정보방송통신위원회",
        CMITS: "과학기술정보방송통신위원회",
        REELE_GBN_NM: "5선",
        UNITS: "제17대, 제18대, 제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2055",
        E_MAIL: "7842055@naver.com",
        HOMEPAGE: "http://www.joohoyoung.or.kr",
        STAFF: "우경식",
        SECRETARY: "김승용, 임대규",
        SECRETARY2: "정찬기, 김나원, 남길호, 이아영, 최준영",
        MONA_CD: "8SV6917G",
        MEM_TITLE: "능인고 졸업\r\n영남대 법학과 졸업\r\n사법시험 24회\r\n영남대 법학박사\r\n대구지방법원 부장판사, 영덕상주지원장\r\n제 17, 18, 19, 20, 21대 국회의원 \r\n(전) 이명박 대통령후보 비서실장\r\n(전) 17대 대통령당선인 대변인\r\n(전) 한나라당 원내수석부대표\r\n(전) 국회운영위원회 간사\r\n(전) 국회여성위원회 위원\r\n(전) 국회국제경기지원특별위원회 법안심사소위원장\r\n(전) 국회 문화체육관광방송통신위원회 위원\r\n(전) 초대 특임장관\r\n(전) 여의도연구소장\r\n(전) 새누리당 인재영입위원장\r\n(전) 국회외교통상통일위원회 위원\r\n(전) 국회문화체육관광방송통신위원회 위원\r\n(전) 국회교육문화체육관광위원회 위원\r\n(전) 국회정치개혁특별위원회 위원장\r\n(전) 새누리당 대구시당위원장\r\n(전) 새누리당 정책위의장\r\n(전) 국회정보위원회 위원장\r\n(전) 국회국방위원회 위원\r\n(전) 국회정무위원회 위원\r\n(현) 미래통합당 원내대표 ",
        ASSEM_ADDR: "의원회관 704호",
    },
    {
        HG_NM: "지성호",
        HJ_NM: "池成浩",
        ENG_NM: "JI SEONGHO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1982-04-03",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "외교통일위원회",
        CMITS: "외교통일위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-5270",
        E_MAIL: "mokbal2006@naver.com",
        HOMEPAGE: "https://blog.naver.com/mokbal2006",
        STAFF: "강태용",
        SECRETARY: "김건우, 김효준",
        SECRETARY2: "박영철, 주은주, 김지선, 정우경, 이송화",
        MONA_CD: "Y7K5946R",
        MEM_TITLE: "<경력>\r\n2010.04.~2020.03. 북한인권단체 NAUH(나우) 대표\r\n2019.01.~2019.12. 통일부 북한인권기록센터 자문위원\r\n2018.10.~2018.11. 미국 국무부 차세대 지도자 과정 IVLP(International Visitor Leadership Program) 수료\r\n\r\n<학력>\r\n2017~2019 동국대학교 대학원 형사법 석사과정 수료\r\n2009~2015 동국대학교 법학과 학사\r\n\r\n<수상>\r\n2018 미국민주주의진흥재단 민주주의상 (나우) \r\n2017 옥시데이재단 커리지 어워드",
        ASSEM_ADDR: "의원회관 620호",
    },
    {
        HG_NM: "진선미",
        HJ_NM: "陳善美",
        ENG_NM: "JIN SUNMEE",
        BTH_GBN_NM: "음",
        BTH_DATE: "1967-05-14",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 강동구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "정무위원회",
        CMITS: "정무위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-9591",
        E_MAIL: "smjingogo@gmail.com",
        HOMEPAGE: "http://blog.naver.com/smjingogo",
        STAFF: "이여진, 장동혁",
        SECRETARY: "강재승, 김병준",
        SECRETARY2: "강나루, 박준모, 박나리, 김옥분, 조용준",
        MONA_CD: "68P7228G",
        MEM_TITLE: "3선(19대. 20대. 21대 강동구 갑 국회의원)\r\n성균관대학교 법학과 졸업\r\n민주화를 위한 변호사모임 여성인권위원장\r\n새정치민주연합 정책위원회 부의장\r\n국회 여성아동대상 성폭력대책 특별위원회 위원\r\n더불어민주당 원내부대표\r\n더불어민주당 선거대책위원회 위원\r\n더불어민주당 을지로위원회 법률지원단장\r\n국회 저출산고령화 특별위원회 더불어민주당 간사\r\n더불어민주당 제1정책조정위원회 위원장\r\n더불어민주당 원내 수석 부대표\r\n전)국회 문화체육관광위원회 위원\r\n전)여성가족부 장관\r\n전)보건복지위원회 위원\r\n전)국토교통위원장\r\n현)정무위원회 위원\r\n",
        ASSEM_ADDR: "의원회관 1002호",
    },
    {
        HG_NM: "진성준",
        HJ_NM: "陳聲準",
        ENG_NM: "JIN SUNGJOON",
        BTH_GBN_NM: "음",
        BTH_DATE: "1967-04-19",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 강서구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국토교통위원회",
        CMITS: "국토교통위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제19대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-5725",
        E_MAIL: "hotjjoon@gmail.com",
        HOMEPAGE: "https://blog.naver.com/theminjoohotjjoon",
        STAFF: "박계홍, 오정훈",
        SECRETARY: "정진극, 홍인숙",
        SECRETARY2: "김광운, 신보용, 이웅재, 이정현, 김은비",
        MONA_CD: "3C23171A",
        MEM_TITLE: "● 학력\r\n전북대학교 법학 학사\r\n동암고등학교\r\n\r\n● 경력\r\n19, 21대 국회의원 [재선]\r\n더불어민주당 서울특별시 강서을지역위원회 위원장 [현]\r\n더불어민주당 전국을지키는민생실천위원회 위원장 [현]\r\n민평련(민주평화국민연대) 사무총장 [현]\r\n\r\n서울특별시 정무부시장 [전]\r\n문재인 대통령비서실 정무기획비서관 [전]\r\n더불어민주당 전략기획위원회 위원장 [전]",
        ASSEM_ADDR: "의원회관 741호",
    },
    {
        HG_NM: "천준호",
        HJ_NM: "千俊鎬",
        ENG_NM: "CHEON JUNHO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1971-02-15",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 강북구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국토교통위원회",
        CMITS: "국토교통위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-0712",
        E_MAIL: "juno3355@gmail.com",
        HOMEPAGE: "https://blog.naver.com/junocheon",
        STAFF: "성세운, 이상철",
        SECRETARY: "전준호, 최하얀",
        SECRETARY2: "권혁모, 신택수, 김제식, 김나영, 이주혜",
        MONA_CD: "A494529E",
        MEM_TITLE: "현)제21대 국회의원\r\n현)국회 국토교통위원회 위원\r\n현)더불어민주당 강북갑 지역위원장\r\n현)더불어민주당 서울시당 운영위원\r\n현)민주연구원 부원장\r\n현)더불어민주당 을지로위원회 운영위원\r\n전)더불어민주당 부동산특별위원회 위원",
        ASSEM_ADDR: "의원회관 929호",
    },
    {
        HG_NM: "최강욱",
        HJ_NM: "崔康旭",
        ENG_NM: "CHOE KANGWOOK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1968-05-05",
        JOB_RES_NM: "위원",
        POLY_NM: "열린민주당",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "법제사법위원회",
        CMITS: "법제사법위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-9640",
        E_MAIL: "assembly420@gmail.com",
        HOMEPAGE: "http://www.facebook.com/choe420",
        STAFF: "박철훈, 유능한",
        SECRETARY: "구승모, 신정아",
        SECRETARY2: "최원명, 양승권, 주원, 이혜연, 정홍우",
        MONA_CD: "ICH23251",
        MEM_TITLE: "[학력]\r\nㆍ서울대학교 법대 졸업 (1990)\r\nㆍ서울대학교 법대 대학원 졸업 (1992)\r\n\r\n\r\n[경력]\r\nㆍ육군 법무관, 국방부 검찰관 (1994~2005)\r\nㆍ방위사업청 옴브즈먼 (2006~2010)\r\nㆍ민주사회를 위한 변호사 모임 사법위원회 위원장 (2006~2008)\r\nㆍ대한변호사협회 인권위원회 위원 (2007~2009)\r\nㆍ국회 윤리특별위원회 윤리심사자문위원회 위원 (2010~2012)\r\nㆍ국가인권위원회 인권교육 전문위원 (2010)\r\nㆍ방송문화진흥회 9기, 10기 이사 (2012~2018)\r\nㆍ경찰청 경찰개혁위원회 수사개혁분과위원 (2017)\r\nㆍ대통령비서실 민정수석실 공직기강비서관 (2018~2020)",
        ASSEM_ADDR: "의원회관 420호",
    },
    {
        HG_NM: "최기상",
        HJ_NM: "崔基相",
        ENG_NM: "CHOI KISANG",
        BTH_GBN_NM: "양",
        BTH_DATE: "1969-10-07",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 금천구",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "법제사법위원회",
        CMITS: "법제사법위원회, 윤리특별위원회, 예산결산특별위원회, 감사원장(최재해) 임명동의에 관한 인사청문특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-4990",
        E_MAIL: "choiwakeup@gmail.com",
        HOMEPAGE: "http://blog.naver.com/gisang2020",
        STAFF: "김성준, 정우윤",
        SECRETARY: "김경은, 이주환",
        SECRETARY2: "박수환, 도병두, 조성룡, 손하은, 변유정",
        MONA_CD: "I5I2468R",
        MEM_TITLE: "전남 영암 출생 \r\n\r\n광주 살레시오고등학교 졸업\r\n서울대학교 경영학과 졸업\r\n제35회 사법시험 합격\r\n\r\n전) 헌법재판소 부장연구관\r\n전) 서울중앙지방법원 부장판사\r\n전) 전국법관대표회의 의장\r\n\r\n전) 더불어민주당 영입인재\r\n전) 더불어민주당 중앙당 선거관리위원\r\n전) 더불어민주당 서울시당 선거관리부위원장\r\n전) 더불어민주당 전국대의원대회준비위원회 당헌당규,당무발전분과위원장 \r\n전) 더불어민주당 정책위원회 부의장\r\n현) 제21대 국회 전반기 법제사법위원회 위원\r\n현) 더불어민주당 윤리감찰단 단장\r\n현) 더불어민주당 정책위원회 상임부의장\r\n\r\n수상내역)\r\n2020 국회의원 아름다운 말 선플상\r\n2020 법률소비자연맹 NGO 모니터단 국정감사 국리민복상(우수의원상)\r\n2020 쿠키뉴스 국정감사 우수의원\r\n2010 서울지방변호사회 우수법관\r\n\r\n\r\n",
        ASSEM_ADDR: "의원회관 733호",
    },
    {
        HG_NM: "최승재",
        HJ_NM: "崔承宰",
        ENG_NM: "CHOI SEUNGJAE",
        BTH_GBN_NM: "음",
        BTH_DATE: "1967-07-11",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "산업통상자원중소벤처기업위원회",
        CMITS: "산업통상자원중소벤처기업위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6730",
        E_MAIL: "joynet4321@gmail.com",
        HOMEPAGE: "https://blog.naver.com/joynet1234",
        STAFF: "이정은, 최순영",
        SECRETARY: "김성순, 맹용재",
        SECRETARY2: "김철민, 이윤정, 김선태, 류진희",
        MONA_CD: "M7T9712V",
        MEM_TITLE: "제21대 국회의원\r\n(현) 국민의힘 소상공인위원회 위원장\r\n(현) 국민의힘 소상공인살리기 특위 간사\r\n(현) 국회 산업통상자원중소벤처기업위원회 위원\r\n\r\n\r\n(전) 소상공인연합회 회장\r\n(전) 중소기업중앙회 이사\r\n(전) 동반성장위원회 위원\r\n(전) 국민의힘 원내부대표\r\n(전) 미세먼지 문제 해결을 위한 국가기후환경회의 위원\r\n(전) 경제사회노동위원회 위원\r\n(전) 중소상공인희망재단 이사장\r\n(전) 전국소상공인살리기운동본부 대표\r\n(전) 국회 국정감사 NGO모니터단 공동단장\r\n(전) 한국콘텐츠공제조합 등기이사\r\n(전) 중소기업 규제개혁 옴부즈만\r\n(전) 법제처 국민법제관\r\n(전) 전국소상공인대회 총괄운영위원장\r\n(전) 한국인터넷콘텐츠서비스협동조합 이사장",
        ASSEM_ADDR: "의원회관 830호",
    },
    {
        HG_NM: "최연숙",
        HJ_NM: "崔姸淑",
        ENG_NM: "CHOI YOUNSUK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1960-07-25",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의당",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "보건복지위원회",
        CMITS: "보건복지위원회, 여성가족위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-7810~2",
        E_MAIL: "cysook915@naver.com",
        HOMEPAGE: "https://blog.naver.com/cysook915",
        STAFF: "김경순, 한민경",
        SECRETARY: "나종윤, 정진태",
        SECRETARY2: "송성훈, 이은연, 김진웅, 복정훈, 김정윤",
        MONA_CD: "8VJ8533R",
        MEM_TITLE: "◇ 학력\r\n    계명대학교 의료경영대학원 의료정보전공 석사\r\n\r\n◇ 경력\r\n    현) 국민의당 최고위원\r\n    현) 국민의당 사무총장\r\n    현) 한-키르기스스탄 의원친선협회 부회장\r\n    현) 한-우크라이나 의원친선협회 이사\r\n    현) 재단법인 국민미래연구원 이사\r\n    현) 사단법인 국회국제보건의료포럼 이사\r\n    현) 사단법인 소비자권익포럼 고문\r\n    전) 계명대학교 동산병원 간호부원장\r\n    전) 대한간호협회 대구병원간호사회 회장\r\n    전) 대한간호협회 대구광역시간호사회 제1부회장\r\n\r\n◇ 상훈\r\n   - WGH(Women in Global Health) 뛰어난 여성 간호사와 조산사 리더 100인 수상(2020년)\r\n   -『제1회 대한민국 국회 의정대상』 입법활동부문 우수의원상 수상(2021년)",
        ASSEM_ADDR: "의원회관 915호",
    },
    {
        HG_NM: "최인호",
        HJ_NM: "崔仁昊",
        ENG_NM: "CHOI INHO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1966-10-15",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "부산 사하구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "농림축산식품해양수산위원회",
        CMITS: "농림축산식품해양수산위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2195",
        E_MAIL: "332inho@gmail.com",
        HOMEPAGE: null,
        STAFF: "김수철, 이정환",
        SECRETARY: "손우정, 한영준",
        SECRETARY2: "김영균, 유영현, 김소영, 이상백, 이예찬",
        MONA_CD: "LPB30152",
        MEM_TITLE: "더불어민주당 수석대변인 (2020. 8. ~ 2021. 5.)\r\n더불어민주당 부산시당위원장 (2016. 8. ~ 2018. 8.)\r\n더불어민주당 최고위원 (2016. 8. ~ 2017. 2.)\r\n대통령비서실 국내언론비서관 (2006)",
        ASSEM_ADDR: "의원회관 332호",
    },
    {
        HG_NM: "최종윤",
        HJ_NM: "崔鍾允",
        ENG_NM: "CHOI JONGYOON",
        BTH_GBN_NM: "음",
        BTH_DATE: "1966-02-27",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 하남시",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "보건복지위원회",
        CMITS: "보건복지위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6201",
        E_MAIL: "cjyjjw@naver.com",
        HOMEPAGE: "https://blog.naver.com/cjyjjw",
        STAFF: "조경숙, 한웅희",
        SECRETARY: "노영주, 전지훈",
        SECRETARY2: "이혜림, 박정훈, 서명진, 추지수, 이종민",
        MONA_CD: "Z7Y7827F",
        MEM_TITLE: "- 하남시 미사동 출생\r\n- 고려대학교 노어노문학과 졸업\r\n- 現 제21대 국회의원\r\n- 現 국회 보건복지위원회 위원\r\n- 現 국회 예산결산특별위원회 위원\r\n- 現 민주주의4.0 연구원 이사\r\n\r\n- 더불어민주당 사회복지특별위원회 위원장\r\n- 더불어민주당 정책위원회 상임부의장\r\n- 서울특별시 정무수석 비서관\r\n- 단국대학교 겸임교수\r\n- 제19대 대통령선거 문재인후보 정무특보\r\n- 제16,17,19대 국회의원 보좌관\r\n- 제1기 전국대학생대표자협의회 사무국장",
        ASSEM_ADDR: "의원회관 809호",
    },
    {
        HG_NM: "최춘식",
        HJ_NM: "崔春植",
        ENG_NM: "CHOI CHUNSIK",
        BTH_GBN_NM: "양",
        BTH_DATE: "1956-03-14",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "경기 포천시가평군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "행정안전위원회",
        CMITS: "행정안전위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-5390",
        E_MAIL: "cschoi415@naver.com",
        HOMEPAGE: "https://m.blog.naver.com/cschoi415",
        STAFF: "김병수, 박응서",
        SECRETARY: "안태훈, 한광식",
        SECRETARY2: "이정세, 박현규, 하명화, 박찬택, 김다연",
        MONA_CD: "3DK8989T",
        MEM_TITLE: "[학력] \r\n육군3사관학교 졸\r\n대진대 경제학과 졸\r\n한경대 대학원 경영학 석사\r\n\r\n[경력] \r\n현) 제21대 국회의원(국민의힘/경기 포천시.가평군)\r\n현) 국회 행정안전위원회 위원\r\n현) 국민의힘 원내부대표\r\n전) 국민의힘 경기도당 위원장\r\n전) 국민의힘 코로나19 대책 특별위원회 위원 \r\n\r\n경기 포천시주민자치위원연합회 회장\r\n경기도의회 의원(새누리당ㆍ바른정당ㆍ자유한국당)\r\n미래통합당 경기도당 부위원장\r\n\r\n\r\n[상훈]\r\n대한민국글로벌브랜드대상 정치부문(2020) \r\n",
        ASSEM_ADDR: "의원회관 619호",
    },
    {
        HG_NM: "최형두",
        HJ_NM: "崔炯斗",
        ENG_NM: "CHOI HYUNGDU",
        BTH_GBN_NM: "음",
        BTH_DATE: "1962-10-23",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "경남 창원시마산합포구",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "문화체육관광위원회",
        CMITS: "문화체육관광위원회, 예산결산특별위원회, 언론·미디어 제도개선 특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "784-1606",
        E_MAIL: "happyhappo@naver.com",
        HOMEPAGE: "https://blog.naver.com/choihd",
        STAFF: "김기동, 김태호",
        SECRETARY: "권재욱, 정형기",
        SECRETARY2: "김태환, 윤이진, 김봉준, 손예라, 최유림",
        MONA_CD: "A0P4646G",
        MEM_TITLE: "■ 학력\r\n·1981.마산고등학교\r\n·1988.서울대학교 사회학 학사\r\n·2002.하버드대학교 대학원 행정학 석사\r\n\r\n■ 경력 \r\n·2012~2013 국무총리실 공보실장 \r\n·2013~2014 대통령비서실 홍보기획비서관 \r\n·2014~2015 국회대변인 \r\n·2020      미래통합당 원내대변인 \r\n·2020.5    제21대 국회의원 \r\n·2020.7    제21대 국회 전반기 예산결산특별위원회 위원 \r\n·2020.7    제21대 국회 전반기 문화체육관광위원회 위원 \r\n",
        ASSEM_ADDR: "의원회관 426호",
    },
    {
        HG_NM: "최혜영",
        HJ_NM: "崔惠英",
        ENG_NM: "CHOI HYEYOUNG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1979-06-01",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "보건복지위원회",
        CMITS: "보건복지위원회, 국회운영위원회, 언론·미디어 제도개선 특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-7190~2",
        E_MAIL: "choihy647@gmail.com",
        HOMEPAGE: "https://blog.naver.com/chy-647",
        STAFF: "박상현, 이주영",
        SECRETARY: "김지연, 박소리",
        SECRETARY2: "안지현, 신동희, 변성욱, 김진이",
        MONA_CD: "QD25323M",
        MEM_TITLE: "現 21대 국회의원\r\n現 보건복지위원회 위원\r\n現 운영위원회 위원\r\n\r\n現 더불어민주당 원내부대표\r\n現 더불어민주당 사회적참사TF 위원\r\n現 더불어민주당 예산결산위원회 위원 \r\n\r\n前 여성가족위원회 위원\r\n前 민주연구원 부원장\r\n前 더불어민주당 미래주거추진단 위원\r\n前 더불어민주당 민생경제 TF 위원\r\n前 더불어민주당 조직강화특별위원회 위원\r\n前 코로나19국난극복 상황실 위원\r\n前 더불어민주당 중앙선거대책위원회 공동위원장\r\n前 한국장애인식개선교육센터 \r\n　 사회적협동조합 이사장\r\n前 휠체어 장애인 전용 의류모델 및 자문위원\r\n前 강동대학교 사회복지행정과 교수\r\n前 한국장애인식개선교육센터\r\n　‘어울림’ 창단 및 센터장 역임",
        ASSEM_ADDR: "의원회관 647호",
    },
    {
        HG_NM: "추경호",
        HJ_NM: "秋慶鎬",
        ENG_NM: "CHOO KYUNGHO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1960-07-29",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "대구 달성군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "기획재정위원회",
        CMITS: "기획재정위원회, 윤리특별위원회, 국회운영위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-8946",
        E_MAIL: "khchoo@assembly.go.kr",
        HOMEPAGE: "http://blog.naver.com/khchoo1224",
        STAFF: "한동엽, 한승수",
        SECRETARY: "김동규, 유성현",
        SECRETARY2: "신연희, 안희준, 우춘화, 정일상, 이웅희",
        MONA_CD: "G152611B",
        MEM_TITLE:
            "1960년 7월 29일생\r\n\r\n  ■ 학력\r\n   · 대구 계성고\r\n   · 고려대 경영학과\r\n   · 美 오리건대학교 대학원 경제학 석사\r\n   · 행정고시 25회 \r\n\r\n  ■ 경력\r\n\r\n     (현) 국민의힘 원내수석부대표\r\n     (현) 제21대 국회 예산결산특별위원회 간사\r\n     (현) 제21대 국회 기획재정위원회 위원\r\n     (현) 국민의힘 정책위원회 부의장\r\n    \r\n\r\n     (전) 미래통합당 제3정책조정위원장  \r\n     (전) 자유한국당 전략기획부총장\r\n     (전) 여의도연구원 원장\r\n     (전) 국무조정실장(장관급)\r\n     (전) 기획재정부 제1차관\r\n     (전) 금융위원회 부위원장\r\n     (전) 대통령실 경제금융비서관, 비상경제상황실장\r\n\r\n  ■ 수상경력      \r\n\r\n     · 제20대 국회 국회의원 헌정대상(법률소비자연맹) \r\n     · 2020 벤처기업협회 제20대 국회 혁신벤처생태계 발전공헌 최고의 국회의원 \r\n     · 2019 벤처기업협회 공로대상(벤처인이 뽑은 최고의 국회의원)\r\n     · 2019 한국납세자연합회 납세자권익상 입법부문\r\n     · 2019 머니투데이 국정감사 스코어보드대상\r\n     · 2019 컨슈머워치 소비자권익대상 입법부문\r\n     · 2019 법률소비자연맹 국회의원 헌정대상\r\n     · 2019 NGO모니터단 국정감사 국리민복상(우수의원상)\r\n     · 2018 NGO모니터단 국정감사 국리민복상(우수의원상)\r\n     · 2018 자유한국당 국정감사 우수의원상(3연속)\r\n     · 2018 자유기업원 자유경제입법상\r\n     · 2018 법률소비자연맹 국회의원 헌정대상\r\n     · 2017 NGO모니터단 국정감사 우수의원상\r\n     · 2017 국회의장 공로패(국회예산정책처 설립14주년 기념)\r\n     · 2017 제5회 국회의원 아름다운말 선플상\r\n     · 2017 자유한국당 국정감사 우수의원상\r\n     · 2016 새누리당 국정감사 우수의원상\r\n     · 2005 홍조근정훈장\r\n     · 1996 근정포장\r\n  \r\n  \r\n",
        ASSEM_ADDR: "의원회관 328호",
    },
    {
        HG_NM: "태영호",
        HJ_NM: "太永浩",
        ENG_NM: "TAE YONGHO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1962-07-25",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "서울 강남구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "외교통일위원회",
        CMITS: "외교통일위원회, 국회운영위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-4467",
        E_MAIL: "onekorea2025@gmail.com",
        HOMEPAGE: "https://wwwyoutube.com/태영호tv",
        STAFF: "강을석, 원우혁",
        SECRETARY: "김인성, 신대경",
        SECRETARY2: "양우성, 권민진, 이지민, 이동규",
        MONA_CD: "XJC13432",
        MEM_TITLE: "1980-1984 : 평양국제관계대학\r\n1984-1988 : 베이징외국어대학 영문학부\r\n1996-1998 : 덴마크주재 북한대사관 3등 서기관\r\n1998-2000 : 스웨덴주재 북한대사관 2등 서기관\r\n2004-2008 : 영국주재 북한 대사관 참사\r\n2008-2013 : 북한외무성 유럽국 부국장\r\n2013-2016 : 영국주재 북한대사관 공사\r\n2016 : 대한민국 망명\r\n2017-2018 : 국가안보전략원 자문연구위원\r\n2020.5~ 제21대 국회의원",
        ASSEM_ADDR: "의원회관 909호",
    },
    {
        HG_NM: "하영제",
        HJ_NM: "河榮帝",
        ENG_NM: "HA YOUNGJE",
        BTH_GBN_NM: "음",
        BTH_DATE: "1954-02-25",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "경남 사천시남해군하동군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국토교통위원회",
        CMITS: "국토교통위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-4750",
        E_MAIL: "hayoungje635@naver.com",
        HOMEPAGE: "http://blog.naver.com/hayoungje635",
        STAFF: "구재모, 조용원",
        SECRETARY: "김기남, 윤혜원",
        SECRETARY2: "이정남, 박주원, 이윤정, 이창재, 손해진",
        MONA_CD: "FGI27280",
        MEM_TITLE: "[학력]\r\n- 서울대학교 농과대학 졸업\r\n- 서울대학교 행정대학원 졸업 (행정학 석사)\r\n- 미국 시러큐스 대학교 대학원 졸업 (행정학 석사)\r\n- 동국대학교 대학원 행정학과 졸업 (행정학 박사)\r\n\r\n[경력]\r\n- 농림수산식품부 제2차관\r\n- 산림청장\r\n- 농수산물유통공사 사장\r\n- 남해군수(제3기,4기)\r\n- 2012년 국회의원 선거 새누리당 경상남도 공동선거대책본부장\r\n- 2016년 국회의원 선거 새누리당 공약개발본부 정책자문위원\r\n- 2017년 자유한국당 대선캠프 농림수산위원장\r\n- 서울대학교 행정대학원 객원교수\r\n- 경상대학교 행정대학원 강사, 진주전문대학 강사, 남해전문대학 강사\r\n- 거창군수, 진주시 부시장\r\n- 내무부 기획예산담당관, 행정자치부 교부세과장, 민간협력과장   \r\n- 하동군청 수습사무관, 청와대 민정수석비서관실 행정관\r\n- 제23회 행정고등고시 합격",
        ASSEM_ADDR: "의원회관 635호",
    },
    {
        HG_NM: "하태경",
        HJ_NM: "河泰慶",
        ENG_NM: "HA TAEKEUNG",
        BTH_GBN_NM: "양",
        BTH_DATE: "1968-03-29",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "부산 해운대구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국방위원회",
        CMITS: "국방위원회, 정보위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2491",
        E_MAIL: "radiohaha@naver.com",
        HOMEPAGE: "http://www.radiohaha.net",
        STAFF: "강은규, 김태영",
        SECRETARY: "김성중, 윤상호",
        SECRETARY2: "이철훈, 조혜정, 정혜영, 김수예, 조현덕",
        MONA_CD: "I0S53762",
        MEM_TITLE:
            "<학력>\r\n1986년  부산 브니엘고등학교 졸업\r\n1991년  서울대 물리학과 졸업\r\n1996년  부산대 대학원 통역번역전문과정 졸업\r\n1999년  고려대 국제대학원 졸업(석사)\r\n2004년  중국 길림대 대학원 졸업(경제학 박사)\r\n\r\n<경력>\r\n1993~1994  (사)통일맞이 연구원\r\n1996~1997  부산통역번역협회 회장 \t\r\n1998\t        미국 미시건 주립대 객원 연구원\r\n2001~2005  SK텔레콤 경영경제연구소 수석연구원 \r\n2005~2012  열린북한방송 대표\r\n2009~2012  민주평화통일자문회의 자문위원 \r\n2012~2016  제19대 국회의원(새누리당)\r\n2012~2014  새누리당 북한인권 및 탈북자 납북자 위원장\r\n2014          부산시당 대변인\r\n2014.6~2016.5 국회 국토교통위원회 위원\r\n2014.9 새누리당 보수혁신특별위원회 위원\r\n2015.1 제19대 국회 서민주거복지 특별위원회 위원\r\n2016.5~2016.12 제20대 국회의원 (부산 해운대구갑/새누리당)\r\n2016.5 새누리당 부산시당 혁신위원회 혁신위원장\r\n2016.6~ 제20대 국회 전반기 환경노동위원회 간사\r\n2016.6~ 제20대 국회 전반기 예산결산특별위원회 위원\r\n2016.7 제20대 국회 가습기살균제국정조사특별위원회 위원\r\n2016.11 박근혜 정부의 최순실 등 민간인에 의한 국정농단 의혹사건 진상규명을 위한 국정조사특별위원회 위원\r\n2017.1~ 제20대 국회의원 (부산 해운대구갑/바른정당)\r\n2017.2~ 부산시당 위원장\r\n2017.06 제20대 국회 헌법개정특별위원회 간사\r\n2017.06 바른정당 수석 최고위원\r\n2018.02 바른미래당 수석 최고위원\r\n2018.06 바른미래당 부산광역시당 위원장\r\n2018.07 제20대 국회 후반기 국방위원회 간사\r\n2018.09 제20대 국회 국방위원회 병역특례제도 개선 소위원회 위원장\r\n2019.09 조국파면 부산시민연대 공동대표\r\n2020.01 새로운보수당 책임대표\r\n\r\n\r\n<저서 및 수상경력>\r\n민주주의는 국경이 없다』 (2011년, 글통 )\r\n『만화 김정은』 (2011년, 시대정신)   \r\n대한민국 인권상 수상(2011년, 국가인권위원회)",
        ASSEM_ADDR: "의원회관 916호",
    },
    {
        HG_NM: "한기호",
        HJ_NM: "韓起鎬",
        ENG_NM: "HAN KIHO",
        BTH_GBN_NM: "양",
        BTH_DATE: "1952-08-13",
        JOB_RES_NM: "간사",
        POLY_NM: "국민의힘",
        ORIG_NM: "강원 춘천시철원군화천군양구군을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국방위원회",
        CMITS: "국방위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제18대, 제19대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-3860",
        E_MAIL: null,
        HOMEPAGE: "https://blog.naver.com/nombo1",
        STAFF: "김민찬, 조재숙",
        SECRETARY: "김지혜, 최종하",
        SECRETARY2: "여운준, 정찬, 정다와, 이재희",
        MONA_CD: "JQA21112",
        MEM_TITLE: "제 18ㆍ19ㆍ21대 국회의원\r\n\r\n현) 국민의힘  사무총장\r\n현) 국회 국방위원회 위원 및 법안심사소위 위원\r\n현) (사)한국청소년연맹 명예총재\r\n전) 육군 2사단장ㆍ5군단장ㆍ교육사령관",
        ASSEM_ADDR: "의원회관 908호",
    },
    {
        HG_NM: "한무경",
        HJ_NM: "韓茂景",
        ENG_NM: "HAN MOOKYUNG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1958-05-20",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "산업통상자원중소벤처기업위원회",
        CMITS: "산업통상자원중소벤처기업위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-2844",
        E_MAIL: "hanmk2021@naver.com",
        HOMEPAGE: null,
        STAFF: "이철호, 정태준",
        SECRETARY: "김재협, 이명용",
        SECRETARY2: "권현정, 김준형, 권수진, 허정선, 최혜선",
        MONA_CD: "UB114374",
        MEM_TITLE: "~1998년 문헌정보학박사(이화여대)\r\n~1983년 이화여대 대학원 도서관학과졸\r\n~1981년 효성여대 도서관학과졸\r\n~1977년 경북여고졸\r\n\r\n2020.08~ 국민의힘 중소기업위원회 위원장\r\n2020.07~ 국회 산업통상자원중소벤처기업위원회 위원\r\n2020.05~ 21대 국회의원(국민의힘 비례대표)\r\n2018.03~2020.05 대구상공회의소 부회장\r\n2017.06~2019.04 중소기업사랑나눔재단 이사\r\n2016.02~2019.06 한국무역협회 비상임부회장\r\n2016.01~2018.12 제8대 한국여성경제인협회 회장\r\n2014.06~2018.05 중소기업진흥공단 비상임이사\r\n2012.03~2020.05 경산상공회의소 부회장\r\n1998.10~2020.03 효림그룹회장\r\n1983.~2003. 효성여대 외 대학 문헌정보학과 강사\r\n\r\n",
        ASSEM_ADDR: "의원회관 822호",
    },
    {
        HG_NM: "한병도",
        HJ_NM: "韓秉道",
        ENG_NM: "HAN BYUNGDO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1967-12-07",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "전북 익산시을 ",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "행정안전위원회",
        CMITS: "국회운영위원회, 윤리특별위원회, 행정안전위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제17대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-5891",
        E_MAIL: "1bddoit@gmail.com",
        HOMEPAGE: "http://blog.naver.com/hbd7851",
        STAFF: "박재현, 어미정",
        SECRETARY: "기영서, 조현아",
        SECRETARY2: "이성노, 황광덕, 이세라, 권오선, 이주경",
        MONA_CD: "H5476989",
        MEM_TITLE: "[학력]\r\n이리북일초등학교\r\n이리동중학교\r\n원광고등학교\r\n원광대학교 신문방송학과\r\n\r\n[경력]\r\n제21대 국회의원(더불어민주당, 전북 익산시을)\r\n전) 문재인정부 대통령비서실 정무수석비서관\r\n전) 문재인정부 대통령비서실 정무비서관\r\n전) 문재인 대통령 외교(이라크 특임)특별보좌관\r\n전) 제17대 국회의원\r\n전) 제19대 원광대학교 총학생회장",
        ASSEM_ADDR: "의원회관 728호",
    },
    {
        HG_NM: "한정애",
        HJ_NM: "韓貞愛",
        ENG_NM: "HAN JEOUNGAE",
        BTH_GBN_NM: "양",
        BTH_DATE: "1965-01-08",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 강서구병",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "행정안전위원회",
        CMITS: "행정안전위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-3051",
        E_MAIL: "jeoung@gmail.com",
        HOMEPAGE: "http://www.한정애.com",
        STAFF: "김영수, 조선옥",
        SECRETARY: "김영철, 김장용",
        SECRETARY2: "강희정, 김지은, 김가은",
        MONA_CD: "XPP2564T",
        MEM_TITLE:
            "■ 학력\r\n해운대여자고등학교 졸업(1985)\r\n부산대학교 공과대학 환경공학과 학사(1989)\r\n부산대학교 환경대학원 석사 수료(1992)\r\n영국 노팅엄대학교 산업공학 박사(2003)\r\n\r\n■ 경력\r\n현) 제19대 환경부장관\r\n현) 더불어민주당 제19, 20대, 21대 국회의원(서울 강서병)\r\n현) 국회 행정안전위원회 위원\r\n현) 국회기후변화포럼 공동대표\r\n현) 국회동물복지포럼 공동대표\r\n\r\n전) 한국산업안전보건공단 노조위원장 \r\n전) 한국노동조합총연맹 공공연맹 부위원장\r\n전) 한국노동조합총연맹 대외협력본부장\r\n전) 새정치민주연합 정책위원회 부의장\r\n전) 새정치민주연합 당대변인\r\n전) 더불어민주당 서울시당 여성위원장\r\n전) 더불어민주당 제4기 원내부대표\r\n전) 더불어민주당 성과연봉제 진상조사단 단장\r\n전) 더불어민주당 정책위원회 제4정조위원장\r\n전) 더불어민주당 개혁입법추진단\r\n전) 더불어민주당 홍보위원회 위원장\r\n전) 제19대 문재인 대통령후보 중앙선거대책본부 홍보본부 공동본부장\r\n전) 국정기획자문위원회 사회분과 위원\r\n전) 더불어민주당 정책위원회 제5정조위원장\r\n전) 더불어민주당 민생평화상황실 소득주도성장팀 팀장\r\n전) 더불어민주당 일본경제침략대책특별위원회 부위원장\r\n전) 더불어민주당 정책위원회 수석부의장\r\n전) 제20대 국회 환경노동위원회 간사\r\n전) 더불어민주당 전국대의원대회준비위원회 부위원장\r\n전) 더불어민주당 일하는 국회 추진단 단장\r\n전) 제21대 국회 보건복지위원회 위원장\r\n전) 더불어민주당 정책위원회 의장\r\n전) 더불어민주당 국난극복 K-뉴딜위원회 총괄본부장",
        ASSEM_ADDR: "의원회관 639호",
    },
    {
        HG_NM: "한준호",
        HJ_NM: "韓俊鎬",
        ENG_NM: "HAN JUNHO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1974-02-20",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 고양시을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국토교통위원회",
        CMITS: "국회운영위원회, 국토교통위원회, 언론·미디어 제도개선 특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-9160",
        E_MAIL: "juno.news2020@gmail.com",
        HOMEPAGE: "https://www.facebook.com/hanjuno.news",
        STAFF: "박진, 임주빈",
        SECRETARY: "서호언, 최태순",
        SECRETARY2: "전혜린, 최규진, 선중욱, 송효리, 윤민섭, 박채희",
        MONA_CD: "BCQ55105",
        MEM_TITLE: "□ 학력\r\n· 연세대학교 졸업\r\n· 가톨릭대학교 대학원 석사과정 졸업\r\n\r\n□ 경력\r\n(현) 과학기술정보방송통신위원회 위원\r\n(현) 국회 운영위원회 위원\r\n(현) 더불어민주당 원내대변인\r\n(현) UN 해비타트 한국위원회 전문위원\r\n(전) 예산결산특별위원회 위원\r\n(전) 문재인정부 대통령비서실 국민소통수석실 행정관\r\n(전) MBC문화방송 아나운서\r\n(전) 코스닥시장(현 한국거래소) 대리\r\n(전) 전국언론노동조합 문화방송본부 교육문화국장\r\n\r\n\r\n□ 저서 \r\n· 아빠가 읽는 임신육아책, 2010년 출간 (임신출산분야)\r\n· 가자 싱가포르, 2011년 출간 (여행에세이분야)\r\n· 말할 수 있는 비밀, 2018년 출간 (인문학분야)\r\n",
        ASSEM_ADDR: "의원회관 921호",
    },
    {
        HG_NM: "허영",
        HJ_NM: "許榮",
        ENG_NM: "HUH YOUNG",
        BTH_GBN_NM: "음",
        BTH_DATE: "1970-03-29",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "강원 춘천시철원군화천군양구군갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국토교통위원회",
        CMITS: "국토교통위원회, 예산결산특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-1840~2",
        E_MAIL: "successhuh@gmail.com",
        HOMEPAGE: "http://blog.naver.com/ramman",
        STAFF: "김명진, 김산",
        SECRETARY: "고건민, 윤철우",
        SECRETARY2: "윤정규, 탁기열, 김미나, 박용훈, 송서영",
        MONA_CD: "FU53642G",
        MEM_TITLE: "제21대 국회의원\r\n제21대 국회 국토교통위원회 위원\r\n더불어민주당 강원도당 도당위원장\r\n제21대 국회 예산결산특별위원회 위원 \r\n전)더불어민주당 원내부대표\r\n전)제21대 국회 전반기 운영위원회 위원\r\n전)더불어민주당 당대변인",
        ASSEM_ADDR: "의원회관 835호",
    },
    {
        HG_NM: "허은아",
        HJ_NM: "許垠娥",
        ENG_NM: "HER EUNA",
        BTH_GBN_NM: "음",
        BTH_DATE: "1972-05-26",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "비례대표",
        ELECT_GBN_NM: "비례대표",
        CMIT_NM: "과학기술정보방송통신위원회",
        CMITS: "과학기술정보방송통신위원회, 언론·미디어 제도개선 특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-2890",
        E_MAIL: null,
        HOMEPAGE: null,
        STAFF: "원세일, 홍성범",
        SECRETARY: "이용일, 한승룡",
        SECRETARY2: "박영준, 서영지, 박준영, 정우림, 강보람",
        MONA_CD: "66W6739S",
        MEM_TITLE: "2021.08 ~  국민의힘 수석대변인\r\n2021.05 ~  국민의힘 원내부대표\r\n2021.03 ~ 2021.04  국민의힘 선거대책위원회 뉴미디어본부장\r\n2020.11 ~  국민의힘 약자와의 동행위원회 현장동행분과 간사\r\n2020.09 ~  국민의힘 포털공정대책 특별위원회 위원\r\n2020.09 ~  국민의힘 소상공인살리기 특별위원회 위원\r\n2020.09 ~  제21대 국회의원 (비례대표/국민의힘)\r\n2020.07 ~  제21대 국회 전반기 과학기술정보방송통신위원회 위원\r\n2020.05 ~  2020.09제21대 국회의원 (비례대표/미래통합당)\r\n경일대학교 항공서비스학과 교수\r\n주식회사 예라고 대표이사",
        ASSEM_ADDR: "의원회관 327호",
    },
    {
        HG_NM: "허종식",
        HJ_NM: "許琮植",
        ENG_NM: "HEO JONGSIK",
        BTH_GBN_NM: "음",
        BTH_DATE: "1962-02-08",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "인천 동구미추홀구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "보건복지위원회",
        CMITS: "보건복지위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-8870",
        E_MAIL: "jongsyy@naver.com",
        HOMEPAGE: "https://blog.naver.com/jongsyy",
        STAFF: "김창문, 이수현",
        SECRETARY: "김선욱, 정락재",
        SECRETARY2: "이찬석, 손정애, 장순이, 이혜민, 오승민",
        MONA_CD: "VCP96419",
        MEM_TITLE: "2020.5.30              제21대 국회의원 \r\n2018.10 ~ 2019.12  인천광역시 균형발전정무부시장 \r\n2018.07 ~ 2018.10  인천광역시 정무경제부시장 \r\n2015.12                더불어민주당 인천광역시당 남구갑 지역위원장 \r\n                          인천광역시 대변인 \r\n                          인하대학교 총동창회 부회장 \r\n                          한겨레신문 선임기자 \r\n\r\n",
        ASSEM_ADDR: "의원회관 413호",
    },
    {
        HG_NM: "홍기원",
        HJ_NM: "洪起元",
        ENG_NM: "HONG KEEWON",
        BTH_GBN_NM: "양",
        BTH_DATE: "1964-12-13",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 평택시갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국토교통위원회",
        CMITS: "국토교통위원회, 정보위원회, 국회운영위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2577",
        E_MAIL: "flyhong21@naver.com",
        HOMEPAGE: "https://blog.naver.com/flyhong21",
        STAFF: "김정선, 최재영",
        SECRETARY: "주남석, 허성일",
        SECRETARY2: "김단비, 안지영, 최선규, 우희주, 박채진",
        MONA_CD: "5MD4184K",
        MEM_TITLE: "고려대학교 경제학 학사\r\n워싱턴대학교 경제학 석사\r\n제35회 행정고시(재경직)\r\n공정거래위원회 사무관\r\n재정경제원 사무관\r\n외교부 FTA무역규범과장\r\n주중국대사관 참사관\r\n인천광역시 국제관계대사\r\n터키 이스탄불 총영사\r\n청와대 국가안보실 정책자문위원 ",
        ASSEM_ADDR: "의원회관 525호",
    },
    {
        HG_NM: "홍문표",
        HJ_NM: "洪文杓",
        ENG_NM: "HONG MOONPYO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1947-10-05",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "충남 홍성군예산군",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "농림축산식품해양수산위원회",
        CMITS: "농림축산식품해양수산위원회, 감사원장(최재해) 임명동의에 관한 인사청문특별위원회",
        REELE_GBN_NM: "4선",
        UNITS: "제17대, 제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-9587",
        E_MAIL: "mphonglove@hanmail.net",
        HOMEPAGE: null,
        STAFF: "구성완, 최재구",
        SECRETARY: "신충식",
        SECRETARY2: "안진호, 손병관, 김슬기, 구민희, 김현우",
        MONA_CD: "GD131760",
        MEM_TITLE: "[학력]\r\n\r\n건국대 농화학과(학사)\r\n한양대 행정대학원 사회사업정책학과(석사)\r\n\r\n\r\n\r\n\r\n[약력]\r\n\r\n(현) 국회 농림축산식품해양수산위원회 위원\r\n(현) 예산홍성 4선 국회의원\r\n(현) 국회 불가리아 친선협회 회장  \r\n\r\n(전) 국회 교육위원회 위원장\r\n(전) 자유한국당 사무총장\r\n(전) 국회 예산결산특별위원회 위원장\r\n(전) 자유한국당 정치대학원장 \r\n(전) 새누리당 농어촌대책특위 위원장\r\n(전) 한나라당 최고위원\r\n(전) 자유한국당 공천관리위원장 \r\n(전) 한국농어촌공사 사장\r\n(전) 여의도연구원 이사 \r\n(전) 새누리당 20대 공천심사관리위원 \r\n(전) 국회 유류피해대책특별위원회 위원장\r\n(전) 새누리당 충남도당 위원장\r\n(전) 한나라당 농어촌대책특위 위원장\r\n(전) 한나라당 최고위원\r\n(전) 아시아하키연맹 부회장\r\n(전) 대한하키협회 회장\r\n(전) 국제관개배수위원회 한국대표\r\n(전) 한국농어촌공사 사장\r\n(전) 제17대대통령인수위원회 경제분과 인수위원\r\n(전) 전국생활체조연합회 회장\r\n(전) 한나라당 조직사무부총장 \r\n(전) 국회의장 정무수석비서관 ",
        ASSEM_ADDR: "의원회관 336호",
    },
    {
        HG_NM: "홍석준",
        HJ_NM: "洪碩晙",
        ENG_NM: "HONG SUKJOON",
        BTH_GBN_NM: "음",
        BTH_DATE: "1966-05-17",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "대구 달서구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "과학기술정보방송통신위원회",
        CMITS: "과학기술정보방송통신위원회, 감사원장(최재해) 임명동의에 관한 인사청문특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2601",
        E_MAIL: "0634assembly@naver.com",
        HOMEPAGE: null,
        STAFF: "백병환, 장진영",
        SECRETARY: "박병순, 조조한",
        SECRETARY2: "김재도, 배지환, 조성우, 서성희, 박천석",
        MONA_CD: "EMC8812P",
        MEM_TITLE: "현)\r\n제21대 국회의원(대구 달서구갑)\r\n중산층 서민경제 위원장\r\n환경노동위원회 위원\r\n예산결산특별위원회 위원\r\n\r\n전)\r\n대구광역시 경제국장\r\n대구시 창조산업국장\r\n대구시 미래산업본부장\r\n계명대학교 특임교수\r\n\r\n학력)\r\n서울대 행정대학원 석사\r\n계명대학교 경영학 학사\r\n달성고등학교\r\n평리중학교\r\n서도초등학교\r\n\r\n",
        ASSEM_ADDR: "의원회관 634호",
    },
    {
        HG_NM: "홍성국",
        HJ_NM: "洪性國",
        ENG_NM: "HONG SUNGKOOK",
        BTH_GBN_NM: "양",
        BTH_DATE: "1963-02-24",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "세종특별자치시갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "정무위원회",
        CMITS: "정무위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-2820~2",
        E_MAIL: "sejonghsk@gmail.com",
        HOMEPAGE: "https://blog.naver.com/hong2240",
        STAFF: "임현종, 홍순식",
        SECRETARY: "곽진석, 김춘식",
        SECRETARY2: "강소임, 이창규, 김현수, 신지수, 최민석",
        MONA_CD: "2N793392",
        MEM_TITLE: "【 학 력 】\r\n- 동국대학교 행정대학원 행정학 석사\r\n- 서강대학교 정치외교학 학사\r\n- 고려대학교사범대학부속고등학교\r\n\r\n【 경 력 】\r\n- 더불어민주당 국가경제자문회의 위원(현)\r\n- 더불어민주당 경제대변인(전)\r\n- 더불어민주당 국회세종의사당추진특별위원회 간사(전)\r\n- 더불어민주당 원내부대표(전)\r\n- 더불어민주당 정책위원회 부의장(전)\r\n- 미래에셋대우 대표이사 사장(전)",
        ASSEM_ADDR: "의원회관 419호",
    },
    {
        HG_NM: "홍영표",
        HJ_NM: "洪永杓",
        ENG_NM: "HONG YOUNGPYO",
        BTH_GBN_NM: "양",
        BTH_DATE: "1957-04-30",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "인천 부평구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "국방위원회",
        CMITS: "국방위원회",
        REELE_GBN_NM: "4선",
        UNITS: "제18대, 제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-3143",
        E_MAIL: "youngvote@hanmail.net",
        HOMEPAGE: null,
        STAFF: "김기홍, 오형범",
        SECRETARY: "신성아",
        SECRETARY2: "김유경, 오승연, 변윤섭, 이지원, 이미주",
        MONA_CD: "KR14136C",
        MEM_TITLE: "- 대우자동차 직업훈련원 수료, 차체부 생산직입사 (1982)\r\n- 대우자동차 영국판매법인 주재원 (1995-2001)\r\n- 참여연대 정책위원 (2001)\r\n- 국무총리실 시민사회비서관 (2004)\r\n- 저출산고령화대책연석회의 지원단 부단장 (2006)\r\n- 우석대 유통통상학부 초빙교수 (2008)\r\n- 국회의원(부평을), 민주당 원내부대표, 시민주권모임   운영위원 (2009)\r\n- 민주당 원내대변인 (2011)\r\n- 전국노동위원장, 국회 환경노동위원회 야당간사 (2011-2012)\r\n- 국회 예결특위 위원 (2012)\r\n- 민주통합당대표 비서실장 (2012)\r\n- 민주통합당 정책위 수석부의장 (2012)\r\n- 국회 산업통상자원위원회 간사 (2014)\r\n- 국회 산업통상자원위원회 위원장 직무대리 (2015)\r\n- 국회 환경노동위원장 (2016-2018)\r\n- 더불어민주당 원내대표 (2018-2019)\r\n- 국회 운영위원회 위원장 (2018-2019)\r\n- 국회 정치개혁특별위원회 위원장 (2019)\r\n\r\n* 수상경력: 민주화운동 유공자 인정 황조근정훈장    \r\n* 트위터: @YoungpyoHong",
        ASSEM_ADDR: "의원회관 1004호",
    },
    {
        HG_NM: "홍익표",
        HJ_NM: "洪翼杓",
        ENG_NM: "HONG IHKPYO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1967-11-20",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 중구성동구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "과학기술정보방송통신위원회",
        CMITS: "과학기술정보방송통신위원회, 언론·미디어 제도개선 특별위원회",
        REELE_GBN_NM: "3선",
        UNITS: "제19대, 제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-6887",
        E_MAIL: "peace@peacehong.net",
        HOMEPAGE: "http://www.peacehong.net",
        STAFF: "양혜진, 허정무",
        SECRETARY: "신지희, 원인재",
        SECRETARY2: "전해정, 최우경, 김옥미, 이원종",
        MONA_CD: "FRN1867O",
        MEM_TITLE: "한양대학교 정치외교학과 졸업\r\n한양대학교 대학원 정치학 박사\r\n북한대학원대학교 겸임교수(前)\r\n통일부 정책보좌관 (前)\r\n대외경제정책연구원 전문연구원 (前)\r\n일본 ERINA 객원연구원 (前)\r\n육군 정훈장교",
        ASSEM_ADDR: "의원회관 839호",
    },
    {
        HG_NM: "홍정민",
        HJ_NM: "洪貞敏",
        ENG_NM: "HONG JUNGMIN",
        BTH_GBN_NM: "음",
        BTH_DATE: "1978-11-24",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "경기 고양시병",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "산업통상자원중소벤처기업위원회",
        CMITS: "산업통상자원중소벤처기업위원회, 예산결산특별위원회, 여성가족위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-8950",
        E_MAIL: null,
        HOMEPAGE: null,
        STAFF: "감동은, 이용남",
        SECRETARY: "원동은, 주영민",
        SECRETARY2: "오미숙, 한상득, 김보라, 윤혜인, 변민환",
        MONA_CD: "XA42275R",
        MEM_TITLE: "| 학력 | \r\n- 서울대학교 경제학과 졸업(2001년)\r\n- 서울대학교 경제학 석사(2006년)\r\n- 서울대학교 경제학 박사(2011년)\r\n\r\n| 경력 | \r\n- 서울대학교 기업경쟁력연구센터 연구원\r\n- 제50회 사법시험 합격, 제42기 사법연수원 수료\r\n- 삼성경제연구소 수석연구원\r\n- 한국법경제학회 기획이사\r\n- 로스토리 주식회사 대표이사\r\n- 한국인공지능법학회 이사\r\n- 한국핀테크연합회 자문변호사\r\n- 서울특별시 마을변호사\r\n- 더불어민주당 전 원내대변인",
        ASSEM_ADDR: "의원회관 326호",
    },
    {
        HG_NM: "홍준표",
        HJ_NM: "洪準杓",
        ENG_NM: "HONG JOONPYO",
        BTH_GBN_NM: "음",
        BTH_DATE: "1954-12-05",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "대구 수성구을",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "산업통상자원중소벤처기업위원회",
        CMITS: "산업통상자원중소벤처기업위원회",
        REELE_GBN_NM: "5선",
        UNITS: "제15대, 제16대, 제17대, 제18대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-7610, 02-6788-7481  ",
        E_MAIL: "jphong803@naver.com",
        HOMEPAGE: "https://blog.naver.com/jphong803",
        STAFF: "이종헌, 임형길",
        SECRETARY: "김윤환, 손성호",
        SECRETARY2: "김은영, 고천석, 신영진, 권희연, 김태형",
        MONA_CD: "NAL4555X",
        MEM_TITLE: "·5선(15·16·17·18·21대)\r\n·대구 영남중·고등학교 졸업, 고려대학교 법과대학 졸업\r\n·(전)서울지방검찰청 검사, \r\n·(전)제19대 대통령선거 자유한국당 후보 \r\n·(전)자유한국당 대표\r\n·(현)국방위원회 위원\r\n·(현)예산결산위원회 위원",
        ASSEM_ADDR: "의원회관 549호",
    },
    {
        HG_NM: "황보승희",
        HJ_NM: "皇甫承希",
        ENG_NM: "HWANGBO SEUNGHEE",
        BTH_GBN_NM: "음",
        BTH_DATE: "1976-08-05",
        JOB_RES_NM: "위원",
        POLY_NM: "국민의힘",
        ORIG_NM: "부산 중구영도구",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "과학기술정보방송통신위원회",
        CMITS: "과학기술정보방송통신위원회, 언론·미디어 제도개선 특별위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "여",
        TEL_NO: "02-784-6931 / 051-412-0415",
        E_MAIL: "0415hbsh@naver.com",
        HOMEPAGE: null,
        STAFF: "서덕교, 이준우",
        SECRETARY: "고범욱, 홍영민",
        SECRETARY2: "정인호, 박창주, 홍주형, 박우진, 고희선",
        MONA_CD: "J9S37905",
        MEM_TITLE: "이화여자대학교 영어영문학\r\n영도여자고등학교\r\n\r\n(현) 제21대 국회의원\r\n(현) 국회 예산결산특별위원회 위원\r\n(현) 국회 과학기술정보방송통신위원회 위원\r\n(현) 국민의힘 조직강화특별위원회 위원\r\n(현) 국민의힘 4.7 재보궐선거 경선준비위원회 위원\r\n(현) 국민의힘 코로나19대책특별위원회 위원\r\n(현) 국민의힘 청년당창당추진위원회 위원\r\n(현) 국민의힘 부산광역시당 수석부위원장\r\n(현) 국민의힘 부산 시민정치토론센터장\r\n(전) 새누리당 부산시당 대변인\r\n(전) 부산광역시의회 경제문화위원회 위원장\r\n(전) 부산광역시의회 6대,7대 의원(재선)\r\n(전) 영도구의회 4대,5대,6대 의원(3선)\r\n",
        ASSEM_ADDR: "의원회관 322호",
    },
    {
        HG_NM: "황운하",
        HJ_NM: "黃雲夏",
        ENG_NM: "HWANG UNHA",
        BTH_GBN_NM: "음",
        BTH_DATE: "1962-09-10",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "대전 중구",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "산업통상자원중소벤처기업위원회",
        CMITS: "산업통상자원중소벤처기업위원회",
        REELE_GBN_NM: "초선",
        UNITS: "제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-1935",
        E_MAIL: "unhah0301@gmail.com",
        HOMEPAGE: null,
        STAFF: "김진태, 방인호",
        SECRETARY: "심대철, 장진섭",
        SECRETARY2: "최형준, 김윤정, 심준석, 정윤주, 이나현",
        MONA_CD: "0YT3774N",
        MEM_TITLE: "<학력>\r\n\r\n경찰대학교 학사\r\n고려대학교대학원 행정학 석사\r\n성균관대학교대학원 법학 박사\r\n\r\n<경력>\r\n\r\n대전 서부경찰서장\r\n대전 중부경찰서장\r\n서울 송파경찰서장\r\n경찰청 수사기획관(경무관)\r\n경찰대학 교수부장\r\n경찰청 수사구조개혁단장\r\n울산지방경찰청장(치안감)\r\n대전지방경찰청장(치안감)\r\n경찰인재개발원장(치안감)\r\n제21대 국회산업통상자원중소벤처기업위원회 위원\r\n제21대 국회예산결산특별위원회 위원\r\n단재신채호선생 기업사업회 공동대표",
        ASSEM_ADDR: "의원회관 416호",
    },
    {
        HG_NM: "황희",
        HJ_NM: "黃熙",
        ENG_NM: "HWANG HEE",
        BTH_GBN_NM: "음",
        BTH_DATE: "1967-07-28",
        JOB_RES_NM: "위원",
        POLY_NM: "더불어민주당",
        ORIG_NM: "서울 양천구갑",
        ELECT_GBN_NM: "지역구",
        CMIT_NM: "과학기술정보방송통신위원회",
        CMITS: "과학기술정보방송통신위원회",
        REELE_GBN_NM: "재선",
        UNITS: "제20대, 제21대",
        SEX_GBN_NM: "남",
        TEL_NO: "02-784-8551",
        E_MAIL: "hwanghee6728@gmail.com",
        HOMEPAGE: "http://blog.naver.com/hwanghee67",
        STAFF: "김진하, 이용협",
        SECRETARY: "나종호, 이정수",
        SECRETARY2: "이종서, 장유리, 강조원, 김송이, 김재호",
        MONA_CD: "0VU8517U",
        MEM_TITLE:
            "2020.07~ 국회 스마트라이프도시포럼 대표의원\r\n2020.06~ 국회 국방위원회 간사\r\n2020.05~ 제21대 국회의원(서울 양천구갑 / 더불어민주당)         \r\n2019.02~2020.08 더불어민주당 도시재생특별위원회 부위원장\r\n2018.11~2020.08 더불어민주당 지방혁신균형발전추진단 위원\r\n2018.09~2020.08 더불어민주당 교육연수원 원장\r\n2018.07~2020.05 제20대 국회 후반기 운영위원회 위원\r\n2018.07~2020.05 제20대 국회 후반기 국토교통위원회 위원\r\n2018.05~2020.05 더불어민주당 원내부대표\r\n2018.04~ 대통령직속 4차산업혁명위원회 스마트시티특별위원회 위원\r\n2018.02~2020.08 더불어민주당 혁신성장추진위원회 위원\r\n2017.09~2018.08 더불어민주당 부동산안정 및 서민주거복지 TF 위원\r\n2017.07~ 사람사는세상 노무현 재단 상임운영위원\r\n2016.06~2020.05 미래도시 창생과 재생을 위한 국회의원 연구모임 대표의원\r\n2016.05~2020.05 제20대 국회의원(서울 양천구갑 / 더불어민주당)\r\n\r\n2017.12~2018.07 국회 4차산업혁명특별위원회 위원 \r\n2017.05 문재인 대통령 미국 특사단\r\n2017.05~2017.12 더불어민주당 홍보위원장\r\n2017.04~2017.05 제19대 대통령선거 더불어민주당 선거대책위원회 총무부본부장\r\n2016.12~2018.08 더불어민주당 주거복지특별위원회 위원장\r\n2016.06~2018.06 제20대 국회 전반기 국토교통위원회 위원\r\n2015.11~2016.05 더불어민주당 정책위원회 부의장\r\n2011.02~2017.07 노무현재단 기획위원\r\n2003~2007 노무현 대통령비서실 청와대 행정관\r\n1997~2003 김대중 총재 비서실 비서",
        ASSEM_ADDR: "의원회관 838호",
    },
];
const renderItem = ({item}) => {
    const background_color = item.POLY_NM === "국민의힘" ? "rgba(230, 30, 43,1)" : "rgba(0, 160, 226,1)";
    return <Member item={item}></Member>;
};
const Members = () => {
    const x2js = new X2JS();
    const rss = x2js.xml2js(data2);
    // setData2(rss.response.body.items);
    // console.log("rrr", rss.response.body.items.item[0]);
    let good = data;
    good.forEach(function (item) {
        var dis = Hangul.disassemble(item.HG_NM, true);
        var cho = dis.reduce(function (prev, elem) {
            elem = elem[0] ? elem[0] : elem;
            return prev + elem;
        }, "");
        item.DISASSEMBLED = cho;
    });

    var search = "강훈식";
    var search1 = Hangul.disassemble(search).join(""); // ㄺ=>ㄹㄱ

    good.filter(function (item) {
        return item.HG_NM.includes(search) || item.DISASSEMBLED.includes(search1);
    })
        // 검색결과 ul 아래에 li 로 추가
        .forEach(function (item) {
            console.log("item", item);
        });

    good.map((item, index) => {
        rss.response.body.items.item.map((item2, index) => {
            if (item.HG_NM === item2.empNm && item.HJ_NM === item2.hjNm) {
                good[index].IMAGE = item2.jpgLink;
            }
        });
    });
    return (
        <FlatList
            ListHeaderComponent={
                <View style={{backgroundColor: "white"}}>
                    <Text style={{fontSize: 20}}>검색</Text>
                </View>
            }
            keyExtractor={item => String(item.MONA_CD)}
            data={good}
            renderItem={renderItem}></FlatList>
    );
};

export default Members;
