<template>
  <el-row :gutter="24" >
      <el-form :model="formData">
        <template v-for="item in formItem" :key="item.prop">
          <el-form-item :label="item.label" :prop="item.prop">
            <component v-model="formData[item.prop]" :is="isComp(item.comp)" :placeholder="item.placeholder">
              <template v-if="item.comp === 'select'">
                <el-option label="全部" value="" />
                <el-option v-for="opt in item.opptions" :label="opt.label" :value="opt.value" :key="opt.value" />
              </template>
            </component>
          </el-form-item>
        </template>
      </el-form>
  </el-row>
  <el-row>
    <el-button type="primary" @click="handleSearch">查询</el-button>
    <el-button @click="handleReset">重置</el-button>
  </el-row>
</template>
<script setup>
import { reactive } from 'vue'
defineProps({
  formItem: {
    type: Array,
    default: () => []
  }
})
const emit = defineEmits(['search'])


//表单数据
const formData = reactive({})
const isComp = (comp) => {
  return {
    input: 'el-input',
    select: 'el-select'
  }[comp]
}

const handleSearch = () => {
  console.log(formData)
  emit('search', formData)
}
const handleReset = () => {
  console.log(formData)
}

</script>