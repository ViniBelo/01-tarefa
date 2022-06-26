import Endereco from './Endereco'
import { Sexo } from './Utils'

export default class Usuario{
    private _nome: string
    private _cpf: number
    private _rg: number
    private _endereco: Endereco
    private _sexo: Sexo

    constructor(nome: string, cpf: number, endereco: Endereco){
        this._nome = nome
        this._cpf = cpf
        this._endereco = endereco
    }

    get nome(): string{
        return this._nome
    }

    get cpf(): number{
        return this._cpf
    }

    get endereco(): Endereco{
        return this._endereco
    }

    set rg(rg: number){
        this._rg = rg
    }

    get rg(): number{
        return this._rg
    }

    set sexo(sexo: Sexo){
        this._sexo = sexo
    }

    get sexo(): Sexo{
        return this._sexo
    }
}