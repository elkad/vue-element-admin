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
      <el-table-column label="ID" align="center" width="95">
        <template slot-scope="{row}">
          <span class="link-type" @click="handleFetch(row)">{{ row.petId }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="petName"
        label="애견이름"
        align="center"
        width="180"
      />
      <el-table-column
        prop="createdAt"
        label="날짜"
        align="center"
        width="180"
      />
      <el-table-column
        prop="status"
        label="상태"
        align="center"
        width="180"
      />
    </el-table>
    <el-dialog :visible.sync="dialogPetVisible" title="상세">
      <el-table :data="pet" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="petName" label="애견이름" />
        <el-table-column prop="status" label="status" />
        <el-table-column prop="createdAt" label="createdAt" />
        <el-table-column prop="status" label="status" />
        <el-table-column prop="createdAt" label="createdAt" />
        <el-table-column prop="status" label="status" />
        <el-table-column prop="createdAt" label="createdAt" />
        <el-table-column prop="status" label="status" />
        <el-table-column prop="createdAt" label="createdAt" />
        <el-table-column prop="status" label="status" />
      </el-table>
      <br><br>
      <el-table :data="pet" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="petName" label="애견이름" />
        <el-table-column prop="status" label="status" />
        <el-table-column prop="createdAt" label="createdAt" />
        <el-table-column prop="status" label="status" />
        <el-table-column prop="createdAt" label="createdAt" />
      </el-table>
      <br><br>
      <el-table :data="pet" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="petName" label="애견이름" />
        <el-table-column prop="status" label="status" />
        <el-table-column prop="status" label="status" />
        <el-table-column prop="createdAt" label="createdAt" />
        <el-table-column prop="status" label="status" />
        <el-table-column prop="createdAt" label="createdAt" />
        <el-table-column prop="status" label="status" />
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPetVisible = false">확인</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { fetchList } from '@/api/pet'
// import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

export default {
  data() {
    return {
      dialogPetVisible: false,
      pet: [],
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
    },
    handleFetch(pet) {
      console.log(pet)
      this.pet = []
      this.pet.push(pet)
      this.dialogPetVisible = true
    }
  }
}
</script>
