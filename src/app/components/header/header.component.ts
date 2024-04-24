import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
  <h1 class="bg-blue-700 text-white m-1 p-2 text-xl font-serif cursor-pointer rounded-sm " routerLink="/products" >Product Management </h1>
  `,
  styles: ``
})
export class HeaderComponent {

}

