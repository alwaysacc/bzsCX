<template>
  <div id="home">
    <el-row><el-col span="24"><a style="cursor:pointer; font-size: 12px;color: blue" @click="backNext">返回</a></el-col></el-row>
    <div class="center-div">
      <el-row style="margin-bottom: 20px;border-bottom: #dfe6ec 1px solid;padding-bottom: 5px;">
        <a style="border-bottom: red 2px solid;padding: 0 10px 5px 10px">已换车，填写新车辆信息</a>
      </el-row>
      <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
        <el-form-item label="车牌号码">
          <el-input v-model="formLabelAlign.name" style="width: 100%" />
        </el-form-item>
        <el-form-item label="品牌型号">
          <el-input v-model="formLabelAlign.name" style="width: 100%" />
        </el-form-item>
        <el-form-item label="车辆识别代号">
          <el-input v-model="formLabelAlign.name" style="width: 100%" />
        </el-form-item>
        <el-form-item label="发动机号">
          <el-input v-model="formLabelAlign.name" style="width: 100%" />
        </el-form-item>
        <el-form-item label="注册日期">
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期"
            style="width: 100%"
          />
        </el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      formLabelAlign: {

      }
    }
  },
  methods: {
    backNext() {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
    #home{
        margin: 20px 0 5% 5%;

    }
    #home .center-div{
        text-align: center;
        margin: 50px auto;
        width: 400px;
    }

</style>
