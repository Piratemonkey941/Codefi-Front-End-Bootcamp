import { Observable } from "rxjs";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";

export interface CanComponentDiactivate {
  canDeactivate: () =>  Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivateGuard<CanComponentDiactivate> {
  canDeactivate(component: CanComponentDiactivate,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
                  return component.canDeactivate();
          }
    }
