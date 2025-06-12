import { Injectable } from '@nestjs/common';
import { CreateGrupoSanguineoDto } from './dto/create-grupos_sanguineo.dto';
import { UpdateGrupoSanguineoDto } from './dto/update-grupos_sanguineo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { GruposSanguineos } from './schema/grupos_sanguineo.schema';
import { Model } from 'mongoose';

@Injectable()
export class GruposSanguineosService {
constructor(
  @InjectModel(GruposSanguineos.name)
  private  gruposSanguineosModel:Model  <GruposSanguineos>
) {}

  async create(createGruposSanguineoDto: CreateGrupoSanguineoDto): Promise<GruposSanguineos | {message: string}> {
    const existGrupoS = await this.gruposSanguineosModel.findOne(createGruposSanguineoDto);
    if(existGrupoS){
     return {message: "Ya existe el grupos_sanguineo"}
    }
    const nuevoGrupoS = new this.gruposSanguineosModel(createGruposSanguineoDto);
    nuevoGrupoS.save();
    return { message: "El grupos_sanguineo fue creado exitosamente"}
  }

async findAll(): Promise<GruposSanguineos[] | {message: string}> {
    return this.gruposSanguineosModel.find();
  }

  async findOne(id: string): Promise<GruposSanguineos | {message: string}> {
    const grupoS = await this.gruposSanguineosModel.findById({id});
    if(!grupoS){
      return {message: "No existe el sexo"};
    }
    return grupoS;
  }

  async update(id: string, UpdateGrupoSanguineoDto: UpdateGrupoSanguineoDto): Promise<GruposSanguineos | {message: string}> {
    const updateGrupoS = await this.gruposSanguineosModel.findByIdAndUpdate(id, UpdateGrupoSanguineoDto, {new:true}).exec();
    if(!updateGrupoS){
      return {message: `No existe el grupos sanguineo ${id}`};
    }
    return updateGrupoS;
   
  }
  
 async remove(id: string): Promise<GruposSanguineos | {message: string}> {
  const deleteGrupoS = await this.gruposSanguineosModel.findByIdAndDelete(id);
  if (!deleteGrupoS){
    return {message: "El sexo no existe"}
  }
  return deleteGrupoS;
  }
  }

