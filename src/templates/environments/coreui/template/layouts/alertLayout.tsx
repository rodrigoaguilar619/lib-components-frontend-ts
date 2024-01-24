import { TemplateAlertStateI } from "../../../../../@types/controller/reducers/templateAlertsReducer";
import { useSelector } from "react-redux";
import AlertsComponent from "../../../../../components/alerts/AlertsComponent";

const AlertLayout = (props: { store: any; }) => {

    const templateAlertState: TemplateAlertStateI = useSelector((state: any) => state.templateAlertState);

    return (
        <AlertsComponent alertList={templateAlertState.messages} store={props.store} />
    )
}

export default AlertLayout