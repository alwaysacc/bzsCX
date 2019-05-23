<template>
  <div>
    <div class="home">
      <!--  <el-row class="row-back">
        <el-col>
          配送信息
        </el-col>
      </el-row>
      <el-row class="line-row">
        <el-col>
          配送方式：
          <el-radio v-model="radio" label="1">快递保单</el-radio>
          <el-radio v-model="radio" label="2">网点配送</el-radio>
          <el-radio v-model="radio" label="3">网点自取</el-radio>
        </el-col>
      </el-row>
      <el-row class="line-row">
        <el-col span="8">
          配送地址：<el-input v-model="input" style="width: auto" />
        </el-col>
        <el-col span="8">
          联系人：<el-input v-model="input" style="width: auto" />
        </el-col>
        <el-col span="8">
          联系电话：<el-input v-model="input" style="width: auto" />
        </el-col>
      </el-row>-->
      <el-row class="row-back" style="margin-top: 1em">
        <el-col>
          关系人信息
        </el-col>
      </el-row>
      <el-row class="line">
        <el-col span="20">
          <a style="font-weight: bold">车主信息</a>
        </el-col>
        <el-col v-if="" span="4" />
      </el-row>
      <div class="text-right">
        <el-row class="row">
          <el-col span="4">
            车主姓名：
          </el-col>
          <el-col span="4">
            <el-input v-model="map.carInfo.licenseOwner" style="width: 100%" />
          </el-col>
          <el-col span="4">
            证件类型：
          </el-col>
          <el-col span="4">
            <el-select v-model="map.carInfo.licenseOwnerIdCardType" placeholder="身份证" style="width: auto">
              <el-option label="身份证" value="1" />
              <el-option label="组织机构代码证" value="2" />
              <el-option label="营业执照/统一社会信用代码" value="3" />
              <el-option label="港澳居民来往内地通行证" value="4" />
              <el-option label="港澳身份证" value="5" />
            </el-select>
          </el-col>
          <el-col span="3">
            证件号码:
          </el-col>
          <el-col span="5">
            <el-input v-model="map.carInfo.licenseOwnerIdCard" style="width: 100%" />
          </el-col>
        </el-row>
        <el-row class="row">
          <el-col span="4">
            电话：
          </el-col>
          <el-col span="4">
            <el-input v-model="map.carInfo.mobile" style="width: 100%" />
          </el-col>
          <el-col span="4">
            邮箱：
          </el-col>
          <el-col span="4">
            <el-input v-model="map.carInfo.email" style="width: 100%" />
          </el-col>
        </el-row>
      </div>
      <el-row class="line">
        <el-col span="3">
          <a style="font-weight: bold">被保险人信息</a>
        </el-col>
        <el-col span="21">
          <el-switch
            v-model="owner"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
          <a style="color: red">被保险人与车主一致</a>
        </el-col>
      </el-row>
      <div class="text-right">
        <el-row v-if="!owner" class="row">
          <el-col span="4">
            被保险人姓名：
          </el-col>
          <el-col span="4">
            <el-input v-model="map.carInfo.licenseOwner" style="width: 100%" />
          </el-col>
          <el-col span="4">
            证件类型：
          </el-col>
          <el-col span="4">
            <el-select v-model="map.carInfo.licenseOwnerIdCardType" placeholder="身份证" style="width: auto">
              <el-option label="身份证" value="1" />
              <el-option label="组织机构代码证" value="2" />
              <el-option label="营业执照/统一社会信用代码" value="3" />
              <el-option label="港澳居民来往内地通行证" value="4" />
              <el-option label="港澳身份证" value="5" />
            </el-select>
          </el-col>
          <el-col span="3">
            证件号码:
          </el-col>
          <el-col span="5">
            <el-input v-model="map.carInfo.licenseOwnerIdCard" style="width: 100%" />
          </el-col>
        </el-row>
      </div>
      <el-row class="line">
        <el-col span="3">
          <a style="font-weight: bold">投保人信息</a>

        </el-col>
        <el-col span="21">
          <el-switch
            v-model="toubaoren"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
          <a style="color: red">投保人与车主一致</a>
        </el-col>
      </el-row>
      <div class="text-right">
        <el-row v-if="!toubaoren" class="row">
          <el-col span="4">
            投保人姓名：
          </el-col>
          <el-col span="4">
            <el-input v-model="map.carInfo.licenseOwner" style="width: 100%" />
          </el-col>
          <el-col span="4">
            证件类型：
          </el-col>
          <el-col span="4">
            <el-select v-model="map.carInfo.licenseOwnerIdCardType" placeholder="身份证" style="width: auto">
              <el-option label="身份证" value="1" />
              <el-option label="组织机构代码证" value="2" />
              <el-option label="营业执照/统一社会信用代码" value="3" />
              <el-option label="港澳居民来往内地通行证" value="4" />
              <el-option label="港澳身份证" value="5" />
            </el-select>
          </el-col>
          <el-col span="3">
            证件号码:
          </el-col>
          <el-col span="5">
            <el-input v-model="map.carInfo.licenseOwnerIdCard" style="width: 100%" />
          </el-col>
        </el-row>
      </div>
      <el-row class="row-back" style="margin-top: 1em">
        <el-col>
          投保详情
        </el-col>
      </el-row>
      <div class="center">
        <el-row style="display: flex;align-content: center">
          <el-col span="3" style="text-align: center">
            <img v-if="map.quote.quoteSource=='1'" src="../../assets/img/tpy.png">
            <img v-if="map.quote.quoteSource=='2'" src="../../assets/img/pa.png">
            <img v-if="map.quote.quoteSource=='4'" src="../../assets/img/rb.png">
            <p>{{ map.quote.quoteInsuranceName }}</p>
          </el-col>
          <el-col span="11">
            <p>
              {{ map.carInfo.carNumber }}（{{ map.carInfo.carModel }}）
            </p>
            <p style="margin-bottom: 5px;
            height: 6em;
            overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
