import { useCallback, useState } from 'react';


export const FormValidation = () => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const handleChange = useCallback((evt) => {
        const name = evt.target.name
        const value = evt.target.value
        const form = evt.target.closest("form")

        setValues({ ...values, [name]: value })

        console.log(values);
        setErrors({ ...errors, [name]: evt.target.validationMessage })
        setIsValid(evt.target.closest("form").checkValidity());

    },
        [errors, values]
    )
    const resetForm = useCallback((newErrors = {}, newIsValid = false) => {
        console.log(newErrors);
        console.log(newIsValid);
        setErrors(newErrors);
        setIsValid(newIsValid);
        setValues('')
    },
        [setErrors, setIsValid, setValues]
    )

    return { values, handleChange, resetForm, errors, isValid, setValues };
}
