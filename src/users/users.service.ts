import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  findAll() {
    return this.userModel.find().exec();
  }

  findOne(id: string) {
    return this.userModel.findById(id).exec();
  }

  create(user: { name: string; email: string }) {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  update(id: string, user: Partial<User>) {
    return this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
  }

  delete(id: string) {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
