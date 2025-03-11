import { http, HttpResponse } from 'msw'

import type { GetManagedRestaurantResponse } from '../../api/get-managed-restaurant'

export const getManagedRestaurentMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    name: 'John Doe',
    description: 'Custom restaurant description',
    managerId: 'custom-user-id',
    createdAt: new Date(),
    updatedAt: null,
  })
})
