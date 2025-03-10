import {
  Body,
  Controller,
  Headers,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { env } from 'src/shared/config/env';
import { WebhookService } from './webhook.service';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  private readonly ship24WebhookSecret = env.ship24WebhookSecret;

  @Post()
  async handleWebhook(
    @Headers('authorization') authorization: string,
    @Body() payload: string,
  ) {
    if (authorization !== this.ship24WebhookSecret) {
      throw new HttpException(
        'Invalid webhook signature',
        HttpStatus.FORBIDDEN,
      );
    }

    try {
      await this.webhookService.handleWebhook(payload);
    } catch (error) {
      console.error('Webhook handler error:', error);
      return 'Webhook Handler Error';
    }
  }
}
