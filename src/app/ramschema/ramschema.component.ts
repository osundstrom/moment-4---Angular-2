import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Schema } from '../model/schema';
import { RamschemaService } from '../services/ramschema.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ramschema',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------

sort: string = "choose"; //start på sort

sortDrop(): void { 
  switch(this.sort){ 
    case ("choose"):  

    this.ngOnInit() //så den laddar in orginal igen

    break;

    case ("code"):  
    this.ramschemaList.sort((a, b) => a.code.localeCompare(b.code)); //Sorterar på kurskod
    
    break;

    case ("coursename"):  
    this.ramschemaList.sort((a, b) => a.coursename.localeCompare(b.coursename)); //Sorterar på kursnamn
    
    break;

    case ("progression"):  
    this.ramschemaList.sort((a, b) => a.progression.localeCompare(b.progression)); //Sorterar på progression
    
    break;

  }

}

//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------

searchText: string = ""; //tom sträng

sortSearch(): void {
  let searchLow = this.searchText.toLowerCase();// till lowercase, så vi kan söka bara lowercase
  if (searchLow !== "" ) { //Skilt från tomt
  this.ramschemaList = this.ramschemaList.filter(ramschema => //filtrera för varaje "ramschema" i ramschemaList
    ramschema.code.toLowerCase().includes(searchLow) //kollar code med lowercase alltså att a och A funkar för o hitta
    ||
    ramschema.coursename.toLowerCase().includes(searchLow) //kollar corsename 
    ||
    ramschema.progression.toLowerCase().includes(searchLow)//kollar progression 
  )


  if (!this.ramschemaList.length) { //om listans längd är 0
    this.ngOnInit(); //ladda om hela
  }};

if (!searchLow) { //om inputen är tom
  this.ngOnInit() //ladda om hela
};}




}
