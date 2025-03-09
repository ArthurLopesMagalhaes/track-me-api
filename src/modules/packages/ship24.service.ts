import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import { env } from 'src/shared/config/env';
import {
  CreateTrackingResponse,
  TrackingResultsResponse,
} from './entities/ship24Tracking';

@Injectable()
export class Ship24Service {
  private readonly ship24BaseUrl = env.ship24BaseURL;

  async createTracking(trackingNumber: string) {
    try {
      const { data } = await axios.post<CreateTrackingResponse>(
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

  async getTrackingDetails(ship24TrackingId: string) {
    try {
      const { data } = await axios.get<TrackingResultsResponse>(
        `${this.ship24BaseUrl}/trackers/${ship24TrackingId}/results`,
        {
          headers: {
            Authorization: `Bearer ${env.ship24ApiKey}`,
          },
        },
      );

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
