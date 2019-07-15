import config from '@/core/config/request';
import axios from 'axios';
import store from "@/store/store";
import objectToFormData from "object-to-formdata";

export interface ErrorResponseInterface {
    code: number,
    message: string
}

class Request {
    static readonly OK = 200;
    static readonly CREATED = 201;
    static readonly DELETED = 204;
    static readonly BAD_REQUEST = 400;
    static readonly UNAUTHORIZED = 401;
    static readonly FORBIDDEN = 403;
    static readonly NOT_FOUND = 404;
    static readonly VALIDATION_FAILED = 422;
    static readonly INTERNAL_SERVER_ERROR = 500;
    static readonly SERVICE_UNAVAILABLE = 503;

    static readonly POST_METHOD = 'post';
    static readonly GET_METHOD = 'get';
    static readonly PUT_METHOD = 'put';
    static readonly DELETE_METHOD = 'delete';

    public post(url: string, params: any = null): Promise<any> {
        let token = this.getCSRFToken();
        if (token) {
            Object.assign(params, token);
        }

        let data = objectToFormData(params);

        return this.send(url, Request.POST_METHOD, {data: data});
    }

    public get(url: string, params: any = null): Promise<any> {
        let token = this.getCSRFToken();
        if (token) {
            Object.assign(params, token);
        }

        return this.send(url, Request.GET_METHOD, {params: params});
    }

    public put(url: string, params: any = null): Promise<any> {
        let token = this.getCSRFToken();
        if (token) {
            Object.assign(params, token);
        }

        return this.send(url, Request.PUT_METHOD, {data: params});
    }

    public delete(url: string, params: any = null): Promise<any> {
        let token = this.getCSRFToken();
        if (token) {
            Object.assign(params, token);
        }

        return this.send(url, Request.DELETE_METHOD, {data: params});
    }

    private send(url: string, method: string, params: Object | null): Promise<any> {
        return new Promise<void>((result, reject?) => {

            let path = `/${config.controller}/${url}${config.sufix}`;


            let requestConfig = {
                headers: {'Content-Type': method === 'post' ? 'multipart/form-data;charset=UTF-8' : 'applocation/json;charset=UTF-8'},
                url: path,
                responseType: 'json',
                method: method
            };

            if (params) {
                Object.assign(requestConfig, params);
            }

            axios(requestConfig).then((response) => {
                let success_status = [
                    Request.OK,
                    Request.CREATED,
                    Request.DELETED
                ];

                if (success_status.some((code) => response.status === code)) {
                    console.log('lol');
                    result(response.data);
                    return;
                }

                reject(response.data);
            }).then((response: any) => {
                reject(response.data);
            }).catch((response: any) => {
                let response_data = response.response;
                let status = response_data.status;

                if (status && status === Request.UNAUTHORIZED) {
                    reject({code: status, message: 'Авторизуйся і спробуйте ще раз.'});
                }

                let message = response.response.message;

                if (!message) {
                    message = response.response.data.message;
                }

                if (!message) {
                    message = response.response.data[0].message;
                }

                if (!message) {
                    message = 'Виникла помилка. Повторіть спробу пізніше.'
                }

                reject(<ErrorResponseInterface>{code: status, message: message});
            });
        });
    }

    private getCSRFToken(): object | null {
        let tokenContentElement = <HTMLMetaElement>document.querySelector('meta[name="csrf-token"]');
        let tokenParamElement = <HTMLMetaElement>document.querySelector('meta[name="csrf-param"]');

        if (tokenContentElement && tokenParamElement) {
            return {[tokenParamElement.content]: tokenContentElement.content}
        }

        return null;
    }
}

export default new Request();
