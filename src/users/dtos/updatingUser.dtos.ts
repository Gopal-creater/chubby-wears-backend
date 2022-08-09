import {validate,IsEmail,IsFQDN,IsDate,IsNotEmpty,Matches} from 'class-validator';

export class UpdateUserDto {
    @IsNotEmpty()
    name:string;

    phoneNumber:number;

    @IsNotEmpty()
    password:string;

    country:string;
}