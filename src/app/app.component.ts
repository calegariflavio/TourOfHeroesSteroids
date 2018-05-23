import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentLang = "en";

  constructor(private translate: TranslateService) { 
    translate.setDefaultLang(this.currentLang);
    translate.use(this.currentLang);
    this.translate.get(this.currentLang)
      .subscribe(language => this.currentLang = language)
  }
  
  setLang(lang: string): void {
    this.translate.use(lang);
    this.translate.get(lang)
      .subscribe(language => this.currentLang = language)
    
  }
}
