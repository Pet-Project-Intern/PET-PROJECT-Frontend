export interface User{
    name:string;
    emailId:string;
    password:string;    
    userCategory: string;
    department: string;
    registerDate: string;
}

export interface LoginUser{
    emailId:string;
    password:string;
}