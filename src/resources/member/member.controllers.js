import { crudControllers } from '../../utils/crud'
import { Member } from './member.model'
import config from '../../config'

export const getFindPage = model => async (req, res) => {
  try {
    const { pagination } = config
    const page = parseInt(req.query.page) || pagination.page
    const limit = parseInt(req.query.limit) || pagination.limit

    const doc = await model
      .find({})
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
    res
      .status(500)
      .json({ code: 500, message: 'There was a problem finding the Member.' })
    // res.status(400).end()
  }
}

export const getFindMember = model => async (req, res) => {
  try {
    const query = req.query.q
    let doc = []

    if (query) {
      doc = await model
        .find()
        .or([
          { nickname: query.toUpperCase() },
          { english_first_name: query.toUpperCase() }
        ])
        .lean()
        .exec()
    } else {
      doc = await model
        .find()
        .lean()
        .exec()
    }

    if (!doc) {
      return res.status(400).end()
    }

    res.status(200).json({
      data: doc
    })
  } catch (e) {
    console.error(e)
    res
      .status(500)
      .json({ code: 500, message: 'There was a problem finding the Member.' })
    // res.status(400).end()
  }
}

export const memberControllers = {
  ...crudControllers(Member),
  getFindPage: getFindPage(Member),
  getFindMember: getFindMember(Member)
}

export default { ...memberControllers }
