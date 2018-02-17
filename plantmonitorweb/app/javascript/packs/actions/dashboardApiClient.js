import ApiClient from './apiClient.jsx';

class DashboardApiClient {

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

export default DashboardApiClient;
