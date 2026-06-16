<template>
    <el-form>
        <template>
            <el-form-item >
            </el-form-item>
        </template>
       
    </el-form>
</template>
<script setup>
const props = defineProps({
    formItem: {
        type: Array,
        default: () => []
    }
})
</script>
