export interface BatteryManager extends EventTarget {
    charging: boolean;
    chargingTime: number;
    dischargingTime: number;
    level: number;
}
export declare type NavigatorWithBattery = Navigator & {
    getBattery: () => Promise<BatteryManager>;
};
export declare function useBattery(): {
    isCharging: import("@vue/composition-api").Ref<boolean>;
    chargingTime: import("@vue/composition-api").Ref<number>;
    dischargingTime: import("@vue/composition-api").Ref<number>;
    level: import("@vue/composition-api").Ref<number>;
};
