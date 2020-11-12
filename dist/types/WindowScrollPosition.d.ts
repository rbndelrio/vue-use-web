interface WindowScrollOptions {
    throttleMs: number;
}
export declare function useWindowScrollPosition(options?: WindowScrollOptions): {
    x: import("@vue/composition-api").Ref<number>;
    y: import("@vue/composition-api").Ref<number>;
};
export {};
