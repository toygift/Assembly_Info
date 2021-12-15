const BASE_URL = "https://open.assembly.go.kr/portal/openapi/";
const API_KEY = "KEY=65e670959c9d4b9cbc7a7d88aabef02e&Type=JSON";

export const assemblyApi = {
    members: () => fetch(`${BASE_URL}nwvrqwxyaytdsfvhu?${API_KEY}&pIndex=1&pSize=1000&AGE=21`).then(res => res.json()),
    members_image: () => fetch(`http://apis.data.go.kr/9710000/NationalAssemblyInfoService/getMemberCurrStateList?ServiceKey=GyPOyh7qviKuUDI7qAupKq9%2BdVJEi0VrAXx5NLNrNAG5Yjg19iCCADRdPUsjWaaJhUDqfmAyidOZ1u0zGV6gbw%3D%3D&numOfRows=1000&pageNo=1`).then(res => res.text().then(text => text)),
    member_propose: ({queryKey}) => {
        const [_key, member_data] = queryKey;
        return fetch(`${BASE_URL}nzmimeepazxkubdpn?${API_KEY}&pIndex=1&pSize=1000&AGE=21&PROPOSER=${member_data.HG_NM}`).then(res => res.json());
    },
    member_vote: ({queryKey}) => {
        const [_key, bill_id] = queryKey;
        return fetch(`${BASE_URL}nojepdqqaweusdfbi?${API_KEY}&pIndex=1&pSize=1000&AGE=21&BILL_ID=${bill_id}`).then(res => res.json());
    },
    legislative_bill: ({queryKey}) => {
        const [_key, bill_id, page] = queryKey;
        return fetch(`${BASE_URL}nwbpacrgavhjryiph?${API_KEY}&pIndex=1&pSize=1000&AGE=21`).then(res => res.json());
    },
    budget: () => {
        return fetch(`${BASE_URL}nzgjnvnraowulzqwl?${API_KEY}&pIndex=1&pSize=1000&AGE=21`).then(res => res.json());
    },
    etc: () => {
        return fetch(`${BASE_URL}nbslryaradshbpbpm?${API_KEY}&pIndex=1&pSize=1000&AGE=21`).then(res => res.json());
    },
    balance_sheet: () => {
        return fetch(`${BASE_URL}nkalemivaqmoibxro?${API_KEY}&pIndex=1&pSize=1000&AGE=21`).then(res => res.json());
    },
};
