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
    meta: IssueMetaInterface
}
