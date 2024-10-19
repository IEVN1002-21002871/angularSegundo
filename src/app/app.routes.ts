import { Routes } from '@angular/router';
 
export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/features/auth.routes')
  },
  {
    path:'formulario',
    loadChildren:() => import('./formularios/formularios.routes')
  },
  {
    path:'*',
    redirectTo: ''
  }
];
 