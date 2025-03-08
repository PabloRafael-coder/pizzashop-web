import { http, HttpResponse } from 'msw'

import type { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/03/2025', receipt: 2000 },
    { date: '02/03/2025', receipt: 800 },
    { date: '03/03/2025', receipt: 8000 },
    { date: '04/03/2025', receipt: 540 },
    { date: '05/03/2025', receipt: 400 },
    { date: '06/03/2025', receipt: 700 },
    { date: '07/03/2025', receipt: 1000 },
  ])
})
