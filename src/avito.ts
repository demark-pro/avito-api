import type { ApiClientOptions } from "./api-client";

import { ApiClient } from "./api-client";
import { AutoloadEndpoint } from "./endpoints";


export class Avito {
    public client: ApiClient;

    public autoload: AutoloadEndpoint;

    constructor(options: ApiClientOptions) {
        this.client = new ApiClient(options);

        this.autoload = new AutoloadEndpoint(this.client);
    }
}