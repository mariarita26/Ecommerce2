export interface ICliente {
    id?: string;
    nome: string;
    email: string;
    cpf: string;
    dataDeNascimento: string; // mudar pra tipo data depois 
    senha: string;
    imagem: string;
}
