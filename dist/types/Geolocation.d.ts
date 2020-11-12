import { Ref } from '@vue/composition-api';
export declare function useGeolocation(options: PositionOptions): {
    coords: Ref<Coordinates>;
    locatedAt: Ref<number>;
    error: Ref<string>;
};
