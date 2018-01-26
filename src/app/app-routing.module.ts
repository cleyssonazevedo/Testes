import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from '../pages/home/home.component';
import { ListComponent } from '../pages/listar/list.component';
import { FrameComponent } from '../pages/frame/frame.component';
import { GuardService } from '../providers/guard.service';
import { NotFoundComponent } from '../pages/error/notFound.component';

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
