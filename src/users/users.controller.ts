import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UpdateUserDto } from './dtos/updatingUser.dtos';
import { Users } from './schemas/users.schemas';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

    @Get()
    async getUsers(){
        return this.usersService.getUsers();
    }

    @Get(":id")
    async getUserById(@Param('id') id:string){
        return this.usersService.getUserById(id);
    }

    @Post()
    async createUser(@Body() user:Users){
        return this.usersService.createUser(user);
    }

    @Put(":id")
    async updateUserById(@Param('id') id:string,@Body() data:UpdateUserDto){
        return this.usersService.updateUserById(id,data);
    }

    @Delete(":id")
    async deleteUserById(@Param("id") id:string){
        return this.usersService.deleteUserById(id);
    }
}
