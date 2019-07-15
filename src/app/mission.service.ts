import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  // Observable string sources
  private missionAnnoucedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();

  // Observable string streams
  missionAnnounced$ = this.missionAnnoucedSource.asObservable();
  missionConfimed$ = this.missionConfirmedSource.asObservable();

  constructor() { }

  announceMission(mission: string) {
    this.missionAnnoucedSource.next(mission);
  }

  confirmMission(astronaunt: string) {
    this.missionConfirmedSource.next(astronaunt);
  }
}
