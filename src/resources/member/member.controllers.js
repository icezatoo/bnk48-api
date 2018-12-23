import { crudControllers } from '../../utils/crud'
import { Member } from './member.model'
import config from '../../config'

export const getFindPage = model => async (req, res) => {
  try {
    const { pagination } = config
    const page = parseInt(req.query.page) || pagination.page
    const limit = parseInt(req.query.limit) || pagination.limit
    const query = req.query.q ? { nickname: req.query.q } : {}

    const doc = await model
      .find(query)
      .sort({ update_at: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean()
      .exec()

    const countMember = await model.count() //  Count Data Model

    if (!doc && !countMember) {
      return res.status(400).end()
    }

    res.status(200).json({
      data: doc,
      page: page,
      limitPage: limit,
      pageCount: countMember,
      totalPage: Math.ceil(countMember / limit)
    })
  } catch (e) {
    console.error(e)
    // res.status(500).send('There was a problem finding the Member.')
    res.status(400).end()
  }
}

export default { ...crudControllers(Member), getFindPage: getFindPage(Member) }