">
              <a v-for="quote in map.quoteList">{{ quote.insurance_name }}{{ quote.standard_premium }}元,</a>
            </p>
            <br>
            <!-- <p>
              投保人：{{ map.carInfo.licenseOwner }}
            </p>-->
          </el-col>

          <el-col span="2">
            <p>
              保单原价
            </p>
            <p class="el-input el-input-group el-input-group--append">
              ￥{{ map.quote.bizPremiumByDis }}
            </p>
          </el-col>
          <el-col span="3">
            <p>
              商业险优惠
            </p>
            <p>
              <el-input v-model="bi" placeholder="0">
                <template slot="append">%</template>
              </el-input>
            </p>
          </el-col>
          <el-col offset="1" span="3">
            <p>
              交强险优惠
            </p>
            <p>
              <el-input v-model="ci" placeholder="0">
                <template slot="append">%</template>
              </el-input>
            </p>
          </el-col>
        </el-row>
      </div>
      <!-- <el-row class="bot-p">
        <el-col span="6">
          备注：<el-input v-model="beizhu" placeholder="请输入内容" style="width: auto;margin-top: 0.2em" />
        </el-col>
        <el-col offset="12" span="6">
          <p>选择收款方：保险公司<a style="cursor: pointer;color: blue">切换</a></p>
          <p>
            保单原价：￥222
          </p>
          <p /><p>
            优惠金额：￥222
          </p>
          <p>
            应付金额：￥222
          </p>
        </el-col>
      </el-row>-->
    </div>
    <div class="bot">
      <el-col span="24">
        <el-button type="primary" @click="onSubmit">提交订单</el-button>

      </el-col>
      <el-dialog
        top="5vh"
        title="提示信息"
        append-to-body="true"
        :visible.sync="tpy"
        width="40%"
        :before-close="handleClose"
      >
        <el-row style=" color: black; font-weight: bold">
          以下为成功支付号，请于查询页打印缴费通知书或支票收据
        </el-row>

        <div style="text-align: center;  color: black;">
          <el-row style="margin-top: 0.5em">
            <el-col span="6" style="text-align: right">支付号：</el-col>
            <el-col span="6" class="left-col">{{ info.payNo }}</el-col>
          </el-row>
          <el-row style="margin-top: 0.5em">
            <el-col span="6" style="text-align: right">缴费合计：</el-col>
            <el-col span="6" class="left-col">{{ map.quote.bizPremiumByDis }}元</el-col>
            <el-col span="6" style="text-align: right">校验码：</el-col>
            <el-col span="6" class="left-col">{{ info.checkNo }}</el-col>
          </el-row>
          <el-row style="margin-top: 0.5em">
            <el-col span="6" style="text-align: right">被保人姓名：</el-col>
            <el-col span="6" class="left-col">{{ map.carInfo.licenseOwner }}</el-col>
            <el-col span="6" style="text-align: right">车牌号码：</el-col>
            <el-col span="6" class="left-col">{{ map.carInfo.carNumber }}</el-col>
          </el-row>
          <br>
          <div style="text-align: center">
            <qrcode
              v-if="showImg"
              :url="url"
              iconurl="http://bao.91bihu.com/resources/images/quote/tpy.png"
              wid="200"
              hei="200"
              imgwid="50"
              imghei="50"
            />
            <img v-if="!showImg" style="width: 200px" :src="url">
          </div>
        </div>

        <span slot="footer" class="dialog-footer">
          <el-button @click="toOrderDetail">查看订单详情</el-button>
          <el-button type="primary" @click="tpy = false">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog
        top="5vh"
        title="提示信息"
        append-to-body="true"
        :visible.sync="renbao"
        width="50%"
        :before-close="handleClose"
      >
        <div>
          <el-row class="line-rows">
            <el-col span="5" class="right-col">
              交费通知单号：
            </el-col>
            <el-col span="5" class="left-col">
              {{ info.payNo }}
            </el-col>
            <el-col offset="2" span="4" class="right-col">
              交费日期：
            </el-col>
            <el-col span="8" class="left-col">
              {{ info.payTime }}
            </el-col>
          </el-row>
          <el-row class="line-rows">
            <el-col span="5" class="right-col">
              本次支付金额：
            </el-col>
            <el-col span="5" class="left-col">
              {{ map.quote.bizPremiumByDis }}
            </el-col>
            <el-col offset="2" span="4" class="right-col">
              币别：
            </el-col>
            <el-col span="8" class="left-col">
              人民币
            </el-col>
          </el-row>
          <el-row class="line-rows">
            <el-col span="5" class="right-col">
              交费状态：
            </el-col>
            <el-col span="5" class="left-col">
              登记确认
            </el-col>
          </el-row>
          <el-row class="line-rows">
            <el-col span="5" class="right-col">
              是否使用电子签名：
            </el-col>
            <el-col span="5" class="left-col">
              否
            </el-col>
          </el-row>
          <el-row style="margin-top: 1em">
            <el-col span="12" style="text-align: center">
              <qrcode
                :url="url"
                iconurl="http://bao.91bihu.com/resources/images/quote/rb.png"
                wid="200"
                hei="200"
                imgwid="50"
                imghei="50"
              />
            </el-col>
            <el-col span="12" style="color: black;font-weight: bold">
              <el-row>
                <h3>微信公众号支付</h3>
              </el-row>
              <el-row class="line-rows">
                金额：￥ {{ map.quote.bizPremiumByDis }}
              </el-row>
              <el-row class="line-rows">
                姓名：{{ map.carInfo.licenseOwner }}
              </el-row>
              <el-row class="line-rows">
                车牌号：{{ map.carInfo.carNumber }}
              </el-row>
              <el-row class="line-rows">
                流水号：{{ info.payNo }}
              </el-row>
              <el-row class="line-rows">
                交费通知单号：{{ info.checkNo }}
              </el-row>
              <el-row style="color: red;margin-top: 1em">

                *温馨提示：请于2019年4月28日09:00:42前，使用微信扫一扫通过微信公众号进行支付！
              </el-row>
            </el-col>
          </el-row>
        </div>

        <span slot="footer" class="dialog-footer">
            <el-button @click="toOrderDetail">查看订单详情</el-button>
          <el-button type="primary" @click="renbao = false">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog
        top="5vh"
        title="提示信息"
        append-to-body="true"
        :visible.sync="pa"
        width="60%"
        :before-close="handleClose"
      >
        <div>
          <a>您得支付信息如下：</a>
          <el-row style="border: #dfe6ec 1px solid;">
            <el-col span="20">
              <el-row
                style="height: 3em;line-height: 3em;
                     text-align: center; font-weight: bold;color: black;border-bottom: #dfe6ec 1px solid;background-color: #f8f8f8"
              >
                <el-col span="6">
                  客户姓名
                </el-col>
                <el-col span="6">
                  交费通知单号
                </el-col>
                <el-col span="6">
                  货币类型
                </el-col>
                <el-col span="6">
                  消费金额（元）
                </el-col>
              </el-row>
              <el-row
                style="height: 3em;line-height: 3em;
                     text-align: center; font-weight: bold;color: black;border-bottom: #dfe6ec 1px solid;"
              >
                <el-col span="6">
                  {{ map.carInfo.licenseOwner }}
                </el-col>
                <el-col span="6">
                  {{ info.payNo }}&nbsp;
                </el-col>
                <el-col span="6">
                  RMB
                </el-col>
                <el-col span="6">
                  <span style="color: #cf9236">{{ map.quote.bizPremiumByDis }}</span>
                </el-col>
              </el-row>
              <el-row
                style="height: 3em;line-height: 3em;
                     text-align: right; font-weight: bold;color: black;"
              >
                <el-col>
                  待支付金额：<span style="color: #cf9236">{{ map.quote.bizPremiumByDis }}</span>
                </el-col>
              </el-row>
            </el-col>
            <el-col span="4" style="text-align: center;margin-top: 1em">
              <qrcode
                :url="url"
                iconurl="http://bao.91bihu.com/resources/images/quote/pa.png"
                wid="90"
                hei="90"
                imgwid="30"
                imghei="30"
              />
            </el-col>
          </el-row>
          <el-tabs v-model="activeName2" style="margin-top: 1em" active-text-color="#f8f8f8" type="card" @tab-click="handleClick">
            <el-tab-pane label="选择支付方式：" disabled />
            <el-tab-pane label="自助缴费" name="first">
              <div style="text-align: center;height: 2em">
                <el-row style="margin-top: 1em;font-size: 20px">
                  <!--                  <input type="checkbox" name="like" value="0">-->
                  扫描上方二维码支付
                </el-row>
                <!--                <el-button style="background-color: #fa7a1f; color: black">打印缴费通知单</el-button>-->
              </div>
            </el-tab-pane>
            <el-tab-pane label="EPOS刷卡" disabled name="second" />
            <el-tab-pane label="网银支付" disabled name="third" />
          </el-tabs>
        </div>

        <span slot="footer" class="dialog-footer">
           <el-button @click="toOrderDetail">查看订单详情</el-button>
          <el-button type="primary" @click="pa = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { createOrder } from '../../api/userApi'
