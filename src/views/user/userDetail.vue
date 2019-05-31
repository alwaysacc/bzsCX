<template>
  <div id="home">
    <el-row class="row">
      <el-col span="12"><a style="font-size: 14px;color: #1d90e6; margin-left: 2em;cursor:pointer; " @click="backNext">返回</a>
      </el-col>
      <el-col span="6">商业险于<a style="color: red">19</a>天后过期</el-col>
      <el-col span="6">交强险于<a style="color: red">19</a>天后过期</el-col>
    </el-row>
    <el-row class="row-line">
      <el-col span="22" style="font-size: 18px;font-weight: bold;padding-left: 1em"> 客户信息</el-col>
      <el-col span="2"><a
        style="color: red;font-size: 18px;font-weight: bold;cursor: pointer"
        @click="saveCustomer"
      >保存</a></el-col>
    </el-row>
    <div v-loading="customerloading" class="text-right">
      <el-row class="row">
        <el-col span="3">
          客户名称：
        </el-col>
        <el-col span="5">
          <el-input v-model="map.customer.customerName" />
        </el-col>
        <el-col span="3">
          客户电话1：
        </el-col>
        <el-col span="5">
          <el-input v-model="map.customer.customerTel1" />
        </el-col>
        <el-col span="3">
          客户电话2：
        </el-col>
        <el-col span="5">
          <el-input v-model="map.customer.customerTel2" />
        </el-col>
      </el-row>
      <el-row class="row">
        <el-col span="3">
          客户类别：
        </el-col>
        <el-col span="5">
          <el-select v-model="map.customer.customerSort" style="width: 100%">
            <el-option label="新车" value="nanjing" />
            <el-option label="在修不在保" value="beijing" />
            <el-option label="不在修不在保" value="beijing" />
            <el-option label="往年战败" value="beijing" />
            <el-option label="续保客户" value="beijing" />
            <el-option label="新转续" value="beijing" />
            <el-option label="潜转续" value="beijing" />
            <el-option label="间转续" value="beijing" />
            <el-option label="续转续" value="beijing" />
            <el-option label="三年联保" value="beijing" />
            <el-option label="空值" value="beijing" />
          </el-select>
        </el-col>
        <el-col span="3">
          投保地区：
        </el-col>
        <el-col span="5">
          <el-select v-model="map.customer.insuredArea" style="width: 100%">
            <el-option label="南京" value="nanjing" />
          </el-select>
        </el-col>
        <el-col span="3">
          地址：
        </el-col>
        <el-col span="5">
          <el-input v-model="map.customer.customerAddress" />
        </el-col>
      </el-row>
      <el-row class="row">
        <el-col span="3">
          客户备注1：
        </el-col>
        <el-col span="21">
          <el-input v-model="map.customer.customerRemarks1" />
        </el-col>

      </el-row>
      <el-row class="row">
        <el-col span="3">
          客户备注2：
        </el-col>
        <el-col span="21">
          <el-input v-model="map.customer.customerRemarks2" />
        </el-col>
      </el-row>
    </div>
    <el-row class="row-line">
      <el-col span="22" style="font-size: 18px;font-weight: bold;padding-left: 1em">车辆信息</el-col>
      <el-col span="2">
        <a style="color: red;font-size: 18px;font-weight: bold;cursor: pointer" @click="saveCarInfo">
          保存
        </a>
      </el-col>
    </el-row>
    <div v-loading="carInfoloading" class="text-right">
      <el-row class="row">
        <el-col span="3">
          车牌：
        </el-col>
        <el-col span="5">
          <el-input v-model="map.carInfo.carNumber" />
        </el-col>
        <el-col span="3">
          发动机号：
        </el-col>
        <el-col span="5">
          <el-input v-model="map.carInfo.engineNumber" />
        </el-col>
        <el-col span="3">
          车架号：
        </el-col>
        <el-col span="5">
          <el-input v-model="map.carInfo.frameNumber" />
        </el-col>
      </el-row>
      <el-row class="row">
        <el-col span="3">
          注册日期：
        </el-col>
        <el-col span="5">
          <el-date-picker
            v-model="map.carInfo.registerDate"
            type="date"
            placeholder="交强险到期时间"
            style="width: 100%"
          />
        </el-col>
        <el-col span="3">
          品牌型号：
        </el-col>
        <el-col span="5">
          <el-input v-model="map.carInfo.brandModel" />
        </el-col>
        <el-col span="3">
          车型：
        </el-col>
        <el-col span="5">
          <el-select v-model="map.carInfo.carModel" style="width: 100%">
            <el-option label="投保" value="shi" />
            <el-option label="不投保" value="fou" />
          </el-select>
        </el-col>
      </el-row>
      <el-row class="row">
        <el-col span="3">
          新车购置价(￥)：
        </el-col>
        <el-col span="5">
          <el-input v-model="map.carInfo.purchasePrice" />
        </el-col>
        <el-col span="3">
          座位数：
        </el-col>
        <el-col span="5">
          <el-select v-model="map.carInfo.seatNumber" style="width: 100%">
            <el-option label="2座" value="shi" />
            <el-option label="3座" value="shi" />
            <el-option label="4座" value="shi" />
            <el-option label="5座" value="shi" />
            <el-option label="6座" value="shi" />
            <el-option label="7座" value="shi" />
            <el-option label="8座" value="shi" />
            <el-option label="9座" value="shi" />
            <el-option label="10座" value="shi" />
          </el-select>
        </el-col>
        <el-col span="3">
          排量(L)：
        </el-col>
        <el-col span="5">
          <el-input v-model="map.carInfo.displacement" />
        </el-col>
      </el-row>
      <el-row class="row">
        <el-col span="3">
          过户车：
        </el-col>
        <el-col span="3">
          <el-radio-group v-model="map.carInfo.istransferCar+''">
            <el-radio label="1">是</el-radio>
            <el-radio label="0">否</el-radio>
          </el-radio-group>
        </el-col>
        <el-col span="2">
          &nbsp;
        </el-col>
        <el-col span="3">
          贷款车：
        </el-col>
        <el-col span="3">
          <el-radio-group v-model="map.carInfo.isloanCar+''">
            <el-radio label="1">是</el-radio>
            <el-radio label="0">否</el-radio>
          </el-radio-group>
        </el-col>
        <el-col span="2">
          &nbsp;
        </el-col>
        <el-col span="3">
          &nbsp;
        </el-col>
        <el-col span="5">
          &nbsp;
        </el-col>
      </el-row>
      <el-row class="row">
        <el-col span="3">
          备注：
        </el-col>
        <el-col span="21">
          <el-input v-model="map.carInfo.remarksCar" />
        </el-col>
      </el-row>
    </div>
    <el-row />
    <div class="bot-div">
      <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">

        <el-tab-pane label="上年投保信息" name="first">
          <el-row class="row-line">
            <el-col span="22" style="font-size: 18px;font-weight: bold;padding-left: 1em">上年投保信息</el-col>
            <el-col span="2"><a style="color: red;font-size: 18px;font-weight: bold" /></el-col>
          </el-row>
          <div class="text-right">
            <el-row class="row">
              <el-col span="4">
                投保公司：
              </el-col>
              <el-col span="4">
                <el-input v-model="map.insuredInfo.lastYearInsuranceCompany" />
              </el-col>
              <el-col span="4">
                车主名称：
              </el-col>
              <el-col span="4">
                <el-input v-model="map.carInfo.licenseOwner" />
              </el-col>
              <el-col span="8">
                &nbsp;
              </el-col>
            </el-row>
            <el-row />
            <el-row class="row">
              <el-col span="4">
                商业险到期时间：
              </el-col>
              <el-col span="4">
                <el-input v-model="map.insuredInfo.nextBusinesStartDate" style="width: 100%" />
              </el-col>
              <el-col span="4">
                交强险到期时间：
              </el-col>
              <el-col span="4">
                <el-input v-model="map.insuredInfo.nextForceStartDate" style="width: 100%" />
              </el-col>
              <el-col span="8" style="width: 100%" />
            </el-row>
            <el-row class="row">
              <el-col span="4">
                被保险人：
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
            <!--  <el-row class="row">
                        <el-col span="4">
                            商业险保单号：
                        </el-col>
                        <el-col  span="4">
                            <el-input v-model="map.insuredInfo.businesNumber" style="width: 100%"></el-input>
                        </el-col>
                        <el-col span="4">
                            交强险保单号：
                        </el-col>
                        <el-col  span="4">
                            <el-input v-model="map.insuredInfo.trafficNumber"  style="width: 100%"></el-input>
                        </el-col>
                        <el-col span="3">
                            机构名称:
                        </el-col>
                        <el-col span="5">
                            <el-input v-model="map.insuredInfo.mechanismNumber"  style="width: 100%"></el-input>
                        </el-col>
                    </el-row>-->
            <el-table
              :data="insuredList"
              border
              size="small"
              :span-method="arraySpanMethod"
              style="width: 100%"
            >
              <el-table-column
                prop="insurance_name"
                label="承包险种"
                width="180"
              />
              <el-table-column
                prop="insurance_amount"
                label="保险金额/责任限额"
                width="180"
              />
              <el-table-column
                prop="insurance_premium"
                label="(人保)保险费(元)"
              />
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane v-loading="insuredinfoloading" label="报价信息" name="second">
          <el-row class="row-line">
            <el-col span="22" style="font-size: 18px;font-weight: bold;padding-left: 1em">关系人信息</el-col>
            <el-col span="2"><a
              style="color: red;font-size: 18px;font-weight: bold;cursor: pointer"
              @click="saveInsuredInfo"
            >保存</a></el-col>
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
                <el-input v-model="map.insuredInfo.insuredIdEmail" style="width: 100%" />
              </el-col>
              <el-col span="3">
                住址:
              </el-col>
              <el-col span="5">
                <el-input v-model="map.insuredInfo.insuredIdAddress" style="width: 100%" />
              </el-col>
            </el-row>
          </div>
          <el-row class="line">
            <el-col span="3">
              <a style="font-weight: bold">被保险人信息</a>
            </el-col>
            <el-col v-if="!value2" span="21">
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
                <el-input v-model="map.insuredInfo.insuredName" style="width: 100%" />
              </el-col>
              <el-col span="4">
                证件类型：
              </el-col>
              <el-col span="4">
                <el-select v-model="map.insuredInfo.insuredIdCardType" placeholder="身份证" style="width: auto">
                  <el-option label="身份证" value="shi" />
                  <el-option label="组织机构代码证" value="fou" />
                  <el-option label="营业执照/统一社会信用代码" value="fou" />
                  <el-option label="港澳居民来往内地通行证" value="fou" />
                  <el-option label="港澳身份证" value="fou" />
                </el-select>
              </el-col>
              <el-col span="3">
                证件号码:
              </el-col>
              <el-col span="5">
                <el-input v-model="map.insuredInfo.insuredIdCard" style="width: 100%" />
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
          <div v-if="!toubaoren" class="text-right">
            <el-row class="row">
              <el-col span="4">
                投保人姓名：
              </el-col>
              <el-col span="4">
                <el-input v-model="map.insuredInfo.postedName" style="width: 100%" />
              </el-col>
              <el-col span="4">
                证件类型：
              </el-col>
              <el-col span="4">
                <el-select v-model="map.insuredInfo.holderIdCardType" placeholder="身份证" style="width: auto">
                  <el-option label="身份证" value="shi" />
                  <el-option label="组织机构代码证" value="fou" />
                  <el-option label="营业执照/统一社会信用代码" value="fou" />
                  <el-option label="港澳居民来往内地通行证" value="fou" />
                  <el-option label="港澳身份证" value="fou" />
                </el-select>
              </el-col>
              <el-col span="3">
                证件号码:
              </el-col>
              <el-col span="5">
                <el-input v-model="map.insuredInfo.holderIdCard" style="width: 100%" />
              </el-col>
            </el-row>
            <el-row class="row">
              <el-col span="4">
                投保人电话：
              </el-col>
              <el-col span="4">
                <el-input v-model="map.insuredInfo.holderIdTel" style="width: 100%" />
              </el-col>
              <el-col span="4">
                邮箱：
              </el-col>
              <el-col span="4">
                <el-input v-model="map.insuredInfo.holderIdEmail" style="width: 100%" />
              </el-col>
              <el-col span="3">
                住址:
              </el-col>
              <el-col span="5">
                <el-input v-model="map.insuredInfo.holderIdAddress" style="width: 100%" />
              </el-col>
            </el-row>
          </div>
          <el-row class="row-line">
            <el-col span="22" style="font-size: 18px;font-weight: bold;padding-left: 1em">最新报价信息</el-col>
            <el-col span="2"><a style="color: red;font-size: 18px;font-weight: bold" /></el-col>
          </el-row>
          <div style="padding-left: 3.5em">

            <el-row class="row">
              <el-col span="12">上年交强出险：{{
                map.insuredInfo.bizLastYearOutDangerCount==null?0:map.insuredInfo.bizLastYearOutDangerCount }}次
              </el-col>
              <el-col span="12">上年商业出险：{{
                map.insuredInfo.forceLastYearOutDangerCount==null?0:map.insuredInfo.forceLastYearOutDangerCount }}次
              </el-col>
            </el-row>
            <el-row class="row">
              <el-col span="12">交强险起保时间：{{ map.insuredInfo.nextForceStartDate }}</el-col>
              <el-col span="12">商业险起保时间：{{ map.insuredInfo.nextBusinesStartDate }}</el-col>
            </el-row>
          </div>
          <div v-if="!quoteMsg" class="baojia-div">
            <ul>
              <li v-if="R" :class="{a:b1}" @click="onLi(1)">
                <el-row>
                  <el-col span="8"><img src="../../assets/img/rb.png"></el-col>
                  <el-col span="16" style="padding-top: 5px">
                    <a class="blod-a">人保</a><a class="small-a">({{ Rquote.quoteStatus==1?'报价成功':'报价失败' }})</a>
                    <br>
                    <a class="red-a">{{ Rquote.bizPremiumByDis元 }}</a>
                  </el-col>
                </el-row>
              </li>
              <li v-if="T" :class="{a:b2}" @click="onLi(2)">
                <el-row>
                  <el-col span="8"><img src="../../assets/img/tpy.png"></el-col>
                  <el-col span="16" style="padding-top: 5px">
                    <a class="blod-a">太平洋</a><a class="small-a">({{ Tquote.quoteStatus==1?'报价成功':'报价失败' }})</a>
                    <br>
                    <a class="red-a">{{ Tquote.bizPremiumByDis }}{{ Tquote.bizPremiumByDis!=''?'':'元' }}</a>
                  </el-col>
                </el-row>
              </li>
              <li v-if="P" :class="{a:b3}" @click="onLi(3)">
                <el-row>
                  <el-col span="8"><img src="../../assets/img/pa.png"></el-col>
                  <el-col span="16" style="padding-top: 5px">
                    <a class="blod-a">平安</a><a class="small-a">({{ Pquote.quoteStatus==1?'报价成功':'报价失败' }})</a>
                    <br>
                    <a class="red-a">{{ Pquote.bizPremiumByDis元 }}</a>
                  </el-col>
                </el-row>
              </li>
            </ul>
            <div v-if="!b1" class="baojia">
              <el-row class="bot-row">
                <el-col span="3">
                  车牌号：
                </el-col>
                <el-col span="21">
                  {{ map.carInfo.carNumber }}
                </el-col>
              </el-row>
              <el-row class="bot-row">
                <el-col span="3">
                  报价状态：
                </el-col>
                <el-col span="21">
                  {{ Rquote.quoteStatus==1?'报价成功':'报价失败' }}
                </el-col>
              </el-row>
              <el-row class="bot-row">
                <el-col span="3">
                  报价内容：
                </el-col>
                <el-col span="21">
                  {{ Rquote.quoteResult }}
                </el-col>
              </el-row>
              <el-row class="bot-row">
                <el-col span="3">
                  核保状态：
                </el-col>
                <el-col span="21">
                  {{ Rquote.submitStatus==1?'核保成功':'核保失败' }}
                </el-col>
              </el-row>
              <el-row class="bot-row">
                <el-col span="3">
                  核保内容：
                </el-col>
                <el-col span="21">
                  {{ Rquote.submitresult }}
                </el-col>
              </el-row>
              <el-row class="bot-row">
                <el-col span="5">无赔款优惠系数:</el-col>
                <el-col span="3">{{ Rquote.noReparationSaleRate==null?0:Rquote.noReparationSaleRate }}<i
                  class="el-icon-question"
                  @click="youhui = true"
                /></el-col>
                <el-dialog
                  title="无赔款系数"
                  :visible.sync="youhui"
                  width="30%"
                  top="1vh"
                  :before-close="handleClose"
                  style="text-align: center"
                >

                  <img src="../../assets/img/ncd1.jpg" style="width: 66%">
                </el-dialog>
                <el-col span="4">自主渠道系数:</el-col>
                <el-col span="4">{{ Rquote.independentChannelDate==null?0:Rquote.independentChannelDate }}</el-col>
                <el-col span="4">自主核保系数:</el-col>
                <el-col span="4">{{ Rquote.independentSubmitRate==null?0:Rquote.independentSubmitRate }}</el-col>
              </el-row>
              <el-row class="bot-row">
                <el-col span="5">交通违法浮动系数:</el-col>
                <el-col span="3">{{ Rquote.trafficIllegalRate==null?0:Rquote.trafficIllegalRate }}</el-col>
                <el-col span="4">折扣系数:</el-col>
                <el-col span="4">{{ Rquote.discountRate==null?0:Rquote.discountRate }}</el-col>
                <el-col span="8" />
              </el-row>
              <el-row class="bot-row">
                <el-col span="3">
                  报价渠道：
                </el-col>
                <el-col span="21">
                  保之顺
                </el-col>
              </el-row>
              <el-table
                :data="RquoteList"
                :span-method="arraySpanMethod"
                border
                size="mini"
                style="width: 100%"
              >
                <el-table-column
                  prop="insurance_name"
                  label="承保险种"
                  width="180"
                />
                <el-table-column
                  prop="insurance_amount"
                  label="保险金额/责任限额"
                />
                <el-table-column
                  prop="insurance_premium"
                  label="保险费(元)"
                />
              </el-table>
            </div>
            <div v-if="!b2" class="baojia">
              <el-row class="bot-row">
                <el-col span="3">
                  车牌号：
                </el-col>
                <el-col span="21">
                  {{ map.carInfo.carNumber }}
                </el-col>
              </el-row>
              <el-row class="bot-row">
                <el-col span="3">
                  报价状态：
                </el-col>
                <el-col span="21">
                  {{ Tquote.quoteStatus==1?'报价成功':'报价失败' }}
                </el-col>
              </el-row>
              <el-row class="bot-row">
                <el-col span="3">
                  报价内容：
                </el-col>
                <el-col span="21">
                  {{ Tquote.quoteResult }}
                </el-col>
              </el-row>
              <el-row class="bot-row">
                <el-col span="3">
                  核保状态：
                </el-col>
                <el-col span="21">
                  {{ Tquote.submitStatus==1?'核保成功':'核保失败' }}
                </el-col>
              </el-row>
              <el-row class="bot-row">
                <el-col span="3">
                  核保内容：
                </el-col>
                <el-col span="21">
                  {{ Tquote.submitresult }}
                </el-col>
              </el-row>
              <el-row class="bot-row">
                <el-col span="5">无赔款优惠系数:</el-col>
                <el-col span="3">{{ Tquote.noReparationSaleRate==null?0:Tquote.noReparationSaleRate }}<i
                  class="el-icon-question"
                  @click="youhui = true"
                /></el-col>
                <el-dialog
                  title="无赔款系数"
                  :visible.sync="youhui"
                  width="30%"
                  top="1vh"
                  :before-close="handleClose"
                  style="text-align: center"
                >

                  <img src="../../assets/img/ncd1.jpg" style="width: 66%">
                </el-dialog>
                <el-col span="4">自主渠道系数:</el-col>
                <el-col span="4">{{ Tquote.independentChannelDate==null?0:Tquote.independentChannelDate }}</el-col>
                <el-col span="4">自主核保系数:</el-col>
                <el-col span="4">{{ Tquote.independentSubmitRate==null?0:Tquote.independentSubmitRate }}</el-col>
              </el-row>
              <el-row class="bot-row">
                <el-col span="5">交通违法浮动系数:</el-col>
                <el-col span="3">{{ Tquote.trafficIllegalRate==null?0:Tquote.trafficIllegalRate }}</el-col>
                <el-col span="4">折扣系数:</el-col>
                <el-col span="4">{{ Tquote.discountRate==null?0:Tquote.discountRate }}</el-col>
                <el-col span="8" />
              </el-row>
              <el-row class="bot-row">
                <el-col span="3">
                  报价渠道：
                </el-col>
                <el-col span="21">
                  保之顺
                </el-col>
              </el-row>
              <el-table
                :data="TquoteList"
                :span-method="arraySpanMethod"
                border
                size="mini"
                style="width: 100%"
              >
                <el-table-column
                  prop="insurance_name"
                  label="承保险种"
                  width="180"
                />
                <el-table-column
                  prop="insurance_amount"
                  label="保险金额/责任限额"
                />
                <el-table-column
                  prop="insurance_premium"
                  label="保险费(元)"
                />
              </el-table>
            </div>
            <div v-if="!b3" class="baojia">
              <el-row class="bot-row">
                <el-col span="3">
                  车牌号：
                </el-col>
                <el-col span="21">
                  {{ map.carInfo.carNumber }}
                </el-col>
              </el-row>
              <el-row class="bot-row">
                <el-col span="3">
                  报价状态：
                </el-col>
                <el-col span="21">
                  {{ Pquote.quoteStatus==1?'报价成功':'报价失败' }}
                </el-col>
              </el-row>
              <el-row class="bot-row">
                <el-col span="3">
                  报价内容：
                </el-col>
                <el-col span="21">
                  {{ Pquote.quoteResult }}
                </el-col>
              </el-row>
              <el-row class="bot-row">
                <el-col span="3">
                  核保状态：
                </el-col>
                <el-col span="21">
                  {{ Pquote.submitStatus==1?'核保成功':'核保失败' }}
                </el-col>
              </el-row>
              <el-row class="bot-row">
                <el-col span="3">
                  核保内容：
                </el-col>
                <el-col span="21">
                  {{ Pquote.submitresult }}
                </el-col>
              </el-row>
              <el-row class="bot-row">
                <el-col span="5">无赔款优惠系数:</el-col>
                <el-col span="3">{{ Pquote.noReparationSaleRate==null?0:Pquote.noReparationSaleRate }}<i
                  class="el-icon-question"
                  @click="youhui = true"
                /></el-col>
                <el-dialog
                  title="无赔款系数"
                  :visible.sync="youhui"
                  width="30%"
                  top="1vh"
                  :before-close="handleClose"
                  style="text-align: center"
                >

                  <img src="../../assets/img/ncd1.jpg" style="width: 66%">
                </el-dialog>
                <el-col span="4">自主渠道系数:</el-col>
                <el-col span="4">{{ Pquote.independentChannelDate==null?0:Pquote.independentChannelDate }}</el-col>
                <el-col span="4">自主核保系数:</el-col>
                <el-col span="4">{{ Pquote.independentSubmitRate==null?0:Pquote.independentSubmitRate }}</el-col>
              </el-row>
              <el-row class="bot-row">
                <el-col span="5">交通违法浮动系数:</el-col>
                <el-col span="3">{{ Pquote.trafficIllegalRate==null?0:Pquote.trafficIllegalRate }}</el-col>
                <el-col span="4">折扣系数:</el-col>
                <el-col span="4">{{ Pquote.discountRate==null?0:Pquote.discountRate }}</el-col>
                <el-col span="8" />
              </el-row>
              <el-row class="bot-row">
                <el-col span="3">
                  报价渠道：
                </el-col>
                <el-col span="21">
                  保之顺
                </el-col>
              </el-row>
              <el-table
                :data="PquoteList"
                :span-method="arraySpanMethod"
                border
                size="mini"
                style="width: 100%"
              >
                <el-table-column
                  prop="insurance_name"
                  label="承保险种"
                  width="180"
                />
                <el-table-column
                  prop="insurance_amount"
                  label="保险金额/责任限额"
                />
                <el-table-column
                  prop="insurance_premium"
                  label="保险费(元)"
                />
              </el-table>
            </div>
          </div>
          <div v-if="quoteMsg" class="baojia-div" style="height: 5em;text-align: center">
            <h5 style="padding-top: 2em">暂无报价信息</h5>
          </div>
        </el-tab-pane>

        <el-tab-pane label="跟进信息" name="third">
          <div class="third">

            <el-timeline>
              <!--                        <el-timeline-item timestamp="2019年4月4日11:25:25" placement="top">-->
              <!--                            <el-card>-->
              <!--                                <h4>待报价记录</h4>-->
              <!--                                <p>代报价人:陈玟凤</p>-->
              <!--                                <p>投保公司:人保车险</p>-->
              <!--                                <p>报价内容:商业险</p>-->
              <!--                            </el-card>-->
              <!--                        </el-timeline-item> -->
              <el-timeline-item timestamp="" placement="top">
                <el-card>
                  <h4>暂无跟进记录</h4>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </el-tab-pane>

      </el-tabs>
    </div>
    <div class="bot">
      <el-col span="24">
        <el-button style="color: black" disabled="true" @click="onSubmit">刷新续保</el-button>
        <el-button style="color: black" @click="renewQuote = true">重新报价</el-button>
        <el-dialog
          title="车险报价"
          :visible.sync="renewQuote"
          top="0"
          width="80%"
          append-to-body="true"
          center
          style="margin: 0 2em;overflow-y: scroll;z-index: 30"
        >
          <el-row style="border-top: #CCCCCC 1px solid">
            <el-col span="12">
              <div class="left-div">
                <el-row class="line-row-dialog">
                  <el-col span="5">选择投保公司:</el-col>
                  <el-col span="19">
                    <el-radio v-model="radio" label="1">人保</el-radio>
                    <el-radio v-model="radio" label="2">太平洋</el-radio>
                    <el-radio v-model="radio" label="3">平安</el-radio>
                  </el-col>
                </el-row>
                <el-row class="line-row-dialog">
                  <el-col span="5">
                    <el-radio v-model="radio" label="1">交强险</el-radio>
                    :
                  </el-col>
                  <el-col span="19">
                    起保时间：
                    <el-date-picker
                      v-model="value1"
                      type="date"
                      placeholder="选择日期"
                    />
                  </el-col>
                </el-row>
                <el-row class="line-row-dialog">
                  <a>基本险</a>
                </el-row>
                <el-row class="line-row-dialog">
                  <el-col span="5">车辆损失险</el-col>
                  <el-col span="13">
                    <el-select v-model="toubao" style="width: 9em">
                      <el-option label="投保" value="shi" />
                      <el-option label="不投保" value="fou" />
                    </el-select>
                  </el-col>
                  <el-col span="6">
                    <el-switch
                      v-model="value3"
                      inactive-text="不计免赔"
                    />
                  </el-col>
                </el-row>
                <el-row class="line-row-dialog">
                  <el-col span="5">折旧价：</el-col>
                  <el-col span="8">
                    <el-input v-model="depreciation" style="width: 8em" disabled />
                    <a>/协商价</a>
                  </el-col>
                  <el-col span="6">
                    <el-input style="width: 8em" />
                  </el-col>
                </el-row>
                <el-row class="line-row-dialog">
                  <el-col span="5">第三者责任险</el-col>
                  <el-col span="13">
                    <el-select v-model="toubao" style="width: 9em">
                      <el-option label="50万" value="shi" />
                      <el-option label="100万" value="shi" />
                      <el-option label="150万" value="shi" />
                      <el-option label="200万" value="shi" />
                      <el-option label="250万" value="shi" />
                      <el-option label="300万" value="shi" />
                      <el-option label="350万" value="shi" />
                      <el-option label="400万" value="shi" />
                      <el-option label="450万" value="shi" />
                    </el-select>
                  </el-col>
                  <el-col span="6">
                    <el-switch
                      v-model="value3"
                      inactive-text="不计免赔"
                    />
                  </el-col>
                </el-row>
                <el-row class="line-row-dialog">
                  <el-col span="5">司机座位险</el-col>
                  <el-col span="13">
                    <el-select v-model="toubao" style="width: 9em">
                      <el-option label="投保" value="shi" />
                      <el-option label="不投保" value="fou" />
                    </el-select>
                  </el-col>
                  <el-col span="6">
                    <el-switch
                      v-model="value3"
                      inactive-text="不计免赔"
                    />
                  </el-col>
                </el-row>
                <el-row class="line-row-dialog">
                  <el-col span="5">乘客座位险</el-col>
                  <el-col span="13">
                    <el-select v-model="toubao" style="width: 9em">
                      <el-option label="投保" value="shi" />
                      <el-option label="不投保" value="fou" />
                    </el-select>
                  </el-col>
                  <el-col span="6">
                    <el-switch
                      v-model="value3"
                      inactive-text="不计免赔"
                    />
                  </el-col>
                </el-row>
                <el-row class="line-row-dialog">
                  <el-col span="5">盗抢险</el-col>
                  <el-col span="13">
                    <el-select v-model="toubao" style="width: 9em">
                      <el-option label="投保" value="shi" />
                      <el-option label="不投保" value="fou" />
                    </el-select>
                  </el-col>
                  <el-col span="6">
                    <el-switch
                      v-model="value3"
                      inactive-text="不计免赔"
                    />
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col span="12">
              <div class="right-dia-div">
                <el-row class="line-row-dialog" />
                <el-row class="line-row-dialog">
                  <el-col span="5">
                    <el-radio v-model="radio" label="1">商业险：</el-radio>
                  </el-col>
                  <el-col span="19">
                    起保时间：
                    <el-date-picker
                      v-model="value1"
                      type="date"
                      placeholder="选择日期"
                    />
                  </el-col>
                </el-row>
                <el-row class="line-row-dialog">
                  <a>附加险</a>
                </el-row>
                <el-row class="line-row-dialog">
                  <el-col span="8">划痕险</el-col>
                  <el-col span="10">
                    <el-select v-model="toubao" style="width: 9em">
                      <el-option label="1万" value="shi" />
                      <el-option label="5万" value="fou" />
                    </el-select>
                  </el-col>
                  <el-col span="6">
                    <el-switch
                      v-model="value3"
                      inactive-text="不计免赔"
                    />
                  </el-col>
                </el-row>
                <el-row class="line-row-dialog">
                  <el-col span="8">玻璃单独破碎险：</el-col>
                  <el-col span="10">
                    <el-select v-model="toubao" style="width: 9em">
                      <el-option label="国产" value="shi" />
                      <el-option label="进口" value="shi" />
                    </el-select>
                  </el-col>
                  <el-col span="6">
                    <el-switch
                      v-model="value3"
                      inactive-text="不计免赔"
                    />
                  </el-col>
                </el-row>
                <el-row class="line-row-dialog">
                  <el-col span="8">自燃损失险</el-col>
                  <el-col span="10">
                    <el-select v-model="toubao" style="width: 9em">
                      <el-option label="投保" value="shi" />
                      <el-option label="不投保" value="fou" />
                    </el-select>
                  </el-col>
                  <el-col span="6">
                    <el-switch
                      v-model="value3"
                      inactive-text="不计免赔"
                    />
                  </el-col>
                </el-row>
                <el-row class="line-row-dialog">
                  <el-col span="8">涉水行驶损失险</el-col>
                  <el-col span="10">
                    <el-select v-model="toubao" style="width: 9em">
                      <el-option label="投保" value="shi" />
                      <el-option label="不投保" value="fou" />
                    </el-select>
                  </el-col>
                  <el-col span="6">
                    <el-switch
                      v-model="value3"
                      inactive-text="不计免赔"
                    />
                  </el-col>
                </el-row>
                <el-row class="line-row-dialog">
                  <el-col span="8">车损无法找到第三方险</el-col>
                  <el-col span="10">
                    <el-select v-model="toubao" style="width: 9em">
                      <el-option label="投保" value="shi" />
                      <el-option label="不投保" value="fou" />
                    </el-select>
                  </el-col>
                  <el-col span="6">
                    <el-switch
                      v-model="value3"
                      inactive-text="不计免赔"
                    />
                  </el-col>
                </el-row>
                <el-row class="line-row-dialog">
                  <el-col span="8">指定修理厂险</el-col>
                  <el-col span="10">
                    <el-select v-model="toubao" style="width: 9em">
                      <el-option label="投保" value="shi" />
                      <el-option label="不投保" value="fou" />
                    </el-select>
                  </el-col>
                  <el-col span="6">
                    <el-switch
                      v-model="value3"
                      inactive-text="不计免赔"
                    />
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="renewQuote = false">提交报价</el-button>
          </span>
        </el-dialog>
        <el-button style="color: black" disabled="true" @click="shareQuote = true">分享报价</el-button>
        <el-dialog
          top="5vh"
          title="分享报价"
          :visible.sync="shareQuote"
          width="80%"
          :modal-append-to-body="false"
          style="text-align: left;height:auto;overflow-y: hidden"
        >
          <el-row style="margin-top: -3em">
            <el-col span="14" style="height: 30em">
              <el-row>
                <el-col span="4">车牌号码：</el-col>
                <el-col span="9">苏A212</el-col>
                <el-col span="4">保险公司：{{}}</el-col>
                <el-col span="4">
                  <el-select v-model="toubao">
                    <el-option label="投保" value="shi" />
                    <el-option label="不投保" value="fou" />
                  </el-select>
                </el-col>
              </el-row>
              <el-row>
                <el-col span="4">交强险优惠：</el-col>
                <el-col span="9">
                  <el-select v-model="toubao" style="width: 9em">
                    <el-option label="35" value="shi" />
                    <el-option label="34" value="fou" />
                    <el-option label="33" value="fou" />
                    <el-option label="32" value="fou" />
                    <el-option label="31" value="fou" />
                    <el-option label="30" value="fou" />
                  </el-select>
                </el-col>
                <el-col span="4">商业险优惠：</el-col>
                <el-col span="4">
                  <el-select v-model="toubao">
                    <el-option label="投保" value="shi" />
                    <el-option label="不投保" value="fou" />
                  </el-select>
                </el-col>
                <el-col span="3">
                  <input id="save" name="save" type="checkbox" onClick="save_ck(this);" checked>去税点
                </el-col>
              </el-row>
              <el-row>
                <el-col span="4">应收金额：</el-col>
                <el-col span="9">
                  1454.55
                </el-col>
                <el-col span="4">优惠后实收：</el-col>
                <el-col span="4">
                  <el-input>123</el-input>
                </el-col>
              </el-row>
              <el-row>
                <el-col span="4">
                  优惠活动：
                </el-col>
                <el-col span="17">
                  <el-select v-model="toubao" style="width: 100%;">
                    <el-option label="投保" value="shi" />
                    <el-option label="不投保" value="fou" />
                  </el-select>
                </el-col>
                <el-col span="3" style="color: #1d90e6">
                  <i class="el-icon-setting" />
                  编辑
                </el-col>
              </el-row>
              <el-row style="margin-top: 0.5em">
                <div style="height: 10em;border: #dfe6ec 1px solid" contenteditable="true" />
              </el-row>
              <el-row style="margin-top: 0.5em">
                <el-col span="3">
                  客户电话：
                </el-col>
                <el-col span="17">
                  <el-input style="width: 80%">123</el-input>
                </el-col>
                <el-col span="4">
                  <el-button style="color: black" @click="onSubmit">发送短信</el-button>
                </el-col>
              </el-row>
            </el-col>
            <el-col span="10" style="padding-left: 5%">
              <div style="overflow: scroll;height: 35em">
                <el-row>
                  <el-col>
                    <a>报价单预览</a>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col>
                    <img src="../../assets/img/bjd.png" style="width: 100%">
                  </el-col>
                </el-row>
                <el-row>
                  <el-col span="5">
                    <img src="../../assets/img/bjd_renbao.png" style="width: 100%">
                  </el-col>
                  <el-col span="19" style="text-align: right">
                    <div>
                      <a style="font-size: 20px;font-weight: bold;color: red;">实收￥1454.22</a>
                      <s style="font-size: 14px;color: #CCCCCC;">1745.33</s>
                    </div>
                  </el-col>
                </el-row>
                <div style="border: #f8f8f8 0.6em solid;text-align: right;padding-right: 0.7em">
                  <el-row>
                    <el-col span="6">
                      <img src="../../assets/img/clxx.png" style="width: 100%">
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col span="7">车辆号码</el-col>
                    <el-col span="17">苏A552</el-col>
                  </el-row>
                  <el-row>
                    <el-col span="7">车主姓名</el-col>
                    <el-col span="17">南京科技有限公司</el-col>
                  </el-row>
                  <el-row>
                    <el-col span="7">车辆型号</el-col>
                    <el-col span="17">长安</el-col>
                  </el-row>
                  <el-row>
                    <el-col span="7">商业险出险</el-col>
                    <el-col span="17">0次</el-col>
                  </el-row>
                  <el-row>
                    <el-col span="7">交强险出险</el-col>
                    <el-col span="17">0次</el-col>
                  </el-row>
                  <el-row>
                    <el-col span="7">折扣系数</el-col>
                    <el-col span="17">0.4</el-col>
                  </el-row>
                  <el-row>
                    <el-col span="7">商业险起保时间</el-col>
                    <el-col span="17">2019年4月4日16:26:57</el-col>
                  </el-row>
                  <el-row>
                    <el-col span="7">交强险起保时间</el-col>
                    <el-col span="17">2019年4月4日16:26:57</el-col>
                  </el-row>
                </div>
                <div style="border: #f8f8f8 0.6em solid;text-align: right;padding-right: 0.7em">
                  <el-row>
                    <el-col span="6">
                      <img src="../../assets/img/bx.png" style="width: 100%">
                    </el-col>
                    <el-col span="18" />
                  </el-row>
                  <el-row>
                    <el-col span="6">险种名称</el-col>
                    <el-col span="6">保额</el-col>
                    <el-col span="6">不计免赔</el-col>
                    <el-col span="6">保费</el-col>
                  </el-row>
                  <el-row>
                    <el-col span="6">车损险</el-col>
                    <el-col span="6">2.75万</el-col>
                    <el-col span="6">76.45元</el-col>
                    <el-col span="6">509.68元</el-col>
                  </el-row>
                  <el-row>
                    <el-col span="6">三者险</el-col>
                    <el-col span="6">2.75万</el-col>
                    <el-col span="6">76.45元</el-col>
                    <el-col span="6">509.68元</el-col>
                  </el-row>
                  <el-row>
                    <el-col span="6">
                      商业险合计
                    </el-col>
                    <el-col span="6">
                      <a style="color: #CCCCCC">(含不计免赔)</a>
                    </el-col>
                    <el-col span="12">
                      15120.52元
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col span="6">
                      车船税合计
                    </el-col>
                    <el-col span="18">
                      15120.52元
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col span="6">
                      交强险合计
                    </el-col>
                    <el-col span="18">
                      1520.52元
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col>实收：<span style="color: red;font-size: 20px">￥2352.25</span></el-col>
                  </el-row>
                </div>
                <div style="border: #f8f8f8 0.6em solid;text-align: right;padding-right: 0.7em">
                  <el-row>
                    <el-col span="6">
                      <img src="../../assets/img/yhxx.png" style="width: 100%">
                    </el-col>
                    <el-col span="18">
                      <el-button v-if="!showTextarea" type="text" @click="showTextarea = true">编辑</el-button>
                      <el-button v-if="showTextarea" type="text" @click="showTextarea = false">保存</el-button>
                    </el-col>

                    <el-input
                      v-if="showTextarea"
                      v-model="textarea"
                      style="height: 9em"
                      type="textarea"
                      :rows="4"
                      placeholder="请输入内容"
                    />

                  </el-row>
                  <div v-if="!showTextarea" style="height: 9em;text-align: center">
                    <a style="font-size: 14px;color: #CCCCCC">未填写优惠活动，分享后不展示此项</a>
                  </div>

                </div>
                <div style="border: #f8f8f8 0.6em solid;text-align: right;padding-right: 0.7em">
                  <el-row style="text-align: left">
                    <el-col span="4">
                      <img src="../../assets/img/smsPic.png" style="width: 100%;">
                    </el-col>
                    <el-col span="20">
                      <li>保之顺<span style="float: right">编辑</span></li>

                      <li>150454811412<span style="float: right">编辑</span></li>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-dialog>
        <el-button style="color: black" type="primary" @click="toCreateOrder">申请投保</el-button>
        <!-- <el-dialog
                        title="车险报价" :modal-append-to-body="false"
                        :visible.sync="quote"
                        width="30%"
                        style="margin: 2em 2em;text-align: left">
                        <el-radio-group v-model="radio2">
                           <el-radio  label="false">走订单流程</el-radio>
                           <el-radio  label="true">直接全款支付</el-radio>
                        </el-radio-group>
                        <el-row v-if="radio2">
                            <el-radio v-model="radio" label="1">微信支付</el-radio><br>
                            <el-radio v-model="radio" label="2">pos支付</el-radio>
                        </el-row>
                        <span slot="footer" class="dialog-footer">
                            <el-button type="primary" @click="quote = false">确定</el-button>
                        </span>
                    </el-dialog>-->
        <!--        <el-button type="primary" disabled="true" @click="onSubmit">打印报价单</el-button>-->
      </el-col>
    </div>
    <div class="right-div" @click="flollw=true">
      <a>
        录
      </a>
      <a>
        入
      </a>
      <a>
        跟
      </a>
      <a>
        进
      </a>
      <a>
        结
      </a><a>
        果
      </a>
    </div>
    <el-dialog
      title="录入跟进结果"
      :visible.sync="flollw"
      width="70%"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="跟进状态">
          <el-select v-model="form.type" placeholder="请选择">
            <el-option label="忙碌中待联系" value="shanghai" />
            <el-option label="已报价考虑中（普通）" value="beijing" />
            <el-option label="已报价考虑中（重点）" value="beijing" />
            <el-option label="其他" value="beijing" />
            <el-option label="成功出单" value="beijing" />
            <el-option label="战败" value="beijing" />
            <el-option label="无效数据（停机空号）" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="下次跟进时间">
          <el-col>
            <el-button @click="beforeDate(1)">明天</el-button>
            <el-button @click="beforeDate(2)">后天</el-button>
            <el-button @click="beforeDate(3)">三天后</el-button>
            <el-button @click="beforeDate(7)">一周后</el-button>
            <el-button @click="beforeDate(14)">两周周后</el-button>
            <el-date-picker
              v-model="form.date"
              type="date"
              placeholder="选择日期"
            />
          </el-col>
        </el-form-item>
        <el-form-item label="本次跟进内容">
          <el-input v-model="form.content" type="textarea" style="width: 80%" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="flollw = false">取 消</el-button>
        <el-button type="primary" @click="flollw = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { quoteDetails, saveCustomer, saveCarInfo, updateInsuredInfo } from '../../api/userApi'

