import { Calendar } from 'primereact/calendar';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { InputElementEnum, InputMaskEnum } from '@app/catalogs/enumCatalog';
import { InputDropDownValueI, InputElementCalendarPropsI, InputElementComponentI, InputElementMaskPropsI, InputElementPropsListI, InputElementSelectPropsI, InputElementTextPropsI } from '@app/@types/components/inputs/inputElement';

/**
   * Retrieves the dropdown value matching the specified code from the given options.
   *
   * @param {InputDropDownValueI[]} options - the array of dropdown value options
   * @param {string} value - the code of the dropdown value to retrieve
   * @return {InputDropDownValueI | null} the dropdown value matching the code, or null if not found
   */
const getDropDownValue = (options: InputDropDownValueI[], value: string) => {
  if (options === undefined || options === null) {
    return null;
  }

  const result = options.find((option) => option.code === value);
  return result ?? null;
}

/**
* Executes the given updateValue function with the provided value.
*
* @param {(value: string) => void} updateValue - The function to update the value
* @param {string} value - The value to update
*/
const executeOnChange = (updateValue: (value: string | number | null) => void, value: string | number | null, executeOnChange?: Function) => {
  let formDataUpdated = updateValue(value);

  if (executeOnChange !== undefined) {
    executeOnChange(formDataUpdated);
  }
}

/**
   * Build input element based on the given props.
   *
   * @param {InputElementSelectPropsI | InputElementTextPropsI} props - the props for the input element
   * @return {JSX.Element} the built input element
   */
const buildInputElement = (props: InputElementPropsListI) => {

  let classNames: string[] = [];

  if (props.isShowError) {
    classNames.push("p-invalid");
  }

  switch (props.inputType) {
    case InputElementEnum.TEXT: {
      const textProps = props as InputElementTextPropsI;
      return <InputText className={classNames.join(" ")}
        value={textProps.value} /*autoFocus*/
        onChange={(e) => executeOnChange(textProps.updateValue, e.target.value, textProps.executeOnChange)} />;
    }
    case InputElementEnum.MASK: {
      const maskProps = props as InputElementMaskPropsI;
      return buildInputMask(maskProps);
    }
    case InputElementEnum.SELECT: {
      const selectProps = props as InputElementSelectPropsI;
      return <Dropdown className={classNames.join(" ")}
        value={getDropDownValue(selectProps.options, selectProps.value)}
        onChange={(e: DropdownChangeEvent) => { executeOnChange(selectProps.updateValue, (e.value?.code ?? null), selectProps.executeOnChange) }} options={selectProps.options} optionLabel="name"
        placeholder={"-- " + (selectProps.placeholder ?? "Select element") + " --"} showClear />
    }
    case InputElementEnum.CALENDAR: {
      const calendarProps = props as InputElementCalendarPropsI;
      return <Calendar className={classNames.join(" ")} dateFormat={calendarProps.dateFormat}
        value={calendarProps.value ? new Date(calendarProps.value) : null}
        onChange={(e) => { executeOnChange(calendarProps.updateValue, (e.value?.getTime() ?? null), calendarProps.executeOnChange) }}
        showButtonBar={true} />
    }
    default:
      return <div>N/A</div>
  }
};

const buildInputMask = (props: InputElementMaskPropsI) => {

  let classNames: string[] = [];

  if (props.isShowError) {
    classNames.push("p-invalid");
  }

  switch (props.maskType) {
    case InputMaskEnum.NUMBER: {
      return <InputNumber className={classNames.join(" ")} value={Number(props.value ?? null)}
        onValueChange={(e) => executeOnChange(props.updateValue, (e.value !== undefined && e.value !== null) ? e.value.toString() : "", props.executeOnChange)}
        maxFractionDigits={props.maskProps?.totalDecimals ?? undefined} minFractionDigits={props.maskProps?.totalDecimals ?? undefined} />;
    }
    case InputMaskEnum.PHONE: {
      return <InputMask value={props.value} unmask={true} autoClear={false} slotChar={""}
        onChange={(e) => { executeOnChange(props.updateValue, e.target.value ?? "", props.executeOnChange) }}
        mask="999-999999" placeholder="999-999999" />
    }
    default:
      return <div>N/A</div>
  }
};

const InputElementComponent: React.FC<InputElementComponentI> = (props) => {

  return (buildInputElement(props.inputProps));
}

export default InputElementComponent