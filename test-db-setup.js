import mongoose from 'mongoose'
import cuid from 'cuid'
const url =
  process.env.MONGODB_URI ||
  process.env.DB_URL ||
  'mongodb://localhost:27018/bnk-db'

beforeEach(async done => {
  const db = cuid()
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(
        url + db,
        {
          useNewUrlParser: true,
          autoIndex: true
        }
      )
    } catch (e) {
      console.log('connection error')
      console.error(e)
      throw e
    }
  }
  done()
})
afterEach(async done => {
  await mongoose.disconnect()
  return done()
})

afterAll(done => {
  return done()
})
