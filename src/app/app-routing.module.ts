import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent, ListComponent, FrameComponent, NotFoundComponent } from './pages/_pages';
import { GuardService } from './providers/_providers';

const routes: Route[] = [
    {
        path: '',
        component: AppComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: HomeComponent,
            },
            {
                path: 'list',
                component: ListComponent,
                canActivate: [GuardService]
            },
            {
                path: 'frame',
                component: FrameComponent
            },
            {
                path: '**',
                redirectTo: 'error'
            },
            {
                path: 'error',
                component: NotFoundComponent
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: false,
        })
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {  }
