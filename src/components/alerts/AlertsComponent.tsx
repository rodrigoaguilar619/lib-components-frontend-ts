import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { AlertTypeEnum } from '../../catalogs/enumCatalog';
import { removeAlertRedux } from '../../utils/componentUtils/alertUtil';
import { AlertsComponentI, AlertsDataI } from '../../@types/components/alerts/alerts';

const AlertsComponent: React.FC<AlertsComponentI> = (props) => {
    
    const [msgList, setMsgList] = useState<React.ReactNode[]>([]);

    useEffect(() => {

        buildAlerts(props.alertList);

        return () => {
        };
    }, [props.alertList]);

    const buildAlerts = (messages: AlertsDataI[]) => {

        let msgList: React.ReactNode[] = messages.map((message, index) => {
            return buildAlert(message, index);
        });

        setMsgList(msgList);
    }

    const buildAlert = (message: AlertsDataI, key: number) => {
        let severity = "";
    
        if (message.alertType === AlertTypeEnum.ERROR)
            severity = "danger";
    
        return (<div key={key + "_" + message.id}><Alert variant={severity} onClose={() => { removeAlertRedux(props.store, message.id) }} dismissible>
        <b>{message.summary}</b> {message.message}
      </Alert></div>)
    }

    return (
        <div className="message">{msgList}</div>
    )
}

export default AlertsComponent