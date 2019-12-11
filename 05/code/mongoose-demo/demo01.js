import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/test')

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  var kittySchema = mongoose.Schema({
    name: String // 相当于表字段名
  });

  // 相当于创建表 Kitten
  var Cat= mongoose.model('Cat', kittySchema)

  for(let i=0; i<100; i++) {
    var kitty = new Cat({ name: `tom${i}` })
    kitty.save(err => {
      if(err) {
        console.log(err)
      } else {
        console.log('save')
      }
    })
  }
})


