import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import Stripe from 'stripe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private stripe: Stripe) {

                stripe.setApiKey('sk_test_51JDdGiEh6wq4G88bXLKIVILdfswCATgzcgRKE95vGjwaK9oGF1IN3ogOMbe0vzpGEBKTBxndAETwO6BUkeQur8mk005TsQQhA9');

              }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async makePayment(@Body() body, @Res() response){
    this.stripe.charges.create({
      amount: body.amount,
      currency: body.currency,
      description: body.descripcion,
      source: body.token
    })
    .then((charge) => {
      console.log(charge);
      return response.status(200).json(charge);
    })
    .catch((error) => {
      console.log(error);
      return response.status(400).json(error);
    })
  }
}
