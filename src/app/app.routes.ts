import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailComponent } from './detail/detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { canActivateGuard } from './can-activate.guard';
import { childGuard } from './child.guard';
import { deactivateGuard } from './deactivate.guard';
import { LoginComponent } from './login/login.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskComponent } from './task/task.component';

export const routes: Routes = [
    {
        path: 'list',
        component: ListComponent,
        title: 'List',
        //guardType: [tenGuard]
        // canActivate: [canActivateGuard] //kiểm tra có được truy cập route hay ko?
    },
    {
        path: 'create',
        component: CreateComponent,
        title: 'Create',
        // canDeactivate: [deactivateGuard] //kiểm tra xem ng dùng có được rời khỏi route hay ko?
    },
    {
        path:'create-task',
        component: CreateTaskComponent,
        title:'Task',
    },
    {
        path : 'tasks',
        component: TaskComponent
    },
    {
        path: 'detail/:project',
        component: DetailComponent,
        title: 'Detail',
    },
    {
        path: 'edit/:project',
        component: EditComponent,
    },
    {
        path: 'admin',
        // canActivateChild: [childGuard],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
            },
            {
                path:'login',
                component: LoginComponent,
            },
            {
                path: 'projects',
                children: [
                    {
                        path: 'list',
                        component: ListComponent,
                    },
                    {
                        path: 'create',
                        component: CreateComponent,
                    },
                    {
                        path: 'edit',
                        component: EditComponent,
                    },
                ]
            }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];
