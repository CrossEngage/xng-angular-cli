import { XeDynamicFormFactories } from 'src/app/core/dynamic-forms/dynamic-form-factories';
import { BackendValidatorService } from 'src/app/shared/validators/backend-subscriber-validator/backend-validator.service';
import { DynamicFormControlConfig } from 'src/app/core/dynamic-forms/dynamic-form-control';

export function TextFieldFactory(backendValidatorService: BackendValidatorService): DynamicFormControlConfig {
  return XeDynamicFormFactories.textFieldFactory(
    {
      name: 'placeholder_field',
      label: 'Placeholder Field',
      placeholder: 'Placeholder Field'
    },
    [
      XeDynamicFormFactories.requiredValidatorConfigFactory(
        'Message'
      ),
      XeDynamicFormFactories.backendValidatorConfigFactory(
        'some.backend.error.key',
        'Message',
        backendValidatorService
      )
    ]
  )
};