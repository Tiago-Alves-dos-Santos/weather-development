let VALIDATE = {
    messages: '',
    validate: (names,arrayModel, rules) => {
        VALIDATE.messages = '';
        // console.log(arrayModel, rules);
        let empty_erros = true;
        for (let i = 0; i < arrayModel.length; i++) {
            for (let j = 0; j < rules[i].length; j++) {
                if (!VALIDATE.validateField(names[i],arrayModel[i], rules[i][j])) {
                    empty_erros = false;
                    //show one error for loop, remove break and show all errors
                    break;
                }
            }
        }
        return empty_erros;
    },
    validateField: (name,model, validate) => {
        let parameter = '';
        if (validate.includes(":")) {
            let separeted = validate.split(":");
            validate = separeted[0];
            parameter = separeted[1];
          }

        switch (validate) {
            case 'required':
                if(model !== undefined && model !== null && model !== ''){//condiontion required served, for error necessary return false
                    return true;
                }else{
                    VALIDATE.messages += `O campo ${name} é requerido <br>`;
                    return false;
                }
                break;
            case 'integer':
                if(Number.isInteger(Number(model))){
                    return true
                }else{
                    VALIDATE.messages += `O campo ${name} aceita somente inteiros <br>`;
                    return false;
                }
                break;
            case 'number':
                
                if(typeof parseFloat(model) === 'number' && !isNaN(model)){
                    return true
                }else{
                    VALIDATE.messages += `O campo ${name} deve ser um valor numérico <br>`;
                    return false;
                }
                break;
            case 'min':
                if(model.length >= parameter){
                    return true;
                }else{
                    VALIDATE.messages += `O campo ${name} deve ter pelo menos ${parameter} caracteres <br>`;
                    return false;
                }
                break;
            case 'max':
                if(model.length <= parameter){
                    return true;
                }else{
                    VALIDATE.messages += `O campo ${name} deve ter no máximo ${parameter} caracteres <br>`;
                    return false;
                }
                break;
            default:

        }
    }
}

export default VALIDATE;