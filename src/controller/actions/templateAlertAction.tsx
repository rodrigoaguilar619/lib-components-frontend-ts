import { TemplateAlertMessageDataI } from "../../@types/controller/reducers/templateAlertsReducer";
import { AlertTypeEnum } from "../../catalogs/enumCatalog";

export const ACTION_TEMPLATE_ALERT_MESSAGE_SET = "ACTION_TEMPLATE_ALERT_MESSAGE_SET";
export const ACTION_TEMPLATE_ALERT_MESSAGE_LIST_SET = "ACTION_TEMPLATE_ALERT_MESSAGE_LIST_SET";
export const ACTION_TEMPLATE_ALERT_MESSAGE_REMOVE = "ACTION_TEMPLATE_ALERT_MESSAGE_REMOVE";

export const setTemplateAlertMessageAction = (summary: string, message: string, alertType: AlertTypeEnum, id: number, timerShowMessageFunction: NodeJS.Timeout) => ({
    type: ACTION_TEMPLATE_ALERT_MESSAGE_SET,
    message: message,
    alertType: alertType,
    id: id,
    summary: summary,
    timerShowMessageFunction: timerShowMessageFunction
});

export const setTemplateAlertMessagesAction = (messages: TemplateAlertMessageDataI) => ({
    type: ACTION_TEMPLATE_ALERT_MESSAGE_LIST_SET,
    messages: messages
});

export const removeTemplateAlertMessageAction = (id: number) => ({
    type: ACTION_TEMPLATE_ALERT_MESSAGE_REMOVE,
    id: id
});