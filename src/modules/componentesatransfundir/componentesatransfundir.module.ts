import { Module } from '@nestjs/common';
import { ComponentesatransfundirService } from './componentesatransfundir.service';
import { ComponentesatransfundirController } from './componentesatransfundir.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { componentesatransfundir, componentesatransfundirSchema } from './schemas/componentesatransfundir.schema';

@Module({
  controllers: [ComponentesatransfundirController],
  providers: [ComponentesatransfundirService],
  imports: [MongooseModule.forFeature([{
        name: componentesatransfundir.name,
        schema: componentesatransfundirSchema,},]),],
      exports: [MongooseModule],
})
export class ComponentesatransfundirModule {}
