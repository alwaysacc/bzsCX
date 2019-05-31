<template>
  <div>
    <div class="home">
      <el-row style="margin-bottom: 1em">
        <a style="color: red;">{{ msg }}</a>
      </el-row>
      <!-- <el-row class="color-row">
        <h4>配送信息</h4>
      </el-row>
      <el-row class="style-row">
        <el-col span="2">陈玟凤</el-col>
        <el-col span="3">15515621478</el-col>
        <el-col span="2">网点自取</el-col>
      </el-row>-->
      <el-row class="color-row">
        <h4>商品信息</h4>
      </el-row>
      <el-row class="center-rows">
        <el-col span="1"style="text-align: center">
          <img :src="imgUrl">
          <a style="width: 100%;margin-top: 0.1em">{{ map.quoteInfo.quoteInsuranceName }}</a>
        </el-col>
        <el-col span="15" class="center-col">
          <p>{{ map.carInfo.carNumber }}({{ map.carInfo.carModel }})
            <span style="color: #1d90e6;margin-left: 2em;cursor: pointer" @click="toInsuranceInfo">
              >> 查看详情
            </span>
          </p>
          <p style="font-size: 13px; display: inline-block;white-space: nowrap;width: 100%;overflow: hidden;text-overflow:ellipsis;">
            <a v-for="i in map.insuredList">{{ i.insurance_name }}({{ i.standard_premium }}元)</a></p>
          <p style="font-size: 13px">投保人：{{ map.carInfo.licenseOwner }} <!--商业保单号：TA5445465453543543543534 交强险保单号：TSDDFS32532135353535335--></p>
        </el-col>
        <el-col span="2" class="p-col">
          <p>保单原价</p>
          <p>￥{{ price }}</p>
        </el-col>
        <el-col span="2" class="p-col">
          <p>商业险优惠</p>
          <p>0%</p>
        </el-col>
        <el-col span="2" class="p-col">
          <p>交强险优惠</p>
          <p>0%</p>
        </el-col>
      </el-row>
      <!--<el-row class="bottom-row">
        <el-col offset="2" span="5">
          <p>业务员：保之顺（15512345678）</p>
          <p>出单员：保之顺（15512345678）</p>
        </el-col>
        <el-col offset="12" span="5">
          <p>&emsp;收款方：保险公司</p>
          <p>保单原价：￥2652.56</p>
          <p>应返金额：￥0.00</p>
          <p>应付金额：￥2652.00</p>
        </el-col>
      </el-row>-->
      <el-row class="color-row">
        <h4>付款信息</h4>
      </el-row>
      <el-row style="margin-left: 3em;margin-top: 0.5em"><!--支付倒计时:<span>2019年5月16日10:47:23</span>-->
      </el-row>
      <el-row style="margin-top: 1em">
        <el-col span="6" style="text-align: center">
          <qrcode
            v-if="show"
            :url="url"
            :iconurl="imgUrl"
            wid="200"
            hei="200"
            imgwid="50"
            imghei="50"
          />
          <img v-if="!show" style="width: 200px" :src="url">
        </el-col>
        <el-col span="7" style="text-align: left">
          <p style="color: red">请于{{ this.map.orderInfo.createTime | formatDate }}之前扫码支付</p>
          <el-row class="line-row">
            <el-col span="6">支付方式：</el-col>
            <el-col span="10">微信支付</el-col>
          </el-row>
          <el-row class="line-row">
            <el-col span="6">车牌号：</el-col>
            <el-col span="10">{{ map.carInfo.carNumber }}</el-col>
          </el-row>
          <el-row class="line-row">
            <el-col span="6">金额：</el-col>
            <el-col span="10">{{ price }}元</el-col>
          </el-row>
          <el-row class="line-row">
            <el-col span="6">姓名：</el-col>
            <el-col span="10">{{ map.carInfo.licenseOwner }}</el-col>
          </el-row>
          <el-row class="line-row">
            <el-col span="6">缴费单号：</el-col>
            <el-col span="10">{{ map.quoteInfo.paymentNotice }}</el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="bot">
      <el-button type="primary" @click="payCancel">取消订单</el-button>  <el-button type="primary">确认支付</el-button>
    </div>
  </div>
