import { ConflictException, Injectable } from '@nestjs/common';
import { CreateConsejoPopularDto } from './dto/create-consejo_popular.dto';
import { UpdateConsejoPopularDto } from './dto/update-consejo_popular.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConsejoPopular } from './schema/consejo_popular.schema';


@Injectable()
export class ConsejoPopularService {

 constructor (
     @InjectModel(ConsejoPopular.name)
       private consejopopularModel: Model<ConsejoPopular>){}

 async create(CreateConsejoPopularDto: CreateConsejoPopularDto): Promise<ConsejoPopular| {message: string}> {
  const existConsejoPopular = await this.consejopopularModel.findOne({area_salud: CreateConsejoPopularDto.name}
  );
  if (existConsejoPopular){
   return{message: "El consejo popular ya existe "}
  }
  const nuevaConsejoPopular = new this.consejopopularModel(CreateConsejoPopularDto);
  nuevaConsejoPopular.save();
  return  {message: "El consejo popular fue creado exitosamente"}
   }

  async findAll(): Promise<ConsejoPopular[] | {message: string}> {
      return this.consejopopularModel.find()
    }
  

  async findOne(consejo_popular: string) {
      const consejo = await this.consejopopularModel.findOne({consejo_popular}).exec();
      if (!consejo){
        throw new ConflictException(`No existe el consejo popular ${consejo_popular}`)
      }
      return this.consejopopularModel.findOne({consejo_popular});
    }
  
 async update(id: string, UpdateConsejoPopularDto: UpdateConsejoPopularDto): Promise<ConsejoPopular | {message: string}> {
    const updateconsejo = await this.consejopopularModel.findByIdAndUpdate(id, UpdateConsejoPopularDto, {new:true}).exec();

    if(!updateconsejo){
      return {message: `No existe el consejo popular ${id}`}
    }
    return updateconsejo;
  }

   async remove(id: string): Promise<ConsejoPopular | {message: string}> {
     const deleteconsejo = await this.consejopopularModel.findByIdAndDelete(id);
 
     if (!deleteconsejo){
       return{ message: "El consejo popular no existe"}
     }
     return deleteconsejo;
   }
}
