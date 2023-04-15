import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {


  constructor(private router:RouterModule,
    public serviceService:ServiceService) { }

  ngOnInit(): void {
  }

  

}
