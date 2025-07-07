import { ConflictException, Injectable } from '@nestjs/common';
import { CreateProcesodetransfusionDto } from './dto/create-procesodetransfusion.dto';
import { UpdateProcesodetransfusionDto } from './dto/update-procesodetransfusion.dto';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { procesodetransfusion } from './schemas/procesodetransfusion.schema';

@Injectable()
export class ProcesodetransfusionService {
  constructor(@InjectModel(procesodetransfusion.name) private procesodetransfusionbmodel: Model<procesodetransfusion>) { }

  //Metodo para crear o insertar una transfusion
  async create(CreateProcesodetransfusionDto: CreateProcesodetransfusionDto): Promise<procesodetransfusion | { message: string }> {
    const existTransfusion = await this.procesodetransfusionbmodel.findOne({ procesodetransfusion: CreateProcesodetransfusionDto.no_orden });

    if (existTransfusion) { return { message: "Ya existe esa bolsa" }; }
    const nuevaTransfusion = new this.procesodetransfusionbmodel(CreateProcesodetransfusionDto);
    nuevaTransfusion.save();
    return { message: "Transfusion guardada exitosamente" };
  }

  async findAll(): Promise<procesodetransfusion[] | { message: string }> {
    const transfusion = await this.procesodetransfusionbmodel.find().exec();
    if (transfusion.length === 0) { return { message: "No existen registros de transfusiones" } }
    return transfusion;
  }

  async findOne(no_orden: String) {
    const transfusion = this.procesodetransfusionbmodel.findOne({ no_orden }).exec();
    if (!transfusion) {
      throw new ConflictException(`No existen registros de transfusiones con numero de orden ${no_orden}`);
    }
    return this.procesodetransfusionbmodel.findOne({ no_orden });
  }

  async update(no_orden: string, UpdateProcesotransfusionDto: UpdateProcesodetransfusionDto): Promise<procesodetransfusion | { message: string }> {
    const actualizarTransfusion = await this.procesodetransfusionbmodel.findOneAndUpdate({ no_orden }, UpdateProcesotransfusionDto, { new: true }).exec();
    if (!actualizarTransfusion) {
      return { message: `No existen registros de transfusiones con numero de orden ${no_orden}` };
    }
    return actualizarTransfusion;
  }

  async remove(no_orden: String): Promise<procesodetransfusion | { message: string }> {
    const eliminarTransfusion = await this.procesodetransfusionbmodel.findOneAndDelete({ no_orden });
    if (!eliminarTransfusion) return { message: "La transfusion no existe" };
    return eliminarTransfusion;
  }
}
