import { HttpException, Injectable } from '@nestjs/common';
import {Model} from "mongoose"
import { InjectModel } from '@nestjs/mongoose';
import { UpdateUserDto } from './dtos/updatingUser.dto';
import { Users,UsersDocument } from './schemas/users.schemas';

@Injectable()
export class UsersService {
    constructor(@InjectModel("Users") private usersModel: Model<UsersDocument>) {}

    async getUsers() {
        const users = await this.usersModel.find({})
        return users
    }

    async createUser(newUser:Users){
        const createdUser = new this.usersModel(newUser);
        return createdUser.save();
    }

    async getUserById(_id:string){
        const user = await this.usersModel.findOne({_id})
        return user
    }

    async deleteUserById(_id:string){
        const user = await this.usersModel.findByIdAndRemove({_id})
        return;
    }

    async updateUserById(id:string,data:UpdateUserDto){
        const updatedUser = await this.usersModel.findByIdAndUpdate(id,data,{new:true})
        return updatedUser
    }
}
