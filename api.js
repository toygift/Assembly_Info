const members = () => fetch(`https://open.assembly.go.kr/portal/openapi/nwvrqwxyaytdsfvhu?KEY=65e670959c9d4b9cbc7a7d88aabef02e&Type=json&pIndex=1&pSize=300&AGE=21&BILL_ID=PRC_X2E1L0L9C0B9Y1Q7D3I1E1Z2E5Q1I3`).then(res => res.json());

// const upcoming = () => fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`).then(res => res.json());

// const nowPlaying = () => fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`).then(res => res.json());

export const assemblyApi = {members};
