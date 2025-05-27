import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Reacciones } from './schemas/reacciones.schemas';
import { Model } from 'mongoose';
import { CreateReaccionDto } from './dto/create-reacciones.dto';
import { UpdateReaccionDto } from './dto/update-reacciones.dto';

@Injectable()
export class ReaccionesService {
    constructor(@InjectModel(Reacciones.name) private reaccionesModel:Model<Reacciones>){}
    
 async getOne(id: string) {
     const reaccion = await this.reaccionesModel.findById(id).exec();
     if (!reaccion) {
       throw new ConflictException('No existe dicha reaccion');
     }
     return this.reaccionesModel.findById(id);
   }
 
   async getAll() {
     return this.reaccionesModel.find();
   }
 
   async create(createReaccionesDto: CreateReaccionDto) {
     const existReaccion = await this.reaccionesModel.findById({
       nombre: createReaccionesDto.nombre_reaccion,
     });
     if (existReaccion) {
       throw new ConflictException('Ya existe dicha reaccion');
     }
     const newReaccion = new this.reaccionesModel(createReaccionesDto);
     return newReaccion.save();
   }
 
   async update(updateReaccionDto: UpdateReaccionDto, id: string) {
     const updateReaccion = this.reaccionesModel.findByIdAndUpdate(
       id,
       updateReaccionDto,
       { new: true },
     );
     if (!updateReaccion) {
       throw new ConflictException('No existe el Reaccion' + id);
     }
     return updateReaccion;
   }
 
   async delete(id: string) {
     const deleteReaccion = this.reaccionesModel.findByIdAndDelete(id);
     if (!deleteReaccion) {
       throw new ConflictException('No existe el Reaccion' + id);
     }
     return deleteReaccion;
   }   
}
