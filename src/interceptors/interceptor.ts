// src/interceptors/mongoose-class-serializer.interceptor.ts
import { 
  CallHandler, 
  ExecutionContext, 
  Injectable, 
  NestInterceptor,
  ClassSerializerInterceptor
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

@Injectable()
export class MongooseClassSerializerInterceptor implements NestInterceptor {
  constructor(private readonly dto: any) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        if (Array.isArray(data)) {
          return data.map(item => plainToClass(this.dto, item.toObject ? item.toObject() : item));
        }
        return plainToClass(this.dto, data.toObject ? data.toObject() : data);
      })
    );
  }
}