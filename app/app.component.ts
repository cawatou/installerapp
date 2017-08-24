import { Component }          from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
    <ul>
      <li><a routerLink="/dashboard" routerLinkActive="active">ДОГОВОРЫ</a></li>
      <li><a routerLink="/heroes" routerLinkActive="active">ИСТОРИЯ СЧЕТА</a></li>
      <li><a routerLink="" routerLinkActive="active">БАЗА ЗНАНИЙ</a></li>      
      <li><a routerLink="" routerLinkActive="active">ВАШИ ПРЕДЛОЖЕНИЯ</a></li>
      <li><a routerLink="" routerLinkActive="active">ПЛАНИРОВЩИК</a></li>
    </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TELEDOM MASTER';
}
