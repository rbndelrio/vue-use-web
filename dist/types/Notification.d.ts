declare type NotificationOptions = {
    dir?: 'auto' | 'ltr' | 'rtl';
    lang?: string;
    body?: string;
    tag?: string;
    icon?: string;
};
declare type NotificationMethods = {
    onClick: ((e: Event) => void) | null;
    onShow: ((e: Event) => void) | null;
    onError: ((e: Event) => void) | null;
    onClose: ((e: Event) => void) | null;
};
export declare function useNotification(title: string, options?: NotificationOptions, methods?: NotificationMethods): {
    showNotifcation: () => void;
};
export {};
