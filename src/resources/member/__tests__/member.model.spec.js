import { Member } from '../member.model'
import mongoose from 'mongoose'

describe('Member model', () => {
  describe('schema', () => {
    test('birthday', () => {
      const birthday = Member.schema.obj.birthday
      expect(birthday).toEqual(String)
    })
    test('blood_type', () => {
      const bloodType = Member.schema.obj.blood_type
      expect(bloodType).toEqual(String)
    })

    test('english_first_name', () => {
      const englishFirstName = Member.schema.obj.english_first_name
      expect(englishFirstName).toEqual(String)
    })

    test('english_last_name', () => {
      const englishLastName = Member.schema.obj.english_last_name
      expect(englishLastName).toEqual(String)
    })

    test('facebook', () => {
      const facebook = Member.schema.obj.facebook
      expect(facebook).toEqual(String)
    })

    test('height', () => {
      const height = Member.schema.obj.height
      expect(height).toEqual(Number)
    })

    test('hobby', () => {
      const hobby = Member.schema.obj.hobby
      expect(hobby).toEqual(String)
    })

    test('instagram', () => {
      const instagram = Member.schema.obj.instagram
      expect(instagram).toEqual(String)
    })

    test('like', () => {
      const like = Member.schema.obj.like
      expect(like).toEqual(Array)
    })

    test('nickname', () => {
      const nickname = Member.schema.obj.nickname
      expect(nickname).toEqual(String)
    })

    test('province', () => {
      const province = Member.schema.obj.province
      expect(province).toEqual(String)
    })

    test('thai_first_name', () => {
      const thaiFirstName = Member.schema.obj.thai_first_name
      expect(thaiFirstName).toEqual(String)
    })

    test('thai_last_name', () => {
      const thaiLastName = Member.schema.obj.thai_last_name
      expect(thaiLastName).toEqual(String)
    })

    test('profile_image', () => {
      const profileImage = Member.schema.obj.profile_image
      expect(profileImage).toEqual(String)
    })

    test('generation', () => {
      const generation = Member.schema.obj.generation
      expect(generation).toEqual(String)
    })

    test('createdBy', () => {
      const createdBy = Member.schema.obj.createdBy
      expect(createdBy).toEqual({
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'member',
        required: true
      })
    })
  })
})
