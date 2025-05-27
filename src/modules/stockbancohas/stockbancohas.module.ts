import { Module } from '@nestjs/common';
import { StockbancohasService } from './stockbancohas.service';
import { StockbancohasController } from './stockbancohas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { stockdelbancohas, stockdelbancohasSchema } from './schema/stockdelbancohas.schema';


@Module({
  controllers: [StockbancohasController],
  providers: [StockbancohasService],

  imports: [MongooseModule.forFeature([{
    name: stockdelbancohas.name,
    schema: stockdelbancohasSchema,},]),],
  exports: [MongooseModule],
})
export class StockbancohasModule { }
