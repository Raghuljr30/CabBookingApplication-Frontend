import { AbstractControl,ValidationErrors,ValidatorFn } from "@angular/forms";

export const passwordValidator:ValidatorFn=(

    control:AbstractControl
):ValidationErrors | null =>{
    return control.value.password1===control.value.password2 ? null : {PasswordNoMatch:true};
};