export declare function useClipboard(): {
    text: import("@vue/composition-api").Ref<string>;
    write: (txt: string) => Promise<void>;
};
