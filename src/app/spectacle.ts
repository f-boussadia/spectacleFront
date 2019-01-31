import { Category } from './category';
import { Session } from './session';
export class Spectacle {
    id: number;
    title: string;
    description: string;
    duration: number;
    price: number;
    nbPlaces: number;
    tabSessions: Session[] = new Array;
    category: Category;
}
