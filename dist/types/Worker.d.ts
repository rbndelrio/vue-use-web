import { Ref } from '@vue/composition-api';
export declare function useWorker(url: string): {
    data: Ref<any>;
    post: {
        (message: any, transfer: Transferable[]): void;
        (message: any, options?: PostMessageOptions): void;
    };
    terminate: () => void;
};
