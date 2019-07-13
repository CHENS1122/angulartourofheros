import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  heroes: Hero[];

  constructor(private msgService:MessageService, private heroSvc: HeroService) {
  
  }

  ngOnChanges() {
      this.msgService.add('ngOnChanged')
  }

  ngOnInit() {
    this.msgService.add('ngOnInit');
    this.heroSvc.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngDoCheck() {
    this.msgService.add('ngDoChecked');
  }

  ngAfterContentInit() {
    this.msgService.add('ngOnAfterContentInit');
  }

  ngAfterContentChecked() {
    this.msgService.add('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.msgService.add('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.msgService.add('ngAfterCngAfterViewCheched');
  }

  ngOnDestroy() {
    this.msgService.add('ngOnDestroy');
  }



  ngOnViewInit() {
    this.msgService.add('ogOnViewInit');
  }

  searchHeros(term: string) {
    
  }

}
