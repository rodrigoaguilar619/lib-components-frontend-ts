import { MaskDataTypeEnum } from "@app/catalogs/enumCatalog";
import { formatAnswerData, formatCurrency } from "./formatDataUtil";
import { MaskDataPropsI } from "@app/@types/components/dataTable/dataTable";

export function maskData(value: any, maskDataProps?: MaskDataPropsI/*, rowData, executeCustomMaskData*/) {

    let valueFormated = value;

    if (maskDataProps !== undefined && maskDataProps !== null) {

        if (valueFormated === null && maskDataProps.isShowNull)
            return "null";
        else if (valueFormated === null && !maskDataProps.isShowNull)
            return "";

        switch (maskDataProps.maskType) {

            case MaskDataTypeEnum.CURRENCY: {
                let maskCurrencyProps = maskDataProps.maskCurrencyProps;
                valueFormated = formatCurrency(valueFormated, maskCurrencyProps?.decimalPlaces, maskCurrencyProps?.addZeroPad ?? false,
                    maskCurrencyProps?.addSeparateComma ?? false, maskCurrencyProps?.addSymbol ?? false);
                break;
            }
            case MaskDataTypeEnum.ANSWER: {
                valueFormated = formatAnswerData(value);
                break;
            }
        }
    }

    //TODO: add custom mask
    /*if (executeCustomMaskData !== undefined)
        valueFormated = executeCustomMaskData(value, valueFormated, columnProperties, rowData);*/

    return valueFormated;
}