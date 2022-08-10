import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ConfigModule,ConfigService } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    //For environment variables
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:'staging.env'
    }),
    //Mongo DB Connection
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    //Other App Modules
    UsersModule
  ],
  controllers: [AppController],
  providers: [
    //Global data validation
    {provide: APP_PIPE,useClass: ValidationPipe},
    AppService
  ],
})
export class AppModule {}
