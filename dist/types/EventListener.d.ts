import { Ref } from '@vue/composition-api';
export declare function useEventListener<T extends EventTarget, E extends Event>(target: T | Ref<T>, type: string, handler: (this: T, evt: E) => void, options?: AddEventListenerOptions): void;
