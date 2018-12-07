import { Router } from 'express'
import controllers from './member.controllers'

const router = Router()

// /api/member
router.route('/').get(controllers.getFindAll)
// /api/member/:id
router.route('/:id').get(controllers.getOne)

export default router
