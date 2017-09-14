import {Component, OnInit} from '@angular/core';
import { ScriptService }   from './script.service';

@Component({
    selector: 'app',
    templateUrl: './html/app.component.html',
})
export class AppComponent implements OnInit {
    constructor(
        private script: ScriptService
    ){}

    ngOnInit(): void {
        this.script.loadScript('script').then(data => {
            console.log('script loaded ', data);
        }).catch(error => console.log(error));

        this.script.cufon_init().then(data => {
            console.log('cufon_init');
        }).catch(error => console.log(error));

        this.script.lightbox_init().then(data => {
            console.log('lightbox_init');
        }).catch(error => console.log(error));
    }
}
