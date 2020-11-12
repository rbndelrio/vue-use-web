import { Ref } from '@vue/composition-api';
export declare function useWebSocket(url: string): {
    data: Ref<any>;
    state: Ref<"OPEN" | "CONNECTING" | "CLOSING" | "CLOSED">;
    close: (code?: number, reason?: string) => void;
    send: (data: string | ArrayBuffer | SharedArrayBuffer | Blob | ArrayBufferView) => void;
};
