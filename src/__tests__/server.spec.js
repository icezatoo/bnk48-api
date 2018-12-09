import request from 'supertest'
import { app } from '../server'

describe('API Member :', () => {
  test('api should be locked down', async () => {
    let response = await request(app).get('/api/member')
    expect(response.statusCode).toBe(200)
  })
})
