

import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crew-service',
  templateUrl: './crew-service.component.html',
  styleUrls: ['./crew-service.component.css']
})
export class CrewServiceComponent implements OnChanges, OnInit {
  public Config: any;
  checked = false;
  select: any;
  timer: any;
  instanceData: any;
  isPOD1:any;
  num:any;
  options: FormGroup;
  @Input() getData: any;
  @Input() close: any;
  
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      settimer: ['', Validators.required],
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    const name: SimpleChange = changes.getData;
    this.isPOD1 = false;
    this.checked = false;
    this.select = null;
    console.log("changes");
  }
  ngOnInit() {
    this.Config = [
      { value: 'SEVERE', viewValue: 'SEVERE' },
      { value: 'Timer', viewValue: 'WARNING' },
      { value: 'Timer', viewValue: 'INFO' },
      { value: 'Timer', viewValue: 'CONFIG' },
    ];
  }
  sendinstanceData(data,i) {
    this.instanceData = data;
    this.num = i;
  }
}
