import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: 'server-element.component.html',
    styleUrls: ['server-element.component.css']
})

export class serverElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
    @Input('srvElement') element: {name: string, type: string, content: string} = {name:'',type:'',content:''};

    constructor(){
        console.log('Constructor called!');
    }

    //Lifecycle hooks
    ngOnInit(){
        console.log('ngOnOnit called!');
    }

    ngOnChanges( changes: SimpleChanges ){
        console.log('ngOnChanges called!');
        console.log(changes);
    }

    ngDoCheck(){
        console.log('ngDoCheck called!');
    }

    ngAfterContentInit(){
        console.log('ngAfterContentInit called!');
    }

    ngAfterContentChecked(){
        console.log('ngAfterContentChecked called');
    }

    ngAfterViewInit(){
        console.log('ngAfterViewInit called!');
    }

    ngAfterViewChecked(){
        console.log('ngAfterViewChecked called');
    }

    ngOnDestroy(){
        console.log('ngOnDestroy is called!');
        }
}