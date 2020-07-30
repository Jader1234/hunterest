import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'cadastro-produtos',
    component: CadastroProdutosComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  { 
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
