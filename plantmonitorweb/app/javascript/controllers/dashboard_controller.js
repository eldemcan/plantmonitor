import { Controller } from "stimulus"
import consumer from '../channels/consumer'
class Dashboard extends Controller {
  static targets = [ 'moisture', 'temperature', 'humidity']
  static baseUrl = ''

  connect() {
    let dashboardController = this;

    consumer.subscriptions.create({ channel: 'SensorDataChannel' }, {
      received(data) {
        console.log('received', data)
        dashboardController.moistureTarget.innerText = data.moisture
        dashboardController.temperatureTarget.innerText = data.temperature
        dashboardController.humidityTarget.innerText = data.humidity
      },
      connected() {
        console.log('connected')
      },

    })
  }
}


export default  Dashboard;