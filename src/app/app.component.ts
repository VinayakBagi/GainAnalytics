import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GainAnalytics';
  ngOnInit() {
      $('.back-to-top').click(function () {
        $('html, body').animate({
          scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
      });
  }
}
