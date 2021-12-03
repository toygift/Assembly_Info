// const members = () => fetch(`https://open.assembly.go.kr/portal/openapi/nwvrqwxyaytdsfvhu?KEY=65e670959c9d4b9cbc7a7d88aabef02e&Type=json&pIndex=1&pSize=300&AGE=21&BILL_ID=PRC_X2E1L0L9C0B9Y1Q7D3I1E1Z2E5Q1I3`).then(res => res.json());
// const members_image = () => fetch(`http://apis.data.go.kr/9710000/NationalAssemblyInfoService/getMemberCurrStateList?ServiceKey=GyPOyh7qviKuUDI7qAupKq9%2BdVJEi0VrAXx5NLNrNAG5Yjg19iCCADRdPUsjWaaJhUDqfmAyidOZ1u0zGV6gbw%3D%3D&numOfRows=1000&pageNo=1`).then(res => res.text().then(text => text));
// const member_propose = ({proposer}) => {
//     const [_, query] = proposer;
//     return fetch(`https://open.assembly.go.kr/portal/openapi/nzmimeepazxkubdpn?KEY=65e670959c9d4b9cbc7a7d88aabef02e&Type=json&pIndex=1&pSize=1000&AGE=21&PROPOSER=${query}`).then(res => res.json());
// };

// const upcoming = () => fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`).then(res => res.json());

// const nowPlaying = () => fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`).then(res => res.json());

export const assemblyApi = {
    members: () => fetch(`https://open.assembly.go.kr/portal/openapi/nwvrqwxyaytdsfvhu?KEY=65e670959c9d4b9cbc7a7d88aabef02e&Type=json&pIndex=1&pSize=300&AGE=21&BILL_ID=PRC_X2E1L0L9C0B9Y1Q7D3I1E1Z2E5Q1I3`).then(res => res.json()),
    members_image: () => fetch(`http://apis.data.go.kr/9710000/NationalAssemblyInfoService/getMemberCurrStateList?ServiceKey=GyPOyh7qviKuUDI7qAupKq9%2BdVJEi0VrAXx5NLNrNAG5Yjg19iCCADRdPUsjWaaJhUDqfmAyidOZ1u0zGV6gbw%3D%3D&numOfRows=1000&pageNo=1`).then(res => res.text().then(text => text)),
    member_propose: ({queryKey}) => {
        const [_key, member_data] = queryKey;
        return fetch(`https://open.assembly.go.kr/portal/openapi/nzmimeepazxkubdpn?KEY=65e670959c9d4b9cbc7a7d88aabef02e&Type=json&pIndex=1&pSize=1000&AGE=21&PROPOSER=${member_data.HG_NM}`).then(res => res.json());
    },
    member_vote: ({queryKey}) => {
        const [_key, bill_id] = queryKey;
        return fetch(`https://open.assembly.go.kr/portal/openapi/nojepdqqaweusdfbi?KEY=65e670959c9d4b9cbc7a7d88aabef02e&Type=json&pIndex=1&pSize=1000&AGE=21&BILL_ID=${bill_id}`).then(res => res.json());
    },
};
