import { ConflictException, Injectable } from '@nestjs/common';
import { CreateResultadosdelaboratorioDto } from './dto/create-resultadosdelaboratorio.dto';
import { UpdateResultadosdelaboratorioDto } from './dto/update-resultadosdelaboratorio.dto';
import { InjectModel } from '@nestjs/mongoose';
import { resultadosdelaboratorio } from './schemas/resultadosdelaboratorio.schema';
import { Model } from 'mongoose';

@Injectable()
export class ResultadosdelaboratorioService {
  constructor(@InjectModel(resultadosdelaboratorio.name) private resultadosdelaboratorioModel: Model<resultadosdelaboratorio>) { }

  async create(CreateResultadosdelaboratorioDto: CreateResultadosdelaboratorioDto): Promise<resultadosdelaboratorio | { message: string }> {
    const existResultadosdelaboratorio = await this.resultadosdelaboratorioModel.findOne({ id_orden: CreateResultadosdelaboratorioDto.id_orden });

    if (existResultadosdelaboratorio) { return { message: "Ya existe un registro de prueba" }; }
    const nuevoResultadosdelaboratorio = new this.resultadosdelaboratorioModel(CreateResultadosdelaboratorioDto);
    nuevoResultadosdelaboratorio.save();
    return { message: "Prueba guardada exitosamente" };
  }

  async findAll(): Promise<resultadosdelaboratorio[] | { message: string }> {
    const resultadosLab = await this.resultadosdelaboratorioModel.find().exec();
    if (resultadosLab.length === 0) {
      return { message: "No hay bolsas registradas" };
    }
    return resultadosLab;
  }

  async findOne(id_orden: String) {
    const resultadosdelaboratorio = this.resultadosdelaboratorioModel.findOne({ id_orden }).exec();
    if (!resultadosdelaboratorio) {
      throw new ConflictException(`No existen registros de pruebas a la bolsa con el codigo ${id_orden}`);
    }
    return resultadosdelaboratorio;
  }

  update(id: number, updateResultadosdelaboratorioDto: UpdateResultadosdelaboratorioDto) {
    return `This action updates a #${id} resultadosdelaboratorio`;
  }

  async remove(id_orden: String): Promise<resultadosdelaboratorio | { message: string }> {
    const eliminarResultadosLaboratorio = await this.resultadosdelaboratorioModel.findOneAndDelete({ id_orden });
    if (!eliminarResultadosLaboratorio) return { message: "La prueba ha sido eliminada" };
    return eliminarResultadosLaboratorio;
  }
}
