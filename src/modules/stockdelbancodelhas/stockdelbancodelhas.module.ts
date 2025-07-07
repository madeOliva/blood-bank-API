import { Module } from '@nestjs/common';
import { StockdelbancodelhasService } from './stockdelbancodelhas.service';
import { StockdelbancodelhasController } from './stockdelbancodelhas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { stockdelbancodelhas, stockdelbancodelhasSchema } from './schemas/stockdelbancodelhas.schema';

@Module({
  controllers: [StockdelbancodelhasController],
  providers: [StockdelbancodelhasService],
  imports: [MongooseModule.forFeature([{
      name: stockdelbancodelhas.name,
      schema: stockdelbancodelhasSchema,},]),],
    exports: [MongooseModule],
})
export class StockdelbancodelhasModule { }
