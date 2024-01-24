import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import store from '../../controller/store/store'
import DataTablePrimeReactComponent from '../../../components/dataTable/primeReact/dataTablePrimeReactComponent';
import { getDataTableDataService } from '../../controller/services/DataTableService';
import { debug, generateDebugClassModule } from '../../../utils/webUtils/debugUtil';
import { manageAlertModuleError } from '../../../utils/webUtils/httpManagerUtil';
import { buildAlertErrorRedux } from '../../../utils/componentUtils/alertUtil';
import { setTemplateLoadingActiveMessageAction, setTemplateLoadingIsActiveAction } from '../../../controller/actions/templateLoadingAction';
import { setTemplateHeaderSubTitleAction } from 'src/controller/actions/templateHeaderAction';

const products: any[] = [
    { "initials": "iniciales", "description": "descripcion", "typeStockDescription": "stock" },
    { "initials": "iniciales 2", "description": "descripcion", "typeStockDescription": "stock" },
    { "initials": "iniciales 3", "description": "descripcion", "typeStockDescription": "stock" },
    { "initials": "iniciales", "description": "descripcion", "typeStockDescription": "stock" },
    { "initials": "iniciales 2", "description": "descripcion", "typeStockDescription": "stock" },
    { "initials": "iniciales 3", "description": "descripcion", "typeStockDescription": "stock" },
    { "initials": "iniciales", "description": "descripcion", "typeStockDescription": "stock" },
    { "initials": "iniciales 2", "description": "descripcion", "typeStockDescription": "stock" },
    { "initials": "iniciales 3", "description": "descripcion", "typeStockDescription": "stock" },
    { "initials": "iniciales", "description": "descripcion", "typeStockDescription": "stock" },
    { "initials": "iniciales 2", "description": "descripcion", "typeStockDescription": "stock" },
    { "initials": "iniciales 3", "description": "descripcion", "typeStockDescription": "stock" },
    { "initials": "iniciales", "description": "descripcion", "typeStockDescription": "stock" },
    { "initials": "iniciales 2", "description": "descripcion", "typeStockDescription": "stock" },
    { "initials": "iniciales 3", "description": "descripcion", "typeStockDescription": "stock" },
]

const columnsList: DataTablePropsI[] = [
    {
        field: 'initials', header: 'Issue', tableConfig: {
            aligns: { alignCell: "left" },
            styleCss: { width: "30%" },
        }
    },
    {
        field: 'description', header: 'Description', tableConfig: {
            aligns: { alignCell: "right" },
            styleCss: { width: "30%" }
        }
    },
    {
        field: 'typeStockDescription', header: 'Type stock', tableConfig: {
            styleCss: { width: "30%" }
        }
    }
];

const DataTableComponent = () => {

    const dispatch = useDispatch();
    const [count, setCount] = useState<number>(0);
    const [dataTableList, setDataTableList] = useState<[]>([]);

    useEffect(() => {
        console.log('Component mounted!');
        dispatch(setTemplateHeaderSubTitleAction("Datatable list"));
        
        initModule();
        return () => {
          console.log('Component will unmount!');
        };
      }, []);

    const initModule = () => {

        let debugClass = generateDebugClassModule("init datatable list");
        debug(debugClass, "start");
        
        dispatch(setTemplateLoadingActiveMessageAction(true, "Loading datatable list"));
        axios.all([getDataTableDataService(1)])
            .then(axios.spread((dataDataTable) => {

                debug(debugClass, "result", dataDataTable);
                setDataTableList(dataDataTable.data);
                dispatch(setTemplateLoadingIsActiveAction(false));
            
            }))
            .catch((error) => {
                manageAlertModuleError(store, debugClass, error);
                dispatch(setTemplateLoadingIsActiveAction(false));
            });
    }

    const handleClick = () => {
        buildAlertErrorRedux(store, "Test error " + count);
        setCount(count + 1);
      };

    return (<div>
        <button onClick={() => {handleClick()} }>Click me</button>
        <DataTablePrimeReactComponent columnDefList={columnsList} columnDataList={dataTableList} totalRows={dataTableList.length} />
        </div>
    );
}

export default DataTableComponent