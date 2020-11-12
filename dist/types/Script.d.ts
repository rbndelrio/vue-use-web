interface ScriptOptions {
    src: string;
}
export declare function useScript(opts: ScriptOptions): {
    isLoading: import("@vue/composition-api").Ref<boolean>;
    error: import("@vue/composition-api").Ref<boolean>;
    success: import("@vue/composition-api").Ref<boolean>;
    toPromise: () => Promise<unknown>;
};
export {};
