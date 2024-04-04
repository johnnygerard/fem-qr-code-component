import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(title: Title) {
    title.setTitle($localize`Frontend Mentor QR code`);
  }
}
