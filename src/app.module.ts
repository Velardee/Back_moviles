import { Module } from '@nestjs/common';
import Stripe from 'stripe';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, Stripe],
})
export class AppModule {}
