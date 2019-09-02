import { Injectable } from '@angular/core';
import { from as observableFrom, iif, of as observableOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExternalResourceService {
  private resourceMapping = new Map<string, Event>();

  constructor() {}

  private _resourceLoaded(path: string) {
    return !!this.resourceMapping.get(path);
  }

  loadExternalScript(path: string) {
    return iif(
      () => this._resourceLoaded(path),
      observableOf(this.resourceMapping.get(path)),
      observableFrom(
        new Promise(resolve => {
          const scriptElement = document.createElement('script');
          scriptElement.src = path;
          scriptElement.onload = event => {
            this.resourceMapping.set(path, event);
            resolve(event);
          };
          document.body.appendChild(scriptElement);
        })
      )
    );
  }

  loadExternalStyle(path: string) {
    return iif(
      () => this._resourceLoaded(path),
      observableOf(this.resourceMapping.get(path)),
      observableFrom(
        new Promise((resolve, reject) => {
          const styleElement = document.createElement('link');
          styleElement.rel = 'stylesheet';
          styleElement.href = path;
          styleElement.onload = event => {
            this.resourceMapping.set(path, event);
            resolve(event);
          };
          document.head.appendChild(styleElement);
        })
      )
    );
  }
}
