import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeploymentCXOComponent } from './deployment-cxo/deployment-cxo.component';

const routes: Routes = [
  {path:'',component:DeploymentCXOComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
