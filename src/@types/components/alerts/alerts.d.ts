export interface AlertsDataI {
    id: number;
    message: string;
    alertType: AlertTypeEnum;
    summary: string;
}

interface AlertsPropsI {
    isActive: boolean;
    text: string;
}

interface AlertsComponentI {
    alertList: AlertsDataI[];
    store: any;
}