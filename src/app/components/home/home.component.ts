import { Component, AfterViewInit, isPlatformBrowser, Inject, PLATFORM_ID} from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const sections = this.document.querySelectorAll('.fade-in-section');
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1
      });

      sections.forEach(section => {
        observer.observe(section);
      });
    }
  }
}
