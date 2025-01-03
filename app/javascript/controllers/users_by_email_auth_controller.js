import { Controller } from "@hotwired/stimulus";
import axios from 'axios';

export default class extends Controller {
  static targets = [ 'email', 'submit' ]
  connect() {
    console.log('axios: ', axios)
    console.log('controller is connected: users_by_email_auth');
    // console.log('submitTarget: ', this.submitTarget);
    // console.log('emailTarget: ', this.emailTarget);

    // const uri = 'https://mozilla.org/?x=шеллы';
    // const encoded = encodeURI(uri);
    // console.log('encoded: ', encoded);
    // console.log('decoded: ', decodeURI(encoded));

    (function () {
      'use strict'
      const forms = document.querySelectorAll('.requires-validation')
      Array.from(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
          }
            form.classList.add('was-validated')
          }, false)
        })
      })()

    this.submitTarget.addEventListener('click', (e) => {
      e.preventDefault();

      if (this.emailTarget.value.length === 0) {
        console.log('users_by_email_auth: email empty');

        // email field is empty. so, don't do anything
        // console.log('clicked: email field is empty');
      } else {
        console.log('users_by_email_auth: email set');

        // email field is filled out
        // console.log('clicked: email field is NOT empty', this.emailTarget.value);

        axios.get('/api/users_by_email', {
          headers: {
            Accept: "application/json",
          },
          params: {
            email: this.emailTarget.value
          }
        }).then((response) => {
          console.log('sign_in: ', this.emailTarget.value);
          Turbo.visit('/users/sign_in');
        }).catch((response) => {
          console.log('sign_up: ', this.emailTarget.value);
          Turbo.visit('/users/sign_up');
        })
      }
    });
  }
}
