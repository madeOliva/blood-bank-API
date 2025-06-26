import { Injectable } from '@nestjs/common';
import { CreateComponentesatransfundirDto } from './dto/create-componentesatransfundir.dto';
import { UpdateComponentesatransfundirDto } from './dto/update-componentesatransfundir.dto';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { componentesatransfundir } from './schemas/componentesatransfundir.schema';

@Injectable()
export class ComponentesatransfundirService {
  constructor(@InjectModel(componentesatransfundir.name) private componentesatransfundirbmodel: Model<componentesatransfundir>) { }
  
    //Metodo para crear o insertar una transfusion
    async create(CreateComponentesatransfundirDto: CreateComponentesatransfundirDto): Promise<componentesatransfundir | { message: string }> {
      const existComponentes = await this.componentesatransfundirbmodel.findOne({ componentestransfundir: CreateComponentesatransfundirDto.codigo_bolsa });
  
      if (existComponentes) { return { message: "Ya existe esa bolsa" }; }
      const nuevaComponente = new this.componentesatransfundirbmodel(CreateComponentesatransfundirDto);
      nuevaComponente.save();
      return { message: "Transfusion guardada exitosamente" };
    }
  
    //Metodo para retornar todas las bolsas
    async findAll(): Promise<componentesatransfundir[] | { message: string }> {
      const componentestrans = await this.componentesatransfundirbmodel.find().exec();
      if (componentestrans.length === 0) { return { message: "No se han realizado pruebas pre transfusionales" } }
      return componentestrans;
    }
  
    findOne(id: number) {
      return `This action returns a #${id} componentestransfundir`;
    }
  
    update(id: number, updateComponentestransfundirDto: UpdateComponentesatransfundirDto) {
      return `This action updates a #${id} componentestransfundir`;
    }
  
    //Metodo para eliminar una bolsa
    async remove(codigo_bolsa: String): Promise<componentesatransfundir | { message: string }> {
      const devolverbolsaSangre = await this.componentesatransfundirbmodel.findOneAndDelete({ codigo_bolsa });
      if (!devolverbolsaSangre) return { message: "La bolsa ha sido devuelta al stock" };
      return devolverbolsaSangre;
    }
}
