import { createStore, applyMiddleware, combineReducers, Store, Middleware } from 'redux';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';

import { rootReducerGroup } from '../../../controller/reducers/_rootTemplateReducer';
import { _APP_REDUX_IS_LOAD_LOGGER_ } from '../../../catalogs/constantCatalog';

export function createStoreCustom(combinedReducersGroupExtra: any, titleDevTools: string) {

    type MiddlewareType = Middleware<{}, any, any>;
    const composeEnhancers = composeWithDevTools({ name: titleDevTools });

    const mergedReducers = combineReducers({
        ...rootReducerGroup,
        ...combinedReducersGroupExtra,
    });

    const middlewares: MiddlewareType[] = [thunk];
    
    if (_APP_REDUX_IS_LOAD_LOGGER_ === true)
        middlewares.push(logger as MiddlewareType);


    const store: Store<any, any> & { dispatch: unknown } = createStore(
        mergedReducers,
        composeEnhancers(applyMiddleware(...middlewares))
    );

    return store;
}