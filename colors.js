export const 더불어민주당 = "#357fc4";
export const 국민의힘 = "#dc5356";
export const 정의당 = "#e8d825";
export const 국민의당 = "#ea5504";
export const 열린민주당 = "#04408f";
export const 기본소득당 = "#fe8871";
export const 시대전환 = "#692498";
export const 무소속 = "#999999";
export const makeFontColor = POLY_NM => {
    switch (POLY_NM) {
        case "더불어민주당":
            return 더불어민주당;
        case "국민의힘":
            return 국민의힘;
        case "정의당":
            return 정의당;
        case "국민의당":
            return 국민의당;
        case "열린민주당":
            return 열린민주당;
        case "기본소득당":
            return 기본소득당;
        case "시대전환":
            return 시대전환;
        case "무소속":
            return 무소속;
        default:
            break;
    }
};
