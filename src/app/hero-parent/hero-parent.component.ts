import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.css']
})
export class HeroParentComponent implements OnInit {

  heroes: Hero[];
  master = 'Master';

  constructor(private http: HttpClient, private heroSerivce: HeroService) { }

  ngOnInit() {
    this.heroSerivce.getHeroes().subscribe((heroes)=> this.heroes = heroes);
  }

  checkResponse(event: Event) {
    console.log(event + ", "  + Date.now().toLocaleString());
  }
}
