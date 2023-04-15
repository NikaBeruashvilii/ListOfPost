import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { ViewComponent } from './view/view.component';
import { AddItemComponent } from './add-item/add-item.component';

const routes: Routes = [
  { path: "", component: ViewComponent },
  { path: "item-list", component: ItemListComponent},
  { path: "add-item", component: AddItemComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
