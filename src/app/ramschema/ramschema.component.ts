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
sortedList: Schema[] = []; //Struktur enliogt interface

constructor(private ramshemaservice: RamschemaService) {} //constructor med servicen
ngOnInit() {//använbder ngOnInit
  this.ramshemaservice.getRamschema().subscribe(data => { //Subscribar på getramschema från service
    this.ramschemaList = data; //sätter ramscheamList till data
    this.sortedList = this.ramschemaList; //sätter sortedlist till ramschemalist
  })
}

//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------

sort: string = "choose"; //start på sort

sortDrop(): void { //Funktion sortera via dropdown meny
  switch(this.sort){ 
    case ("choose"):  //vid choose
    this.ngOnInit() //så den laddar in orginal igen
    break;

    case ("code"):  //vid code
    this.sortedList.sort((a, b) => a.code.localeCompare(b.code)); //Sorterar på kurskod
    
    break;

    case ("coursename"):  //vid coursename
    this.sortedList.sort((a, b) => a.coursename.localeCompare(b.coursename)); //Sorterar på kursnamn
    
    break;

    case ("progression"):  //vid progression
    this.sortedList.sort((a, b) => a.progression.localeCompare(b.progression)); //Sorterar på progression
    
    break;

  }

}

//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------

searchText: string = ""; //tom sträng

sortSearch(): void { //funktion för söka

 //this.sortedList = this.ramschemaList;
  
  let searchLow = this.searchText.toLowerCase();// till lowercase, så vi kan söka bara lowercase
 
  if (searchLow !== "" ) { //Skilt från tomt
  this.sortedList = this.ramschemaList.filter(ramschema => //filtrera för varaje "ramschema" i ramshema, till sortedList
    ramschema.code.toLowerCase().includes(searchLow) //kollar code med lowercase alltså att a och A funkar för o hitta
    ||
    ramschema.coursename.toLowerCase().includes(searchLow) //kollar corsename 
    ||
    ramschema.progression.toLowerCase().includes(searchLow)//kollar progression 
    
  ) } else{ //else
    this.sortedList=this.ramschemaList; // så den bblir hela listan om sökrutan är tom. 
  }
  
}};


