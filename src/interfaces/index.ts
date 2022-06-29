export interface IArticle {
    title: string;
    _summary: string;
    subjects: IArticleSubject[];
    lastTitleUpdate: number;
    lastSummaryUpdate: number;
    _metadata: IArticleMetadata;
    isLoading: boolean;
}

export interface IArticleSubject {
    last_refresh: number;
    title: string;
    content: string;
    isLoading: boolean;
    lastEdit: number;
}

export interface IArticleMetadata {
    api_proxy: string;
    api_url: string;
    api_settings: IArticleMetadataSetting[];
}

export interface IArticleMetadataSetting {
    type: string;
    key: string;
    value: any;
}