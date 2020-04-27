import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InformativeService } from './service/home.service';
import { Informative } from 'shared/informative';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public folder: string;
  public informatives: Informative[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private informativeService: InformativeService
  ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.informativeService.getInformatives().subscribe(response => this.informatives = response);
  }

  like(informative: Informative): void {
    this.informativeService.likeInformative(informative._id, { ...informative, liked: !informative.liked }).subscribe(
      response => {
        informative.liked = response.liked;
      }
    );
  }

}
