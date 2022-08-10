import { ApiProperty } from '@nestjs/swagger';
import {validate,IsEmail,IsFQDN,IsDate,IsNotEmpty,Matches, IsString, IsNumber} from 'class-validator';

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name:string;

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email:string;

    @ApiProperty()
    @IsNumber()
    phoneNumber?:number;

    @ApiProperty()
    @IsNotEmpty()
    password:string;

    @ApiProperty()
    @IsString()
    country:string;
}