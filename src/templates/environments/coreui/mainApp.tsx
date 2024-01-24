import { Component } from 'react';
import MainTemplate from '../../../templates/environments/coreui/template/mainTemplate';
import '../../../scss/environments/coreui/style.scss';

class MainApp extends Component<MainAppPropsI> {

      render() {
        return (
            <MainTemplate {...this.props}  />
        )
      }
}

export default MainApp;