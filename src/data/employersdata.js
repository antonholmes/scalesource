const employers = new Array(15)
  .fill(1)
  .map((_, i) => ({
    id: Date.now() + i,
    name: `Employer ${i}`,
    job: `Job ${i}`,
    email: `email ${i}`
  }))

module.exports = employers
