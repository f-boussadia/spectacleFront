import { Time } from '@angular/common';
import { Spectacle } from './spectacle';

export class Session {
    id: number;
    date: Date;
    startTime: Time;
    nbRemainingPlaces: number;
    spectacle: Spectacle;
}
