import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr.module').then( m => m.QrPageModule),
    canActivate:[IngresadoGuard]
  
  },
  {
    path: 'clase',
    loadChildren: () => import('./clase/clase.module').then( m => m.ClasePageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'registre',
    loadChildren: () => import('./registre/registre.module').then( m => m.RegistrePageModule),
  },
  {
    path: 'recuperarpassword',
    loadChildren: () => import('./recuperarpassword/recuperarpassword.module').then( m => m.RecuperarpasswordPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: 'cam',
    loadChildren: () => import('./cam/cam.module').then( m => m.CamPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'error404',
    loadChildren: () => import('./error404/error404.module').then( m => m.Error404PageModule)
  },
  {
    path: '**',
    redirectTo: 'error404',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
