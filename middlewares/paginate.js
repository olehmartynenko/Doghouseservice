export default (req, res, next) => {
  const pageNumber = parseInt(req.query.pageNumber) || 1
  const pageSize = parseInt(req.query.pageSize) || 10
  const offset = (pageNumber - 1) * pageSize
  req.paginate = { offset, pageSize }
  next()
}
