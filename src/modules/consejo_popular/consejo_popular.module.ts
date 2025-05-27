import { Module } from '@nestjs/common';
import { ConsejoPopularService } from './consejo_popular.service';
import { ConsejoPopularController } from './consejo_popular.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsejoPopular, Consejo_PopularSchema } from './schema/consejo_popular.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ConsejoPopular.name, schema: Consejo_PopularSchema }, // ✅ Nombre correcto
    ]),
  ],
  providers: [ConsejoPopularService],
  controllers: [ConsejoPopularController],
})
export class ConsejoPopularModule {}
