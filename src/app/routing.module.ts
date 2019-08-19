import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { InjectionToken, NgModule } from '@angular/core';

import { HelloComponent } from './hello.component';
import { NotFoundComponent } from './not-found.component';

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');
const deactivateGuard = new InjectionToken('deactivateGuard');

export const routes: Routes = [
  {
    path: '',
    component: HelloComponent,
    canDeactivate: [deactivateGuard],
  },
  {
    path: 'externalRedirect',
    canActivate: [externalUrlProvider],
    // We need a component here because we cannot define the route otherwise
    component: NotFoundComponent,
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
   providers: [
        {
            provide: externalUrlProvider,
            useValue: (route: ActivatedRouteSnapshot) => {
                
                const externalUrl = route.paramMap.get('externalUrl');
                window.open(externalUrl, '_self');
            },
        },
        {
          provide: deactivateGuard,
          useValue: () => {
            console.log('Guard function is called!')
            
            return false;
          }
        },
    ],
})
export class AppRoutingModule { }