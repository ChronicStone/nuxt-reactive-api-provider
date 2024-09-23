import { createInjectionState } from "@vueuse/core";
import type { FileInstance } from "../types";
import type { Ref } from "vue";


const [useProvideFilePreview, _useFilePreview] = createInjectionState((params: { files: Ref<FileInstance[]>}) => {
    function createPreview(file: FileInstance) {
        params.files.value.push(file)
    }

    return {
        createPreview
    }
})

function useFilePreview() {
    const api = _useFilePreview()
    if(!api) throw new Error('useFilePreviewApi must be called inside a FilePreviewProvider')
    return api
}

export { useProvideFilePreview, useFilePreview }