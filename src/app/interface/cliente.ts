export interface ICliente {
    id?: number;
    nome: string;
    email: string;
    cpf: string;
    dataDeNascimento: string; // mudar pra tipo data depois 
    senha: string;
    imagem: string;
}
