<template>
  <div id="home">
    <div class="top-div">
      <el-row>
        <a style="float: right;margin-right: 30px;color: blue;cursor:pointer; " @click="toUpdateCar">修改车辆信息</a>
      </el-row>
      <el-row class="row-div2">
        <el-col span="12">车牌号码：{{ insurance.carNo }}</el-col>
        <el-col span="12">注册日期：{{ insurance.firstRegisterDate }}</el-col>
      </el-row>
      <el-row class="row-div2">
        <el-col span="12">发动机号：{{ insurance.engineNo }}</el-col>
        <el-col span="12">车架号：{{ insurance.frameNo }}&nbsp;<!--<el-button type="primary" @click="onSubmit">车型校验</el-button>--></el-col>
      </el-row>
      <el-row class="row-div2">
        <el-col span="12">新车购置价：{{ insurance.prive }}</el-col>
        <el-col span="12">座位数：{{ insurance.prive }}</el-col>
      </el-row>
      <el-row class="row-div2">
        <el-col span="24">
          品牌型号：
          <el-input v-model="insurance.vehicleFgwCode" style="width: 50%" />
          <!--                    <el-input v-model="insurance.brand_model" style="width: 50%"></el-input>-->
          <!--<el-button type="primary" @click="onSubmit">车型查询</el-button>-->
        </el-col>
      </el-row>
      <el-row class="row-div2">
        <el-col span="12">
          过户车：
          <el-select v-model="fou">
            <el-option label="是" value="shi" />
            <el-option label="否" value="fou" />
          </el-select>
        </el-col>
        <el-col span="12">
          贷款车：
          <el-select v-model="fou">
            <el-option label="是" value="shi" />
            <el-option label="否" value="fou" />
          </el-select>
        </el-col>
      </el-row>
    </div>
    <div class="center">
      <el-row class="row-div2 clearfloat">
        <el-col :span="3">选择报价公司：</el-col>
        <el-col :span="21">
          <!--<li class="center-bor"><img src="../../assets/img/rb.png">人保</li>-->
          <!--<li class="center-bor"><img src="../../assets/img/tpy.png">太平洋</li>-->
          <!--<li class="center-bor"><img src="../../assets/img/pa.png">平安</li>-->
          <el-checkbox-group v-model="source" @change="intentSource">
            <el-checkbox label="1" border>太平洋</el-checkbox>
            <el-checkbox label="2" border>平安</el-checkbox>
            <el-checkbox label="4" border>人保</el-checkbox>
          </el-checkbox-group>
        </el-col>
      </el-row>
    </div>
    <div class="center">
      <el-row class="row-div2">
        <el-col span="5">
          交抢险/车船税起保时间
        </el-col>
        <el-col span="15">
          <el-date-picker
            v-model="insurance.ciBeginDate"
            type="date"
            placeholder="选择日期"
          />
        </el-col>
        <el-col span="4">
          <el-select v-model="FORCEPREMIUM.insuredAmount">
            <el-option label="投保" value="Y" />
            <el-option label="不投保" value="N" />
          </el-select>
        </el-col>
      </el-row>
      <el-row class="row-div2">
        <el-col span="5">
          商业险起保时间
        </el-col>
        <el-col span="15">
          <el-date-picker
            v-model="insurance.biBeginDate"
            type="date"
            placeholder="选择日期"
          />
        </el-col>
        <el-col span="4">
          <el-select v-model="toubao">
            <el-option label="投保" value="shi" />
            <el-option label="不投保" value="fou" />
          </el-select>
        </el-col>
      </el-row>
    </div>
    <div class="center-strip">
      <a>关系人信息</a>
      <p style="float: right;margin-right: 10px;cursor:pointer;" @click="dialogFormVisible=true">设置临时关系人</p>
    </div>
    <el-dialog title="设置临时关系人" :visible.sync="dialogFormVisible" top="0vh" style="text-align: center">
      <p>维护临时关系人，可以用于设置临时被保险人、临时投保人。为防关系人进入黑名单，请定期更换！</p>
      <el-tabs type="border-card" stretch style="width:70%;margin: auto">
        <el-tab-pane label="个人">
          <el-form :model="form">
            <el-form-item :label-width="formLabelWidth">
              <el-input v-model="form.name" placeholder="关系人姓名" autocoe="off" />
            </el-form-item>
            <el-form-item :label-width="formLabelWidth">
              <el-select v-model="card" style="width: 100%">
                <el-option label="身份证" value="shi" />
                <el-option label="组织机构代码证" value="fou" />
                <el-option label="营业执照/统一社会信用代码" value="fou" />
                <el-option label="港澳居民来往内地通行证" value="fou" />
                <el-option label="港澳身份证" value="fou" />
              </el-select>
            </el-form-item>
            <el-form-item :label-width="formLabelWidth">
              <el-input v-model="form.name" placeholder="证件号码" autocomplete="off" />
            </el-form-item>
            <el-form-item :label-width="formLabelWidth">
              <el-input v-model="form.name" placeholder="手机号" autocomplete="off" />
            </el-form-item>
            <el-form-item :label-width="formLabelWidth">
              <el-input v-model="form.name" placeholder="邮箱" autocomplete="off" />
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="公户">
          <el-form :model="form">
            <el-form-item :label-width="formLabelWidth">
              <el-input v-model="form.name" placeholder="公户的名称" autocomplete="off" />
            </el-form-item>
            <el-form-item :label-width="formLabelWidth">
              <el-select v-model="card" style="width: 100%">
                <el-option label="身份证" value="shi" />
                <el-option label="组织机构代码证" value="fou" />
                <el-option label="营业执照/统一社会信用代码" value="fou" />
                <el-option label="港澳居民来往内地通行证" value="fou" />
                <el-option label="港澳身份证" value="fou" />
              </el-select>
            </el-form-item>
            <el-form-item :label-width="formLabelWidth">
              <el-input v-model="form.name" placeholder="证件号" autocomplete="off" />
            </el-form-item>
            <el-form-item :label-width="formLabelWidth">
              <el-input v-model="form.name" placeholder="手机号" autocomplete="off" />
            </el-form-item>
            <el-form-item :label-width="formLabelWidth">
              <el-input v-model="form.name" placeholder="邮箱" autocomplete="off" />
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <!--车主信息-->
    <div class="bottom-div">
      <el-row class="line">
        <el-col span="20">
          <a style="font-weight: bold">车主信息</a>

        </el-col>
        <el-col span="4">
          <el-select v-model="shi" placeholder="选择临时车主">
            <el-option label="个人" value="shi" />
            <el-option label="公户" value="fou" />
          </el-select>
        </el-col>
      </el-row>
      <div />
      <el-row class="row-div2">
        <el-col span="8">
          车主姓名：<el-input v-model="insurance.name" style="width: auto" />
        </el-col>
        <el-col span="8">
          证件类型： <el-select v-model="card" style="width: auto">
            <el-option label="身份证" value="1" />
            <el-option label="组织机构代码证" value="2" />
            <el-option label="营业执照/统一社会信用代码" value="3" />
            <el-option label="港澳居民来往内地通行证" value="4" />
            <el-option label="港澳身份证" value="5" />
          </el-select>
        </el-col>
        <el-col span="8">
          证件号码：<el-input v-model="insurance.cardID" style="width: auto" />
        </el-col>
      </el-row>
      <el-row class="row-div2">
        <el-col span="8">
          车主电话：<el-input v-model="insurance.mobile" style="width: auto" />
        </el-col>
        <el-col span="8">
          车主邮箱：<el-input v-model="insurance.email" style="width: auto" />
        </el-col>
        <el-col span="8" />
      </el-row>

      <el-row />
      <!--被保险人信息-->
      <el-row class="line" style="margin-top: 10px">
        <el-col span="3">
          <a style="font-weight: bold">被保险人信息</a>
        </el-col>
        <el-col span="17">
          <el-switch
            v-model="value2"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
          <a style="color: red">被保险人信息与车主信息一致</a>
        </el-col>
        <el-col span="4">
          <el-select v-if="!value2" v-model="shi" placeholder="选择临时被保险人">
            <el-option label="个人" value="shi" />
            <el-option label="公户" value="fou" />
          </el-select>
        </el-col>
      </el-row>

      <el-row v-if="!value2" class="row-div2">
        <el-col span="8">
          被保险人姓名:<el-input v-model="insurance.name" style="width: auto" />
        </el-col>
        <el-col span="8">
          证件类型:  <el-select v-model="card" placeholder="选择临时车主" style="width: auto">
            <el-option label="身份证" value="shi" />
            <el-option label="组织机构代码证" value="fou" />
            <el-option label="营业执照/统一社会信用代码" value="fou" />
            <el-option label="港澳居民来往内地通行证" value="fou" />
            <el-option label="港澳身份证" value="fou" />
          </el-select>
        </el-col>
        <el-col span="8">
          证件号码:<el-input v-model="insurance.cardID" style="width: auto" />
        </el-col>
      </el-row>
      <!--投保人信息-->
      <el-row class="line" style="margin-top: 10px">
        <el-col span="3">
          <a style="font-weight: bold">投保人信息</a>
        </el-col>
        <el-col span="17">
          <el-switch
            v-model="toubaoren"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
          <a style="color: red">投保人与车主一致</a>
        </el-col>
        <el-col v-if="!toubaoren" span="4">
          <el-select v-model="shi" placeholder="选择临时投保人">
            <el-option label="个人" value="shi" />
            <el-option label="公户" value="fou" />
          </el-select>
        </el-col>
      </el-row>
      <div v-if="!toubaoren">
        <el-row class="row-div2">
          <el-col span="8">
            投保人姓名:<el-input v-model="data" style="width: auto" />
          </el-col>
          <el-col span="8">
            证件类型:  <el-select v-model="card" placeholder="选择临时车主" style="width: auto">
              <el-option label="身份证" value="shi" />
              <el-option label="组织机构代码证" value="fou" />
              <el-option label="营业执照/统一社会信用代码" value="fou" />
              <el-option label="港澳居民来往内地通行证" value="fou" />
              <el-option label="港澳身份证" value="fou" />
            </el-select>
          </el-col>
          <el-col span="8">
            证件号码:<el-input v-model="data" style="width: auto" />
          </el-col>
        </el-row>
        <el-row v-if="!value2" class="row-div2">
          <el-col span="8">
            投保人手机:<el-input v-model="data" style="width: auto" />
          </el-col>
          <el-col span="8">
            投保人邮箱:<el-input v-model="data" style="width: auto" />
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="center-strip">
      <a>基本险</a>
    </div>
    <div class="bottom-div">
      <el-row class="row-div2">
        <el-col span="18">{{ A.insuranceName }}</el-col>
        <!--<el-col span="14">-->
        <!--折扣价-->
        <!--<el-input v-model="discount" disabled style="width: 100px"></el-input>-->
        <!--/协商价-->
        <!--<el-input v-model="A.insuredAmount" style="width: 100px"></el-input>-->
        <!--</el-col>-->
        <el-col span="3">
          <el-switch
            v-model="MA"
            inactive-text="不计免赔"
          />
        </el-col>
        <el-col span="3">
          <el-select v-model="A.insuredAmount" style="width: 100px" @change="BJM(A.insuranceCode,A.insuredAmount)">
            <el-option label="投保" value="Y" />
            <el-option label="不投保" value="N" />
          </el-select>
        </el-col>
      </el-row>
      <el-row class="row-div2">
        <el-col span="18">{{ B.insuranceName }}</el-col>
        <el-col span="3">
          <el-switch
            v-model="MB"
            inactive-text="不计免赔"
          />
        </el-col>
        <el-col span="3">
          <el-select v-model="B.insuredAmount" style="width: 100px" @change="BJM(B.insuranceCode,B.insuredAmount)">
            <el-option label="不投保" value="N" />
            <el-option label="5万" value="50000" />
            <el-option label="10万" value="100000" />
            <el-option label="15万" value="150000" />
            <el-option label="20万" value="200000" />
            <el-option label="30万" value="300000" />
            <el-option label="50万" value="500000" />
            <el-option label="100万" value="1000000" />
            <el-option label="150万" value="1500000" />
            <el-option label="200万" value="2000000" />
            <el-option label="250万" value="2500000" />
            <el-option label="300万" value="3000000" />
            <el-option label="350万" value="3500000" />
          </el-select>
        </el-col>
      </el-row>
      <el-row class="row-div2">
        <el-col span="18">{{ G1.insuranceName }}</el-col>
        <el-col span="3">
          <el-switch
            v-model="MG1"
            inactive-text="不计免赔"
          />
        </el-col>
        <el-col span="3">
          <el-select v-model="G1.insuredAmount" style="width: 100px" @change="BJM(G1.insuranceCode,G1.insuredAmount)">
            <el-option label="投保" value="Y" />
            <el-option label="不投保" value="N" />
          </el-select>
        </el-col>
      </el-row>
      <el-row class="row-div2">
        <el-col span="18">{{ D3.insuranceName }}</el-col>
        <el-col span="3">
          <el-switch
            v-model="MD3"
            inactive-text="不计免赔"
          />
        </el-col>
        <el-col span="3">
          <el-select v-model="D3.insuredAmount" style="width: 100px" @change="BJM(D3.insuranceCode,D3.insuredAmount)">
            <el-option label="不投保" value="N" />
            <el-option label="1万" value="10000" />
            <el-option label="2万" value="20000" />
            <el-option label="3万" value="30000" />
            <el-option label="4万" value="40000" />
            <el-option label="5万" value="50000" />
            <el-option label="10万" value="100000" />
            <el-option label="20万" value="200000" />
            <el-option label="50万" value="500000" />
            <el-option label="100万" value="1000000" />
          </el-select>
        </el-col>
      </el-row>
      <el-row class="row-div2">
        <el-col span="18">{{ D4.insuranceName }}</el-col>
        <el-col span="3">
          <el-switch
            v-model="MD4"
            inactive-text="不计免赔"
          />
        </el-col>
        <el-col span="3">
          <el-select v-model="D4.insuredAmount" style="width: 100px" @change="BJM(D4.insuranceCode,D4.insuredAmount)">
            <el-option label="不投保" value="N" />
            <el-option label="1万" value="10000" />
            <el-option label="2万" value="20000" />
            <el-option label="3万" value="30000" />
            <el-option label="4万" value="40000" />
            <el-option label="5万" value="50000" />
            <el-option label="10万" value="100000" />
            <el-option label="20万" value="200000" />
            <el-option label="50万" value="500000" />
            <el-option label="100万" value="1000000" />
          </el-select>
        </el-col>
      </el-row>

    </div>
    <div class="center-strip">
      <a>附加险</a>
    </div>

    <div class="bottom-div" style="padding-bottom: 5em">
      <el-row class="row-div2">
        <el-col span="21">{{ Q3.insuranceName }}</el-col>
        <el-col span="3">
          <el-select v-model="Q3.insuredAmount" style="width: 100px">
            <el-option label="不投保" value="N" />
            <el-option label="国产" value="0" />
            <el-option label="进口" value="1" />
          </el-select>
        </el-col>
      </el-row>
      <el-row class="row-div2">
        <el-col span="18">{{ Z.insuranceName }}</el-col>
        <el-col span="3">
          <el-switch
            v-model="MZ"
            inactive-text="不计免赔"
          />
        </el-col>
        <el-col span="3">
          <el-select v-model="Z.insuredAmount" style="width: 100px" @change="BJM(Z.insuranceCode,Z.insuredAmount)">
            <el-option label="投保" value="Y" />
            <el-option label="不投保" value="N" />
          </el-select>
        </el-col>
      </el-row>
      <el-row class="row-div2">
        <el-col span="21">{{ F.insuranceName }}</el-col>
        <el-col span="3">
          <el-select v-model="F.insuredAmount" style="width: 100px" @change="BJM(F.insuranceCode,F.insuredAmount)">
            <el-option label="不投保" value="N" />
            <el-option label="国产" value="0" />
            <el-option label="进口" value="1" />
          </el-select>
        </el-col>
      </el-row>
      <el-row class="row-div2">
        <el-col span="18">{{ L.insuranceName }}</el-col>
        <el-col span="3">
          <el-switch
            v-model="ML"
            inactive-text="不计免赔"
          />
        </el-col>
        <el-col span="3">
          <el-select v-model="L.insuredAmount" style="width: 100px" @change="BJM(L.insuranceCode,L.insuredAmount)">
            <el-option label="不投保" value="N" />
            <el-option label="2000元" value="2000" />
            <el-option label="5000元" value="2000" />
            <el-option label="1万" value="10000" />
            <el-option label="2万" value="20000" />
          </el-select>
        </el-col>
      </el-row>
      <el-row class="row-div2">
        <el-col span="18">{{ X1.insuranceName }}</el-col>
        <el-col span="3">
          <el-switch
            v-model="MX1"
            inactive-text="不计免赔"
          />
        </el-col>
        <el-col span="3">
          <el-select v-model="X1.insuredAmount" style="width: 100px" @change="BJM(X1.insuranceCode,X1.insuredAmount)">
            <el-option label="投保" value="Y" />
            <el-option label="不投保" value="N" />
          </el-select>
        </el-col>
      </el-row>
      <el-row class="row-div2">
        <el-col span="18">{{ R.insuranceName }}</el-col>
        <el-col span="3">
          <el-switch
            v-model="MR"
            inactive-text="不计免赔"
          />
        </el-col>
        <el-col span="3">
          <el-select v-model="R.insuredAmount" style="width: 100px" @change="BJM(R.insuranceCode,R.insuredAmount)">
            <el-option label="不投保" value="N" />
            <el-option label="1万" value="10000" />
            <el-option label="2万" value="20000" />
            <el-option label="3万" value="30000" />
            <el-option label="4万" value="40000" />
            <el-option label="5万" value="50000" />
          </el-select>
        </el-col>
      </el-row>
      <el-row class="row-div2">
        <el-col :span="b">{{ Z2.insuranceName }}</el-col>
        <el-col :span="a" :hidden="!MZ2">
          <el-select v-model="amount" style=";width: 100px">
            <el-option label="100元" value="100" />
            <el-option label="200元" value="200" />
            <el-option label="300元" value="300" />
          </el-select>
          <a>
            *
          </a>
          <el-input v-model="input" max="90" value="number" maxlength="2" style="width: 90px" />
          <a>
            天
          </a>
        </el-col>
        <el-col :span="3">
          <el-select v-model="Z2.insuredAmount" style="width: 100px" @change="BJM(Z2.insuranceCode,Z2.insuredAmount)">
            <el-option label="投保" value="Y" />
            <el-option label="不投保" value="N" />
          </el-select>
        </el-col>
      </el-row>
      <el-row class="row-div2">
        <el-col span="21">{{ Z3.insuranceName }}</el-col>
        <el-col span="3">
          <el-select v-model="Z3.insuredAmount" style="width: 100px">
            <el-option label="投保" value="Y" />
            <el-option label="不投保" value="N" />
          </el-select>
        </el-col>
      </el-row>
    </div>
    <div class="bot">
      <el-button style="color: black" @click="onSubmit">查看续保信息</el-button>
      <el-button type="primary" @click="getQuoteInfoAllParams">提交报价</el-button>
    </div>
  </div>

