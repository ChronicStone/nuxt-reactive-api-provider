import { useFilePreview } from './file-preview/composables/useFilePreviewApi';

declare module '#app' {
    interface NuxtApp {
        $filePreviewApi: ReturnType<typeof useFilePreview>
    }
}