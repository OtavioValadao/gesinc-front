import { FormGroup } from '@angular/forms';

export class GenericValidator {

  constructor(private validationMessages: ValidationMessages) { }

  processMessages(container: FormGroup): { [key: string]: string } {
    let messages: { [key: string]: string } = {};

    for (let controlKey in container.controls) {
      if (container.controls.hasOwnProperty(controlKey)) {
        let controlProperty = container.controls[controlKey];
        if (controlProperty instanceof FormGroup) {
          let childMessages = this.processMessages(controlProperty);
          Object.assign(messages, childMessages);
        } else {
          if (this.validationMessages[controlKey]) {
            messages[controlKey] = '';
            if ((controlProperty.dirty || controlProperty.touched) && controlProperty.errors) {
              Object.keys(controlProperty.errors).map(messageKey => {
                if (this.validationMessages[controlKey][messageKey]) {
                  messages[controlKey] += this.validationMessages[controlKey][messageKey] + ' ';
                }
              });
            }
          }
        }
      }
    }
    return messages;
  }
}

export interface DisplayMessage {
    [key: string]: string
}
export interface ValidationMessages {
    [key: string]: { [key: string]: string }
}
