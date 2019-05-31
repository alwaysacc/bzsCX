<template>
  <div>
    <div class="home">
      <el-row class="row-style">
        <el-col span="6">
          <el-input v-model="carNumber" placeholder="车牌号" style="width: 90%" />
        </el-col>
        <el-col span="6">
          <el-select v-model="stat" placeholder="投保公司" style="width: 90%">
            <el-option label="平安" value="shi" />
            <el-option label="太平洋" value="fou" />
          </el-select>
        </el-col>
        <el-col span="6">
          <el-input v-model="input" placeholder="提交订单时间" style="width: 90%" />
        </el-col>
        <el-col span="6">
          <el-input v-model="insuranceCompany" placeholder="投保人" style="width: 90%" />
        </el-col>
      </el-row>
      <el-row class="row-style">
        <el-col span="6">
          <el-select v-model="stat" placeholder="业务员" style="width: 90%">
            <el-option label="平安" value="shi" />
            <el-option label="太平洋" value="fou" />
          </el-select>
        </el-col>
        <el-col span="6">
          <el-select v-model="deliveryWay" placeholder="配送方式" style="width: 90%">
            <el-option label="平安" value="shi" />
            <el-option label="太平洋" value="fou" />
          </el-select>
        </el-col>
        <el-col offset="10" span="2">
          <el-button type="primary" @click="searchOrder">搜索</el-button>
        </el-col>
      </el-row>

      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部" name="9">
          <el-table
            v-loading="loading"
            :data="tableData"
            size="small"
            tooltip-effect="dark"
            border
            style="width: 100%"
            @row-click="toDetail"
            @select="handleSelectionChange"
            @select-all="selectAll"
          >
            <el-table-column
              prop="order_id"
              type="selection"
              width="55"
            />
            <el-table-column
              prop="create_Time"
              label="提交时间" :formatter="createTime"
              width="160"
            >
            </el-table-column>
            <el-table-column
              prop="car_number"
              label="车牌号码"
              width="120"
            />
            <el-table-column
              prop="car_model"
              label="车型"
              show-overflow-tooltip
            />
            <el-table-column
              prop="license_owner"
              label="投保人"
            />
            <el-table-column
              prop="quote_insurance_name"
              label="投保公司"
            />
            <el-table-column
              prop="salesman"
              label="业务员"
            />
            <el-table-column
              prop="payment"
              label="收款方式"  :formatter="payMent"
            />
            <el-table-column
              prop="pay_money"
              label="订单金额"
            />
            <el-table-column
              prop="pay_status"
              label="订单状态"
              :formatter="orderStat"
            />
            <el-table-column
              prop="name"
              label="备注"
            />
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="待支付" name="0">
          <el-table
            v-loading="loading"
            :data="tableData"
            size="small"
            tooltip-effect="dark"
            border
            style="width: 100%"
            @row-click="toDetail"
            @select="handleSelectionChange"
            @select-all="selectAll"
          >
            <el-table-column
              prop="order_id"
              type="selection"
              width="55"
            />
            <el-table-column
              prop="create_Time"
              label="提交时间" :formatter="createTime"
              width="160"
            >
            </el-table-column>
            <el-table-column
              prop="car_number"
              label="车牌号码"
              width="120"
            />
            <el-table-column
              prop="car_model"
              label="车型"
              show-overflow-tooltip
            />
            <el-table-column
              prop="contact_name"
              label="投保人"
            />
            <el-table-column
              prop="insurance_company"
              label="投保公司"
            />
            <el-table-column
              prop="salesman"
              label="业务员"
            />
            <el-table-column
              prop="payment"
              label="收款方式"  :formatter="payMent"
            />
            <el-table-column
              prop="pay_money"
              label="订单金额"
            />
            <el-table-column
              prop="pay_status"
              label="订单状态"
              :formatter="orderStat"
            />
            <el-table-column
              prop="name"
              label="备注"
            />
          </el-table>
        </el-tab-pane>
      <!--  <el-tab-pane label="待出单" name="2">
          <el-table
            v-loading="loading"
            :data="tableData"
            size="small"
            tooltip-effect="dark"
            border
            style="width: 100%"
            @row-click="toDetail"
            @select="handleSelectionChange"
            @select-all="selectAll"
          >
            <el-table-column
              prop="order_id"
              type="selection"
              width="55"
            />
            <el-table-column
              prop="create_Time"
              label="提交时间" :formatter="createTime"
              width="160"
            >
            </el-table-column>
            <el-table-column
              prop="car_number"
              label="车牌号码"
              width="120"
            />
            <el-table-column
              prop="car_model"
              label="车型"
              show-overflow-tooltip
            />
            <el-table-column
              prop="contact_name"
              label="投保人"
            />
            <el-table-column
              prop="insurance_company"
              label="投保公司"
            />
            <el-table-column
              prop="salesman"
              label="业务员"
            />
            <el-table-column
              prop="payment"
              label="收款方式"  :formatter="payMent"
            />
            <el-table-column
              prop="pay_money"
              label="订单金额"
            />
            <el-table-column
              prop="pay_status"
              label="订单状态"
              :formatter="orderStat"
            />
            <el-table-column
              prop="name"
              label="备注"
            />
          </el-table>
        </el-tab-pane>-->
        <el-tab-pane label="已完成" name="1">
          <el-table
            v-loading="loading"
            :data="tableData"
            size="small"
            tooltip-effect="dark"
            border
            style="width: 100%"
            @row-click="toDetail"
            @select="handleSelectionChange"
            @select-all="selectAll"
          >
            <el-table-column
              prop="order_id"
              type="selection"
              width="55"
            />
            <el-table-column
              prop="create_Time"
              label="提交时间" :formatter="createTime"
              width="160"
            >
            </el-table-column>
            <el-table-column
              prop="car_number"
              label="车牌号码"
              width="120"
            />
            <el-table-column
              prop="car_model"
              label="车型"
              show-overflow-tooltip
            />
            <el-table-column
              prop="contact_name"
              label="投保人"
            />
            <el-table-column
              prop="insurance_company"
              label="投保公司"
            />
            <el-table-column
              prop="salesman"
              label="业务员"
            />
            <el-table-column
              prop="payment"
              label="收款方式"  :formatter="payMent"
            />
            <el-table-column
              prop="pay_money"
              label="订单金额"
            />
            <el-table-column
              prop="pay_status"
              label="订单状态"
              :formatter="orderStat"
            />
            <el-table-column
              prop="name"
              label="备注"
            />
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="已取消" name="2">
          <el-table
            v-loading="loading"
            :data="tableData"
            size="small"
            tooltip-effect="dark"
            border
            style="width: 100%"
            @row-click="toDetail"
            @select="handleSelectionChange"
            @select-all="selectAll"
          >
            <el-table-column
              prop="order_id"
              type="selection"
              width="55"
            />
            <el-table-column
              prop="create_Time"
              label="提交时间" :formatter="createTime"
              width="160"
            >
            </el-table-column>
            <el-table-column
              prop="car_number"
              label="车牌号码"
              width="120"
            />
            <el-table-column
              prop="car_model"
              label="车型"
              show-overflow-tooltip
            />
            <el-table-column
              prop="contact_name"
              label="投保人"
            />
            <el-table-column
              prop="insurance_company"
              label="投保公司"
            />
            <el-table-column
              prop="salesman"
              label="业务员"
            />
            <el-table-column
              prop="payment"
              label="收款方式"  :formatter="payMent"
            />
            <el-table-column
              prop="pay_money"
              label="订单金额"
            />
            <el-table-column
              prop="pay_status"
              label="订单状态"
              :formatter="orderStat"
            />
            <el-table-column
              prop="name"
              label="备注"
            />
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="已过期" name="3">
          <el-table
            v-loading="loading"
            :data="tableData"
            size="small"
            tooltip-effect="dark"
            border
            style="width: 100%"
            @row-click="toDetail"
            @select="handleSelectionChange"
            @select-all="selectAll"
          >
            <el-table-column
              prop="order_id"
              type="selection"
              width="55"
            />
            <el-table-column
              prop="create_Time"
              label="提交时间" :formatter="createTime"
              width="160"
            >
            </el-table-column>
            <el-table-column
              prop="car_number"
              label="车牌号码"
              width="120"
            />
            <el-table-column
              prop="car_model"
              label="车型"
              show-overflow-tooltip
            />
            <el-table-column
              prop="contact_name"
              label="投保人"
            />
            <el-table-column
              prop="insurance_company"
              label="投保公司"
            />
            <el-table-column
              prop="salesman"
              label="业务员"
            />
            <el-table-column
              prop="payment"
              label="收款方式"  :formatter="payMent"
            />
            <el-table-column
              prop="pay_money"
              label="订单金额"
            />
            <el-table-column
              prop="pay_status"
              label="订单状态"
              :formatter="orderStat"
            />
            <el-table-column
              prop="name"
              label="备注"
            />
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { getOrderList, searchOrderList } from '../../api/orderApi'
export default {
  name: '',
  components: {
  },
  data() {
    return {
      input: '',
      stat: '',
      activeName: '9',
      tableData: [],
      loading: true,
      carNumber: '',
      postedName: '',
      deliveryWay: '',
      insuranceCompany: '',
      payStatus:'',
    }
  },
  filters: {
    formatDate: function(value) {
      const date = new Date(value)
      const y = date.getFullYear()
      let MM = date.getMonth() + 1
      MM = MM < 10 ? ('0' + MM) : MM
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      let h = date.getHours()
      h = h < 10 ? ('0' + h) : h
      let m = date.getMinutes()
      m = m < 10 ? ('0' + m) : m
      let s = date.getSeconds()
      s = s < 10 ? ('0' + s) : s
      return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s
    }
  },
  watch: {
    $route(to, from) {
      if (to.path == '/orderList') {
        this.payStatus = 9
        this.activeName = '0'
        this.orderList()
      }
    }
  },
  created() {
    // let a = JSON.parse(getStore("USER"));
    // console.log(a)
    this.orderList()
  },
  methods: {
    toDetail(row, event, column) {
      console.log(row)
      console.log(event)
      console.log(column)
      this.$router.push({ path: '/user/orderDetail', query: { order_id: row.order_id }})
    },
    handleClick(e) {
      console.log(e.name)
      this.payStatus = e.name
      this.orderList()
    },
    handleSelectionChange(e) {
      console.log(e)
    },
    selectAll(e) {
      console.log(e)
    },
    orderList() {
      const user = JSON.parse(this.$store.getters.user)
      const params = {
        accountId: user.accountId,
        payStatus: this.payStatus
      }
      getOrderList(params).then(res => {
        console.log(res)
        if (res.code == 200) {
          this.$message({
            type: 'success',
            message: '获取成功'
          })
          this.loading = false
          this.tableData = res.data.list
          this.count = res.data.total
        } else {
          this.$message({
            type: 'error',
            message: res.message
          })
        }
      })
    },
    searchOrder() {
      this.loading = true
      const user = JSON.parse(this.$store.getters.user)
      const params = {
        accountId: user.accountId,
        payStatus: this.payStatus,
        carNumber: this.carNumber,
        postedName: this.postedName,
        deliveryWay: this.deliveryWay,
        insuranceCompany: this.insuranceCompany

      }
      getOrderList(params).then(res => {
        console.log(res)
        if (res.code == 200) {
          this.$message({
            type: 'success',
            message: '获取成功'
          })
          this.loading = false
          this.tableData = res.data.list
          this.count = res.data.total
        } else {
          this.$message({
            type: 'error',
            message: res.message
          })
        }
      })
    },
    orderStat(row, column, cellValue, index) {
      console.log(row.pay_status )
      if (row.pay_status == 0) {
        return '待支付'
      } else if (row.pay_status == 1) {
        return '已完成'
      } else if (row.pay_status == 2){
        return '已取消'
      }else{
        return '支付超时'
      }
    },
    payMent(row){
      if (row.payment == '2') {
        return '微信支付'
      }
    },
    createTime(row){
      console.log(row)
      const date = new Date(row.create_time)
      const y = date.getFullYear()
      let MM = date.getMonth() + 1
      MM = MM < 10 ? ('0' + MM) : MM
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      let h = date.getHours()
      h = h < 10 ? ('0' + h) : h
      let m = date.getMinutes()
      m = m < 10 ? ('0' + m) : m
      let s = date.getSeconds()
      s = s < 10 ? ('0' + s) : s
      return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s
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
