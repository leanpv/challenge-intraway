import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { TableComponent } from './components/table/table.component';
import { RequestComponent } from './components/request/request.component';
import { OutputComponent } from './components/output/output.component';


const routes: Routes = [
  { path: '', redirectTo: 'input', pathMatch: 'full' },
  { path: 'input', component: InputComponent },
  { path: 'output', component: OutputComponent },
  { path: 'table', component: TableComponent },
  { path: 'request', component: RequestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
