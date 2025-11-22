import {Body, Controller, Get, Post} from '@nestjs/common';
import { RolesService } from './roles.service';
import {ApiTags} from "@nestjs/swagger";
import {CreateRoleDto} from "./dtos/create-role.dto";
import {Role} from "./entity/role.entity";

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
    constructor(private readonly rolesService: RolesService) {
    }

    @Post()
    async create(@Body() newRole: CreateRoleDto): Promise<Role> {
        return await this.rolesService.createRole(newRole);
    }

    @Get()
    getAllRoles(): Promise<Role[]>{
        return this.rolesService.getAllRoles();
    }


}
