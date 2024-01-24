import { AlertTypeEnum } from "../../../catalogs/enumCatalog";

export interface TemplateAlertMessageDataI {
    id: number;
    message: string;
    alertType: AlertTypeEnum;
    summary: string;
    timerShowMessageFunction: NodeJS.Timeout;
}

export interface TemplateAlertStateI {
    timeShowing: number;
    messages: TemplateAlertMessageDataI[];
}

export interface TemplateAlertActionI extends TemplateAlertStateI {
    type: string;
}