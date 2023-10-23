import { AlugaArmarioBatCavernaComponent } from './components/aluga-armario-bat-caverna/aluga-armario-bat-caverna.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompraUniformesComponent } from './components/compra-uniformes/compra-uniformes.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginAlunoComponent } from './components/login-aluno/login-aluno.component';
import { LoginIntegranteAPMComponent } from './components/login-integrante-apm/login-integrante-apm.component';
import { CadastroAlunoComponent } from './components/cadastro-aluno/cadastro-aluno.component';
import { CadastroIntegranteApmComponent } from './components/cadastro-integrante-apm/cadastro-integrante-apm.component';
import { ResetarSenhaComponent } from './components/resetar-senha/resetar-senha.component';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';
import { LocalArmarioComponent } from './components/local-armario/local-armario.component';
import { AlugaArmarioOficinaMecanicaComponent } from './components/aluga-armario-oficina-mecanica/aluga-armario-oficina-mecanica.component';

const routes: Routes = [
  { path: 'compra-uniformes', component: CompraUniformesComponent },
  { path: 'local-armario', component: LocalArmarioComponent },
  { path: 'aluga-armario-bat-caverna', component: AlugaArmarioBatCavernaComponent },
  { path: 'aluga-armario-oficina-mecanica', component: AlugaArmarioOficinaMecanicaComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'login-aluno', component: LoginAlunoComponent },
  { path: 'login-integrante-apm', component: LoginIntegranteAPMComponent },
  { path: 'cadastro-aluno', component: CadastroAlunoComponent },
  {
    path: 'cadastro-integrante-apm',
    component: CadastroIntegranteApmComponent,
  },
  { path: 'resetar-senha', component: ResetarSenhaComponent },
  { path: '', component: TelaInicialComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
const appRoutes: Routes = [
  // Outras rotas, se houver
];
