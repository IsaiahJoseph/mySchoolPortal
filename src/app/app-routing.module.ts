import { Routes } from "@angular/router";

export const AppRoutes:Routes = [
 
  
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
]