</template>

<script>
import { similar } from '../../utils/similar'
// import { getStore } from '../../config/mUtils'

export default {
  name: '',
  components: {
  },
  data() {
    return {
      a: 0,
      b: 21,
      source: [],
      quoteSource: [],
      insurance: {
        name: '',
        cardID: '',
        cardType: '1',
        mobile: ' ',
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
      input: '',
      amount: '100',
      loading: false,
      data: '',
      fou: '否',
      toubao: 'shi',
      value1: '2018-9-9 00:00',
      value2: true,
      card: '身份证',
      toubaoren: true,
      discount: '45752.40',
      consult: '',
      value3: true,
      dialogFormVisible: false,
      form: {},
      A: {
        insuranceCode: 'A',
        insuranceName: '机动车损失险',
        insuredAmount: '',
        flag: ''
      },
      B: {
        insuranceCode: 'B',
        insuranceName: '第三者责任险',
        insuredAmount: '',
        flag: ''
      },
      G1: {
        insuranceCode: 'G1',
        insuranceName: '全车盗抢险',
        insuredAmount: '',
        flag: ''
      },
      D3: {
        insuranceCode: 'D3',
        insuranceName: '车上人员责任保险（驾驶员）',
        insuredAmount: '',
        flag: ''
      },
      D4: {
        insuranceCode: 'D4',
        insuranceName: '车上人员责任保险（乘客）',
        insuredAmount: '',
        flag: ''
      },
      Q3: {
        insuranceCode: 'Q3',
        insuranceName: '指定修理厂险',
        insuredAmount: '',
        flag: ''
      },
      Z: {
        insuranceCode: 'Z',
        insuranceName: '自燃损失险',
        insuredAmount: '',
        flag: ''
      },
      F: {
        insuranceCode: 'F',
        insuranceName: '玻璃单独破碎险',
        insuredAmount: '',
        flag: ''
      },
      L: {
        insuranceCode: 'L',
        insuranceName: '车身划痕损失险',
        insuredAmount: '',
        flag: ''
      },
      X1: {
        insuranceCode: 'X1',
        insuranceName: '发动机涉水损失险',
        insuredAmount: '',
        flag: ''
      },
      R: {
        insuranceCode: 'R',
        insuranceName: '精神损害抚慰金责任险',
        insuredAmount: '',
        flag: ''
      },
      Z2: {
        insuranceCode: 'Z2',
        insuranceName: '修理期间费用补偿险',
        insuredAmount: '',
        flag: ''
      },
      Z3: {
        insuranceCode: 'Z3',
        insuranceName: '机动车损失找不到第三方险',
        insuredAmount: '',
        flag: ''
      },
      FORCEPREMIUM: {
        insuranceCode: 'FORCEPREMIUM',
        insuranceName: '交强险',
        insuredAmount: 'Y',
        flag: ''
      },
      MA: false,
      MB: false,
      MD3: false,
      MD4: false,
      MZ: false,
      MX1: false,
      MR: false,
      ML: false,
      MG1: false,
      MZ2: false,
      list: {}
    }
  },
  created() {
    this.listmap()
  },
  methods: {
    BJM(e, m) {
      switch (e) {
        case 'A':
          if (m != 'N') {
            this.MA = true
          } else { this.MA = false }
          break
        case 'B':
          if (m != 'N') { this.MB = true } else { this.MB = false }
          break
        case 'D3':
          if (m != 'N') { this.MD3 = true } else { this.MD3 = false }
          break
        case 'D4':
          if (m != 'N') { this.MD4 = true } else { this.MD4 = false }
          break
        case 'Z':
          if (m != 'N') { this.MZ = true } else { this.MZ = false }
          break
        case 'X1':
          if (m != 'N') { this.MX1 = true } else { this.MX1 = false }
          break
        case 'R':
          if (m != 'N') { this.MR = true } else { this.MR = false }
          break
        case 'G1':
          if (m != 'N') { this.MG1 = true } else { this.MG1 = false }
          break
        case 'L':
          if (m != 'N') { this.ML = true } else { this.ML = false }
          break
        case 'Z2':
          if (m != 'N') {
            this.MZ2 = true
            this.a = 6
            this.b = 15
            this.Z2.flag = this.input + ',' + this.amount
          } else {
            this.a = 0
            this.b = 21
            this.MZ2 = false
            this.Z2.flag = ''
          }
          break
        case 'F':
          if (m == '0') { this.F.flag = '0' }
          if (m == '1') { this.F.flag = '1' }
          break
      }

      console.log(e)
      console.log(m)
    },
    setRelationship() {
    },
    toUpdateCar() {
      this.$router.push('/user/updateCar')
    },
    listmap() {
      this.insurance = JSON.parse(this.$route.query.insurance)
      console.log(this.insurance)
      this.source.push(this.insurance.source)
      this.list = this.insurance.listMap
      /* function minOrMaxsInArray(array, length, compare) {

          let result = {};

          if (array == null || !(array instanceof Array)) {
              return result;
          }
          // 默认长度为数组的长度
          length = length || array.length;
          // 数组比较方法
          compare = compare || function (a, b) {
              return a - b;
          };

          // 进行排序
          array.sort(compare);

          result = {
              1: array.slice(0, length),
              2: array.reverse().slice(0, length)
          };

          return function (type) {
              return result[type] || [];
          }

      }*/
      const arr = this.list
      let num1 = 0
      let num2 = 0
      let num3 = 0
      let num4 = 0
      let num5 = 0
      let num6 = 0
      let num7 = 0
      let num8 = 0
      let num9 = 0
      let num10 = 0
      let num11 = 0
      let num12 = 0
      let num13 = 0
      for (let i = 0; i < arr.length; i++) {
        num1 = similar(arr[i].insuranceName, this.A.insuranceName)
        num2 = similar(arr[i].insuranceName, this.B.insuranceName)
        num3 = similar(arr[i].insuranceName, this.G1.insuranceName)
        num4 = similar(arr[i].insuranceName, this.D3.insuranceName)
        num5 = similar(arr[i].insuranceName, this.D4.insuranceName)
        num6 = similar(arr[i].insuranceName, this.Q3.insuranceName)
        num7 = similar(arr[i].insuranceName, this.Z.insuranceName)
        num8 = similar(arr[i].insuranceName, this.F.insuranceName)
        num9 = similar(arr[i].insuranceName, this.L.insuranceName)
        num10 = similar(arr[i].insuranceName, this.X1.insuranceName)
        num11 = similar(arr[i].insuranceName, this.R.insuranceName)
        num12 = similar(arr[i].insuranceName, this.Z2.insuranceName)
        num13 = similar(arr[i].insuranceName, this.Z3.insuranceName)
        // Math.max(1,2,3)
        // let arr2 = [{A: num1}, {B: num2}, {G1: num3}, {D3: num4}, {D4: num5}, {Q3: num6},
        //     {Z: num7},{F: num8},{L: num9},{X1: num10},{R: num11},{Z2: num12},{Z3: num13}
        // ];
        const arr3 = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12, num13
        ]
        const num = Math.max.apply(null, arr3)
        if (num == num1) {
          this.A.insuredAmount = 'Y'
          if (arr[i].bujimianpei != '' && arr[i].bujimianpei != null) {
            this.MA = true
          }
        } else if (num == num2) {
          this.B.insuredAmount = arr[i].amount
          if (arr[i].bujimianpei != '' && arr[i].bujimianpei != null) {
            this.MB = true
          }
        } else if (num == num3) {
          this.G1.insuredAmount = arr[i].amount
          if (arr[i].bujimianpei != '' && arr[i].bujimianpei != null) {
            this.MG1 = true
          }
        } else if (num == num4) {
          this.D3.insuredAmount = arr[i].amount
          if (arr[i].bujimianpei != '' && arr[i].bujimianpei != null) {
            this.MD3 = true
          }
        } else if (num == num5) {
          this.D4.insuredAmount = arr[i].amount
          if (arr[i].bujimianpei != '' && arr[i].bujimianpei != null) {
            this.MD4 = true
          }
        } else if (num == num6) {
          this.Q3.insuredAmount = arr[i].amount
        } else if (num == num7) {
          this.Z.insuredAmount = arr[i].amount
          if (arr[i].bujimianpei != '' && arr[i].bujimianpei != null) {
            this.MZ = true
          }
        } else if (num == num8) {
          this.F.insuredAmount = arr[i].amount
        } else if (num == num9) {
          this.L.insuredAmount = arr[i].amount
          if (arr[i].bujimianpei != '' && arr[i].bujimianpei != null) {
            this.ML = true
          }
        } else if (num == num10) {
          this.X1.insuredAmount = arr[i].amount
          if (arr[i].bujimianpei != '' && arr[i].bujimianpei != null) {
            this.X1.insuredAmount='Y'
            this.MX1 = true
          }
        } else if (num == num11) {
          this.R.insuredAmount = arr[i].amount
          if (arr[i].bujimianpei != '' && arr[i].bujimianpei != null) {
            this.MR = true
          }
        } else if (num == num12) {
          this.Z2.insuredAmount = arr[i].amount
        } else if (num == num13) {
          this.Z3.insuredAmount = arr[i].amount
        }

        /* switch (st){
            case 'A':
                this.A.insuranceName=arr[i].insuranceName
                this.A.insuredAmount='Y'
                if (arr[i].bujimianpei!='' && arr[i].bujimianpei!=null){
                    this.MA=true
                }
                break
            case 'B':
                this.B.insuranceName=arr[i].insuranceName
                this.B.insuredAmount='Y'
                if (arr[i].bujimianpei!='' && arr[i].bujimianpei!=null){
                    this.MB=true
                }
                break
            case 'G1':
                this.G1.insuranceName=arr[i].insuranceName
                this.G1.insuredAmount='Y'
                if (arr[i].bujimianpei!='' && arr[i].bujimianpei!=null){
                    this.MG1=true
                }
                break
            case 'D3':
                this.D3.insuranceName=arr[i].insuranceName
                this.D3.insuredAmount='Y'
                if (arr[i].bujimianpei!='' && arr[i].bujimianpei!=null){
                    this.MD3=true
                }
                break
            case 'D4':
                this.D4.insuranceName=arr[i].insuranceName
                this.D4.insuredAmount='Y'
                if (arr[i].bujimianpei!='' && arr[i].bujimianpei!=null){
                    this.MD4=true
                }
                break
            case 'Q3':
                this.Q3.insuranceName=arr[i].insuranceName
                this.Q3.insuredAmount='Y'
                break
            case 'Z':
                this.Z.insuranceName=arr[i].insuranceName
                this.Z.insuredAmount='Y'
                if (arr[i].bujimianpei!='' && arr[i].bujimianpei!=null){
                    this.MZ=true
                }
                break
            case 'F':
                this.F.insuranceName=arr[i].insuranceName
                this.F.insuredAmount='Y'
                break
            case 'L':
                this.L.insuranceName=arr[i].insuranceName
                this.L.insuredAmount='Y'
                if (arr[i].bujimianpei!='' && arr[i].bujimianpei!=null){
                    this.ML=true
                }
                break
            case 'X1':
                this.X1.insuranceName=arr[i].insuranceName
                this.X1.insuredAmount='Y'
                if (arr[i].bujimianpei!='' && arr[i].bujimianpei!=null){
                    this.MX1=true
                }
                break
            case 'R':
                this.R.insuranceName=arr[i].insuranceName
                this.R.insuredAmount='Y'
                if (arr[i].bujimianpei!='' && arr[i].bujimianpei!=null){
                    this.MR=true
                }
                break
            case 'Z2':
                this.Z2.insuranceName=arr[i].insuranceName
                this.Z2.insuredAmount='Y'
                break
            case 'Z3':
                this.Z3.insuranceName=arr[i].insuranceName
                this.Z3.insuredAmount='Y'
                break
        }*/
        this.loading = false
      }
    },
    getQuoteInfoAllParams() {
      if (this.source=='') {
        this.$alert('请选择报价公司', '提示', {
          confirmButtonText: '确定'
        })
        return false
      }
      if ( this.insurance.mobile==null || this.insurance.mobile.length<11  ) {
        this.$alert('请输入正确的车主电话', '提示', {
          confirmButtonText: '确定'
        })
        return false
      }
      // this.loading=true
      const user = JSON.parse(this.$store.getters.user)
      this.list = {}
      this.list = new Array()
      if (this.FORCEPREMIUM.insuredAmount != '') {
        this.list.push(this.FORCEPREMIUM)
      }
      if (this.A.insuredAmount != '') {
        this.list.push(this.A)
        if (this.MA) {
          const s = {}
          s.insuranceCode = 'MA'
          s.insuranceName = this.A.insuranceName
          s.insuredAmount = this.A.insuredAmount
          s.flag = this.A.flag
          this.list.push(s)
        }
      }
      if (this.B.insuredAmount != '') {
        this.list.push(this.B)
        if (this.MB) {
          const s = {}
          s.insuranceCode = 'MB'
          s.insuranceName = this.B.insuranceName
          s.insuredAmount = this.B.insuredAmount
          s.flag = this.B.flag
          this.list.push(s)
        }
      }
      if (this.G1.insuredAmount != '') {
        this.list.push(this.G1)
        if (this.MG1) {
          const s = {}
          s.insuranceCode = 'MG1'
          s.insuranceName = this.G1.insuranceName
          s.insuredAmount = this.G1.insuredAmount
          s.flag = this.G1.flag
          this.list.push(s)
        }
      }
      if (this.L.insuredAmount != '') {
        this.list.push(this.L)
        if (this.ML) {
          const s = {}
          s.insuranceCode = 'ML'
          s.insuranceName = this.L.insuranceName
          s.insuredAmount = this.L.insuredAmount
          s.flag = this.L.flag
          this.list.push(s)
        }
      }
      if (this.D3.insuredAmount != '') {
        this.list.push(this.D3)
        if (this.MD3) {
          const s = {}
          s.insuranceCode = 'MD3'
          s.insuranceName = this.D3.insuranceName
          s.insuredAmount = this.D3.insuredAmount
          s.flag = this.D3.flag
          this.list.push(s)
        }
      }
      if (this.D4.insuredAmount != '') {
        this.list.push(this.D4)
        if (this.MD4) {
          const s = {}
          s.insuranceCode = 'MD4'
          s.insuranceName = this.D4.insuranceName
          s.insuredAmount = this.D4.insuredAmount
          s.flag = this.D4.flag
          this.list.push(s)
        }
      }
      if (this.Z.insuredAmount != '') {
        this.list.push(this.Z)
        if (this.MZ) {
          const s = {}
          s.insuranceCode = 'MZ'
          s.insuranceName = this.Z.insuranceName
          s.insuredAmount = this.Z.insuredAmount
          s.flag = this.Z.flag
          this.list.push(s)
        }
      }
      if (this.X1.insuredAmount != '') {
        this.list.push(this.X1)
        if (this.MX1) {
          const s = {}
          s.insuranceCode = 'MX1'
          s.insuranceName = this.X1.insuranceName
          s.insuredAmount = this.X1.insuredAmount
          s.flag = this.X1.flag
          this.list.push(s)
        }
      }
      if (this.R.insuredAmount != '') {
        this.list.push(this.R)
        if (this.MR) {
          const s = {}
          s.insuranceCode = 'MR'
          s.insuranceName = this.R.insuranceName
          s.insuredAmount = this.R.insuredAmount
          s.flag = this.R.flag
          this.list.push(s)
        }
      }
      // this.list.push(this.B)
      // this.list.push(this.G1)
      // this.list.push(this.D3)
      // this.list.push(this.D4)
      // this.list.push(this.Q3)
      // this.list.push(this.Z)
      // this.list.push(this.F)
      // this.list.push(this.L)
      // this.list.push(this.X1)
      // this.list.push(this.R)
      // this.list.push(this.Z2)
      // this.list.push(this.Z3)
      const params = {
        personName: this.insurance.name,
        carInfoId: this.insurance.carInfoId,
        personMobile: this.insurance.mobile,
        personCardID: this.insurance.cardID,
        carNo: this.insurance.carNo,
        carFrameNo: this.insurance.frameNo,
        carEngineNo: this.insurance.engineNo,
        salesPerson: user.accountId,
        carFirstRegisterDate: this.insurance.firstRegisterDate,
        createdBy: user.accountId,
        lists: JSON.stringify(this.list)
      }
      /* let params={
          personName:'邹雅雯',
          personMobile:'15518727891',
          personCardID:'320831198811210028',
          carNo:'苏A36H7Q',
          carFrameNo:'LBV8A7401JMN35283',
          carEngineNo:'A154D414',
          salesPerson:'杨洁',
          carFirstRegisterDate:'2018-05-31',
          list:JSON.stringify(this.list)
      }*/
      console.log(params)
      this.$router.push({ path: '/user/submitQuote', query: { param: JSON.stringify(params),
        biBeginDate: this.insurance.biBeginDate,
        ciBeginDate: this.insurance.ciBeginDate,
        carInfoId: this.insurance.carInfoId,
        source: this.source,
        vehicleFgwCode: this.insurance.vehicleFgwCode
      }})
    },
    intentSource() {
      console.log(this.source)
    }
  }
}
</script>

