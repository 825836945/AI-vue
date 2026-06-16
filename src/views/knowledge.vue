<template>
    <div>
        <PageHead title="知识文章" >
            <template #buttons>
                <el-button type="primary">新增</el-button>
            </template>
        </PageHead>
        <TableSearch :formItem="form" @search="handleSearch"></TableSearch>
    </div>
</template>
<script setup>
import PageHead from '@/components/PageHead.vue'
import TableSearch from '@/components/TableSearch.vue'

const formItem = [
    {
        comp:'input',
        label:'文章标题',
        prop:'title',
        placeholder:'请输入文章标题'
    }
]

const handleSearch = () => {
    console.log(data)
}
</script>
