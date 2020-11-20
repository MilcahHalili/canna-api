const db = require('./models')
const data = require('./strains.json')

db.Strain.deleteMany({}, () => {
  db.Strain.create(data.strains, (err) => {
    if (err) console.log(err)
    console.log(data.strains.length, "strains create successfully")

    process.exit()
  })
})