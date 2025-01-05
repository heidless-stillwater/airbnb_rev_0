import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ 'signUpLink', 'userAuthLink' ];

  connect() {
    console.log('### modal controller triggered');

    this.element.textContent = "Modal Controller 1";

    this.userAuthLinkTargets.forEach((link) => {
      link.addEventListener('click', () => {
        console.log('user links clicked...');
      });
    });
  }
}
