type InputElementPropsListI = InputElementTextPropsI | InputElementSelectPropsI | InputElementCalendarPropsI | InputElementMaskPropsI;

export interface InputDropDownValueI {
    name: string;
    code: string;
}

export interface InputElementPropsI {
    inputType: InputElementEnum;
    value: string;
    isShowError?: boolean;
    updateValue: (value: any) => void;
    executeOnChange?: (formData: Record<string, any>) => void;
}

export interface InputElementMaskPropsI extends InputElementPropsI {
    maskType: InputElementMaskEnum;
    maskProps: InputMaskPropsI
}

export interface InputElementTextPropsI extends InputElementPropsI {
}

export interface InputElementSelectPropsI extends InputElementPropsI {
    options: InputDropDownValueI[],
    placeholder?: string,
}

export interface InputElementCalendarPropsI extends InputElementPropsI {
    value: number | undefined | null;
    dateFormat?: string;
}

export interface InputMaskPropsI {
    totalDecimals?: number;
}

export interface InputElementComponentI {
    inputProps: InputElementPropsListI;
}