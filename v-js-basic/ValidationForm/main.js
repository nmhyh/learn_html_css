// constructor `Validation`
function Validator(options) {
    var selectorRules = {};
    
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    // validate
    function validate(inputElement, rule, errorElement) {
        var errorMessage;
        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];
        
        // Lặp qua từng rule và kiểm tra
        // Nếu có lỗi thì dừng việc kiểm tra
        for (var ele of rules) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = ele(
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = ele(inputElement.value);
            }
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        } else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }

        return !errorMessage;
    }

    // get element of form
    var formElement = document.querySelector(options.form);
    if (formElement) {
        // Khi submit form
        formElement.onsubmit = (e) => {
            e.preventDefault();
            var isFormValid = true;

            // Lặp qua từng rules và validate
            options.rules.forEach((rule) => {
                var inputElement = formElement.querySelector(rule.selector);
                var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                var isValid = validate(inputElement, rule, errorElement);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                // Trường hợp submit với js
                if (typeof options.onSubmit == 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
                    console.log('enableInputs', enableInputs);
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
                    options.onSubmit(formValues)
                } else {
                    // Trường hợp submit với hành vi mặc định
                    formElement.submit();
                }
            }
            console.log(formValues);
        }

        // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input,...)
        options.rules.forEach((rule) => {

            // Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);
            
            Array.from(inputElements).forEach((inputElement) => {
                var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = () => {
                    // value: inputElement.value
                    // test func: rule.test
                    validate(inputElement, rule, errorElement);
                }

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = () => {
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                }
            });
        })
    }
}

// Define rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi => Trả ra message lỗi
// 2. Hợp lệ => Bỏ qua
Validator.isRequired = (selector, message) => {
    return {
        selector: selector,
        test: (value) => {
            return value ? undefined : message || 'Vui lòng nhập trường này'
        }
    }
}

Validator.isEmail = (selector, message) => {
    return {
        selector: selector,
        test: (value) => {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là email';
        }
    }
}

Validator.minLength = (selector, min, message) => {
    return {
        selector: selector,
        test: (value) => {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} ký tự`;
        }
    }
}

Validator.isConfirmed = (selector, getConfirmValue, message) => {
    return {
        selector: selector,
        test: (value) => {
            return value == getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    }
}