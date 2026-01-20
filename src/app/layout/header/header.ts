import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  btnClassList = "btn btn--primary";
  path = "";
  ngOnInit() {
    this.path = "detail";
  }
}
