import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {
  private route = inject(ActivatedRoute);

  ngOnInit(){
    let currentName = this.route.snapshot.paramMap.get('name');
    if(currentName) this.detail.name = currentName;

     let currentSpecs = this.route.snapshot.paramMap.get('specs');
    if(currentSpecs) this.detail.specs = currentSpecs;
  }

  detail = {
    "name": "detail.name",
    "description": "Eine ergonomische Gaming-Maus mit hoher Präzision und einstellbarer DPI.Ideal für FPS- und MOBA - Spiele, bietet sie eine langlebige Bauweise und komfortable Seitentasten für schnelles Reagieren.",
    "specs": "asdakjv asjdblasid",
    "stock": 120,
    "price": 25000
  }

  deleteDetail() {
    this.detail.name = "";
  }
}