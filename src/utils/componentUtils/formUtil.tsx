import { FormInputColumnPropsI, FormInputContainerPropsI } from "@app/@types/components/formInputs/formInputs";

/**
 * Builds a form data object from the given form containers.
 *
 * @param {FormInputContainerPropsI[]} formContainers - array of form input container properties
 * @return {Record<string, any>} the form data object
 */
export function buildFormDataContainers(formContainers: FormInputContainerPropsI[]) {

    let formData: Record<string, any> = {};

    formContainers.forEach((formContainerProps: FormInputContainerPropsI) => {
        formContainerProps.inputColumns.forEach((inputColumnProps: FormInputColumnPropsI) => {
            formData[inputColumnProps.id] = inputColumnProps.inputProps.value;
        })
    });

    return formData;
}

/**
 * Builds form data columns from the given form inputs.
 *
 * @param {FormInputColumnPropsI[]} formInputs - array of form input column props
 * @return {Record<string, any>} the formData object containing form data columns
 */
export function buildFormDataColumns(formInputs: FormInputColumnPropsI[]) {

    let formData: Record<string, any> = {};

    formInputs.forEach((inputColumnProps: FormInputColumnPropsI) => {
        formData[inputColumnProps.id] = inputColumnProps.inputProps.value;
    });

    return formData;
}

/**
 * Build form data for multiple form inputs.
 *
 * @param {FormInputColumnPropsI[]} formInputs - array of form input column props
 * @return {Array} array containing the form data columns
 */
export function buildFormDataMultiple(formInputs: FormInputColumnPropsI[]) {

    return [buildFormDataColumns(formInputs)];
}

export function getParameterCall(location: any, props: any) {

    if (location.state?.id) {
        return location.state.id;
    }
    else if (props.id) {
        return props.id;
    }
}