import qrcode from 'vue_qrcodes'
export default {
  name: '',
  components: {
    qrcode
  },
  data() {
    return {
      url: 'https://w.url.cn/s/Aio8K1J\n',
      beizhu: '',
      radio: '',
      map: [],
      value2: true,
      owner: true,
      toubaoren: true,
      append: '',
      renbao: false,
      tpy: false,
      pa: false,
      activeName2: 'first',
      bi: '0',
      ci: '0',
      info: [],
      showImg: false,
      orderId:'',
    }
  },
  watch: {
    $route(to, from) {
      if (to.path === '/user/createOrder') {
        this.getInfo()
      }
    }
  },
  created() {
    this.getInfo()
  },
  methods: {
    toOrderDetail(){
      this.tpy=false
      this.$router.push({ path: '/user/orderDetail', query: { order_id: this.orderId }})
    },
    onSubmit() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading'
      })
      const user = JSON.parse(this.$store.getters.user)
      const params = {
        carInfoId: this.map.carInfo.carInfoId,
        proposalNo: this.map.quote.proposalNo,
        source: this.map.quote.quoteSource,
        money: this.map.quote.bizPremiumByDis,
        createdBy: user.accountId,
        quoteId: this.map.quote.quoteId
      }
      // this.pa = true
      /*
      var myDate = new Date()
      myDate.setDate(myDate.getDate() + e)
      console.log(myDate.toLocaleDateString())*/
      createOrder(params).then(res => {
        /* setTimeout(() => {
          loading.close()
        }, 6000)*/
        console.log(res)
        loading.close()
        if (res.code == 200) {
          this.orderId=res.data.orderId
          this.$message({
            message: '请求成功',
            type: 'success'
          })
          this.info = res.data
          if (this.map.quote.quoteSource == '4') {
            this.showImg = true
            this.url = res.data.payUrl
          } else {
            this.url = res.data.payUrl
          }
          switch (this.map.quote.quoteSource) {
            case '1':
              this.tpy = true
              break
            case '2':
              this.pa = true
              break
            case '3':
              this.rb = true
              break
          }
        } else {
          this.$message({
            message: res.message,
            type: 'error'
          })
        }
      })
    },
    getInfo() {
      this.map = JSON.parse(this.$route.query.quoteMap)
      console.log(this.map)
      switch (this.map.quote.quoteSource) {
        case '1':
          console.log(111)
          break
      }
    }
  }
}
</script>

