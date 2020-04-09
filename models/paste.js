var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pasteSchema = new Schema({

  id: { type: String, required: [true, 'err-name-missing'], unique: true },
  text: { type: String, required: [true, 'err-text-missing' ], maxlength: 10000 },
  language: { type: String, required: false },
},
{
    timestamps: true
}     
);

module.exports = mongoose.model('paste', pasteSchema);
