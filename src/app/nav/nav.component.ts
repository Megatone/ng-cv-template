import { Component, OnInit } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers: [NgAnimateScrollService]
})
export class NavComponent implements OnInit {

  private menuOptions = [
    { label: 'Sobre mi', id: 'about' },
    { label: 'Experiencia', id: 'experience' },
    { label: 'Formación', id: 'education' },
    { label: 'Habilidades', id: 'skills' },
    { label: 'Intereses', id: 'interests' },
    { label: 'Awards', id: 'awards' }
  ];

  constructor(
    private scroller: NgAnimateScrollService
  ) { }

  ngOnInit() {
  }

  public navigateSection(section: string): void {
    this.scroller.scrollToElement(section, 500);
  }
}
