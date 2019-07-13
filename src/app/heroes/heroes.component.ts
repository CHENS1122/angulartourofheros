import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) { 
    
  }

  ngOnInit() {
    this.getHeroes();
  }

  private getHeroes() {
    this.heroService.getHeroes().subscribe((heroes) => this.heroes = heroes);
  }

  add(name: string) {
    this.heroService.addHero({name} as Hero).subscribe(hero=>{
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero) {
    console.log(hero);
    this.heroes.splice(this.heroes.findIndex(h=>h==hero), 1);
    this.heroService.deleteHero(hero).subscribe();
  }
}
