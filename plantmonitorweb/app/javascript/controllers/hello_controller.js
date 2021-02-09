// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

class Hello extends Controller {
  static targets = [ "status", "nums", "jobs", "createJob", "time" ]
  static baseUrl = ''

  constructor(...args) {
    super(...args)
  }

  connect() {
    console.log('hello from fecking stimulus')
   }
}

export default  Hello ;