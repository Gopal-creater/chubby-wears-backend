import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UpdateUserDto } from './dtos/updatingUser.dto';
import { Users } from './schemas/users.schemas';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dtos/createUser.dto';

@ApiTags("User Controller")
@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

    @Get()
    @ApiOperation({summary:"Get all the list of users"})
    async getUsers(){
        return this.usersService.getUsers();
    }

    @Get(":id")
    @ApiOperation({summary:"Get particular user by id"})
    async getUserById(@Param('id') id:string){
        return this.usersService.getUserById(id);
    }

    @Post()
    @ApiOperation({summary:"Create a new user"})
    async createUser(@Body() user:CreateUserDto){
        return this.usersService.createUser(user);
    }

    @Put(":id")
    @ApiOperation({summary:"Update a user by id"})
    async updateUserById(@Param('id') id:string,@Body() data:UpdateUserDto){
        return this.usersService.updateUserById(id,data);
    }

    @Delete(":id")
    @ApiOperation({summary:"Delete a user by id"})
    async deleteUserById(@Param("id") id:string){
        return this.usersService.deleteUserById(id);
    }
}
