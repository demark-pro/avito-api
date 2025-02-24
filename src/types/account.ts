export type AccountItemsStatsItem = {
    date: string,
    uniqContacts?: number,
    uniqFavorites?: number,
    uniqViews?: number
}
export interface AccountItem {
    itemId: number;
    stats: AccountItemsStatsItem[]
}