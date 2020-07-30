var cursos = [
	{_id: 1, nome: 'x', email: 'ahahahaha@11111.br'},
	{_id: 2, nome: 'y', email: 'ahahahaha@2222222222.br'},
	{_id: 3, nome: 'z', email: 'ahahahaha@333333333.br'}
]

module.exports = function () {
    var controller = {};
    controller.listaCursos = function(req, res) {
        //Retorna a página index.ejs
        res.json(cursos);
    };
controller.obtemCurso = function(req, res){
	console.log('selecionou o contato :'+ req.params.id);
	var idCurso = req.params.id;
	var curso = cursos.filter(function(curso){
	return curso._id == idCurso;
	})[0];
	curso ? res.json(curso) : res.status(404).send('curso nao encontrado!');	
};
    return controller; 
};
