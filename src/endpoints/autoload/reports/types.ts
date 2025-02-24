import type {
  ItemsResponse,
  PaginatableQuery,
  PaginatableResponse,
} from "../../../types";
import type {
  AutoloadItem,
  AutoloadItemFee,
  AutoloadItemSection,
} from "../items";

export type AutoloadReportSourses = "email" | "url" | "web" | "openapi";
export type AutoloadReportStatuses =
  | "processing"
  | "success"
  | "success_warning"
  | "error";

export type AutoloadReportEvent = {
  code: number;
  description: string;
  type: string;
};

export type AutoloadReportFeedUrl = {
  name: string;
  url: string;
};

export interface AutoloadReportSection extends AutoloadItemSection {
  count: number;
  sections: AutoloadReportSection[];
}

export interface AutoloadReport {
  events: AutoloadReportEvent[];
  feeds_urls: AutoloadReportFeedUrl[];
  finished_at: string;
  listing_fees: []; //
  report_id: number;
  section_stats: { count: number; sections: AutoloadReportSection[] };
  source: AutoloadReportSourses;
  started_at: string;
  status: AutoloadReportStatuses;
}

export interface AutoloadReportShort
  extends Pick<AutoloadReport, "finished_at" | "started_at" | "status"> {
  id: number;
}

export interface AutoloadReportItem extends Omit<AutoloadItem, "fee_info"> {
  applied_vas: any[]; // TODO
  feed_name: string;
}

export type ListAutoloadReportsOptions = PaginatableQuery<{
  dateFrom?: string;
  dateTo?: string;
}>;

export type ListAutoloadReports = PaginatableResponse<{
  reports: AutoloadReportShort[];
}>;

export type GetAutoloadReportsItemsOptions = {
  query: string[];
};

export type GetAutoloadReportItemsOptions = PaginatableQuery<{
  query?: string[];
  sections?: string[];
}>;

export type ListAutoloadReportItems = ItemsResponse<AutoloadReportItem> &
  PaginatableResponse<{
    report_id: number;
  }>;

export type ListAutoloadReportItemsFeesOptions = PaginatableQuery<{
  adIds?: string[];
  avitoIds?: number[];
}>;

export type ListAutoloadReportItemsFees = PaginatableResponse<{
  fees: AutoloadItemFee[];
  report_id: number;
}>;
