import { Ref } from '@vue/composition-api';
export declare function useFullscreen(target: Ref<HTMLElement>): {
    isFullscreen: Ref<boolean>;
    enterFullscreen: () => void;
    exitFullscreen: () => void;
};
