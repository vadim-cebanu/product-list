import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  list = [
  {
    "name": "Gaming Maus",
    "description": "Eine ergonomische Gaming-Maus mit hoher Präzision und einstellbarer DPI.Ideal für FPS- und MOBA - Spiele, bietet sie eine langlebige Bauweise und komfortable Seitentasten für schnelles Reagieren.",
    "specs": "dpi: 6400, cable length: 1.8m, color: Schwarz",
    "stock": 120,
    "price": 2500000
  },
  {
    "name": "USB-C Kabel",
    "description": "Robustes Ladekabel für Smartphones, Tablets und Laptops. Unterstützt schnelles Laden und Datenübertragung.Perfekt für den täglichen Einsatz zu Hause, im Büro oder unterwegs.",
    "specs": "length: 1m, color: Weiß, type: USB-C zu USB-A",
    "stock": 300,
    "price": 4800
  },
  {
    "name": "Mechanische Tastatur",
    "description": "Hochwertige mechanische Tastatur mit RGB-Hintergrundbeleuchtung. Die schnellen Switches sorgen für präzise Eingaben und langen Schreibkomfort.Ideal für Gamer und Vielschreiber.",
    "specs": "switches: Red, connection: USB, color: Schwarz",
    "stock": 85,
    "price": 79.90
  },
  {
    "name": "HDMI Kabel",
    "description": "Ein zuverlässiges HDMI 2.1 Kabel, das gestochen scharfe Bilder in 4K und 8K Qualität liefert.Geeignet für Fernseher, Monitore, Konsolen und Projektoren.Unterstützt HDR und hohe Bildwiederholraten.",
    "specs": "length: 2m, version: 2.1, color: Schwarz",
    "stock": 250,
    "price": 12.99
  },
  {
    "name": "Externe SSD",
    "description": "Leistungsstarke und kompakte externe SSD für schnelle Datenübertragung.Perfekt für große Dateien, Gaming - Bibliotheken oder als Backup - Lösung. Stoßfestes Gehäuse für den mobilen Einsatz.",
    "specs": "capacity: 1TB, interface: USB 3.2, color: Silber",
    "stock": 60,
    "price": 109.99
  },
  {
    "name": "Bluetooth Kopfhörer",
    "description": "Kabellose Over-Ear Kopfhörer mit klaren Höhen und kräftigem Bass. Dank 20 Stunden Akkulaufzeit und komfortabler Ohrpolster ideal für lange Musik - oder Gaming - Sessions.",
    "specs": "battery life: 20h, color: Schwarz, connection: Bluetooth 5.0",
    "stock": 150,
    "price": 59.95
  },
  {
    "name": "WLAN Router",
    "description": "Leistungsstarker Dual-Band Gigabit Router für schnelles Internet im gesamten Haus.Unterstützt mehrere Geräte gleichzeitig und bietet sichere Verschlüsselung sowie stabile Verbindungen.",
    "specs": "speed: AC1900, ports: 4x LAN, color: Weiß",
    "stock": 40,
    "price": 89.90
  },
  {
    "name": "Webcam",
    "description": "Full HD Webcam mit integriertem Mikrofon für Videokonferenzen, Streaming oder Online - Unterricht.Einfach per USB anschließen, sofort einsatzbereit und kompatibel mit gängigen Programmen.",
    "specs": "resolution: 1080p, connection: USB, color: Schwarz",
    "stock": 95,
    "price": 39.99
  },
  {
    "name": "Powerbank",
    "description": "Kompakte und leistungsstarke Powerbank für unterwegs. Mit 20.000 mAh Kapazität können Smartphones, Tablets oder Kopfhörer mehrfach geladen werden.Ideal für Reisen und Notfälle.",
    "specs": "capacity: 20000mAh, ports: 2x USB-A + 1x USB-C, color: Blau",
    "stock": 180,
    "price": 24.50
  },
  {
    "name": "27 Zoll Monitor",
    "description": "Moderner Full HD Monitor mit IPS Panel für klare Farben und weite Blickwinkel.Perfekt für Arbeit, Gaming oder Entertainment.Mit schlankem Rahmen und neigbarem Standfuß.",
    "specs": "resolution: 1920x1080, refresh rate: 75Hz, color: Schwarz",
    "stock": 35,
    "price": 169.00
  }]
}