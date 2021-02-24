var pessoa = require('./pessoa.json')
var skills = require('./skills.json')
var idiomas = require('./idiomas.json')
var experiencia = require('./experiencia.json')
var formacao = require('./formacao.json')

console.log(skills);
console.log(idiomas);
console.log(experiencia);
console.log(formacao);
console.log(pessoa);

module.exports = function (app) {
    app.get('/', function (req, res) {
    
        res.render('index', { pessoa, skills, idiomas, experiencia, formacao })
    })
}
