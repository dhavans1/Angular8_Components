import { Component, EventEmitter, Output, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: 'cockpit.component.html',
  styleUrls: ['cockpit.component.css']  
})

export class cockpitComponent implements OnChanges{

  @Output() addServerEventEmitter = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() addBlueprintEventEmitter = new EventEmitter<{blueprintName: string, blueprintContent: string}>();
  // newServerName = '';
  @ViewChild('ServerContentInput', {static: false}) serverContentInput: ElementRef;

  constructor(){

  }

  onAddServer(serverName: HTMLInputElement) {
      this.addServerEventEmitter.emit({
        serverName: serverName.value, 
        serverContent: this.serverContentInput.nativeElement.value
      });
  }

  onAddBlueprint(serverName: HTMLInputElement, serverContent: HTMLInputElement) {
      this.addBlueprintEventEmitter.emit({
        blueprintName: serverName.value, 
        blueprintContent: this.serverContentInput.nativeElement.value
      });
  }

  //Lifecycle hook
  ngOnChanges(){
    console.log('Cockpit ngOnChanges called!');
  }
}