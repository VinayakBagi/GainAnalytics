import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter} from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  addHeaderFix: boolean;
  showDomains = false;
  showMenu = false;
  faCheronDown = true;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if(!this.addHeaderFix) {
      if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 100)) {
        document.getElementById('header').classList.add('header-fixed');
      } else {
        document.getElementById('header').classList.remove('header-fixed');
      }
    }
  }
  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(res => {
      this.showDomains = false
      if (this.router.url == "/") {
        this.addHeaderFix = false;
      } else {
        this.addHeaderFix = true;
      }
    });
  }

  ngOnInit(): void {
  }

  toggleDropdown() {
    this.showDomains = !this.showDomains
    this.faCheronDown = !this.faCheronDown
  }

}
