import DebugClass from "../../classes/debugClass";
import { axiosInstance } from "./axiosUtil";
import { HttpMethodEnum } from "../../catalogs/enumCatalog";
import { debug, debugError } from "./debugUtil";
import { HttpStatusCode } from "axios";
import { buildAlertErrorRedux } from "../componentUtils/alertUtil";

export function manageCallApiAuthPromise(debugClass: DebugClass, url: string, params: Record<string, any>, config: Record<string, any>, httpMethod: HttpMethodEnum) {

    debug(debugClass, "start", { url: url, params });

    const axiosMethod = httpMethod === HttpMethodEnum.POST ? axiosInstance.post : axiosInstance.get;

    return axiosMethod(url, params, config)
        .then(({ data }) => {

            debug(debugClass, "result", data);
            return Promise.resolve(data);
        })
        .catch((error) => {
            debugError(debugClass, error);
            return Promise.reject(error);
        });
}

export function manageAlertModuleError(store: any, debugClass: DebugClass, error: any) {

    try {

        let errorMessage = "";

        if (error.response !== undefined) {
            
            if(error.response.status === HttpStatusCode.UnprocessableEntity) {
                errorMessage = error.response.data.message;
            }
            else if(error.response.status === HttpStatusCode.NotFound) {
                errorMessage = "Error api not found";
            }
            else if(error.response.status === HttpStatusCode.InternalServerError) {
                errorMessage = "Error internal server";
            }
            else
                errorMessage = "Error with status:" + error.response.status;
        }
        else if (error.message !== undefined) {
            errorMessage = error.message;
        }
        else
            errorMessage = "Error unhandled";

        debugError(debugClass, "<" + errorMessage + ">", error);
        buildAlertErrorRedux(store, errorMessage);
    }
    catch(errorCatch) {
        debugError(debugClass, "Error manage module", errorCatch);
    }
}