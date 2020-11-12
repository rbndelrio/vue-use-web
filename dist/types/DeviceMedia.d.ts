import { Ref } from '@vue/composition-api';
export declare function useDeviceMedia(constraints: MediaStreamConstraints): {
    stream: Ref<MediaStream>;
    error: Ref<Error>;
};
