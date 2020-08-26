<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column
        prop="petName"
        label="애견이름"
        width="180"
      />
      <el-table-column
        prop="createdAt"
        label="날짜"
        width="180"
      />
      <el-table-column
        prop="status"
        label="상태"
        width="180"
      />
    </el-table>

  </div>
</template>
<script>
import { fetchList } from '@/api/article'
// import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

export default {
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        // this.list = response.data.items
        // this.total = response.data.total
        console.log(response)

        this.list = response
        this.listLoading = false
      })
    }
  }
}
</script>
