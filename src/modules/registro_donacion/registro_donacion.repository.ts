import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegistroDonacion } from './schemas/registro_donacion.schema';

@Injectable()
export class RegistroDonacionRepository {
  constructor(
    @InjectModel(RegistroDonacion.name)
    private readonly registroDonacionModel: Model<RegistroDonacion>,
  ) {}

  async findById(id: string) {
    return this.registroDonacionModel.findById(id);
  }

  async findByIdWithPopulate(id: string) {
    return this.registroDonacionModel
      .findById(id)
      .populate('historiaClinica')
      .populate('componente')
      .lean();
  }

  async create(data: any) {
    const newRegistro = new this.registroDonacionModel(data);
    return newRegistro.save();
  }

  async update(id: string, data: any) {
    return this.registroDonacionModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string) {
    return this.registroDonacionModel.findByIdAndDelete(id).exec();
  }

  async findAll() {
    return this.registroDonacionModel.find();
  }

  async countByComponenteAndYear(componente: string, anio: number) {
    return this.registroDonacionModel.countDocuments({
      componente,
      fechaR: {
        $gte: new Date(`${anio}-01-01T00:00:00.000Z`),
        $lte: new Date(`${anio}-12-31T23:59:59.999Z`),
      },
    });
  }

  async countByYear(anio: number) {
    return this.registroDonacionModel.countDocuments({
      fechaR: {
        $gte: new Date(`${anio}-01-01T00:00:00.000Z`),
        $lte: new Date(`${anio}-12-31T23:59:59.999Z`),
      },
    });
  }

  async findOneByHistoriaClinica(historiaClinicaId: string) {
    return this.registroDonacionModel
      .findOne({
        historiaClinica: historiaClinicaId,
        fechaD: { $ne: null },
      })
      .sort({ fechaD: -1 });
  }

  async findByRangoFechas(fechaInicio: Date, fechaFin: Date) {
    return this.registroDonacionModel
      .find({
        fechaR: { $gte: fechaInicio, $lte: fechaFin },
      })
      .populate({
        path: 'historiaClinica',
        populate: [
          { path: 'sexo' },
          { path: 'grupo_sanguine' },
          { path: 'factor' },
          { path: 'provincia' },
        ],
      })
      .populate('componente')
      .exec();
  }

  async findAllDonation() {
    return this.registroDonacionModel.find();
  }

  async findAllWithPopulate() {
    return this.registroDonacionModel
      .find()
      .populate({
        path: 'historiaClinica',
        select: 'ci nombre primer_apellido segundo_apellido edad sexo grupo_sanguine factor',
        populate: [
          { path: 'sexo', select: 'nombre' },
          { path: 'grupo_sanguine', select: 'nombre' },
          { path: 'factor', select: 'signo' },
        ],
      })
      .populate('componente', 'nombreComponente nombre_componente')
      .exec();
  }

  async getDatosCompletos() {
    return this.registroDonacionModel
      .find()
      .populate('historiaClinica', 'nombre primer_apellido segundo_apellido')
      .exec();
  }

  async findByIdSimple(id: string) {
    return this.registroDonacionModel.findById(id).exec();
  }

  async findNoAptos() {
    return this.registroDonacionModel
      .find({ apto_interrogatorio: false })
      .populate('historiaClinica', 'ci nombre primer_apellido segundo_apellido')
      .exec();
  }

  async findAllSimple() {
    return this.registroDonacionModel.find().exec();
  }

  async findAptasInterrogatorioHoy(inicioDia: Date, finDia: Date) {
    return this.registroDonacionModel
      .find({
        apto_interrogatorio: true,
        fechaR: { $gte: inicioDia, $lte: finDia },
        estado: null,
      })
      .populate({
        path: 'historiaClinica',
        populate: [
          { path: 'sexo' },
          { path: 'grupo_sanguine' },
          { path: 'factor' },
        ],
      })
      .populate('componente')
      .exec();
  }
}