<style scoped>
    .home{
        height: 100%;
        padding: 1em;
    }
    .row-back{
        background-color: #dfe6ec;
        height: 2em;
        line-height: 2em;
        padding-left: 1em;
        font-size: 16px;
    }
    .line-row{
        height: 3em;
        line-height: 3em;
        padding-left: 2em;
    }
    .line{
        height: 2em;
        line-height: 2em;
        border-bottom: #f5f5f5 1px solid;
        padding-left: 2em;
    }
    .row{
         height: 3.3em;
         line-height: 3.3em;
    }
    .text-right{
        text-align: right;
        margin: 0 5%;
        height: auto;
        padding-left: -3em;
    }
    .center{
        margin-top: 1em;
        padding: 2em 0;
        border: #dfe6ec 1px dashed;
    }
    .center p{
        height: 2em;
        line-height: 2em;
    }
    .bot-p{
        height: 1.5em;
        line-height: 1.5em;
    }
    .bot{
        position: fixed;
        bottom: 0;
        height: 4em;
      line-height: 4em;
        background-color: #dfe6ec;
        width: 100%;
        text-align: center;
        z-index: 2;
    }
    .right-col{
      text-align: right;
    }
    .left-col{
        text-align: left;
    }
    .line-rows{
        height: 2em;
        line-height: 2em;
        border-bottom: #dfe6ec  1px solid;
    }
</style>
