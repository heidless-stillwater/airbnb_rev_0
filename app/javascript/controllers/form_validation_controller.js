import { Controller } from "@hotwired/stimulus";
// import axios from 'axios';

export default class extends Controller {
  static targets = [ 'email', 'submit' ]

    connect() {
      // console.log('axios: ', axios)
      console.log('controller is connected: form_validation');
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



    }
}
