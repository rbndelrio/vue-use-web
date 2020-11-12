import { Ref } from '@vue/composition-api';
declare type NetworkType = 'bluetooth' | 'cellular' | 'ethernet' | 'none' | 'wifi' | 'wimax' | 'other' | 'unknown';
declare type NetworkEffectiveType = 'slow-2g' | '2g' | '3g' | '4g' | undefined;
export declare function useNetwork(): {
    isOnline: Ref<boolean>;
    saveData: Ref<boolean>;
    offlineAt: Ref<number>;
    downlink: Ref<number>;
    downlinkMax: Ref<number>;
    effectiveType: Ref<NetworkEffectiveType>;
    type: Ref<NetworkType>;
};
export {};
