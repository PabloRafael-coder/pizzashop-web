import { api } from '@/lib/axios'

interface registerRestaurantBody {
  restaurantName: string
  managerName: string
  phone: string
  email: string
}

export async function registerRestaurant({
  restaurantName,
  managerName,
  phone,
  email,
}: registerRestaurantBody) {
  api.post('restaurants', {
    restaurantName,
    managerName,
    phone,
    email,
  })
}
