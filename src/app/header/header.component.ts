import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  missionName: string = "Mars 2030"; g
  rocketName: string = "Plasma Max";
  editingMission: boolean = false;

  // rocket button 
  editingRocket: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  updateMission(updatedName: string) {
    if(updatedName.length > 0){
      this.missionName = updatedName;
      this.editingMission = false;
    } else {
      alert("You Must Enter A Valid Name");
    }
  }
  updateRocket(updatedRocket: string) {
    if(updatedRocket.length > 0){
      this.rocketName = updatedRocket;
      this.editingRocket = false;
    } else {
      alert("You Must Enter A Valid Name");
    }
  }
}
