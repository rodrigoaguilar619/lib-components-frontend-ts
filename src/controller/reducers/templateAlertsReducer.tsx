import { Reducer } from "redux";
import { TemplateAlertStateI } from "../../@types/controller/reducers/templateAlertsReducer";
import { ACTION_TEMPLATE_ALERT_MESSAGE_LIST_SET, ACTION_TEMPLATE_ALERT_MESSAGE_REMOVE, ACTION_TEMPLATE_ALERT_MESSAGE_SET } from "../actions/templateAlertAction";
import { _APP_ALERT_TIME_TOAST_MILLIS_ } from "../../catalogs/constantCatalog";

const initialState: TemplateAlertStateI = {
    timeShowing: _APP_ALERT_TIME_TOAST_MILLIS_,
    messages: [],
}

export const templateAlertReducer: Reducer<TemplateAlertStateI, any> = (state: TemplateAlertStateI = initialState, action: any) => {
    switch (action.type) {
        case ACTION_TEMPLATE_ALERT_MESSAGE_SET:
            return { ...state, messages: [...state.messages, 
                { message: action.message, alertType: action.alertType, id: action.id,
                    summary: action.summary, timerShowMessageFunction: action.timerShowMessageFunction }] }
        case ACTION_TEMPLATE_ALERT_MESSAGE_LIST_SET:
            return { ...state, messages: action.messages }
            case ACTION_TEMPLATE_ALERT_MESSAGE_REMOVE:
            return { ...state, messages: state.messages.filter((message) => { if (message.id != action.id) return message }) }
        default:
            return state
    }
}