import { Component } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private themeService: ThemeService) {
    this.themeService.isDarkTheme.subscribe((isDark) => {
      if(isDark){
        document.body.classList.add('dark');
      }else{
        document.body.classList.remove('dark');
      }
    });
  }
}
