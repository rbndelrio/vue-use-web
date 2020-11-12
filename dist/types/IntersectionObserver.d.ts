import { Ref } from '@vue/composition-api';
export declare function useIntersectionObserver(target: Ref<HTMLElement>, options?: IntersectionObserverInit): {
    intersectionRatio: Ref<number>;
    isIntersecting: Ref<boolean>;
    isFullyInView: Ref<boolean>;
    observe: () => void;
    unobserve: () => void;
};
