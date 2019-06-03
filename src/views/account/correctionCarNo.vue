<template>
  <div class="home">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="未批改车牌" name="1">
        <div>
          <el-row class="row2" type="flex">
            <el-col span="2"><el-button style="color: black" @click="filter = true">筛选</el-button></el-col>
            <el-col span="6">
              <el-input v-model="conditionText" placeholder="请输入内容" class="input-with-select">
                <el-button slot="append" icon="el-icon-search" @click="search" />
              </el-input>
            </el-col>
            <el-col span="4" offset="14">
              <a style="color: blue">
                <i class="el-icon-download" />导出Excel
              </a>
              <!-- <a style="color: blue">
                <i class="el-icon-setting" />Excel设置
              </a>
              <a style="color: blue">
                <i class="el-icon-upload2" />导入台账
              </a>-->
            </el-col>
          </el-row>
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            size="mini"
            border="true"
            @selection-change="handleSelectionChange"
          >
            <el-table-column
              type="selection"
              width="55"
            />
            <el-table-column
              label="车牌号"
              width="120"
            />
            <el-table-column
              prop="baod"
              label="车主"
              width="120"
            />
            <el-table-column
              prop="address"
              label="车架号"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="发动机号"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="品牌型号"
              show-overflow-tooltip
            /> <el-table-column
              prop="name"
              label="注册日期"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="商业险到期时间"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="交强险到期时间"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="投吧公司"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="商业险保单号"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="业务员"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="更新时间"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="操作"
              show-overflow-tooltip
            >
              <template slot-scope="scope">
                <a
                  style="color: blue"
                  @click="dialogVisible=true"
                >批改车牌</a>
              </template>
            </el-table-column>

          </el-table>
          <el-dialog
            title="批改车牌"
            :visible.sync="dialogVisible"
            width="400px"
            :before-close="handleClose"
            style="min-width: 600px"
          >
            <div>
              <el-row class="row" type="flex">
                <a span="9">
                  车主：
                </a>
                <p span="15">
                  哈哈哈哈
                </p>
              </el-row>
              <el-row class="row" type="flex">
                <a span="9">
                  发动机号：
                </a>
                <p span="15">
                  哈哈哈哈
                </p>
              </el-row>
              <el-row class="row" type="flex">
                <a span="9">
                  车架号：
                </a>
                <p span="15">
                  哈哈哈哈
                </p>
              </el-row>
              <el-row class="row" type="flex">
                <a span="9">
                  商业险保单号：
                </a>
                <p span="15">
                  哈哈哈哈
                </p>
              </el-row>
              <el-row class="row" type="flex">
                <a span="9">
                  交强险保单号：
                </a>
                <p span="15">
                  哈哈哈哈
                </p>
              </el-row>
              <el-row class="row" type="flex">
                <a span="9">
                  车牌号：
                </a>
                <p span="15">
                  <el-input v-model="input" placeholder="请输入内容" />
                </p>
              </el-row>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="dialogVisible = false">保存</el-button>
            </span>
          </el-dialog>

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
      <el-tab-pane label="已批改车牌" name="2">
        <div>
          <el-row class="row2" type="flex">
            <el-col span="2"><el-button style="color: black" @click="filter = true">筛选</el-button></el-col>
            <el-col span="6">
              <el-input v-model="conditionText" placeholder="请输入内容" class="input-with-select">
                <el-button slot="append" icon="el-icon-search" @click="search" />
              </el-input>
            </el-col>
            <el-col span="4" offset="14">
              <a style="color: blue">
                <i class="el-icon-download" />导出Excel
              </a>
              <!-- <a style="color: blue">
                 <i class="el-icon-setting" />Excel设置
               </a>
               <a style="color: blue">
                 <i class="el-icon-upload2" />导入台账
               </a>-->
            </el-col>
          </el-row>
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            size="mini"
            @selection-change="handleSelectionChange"
          >
            <el-table-column
              type="selection"
              width="55"
            />
            <el-table-column
              label="车牌号"
              width="120"
            />
            <el-table-column
              prop="baod"
              label="车主"
              width="120"
            />
            <el-table-column
              prop="address"
              label="车架号"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="发动机号"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="品牌型号"
              show-overflow-tooltip
            /> <el-table-column
              prop="name"
              label="注册日期"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="商业险到期时间"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="交强险到期时间"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="投吧公司"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="商业险保单号"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="业务员"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="更新时间"
              show-overflow-tooltip
            />
            <el-table-column
              prop="name"
              label="操作"
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
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'CorrectionCarNo',
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
      multipleSelection: [],
      dialogVisible: false

    }
  },
  methods: {
    handleClose(done) {
      this.dialogVisible = false
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
    height: 2.5em;
    text-align: left;
  }
  .row2{
    display: flex;
    align-items: center;
    height: 3.5em;
    text-align: left;
  }
  .row a{
    text-align: right;
    width: 30%;
  }
</style>
