// 특정 데이터 타입들
export interface User {
    pk?: number;
    username: string;
    // Optional fields
    name?: string;
    department?: string;
}