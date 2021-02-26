const workers = new Array(15)
  .fill(1)
  .map((_, i) => ({
    id: Date.now() + i,
    name: `Worker ${i}`,
    job: `Job ${i}`,
    email: `email ${i}`,
  }))

module.exports = workers
