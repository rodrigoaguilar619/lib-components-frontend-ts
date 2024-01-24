interface DataTableAlignsPropsI {
    alignHeader?: "center" | "left" | "right",
    alignCell?: "center" | "left" | "right"
}

interface DataTableConfigPropsI {
    sortable?: boolean,
    aligns?: DataTableAlignsPropsI, //properties for align header and columns
    styleCss?: CSSProperties,       //properties css for column
    pluginProps?: any                //properties extra for plugin
}

interface DataTablePropsI {
    field: string,
    header: string,
    tableConfig: DataTableConfigPropsI
}

interface DataTableComponentI {
    columnDefList: DataTablePropsI[],
    columnDataList: any[],
    totalRows: number
}