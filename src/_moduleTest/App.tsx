import 'react-app-polyfill/stable'
import 'core-js'
import { useEffect } from 'react'
import store from './controller/store/store'
import MainApp from '../templates/environments/coreui/mainApp'
import routes from '../_moduleTest/config/routers/routes'
import _nav from '../_moduleTest/config/navs/_nav'
import { initConfigMocks } from '../utils/webUtils/axiosUtil'
import { mockApiConfigList } from './config/mock/mockApiConfig'
import { _APP_API_MOCK_IS_LOAD_, _APP_ROUTE_START_ } from '../catalogs/constantCatalog'
import { Provider } from 'react-redux'

const App = () => {

  useEffect(() => {

    if (_APP_API_MOCK_IS_LOAD_ === true) {
      console.log("DEV: init configs mocks");
      initConfigMocks(mockApiConfigList);
    }
  }, []);

  return (
    <Provider store={store}>
    <MainApp
      store={store}
      routesSection={{ routes: routes, routeStart: _APP_ROUTE_START_ }}
      menusSection={{ menuItems: _nav, isFromApi: false }}
    />
    </Provider>)
}

export default App