<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      style="width: 100%;"
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
      />
      <el-table-column
        prop="createdAt"
        label="날짜"
        align="center"
      />
      <el-table-column
        prop="status"
        label="상태"
        align="center"
      />
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

    <el-dialog :visible.sync="dialogPetVisible" title="상세">
      <el-table :data="pet" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="petName" label="애견이름" />
        <el-table-column prop="gender" label="성별" />
        <el-table-column prop="neutered" label="중성화" />
        <el-table-column prop="breed" label="견종" />
      </el-table>
      <br><br>
      <el-table :data="pet" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="tasteType" label="식사타입" />
        <el-table-column prop="eatFrequencyType" label="식사횟수" />
        <el-table-column prop="dailyCalorieIntake" label="일일 칼로리 권장량" />
      </el-table>
      <br><br>
      <el-table :data="pet" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="weight" label="몸무게" />
        <el-table-column prop="bodyFatType" label="체형" />
        <el-table-column prop="activityType" label="활동량" />
        <el-table-column prop="disease" label="질병" />
        <el-table-column prop="allergie" label="알러지" />
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPetVisible = false">확인</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { fetchList } from '@/api/pet'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

export default {
  components: { Pagination },
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
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        console.log(response)

        this.list = response.content
        this.total = response.totalCount
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
