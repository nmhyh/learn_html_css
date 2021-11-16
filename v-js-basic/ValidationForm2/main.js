// constructor `Validation`
function Validator(formSelector) {
    var _this = this;
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var formRules = {};

    /**
     * Quy ước tạo rule:
     * - Nếu có lỗi thì return về `error message`
     * - Nếu không có lỗi thì return về `undefined`
     */
    var validatorRules = {
        required: function (value) {
            return value ? undefined : 'Vui lòng nhập trường này';
        },
        email: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Trường này phải là email';
        },
        min: function (min) {
            return (value) => value.length >= min ? undefined : `Vui lòng nhập ít nhất ${min} kí tự`
        },
        max: function (max) {
            return (value) => value.length <= max ? undefined : `Vui lòng nhập tối đa ${max} kí tự`
        }
    }
    
    // get form element in DOM by `formSelector`
    var formElement = document.querySelector(formSelector);

    // check element exist
    if (!formElement) return

    var inputs = formElement.querySelectorAll('[name][rules]');

    for (var input of inputs) {
        var rules = input.getAttribute('rules').split('|');
        for (var rule of rules) {
            var isRuleHasValue = rule.includes(':');
            var ruleInfo;
            if (isRuleHasValue) {
                ruleInfo = rule.split(':');
                rule = ruleInfo[0];
            }
            var ruleFunc = validatorRules[rule];
            
            if (isRuleHasValue) {
                ruleFunc = ruleFunc(ruleInfo[1])
            }

            if (Array.isArray(formRules[input.name])) {
                formRules[input.name].push(ruleFunc)
            } else {
                formRules[input.name] = [ruleFunc];
            }

            // Lắng nghe sự kiện để validate (blur, change,...)
            input.onblur = handleValidate;
            input.oninput = handleClearError;

            // Hàm thực hiện validate
            function handleValidate(event) {
                var rulesOfTag = formRules[event.target.name]
                var errorMessage;

                for (var ruleOfTag of rulesOfTag) {
                    errorMessage = ruleOfTag(event.target.value);

                    if(errorMessage) break;
                }

                // Nếu có lỗi sẽ hiển thị lỗi ra UI
                if (errorMessage) {
                    var formGroup = getParent(event.target, '.form-group');
                    if (!formGroup) return;
                    formGroup.classList.add('invalid');
                    var formMessage = formGroup.querySelector('.form-message');
                    
                    if (!formMessage) return;
                    formMessage.innerText = errorMessage;
                }

                return !errorMessage;
            }

            // Hàm clear errorMessage khi nhập
            function handleClearError(event) {
                var formGroup = getParent(event.target, '.form-group');
                if (formGroup.classList.contains('invalid')) {
                    formGroup.classList.remove('invalid');
                    var formMessage = formGroup.querySelector('.form-message');
                    
                    if (!formMessage) return;
                    formMessage.innerText = '';
                }
            }
        }
    }

    // Xử lý hành vi submit  form
    formElement.onsubmit = function (event) {
        event.preventDefault();
        var inputs = formElement.querySelectorAll('[name][rules]');
        var isValid = true;
        
        for (var input of inputs) {
            if (!handleValidate({target: input})) {
                isValid = false;
            }
        }
        // Khi không có lỗi thì submit form
        if (isValid) {
            if (typeof _this.onSubmit === 'function') {
                var enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
                var formValues = Array.from(enableInputs).reduce((values, input) => {
                    switch (input.type) {
                        case 'radio':
                            values[input.name] = formElement.querySelector(
                                `input[name="${input.name}"]:checked`
                            ).value || '';
                            break;
                        case 'checkbox':
                            if (!input.matches(':checked')) {
                                values[input.name] = '';
                                return values;
                            }
                            if (!Array.isArray(values[input.name])) {
                                values[input.name] = []
                            }
                            values[input.name].push(input.value);
                            break;
                        case 'file':
                            values[input.name] = input.files;
                            break;
                        default:
                            values[input.name] = input.value;
                    }                        
                    return values;
                }, {});
                // Gọi lại hàm onSubmit và trả lại giá trị của form
                return _this.onSubmit(formValues);
            }
            formElement.submit();
        }
    }
}