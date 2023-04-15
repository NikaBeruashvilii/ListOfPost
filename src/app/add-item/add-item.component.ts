import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(public service:ServiceService, private router:Router) { }

  ngOnInit(): void {
  }
  onFormSubmit(form:NgForm) {
    
    this.service.array.push(form.value);
    this.router.navigate(['/item-list']);
    console.log(this.service.array);
  }


}
