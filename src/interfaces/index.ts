import { WhereClasule, OrderByClasule, Severity } from "../types";

export interface User {
    uuid: string,
    displayName: string, 
    photoURL?: string
};

export interface Filter {
    where?: Array<WhereClasule>,
    orderBy?: Array<OrderByClasule>,
    limit?: number,
    startAfter?: string
};

export interface Attach {
    name: string,
    type: "pdf" | "txt",
    url: string,
    id: string | number,
    file: File
};

export interface Alert { 
    severity: Severity,
    message: string
};