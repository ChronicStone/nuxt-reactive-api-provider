<script setup lang="ts">
import { NImage, NModal } from 'naive-ui'
import type { FileInstance } from '../types';

const props = defineProps<{ file: FileInstance }>()
const emit = defineEmits<{
    (e: 'close'): void
}>()
</script>

<template>
    <NModal :show="true"  preset="card" @close="emit('close')" style="width: 800px">
        <NImage :src="props.file.url" />
    </NModal>
</template>