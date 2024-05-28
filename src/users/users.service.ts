import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {


    return this.usersRepository.save({ ...createUserDto })
  }

  findAll() {
    return `This action returns all users`;
  }
  /* 
    async findOne(id: string) {
      const user = await this.usersRepository.findOneBy(id)
  
      if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND)
      return `This action returns a #${id} user`;
    } */

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
