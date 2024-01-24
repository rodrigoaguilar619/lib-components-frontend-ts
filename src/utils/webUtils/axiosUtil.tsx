import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const requestHandler = (request: any) => {
    //TODO: Get username correctly
    request.data.userName = "Rodrigo";
    return request;
}

// Init Axios
export const axiosInstance = axios.create({
    baseURL: '',
    //withCredentials: true
})

// Add interceptors
axiosInstance.interceptors.request.use(
    request => requestHandler(request)
)

//config mocks for development
export function initConfigMocks(mockConfigs: MockConfigI[]) {
    const mock = new MockAdapter(axiosInstance);

    mockConfigs.forEach((config: MockConfigI) => {
        mock.onPost(config.url).reply(config.status, config.response);
    });
}