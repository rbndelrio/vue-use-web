import { Ref } from '@vue/composition-api';
/**
 * Tracks visibility of the page.
 *
 * @returns True if the document is currently visible.
 *
 * @example
 * setup() {
 *  const isVisible = useDocumentVisibility()
 *  watch(() => console.log(isVisible))
 * }
 *
 */
export declare function useDocumentVisibility(): Ref<boolean>;
