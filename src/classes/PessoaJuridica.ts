export default class PessoaJuridica {
  private razaoSocial: string;
  private nomeFantasia: string;
  private cnpj: string;

  private atividadePrincipal?: string[] = [];
  private mei?: boolean = false;
  private inscricaoEstadual?: string = "";
  private endereco?: string = "";
  private telefone?: string = "";
  private email?: string = "";
  private dataDeFundacao?: Date;

  constructor(
    razaoSocial: string,
    nomeFantasia: string,
    cnpj: string,

    atividadePrincipal?: string[],
    mei?: boolean,
    inscricaoEstadual?: string,
    endereco?: string,
    telefone?: string,
    email?: string,
    dataDeFundacao?: Date
  ) {
    this.razaoSocial = razaoSocial;
    this.nomeFantasia = nomeFantasia;
    this.cnpj = cnpj;

    this.atividadePrincipal = atividadePrincipal;
    this.mei = mei;
    this.inscricaoEstadual = inscricaoEstadual;
    this.endereco = endereco;
    this.telefone = telefone;
    this.email = email;
    this.dataDeFundacao = dataDeFundacao;
  }

  public getRazaoSocial() {
    return this.razaoSocial;
  }

  public setRazaoSocial(razaoSocial: string) {
    this.razaoSocial = razaoSocial;
  }

  public getNomeFantasia() {
    return this.nomeFantasia;
  }

  public setNomeFantasia(nomeFantasia: string) {
    this.nomeFantasia = nomeFantasia;
  }

  public getCnpj() {
    return this.cnpj;
  }

  public setCnpj(cnpj: string) {
    this.cnpj = cnpj;
  }

  public getAtividadePrincipal() {
    return this.atividadePrincipal;
  }

  public setAtividadePrincipal(atividadePrincipal: string[]) {
    this.atividadePrincipal = atividadePrincipal;
  }

  public getMei() {
    return this.mei;
  }

  public setMei(mei: boolean) {
    this.mei = mei;
  }

  public getInscricaoEstadual() {
    return this.inscricaoEstadual;
  }

  public setInscricaoEstadual(inscricaoEstadual: string) {
    this.inscricaoEstadual = inscricaoEstadual;
  }

  public getEndereco() {
    return this.endereco;
  }

  public setEndereco(endereco: string) {
    this.endereco = endereco;
  }

  public getTelefone() {
    return this.telefone;
  }

  public setTelefone(telefone: string) {
    this.telefone = telefone;
  }

  public getEmail() {
    return this.email;
  }

  public setEmail(email: string) {
    this.email = email;
  }

  public getDataDeFundacao() {
    return this.dataDeFundacao;
  }

  public setDataDeFundacao(dataDeFundacao: Date) {
    this.dataDeFundacao = dataDeFundacao;
  }
}
