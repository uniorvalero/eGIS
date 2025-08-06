export interface IOTPToken {
    id: number;
    loginId: number;
    code: number;
    expiry: Date;
    isUsed: boolean;
}