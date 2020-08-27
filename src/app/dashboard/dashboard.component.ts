import { Component, OnInit } from '@angular/core';
import { CrewService } from '../crew.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public navigationItems: any;
  public value: any;
  pageTitle: string;
  postData:any;
  closeFlag:any;
  constructor(public CrewServices: CrewService) {
  }
  ngOnInit() {
    this.crewData();
  }
  crewData(): void {
    this.navigationItems = this.CrewServices.navigationItems;

  }
  gotoPage(navData) {
    this.postData = navData;
    this.pageTitle = navData.applicationName;
    this.closeFlag = false;
  
  }
}
