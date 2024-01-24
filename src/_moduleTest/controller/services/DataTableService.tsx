import { URL_DATATABLE_LIST_GET } from "../../../catalogs/uriCatalog";
import { HttpMethodEnum } from "../../../catalogs/enumCatalog";
import { manageCallApiAuthPromise } from "../../../utils/webUtils/httpManagerUtil";
import { generateDebugClassService } from "../../../utils/webUtils/debugUtil";

export function getDataTableDataService(paramId: number) {

    let debugClass = generateDebugClassService("Get datatable list");

    let params = { paramId: paramId };
    let url = URL_DATATABLE_LIST_GET;
    
    return manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
}