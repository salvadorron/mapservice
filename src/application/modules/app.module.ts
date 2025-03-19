import { Module } from '@nestjs/common';
import { LocationModule } from './location.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    LocationModule
  ],
})
export class AppModule {}
