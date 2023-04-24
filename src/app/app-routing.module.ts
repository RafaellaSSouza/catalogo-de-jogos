import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CadastrarComponent } from './components/pages/cadastrar/cadastrar.component';
import { EditarGameComponent } from './components/pages/editar-game/editar-game.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'games/editar/:id', component: EditarGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
