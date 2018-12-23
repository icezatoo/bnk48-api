import { getById, getMany, createOne, updateOne } from '../crud'
import { Member } from '../../resources/member/member.model'
import mongoose from 'mongoose'

describe('crud controllers', () => {
  describe('getById', async () => {
    test('finds by  doc  id', async () => {
      expect.assertions(2)

      const member = mongoose.Types.ObjectId()
      const list = await Member.create({
        birthday: '2018-01-01',
        blood_type: 'A',
        english_first_name: 'NARIPAR',
        english_last_name: 'WASAWORNG',
        facebook: '',
        height: 0,
        hobby: '',
        instagram: '',
        like: [],
        nickname: '',
        province: '',
        thai_first_name: '',
        thai_last_name: '',
        createdBy: member
      })

      const req = {
        params: {
          id: list._id
        }
      }

      const res = {
        status(status) {
          expect(status).toBe(200)
          return this
        },
        json(result) {
          expect(result.data._id.toString()).toBe(list._id.toString())
        }
      }
      await getById(Member)(req, res)
    })

    test('404 if no doc was found', async () => {
      expect.assertions(2)

      const req = {
        params: {
          id: mongoose.Types.ObjectId()
        }
      }

      const res = {
        status(status) {
          expect(status).toBe(400)
          return this
        },
        end() {
          expect(true).toBe(true)
        }
      }
      await getById(Member)(req, res)
    })
  })

  describe('getMany', async () => {
    test('finds doc  many any', async () => {
      expect.assertions(2)
      const member = mongoose.Types.ObjectId()
      const list = await Member.create({
        birthday: '2018-01-01',
        blood_type: 'A',
        english_first_name: 'NARIPAR',
        english_last_name: 'WASAWORNG',
        facebook: '',
        height: 0,
        hobby: '',
        instagram: '',
        like: [],
        nickname: '',
        province: '',
        thai_first_name: '',
        thai_last_name: '',
        createdBy: member
      })

      const req = {
        query: list
      }

      const res = {
        status(status) {
          expect(status).toBe(200)
          return this
        },
        json(result) {
          expect(result.data).not.toHaveLength(0)
        }
      }
      await getMany(Member)(req, res)
    })
  })

  describe('createOne', async () => {
    test('creates a new doc', async () => {
      expect.assertions(2)
      const member = mongoose.Types.ObjectId()
      const body = {
        birthday: '2018-01-01',
        blood_type: 'A',
        english_first_name: 'NARIPAR',
        english_last_name: 'WASAWORNG',
        facebook: '',
        height: 0,
        hobby: '',
        instagram: '',
        like: [],
        nickname: 'test',
        province: '',
        thai_first_name: '',
        thai_last_name: '',
        createdBy: member
      }

      const req = {
        body: body
      }

      const res = {
        status(status) {
          expect(status).toBe(201)
          return this
        },
        json(result) {
          expect(result.data.nickname).toBe(body.nickname)
        }
      }
      await createOne(Member)(req, res)
    })
  })

  describe('updateOne', async () => {
    // test('finds doc  id to update ', async () => {
    //   expect.assertions(3)

    //   const member = mongoose.Types.ObjectId()

    //   const list = await Member.create({
    //     birthday: '2018-01-01',
    //     blood_type: 'B',
    //     english_first_name: 'Test',
    //     english_last_name: 'test',
    //     facebook: '',
    //     height: 0,
    //     hobby: '',
    //     instagram: '',
    //     like: [],
    //     nickname: '',
    //     province: '',
    //     thai_first_name: '',
    //     thai_last_name: '',
    //     createdBy: member
    //   })

    //   const update = {
    //     birthday: '2018-01-01',
    //     blood_type: 'C',
    //     english_last_name: 'last_name',
    //     facebook: '',
    //     height: 0,
    //     hobby: '',
    //     instagram: '',
    //     like: [],
    //     nickname: 'test2',
    //     province: '',
    //     thai_first_name: '',
    //     thai_last_name: '',
    //     createdBy: member
    //   }

    //   const req = {
    //     params: { id: list._id },
    //     body: update
    //   }

    //   const res = {
    //     status(status) {
    //       expect(status).toBe(200)
    //       return this
    //     },
    //     json(result) {
    //       expect(result.data._id).toBe(list._id)
    //       expect(result.data.nickname).toBe(update.nickname)
    //     }
    //   }
    //   await updateOne(Member)(req, res)
    // })

    test('400 if no doc', async () => {
      const member = mongoose.Types.ObjectId()

      const body = {
        birthday: '2018-01-01',
        blood_type: 'C',
        english_first_name: 'TestFirstName',
        english_last_name: 'last_name',
        facebook: '',
        height: 0,
        hobby: '',
        instagram: '',
        like: [],
        nickname: 'test2',
        province: '',
        thai_first_name: '',
        thai_last_name: '',
        createdBy: member
      }

      const req = {
        params: { id: mongoose.Types.ObjectId() },
        body: body
      }

      const res = {
        status(status) {
          expect(status).toBe(400)
          return this
        },
        end() {
          expect(true).toBe(true)
        }
      }
      await updateOne(Member)(req, res)
    })
  })
})
