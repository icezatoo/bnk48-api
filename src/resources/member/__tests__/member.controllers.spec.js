import { isFunction } from 'lodash'
import controllers from '../member.controllers'

describe('member controllers', () => {
  test('has member controllers', () => {
    const crudMethod = [
      'getById',
      'getMany',
      'createOne',
      'updateOne',
      'removeOne',
      'getFindPage',
      'getFindMember'
    ]

    crudMethod.forEach(method =>
      expect(isFunction(controllers[method])).toBe(true)
    )
  })
})
