class ApiClient {

  get(url) {
    return fetch(url, {
      method: 'GET'
    })
  }

  post(url, payload= {}) {
    return fetch(url,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(payload)
      })
  }
}

export default ApiClient;
