import { ConflictException, Injectable } from '@nestjs/common';
import { Donacion } from './schemas/donacion.schemas';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDonacionDto } from './dto/create-donacion.dto';
import { UpdateDonacionDto } from './dto/update-donacion.dto';

@Injectable()
export class DonacionService {
    constructor(
        @InjectModel(Donacion.name)
        private donacionModel: Model<Donacion>,
    ){}


 async getOne(id: string) {
    const donacion = await this.donacionModel
      .findById(id)
      .exec();
    if (!donacion) {
      throw new ConflictException('No existe la donacion' + id);
    }
    return this.donacionModel.findById(id);
  }

  async getAll() {
    return this.donacionModel.find();
  }

  async create(createDonacionDto: CreateDonacionDto) {
    const existDonacion = await this.donacionModel.findById({
      CI: createDonacionDto.no_tubuladura,
    }); 
    if (existDonacion) {
      throw new ConflictException('Ya existe una donacion con dicho numero de tubuladura');
    }
    const newDonacion = new this.donacionModel(
      createDonacionDto,
    );
    return newDonacion.save();
  }

  async update(
    updateDonacionDto: UpdateDonacionDto,
    id: string,
  ) {
    const update = this.donacionModel
      .findByIdAndUpdate(id, updateDonacionDto, { new: true })
      .exec();

    if (!update) {
      throw new ConflictException('No existe la donacion' + id);
    }
    return update;
  }

  async delete(id: string) {
    const donacionDelete = this.donacionModel.findByIdAndDelete(id);
    if (!donacionDelete) {
      throw new ConflictException('No existe la donacion' + id);
    }
    return  donacionDelete;
  }    
}
