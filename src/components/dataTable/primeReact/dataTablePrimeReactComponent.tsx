import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { tableConfigDefault } from '../tableConfigDefault';

const DataTablePrimeReactComponent: React.FC<DataTableComponentI> = (props) => {

    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [totalRecordsData, setTotalRecordsData] = useState({ totalRecordsGlobalFilter: null });
    const dt = useRef<DataTable<any>>(null);
    
    const updateTotalRecords = (fieldName: string, value: number | null) => {
        setTotalRecordsData({ ...totalRecordsData, [fieldName]: value });
    };

    //get total rows using as filter the variable "filterGlobalValue"
    const getCountRowsfilterData = (filterGlobalValue: string) => {
        const filteredData = props.columnDataList.filter((item: any) =>
            Object.values(item).some((value) =>
                value && JSON.stringify(value).toLowerCase().includes(filterGlobalValue.toLowerCase())
            )
        );
        return filteredData.length;
    }

    // get the total rows, if  totalRecordsGlobalFilter has data, will takes the total rows with the filter,
    //otherwise return totalRecords 
    const getTotalRows = () => {
        return totalRecordsData.totalRecordsGlobalFilter ?? props.totalRows;
    };

    //event for when input text for global filter is change
    const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const totalRows = getCountRowsfilterData(value);
        setGlobalFilterValue(value);
        updateTotalRecords("totalRecordsGlobalFilter", (value !== null && value !== "") ? totalRows : null);
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <div style={{ display: "flex", width: "100%" }}>
                <div style={{ textAlign: "center", width: "20%", lineHeight: "30px" }}></div>
                    <div style={{ textAlign: "center", width: "60%", lineHeight: "30px" }}><div><b>Title</b></div></div>
                    <div style={{ textAlign: "right", width: "20%" }}>
                        <span className="p-input-icon-left">
                            <i className="pi pi-search" />
                            <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                        </span>
                    </div>
                </div>
            </div>
        );
    };

    const renderFooter = () => {
        return (<div>Total records: {getTotalRows()}</div>)
    };

    const header = renderHeader();
    const footer = renderFooter();

    return (
        <DataTable ref={dt} value={props.columnDataList} tableStyle={{ minWidth: '50rem' }}
            paginator={true} rows={10} footer={footer} header={header} globalFilter={globalFilterValue}
            rowsPerPageOptions={[10, 25, 50]}>
            {props.columnDefList.map((col) => (
                <Column key={col.field}
                    field={col.field}
                    header={col.header}
                    alignHeader={col.tableConfig.aligns?.alignHeader ?? tableConfigDefault.aligns?.alignHeader}
                    align={col.tableConfig.aligns?.alignCell ?? tableConfigDefault.aligns?.alignCell}
                    style={col.tableConfig.styleCss}
                    {...col.tableConfig.pluginProps}
                />
            ))}
        </DataTable>
    )
}

export default DataTablePrimeReactComponent