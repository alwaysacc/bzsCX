<template>
  <div class="home">
    <el-row>
      <a style="cursor: pointer;color: #1d90e6" @click="back">返回</a>
    </el-row>
    <el-row style="text-align: center">
      <h3>投保详情</h3>
    </el-row>
    <el-row>
      <el-col span="6">
        车牌号：{{map.carInfo.carNumber}}
      </el-col>
      <el-col span="6">
        车牌型号：{{map.carInfo.carModel}}
      </el-col>
    </el-row>
    <el-row class="line">
      <el-col span="20">
        <a style="font-weight: bold">车主信息</a>

      </el-col>
      <el-col  span="4" />
    </el-row>
    <el-row class="row">
      <el-col span="6">
        车主姓名：{{map.carInfo.licenseOwner}}
      </el-col>
      <el-col span="6">
        证件类型：身份证
      </el-col>
      <el-col span="6">
        证件号码：{{map.carInfo.licenseOwnerIdCard}}
      </el-col>
    </el-row>
    <el-row class="line">
      <el-col span="20">
        <a style="font-weight: bold">被保险人信息</a>
        <el-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#ff4949"
        />
        <a>被保险人与车主信息一致</a>
      </el-col>
    </el-row>
    <el-row class="row"  v-if="!value">
      <el-col span="6">
        被保人姓名：{{map.carInfo.licenseOwner}}
      </el-col>
      <el-col span="6">
        证件类型：身份证
      </el-col>
      <el-col span="6">
        证件号码：{{map.carInfo.licenseOwnerIdCard}}
      </el-col>
    </el-row>
    <el-row class="line">
      <el-col span="20">
        <a style="font-weight: bold">投保人信息</a>&emsp;
        <el-switch
          v-model="value2"
          active-color="#13ce66"
          inactive-color="#ff4949"
        />
        <a>投保人信息与被保险人一致</a>
      </el-col>
      <el-col v-if="value2" span="4" />
    </el-row>
    <el-row v-if="!value2" class="row">
      <el-col span="6">
        投保人姓名：{{map.carInfo.licenseOwner}}
      </el-col>
      <el-col span="6">
        证件类型：身份证
      </el-col>
      <el-col span="6">
        证件号码：{{map.carInfo.licenseOwnerIdCard}}
      </el-col>
    </el-row>

    <el-row class="center-row">
      <el-col span="12">车牌号：{{map.carInfo.carNumber}}</el-col>
      <el-col span="12">品牌型号：{{map.carInfo.carModel}}</el-col>
    </el-row>
    <el-row class="center-row">
      <el-col span="12">商业出险：{{map.insuredInfo.bizLastYearOutDangerCount==null?'0':map.insuredInfo.bizLastYearOutDangerCount}}次</el-col>
      <el-col span="12">交强出险：{{map.insuredInfo.forceLastYearOutDangerCount==null?'0':map.insuredInfo.forceLastYearOutDangerCount}}次</el-col>
    </el-row>
    <el-row class="center-row">
      <el-col span="12">
        折扣系数：{{map.quoteInfo.discountRate==null?'0':map.quoteInfo.discountRate}}
      </el-col>
    </el-row>
   <!-- <el-row class="center-row">
      <el-col span="12">商业险投保单号：TD5455456415435454354</el-col>
      <el-col span="12">交强险投保单号：TD5455456415435454354</el-col>
    </el-row>-->
    <el-row class="center-row">
      <el-col span="12">商业险起保日期：{{map.insuredInfo.nextBusinesStartDate}}</el-col>
      <el-col span="12">交强险起保日期：{{map.insuredInfo.nextForceStartDate}}</el-col>
    </el-row>
    <el-table
      :data="tabledata"
      :span-method="arraySpanMethod"
      border
      size="small"
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
        prop="standard_premium"
        label="保险费(元)"
      />
    </el-table>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      form: '',
      value2: true,
      value:true,
      map:[],
      tabledata:{}
    }
  },
  methods:{
    back(){
      this.$router.back(-1)
    }
  },
  created() {
    this.map=JSON.parse(this.$route.query.map)
    this.tabledata=this.map.insuredList
    console.log(JSON.parse(this.$route.query.map))
  }
}
</script>

<style scoped>
    .home{
        margin: 2em 1em 0 1em;
        font-size: 13px;
    }
    .line{
        height: 3em;
        line-height: 3em;
        border-bottom: #dfe6ec 1px solid;
    }
    .row{
        height: 3em;
        line-height: 3em;
    }
    .center-row{
        height: 2em;
        line-height: 2em;
    }
</style>
