import nc from 'next-connect'
import workers from '../../../src/data/workersdata'

const getWorker = id => workers.find(n => n.id === parseInt(id))

const workershandler = nc()
  .get((req, res) => {

    const worker = getWorker(req.query.id)

    if (!worker) {
      res.status(404)
      res.end()
      return
    }

    res.json({data: worker})
  })
  .patch((req, res) => {
    const worker = getWorker(req.query.id)

    if (!worker) {
      res.status(404)
      res.end()
      return
    }

    const i = workers.findIndex(n => n.id === parseInt(req.query.id))
    const updated = {...worker, ...req.body}

    workers[i] = updated
    res.json({data: updated})
  })
  .delete((req, res) => {
    const worker = getWorker(req.query.id)

    if (!worker) {
      res.status(404)
      res.end()
      return
    }
    const i = workers.findIndex(n => n.id === parseInt(req.query.id))

    workers.splice(i, 1)

    res.json({data: req.query.id})
  })

export default workershandler
