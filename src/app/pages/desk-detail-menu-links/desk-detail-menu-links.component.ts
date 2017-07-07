import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TourService } from '../../providers/tour.service';
import { MenuLinkService } from '../../providers/menuLink.service';

@Component({
  selector: 'app-desk-detail-menu-links',
  templateUrl: './desk-detail-menu-links.component.html',
  styleUrls: ['./desk-detail-menu-links.component.scss']
})
export class DeskDetailMenuLinksComponent implements OnInit {
  private tourKey: string;
  private menuLinks;

  constructor(private tourService: TourService, private menuLinkService: MenuLinkService) {
    this.tourKey = this.tourService.returnCurrentTourKey();
    }

  ngOnInit() {
    if (this.tourKey) {
      this.menuLinkService.getMenuLinksByTTID(this.tourKey).subscribe((links) => {
        if(links.length>0){
          this.menuLinks = links;
          console.log(this.menuLinks);
        }
      })
    }
  }

}
