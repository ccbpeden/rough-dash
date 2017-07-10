import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { TourService } from '../../providers/tour.service';
import { MenuLinkService } from '../../providers/menuLink.service';

@Component({
  selector: 'app-desk-detail-menu-links',
  templateUrl: './desk-detail-menu-links.component.html',
  styleUrls: ['./desk-detail-menu-links.component.scss']
})
export class DeskDetailMenuLinksComponent implements OnInit, OnDestroy {
  private tourKey: string;
  public menuLinks;
  private menuLinksSubscription: ISubscription;

  constructor(private tourService: TourService, private menuLinkService: MenuLinkService) {
    this.tourKey = this.tourService.returnCurrentTourKey();
    }

  ngOnInit() {
    if (this.tourKey) {
      this.menuLinksSubscription = this.menuLinkService.getMenuLinksByTTID(this.tourKey).subscribe((links) => {
        if(links.length>0){
          this.menuLinks = links;
          console.log(this.menuLinks);
        }
      })
    }
  }

  ngOnDestroy() {
    this.menuLinksSubscription.unsubscribe();
  }

}
