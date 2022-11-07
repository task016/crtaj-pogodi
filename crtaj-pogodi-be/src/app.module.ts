import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SessionsModule } from './sessions/sessions.module';
import { RedisModule } from '@liaoliaots/nestjs-redis';

@Module({
  imports: [
    SessionsModule,
    RedisModule.forRoot({
      config: {
        host: 'redis-17310.c250.eu-central-1-1.ec2.cloud.redislabs.com',
        port: 17310,
        password: 'ioNO29upzDW3jpnIwDqWRMIt7mBk0nsa',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
