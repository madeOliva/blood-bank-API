import { Module } from '@nestjs/common';
import { PersonalSaludService } from './personal_salud.service';
import { PersonalSaludController } from './personal_salud.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonalSalud} from './entities/personal_salud.entity';
import { PersonalSaludSchema} from './schema/personal_salud.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name:PersonalSalud.name, schema: PersonalSaludSchema},
    ])
  ],
  controllers: [PersonalSaludController],
  providers: [PersonalSaludService],
})
export class PersonalSaludModule {}
