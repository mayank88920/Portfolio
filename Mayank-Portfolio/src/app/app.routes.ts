import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { IntroComponent } from './Pages/intro/intro.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { ProjectsComponent } from './Pages/projects/projects.component';


export const routes: Routes = [
    {
        path:'/',
        component: HomeComponent,
        pathMatch: 'full',
      },
      {
        path:'home',
        component: HomeComponent,
        pathMatch: 'full',
      },
      {
        path:'intro',
        component: IntroComponent,
        pathMatch: 'full',
      },
      {
        path:'contact',
        component: ContactComponent,
        pathMatch: 'full',
      },
      {
        path:'projects',
        component: ProjectsComponent,
        pathMatch: 'full',
      },
];
