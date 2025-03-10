import { Injectable } from '@nestjs/common';
import { Json } from 'src/shared/database/database.types';

@Injectable()
export class WebhookService {
  async handleWebhook(payload: Json): Promise<void> {
    // Implement your webhook handling logic here
    console.log('Received webhook payload:', payload);
    // Add your custom logic here
  }
}
