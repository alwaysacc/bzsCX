<template>
  <div>
    <div class="home">
      <div class="top">
        <el-row class="line-row">
          <el-col offset="2" span="10">
            车牌号码：{{ insurance.carNo }}
          </el-col>
          <el-col span="10">
            车主姓名：{{ insurance.personName }}
          </el-col>
        </el-row>
        <el-row class="line-row">
          <el-col offset="2" span="10">
            品牌型号：{{ insurance.vehicleFgwCode }}
          </el-col>
          <!--   <el-col span="10">
                        车型：{{insurance.personName}}
                    </el-col>-->
        </el-row>
        <!-- <el-row  class="line-row">
                    <el-col offset="2" span="10">
                        上年交强出险：
                    </el-col>
                    <el-col span="10">
                        上年商业出险：
                    </el-col>
                </el-row>-->
        <el-row class="line-row">
          <el-col offset="2" span="10">
            交强险到期时间：{{ this.$route.query.biBeginDate }}
          </el-col>
          <el-col span="10">
            商业险到期时间：{{ this.$route.query.ciBeginDate }}
          </el-col>
        </el-row>
      </div>
    </div>
    <div>
      <el-row v-if="tpy" v-loading="TPYloading" class="centers-divs" style="background-color: #f8f8f8">
        <el-col offset="1" span="5">
          <a class="img">
            <img src="../../assets/img/tpy.png" style="margin-right: 0.5em">太平洋
          </a>
        </el-col>
        <el-col span="11">
          <a style="color: red">
            {{ TPYmsg }}
          </a>
          <br>
          <a style="font-size: 12px">
            {{ TPYcause }}
          </a>
        </el-col>
        <el-col span="4">
          {{ TPYVerify }}
        </el-col>
        <el-col span="3">
          <a style="cursor: pointer;color: #1d90e6" @click="toDetail">
            查看详情
          </a>
        </el-col>
      </el-row>
      <el-row v-if="rb" v-loading="RBloading" class="centers-divs" style="background-color: #f8f8f8;margin-top:1em">
        <el-col offset="1" span="5">
          <a class="img">
            <img src="../../assets/img/rb.png" style="margin-right: 0.5em">人保
          </a>
        </el-col>
        <el-col span="11">
          <a style="color: red">
            {{ RBmsg }}
          </a>
          <br>
          <a style="font-size: 12px">
            {{ RBcause }}
          </a>
        </el-col>
        <el-col span="4">
          {{ RBVerify }}
        </el-col>
        <el-col span="3">
          <a style="cursor: pointer;color: #1d90e6" @click="toDetail">
            查看详情
          </a>
        </el-col>
      </el-row>
      <el-row v-if="pa" v-loading="PAloading" class="centers-divs" style="background-color: #f8f8f8;margin-top:1em">
        <el-col offset="1" span="5">
          <a class="img">
            <img src="../../assets/img/pa.png" style="margin-right: 0.5em">平安
          </a>
        </el-col>
        <el-col span="11">
          <a style="color: red">
            {{ PAmsg }}
          </a>
          <br>
          <a style="font-size: 12px">
            {{ PAcause }}
          </a>
        </el-col>
        <el-col span="4">
          {{ PAVerify }}
        </el-col>
        <el-col span="3">
          <a style="cursor: pointer;color: #1d90e6" @click="toDetail">
            查看详情
          </a>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { getQuoteInfoAllParams } from '../../api/userApi'
