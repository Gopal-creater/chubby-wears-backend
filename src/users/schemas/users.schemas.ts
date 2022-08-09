import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema()
export class Users {
    @Prop({required:true})
    name:string;

    @Prop({required:true})
    email:string;

    @Prop()
    phoneNumber:number;

    @Prop({required:true})
    password:string;

    @Prop()
    country:string;
}; 

export const UsersSchema = SchemaFactory.createForClass(Users);