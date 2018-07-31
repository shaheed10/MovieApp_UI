import {NgModule} from '@angular/core';
import {Routes,RouterModule} from'@angular/router';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { OmdbComponent } from './omdb/omdb.component';

const routes:Routes=[
    {path:'users',component:UserComponent},
    {path:'post',component:PostComponent},
    {path:'omdb',component:OmdbComponent}
];

@NgModule(
    {
        imports:[RouterModule.forRoot(routes)],
        exports:[RouterModule]
    }
)
export class AppRoutingModule{}
export const routingComponents=[UserComponent,PostComponent]