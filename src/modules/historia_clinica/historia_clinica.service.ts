import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateHistoriaClinicaDto } from './dto/create-historia_clinica.dto';
import { UpdateHistoriaClinicaDto } from './dto/update-historia_clinica.dto';
import { Historia_Clinica } from './schema/historia_clinica.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class HistoriaClinicaService {
  constructor(
    @InjectModel(Historia_Clinica.name)
    private Historia_ClinicaModel: Model<Historia_Clinica>,
  ) {}

  
  // Obtener todas las historias clínicas con donante activo
 async getDonantesActivos() {
  const historias = await this.Historia_ClinicaModel
    .find({ es_donanteActivo: true })
    .populate('grupo_sanguine', 'nombre')
    .populate('factor', 'signo')
    .populate('provincia', 'nombre_provincia')
    .exec();

  return historias.map(h => {
    const obj = h.toObject();
    return {
      ...obj,
      grupo_sanguine: obj.grupo_sanguine?.nombre || null,
      factor: obj.factor?.signo || null,
      provincia: obj.provincia?.nombre_provincia || null,
    };
  });
}



  // Obtener una historia clínica por ID
  async getOne(id: string) {
    const historia = await this.Historia_ClinicaModel.findById(id);
    if (!historia) {
      throw new NotFoundException('No existe la historia clínica con id ' + id);
    }
    return historia;
  }

  // Obtener todas las historias clínicas
  async getAll() {
    return this.Historia_ClinicaModel.find().exec();
  }

  async getCitados() {
    return this.Historia_ClinicaModel.find({ citado: true })
      .populate('sexo')
      .populate('grupo_sanguine')
      .populate('factor')
      .exec();
  }

  // Obtener una historia clínica por CI
  async getByCI(ci: string) {
    const historia = await this.Historia_ClinicaModel.findOne({ ci });
    if (!historia) {
      throw new NotFoundException('No existe la historia clínica con CI ' + ci);
    }
    return historia;
  }

  // Crear una nueva historia clínica
  async create(createHistoriaClinicaDto: CreateHistoriaClinicaDto) {
    const existHistoria = await this.Historia_ClinicaModel.findOne({
      ci: createHistoriaClinicaDto.ci,
    });
    if (existHistoria) {
      throw new ConflictException(
        'Ya existe una historia clínica con ese número',
      );
    }
    const newHistoria = new this.Historia_ClinicaModel(
      createHistoriaClinicaDto,
    );
    return newHistoria.save();
  }

  // Actualizar una historia clínica existente
  async update(id: string, updateHistoriaClinicaDto: UpdateHistoriaClinicaDto) {
    const updatedHistoria = await this.Historia_ClinicaModel.findByIdAndUpdate(
      id,
      updateHistoriaClinicaDto,
      { new: true },
    ).exec();

    if (!updatedHistoria) {
      throw new NotFoundException('No existe la historia clínica con id ' + id);
    }
    return updatedHistoria;
  }

  //Metodo para actualizar el estado de citado y la fecha de cita
  async updateCitadoYFecha(id: string, citado: boolean, fechaCita: Date) {
    return this.Historia_ClinicaModel.findByIdAndUpdate(
      id,
      { citado, fechaCita },
      { new: true }
    );
  }

  // Eliminar una historia clínica
  async delete(id: string) {
    const deletedHistoria =
      await this.Historia_ClinicaModel.findByIdAndDelete(id).exec();
    if (!deletedHistoria) {
      throw new NotFoundException('No existe la historia clínica con id ' + id);
    }
    return deletedHistoria;
  }

  async getOnH(id: string) {
    const historia = await this.Historia_ClinicaModel.findById(id)
      .populate('sexo', 'nombre')
      .populate('color_piel', 'nombre')
      .populate('grupo_sanguine', 'nombre')
      .populate('factor', 'signo')
      .populate('provincia', 'nombre_provincia');

    if (!historia) {
      throw new NotFoundException(
        `Historia clínica con id ${id} no encontrada`,
      );
    }
    const h = historia.toObject();

    return {
      _id: h._id,
      ci: h.ci,
      nombre: h.nombre,
      primer_apellido: h.primer_apellido,
      segundo_apellido: h.segundo_apellido,
      sexo: h.sexo?.nombre || null,
      edad: h.edad,
      estado_civil: h.estado_civil,
      municipio: h.municipio,
      provincia: h.provincia?.nombre_provincia || null,
      color_piel: h.color_piel?.nombre || null,
      no_hc: h.no_hc,
      ocupacion: h.ocupacion || null,
      grupo_sanguine: h.grupo_sanguine?.nombre || null,
      factor: h.factor?.signo || null,
      consejo_popular: h.consejo_popular,
      no_consultorio: h.no_consultorio,
      telefono: h.telefono,
      telefonoLaboral: h.telefonoLaboral,
      centro_laboral: h.centro_laboral,
      otra_localizacion: h.otra_localizacion,
      cat_ocupacional: h.cat_ocupacional,
      estilo_vida: h.estilo_vida,
      alimentacion: h.alimentacion,
      genero_vida: h.genero_vida,
      es_donanteControlado: h.es_donanteControlado,
      es_posibleDonante: h.es_posibleDonante,
      es_donanteActivo: h.es_donanteActivo,
      alergias: h.alergias,
      antecedentesPersonales: h.antecedentesPersonales,
      antecedentesFamiliares: h.antecedentesFamiliares,
      habitosToxicos: h.habitosToxicos,
      estanciaExtranjero: h.estanciaExtranjero,
    };

    return {
      _id: h._id,
      ci: h.ci,
      nombre: h.nombre,
      primer_apellido: h.primer_apellido,
      segundo_apellido: h.segundo_apellido,
      sexo: h.sexo?.nombre || null,
      edad: h.edad,
      estado_civil: h.estado_civil,
      municipio: h.municipio,
      provincia: h.provincia?.nombre_provincia || null,
      color_piel: h.color_piel?.nombre || null,
      no_hc: h.no_hc,
      ocupacion: h.ocupacion || null,
      grupo_sanguine: h.grupo_sanguine?.nombre || null,
      factor: h.factor?.signo || null,
      consejo_popular: h.consejo_popular,
      no_consultorio: h.no_consultorio,
      telefono: h.telefono,
      telefonoLaboral: h.telefonoLaboral,
      centro_laboral: h.centro_laboral,
      otra_localizacion: h.otra_localizacion,
      cat_ocupacional: h.ocupacion,
      estilo_vida: h.estilo_vida,
      alimentacion: h.alimentacion,
      genero_vida: h.genero_vida,
      es_donanteControlado: h.es_donanteControlado,
      es_posibleDonante: h.es_posibleDonante,
      es_donanteActivo: h.es_donanteActivo,
      alergias: h.alergias,
      antecedentesPersonales: h.antecedentesPersonales,
      antecedentesFamiliares: h.antecedentesFamiliares,
    };
  }

   async updateCitadoById(id: string, citado: boolean) {
    const updated = await this.Historia_ClinicaModel.findByIdAndUpdate(
      id,
      { citado },
      { new: true }
    );
    if (!updated) {
      throw new NotFoundException('No existe la historia clínica con ID ' + id);
    }
    return updated;
  }

}
