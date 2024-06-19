import { Status } from "../enum/status.enum";

export interface Server {
    filter(arg0: (server: any) => boolean): unknown;

    id: number;
    ipAddress: string;
    name: string;
    memory: string;
    type: string;
    imageUrl: string;
    status: Status;

}