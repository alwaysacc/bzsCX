<template>
  <div>
    <div class="home">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="车险数据" name="first">
          <el-row class="row-style">
            <el-col span="6">
              <el-input v-model="input" placeholder="车牌号" style="width: 90%" />
            </el-col>
            <el-col span="6">
              <el-input v-model="input" placeholder="更新时间" style="width: 90%" />
            </el-col>
            <el-col span="6">
              <el-input v-model="input" placeholder="客户名称" style="width: 90%" />
            </el-col>
            <el-col span="6">
              <el-input v-model="input" placeholder="客户电话" style="width: 90%" />
            </el-col>
          </el-row>
          <el-row class="row-style">
            <el-col span="6">
              <el-select v-model="stat" placeholder="客户类别" style="width: 90%">
                <el-option label="新车" value="shi" />
                <el-option label="在修不在保" value="fou" />
              </el-select>
            </el-col>
            <el-col span="6">
              <el-select v-model="stat" placeholder="删除时间" style="width: 90%">
                <el-option label="平安" value="shi" />
                <el-option label="太平洋" value="fou" />
              </el-select>
            </el-col>
            <el-col span="6">
              <el-select v-model="stat" placeholder="删除类型" style="width: 90%">
                <el-option label="普通删除" value="shi" />
                <el-option label="去重复删除" value="fou" />
              </el-select>
            </el-col>
          </el-row>
          <el-row class="row-style">
            <el-col offset="14" span="10">
              <el-button type="primary">搜索</el-button>
              <el-button type="primary">清空回收站</el-button>
              <el-button type="primary">批量撤销</el-button>
              <el-button type="primary">批量删除</el-button>
            </el-col>
          </el-row>

          <el-table
            v-loading="loading"
            :data="tableData"
            tooltip-effect="dark"
            border
            style="width: 100%"
            @select="handleSelectionChange"
            @select-all="selectAll"
          >
            <el-table-column
              type="selection"
              width="55"
            />
            <el-table-column
              prop="car_number"
              label="车牌号"
            />
            <el-table-column
              prop="license_owner"
              label="车主"
            />
            <el-table-column
              prop="car_model"
              label="品牌型号"
              show-overflow-tooltip
            />
            <el-table-column
              prop="register_date"
              label="注册日期"
            />
            <el-table-column
              prop="last_year_insurance_company"
              label="去年投保公司"
            />
            <el-table-column
              prop="busines_expire_date"
              label="商业险到期时间"
            />
            <el-table-column
              prop="force_expire_date"
              label="交强险到期时间"
            />
            <el-table-column
              prop="customer_type"
              label="客户类别"
            />
            <el-table-column
              prop="salesman"
              label="业务员"
            />
            <el-table-column
              prop="UPDATED_TIME"
              label="更新时间"
            />
            <el-table-column width="80">
              <template slot="header" slot-scope="scope">
                操作
              </template>
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)"
                >撤销</el-button>
              </template>
            </el-table-column>

          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { recoverUser, getRecoverUser } from '../../api/userApi'
export default {
  name: '',
  components: {
  },
  data() {
    return {
      loading: true,
      carInfoIds: '',
      activeName: 'first',
      tableData: []
    }
  },
  created() {
    this.getRecoverUserList()
  },
  methods: {
    handleSelectionChange(e) {
      this.carInfoIds = ''
      e.map((item, index) => {
        if (index != e.length - 1) {
          this.carInfoIds = this.carInfoIds + item.car_info_id + ','
        } else {
          this.carInfoIds = this.carInfoIds + item.car_info_id
        }
      })
      console.log(this.carInfoIds)
    },
    selectAll(e) {
      this.carInfoIds = ''
      e.map((item, index) => {
        if (index != e.length - 1) {
          this.carInfoIds = this.carInfoIds + item.car_info_id + ','
        } else {
          this.carInfoIds = this.carInfoIds + item.car_info_id
        }
      })
    },
    recoverUser() {
      const params = {
        carInfoIds: this.carInfoIds,
        status: 0
      }
      recoverUser(params).then(res => {
        if (res.code == 200) {
          this.$message({
            type: 'success',
            message: '撤销成功'
          })
          this.loading = false
        } else {
          this.$message({
            type: 'error',
            message: res.message
          })
        }
        console.log(res)
        this.getRecoverUserList()
      })
    },
    getRecoverUserList() {
      const user = JSON.parse(this.$store.getters.user)
      const params = {
        accountId: user.accountId,
        roleId: user.roleId
      }
      getRecoverUser(params).then(res => {
        console.log(res)
        if (res.code == 200) {
          this.$message({
            type: 'success',
            message: '获取成功'
          })
          this.loading = false
          this.tableData = res.data
          this.count = res.data.total
        } else {
          this.$message({
            type: 'error',
            message: res.message
          })
        }
      })
    },
    handleEdit(i, r) {
      this.carInfoIds = r.car_info_id
      this.recoverUser()
      console.log(i)
      console.log(r.car_info_id)
    }
  }
}
</script>

<style scoped>
    .home{
        margin: 0.5em;
    }
    .row-style{
        text-align: left;
        height: 3.5em;
        line-height: 3.5em;
    }
</style>
