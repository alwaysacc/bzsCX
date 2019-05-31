<template>
  <div v-loading.fullscreen.lock="loading">
    <el-row>
      <a class="top-a" style="float: right;cursor:pointer;" @click="toUpdate">不续保，直接报价>></a>
    </el-row>
    <div
      class="center-div"
    >
      <el-tabs
        v-model="activeName"
        type="card"
        :stretch="true"
        @tab-click="aaa"
      >
        <el-tab-pane label="车牌号" name="first">
          <el-form label-width="100px" :model="formLabelAlign">
            <el-form-item label="车牌号" style="margin-top: 30px">
              <el-select v-model="before" style="width: 20%;">
                <el-option label="苏" value="苏" />
              </el-select>
              <el-input v-model="carNo" style="width: 78%" @input="setCarNo" />
            </el-form-item>
            <el-form-item label="车主证件号">
              <el-input v-model="idCard" placeholder="车主证件号后六位，仅平安续保需要" style="width: 100%" />
            </el-form-item>
            <el-form-item label="上年投保公司">
              <el-select v-model="lastYearSource" placeholder="选择上家投保公司可提高查询速度" label-suffix="asda" style="width: 100%">
                <el-option label="太平洋" value="1" />
                <el-option label="平安" value="2" />
                <el-option label="人保" value="4" />
              </el-select>
            </el-form-item>
            <el-form-item label="投保地区">
              <el-select v-model="insuredArea" style="width: 100%">
                <el-option label="南京" value="nanjing" />
                <el-option label="北京" value="beijing" />
              </el-select>
            </el-form-item>
            <el-button type="primary" @click="onSubmit">下一步</el-button>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="车架号、发动机号" name="second">
          <p class="center-p">平安、太平洋、人保（自己渠道）续保，可只用车架号</p>
          <el-form label-width="100px" :model="formLabelAlign">
            <el-form-item label="车架号">
              <el-input v-model="vinNo" style="width: 100%" />
            </el-form-item>
            <el-form-item label="发动机号">
              <el-input v-model="engineNo" style="width: 100%" />
            </el-form-item>
            <el-form-item label="上年投保公司">
              <el-select v-model="lastYearSource" placeholder="选择上家投保公司可提高查询速度" label-suffix="asda" style="width: 100%">
                <el-option label="太平洋" value="1" />
                <el-option label="平安" value="2" />
                <el-option label="人保" value="4" />
              </el-select>
            </el-form-item>
            <el-form-item label="投保地区">
              <el-select v-model="insuredArea" style="width: 100%">
                <el-option label="南京" value="nanjing" />
                <el-option label="北京" value="beijing" />
              </el-select>
            </el-form-item>
            <el-button type="primary" @click="onSubmit">下一步</el-button>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { checkByCarNoOrVinNo } from '../../api/userApi'
