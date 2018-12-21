import { Router } from 'express'
import controllers from './member.controllers'

const router = Router()

// /api/member
router.route('/').get(controllers.getFindPage)
// /api/member/all
router.route('/all').get(controllers.getFindAll)
// /api/member/:id
router.route('/:id').get(controllers.getById)

export default router
