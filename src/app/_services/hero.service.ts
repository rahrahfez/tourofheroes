import { Injectable } from '@angular/core';

import { HEROES } from '../mock-heroes';
import { Hero } from '../_models/hero.model';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
    providedIn: 'root',
})
export class HeroService {

    constructor(private messageService: MessagesService) {}

    getHeroes(): Observable<Hero[]> {
        this.messageService.add('HeroSerivce: fetched heroes');
        return of(HEROES);
    }
}
