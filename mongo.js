//3.12
const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2] //m001-mongodb-basics

const url = `mongodb+srv://aviv:${password}@fullstackopen.wtx72.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url).then(console.log("phonebook:"));

const contactSchema = new mongoose.Schema({
name: String,
number: String,
})

const Contact = mongoose.model('Contact', contactSchema)

if(process.argv[4]){
    const contact = new Contact({
        name: process.argv[3],
        number: process.argv[4]
    })
    contact.save().then(result => {
        console.log(`${contact.name} was saved!`)
        mongoose.connection.close()
    })
}


// Contact.findOneAndDelete({name: "Anna"}).then(result => {
//     console.log(`"Anna" was deleted!`)
//     mongoose.connection.close()
// })

Contact.find({}).then(result => {
    result.forEach(contact => {
      console.log(`${contact.name} ${contact.number}`)
    })
    mongoose.connection.close()
  })

