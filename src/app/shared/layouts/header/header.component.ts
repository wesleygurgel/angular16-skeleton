import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { TokenService } from 'src/app/core/services/token.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isAuthenticated$;
  isSmallScreen$: Observable<boolean>;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.isAuthenticated$ = this.tokenService.isAuthentication;
    this.isSmallScreen$ = this.breakpointObserver.observe([Breakpoints.Handset])
      .pipe(
        map(result => result.matches)
      );
  }

  onLogout() {
    this.authService.onLogout();
  }
}
