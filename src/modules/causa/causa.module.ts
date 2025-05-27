import { Module } from '@nestjs/common';
import { CausaService } from './causa.service';
import { CausaController } from './causa.controller';
import { Causa } from './entities/causa.entity';
import { CausaSchema } from './schema/causa.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
   imports:[
          MongooseModule.forFeature([
          {name:Causa.name, schema: CausaSchema},  
        ])
        ],
  controllers: [CausaController],
  providers: [CausaService],
})
export class CausaModule {}
