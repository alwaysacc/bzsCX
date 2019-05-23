<template>
  <div class="home">
    <a style="font-size: 14px;color: #1d90e6; margin-left: 2em;cursor:pointer; " @click="backNext">返回</a>
    <div style="text-align: center">

      <div class="center-div">
        <div class="top-div">
          <p>因为以下几种情况，未查到续保信息</p>
          <ul>
            <p>1、从未在当地支持的公司投保过。（每个地区支持查询的保司略有不同，具体请咨询运营人员。）</p>
            <p>2、去年新车、过户车无法用车牌号查到投保信息，请用车架号和发动机号进行续保查询。</p>
          </ul>
        </div>
        <p style="color: blue;">请完善行驶本信息提交报价</p>
        <img src="../../assets/img/xingshiben.png">
        <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
          <el-form-item label="车牌号码">
            <el-input v-model="carNo" style="width: 100%" />
          </el-form-item>
          <el-form-item label="品牌型号">
            <el-input v-model="carModel" style="width: 100%" />
          </el-form-item>
          <el-form-item label="车辆识别代号">
            <el-input v-model="carNumber" style="width: 100%" />
          </el-form-item>
          <el-form-item label="发动机号">
            <el-input v-model="vinNo" style="width: 100%" />
          </el-form-item>
          <el-form-item label="注册日期">
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期"
              style="width: 100%"
            />
          </el-form-item>
          <el-button type="primary" @click="onSubmit">提交申请</el-button>
        </el-form>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      value1: '',
      carModel:'',
      carNumber:'',
      carNo:'',
      vinNo:'',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      }
    }
  },
  methods: {
    backNext() {
      this.$router.go(-1)
    }
  },
  created() {
    this.carNo=this.$route.query.carNo
    console.log(this.$route.query.carNo)
  }
}
</script>

<style scoped>
    .home{
        margin-top: 20px;
        height: auto;
        padding-bottom: 20px;
    }
    .top-div{
        font-size: 12px;
        margin: 0 auto;
        text-align: left;
    word-break:break-all
    }
    .top-div p{

        line-height: 2em;
    }
    .center-div{
        margin: 0 auto;
        width: 28em;
    }
</style>
