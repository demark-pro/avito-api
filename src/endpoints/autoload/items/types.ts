import type { AdIdable, AvitoIdable } from "../../../types";

export type AutoloadItemStatuses =
    "active" | "old" | "blocked" | "rejected" | "archived" | "removed";

export type AutoloadItemFeeInfo = {
    amount: number | null;
    package_id: number | null;
    type: "single" | "package"
};

export type AutoloadItemMessage = {
    code: number;
    description: string;
    title: string;
    type: "error" | "warning" | "info" | "alarm";
    updated_at: string;
}

export type AutoloadItemSection = {
    slug: string;
    title: string;
}

export interface AutoloadItem extends AdIdable, AvitoIdable {
    avito_date_end: string | null;
    avito_status: AutoloadItemStatuses | null;
    fee_info: AutoloadItemFeeInfo | null;
    messages: AutoloadItemMessage[];
    processing_time: string | null;
    section: AutoloadItemSection;
    url: string | null;
}

export interface AutoloadItemShort extends AdIdable, AvitoIdable { }

export type AutoloadItemFeeTypes = "single" | "package"

export interface AutoloadItemFee extends AdIdable, AvitoIdable {
    fees_amount: number;
    fees_package_id: number | null;
    fees_type: AutoloadItemFeeTypes;
}

export type ListAdIdsAutoloadItemsOptions = {
    /** Список ID объявлений на Авито */
    query: number[];
}

export type ListAvitoIdsAutoloadItemsOptions = {
    /** Список ID объявлений из файла */
    query: string[];
}