export default {
  name: '',
  data() {
    return {
      b1: true,
      b2: true,
      b3: true,
      flollw: false,
      customerloading: false,
      carInfoloading: false,
      insuredinfoloading: false,
      form: {
        type: '',
        date: new Date() + 1,
        content: ''
      },
      tableData: [],
      insuredList: [],
      owner: true,
      toubaoren: true,
      youhui: false,
      activities: [{
        content: '活动按期开始',
        timestamp: '2018-04-15'
      }, {
        content: '通过审核',
        timestamp: '2018-04-13'
      }, {
        content: '创建成功',
        timestamp: '2018-04-11'
      }],
      renewQuote: false,
      radio: '1',
      value3: '',
      depreciation: 55555,
      shareQuote: false,
      showTextarea: false,
      quote: false,
      radio2: false,
      show: false,
      activeName: 'first',
      map: [],
      customer: {
        createdBy: '',
        createdTime: '',
        customerAddress: '',
        customerId: '',
        customerName: '',
        customerRemarks1: '',
        customerRemarks2: '',
        customerSort: '',
        customerTel1: '',
        customerTel2: '',
        insuredArea: '',
        revision: '',
        status: '',
        updatedBy: '',
        updatedTime: ''
      },
      insuredInfo: {
        bizIsInsured: '',
        bizLastYearOutDanger: '',
        bizLastYearOutDangerCount: '',
        businesExpireDate: '',
        businesNumber: '',
        carInfoId: '',
        choiceInsuranceSource: '',
        createId: '',
        createTime: '',
        forceExpireDate: '',
        forceIsInsured: '',
        forceLastYearOutDanger: '',
        forceLastYearOutDangerCount: '',
        holderIdCard: '',
        holderIdCardType: '',
        insuranceCompany: '',
        insuredId: '',
        insuredIdCard: '',
        insuredIdCardType: '',
        insuredName: '',
        lastYearInsuranceCompany: '',
        lastYearSource: '',
        licenseOwner: '',
        licenseOwnerIdCard: '',
        licenseOwnerIdCardType: '',
        mechanismNumber: '',
        nextBusinesStartDate: '',
        nextForceStartDate: '',
        postedName: '',
        trafficNumber: '',
        updateBy: '',
        updateTime: ''
      },
      Tquote: '',
      Pquote: '',
      Rquote: '',
      T: false,
      P: false,
      R: false,
      TquoteList: {},
      RquoteList: {},
      PquoteList: {},
      quoteMap: [],
      quoteMsg: true
    }
  },
  watch: {
    $route(to, from) {
      if (to.path == '/userDetail') {
        this.getQuote(this.$route.query.car_info_id)
      }
    }
  },
  created() {
    this.getQuote(this.$route.query.car_info_id)
  },
  methods: {
    beforeDate(e) {
      var myDate = new Date()
      myDate.setDate(myDate.getDate() + e)
      console.log(myDate.toLocaleDateString())
      this.form.date = new Date(myDate.toLocaleDateString())
    },

    saveCarInfo() {
      this.carInfoloading = true
      delete this.map.carInfo.updatedTime
      delete this.map.carInfo.createdTime
      const params = this.map.carInfo
      saveCarInfo(params).then(res => {
        this.carInfoloading = false
        if (res.code == 200) {
          this.$message({
            message: '保存成功',
            type: 'success'
          })
        } else {
          this.$message({
            message: '保存失败，请重试',
            type: 'error'
          })
        }
      })
    },
    saveCustomer() {
      this.customerloading = true
      delete this.map.customer.updatedTime
      delete this.map.customer.createdTime
      this.map.customer.carInfoId = this.map.carInfo.carInfoId
      const params = {
        customer: JSON.stringify(this.map.customer),
        carInfoId: this.map.carInfo.carInfoId
      }
      saveCustomer(params).then(res => {
        this.customerloading = false
        console.log(res)
        if (res.code == 200) {
          this.$message({
            message: '保存成功',
            type: 'success'
          })
        } else {
          this.$message({
            message: '保存失败，请重试',
            type: 'error'
          })
        }
      })
    },
    saveInsuredInfo() {
      this.insuredinfoloading = true
      delete this.map.insuredInfo.updateTime
      delete this.map.insuredInfo.createTime
      const params = this.map.insuredInfo
      updateInsuredInfo(params).then(res => {
        this.insuredinfoloading = false
        if (res.code == 200) {
          this.$message({
            message: '保存成功',
            type: 'success'
          })
        } else {
          this.$message({
            message: '保存失败，请重试',
            type: 'error'
          })
        }
      })
    },
    onSubmit() {
      console.log(11111)
      this.showTextarea = true
    },
    backNext() {
      this.$router.go(-1)
    },
    getQuote(e) {
      const params = {
        carInfoId: e
      }
      quoteDetails(params).then(res => {
        if (res.code == 200) {
          this.map = res.data
          this.insuredList = this.map.insuredList
          if (this.map.customer == null) {
            this.map.customer = this.customer
          }

          const list = res.data.insuredList
          for (let i = 0; i < list.length; i++) {
            if (list[i].insurance_amount == 0) {
              this.map.insuredList[i].insurance_amount = '投保'
            }
            if (list[i].excluding_deductible != '0.00') {
              list[i].insurance_name = list[i].insurance_name + '(不计免赔)'
              /* let insu = list[i]
              list[i].insurance_name = insu.insurance_name + '(不计免赔)'
              list[i].insurance_amount = '投保'
              list[i].insurance_premium = insu.excluding_deductible
              list[i].excluding_deductible = null*/
            }
          }
          /*   console.log(list)
          console.log( res.data.insuredList)
          console.log( this.insuredList)
          this.insuredList=this.insuredList.concat(list)*/
          if (this.map.insuredInfo == null) {
            this.map.insuredInfo = this.insuredInfo
          }
          if (res.data.quote.length == 0) {
            this.quoteMsg = true
          } else {
            this.quoteMsg = false
            for (let i = 0; i < res.data.quote.length; i++) {
              switch (res.data.quote[i].quoteSource) {
                case '1':
                  this.Tquote = res.data.quote[i]
                  this.T = true
                  this.TquoteList = res.data.TquoteList
                  this.b2 = false
                  break
                case '2':
                  this.Pquote = res.data.quote[i]
                  this.P = true
                  this.PquoteList = res.data.PquoteList
                  console.log(this.Pquote)
                  if (this.b2) {
                    this.b1 = false
                    this.quoteMap.quote = this.Pquote
                    this.quoteMap.quoteList = this.PquoteList
                  }
                  break
                case '4':
                  this.Rquote = res.data.quote[i]
                  this.R = true
                  this.RquoteList = res.data.RquoteList
                  if (this.b3 && this.b2) {
                    this.b1 = false
                    this.quoteMap.quote = this.Rquote
                    this.quoteMap.quoteList = this.RquoteList
                  }
                  break
              }
            }
          }
          this.quoteMap = {}
          this.quoteMap.carInfo = this.map.carInfo
          if (this.Rquote != '') {
            this.quoteMap.quote = this.Rquote
            this.quoteMap.quoteList = this.RquoteList
          } else if (this.Tquote != '') {
            this.quoteMap.quote = this.Tquote
            this.quoteMap.quoteList = this.TquoteList
            console.log(this.Tquote.quoteResult)
            console.log(this.TquoteList)
            console.log(this.quoteMap.quote.quoteResult)
          } else if (this.Pquote != '') {
            this.quoteMap.quote = this.Pquote
            this.quoteMap.quoteList = this.PquoteList
          }
          /* if (this.Rquote!=null){
                              this.quoteMap.set('quote',this.Rquote)
                              this.quoteMap.set('quoteList',this.RquoteList)
                          } else if (this.Tquote!=null) {
                              this.quoteMap.set('quote',this.Tquote)
                              this.quoteMap.set('quoteList',this.TquoteList)
                          }else if (this.Pquote!=null) {
                              this.quoteMap.set('quote',this.Pquote)
                              this.quoteMap.set('quoteList',this.PquoteList)
                          }*/
        }
        console.log(res)
      })
    },
    toCreateOrder() {
      /*   if (this.Rquote!=null && this.Tquote!=null || this.Pquote!=null) {

      }*/
      console.log(this.quoteMap.quote,1)
      if (this.quoteMap.quote) {
        if (this.quoteMap.quote.quoteStatus == 0) {
          this.$alert('报价失败，无法投保，请重新报价', '提示', {
            confirmButtonText: '确定'
          })
          return false
        } else if (this.quoteMap.quote.submitStatus == 0) {
          this.$alert('核保失败，无法投保，请重新核保', '提示', {
            confirmButtonText: '确定'
          })
          return false
        }
      } else {
        this.$alert('暂未报价，无法投保，请重新报价', '提示', {
          confirmButtonText: '确定'
        })
        return false
      }
      console.log(this.quoteMap)
      this.$router.push({ path: '/user/createOrder', query: { quoteMap: JSON.stringify(this.quoteMap) }})
    },
    getSummaries(param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '保费总金额'
          return
        }
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              const a = Number(prev)

              return value + a
            } else {
              return prev
            }
          }, 0)
          sums[index] += ' 元'
        } else {
          sums[index] = 'N/A'
        }
      })
      return sums
    },
    onLi(e) {
      console.log(e)
      switch (e) {
        case 1:
          this.b1 = false
          this.b2 = true
          this.b3 = true
          this.quoteMap.quote = this.Rquote
          this.quoteMap.quoteList = this.RquoteList
          break
        case 2:
          this.b2 = false
          this.b1 = true
          this.b3 = true
          this.quoteMap.quote = this.Tquote
          this.quoteMap.quoteList = this.TquoteList
          break
        case 3:
          this.b3 = false
          this.b1 = true
          this.b2 = true
          this.quoteMap.quote = this.Pquote
          this.quoteMap.quoteList = this.PquoteList
          break
      }
      console.log(this.quoteMap)
    }
  }
}
</script>

