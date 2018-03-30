const validate = (val, rules, connectedValue) => {
	let isValid = true;

	for(let rule in rules) {
		switch(rule) {
			case 'isEmail': 
				isValid = isValid && emailValidator(val);
				break;

			case 'minLength': 
				isValid = isValid && minLengthValidator(val, rules[rule]);
				break;

			case 'equalTo': 
				isValid = isValid && equalToValidator(val, connectedValue[rule]);
				break;

			case 'isNotEmpty':
				isValid = isValid && isNotEmptyToValidator(val);
				break;

			default:
				isValid = true;
				break;
		}
	}

	return isValid;
}

const emailValidator = (val) => {
	return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(val);
}

const minLengthValidator = (val, minlength) => {
	return val.length >= minlength;
}

const equalToValidator = (val, checkValue) => {
	return val === checkValue;
}

const isNotEmptyToValidator = (val) => {
	return val.trim() !== '';
}

export default validate;