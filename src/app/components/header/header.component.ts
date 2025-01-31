import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-state-100 px-4 py-3 shadow-md flex justify-between items-center">
      <span class="text-xl">{{ title() }}</span>
      <app-primary-button [label]="'Cart(' + cartService.cart().length + ')'" (btnClicked)="showBtnClicked()"/>
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

