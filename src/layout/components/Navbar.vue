<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="'http://alwaysacc.club/tx1.jpg'" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              首页
            </el-dropdown-item>
          </router-link><!--
          <a target="_blank" href="https://github.com/PanJiaChen/vue-admin-template/">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
            <el-dropdown-item>Docs</el-dropdown-item>
          </a>-->
          <el-dropdown-item>
            <span style="display:block;" @click="showDialog">账号设置</span>
          </el-dropdown-item>
          <el-dialog
            title="报价渠道设置"
            :append-to-body="append"
            :visible.sync="dialogVisible"
            min-width="30%"
            top="5vh"
          >
            <div v-loading="loading" style="">
              <el-tabs v-model="activeName"  stretch @tab-click="handleClick">
                <el-tab-pane label="太平洋保险" name="1">
                  <el-form ref="form" label-width="80px">
                    <el-form-item label="IP">
                      <el-input v-model="tpy.ip" class="input-width" />
                    </el-form-item>
                    <el-form-item label="端口">
                      <el-input v-model="tpy.port" class="input-width" />
                    </el-form-item>
                  </el-form>
                </el-tab-pane>
                <el-tab-pane label="人民保险" name="4">
                  <el-form ref="form" label-width="80px">
                    <el-form-item label="IP">
                      <el-input v-model="rb.ip" class="input-width" />
                    </el-form-item>
                    <el-form-item label="端口">
                      <el-input v-model="rb.port" class="input-width" />
                    </el-form-item>
                  </el-form>
                </el-tab-pane>
                <el-tab-pane label="平安保险" name="2">
                  <el-form ref="form" label-width="80px">
                    <el-form-item label="账号">
                      <el-input v-model="pa.accountName" class="input-width" />
                    </el-form-item>
                    <el-form-item label="密码">
                      <el-input v-model="pa.accountPwd" type="password" show-password class="input-width" />
                    </el-form-item>
                    <el-form-item label="IP">
                      <el-input v-model="pa.ip" class="input-width" />
                    </el-form-item>
                    <el-form-item label="端口">
                      <el-input v-model="pa.port" class="input-width" />
                    </el-form-item>
                  </el-form>
                </el-tab-pane>
              </el-tabs>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="setAccount">确 定</el-button>
            </span>
          </el-dialog>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import { queryConditions ,addOrUpdate} from '../../api/userApi'
export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  data() {
    return {
      append:true,
      dialogVisible: false,
      form: {},
      activeName: '1',
      a: '1',
      source: '',
      accountName: '',
      accountPwd: '',
      ip: '',
      port: '',
      loading: true,
      tpy: {},
      rb: {},
      pa: {}
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login`)
    },
    setAccount() {
      let params =  {}
      switch (this.activeName) {
        case '1':
          params=this.tpy
          break
        case '2':
          params=this.pa
          break
        case '4':
          params=this.rb
          break
      }
      delete params.updateTime
      delete params.createTime
      params.status=1
      addOrUpdate(params).then(res => {
        console.log(res)
        if (res.code === 200) {
          this.dialogVisible=false
        }
      })
    },
    showDialog(e) {
      this.dialogVisible = true
      const user = JSON.parse(this.$store.getters.user)
      const params = {
        accountId: user.accountId,
        status: 1
      }
      queryConditions(params).then(res => {
        console.log(res)
        if (res.code === 200) {
          for (let i = 0; i < res.data.length; i++) {
            console.log(res.data[i])
            switch (res.data[i].accountType) {
              case '1':
                this.tpy = res.data[i]
                break
              case '2':
                this.pa = res.data[i]
                break
              case '4':
                this.rb = res.data[i]
                break
            }
          }
          this.loading = false
        }
      })
    },
    handleClick(tab, event) {
      const a = this.activeName
      console.log(tab)
      console.log(event)
      if (this.a != this.activeName) {
        this.a = this.activeName
        this.ip = ''
        this.port = ''
        this.accountName = ''
        this.accountPwd = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .input-width{
    width: 200px;
  }
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
