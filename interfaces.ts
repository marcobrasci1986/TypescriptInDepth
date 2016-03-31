import { Category } from './enums';


export interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger
}

export interface DamageLogger {
    (reason: string): void;
}

interface Person{
    name: string;
    email: string;
}

export interface Author extends Person{
    numBookPublished: number;
}
export interface Librarion extends Person{
    department: string;
    assistCustomer: (custName) => void;
}
