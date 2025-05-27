import { Module } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Persona, PersonaSchema} from './schema/persona.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name:Persona.name, schema: PersonaSchema},
    ])
  ],
  controllers: [PersonaController],
  providers: [PersonaService],
})
export class PersonaModule {}
