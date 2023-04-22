export class LocalStorageUtils {

  public obterUsuario() {
    return JSON.parse(localStorage.getItem('user_gesinc')!);
  }

  public salvarDadosLocaisUsuario(response: any) {
    console.log(response.user)
    if(response.user){
      this.salvarTokenUsuario(response.token);
      this.salvarPermissoes(response.user.roles)
      this.salvarUsuario(response.user.name);
    }else{

      this.salvarTokenUsuario(response.token);
      this.salvarPermissoes(response.roles)
      this.salvarUsuario(response.name);
    }
  }

  public limparDadosLocaisUsuario() {
    localStorage.removeItem('token_gesinc');
    localStorage.removeItem('user_gesinc');
    localStorage.removeItem('roles_gesinc')
  }

  public obterTokenUsuario(): string {
    return localStorage.getItem('token_gesinc')!;
  }

  public salvarTokenUsuario(token: string) {
    localStorage.setItem('token_gesinc', token);
  }

  public salvarUsuario(user: string) {
    console.log("user",user)
    localStorage.setItem('user_gesinc', JSON.stringify(user));
  }

  public salvarPermissoes(roles: string) {
    console.log("roles",roles)
    localStorage.setItem('roles_gesinc', JSON.stringify(roles));
  }

}
