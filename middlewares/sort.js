export default (req, res, next) => {
  const attribute = req.query.attribute || 'id'
  const order = req.query.order || 'asc'
  req.sort = { attribute, order }
  next()
}
