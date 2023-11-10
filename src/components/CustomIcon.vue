<template>
    <img :src="icon_img" alt="" :style="`width: ${props.width}; height: ${props.height}`">
</template>
<script setup>
import { reactive, computed, ref, onMounted,watch   } from 'vue' 
const props = defineProps({
    icon: {
        type: String,
        default: '',
    },
    extension: {
        type: String,
        default: 'png'
    },
    width: {
        type: String,
        default: '48px'
    },
    height: {
        type: String,
        default: '48px'
    }
});
const icon_img = computed({
    get() {
        return require('@/assets/icons/'+ props.icon + '.'+props.extension);
    },

});
</script>
