import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../../service/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
    <div class="bg-state-100 px-4 py-3 shadow-md flex justify-between items-center">
      <span class="text-xl cursor-pointer" routerLink="/">{{ title() }}</span>
      <app-primary-button [label]="'Cart(' + cartService.cart().length + ')'" routerLink="/cart" (btnClicked)="showBtnClicked()"/>
    </div>
  `,
  styles: ``
})
export class HeaderComponent {
  title = signal<string>('My Store')

  cartService = inject(CartService);
  
  showBtnClicked() {
    console.log('btn clicked');
    
  }

}

