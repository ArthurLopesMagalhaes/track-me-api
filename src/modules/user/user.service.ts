import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findOne() {
    return {
      user: {
        user: {
          data: {
            user: {
              id: 'cf62b8f9-e925-4279-9a2a-323e5171941c',
              aud: 'authenticated',
              role: 'authenticated',
              email: 'arthurlopes462@gmail.com',
              email_confirmed_at: '2025-03-08T17:57:43.950359Z',
              phone: '',
              confirmation_sent_at: '2025-03-08T17:54:57.007997Z',
              confirmed_at: '2025-03-08T17:57:43.950359Z',
              last_sign_in_at: '2025-03-15T15:04:55.037679Z',
              app_metadata: {
                provider: 'email',
                providers: ['email'],
              },
              user_metadata: {
                email: 'arthurlopes462@gmail.com',
                email_verified: true,
                name: 'Arthur',
                phone_verified: false,
                sub: 'cf62b8f9-e925-4279-9a2a-323e5171941c',
              },
              identities: [
                {
                  identity_id: '8121ec02-42cf-45df-876b-499588cef85b',
                  id: 'cf62b8f9-e925-4279-9a2a-323e5171941c',
                  user_id: 'cf62b8f9-e925-4279-9a2a-323e5171941c',
                  identity_data: {
                    email: 'arthurlopes462@gmail.com',
                    email_verified: true,
                    name: 'Arthur',
                    phone_verified: false,
                    sub: 'cf62b8f9-e925-4279-9a2a-323e5171941c',
                  },
                  provider: 'email',
                  last_sign_in_at: '2025-03-08T17:54:57.00457Z',
                  created_at: '2025-03-08T17:54:57.004629Z',
                  updated_at: '2025-03-08T17:54:57.004629Z',
                  email: 'arthurlopes462@gmail.com',
                },
              ],
              created_at: '2025-03-08T17:54:56.997908Z',
              updated_at: '2025-03-15T15:04:55.044412Z',
              is_anonymous: false,
            },
          },
          error: null,
        },
      },
    };
  }
}
