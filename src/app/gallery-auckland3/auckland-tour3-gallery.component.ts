import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auckland-tour3-gallery',
  templateUrl: './auckland-tour3-gallery.component.html',
  styleUrls: ['./auckland-tour3-gallery.component.css']
})
export class AucklandTour3GalleryComponent implements OnInit {

  url = 'assets/js/gallery3.js';
  loadAPI: any;
  constructor() { }

  ngOnInit() {
    this.loadAPI = new Promise(resolve => {
      console.log('resolving promise...');
      this.loadScript();
    });
  }
  public loadScript() {
    console.log('preparing to load...');
    const node = document.createElement('script');
    node.src = this.url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
}

}