export default {
  name: '',
  components: {
  },
  data() {
    return {
      tpy: false,
      rb: false,
      pa: false,
      TPYmsg: '  ',
      TPYcause: '  ',
      TPYloading: false,
      TPYVerify: '   ',
      RBmsg: '  ',
      RBcause: '  ',
      RBloading: false,
      RBVerify: '   ',
      PAmsg: '  ',
      PAcause: '  ',
      PAloading: false,
      PAVerify: '   ',
      insurance: {
        name: '',
        cardID: '',
        mobile: '',
        email: '',
        frameNo: '',
        engineNo: '',
        source: '',
        retCode: '',
        retMsg: '',
        sendTime: '',
        jiaoqiangxian: '',
        vehicleFgwCode: '',
        firstRegisterDate: '',
        biBeginDate: '',
        carNo: '',
        ciBeginDate: '',
        state: '',
        prive: ''
      },
      carName: '',
      source: []
    }
  },
  watch: {
    $route(to, from) {
      if (to.path == '/submitQuote') {
        this.getQuoteForTPY()
      }
    }
  },
  created() {
    const a = '5,646.72'
    const b = '360.00'
    const c = '950.00'
    console.log()
    this.insurance = JSON.parse(this.$route.query.param)
    this.insurance.vehicleFgwCode = this.$route.query.vehicleFgwCode
    this.quoteSource(this.$route.query.source)
  },
  methods: {
    quoteSource(e) {
      for (let i = 0; i < e.length; i++) {
        if (e[i] === '1') {
          this.tpy = true
          this.getQuoteForTPY()
        } else if (e[i] === '2') {
          this.pa = true
          this.getQuoteForPA()
        } else if (e[i] === '4') {
          this.rb = true
          this.getQuoteForRB()
        }
      }
    },
    getQuoteForTPY() {
      this.TPYloading = true
      const params = JSON.parse(this.$route.query.param)
      params.source = 1
      console.log(1, params)
      getQuoteInfoAllParams(params).then(res => {
        console.log(res)
        this.TPYloading = false
        if (res.code == 200) {
          if (res.data.data.biPremiumByDis != null) {
            res.data.data.biPremiumByDis = res.data.data.biPremiumByDis.replace(',', '')
            res.data.data.biPremiumByDis = parseFloat(res.data.data.biPremiumByDis)
          }
          this.TPYmsg = parseFloat(res.data.data.carshipTax) + parseFloat(res.data.data.ciPremium) + res.data.data.biPremiumByDis
          this.TPYmsg = this.TPYmsg + '元'
          this.TPYcause = ''
          this.TPYVerify = '报价成功，核保成功'
        } else if (res.code == 400) {
          this.TPYmsg = '报价失败'
          this.TPYVerify = '核保失败'
          this.TPYcause = '失败原因：' + res.message
          /* if (res.message.indexOf("重复投保")!= -1) {
                            this.TPYcause ='失败原因：重复投保'
                        }else{
                            this.TPYcause ='失败原因：'+res.data
                        }*/
        } else if (res.code == 300) {
          this.TPYmsg = '报价成功'
          this.TPYVerify = '核保失败'
        }
      })
    },
    getQuoteForRB() {
      this.RBloading = true
      const params = JSON.parse(this.$route.query.param)
      params.source = 4
      console.log(4, params)
      getQuoteInfoAllParams(params).then(res => {
        console.log(res)
        this.RBloading = false
        if (res.code === 200) {
          if (res.data.data.biPremiumByDis != null) {
            res.data.data.biPremiumByDis = res.data.data.biPremiumByDis.replace(',', '')
            res.data.data.biPremiumByDis = parseFloat(res.data.data.biPremiumByDis)
          }
          this.RBmsg = parseFloat(res.data.data.carshipTax) + parseFloat(res.data.data.ciPremium) + res.data.data.biPremiumByDis
          this.RBmsg = this.TPYmsg + '元'
          this.RBcause = ''
          this.RBVerify = '报价成功，核保成功'
        } else if (res.code === 400) {
          this.RBmsg = '报价失败'
          this.RBVerify = '核保失败'
          this.RBcause = '失败原因：' + res.message
          /* if (res.message.indexOf("重复投保")!= -1) {
                             this.TPYcause ='失败原因：重复投保'
                         }else{
                             this.TPYcause ='失败原因：'+res.data
                         }*/
        } else if (res.code == 300) {
          this.RBmsg = '报价成功'
          this.RBVerify = '核保失败'
        }
      })
    },
    getQuoteForPA() {
      this.PAloading = true
      // eslint-disable-next-line no-unused-vars
      const params = JSON.parse(this.$route.query.param)
      params.source = 2
      console.log(2, params)
      getQuoteInfoAllParams(params).then(res => {
        console.log(res)
        this.PAloading = false
        if (res.code == 200) {
          if (res.data.data.biPremiumByDis != null) {
            res.data.data.biPremiumByDis = res.data.data.biPremiumByDis.replace(',', '')
            res.data.data.biPremiumByDis = parseFloat(res.data.data.biPremiumByDis)
          }
          this.PAmsg = parseFloat(res.data.data.carshipTax) + parseFloat(res.data.data.ciPremium) + res.data.data.biPremiumByDis
          this.PAmsg = this.TPYmsg + '元'
          this.PAcause = '  '
          this.PAVerify = '报价成功，核保成功'
        } else if (res.code == 400) {
          this.PAmsg = '报价失败'
          this.PAVerify = '核保失败'
          this.PAcause = '失败原因：' + res.message
          /* if (res.message.indexOf("重复投保")!= -1) {
                             this.TPYcause ='失败原因：重复投保'
                         }else{
                             this.TPYcause ='失败原因：'+res.data
                         }*/
        } else if (res.code == 300) {
          this.PAmsg = '报价成功'
          this.PAVerify = '核保失败'
        }
      })
    },
    toDetail() {
      this.$router.push({ path: '/user/userDetail', query: { car_info_id: this.$route.query.carInfoId }})
    }
  }
}
</script>

<style lang="scss" scoped>
    .home{
        padding:2em 0;
        margin: 0 auto;
    }
    .top{
        background-color: #f8f8f8;
        width: 80%;
        margin:0 auto;
    }
    .line-row{
        height: 3em;
        line-height: 3em;
    }
    .centers-divs{
        background-color: #f8f8f8;
        width: 80%;
        margin:0 auto;
        border: #dfe6ec 1px solid;
        padding-top: 2em;
        height: 6em;
    }

    .img{
        float: left;
        display:flex;
        align-items: center;//子元素垂直居中
        justify-content: center;//子元素水平居中
        height: 40px;
        line-height: 40px;
        margin-left: 30px;
    }
</style>
