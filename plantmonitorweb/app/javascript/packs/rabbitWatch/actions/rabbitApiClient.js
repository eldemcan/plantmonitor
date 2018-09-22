import ApiClient from './apiClient.jsx';

class JobsApiClient {

  static getTaskTypes() {
    return ApiClient.get('/rabbitwatch/tasks').then(data => data.json());
  }

  static getRunningJobs() {
    return ApiClient.get('/rabbitwatch/fetch_jobs').then(data => data.json());
  }

  static postJobParams(payload) {
    return ApiClient.post('/rabbitwatch/create', payload);
  }

  static controlSocket(socketNumber, action) {
    const payload = {
      socket: {
        state: action,
        socket_number: socketNumber,
      },
    };

    return ApiClient.post('/dashboard', payload);
  }

  static getSocketState(socketNumber) {
    const payload = {
      socket_number: socketNumber,
    };

    const endPoint = this.addParamsToUrl('dashboard/socket_state', payload);

    return ApiClient.get(endPoint, payload).then(state => state.json());
  }

  static addParamsToUrl(url, params) {
    const paramString = Object.keys(params).map(element =>
      `${element}=${params[element]}`
    );

    return `${url}?${paramString}`;
  }
}

export default JobsApiClient;
