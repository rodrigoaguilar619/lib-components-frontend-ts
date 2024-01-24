import { useSelector } from "react-redux";
import { TemplateLoadingStateI } from "../../../../../@types/controller/reducers/templateLoadingReducer";
import LoadingFreezePageComponent from "../../../../../components/loadings/loadingFreezePageComponent";

const LoadingLayout = () => {

    const templateLoadingState: TemplateLoadingStateI = useSelector((state: any) => state.templateLoadingState);
  
    return (
      <LoadingFreezePageComponent isActive={templateLoadingState.isActive} text={templateLoadingState.text} />
    )
  }
  
  export default LoadingLayout
  