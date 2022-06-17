import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/Service/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private c:CartService) { }
count:any;
counter:any;
  ngOnInit(): void {
 this.count=this.c.getAll().subscribe((r=>{
       this.count=r;
 this.counter=this.count.length;
 console.log(this.counter);    
}
));
 
 
  }

}
