import nc from 'next-connect'
import employers from '../../../src/data/employersdata'

const getEmployer = id => employers.find(n => n.id === parseInt(id))

const employershandler = nc()
  .get((req, res) => {

    const employer = getEmployer(req.query.id)

    if (!employer) {
      res.status(404)
      res.end()
      return
    }

    res.json({data: employer})
  })
  .patch((req, res) => {
    const employer = getEmployer(req.query.id)

    if (!employer) {
      res.status(404)
      res.end()
      return
    }

    const i = employers.findIndex(n => n.id === parseInt(req.query.id))
    const updated = {...employer, ...req.body}

    employers[i] = updated
    res.json({data: updated})
  })
  .delete((req, res) => {
    const employer = getEmployer(req.query.id)

    if (!employer) {
      res.status(404)
      res.end()
      return
    }
    const i = employers.findIndex(n => n.id === parseInt(req.query.id))

    employers.splice(i, 1)

    res.json({data: req.query.id})
  })

export default employershandler
