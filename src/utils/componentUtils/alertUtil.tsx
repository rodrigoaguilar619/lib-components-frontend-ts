import { TemplateAlertStateI } from "../../@types/controller/reducers/templateAlertsReducer";
import { AlertTypeEnum } from "../../catalogs/enumCatalog";
import { removeTemplateAlertMessageAction, setTemplateAlertMessageAction } from "../../controller/actions/templateAlertAction";

export function buildAlertRedux(store:any, summary: string, message: string, alertType: AlertTypeEnum) {
    
    let templateAlertState: TemplateAlertStateI = {...store.getState().templateAlertState};
    let id: number = new Date().getTime();
    let timer: NodeJS.Timeout = setTimeout(() => {

        store.dispatch(removeTemplateAlertMessageAction(id));
        }, templateAlertState.timeShowing );
    
    store.dispatch(setTemplateAlertMessageAction(summary, message, alertType, id, timer ));
}

export function buildAlertErrorRedux(store:any, message: string) {
    return buildAlertRedux(store, "ERROR", message, AlertTypeEnum.ERROR);
}

export function removeAlertRedux(store:any, id: number) {

    let templateAlertState: TemplateAlertStateI = {...store.getState().templateAlertState};

    templateAlertState.messages.forEach((message) => {
        if (message.id === id) {
            clearTimeout(message.timerShowMessageFunction);
        }
    });

    store.dispatch(removeTemplateAlertMessageAction(id));
}