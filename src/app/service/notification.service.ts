import {  Injectable } from "@angular/core";
import { NotifierService } from "angular-notifier";

@Injectable({ providedIn:'root'})
export class NotificationService{

    private readonly notifier: NotifierService;

    constructor(notifierService: NotifierService){
        this.notifier=notifierService;
    }


    onDefault(message: string): void {
        this.notifier.notify(Type.DEFAULT, message);
    }

    onInfo(message: string): void {
        this.notifier.notify(Type.SUCCESS, message);
    }


    onSuccess(message: string): void {
        this.notifier.notify(Type.INFO, message);
    }

    onWarninf(message: string): void {
        this.notifier.notify(Type.WARNING, message);
    }
    onError(message: string): void {
        this.notifier.notify(Type.ERROR, message);
    }


}

enum Type { DEFAULT ='default',
    INFO ='info',
     SUCCESS= 'success',
      WARNING='warning', 
      ERROR='error'}