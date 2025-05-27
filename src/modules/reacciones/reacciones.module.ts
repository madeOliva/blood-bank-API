import { Module } from '@nestjs/common';
import { ReaccionesService } from './reacciones.service';
import { ReaccionesController } from './reacciones.controller';
import { Reacciones, ReaccionesSchema } from './schemas/reacciones.schemas';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Reacciones.name, schema: ReaccionesSchema }]),
  ],
  providers: [ReaccionesService],
  controllers: [ReaccionesController]
})
export class ReaccionesModule {}
