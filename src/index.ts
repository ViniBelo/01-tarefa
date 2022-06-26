import Endereco from './Endereco'
import Usuario from './Usuario'
import { Sexo } from './Utils'

let endereco1: Endereco = new Endereco('Capitão Rocha', 1530)
let endereco2: Endereco = new Endereco('Rua XV de Novembro', 732)

endereco1.cep = 85040550
endereco2.cep = 85020025

endereco1.bairro = 'Vila Carli'
endereco2.bairro = 'Boqueirão'

endereco1.cidade = 'Guarapuava'
endereco2.cidade = 'Guarapuava'

let usuario1: Usuario = new Usuario('Cristopher Julius Rock II', 12459688732, endereco1)
let usuario2: Usuario = new Usuario('Cristopher Julius Rock III', 87449522318, endereco2)

usuario1.rg = 155946525
usuario2.rg = 168527598

usuario1.sexo = Sexo.Masculino
usuario2.sexo = Sexo.NaoDeclarado

console.log(usuario1)
console.log(usuario2)