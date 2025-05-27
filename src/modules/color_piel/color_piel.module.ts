import { Module } from '@nestjs/common';
import { ColorPielService } from './color_piel.service';

import { MongooseModule } from '@nestjs/mongoose';
import { ColorPiel} from './entities/color_piel.entity';
import { ColorPielSchema} from './schema/color_piel.schema';
import { ColorPielController } from './color_piel.controller';


@Module({
  imports:[
    MongooseModule.forFeature([
      {name:ColorPiel.name, schema: ColorPielSchema},
    ])
  ],
  controllers: [ColorPielController],
  providers: [ColorPielService],
})
export class ColorPielModule {}
