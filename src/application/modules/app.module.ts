import { Module } from '@nestjs/common';
import { LocationModule } from './location.module';
import { ConfigModule } from '@nestjs/config';
import { FormModule } from './form.module';
import { CategoryModule } from './category.module';
import { FilledFormModule } from './filled_form.module';
import { MunicipalityModule } from './municipality.module';
import { ParrishModule } from './parrish.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    LocationModule,
    FormModule,
    CategoryModule,
    FilledFormModule,
    MunicipalityModule,
    ParrishModule
  ],
})
export class AppModule {}
