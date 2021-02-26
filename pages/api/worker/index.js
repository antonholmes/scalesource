import nc from 'next-connect'
import workers from '../../../src/data/workersdata'

const workershandler = nc()
  .get((req, res) => {
    res.json({data: workers})
  })
  .post((req, res) => {
    const id = Date.now()
    const worker = {...req.body, id}

    workers.push(worker)
    res.json({data: worker})
})

export default workershandler
