import { Ref } from '@vue/composition-api';
interface DeviceMotionOptions {
    throttleMs: 10;
}
export declare function useDeviceMotion(options?: DeviceMotionOptions): {
    acceleration: Ref<DeviceMotionEventAcceleration>;
    accelerationIncludingGravity: Ref<DeviceMotionEventAcceleration>;
    rotationRate: Ref<DeviceMotionEventRotationRate>;
    interval: Ref<number>;
};
export {};
