import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Schema } from '../model/schema';
import { RamschemaService } from '../services/ramschema.service';

@Component({
  selector: 'app-ramschema',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ramschema.component.html',
  styleUrl: './ramschema.component.scss'
})
export class RamschemaComponent {

ramschemaList: Schema[] = [];//Struktur enligt interface

constructor(private ramshemaservice: RamschemaService) {} //constructor med servicen
ngOnInit() {//använbder ngOnInit
  this.ramshemaservice.getRamschema().subscribe(data => { //Subscribar på getramschema från service
    this.ramschemaList = data; //sätter ramscheamList till data
  })
}


}
