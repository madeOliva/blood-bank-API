import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ComponentesObtenidos, ComponentesObtenidosDocument } from './schema/componentes_obtenidos.schema';
import { CreateComponentesObtenidosDto } from './dto/create-componentes_obtenidos.dto';

@Injectable()
export class ComponentesObtenidosService {
  constructor(
    @InjectModel(ComponentesObtenidos.name)
    private readonly componentesObtenidosModel: Model<ComponentesObtenidosDocument>,
  ) {}

  async create(dto: CreateComponentesObtenidosDto) {
    const creado = new this.componentesObtenidosModel(dto);
    return creado.save();
  }


// ...existing code...
async getAllObtenidos() {
  // 1. Trae todos los componentes obtenidos
  const componentes = await this.componentesObtenidosModel.find().lean();

  // 2. Trae todos los registros de donación y los indexa por _id (como string)
  const RegistroDonacionModel = this.componentesObtenidosModel.db.model('RegistroDonacion');
  const registros = await RegistroDonacionModel.find().lean();
  const registrosMap = {};
  registros.forEach((reg: any) => {
    registrosMap[reg._id.toString()] = reg;
  });

  // 3. Trae todas las historias clínicas y las indexa por _id (como string)
  const HistoriaClinicaModel = this.componentesObtenidosModel.db.model('Historia_Clinica');
  const historias = await HistoriaClinicaModel.find().lean();
  const historiasMap = {};
  historias.forEach((hc: any) => {
    historiasMap[hc._id.toString()] = hc;
  });

  // Log de los datos base
  console.log({
    componentes: componentes.map(c => c._id?.toString() || c.no_consecutivo),
    registros: Object.keys(registrosMap),
    historias: Object.keys(historiasMap)
  });

  // 4. Une los datos y filtra solo los de estado "liberado"
  return componentes
  .map((comp: any) => {
    try {
      const reg = registrosMap[comp.registro_donacion?.toString()];
      if (!reg) {
        console.log('No se encontró registro para', comp.registro_donacion);
        return null;
      }
      if (!reg.estado) {
        console.log('El registro no tiene campo estado:', reg);
        return null;
      }
      if (reg.estado?.toLowerCase() !== 'liberado') {
        console.log('Registro no liberado:', reg._id, reg.estado);
        return null;
      }
      console.log('reg.historiaClinica:', reg.historiaClinica);
      if (!reg.historiaClinica) {
        console.log('El registro no tiene historiaClinica:', reg);
        return null;
      }
      const hc = historiasMap[reg.historiaClinica?.toString()];
      if (!hc) {
        console.log('No se encontró historia clínica para', reg.historiaClinica);
        return null;
      }
return {
  _id: comp._id,
  no_consecutivo: comp.no_consecutivo,
  historia_clinica: {
    no_hc: hc.no_hc || "",
    sexo: hc.sexo || "",
    edad: hc.edad || "",
    grupo: hc.grupo || "",
    factor: hc.factor || "",
  },
  componentes: comp.componentes,
  fecha_obtencion: (() => {
    const valor = comp.fecha_obtencion;
    console.log('Valor real de fecha_obtencion:', valor);
    if (!valor) return "";
    const d = new Date(valor);
    return !isNaN(d.getTime()) ? d.toISOString().slice(0, 10) : "";
  })(),
};
    } catch (err) {
      console.error('Error procesando componente:', comp, err);
      return null;
    }
  })
  .filter(Boolean);
}
   
async getObtenidos() {
  // 1. Trae solo los componentes con estado_obtencion "obtenido"
  const componentes = await this.componentesObtenidosModel
    .find({ estado_obtencion: "obtenido" })
    .lean();

  // 2. Trae todos los registros de donación y los indexa por _id (como string)
  const RegistroDonacionModel = this.componentesObtenidosModel.db.model('RegistroDonacion');
  const registros = await RegistroDonacionModel.find().lean();
  const registrosMap = {};
  registros.forEach((reg: any) => {
    registrosMap[reg._id.toString()] = reg;
  });

  // 3. Trae todas las historias clínicas y las indexa por _id (como string)
  const HistoriaClinicaModel = this.componentesObtenidosModel.db.model('Historia_Clinica');
  const historias = await HistoriaClinicaModel.find().lean();
  const historiasMap = {};
  historias.forEach((hc: any) => {
    historiasMap[hc._id.toString()] = hc;
  });

  // 4. Une los datos y devuelve el resultado
  return componentes
    .map((comp: any) => {
      try {
        const reg = registrosMap[comp.registro_donacion?.toString()];
        if (!reg) return null;
        const hc = historiasMap[reg.historiaClinica?.toString()];
        if (!hc) return null;
        return {
          _id: comp._id,
          no_consecutivo: comp.no_consecutivo,
          historia_clinica: {
            no_hc: hc.no_hc || "",
            sexo: hc.sexo || "",
            edad: hc.edad || "",
            grupo: hc.grupo || "",
            factor: hc.factor || "",
          },
          componentes: comp.componentes,
          fecha_obtencion: (() => {
            const valor = comp.fecha_obtencion;
            if (!valor) return "";
            const d = new Date(valor);
            return !isNaN(d.getTime()) ? d.toISOString().slice(0, 10) : "";
          })(),
        };
      } catch (err) {
        console.error('Error procesando componente:', comp, err);
        return null;
      }
    })
    .filter(Boolean);
}
async desecharComponente(id: string) {
  // Busca el componente obtenido
  const componente = await this.componentesObtenidosModel.findById(id).lean();
  if (!componente) throw new Error('Componente no encontrado');

  // Busca y actualiza el registro de donación relacionado
  const RegistroDonacionModel = this.componentesObtenidosModel.db.model('RegistroDonacion');
  await RegistroDonacionModel.findByIdAndUpdate(
    componente.registro_donacion,
    { estado: "desechadaa" }
  );
  return { success: true };
}
async liberarComponente(id: string) {
  // Busca el componente obtenido
  const componente = await this.componentesObtenidosModel.findById(id).lean();
  if (!componente) throw new Error('Componente no encontrado');

  // Busca y actualiza el registro de donación relacionado
  const RegistroDonacionModel = this.componentesObtenidosModel.db.model('RegistroDonacion');
  await RegistroDonacionModel.findByIdAndUpdate(
    componente.registro_donacion,
    { estado: "liberado" }
  );
  return { success: true };
}
async findByEstadoObtencion(estado: string) {
  return this.componentesObtenidosModel.find({ estado_obtencion: estado }).lean();
}
}