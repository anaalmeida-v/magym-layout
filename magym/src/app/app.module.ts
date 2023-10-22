import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginAlunoComponent } from './components/login-aluno/login-aluno.component';
import { LoginIntegranteAPMComponent } from './components/login-integrante-apm/login-integrante-apm.component';
import { CadastroAlunoComponent } from './components/cadastro-aluno/cadastro-aluno.component';
import { CadastroIntegranteApmComponent } from './components/cadastro-integrante-apm/cadastro-integrante-apm.component';
import { EsqueceuSenhaComponent } from './components/esqueceu-senha/esqueceu-senha.component';
import { ResetarSenhaComponent } from './components/resetar-senha/resetar-senha.component';
import { CompraUniformesComponent } from './components/compra-uniformes/compra-uniformes.component';
import { AluguelArmariosComponent } from './components/aluguel-armarios/aluguel-armarios.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'compra-uniformes', component: CompraUniformesComponent },
  { path: 'usuario', component: UsuarioComponent },
  // Outras rotas, se houver
];

@NgModule({
  imports: [
    // ... outros módulos
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
    UsuarioComponent,
    LoginAlunoComponent,
    LoginIntegranteAPMComponent,
    CadastroAlunoComponent,
    CadastroIntegranteApmComponent,
    EsqueceuSenhaComponent,
    ResetarSenhaComponent,
    CompraUniformesComponent,
    AluguelArmariosComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
