export const FORM_FIELDS = {
    options: (options?: object) => {
        return Object.assign({
            validateAfterLoad: false,
            validateAfterChanged: true,
        }, options);
    },
    button: (text: string, properties: object = {}) => {
        return Object.assign({
            type: 'cbutton',
            text: text,
            class: 'button__orange',
        }, properties);
    },
};
