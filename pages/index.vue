<script setup lang="ts">
import { NButton } from 'naive-ui'

const { $filePreviewApi } = useNuxtApp()

function openFile() {
   $filePreviewApi.createPreview({
        url: 'https://picsum.photos/200/300',
   })
}
</script>

<template>
    <NButton @click="openFile">
        Show file
    </NButton>
</template>