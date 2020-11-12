import { Ref } from '@vue/composition-api';
export declare function useFetch(url: RequestInfo, options: RequestInit): {
    response: Ref<any>;
    status: Ref<number>;
    statusText: Ref<string>;
    headers: Ref<Record<string, string>>;
    isLoading: Ref<boolean>;
    cancelled: Ref<boolean>;
    error: Ref<boolean>;
    success: Ref<boolean>;
    cancel: () => void;
    execute: () => Promise<void>;
};
