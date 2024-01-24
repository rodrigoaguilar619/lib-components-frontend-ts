import { combineReducers, Reducer } from 'redux';
import { templateHeaderReducer } from './templateHeaderReducer';
import { templateFooterReducer } from './templateFooterReducer';
import { templateMenuReducer } from './templateMenuReducer';
import { RootTemplateStateI } from '../../@types/controller/reducers/_rootTemplateReducer';
import { templateAlertReducer } from './templateAlertsReducer';
import { templateLoadingReducer } from './templateLoadingReducer';

export const rootReducerGroup = {
  templateHeaderState: templateHeaderReducer,
  templateFooterState: templateFooterReducer,
  templateMenuState: templateMenuReducer,
  templateAlertState: templateAlertReducer,
  templateLoadingState: templateLoadingReducer,
}

const rootReducer: Reducer<RootTemplateStateI, any> = combineReducers(rootReducerGroup);

export default rootReducer;