<template>
  <div>
    <div class="home">
      <el-row class="row-style">
        <el-col span="6">
          <el-input v-model="input" placeholder="车牌号" style="width: 90%" />
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
          <el-input v-model="input" placeholder="投保人" style="width: 90%" />
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
          <el-select v-model="stat" placeholder="出单员" style="width: 90%">
            <el-option label="平安" value="shi" />
            <el-option label="太平洋" value="fou" />
          </el-select>
        </el-col>
      </el-row>
      <el-row style="text-align: right">
        <el-col offset="17" span="1">
          <el-button type="primary">搜索</el-button>
        </el-col>
        <el-col span="3">
          <el-button type="primary">批量审核</el-button>
        </el-col>
        <el-col span="3">
          <el-button type="primary" @click="dialogVisible = true">新增业务员</el-button>
          <el-dialog
            title="新增业务员"
            :visible.sync="dialogVisible"
            width="40%"
            top="6vh"
            style="text-align: left;"
            :before-close="handleClose"
          >

            <div style="margin-left: 10%;">
              <el-row class="row-style">
                <el-col span="5">业务员姓名</el-col>
                <el-col span="12">
                  <el-input v-model="accountInfo.userName" placeholder="请输入业务员姓名" />
                </el-col>
              </el-row>
              <el-row class="row-style">
                <el-col span="5">业务员手机号</el-col>
                <el-col span="12">
                  <el-input v-model="accountInfo.mobile" placeholder="请输入业务员手机号" />
                </el-col>
              </el-row>
              <el-row class="row-style">
                <el-col span="5">业务员账号</el-col>
                <el-col span="12">
                  <el-input v-model="accountInfo.loginName" placeholder="请输入业务员账号" />
                </el-col>
              </el-row>
              <el-row class="row-style">
                <el-col span="5">业务员密码</el-col>
                <el-col span="12">
                  <el-input v-model="accountInfo.loginPwd" placeholder="请输入业务员密码" type="password" show-password="true" />
                </el-col>
              </el-row>

            </div>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="save">确 定</el-button>
            </span>
          </el-dialog>
        </el-col>
      </el-row>
      <el-table
        v-loading="loading"
        :data="tableData"
        max-height="600"
        tooltip-effect="dark"
        border
        size="small"
        style="width: 100%;margin-top: 0.5em"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="index"
          label=""
          width=""
        />
        <el-table-column
          prop="user_name"
          label="业务员姓名"
          width=""
        />
        <el-table-column
          prop="mobile"
          label="手机号"
        />
        <el-table-column
          prop="login_name"
          label="机器人账号"
        />
        <el-table-column
          prop="role_name"
          label="角色"
        />
        <el-table-column
          prop="parent_id"
          label="上级业务员"
        />
        <el-table-column
          prop="address"
          label="上级邀请码"
        />
        <el-table-column
          prop="CREATED_TIME"
          label="注册时间"
        />
        <el-table-column
          prop="delete_status"
          label="状态"
          :formatter="deal"
        />

        <el-table-column
          prop="address"
          width="180"
          label="操作"
        >
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >{{ scope.row.account_state=='0'?'禁用':'启用' }}</el-button>
            <el-dialog
              title="提示"
              :visible.sync="deleteDialog"
              width="30%"
            >
              <span>确定{{ param.account_state=='0'?'禁用':'启用' }}此账号吗？</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="deleteDialog = false">取 消</el-button>
                <el-button type="primary" @click="okDelete">确 定</el-button>
              </span>
            </el-dialog>
          </template>
        </el-table-column>
      </el-table>
      <el-row>
        <el-col span="24" style="text-align: right;margin-top: 0.5em;margin-right: 1em">
          <el-pagination
            :current-page="currentPage"
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
  </div>
</template>

<script>
import { addAccount, getUserList, update } from '../../api/organApi'
export default {
  name: '',
  components: {
  },
  data() {
    return {
      deleteDialog: false,
      accountInfo: {
        loginName: '',
        loginPwd: '',
        mobile: '',
        userName: ''
      },
      tableData: [],
      dialogVisible: false,
      input: '',
      stat: '',
      page: 0,
      size: 10,
      count: '',
      currentPage: 1,
      loading: false,
      param: ''
    }
  },
  created() {
    this.userList()
  },
  methods: {
    userList() {
      this.loading = true
      const user = JSON.parse(this.$store.getters.user)
      const params = {
        accountId: user.accountId,
        roleId: user.roleId
      }
      getUserList(params).then(res => {
        console.log(res)
        if (res.code === 200) {
          this.loading = false
          this.tableData = res.data.list
          this.count = res.data.total
        }
      })
    },
    save() {
      const params = this.accountInfo
      const user = JSON.parse(this.$store.getters.user)
      params.parentId = user.accountId
      addAccount(params).then(res => {
        console.log(res)
        if (res.code === 200) {
          this.$message({
            type: 'success',
            message: '添加成功'
          })
          this.dialogVisible = false
        }
        this.userList()
      })
    },
    handleDelete(e, e1) {
      console.log(e1)
      this.param = e1
      this.deleteDialog = true
    },
    okDelete(e) {
      let a = '1'
      let msg = '禁用成功'
      if (this.param.account_state === '1') {
        a = '0'
        msg = '启用成功'
      }
      const param = {
        accountId: this.param.account_id,
        accountState: a
      }
      update(param).then(res => {
        this.deleteDialog = false
        console.log(res)
        if (res.code === 200) {
          this.$message({
            type: 'success',
            message: msg
          })
        }
        this.userList()
      })
    },
    handleSizeChange(val) {
      this.size = val
      this.userList()
    },
    handleCurrentChange(val) {
      this.page = val
      this.userList()
    },
    deal(row, column, cellValue, index) {
      console.log(row)
      if (row.account_state == '0') {
        return '可用'
      } else if(row.account_state == '1'){
        return '不可用'
      }else{
        return '待审核'
      }
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
