import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotasPage } from './notas/notas.page';
import { AddNotePage } from './add-note/add-note.page';
import { Tab2Page } from './tab2/tab2.page';


const routes: Routes = [
  { path: 'inicioNotas', redirectTo: 'notas', pathMatch: 'full' },
  { path: 'notes', component: NotasPage },
  { path: 'add-note', component: AddNotePage },
  {
    path: 'tab2',
    component: Tab2Page, 
  },
  {
    path: '',
    loadChildren: () => import('./social/register/register.module').then( m => m.RegisterPageModule)
  },  
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },


  {
    path: 'notas',
    loadChildren: () => import('./notas/notas.module').then( m => m.NotasPageModule)
  },
  {
    path: 'add-note',
    loadChildren: () => import('./add-note/add-note.module').then( m => m.AddNotePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
