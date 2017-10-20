import ApiClient from './apiClient.jsx'

class DashboardApiClient extends ApiClient {

  controlSocket(socketNumber, action){
    let payload = {
      'socket': {
        'action': action,
        'socket_number': socketNumber
      }
    };

    return this.post('/dashboard', payload);
  }
}

export default new DashboardApiClient();
