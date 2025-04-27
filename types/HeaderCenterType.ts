import { ReactNode } from "react";

export interface HeaderActionType {
    id?: number,
    icon: ReactNode,
    actionCount: number
}

export interface HeaderSearchType {
    id: number;
    name: string;
    image: string;
    icon: string;
    parentCategoryId: number | null;
    createAt: string;
    updateAt: string;
}