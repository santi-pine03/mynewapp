import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];
  seasonsAverage: number = 0;
  constructor(private serieService: SerieService) { }

  getSeries():void{
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.calculateSeasonsAverage();
    });
  }
  ngOnInit() {
    this.getSeries();
  }

  calculateSeasonsAverage(): void {
    const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    this.seasonsAverage = totalSeasons / this.series.length;
  }

}
