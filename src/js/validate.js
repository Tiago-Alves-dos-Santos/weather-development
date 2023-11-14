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
                let result = null;
                if(Number.isInteger(Number(model))){
                    result = true;
                }else{
                    VALIDATE.messages += `O campo ${name} aceita somente inteiros <br>`;
                    result = false;
                }
                return result;
                break;
            default:

        }
    }
}

export default VALIDATE;