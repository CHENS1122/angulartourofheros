import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(private router: ActivatedRoute, 
    private heroSvc: HeroService,
    private location: Location) { 
  }

  ngOnInit() {
    if(!this.hero) {
      var id;
      id = this.router.snapshot.paramMap.get('id');
      if(isNaN(id) == false) {
        this.heroSvc.getHero(id).subscribe(hero => this.hero = hero);
      }
    }
  }

  goBack() {
    this.location.back();
  }

  save() {
    this.heroSvc.updateHero(this.hero).subscribe(()=>this.goBack());
  }
}
