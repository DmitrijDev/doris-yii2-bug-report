export default class NotificationConfig {
    static getErrorsConfig(message: string, title: string = 'Ошибка!') {
        return {
            group: 'error-message',
            type: 'error',
            title: title,
            text: message,
        }
    }

    static getSuccessConfig(message: string, title: string = 'Успех!') {
        return {
            group: 'success-message',
            type: 'success',
            title: title,
            text: message,
        }
    }
}
