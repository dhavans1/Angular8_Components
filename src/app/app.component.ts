import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges{
  serverElements = [{name: 'Server 1',type: 'server', content: 'Sample Content'}];

  onServerAdded(newServerData: {serverName: string, serverContent: string}) {
      this.serverElements.push({
        type: 'server',
        name: newServerData.serverName,
        content: newServerData.serverContent
      });
    }
  
    onBlueprintAdded(newBlueprintData: {blueprintName: string, blueprintContent: string}) {
      this.serverElements.push({
        type: 'blueprint',
        name: newBlueprintData.blueprintName,
        content: newBlueprintData.blueprintContent
      });
    }

    //Lifecycle hooks
    ngOnChanges( changes: SimpleChanges ){
        console.log('App.component.ts ngOnChanges called!');
        console.log(changes);
    }
    
    RemoveFirstSrvOb(){
      this.serverElements.splice(0,1);
      console.log(this.serverElements);
    }
}
