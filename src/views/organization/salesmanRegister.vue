<template>
  <div>
    <div class="home">
      <el-row>
        <el-col span="8" style="padding-right:1em;border-right: #8c939d 1px solid">
          <div style="width: 80%;text-align: center">
            <h2>微信扫描下方二维码</h2>
            <qrcode
              :url="url"
              wid="200"
              hei="200"
              imgwid="50"
              imghei="50"
            />
          </div>
          <p class="text">您也可以复制该链接直接发送到业务员得微信</p>
          <p class="text" style="color: blue">{{ url }}</p>
          <p class="text" style="color: red">注意：请务必让业务员收藏该链接，以便下次能找到</p>
        </el-col>
        <el-col span="16" style="padding-left: 2em">
          <h2>注册方法：</h2>
          <p class="magin-a">第一步：让业务员打开微信扫描二维码，并点击右上角收藏链接；</p>
          <p class="magin-a">第二步：让业务员在手机上填写姓名，手机号，以及登陆账号、密码；</p>
          <p class="magin-a">第三步：管理员在业务员管理菜单审核该业务员得账号，设置其角色以及权限，并将状态设置为“启用”。</p>

          <p style="margin-top: 3em">业务员可以重新打开原有链接输入账号、密码登陆微信端，也可以在PC端登陆机器人。</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import qrcode from 'vue_qrcodes'
export default {
  name: '',
  components: {
    qrcode
  },
  data() {
    return {
      url: 'https://www.baozhishun.com/reg?invitecode='
    }
  },
  created() {
    const user = JSON.parse(this.$store.getters.user)
    console.log(user)
    this.url = this.url + user.invitecode + '&accountId=' + user.accountId
    console.log(this.url)
  }
}
</script>

<style scoped>
    .home{
        margin: 1em 1em;
    }
.text{
    margin-top: 0.5em;
}
    .magin-a{
        margin-top: 2em;
    }
</style>
