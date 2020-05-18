import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-action-filter',
  templateUrl: './action-filter.component.html',
  styleUrls: ['./action-filter.component.scss']
})
export class ActionFilterComponent implements OnInit {

  @Input() data: any;
  @Input() actionIcon;
  @Output() rangeSelect = new EventEmitter<string>();
  public modalActive: boolean;
  public isDesktop: boolean;
  public minValue = 10;
  public maxValue = 4000;
  public options: Options = {
    floor: this.minValue,
    ceil: this.maxValue,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '&#8377;' + value;
        case LabelType.High:
          return '&#8377;' + value;
        default:
          return '&#8377;' + value;
      }
    }
  };
  public selectedMinValue = this.minValue;
  public selectedMaxValue = this.maxValue;

  constructor() {
    if(window.innerWidth > 414){
      this.isDesktop = true;
    } else {
      this.isDesktop = false;
    }
  }
  ngOnInit() {
  }
  openModal() {
    this.modalActive = true;
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  apply() {
    this.rangeSelect.emit(JSON.stringify({
      min: this.selectedMinValue,
      max: this.selectedMaxValue
    }));
    this.modalActive = false;
  }

  sliderChangeMin(min) {
    this.selectedMinValue = min;
  }
  sliderChangeMax(max) {
    this.selectedMaxValue = max;
  }

}
