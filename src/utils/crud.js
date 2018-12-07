export const getOne = model => async (req, res) => {
  try {
    const doc = await model
      .findById({ _id: req.params.id })
      .lean()
      .exec()

    if (!doc) {
      return res.status(400).end()
    }

    res.status(200).json({ data: doc })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const getFindAll = model => async (req, res) => {
  try {
    const doc = await model
      .find({})
      .lean()
      .exec()

    if (!doc) {
      return res.status(400).end()
    }

    res.status(200).json({ data: doc })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const crudControllers = model => ({
  getOne: getOne(model),
  getFindAll: getFindAll(model)
})
