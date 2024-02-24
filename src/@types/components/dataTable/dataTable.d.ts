
export interface MaskDataCurrencyPropsI {
    decimalPlaces?: number,
    addZeroPad?: boolean,
    addSeparateComma?: boolean,
    addSymbol?: boolean
}

export interface MaskDataPropsI {
    maskType: MaskDataTypeEnum;
    isShowNull?: boolean;
    maskCurrencyProps?: MaskDataCurrencyPropsI
}

export interface DataTableAlignsPropsI {
    alignHeader?: "center" | "left" | "right",
    alignCell?: "center" | "left" | "right"
}

export interface DataTableConfigPropsI {
    sortable?: boolean,
    aligns?: DataTableAlignsPropsI, //properties for align header and columns
    styleCss?: CSSProperties,       //properties css for column
    pluginProps?: any                //properties extra for plugin
}

export interface DataTablePropsI {
    field: string,
    header: string,
    tableConfig: DataTableConfigPropsI,
    maskProps?: MaskDataPropsI,
}

export interface DataTableComponentI {
    columnDefList: DataTablePropsI[],
    columnDataList: any[],
    columnOptionsTemplate?: DataTableColumnOptionsPropsI,
    totalRows: number
}

export interface DataTableColumnOptionsPropsI {
    header: string,
    tableConfig: DataTableConfigPropsI,
    actionTemplate?: any,
}