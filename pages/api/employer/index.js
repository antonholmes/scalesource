import nc from 'next-connect'
import employers from '../../../src/data/employersdata'

  const employershandler = nc()
  .get((req, res) => {
    res.json({data: employers})
  })
  .post((req, res) => {
    const id = Date.now()
    const employer = {...req.body, id}

    employers.push(employer)
    res.json({data: employer})
  })

export default employershandler
