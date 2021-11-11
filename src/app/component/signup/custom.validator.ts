import { FormGroup } from '@angular/forms';

export function Validation(password: string, confpassword: string){
    return(formgroup: FormGroup) => {
        const pw1 = formgroup.controls[password];
        const pw2 = formgroup.controls[confpassword];

        if(pw1.value !== pw2.value){
            pw2.setErrors({Validation:true});
        }else{
            pw2.setErrors(null);
        }
    }
}