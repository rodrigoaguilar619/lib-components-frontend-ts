import { DataTablePropsI } from "@app/@types/components/dataTable/dataTable";
import { FormInputContainerPropsI } from "@app/@types/components/formInputs/formInputs";
import { InputElementEnum, MaskDataTypeEnum } from "@app/catalogs/enumCatalog";

const inputIds = {
    text_normal: "text_normal",
    select_normal: "select_normal",
    calendar_normal: "calendar_normal",
}

export const columnsList: DataTablePropsI[] = [
    {
        field: 'answer', header: 'Answer', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "7%" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.ANSWER,
            isShowNull: true
        }
    },
    {
        field: 'currency', header: 'Currency', tableConfig: {
            aligns: { alignCell: "left" },
            styleCss: { width: "7%" }
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY
        }
    },
    {
        field: 'currencyZeroPad', header: 'Currency zeropad 5', tableConfig: {
            aligns: { alignCell: "left" },
            styleCss: { width: "7%" }
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskCurrencyProps: {
                decimalPlaces: 5,
                addZeroPad: true
            }
        }
    },
    {
        field: 'currencySymbol', header: 'Currency Simbol', tableConfig: {
            aligns: { alignCell: "left" },
            styleCss: { width: "7%" }
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskCurrencyProps: {
                addSymbol: true
            }
        }
    },
    {
        field: 'currencyComma', header: 'Currency Commma', tableConfig: {
            aligns: { alignCell: "left" },
            styleCss: { width: "7%" }
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskCurrencyProps: {
                addSeparateComma: true
            }
        }
    },
    {
        field: 'currencyInteger', header: 'Currency Integer', tableConfig: {
            aligns: { alignCell: "left" },
            styleCss: { width: "7%" }
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskCurrencyProps: {
                addSeparateComma: true,
                decimalPlaces: 0
            }
        }
    },
    {
        field: 'currencyAllOptions', header: 'Currency All Options', tableConfig: {
            aligns: { alignCell: "left" },
            styleCss: { width: "7%" }
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskCurrencyProps: {
                decimalPlaces: 5,
                addZeroPad: true,
                addSymbol: true,
                addSeparateComma: true
            }
        }
    }
];

export const filterData: FormInputContainerPropsI = {
    inputColumns: [
        {
            id: inputIds.text_normal, label: "Text Input required", tooltipText: "Text input type required",
            inputProps: {
                inputType: InputElementEnum.TEXT, value: '', updateValue: () => { }
            }
        },
        {
            id: inputIds.select_normal, label: "Select normal",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: null, updateValue: () => { }, options: [
                    { name: 'New York', code: 'NY' },
                    { name: 'Rome', code: 'RM' },
                    { name: 'London', code: 'LDN' },
                    { name: 'Istanbul', code: 'IST' },
                    { name: 'Paris', code: 'PRS' }
                ],
                placeholder: "Select city"
            }
        },
        {
            id: inputIds.calendar_normal, label: "calendar 1",
            inputProps: {
                inputType: InputElementEnum.CALENDAR, value: null, updateValue: () => { }
            }
        },
    ],
    columnstotal: 4,
    containerWidth: "100%"
}