<style lang="scss" scoped>

    #home{
        color: black;
    }
    .top-div{
        padding:30px;
        margin: 0 5%;
        background-color: #f8f8f8;
    }
    .row-div{
        height: 30px;
        line-height: 30px;
    }
    .row-div2{
        height: 50px;
        line-height: 50px;
    }
   .center{
        padding:30px;
       margin: 10px 5%;
        background-color: #f8f8f8;
    }
   img{
       height: 30px;
       padding-left: 0.5em;
       padding-right: 0.3em;
   }
    .center-bor{
        float: left;
        display:flex;
        align-items: center;//子元素垂直居中
        justify-content: center;//子元素水平居中
        width: 100px;
        height: 40px;
        line-height: 40px;
        border: #dfe6ec 1px solid;
        margin-left: 30px;
    }
    .clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}
    .clearfloat{zoom:1}
    .center-strip{
        text-align: center;
        background-color: #f8f8f8;
        margin: 10px 5%;
        height: 50px;
        line-height: 50px;
    }
    .bottom-div{
        margin: 10px 5%;
        padding: 10px;
    }
    .line{
        border-bottom: #f5f5f5 1px solid;
    }
    .bot{
        position: fixed;
        bottom: 0;
        background-color: #f8f8f8;
        width: 100%;
        padding: 10px 0;
       text-align: center;
    }
</style>
