<script lang="ts" setup>
import FilePreviewRenderer from './FilePreviewRenderer.vue';
import type { FileInstance } from '../types';
import { useProvideFilePreview } from '../composables/useFilePreviewApi';

const files = ref<FileInstance[]>([])
useProvideFilePreview({ files })
</script>

<template>
    <slot />

    <div>
        <FilePreviewRenderer v-for="(file, index) in files" :key="index"  :file="file" @close="files.splice(index, 1)" />
    </div>
</template>