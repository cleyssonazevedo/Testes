import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from '../pages/home/home.component';
import { ListarComponent } from '../pages/listar/listar.component';
import { FrameComponent } from '../pages/frame/frame.component';
import { ErrorComponent } from '../pages/error/error.component';

const routes: Route[] = [
    {
        path: '',
        component: AppComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: HomeComponent
            },
            {
                path: 'list',
                component: ListarComponent
            },
            {
                path: 'frame',
                component: FrameComponent
            },
            {
                path: '**',
                component: ErrorComponent
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
