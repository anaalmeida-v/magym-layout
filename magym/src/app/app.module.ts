import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginAlunoComponent } from './components/login-aluno/login-aluno.component';
import { LoginIntegranteAPMComponent } from './components/login-integrante-apm/login-integrante-apm.component';
import { CadastroAlunoComponent } from './components/cadastro-aluno/cadastro-aluno.component';
import { CadastroIntegranteApmComponent } from './components/cadastro-integrante-apm/cadastro-integrante-apm.component';
import { ResetarSenhaComponent } from './components/resetar-senha/resetar-senha.component';
import { CompraUniformesComponent } from './components/compra-uniformes/compra-uniformes.component';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';
import { LocalArmarioComponent } from './components/local-armario/local-armario.component';
import { AlugaArmarioOficinaMecanicaComponent } from './components/aluga-armario-oficina-mecanica/aluga-armario-oficina-mecanica.component';
import { AlugaArmarioBatCavernaComponent } from './components/aluga-armario-bat-caverna/aluga-armario-bat-caverna.component';
import { CamisetasComponent } from './components/camisetas/camisetas.component';
import { CalcaFemininaComponent } from './components/calca-feminina/calca-feminina.component';
import { CamisetaPretaComponent } from './components/camiseta-preta/camiseta-preta.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LoginAlunoComponent,
    LoginIntegranteAPMComponent,
    CadastroAlunoComponent,
    CadastroIntegranteApmComponent,
    ResetarSenhaComponent,
    CompraUniformesComponent,
    TelaInicialComponent,
    LocalArmarioComponent,
    AlugaArmarioOficinaMecanicaComponent,
    AlugaArmarioBatCavernaComponent,
    CamisetasComponent,
    CalcaFemininaComponent,
    CamisetaPretaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
