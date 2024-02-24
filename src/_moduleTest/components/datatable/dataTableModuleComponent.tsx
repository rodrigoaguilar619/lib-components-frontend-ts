import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { faHammer, faHome, faTrash } from '@fortawesome/free-solid-svg-icons';
import { getDataTableDataService } from '@app/_moduleTest/controller/services/DataTableService';
import ModalComponent from '@app/components/modals/modalComponent';
import DataTableComponent from '@app/components/dataTable/dataTableComponent';
import FilterAccoridionComponent from '@app/components/filterAccordion/filterAccordionComponent';
import { debug, generateDebugClassModule } from '@app/utils/webUtils/debugUtil';
import { manageAlertModuleError } from '@app/utils/webUtils/httpManagerUtil';
import { buildAlertErrorRedux } from '@app/utils/componentUtils/alertUtil';
import { buildFormDataContainers } from '@app/utils/componentUtils/formUtil';
import { setTemplateLoadingActiveMessageAction, setTemplateLoadingIsActiveAction } from '@app/controller/actions/templateLoadingAction';
import { setTemplateHeaderSubTitleAction } from '@app/controller/actions/templateHeaderAction';
import { columnsList, filterData } from './dataTableModuleConfig';
import { tableOptionsTemplateDefault } from '@app/components/dataTable/tableConfigDefault';
import useHookModal from '@app/hookStates/modalHookState';
import { TooltipConfigButtonNestedOptions, TooltipConfigCustom, TooltipConfigInputHelp } from '@app/components/tooltip/tooltipConfigComponents';
import { ButtonCustomComponent, ButtonDataTableOptionComponent, ButtonDataTableOptionNestedComponent, ButtonWithNestedOptionsComponent, ButtonsOrganizerComponent } from '@app/components/elements/buttonComponents';
import { ComponentTypeEnum } from '@app/catalogs/enumCatalog';
import { ROUTE_FORMS_FORM_INPUTS } from '@app/_moduleTest/config/catalogs/routesCatalog';
import { useNavigate } from 'react-router-dom';
import { DataTableColumnOptionsPropsI } from '@app/@types/components/dataTable/dataTable';

const DataTableModuleComponent: React.FC<DataTableModulePropsI> = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [count, setCount] = useState<number>(0);
    const [dataTableList, setDataTableList] = useState<[]>([]);
    const [formFilterData, setFormFilterData] = useState<Record<string, any>>({});
    const [modalState, setOpenModal, setCloseModal, setBodyModal, setTitleModal] = useHookModal();
    const optionsTemplate: DataTableColumnOptionsPropsI = tableOptionsTemplateDefault;

    const FormInputsModuleComponent = React.lazy(() => import('@app/_moduleTest/components/forms/formInputsModule/formInputsModuleComponent'))

    useEffect(() => {

        dispatch(setTemplateHeaderSubTitleAction("Datatable list"));
        optionsTemplate.actionTemplate = actionTemplate;
        setFormFilterData(buildFormDataContainers([filterData]));

        initModule();
        return () => {
        };
    }, []);

    const initModule = () => {

        executeGetDataTableList();
    }

    const executeGetDataTableList = () => {

        let debugClass = generateDebugClassModule("init datatable list");
        debug(debugClass, "start");

        dispatch(setTemplateLoadingActiveMessageAction(true, "Loading datatable list"));
        axios.all([getDataTableDataService(1, formFilterData)])
            .then(axios.spread((dataDataTable) => {

                debug(debugClass, "result", dataDataTable);
                setDataTableList(dataDataTable.data);
                dispatch(setTemplateLoadingIsActiveAction(false));

            }))
            .catch((error) => {
                manageAlertModuleError(dispatch, props.componentType, debugClass, error);
                dispatch(setTemplateLoadingIsActiveAction(false));
            });
    }

    const executeFilterSearch = () => {
        console.log("executeFilterSearch", formFilterData);
        executeGetDataTableList();
    }

    const openFormInputModuleRoute = (id: string) => {
        navigate(ROUTE_FORMS_FORM_INPUTS, { state: { id: id } });
    };

    const executeFilterSearchOnchage = (formData: Record<string, any>) => {
        console.log("executeFilterSearch on search", formData);
    }

    const actionTemplate = (rowData: any, column: any) => {

        let modalBody = <div>rowData:&nbsp;{JSON.stringify(rowData)}<br></br>columns:&nbsp;{JSON.stringify(column.field)}</div>;

        let buttonOptions = [];
        let buttonNestedOptions = [];

        buttonNestedOptions.push(<ButtonDataTableOptionNestedComponent icon={faHammer} onClick={() => { setTitleModal("DATA ROW"); setBodyModal(modalBody); setOpenModal() }} tooltip="Show modal row data" />);
        buttonNestedOptions.push(<ButtonDataTableOptionNestedComponent icon={faTrash} onClick={() => { }} tooltip="trash" />);

        buttonOptions.push(<ButtonDataTableOptionComponent icon={faHome} onClick={() => { openFormInputModuleRoute(rowData.id) }} tooltip='Open form input module on route' />);
        buttonOptions.push(<ButtonDataTableOptionComponent icon={faHammer} onClick={() => { setTitleModal("FORM INPUTS TEST"); setBodyModal(<FormInputsModuleComponent componentType={ComponentTypeEnum.POPUP} id={rowData.id} />); setOpenModal() }} tooltip='Open form input module on popup' />);
        buttonOptions.push(<ButtonWithNestedOptionsComponent idTooltip={rowData.id} buttonOptions={buttonNestedOptions} />);

        return (<ButtonsOrganizerComponent buttonOptions={buttonOptions} />);
    }

    const handleClick = () => {
        buildAlertErrorRedux(dispatch, props.componentType, "Test error " + count);
        setCount(count + 1);
    };

    return (<div>
        <ModalComponent title={modalState.titleModal} visible={modalState.showModal} selectorCloseModal={setCloseModal}
            body={modalState.bodyModal} size='sm' />
        <div style={{ display: "flex", gap: "3px" }}>
            {<ButtonCustomComponent label="Generate alert error" onClick={handleClick} />}
        </div>
        <br></br>
        <FilterAccoridionComponent
            formContainer={filterData}
            title="Filter"
            formData={formFilterData}
            executeFilterSearch={executeFilterSearch}
            selectorUpdateFormData={setFormFilterData}
            executeFilterSearchOnChange={executeFilterSearchOnchage.bind(null)} />
        <DataTableComponent columnDefList={columnsList} columnDataList={dataTableList}
            columnOptionsTemplate={optionsTemplate} totalRows={dataTableList.length} />
        <TooltipConfigInputHelp />
        <TooltipConfigCustom />
        <TooltipConfigButtonNestedOptions />
    </div>
    );
}

export default DataTableModuleComponent