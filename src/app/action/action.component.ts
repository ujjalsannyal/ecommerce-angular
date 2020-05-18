import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-cmp',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  @Input() data: any;
  @Input() actionIcon;
  @Output() sortSelect = new EventEmitter<string>();
  public modalActive: boolean;
  public selectedOpt: string;
  public isDesktop: boolean;
  constructor() {
    if(window.innerWidth > 414){
      this.isDesktop = true;
    } else {
      this.isDesktop = false;
    }
   }

  ngOnInit() {
  }

  selectOption($event) {
    $event.stopPropagation();
    this.sortSelect.emit($event.target.value);
  }
  openModal() {
    this.modalActive = true;
  }
  applyOption() {
    this.sortSelect.emit(this.selectedOpt);
    this.modalActive = false;
  }

}
