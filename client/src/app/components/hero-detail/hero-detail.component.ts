import {
  Component,
  OnInit,
  Input
} from "client/client/node_modules/@angular/core/core";
import { Hero } from "../../interfaces/hero";
import { ActivatedRoute } from "client/client/node_modules/@angular/router/router";
import { Location } from "client/client/node_modules/@angular/common/common";

import { HeroService } from "../../services/hero.service";
@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
  }
  save(): void {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }
}
