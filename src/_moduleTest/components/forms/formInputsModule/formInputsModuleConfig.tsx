import { FormInputContainerPropsI } from "@app/@types/components/formInputs/formInputs";
import { InputElementEnum, InputMaskEnum } from "@app/catalogs/enumCatalog";

export const inputIds = {
    text_normal: "text_normal",
    text_default_value: "text_default_value",
    select_normal: "select_normal",
    calendar_normal: "calendar_normal",
    calendar_format: "calendar_format",
    validate_email: "validate_email",
    validate_numeric: "validate_numeric",
    validate_number_1: "validate_number_1",
    validate_number_2: "validate_number_2"
}

const cities: any[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

const inputSectionOne: FormInputContainerPropsI = {
    inputColumns: [
        {
            id: inputIds.text_normal, label: "Text Input required", tooltipText: "Text input type required",
            inputProps: {
                inputType: InputElementEnum.TEXT, value: '', updateValue: () => { }
            },
            validations: {
                idValidation: inputIds.text_normal, validatorRules: ["required"]
            }
        },
        {
            id: inputIds.text_default_value, label: "Text Input default value",
            inputProps: {
                inputType: InputElementEnum.TEXT, value: 'Text 2 default', updateValue: () => { }
            },
            validations: {
                idValidation: inputIds.text_default_value, validatorRules: ["required"]
            }
        },
        {
            id: inputIds.select_normal, label: "Select normal",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: null, updateValue: () => { }, options: cities,
                placeholder: "Select city"
            },
            validations: {
                idValidation: inputIds.select_normal, validatorRules: ["required"]
            }
        },
        {
            id: inputIds.calendar_normal, label: "calendar 1",
            inputProps: {
                inputType: InputElementEnum.CALENDAR, value: null, updateValue: () => { }
            },
            validations: {
                idValidation: inputIds.calendar_normal, validatorRules: ["required"]
            }
        },
        {
            id: inputIds.calendar_format, label: "calendar format yy/mm/dd",
            inputProps: {
                inputType: InputElementEnum.CALENDAR, value: null, updateValue: () => { }, dateFormat: "yy/mm/dd"
            },
            validations: {
                idValidation: inputIds.calendar_format, validatorRules: ["required"]
            }
        },
    ],
    columnstotal: 5,
    containerWidth: "100%"
}

const inputSectionTwo: FormInputContainerPropsI = {
    inputColumns: [
        {
            id: inputIds.validate_email, label: "Validate email",
            inputProps: {
                inputType: InputElementEnum.TEXT, value: '', updateValue: () => { }
            },
            validations: {
                idValidation: inputIds.validate_email, validatorRules: ["required", "email"]
            }
        },
        {
            id: inputIds.validate_numeric, label: "Validate numeric with 2 decimals",
            inputProps: {
                inputType: InputElementEnum.MASK, value: '', updateValue: () => { },
                maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
            },
            validations: {
                idValidation: inputIds.validate_email, validatorRules: ["required", "numeric"]
            }
        }
    ],
    columnstotal: 2,
    containerWidth: "80%"
}

const inputSectionThree: FormInputContainerPropsI = {
    inputColumns: [
        {
            id: inputIds.validate_number_1, label: "Validate number 1",
            tooltipText: "This field must be greater than " + inputIds.validate_number_1 + "."
                + "<br/>la rule is added into the component because needs parameter value which be compare to dinamically",
            inputProps: {
                inputType: InputElementEnum.TEXT, value: '', updateValue: () => { }
            },
            validations: {
                idValidation: "validation_number_1", validatorRules: ["required"]
            }
        },
        {
            id: inputIds.validate_number_2, label: "Validate number 2",
            inputProps: {
                inputType: InputElementEnum.TEXT, value: '', updateValue: () => { },
            },
            validations: {
                idValidation: "validation_number_2", validatorRules: ["required"]
            }
        },
    ],
    columnstotal: 2,
    containerWidth: "80%"
}

export const formContainers: FormInputContainerPropsI[] = [inputSectionOne, inputSectionTwo, inputSectionThree];