<style scoped>
  #home {
    width: 100%;
    height: 100%;
  }

  .text-right {
    text-align: right;
    margin: 0 5%;
    height: auto;
    padding-left: -3em;
  }

  .row {
    height: 3.3em;
    line-height: 3.3em;
  }

  .row-line {
    height: 3em;
    line-height: 3em;
    background-color: #dfe6ec;
    margin-top: 1em;
  }

  .bot-div {
    margin-left: 1em;
    margin-right: 1em;
    margin-bottom: 5em;
    margin-top: 1em;
    height: auto;
  }

  .bot {
    position: fixed;
    bottom: 0;
    height: 4em;
    line-height: 4em;
    background-color: #dfe6ec;
    width: 100%;
    text-align: center;
    z-index: 2;
  }

  .center-strip {
    background-color: #f8f8f8;
    margin: 10px 5%;
    height: 3em;
    line-height: 3em;
  }

  .bottom-div {
    margin: 10px 5%;
    padding: 10px;
  }

  .line {
    height: 2em;
    line-height: 2em;
    border-bottom: #f5f5f5 1px solid;
    padding-left: 2em;
  }

  .baojia-div {
    height: 60em;
    padding-bottom: 2em;
    margin: 0 auto 5em auto;
    width: 90%;
    border: #8c939d 1px solid;
  }

  .baojia-div ul {
    float: left;
    width: 20%;
    height: 100%;
    list-style: none;
  }

  .baojia-div ul li {
    margin: auto;
    height: 6em;
    vertical-align: middle;
    padding-top: 1em;
    padding-left: 1em;
    cursor: pointer;
  }

  .a {
    background-color: #F8F8F8;
  }

  .blod-a {
    font-weight: bold;
  }

  .small-a {
    font-size: 14px;
    color: #8c939d;
  }

  .red-a {
    font-size: 18px;
    margin-top: 0.1em;
    color: red;
  }

  .baojia {
    padding-top: 3em;
    float: left;
    padding-left: 2em;
    height: 100%;
    width: 75%;
  }

  .bot-row {
    height: 3em;
    line-height: 3em;

  }
  .third{
    height: auto;
    margin-bottom: 5em;
  }
  .third p {
    height: 2em;
    line-height: 2em;
    padding-left: 2em;
  }

  .left-div {

  }

  .right-dia-div {
    margin-left: 6%;
  }

  .line-row-dialog {
    height: 4em;
    line-height: 4em;
    border-bottom: #CCCCCC 1px solid;
    padding: 0 0.11em;
  }

  .right-div {
    width: 30px;
    position: fixed;
    right: 0;
    top: 40%;
    text-align: center;
    background-color: #dfe6ec;
    padding: 0.5em 0.5em;
    cursor: pointer;
  }

  .right-div a {
    width: 50px;
    height: 10px;
    line-height: 10px;
  }
</style>
