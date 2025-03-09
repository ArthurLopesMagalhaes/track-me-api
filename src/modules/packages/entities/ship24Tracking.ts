export interface CreateTrackingResponse {
  data: {
    tracker: {
      trackerId: string;
      trackingNumber: string;
      shipmentReference: string;
      courierCode: string[];
      clientTrackerId: string;
      isSubscribed: boolean;
      isTracked: boolean;
      createdAt: string;
    };
  };
}

export interface TrackingResultsResponse {
  data: Data;
}

interface Data {
  trackings: Tracking[];
}

interface Tracking {
  tracker: Tracker;
  shipment: Shipment;
  events: Event[];
  statistics: Statistics;
}

interface Tracker {
  trackerId: string;
  trackingNumber: string;
  shipmentReference: any;
  courierCode: any[];
  clientTrackerId: any;
  isSubscribed: boolean;
  isTracked: boolean;
  createdAt: string;
}

interface Shipment {
  shipmentId: string;
  statusCode: string;
  statusCategory: string;
  statusMilestone: string;
  originCountryCode: any;
  destinationCountryCode: any;
  delivery: Delivery;
  trackingNumbers: TrackingNumber[];
  recipient: Recipient;
}

interface Delivery {
  estimatedDeliveryDate: any;
  service: string;
  signedBy: any;
}

interface TrackingNumber {
  tn: string;
}

interface Recipient {
  name: any;
  address: any;
  postCode: any;
  city: any;
  subdivision: any;
}

interface Event {
  eventId: string;
  trackingNumber: string;
  eventTrackingNumber: string;
  status: string;
  occurrenceDatetime: string;
  order: any;
  datetime: string;
  hasNoTime: boolean;
  utcOffset: any;
  location: string;
  sourceCode: string;
  courierCode: string;
  statusCode?: string;
  statusCategory?: string;
  statusMilestone: string;
}

interface Statistics {
  timestamps: Timestamps;
}

interface Timestamps {
  infoReceivedDatetime: string;
  inTransitDatetime: string;
  outForDeliveryDatetime: string;
  failedAttemptDatetime: any;
  availableForPickupDatetime: any;
  exceptionDatetime: any;
  deliveredDatetime: string;
}
