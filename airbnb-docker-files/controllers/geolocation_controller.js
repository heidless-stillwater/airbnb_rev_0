import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  connect() {
    console.log("geolocation_controller triggered...")
    if (this.element.dataset.latitude && this.element.dataset.latitude) {

    } else {
      window.navigator.geolocation.getCurrentPosition((position) => {
        console.log('this.element: ', this.element); 
        this.element.dataset.latitude = position.coords.latitude;
        this.element.dataset.longitude = position.coords.longitude; 
      })
    }
  }
}

