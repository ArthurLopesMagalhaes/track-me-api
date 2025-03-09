import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import { env } from 'src/shared/config/env';

@Injectable()
export class Ship24Service {
  private readonly ship24BaseUrl = env.ship24BaseURL;

  async createTracking(trackingNumber: string) {
    try {
      const { data } = await axios.post(
        `${this.ship24BaseUrl}/trackers`,
        { trackingNumber },
        {
          headers: { Authorization: `Bearer ${env.ship24ApiKey}` },
        },
      );

      return data;
    } catch (error) {
      throw new HttpException(
        'Failed to create tracking on Ship24',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
