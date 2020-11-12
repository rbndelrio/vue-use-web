interface WindowSizeOptions {
    throttleMs: number;
}
export declare function useWindowSize(options?: WindowSizeOptions): {
    height: import("@vue/composition-api").Ref<number>;
    width: import("@vue/composition-api").Ref<number>;
};
export {};
