import { ChangeDetectorRef, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoading: Observable<boolean>;

  constructor(
    private loadingService: LoadingService,
    private cdRef: ChangeDetectorRef
  ) {
    this.isLoading = this.loadingService.loading$;
  }

  ngAfterViewInit() {
    this.isLoading.subscribe(() => {
      this.cdRef.detectChanges();
    });
  }
}
