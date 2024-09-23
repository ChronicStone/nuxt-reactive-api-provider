<script setup lang="ts">
import { useFilePreview } from './file-preview/composables/useFilePreviewApi';

const app = useNuxtApp()
const filePreviewApi = useFilePreview()
app.provide('filePreviewApi', filePreviewApi)
</script>

<template>
    <NuxtLayout>
         <NuxtPage />
    </NuxtLayout>
</template>