</template>
<script>
import qrcode from 'vue_qrcodes'
import { getOrderDetails, payCancel } from '../../api/orderApi'
import zkTimeDown from '../../components/countdown'
export default {
  name: '',
  components: {
    qrcode,
    // eslint-disable-next-line vue/no-unused-components
    zkTimeDown
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
      d = d + 3
      return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s
    }
  },
  data() {
    return {
      url: '',
      imgUrl: '',
      map: [],
      msg: '',
      endTime: '',
      startTime: '',
      show: false,
      price: ''
    }
  },
  created() {
    this.orderDetails()
  },
  methods: {
    payCancel() {
      const loading = this.$loading({
        lock: true,
        text: '拼命加载中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      const user = JSON.parse(this.$store.getters.user)
      const params = {
        proposalNo: this.map.quoteInfo.proposalNo,
        createdBy: user.accountId,
        quoteId: this.map.quoteInfo.quoteId,
        source: this.map.quoteInfo.quoteSource,
        orderId: this.map.orderInfo.orderId
      }
      payCancel(params).then(res => {
        loading.close()
        if (res.code === 200) {
          this.$message({
            type: 'error',
            message: '取消成功'
          })
        }
        console.log(res)
      })
    },
    toInsuranceInfo() {
      this.$router.push({ path: '/user/insuranceInfo', query: { map: JSON.stringify(this.map) }})
    },
    orderDetails() {
      const params = {
        orderId: this.$route.query.order_id
      }
      getOrderDetails(params).then(res => {
        console.log(res)
        if (res.code == 200) {
          if (res.data.quoteInfo.bizPremiumByDis != null) {
            res.data.quoteInfo.bizPremiumByDis = res.data.quoteInfo.bizPremiumByDis.replace(',', '')
            res.data.quoteInfo.bizPremiumByDis = parseFloat(res.data.quoteInfo.bizPremiumByDis)
          }
          this.map = res.data
          if (this.map.quoteInfo.quoteSource == '4') {
            this.show = true
            this.url = this.map.quoteInfo.payUrl
          } else {
            this.url = this.map.quoteInfo.payUrl
          }

          this.set()
        }
      })
    },
    set() {
      this.price = (this.map.quoteInfo.bizPremiumByDis + this.map.quoteInfo.forceTotal + this.map.quoteInfo.taxTotal).toFixed(2)
      /*      this.startTime=this.map.orderInfo.createTime
      this.endTime=this.startTime+86400*10
      console.log(this.startTime,this.endTime)
      let a=Date.parse(new Date())
      this.currentTime=a
      console.log(a)*/
      switch (this.map.quoteInfo.quoteSource) {
        case '1':
          this.imgUrl = 'http://bao.91bihu.com/resources/images/quote/tpy.png'
          break
        case '2':
          this.imgUrl = 'http://bao.91bihu.com/resources/images/quote/pa.png'
          break
        case '4':
          this.imgUrl = 'http://bao.91bihu.com/resources/images/quote/rb.png'
          break
      }
      switch (this.map.orderInfo.payStatus) {
        case 0:
          this.msg = '订单待支付'
          break
        case 1:
          this.msg = '订单已支付'
          break
      }
    }
  }
}
</script>

<style scoped>
.home{
    margin: 2em 1em 0 1em;
}
    .color-row{
        background-color: #f5f5f5;
        height: 3em;
        line-height: 3em;
        padding-left: 0.5em;
    }
    .style-row{
        height: 3em;
        line-height: 3em;
        padding-left: 0.5em;
    }
    .center-rows{
        margin-top: 1em;
        padding: 1em 1em;
        border: #8c939d 1px dashed;
    }
    .center-col{
        margin-left: 1em;

    }
    .center-col p{
        line-height: 2em;
        height: 2em;
    }
    .p-col{
        padding-top: 1.5em;
    }
    .p-col p{
        text-align: center;
        line-height: 2em;
        height: 2em;
    }
    .bottom-row{
        margin-top: 2em;
    }
    .bottom-row p{
        height: 2em;
        line-height: 2em;
    }
    .line-row{
      height: 2.5em;
      line-height: 2.5em;
      border-bottom: #1f2d3d  1px solid;
    }
    .line-row>:first-child{
      text-align-last: justify;
    }
    .bot{
        position: fixed;
        width: 100%;
        height: 4em;
        line-height: 4em;
        bottom: 0;
        text-align: center;
      background-color: #f5f5f5;
    }
</style>
