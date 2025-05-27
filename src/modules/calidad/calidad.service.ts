import { ConflictException, Injectable } from '@nestjs/common';
import { UpdateCalidadDto } from './dto/update-calidad.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Calidad } from './entities/calidad.entity';
import { Model } from 'mongoose';
import { CreateCalidadDto } from './dto/create-calidad.dto';

@Injectable()
export class CalidadService {
  constructor(
    @InjectModel(Calidad.name) private calidadModel: Model<Calidad>,
  ) { }

  
  //Metodo crear

  async create(
    createCalidadDto: CreateCalidadDto,
  ): Promise<Calidad | { message: string }> {
    const existCalidad = await this.calidadModel.findOne({
      no_tubuladura: createCalidadDto.no_tubuladura,
    });

    if (existCalidad) {
      return { message: 'Ya existe' };
    }
    const nuevaCalidad = new this.calidadModel(createCalidadDto);
    nuevaCalidad.save();
    return { message: 'La calidad se creo exitosamente' };
  }

  //Metodo para retornar todas las calidades

  async findAll(): Promise<Calidad[] | { message: string }> {
    return this.calidadModel.find();
  }


  //Metodo para retornar una calidad

  async findOne(id: string) {
    const calid = await this.calidadModel.findOne({ id }).exec();
    if (!calid) {
      throw new ConflictException(`no existe la calidad ${id}`);
    }
    return calid;
  }


  //Metodo para actualizar las calidades

  async update(
    id: string,
    UpdateCalidadDto: UpdateCalidadDto,
  ): Promise<Calidad | { message: string }> {
    const updatecalid = await this.calidadModel
      .findByIdAndUpdate(id, UpdateCalidadDto, { new: true })
      .exec();

    if (!updatecalid) {
      return { message: `no existe la calidad ${id}` };
    }
    return updatecalid;
  }

  //Metodo para eliminar una calidad

  async remove(id: string): Promise<Calidad | { message: string }> {
    const deletecalid = await this.calidadModel.findByIdAndDelete(id);

    if (!deletecalid) {
      return { message: 'La calidad no existe' };
    }
    return deletecalid;
  }
}
