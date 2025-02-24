import type { RequiredNotNull } from "../../../types";

export type AutoloadProfileFeedsDataItem = {
    feed_name: string;
    feed_url: string;
}

export type AutoloadProfileScheduleItem = {
    rate: number;
    time_slots: number[];
    weekdays: number[];
}

export interface AutoloadProfile {
    autoload_enabled: boolean;
    feeds_data: AutoloadProfileFeedsDataItem[] | null;
    report_email: string | null;
    schedule: AutoloadProfileScheduleItem[];
}

export interface AutoloadProfileCreateOrUpdate extends RequiredNotNull<AutoloadProfile, "feeds_data" | "report_email"> {
    agreement?: boolean;
}