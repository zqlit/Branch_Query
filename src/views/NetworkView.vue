<template>
    <div class="network-view">
        <h2>

            网点查询

        </h2>

        <div style="height: 50px; background-color: #f2f2f2; margin-bottom: 20px;">
            <form @submit.prevent="showAddr" style="display: flex; justify-content: space-between; height: 100%;">
                <!-- 省份选择 -->
                <div style="display: flex; align-items: center; height: 100%;">
                    <select id="prov" v-model="current.prov" @change="showCity()">
                        <option value="">-------------</option>
                        <option v-for="(province, index) in provinces" :key="index" :value="province.name">
                            {{ province.name }}
                        </option>
                    </select>
                    <!-- 城市选择 -->
                    <select id="city" v-model="current.city" @change="showCountry()">
                        <option value="">-------------</option>
                        <option v-for="(city, index) in currentCity" :key="index" :value="city.name">
                            {{ city.name }}
                        </option>
                    </select>
                    <!-- 县区选择 -->
                    <select id="country" v-model="current.country" @change="selecCountry()">
                        <option value="">-------------</option>
                        <option v-for="(country, index) in currentCountry" :key="index" :value="country">
                            {{ country }}
                        </option>
                    </select>
                </div>

                <!-- 您选择的是 -->
                <div style="display: flex; align-items: center;">
                    <label for="addr-show" style="margin-left: auto; margin-right: 10px;">
                        服务网点名称：
                        <input type="text" v-model="submit.addrShow" id="addr-show" readonly>
                    </label>
                </div>

                <!-- 确定按钮 -->
                <div style="display: flex; align-items: center;">
                    <button type="submit" class="btn met1" :disabled="!canSubmit" style="margin-left: auto;">查询</button>
                </div>
            </form>
        </div>




        <!-- 表格 -->
        <div class="container">
            <table class="centered-table">
                <thead>
                    <tr>
                        <th>省</th>
                        <th>市</th>
                        <th>县</th>
                        <th style="width: 216px;">服务网点名称</th>
                        <th>邮编</th>
                        <th>地址</th>
                        <th style="width: 72px;">是否办理金融业务</th>
                        <th>电话</th>
                        <th>营业时间</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(branch, index) in branches" :key="index"
                        :class="{ 'even-row': index % 2 === 0, 'odd-row': index % 2 !== 0 }">
                        <td>{{ branch.province }}</td>
                        <td>{{ branch.city }}</td>
                        <td>{{ branch.county }}</td>
                        <td>{{ branch.name }}</td>
                        <td>{{ branch.zipcode }}</td>
                        <td>{{ branch.address }}</td>
                        <td>{{ branch.financialServices ? '是' : '否' }}</td>
                        <td>{{ branch.phone }}</td>
                        <td>{{ branch.businessHours }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- 分页 -->
        <div id='ali' style="text-align: center;">
            <a href="#">1 </a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">7</a>
            <a href="#">8</a>
            <a href="#">9</a>
            <a href="#">10</a>
            <a href="#">下一页</a>
            <a href="#" id="CBLast">最后</a>
            <span id='go'>
                <input size='4' maxlength='4' />
                <input type='button' value='GO'>
            </span>
        </div>
    </div>
    </div>

</template>

<script>
import { provice } from '../assets/js/city';

export default {
    name: 'NetworkView',
    data() {
        return {
            provinces: provice,
            current: {
                prov: '',
                city: '',
                country: ''
            },
            submit: {
                addrShow: ''
            },
            branches: [

                {
                    province: '黑龙江省',
                    city: '大庆市',
                    county: '大同区',
                    name: '和平邮政所',
                    zipcode: '163851',
                    address: '和平牧场和谐家园',
                    financialServices: false,
                    phone: '0459-6952248',
                    businessHours: '08:30-12:00'
                },
                {
                    province: '广东省',
                    city: '广州市',
                    county: '天河区',
                    name: '天河支行',
                    zipcode: '510620',
                    address: '天河路1号',
                    financialServices: true,
                    phone: '020-12345678',
                    businessHours: '09:00-17:00'
                },
                {
                    province: '广东省',
                    city: '广州市',
                    county: '海珠区',
                    name: '海珠支行',
                    zipcode: '510220',
                    address: '海珠路2号',
                    financialServices: false,
                    phone: '020-87654321',
                    businessHours: '09:00-17:00'
                },
                {
                    province: '江苏省',
                    city: '南京市',
                    county: '玄武区',
                    name: '玄武支行',
                    zipcode: '210000',
                    address: '中山路1号',
                    financialServices: true,
                    phone: '025-12345678',
                    businessHours: '09:00-17:00'
                },
                {
                    province: '江苏省',
                    city: '南京市',
                    county: '秦淮区',
                    name: '秦淮支行',
                    zipcode: '210001',
                    address: '秦淮路2号',
                    financialServices: true,
                    phone: '025-87654321',
                    businessHours: '09:00-17:00'
                },
                {
                    province: '浙江省',
                    city: '杭州市',
                    county: '西湖区',
                    name: '西湖支行',
                    zipcode: '310000',
                    address: '西湖路1号',
                    financialServices: true,
                    phone: '0571-12345678',
                    businessHours: '09:00-17:00'
                },
                {
                    province: '浙江省',
                    city: '杭州市',
                    county: '上城区',
                    name: '上城支行',
                    zipcode: '310002',
                    address: '上城路2号',
                    financialServices: true,
                    phone: '0571-87654321',
                    businessHours: '09:00-17:00'
                },
                {
                    province: '山东省',
                    city: '济南市',
                    county: '历下区',
                    name: '历下支行',
                    zipcode: '250000',
                    address: '历下路1号',
                    financialServices: false,
                    phone: '0531-12345678',
                    businessHours: '09:00-17:00'
                },
                {
                    province: '山东省',
                    city: '济南市',
                    county: '市中区',
                    name: '市中支行',
                    zipcode: '250001',
                    address: '市中路2号',
                    financialServices: true,
                    phone: '0531-87654321',
                    businessHours: '09:00-17:00'
                }
            ]
        };
    },
    computed: {
        currentCity() {
            if (this.current.prov) {
                return this.provinces.find(p => p.name === this.current.prov)?.city || [];
            }
            return [];
        },
        currentCountry() {
            if (this.current.city) {
                const city = this.currentCity.find(c => c.name === this.current.city);
                return city ? city.districtAndCounty : [];
            }
            return [];
        },
        canSubmit() {
            return this.current.city !== '' && this.current.country !== '';
        }
    },
    methods: {
        showCity() {
            this.submit.addrShow = '';
            this.current.country = '';

        },
        showCountry() {
            this.submit.addrShow = '';
        },
        selecCountry() {
            this.submit.addrShow = `${this.current.prov}-${this.current.city}-${this.current.country}`;
        },
        showAddr() {
            this.submit.addrShow = `${this.current.prov}-${this.current.city}-${this.current.country}`;
        }
    },
    mounted() {

    }
};
</script>

<style scoped>
.container {
    /* display: flex; */
    justify-content: center;
    align-items: first baseline;
    /* height: 50vh; */
    /* 占满整个视口高度 */
}

.centered-table {
    width: 100%;
    /* 表格宽度为70% */
    border-collapse: collapse;
    margin: 0 auto;
    /* 水平居中 */
}

.centered-table th {
    font-size: 16px;
    padding: 10px;
    text-align: left;
    border-bottom: 2px solid #ddd;
    /* 添加下边框线 */
    background-color: #f2f2f2;
    /* 表头行灰色背景 */
}

.centered-table td {
    height: 40px;
    padding: 5px 10px;
    font-size: 15px;
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

.even-row {
    background-color: #ffffff;
    /* 灰色背景 */
}

.odd-row {
    background-color: #f2f2f2;
    /* 白色背景 */
}



/* 分页样式 */
li#PageNum,
#ali {
    width: 100%;
    text-align: center;
    background: none;
    padding-top: 30px;
    height: 40px;
    margin-top: 30px;
}

li#PageNum::before {
    display: none;
}

li#PageNum span,
li#PageNum a,
#ali a {
    padding: 4px 9px;
    border: 1px solid #EAEAEE;
    border-radius: 4px;
    text-decoration: none;
    /* 取消下划线 */
    color: #333;
    /* 设置默认颜色 */
}

li#PageNum span,
#ali span {
    background: #18AE66;
    color: #FFFFFF;
    border-radius: 4px;
    border: 0;
}

li#PageNum #go,
#ali #go {
    padding: 0;
    background: none;
    border: 0px;
    margin: 0;
    border-radius: 0;
    position: relative;
    top: -3px;
}

li#PageNum #go input,
#ali #go input {
    height: 29px;
    border: 1px solid #EAEAEE;
    border-radius: 4px;
}

li#PageNum #go input[type="button"],
#ali #go input[type="button"] {
    height: 29px;
    margin-left: 4px;
    font-size: 14px;
    color: #8E8E92;
    padding: 0px 8px;
}


h2 {
    margin: 40px auto;
    font-size: 20px;
    text-align: center;
    font-weight: 600;
    color: #499967;
}
</style>