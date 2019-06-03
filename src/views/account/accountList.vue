<template>
  <div class="home">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="获取成功" name="1">
        <div>
          <el-row class="row" type="flex">
            <el-col span="2"><el-button style="color: black" @click="filter = true">筛选</el-button></el-col>
            <el-col span="6">
              <el-input v-model="conditionText" placeholder="请输入内容" class="input-with-select">
                <el-button slot="append" icon="el-icon-search" @click="search" />
              </el-input>
            </el-col>
            <el-col span="" offset="10">
              <a style="color: blue">
                <i class="el-icon-download" />导出Excel
              </a>
              <a style="color: blue">
                <i class="el-icon-setting" />Excel设置
              </a>
              <a style="color: blue">
                <i class="el-icon-upload2" />导入台账
              </a>
            </el-col>
          </el-row>
          <el-row>
            共<span>1</span>笔保单，<span>1321</span>条台账数据
          </el-row>

          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%" size="mini"
            @selection-change="handleSelectionChange"
          >
            <el-table-column
              type="selection"
              width="55"
            />
            <el-table-column
              label="刷卡日期"
              width="120"
            >
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
              prop="baod"
              label="保单号"
              width="120"
            />
            <el-table-column
              prop="address"
              label="被保险人"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="险种类型"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="保险公司"
              show-overflow-tooltip
            /> <el-table-column
            prop="name"
            label="出单渠道"
            show-overflow-tooltip
          />
            <el-table-column
              prop="name"
              label="保险金额"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="车船税"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="起保日期"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="业务来源"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="抓单状态"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="出单员"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="数据来源"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="审核状态"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="代理人佣金状态"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="保司手续费状态"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="更新时间"
              show-overflow-tooltip
            />
          </el-table>
          <el-row>
            <el-col span="12">
              <el-pagination
                :current-page="currentPage4"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="size"
                layout="total, sizes, prev, pager, next, jumper"
                :total="count"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              />
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane label="获取失败" name="2">配置管理</el-tab-pane>
      <el-tab-pane label="处理中" name="3">角色管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'AccountList',
  data() {
    return {
      activeName: '1',
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: []

    }
  }
}
</script>

<style scoped>
  .home{
    padding: 1em;
  }
  .row{
    display: flex;
    align-items: center;
    height: 3.5em;
    text-align: left;
  }
</style>
