import {Component, OnInit} from '@angular/core';

@Component({
    selector:'app-warning-alert',
    templateUrl:'./warning-alert-component.component.html',
    styleUrls: ['./warning-alert-component.component.css']
})

export class WarningAlertComponent implements  OnInit {

    warning = 'Not sure what is the warning message';
    constructor() { }
  
    ngOnInit() {
    }
  
  }
  
