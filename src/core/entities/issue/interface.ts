import {DynamicFieldInterface} from '@/application/components/form-generator/fields/dynamic-fields-list/dynamic-fields-list.component';

export interface IssueMetaInterface {
    href: string,
    viewportHeight: number,
    viewportWidth: number,
    scrollX: number,
    scrollY: number,
    browser: string,
    browserVersion: string | null,
    os: string | null,
    source: string
}

export interface IssueInterface {
    image: File,
    description: string,
    errors?: { [key: string]: DynamicFieldInterface },
    meta: IssueMetaInterface
}
