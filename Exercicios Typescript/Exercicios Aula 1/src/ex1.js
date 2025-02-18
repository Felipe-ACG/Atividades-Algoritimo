var Filme = /** @class */ (function () {
    function Filme(titulo, duracao) {
        this.titulo = titulo;
        this.duracao = duracao;
    }
    Filme.prototype.print = function () {
        console.log("O filme ".concat(this.titulo, " possui ").concat(this.duracao, " min."));
    };
    return Filme;
}());
var a = new Filme("De volta para o futuro", 116);
var b = new Filme("Matrix", 136);
a.print();
b.print();
