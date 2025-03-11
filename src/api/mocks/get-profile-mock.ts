import { http, HttpResponse } from 'msw'

import type { GetProfileResponse } from '../../api/get-profile'

export const getProfileMock = http.get<never, GetProfileResponse>('/me', () => {
  return HttpResponse.json({
    id: 'custom-user-id',
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '313534343',
    role: 'manager',
    createdAt: new Date(),
    updatedAt: null,
  })
})
