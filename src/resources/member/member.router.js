import { Router } from 'express'
import controllers from './member.controllers'

const router = Router()

// /api/member/pagination
router.route('/pagination').get(controllers.getFindPage)
// /api/member/  or   /api/member/?q
router.route('/').get(controllers.getFindMember)
// /api/member/:id
router.route('/:id').get(controllers.getById)

export default router
