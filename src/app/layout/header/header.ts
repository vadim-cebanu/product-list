import { Component, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  private router = inject(Router);
  path = '';
  btn_text = 'Neues Produkt';

  ngOnInit() {
    this.updateButtonState(this.router.url);
    
    this.router.events.pipe(
    ).subscribe((event: any) => {
      this.updateButtonState(event.url);
    });
  }

  private updateButtonState(url: string) {
    if (url.includes('detail') || url.includes('new-product')) {
      this.path = 'detail';
      this.btn_text = 'Zurück zur Liste';
    } else {
      this.path = '';
      this.btn_text = 'Neues Produkt';
    }
  }

  navigate() {
    if (this.path === 'detail') {
      this.router.navigate(['/products']);
    } else {
      this.router.navigate(['/new-product']);
    }
  }
}