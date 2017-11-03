import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { MembersComponent } from './members/members.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { AdminComponent } from './admin/admin.component';
import { YoungGrowersComponent } from './young-growers/young-growers.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'members',
    component: MembersComponent
  },
  {
    path: 'members/:id',
    component: MemberDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'young-growers',
    component: YoungGrowersComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