export default {
  name: '',
  data() {
    return {
      loading: false,
      before: '苏',
      activeName: 'first',
      checkType: 0,
      carNo: '',
      idCard: '',
      vinNo: '',
      engineNo: '',
      lastYearSource: '',
      insuredArea: '',
      createBy: '',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      },
      province: {

      },
      nanjing: '苏',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  created() {
  },
  methods: {
    aaa(e) {
      if (e.name === 'second') {
        this.checkType = 1
      } else {
        this.checkType = 0
      }
    },
    onSubmit() {
      switch (this.checkType) {
        case 0:
          if (this.carNo.length < 6) {
            this.$alert('请输入正确的车牌号', '提示', {
              confirmButtonText: '确定'
            })
            return false
          }
          if (this.lastYearSource === '2') {
            if (this.idCard.length < 6) {
              this.$alert('平安续保请输入车主证件后六位', '提示', {
                confirmButtonText: '确定'
              })
              return false
            }
          }
          break
        case 1:
          if (this.vinNo.length < 17) {
            this.$alert('请输入正确的车架号', '提示', {
              confirmButtonText: '确定'
            })
            return false
          }
          break
      }
      const loading = this.$loading({
        lock: true,
        text: '正在努力续保中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      // console.log(JSON.parse(this.$store.getters.user))
      const user = JSON.parse(this.$store.getters.user)
      const params = {
        checkType: this.checkType,
        carNo: this.before + this.carNo,
        idCard: this.idCard,
        vinNo: this.vinNo,
        engineNo: this.engineNo,
        lastYearSource: this.lastYearSource,
        insuredArea: this.insuredArea,
        createBy: user.accountId
      }
      let a = 0
      if (this.lastYearSource === '') {
        params.lastYearSource = 4
        checkByCarNoOrVinNo(params).then(res => {
          a = a + 1
          console.log(res)
          if (res.code === 200) {
            a = 5
            loading.close()
            this.$router.push({ path: '/user/selectInsurance', query: { insurance: JSON.stringify(res.data) }})
          } else {
            if (a === 3) {
              loading.close()
              this.$message({
                type: 'error',
                message: '未获取到续保信息'
              })
            }
          }
        })
        params.lastYearSource = 2
        checkByCarNoOrVinNo(params).then(res => {
          a = a + 1
          console.log(res)
          if (res.code === 200) {
            a = 5
            loading.close()
            this.$router.push({ path: '/user/selectInsurance', query: { insurance: JSON.stringify(res.data) }})
          } else {
            if (a === 3) {
              loading.close()
              this.$message({
                type: 'error',
                message: '未获取到续保信息'
              })
            }
          }
          /* else if(res.code===300){
            this.$message({
              type: 'error',
              message: res.message
            })
          } else {
            this.$message({
              type: 'error',
              message: res.message
            })
            this.$router.push({ path: '/user/addQuote2', query: { carNo: this.before + this.carNo }})
          }*/
        })
        params.lastYearSource = 1
        checkByCarNoOrVinNo(params).then(res => {
          a = a + 1
          console.log(res)
          if (res.code === 200) {
            a = 5
            loading.close()
            this.$router.push({ path: '/user/selectInsurance', query: { insurance: JSON.stringify(res.data) }})
          } else {
            if (a === 3) {
              loading.close()
              this.$message({
                type: 'error',
                message: '未获取到续保信息'
              })
            }
          }
        })
      } else {
        checkByCarNoOrVinNo(params).then(res => {
          this.loading = false
          loading.close()
          if (res.code === 200) {
            this.$router.push({ path: '/user/selectInsurance', query: { insurance: JSON.stringify(res.data) }})
          } else {
            this.$message({
              type: 'error',
              message: '获取续保信息失败'
            })
          }
          /* else {
            this.$message({
              type: 'error',
              message: res.message
            })
            this.$router.push({ path: '/user/addQuote2', query: { carNo: this.before + this.carNo }})
          }*/
        })
      }
      // const params = {
      //   checkType: this.checkType,
      //   carNo: this.before + this.carNo,
      //   idCard: this.idCard,
      //   vinNo: this.vinNo,
      //   engineNo: this.engineNo,
      //   lastYearSource: this.lastYearSource,
      //   insuredArea: this.insuredArea,
      //   createBy: user.accountId
      // }
      // checkByCarNoOrVinNo(params).then(res => {
      //   console.log(res)
      //   this.loading = false
      //   loading.close()
      //   if (res.code === 200) {
      //     this.$router.push({ path: '/user/selectInsurance', query: { insurance: JSON.stringify(res.data) }})
      //   } else if(res.code===300){
      //     this.$message({
      //       type: 'error',
      //       message: res.message
      //     })
      //   } else {
      //     this.$message({
      //       type: 'error',
      //       message: res.message
      //     })
      //     this.$router.push({ path: '/user/addQuote2', query: { carNo: this.before + this.carNo }})
      //   }
      // })
    },
    toUpdate() {
      this.$router.push('/user/addQuote2')
    },
    setCarNo(e) {
      var reg = /[\u4e00-\u9fa5]/g
      this.carNo = e.toUpperCase().replace(reg, '')
    }
  }
}
</script>

<style scoped>
    .center-div{
        text-align: center;
        margin: 0 auto;
        width: 400px;
        height: 500px;
        margin-top: 10px;
    }
    .top-a{
        margin-top: 10px;
        font-size: 10px;
        color: #8c939d;
        margin-right: 50px;
    }
    .center-p{
        margin: 0 auto;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        width: 80%;
        background-color: #dfe6ec;
    }
</style>
