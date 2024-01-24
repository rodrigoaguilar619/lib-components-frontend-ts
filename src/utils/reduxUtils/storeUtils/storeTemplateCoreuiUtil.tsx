
import { createStoreCustom } from './_storeUtil';
import { rootCoreuiReducerGroup } from '../../../templates/environments/coreui/controllers/reducers/_rootCoreuiReducer';

const titleDevTools = "Template mask CoreUI";

export function createStoreTemplateCoreui(combinedReducersGroupExtra: any) {

    const mergedReducers = {
        ...rootCoreuiReducerGroup,
        ...combinedReducersGroupExtra,
    };

    const store = createStoreCustom(mergedReducers, titleDevTools);
    return store;
}