import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-north2',
  templateUrl: './gallery-north2.component.html',
  styleUrls: ['./gallery-north2.component.css']
})
export class GalleryNorth2Component implements OnInit {

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
