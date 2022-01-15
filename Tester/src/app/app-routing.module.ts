import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './core/layouts/layouts.component';
import { AuthGuard } from './modules/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then((x) => x.HomeModule),
      },
      {
        path: 'editor',
        loadChildren: () =>
          import('./modules/code-editor/code-editor.module').then(
            (x) => x.CodeEditorModule
          ),
      },
      {
        path: 'menu',
        loadChildren: () =>
          import('./modules/admin-panel/menu.module').then((x) => x.MenuModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./modules/user/user.module').then((x) => x.UserModule),
      },
      {
        path: 'lessons',
        loadChildren: () =>
          import('./modules/task/task.module').then((x) => x.TaskModule),
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((x) => x.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
