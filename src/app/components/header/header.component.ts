import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <div class="bg-state-100 px-4 py-3 shadow-md ">
      <span>{{ title() }}</span>
    </div>
  `,
  styles: ``
})
export class HeaderComponent {
  title = signal<string>('My Store')
}
