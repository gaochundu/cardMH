<!--
 * @Author: GISER_GUI
 * @Date: 2025-02-13 17:07:56
 * @LastEditors: GISER_GUI
 * @LastEditTime: 2025-02-13 17:56:04
 * @Description: 头文件描述
-->
<template>
  <div>
    <div class="container">
      <div class="login-wrapper">
        <div class="header">登录</div>
        <div class="form-wrapper">
          <!-- <form id="myForm" name="myForm"> -->
          <input type="text"
                 name="username"
                 placeholder="账号"
                 required
                 class="input-item"
                 v-model.trim="ruleForm.name">
          <input type="password"
                 name="password"
                 placeholder="密码"
                 required
                 class="input-item"
                 v-model.trim="ruleForm.password">
          <!-- <div class="btn" @click="login()">{{ data.loginInfo }}</div> -->
          <input type="submit"
                 class="btn"
                 v-model="data.loginInfo"
                 @click="login()" />
          <!-- </form> -->
        </div>
        <div class="msg">
          {{ data.errorMessage }}
          <a href="#">注册</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
/* 接口 */
import loginHttpFn from '@/api/index'

/* 路由 */
import { useRouter } from 'vue-router'

/* VUE */
import { ref, reactive, computed, onMounted, onUnmounted, toRef } from 'vue'

/* 定义路由 */
let router = useRouter()

/* 定义文本内容 */
let data = reactive({
  loginInfo: '登录',
  errorMessage: '没有账号！',
})

// 表单数据
let ruleForm = reactive({
  name: '',
  password: '',
})

/**
 * @method login
 * @msg 登录事件
 * @param {表单} formName
 * @return {*}
 */
function login(): void {
  // formName.validate((valid) => {
  // if (valid) {
  let formdata: {} = {
    name: ruleForm.name,
    password: ruleForm.password,
  }
  data.loginInfo = '登录中...'
  loginHttpFn
    .loginHttp(formdata)
    .then((res) => {
      if (res.data.code === 1) {
        localStorage.setItem('userName', res.data.name)
        localStorage.setItem('GIS_USER_LOGIN_IDSTR', res.data.token)
        // 登陆后路由跳转设置
        setTimeout(() => {
          // 路由跳转
          router.push({ path: '/' })
        }, 0)
      } else if (res.data.code === 2) {
        data.loginInfo = '登录'
        data.errorMessage = res.data.message || '账号密码错误'
      } else {
        data.loginInfo = '登录'
        data.errorMessage = res.data.message || '连接失败，请稍后再试'
      }
    })
    .catch((e: any) => {
      console.error('连接失败:' + e)
      data.errorMessage = '连接失败，请稍后再试'
    })
  //   请求接口
}
// else {
//   data.errorMessage = "请输入用户名和密码";
//   return false;
// }
// });
// }
onMounted(() => {
  // 清楚登录的token值
  localStorage.removeItem('GIS_USER_LOGIN_IDSTR')
})
</script>
<style lang='scss' scoped>
@use 'sass:math';
//默认设计稿的宽度
$designWidth: 1920;
//默认设计稿的高度
$designHeight: 1080;

//px转为vw的函数
@function vw($px) {
  @return math.div($px, $designWidth) * 1 * 100vmax;
}

//px转为vh的函数
@function vh($px) {
  @return math.div($px, $designHeight) * 1 * 100vh;
}

.container {
  height: 100vh;
  background-image: linear-gradient(to bottom right, rgb(114, 135, 254), rgb(130, 88, 186));

  .login-wrapper {
    width: vw(300);
    height: vw(400);
    border-radius: vw(20);
    padding: 0 vw(30);
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-image: linear-gradient(to bottom right, rgb(118, 76, 163), rgb(92, 103, 211));
  }

  .header {
    font-size: vw(28);
    font-weight: bold;
    text-align: center;
    line-height: vw(150);
    color: #fff;
  }

  .form-wrapper {
    .input-item {
      // display: block;
      border-radius: vw(5);
      width: 100%;
      margin-bottom: vw(30);
      border: 0;
      padding: vw(7);
      border-bottom: 1px solid rgb(128, 125, 125);
      font-size: vw(15);
      outline: none;
    }

    .input-item:placeholder {
      text-transform: uppercase;
    }

    .btn {
      cursor: pointer;
      border: none;
      color: #fff;
      text-align: center;
      width: 100%;
      padding: vw(5);
      font-size: vw(18);
      // margin-top: vw(40);
      border-radius: vw(5);
      background-image: linear-gradient(to bottom right, rgb(114, 135, 254), rgb(130, 88, 186));
    }
  }

  .msg {
    text-align: center;
    line-height: vw(80);
    font-size: vh(15);

    a {
      text-decoration-line: none;
      color: #abc1ee;
    }
  }
}

// @media screen and (max-width: 1080px) {
//   .container {
//     height: 100vh;
//     background-image: linear-gradient(to bottom right, rgb(114, 135, 254), rgb(130, 88, 186));

//     .login-wrapper {
//       width: vh(300);
//       height: vh(400);
//       border-radius: vh(20);
//       padding: 0 vh(30);
//       position: relative;
//       left: 50%;
//       top: 50%;
//       transform: translate(-50%, -50%);
//       background-image: linear-gradient(to bottom right, rgb(118, 76, 163), rgb(92, 103, 211));
//     }

//     .header {
//       font-size: vh(28);
//       font-weight: bold;
//       text-align: center;
//       line-height: vh(150);
//       color: #fff;
//     }

//     .form-wrapper {
//       .input-item {
//         // display: block;
//         border-radius: vh(5);
//         width: 100%;
//         margin-bottom: vh(30);
//         border: 0;
//         padding: vh(7);
//         border-bottom: 1px solid rgb(128, 125, 125);
//         font-size: vh(15);
//         outline: none;
//       }

//       .input-item:placeholder {
//         text-transform: uppercase;
//       }

//       .btn {
//         cursor: pointer;
//         border: none;
//         color: #fff;
//         text-align: center;
//         width: 100%;
//         padding: vh(5);
//         font-size: vh(18);
//         // margin-top: vw(40);
//         border-radius: vh(5);
//         background-image: linear-gradient(to bottom right, rgb(114, 135, 254), rgb(130, 88, 186));
//       }
//     }

//     .msg {
//       line-height: vh(80);
//       text-align: center;
//       font-size: vh(15);

//       a {
//         text-decoration-line: none;
//         color: #abc1ee;
//       }
//     }
//   }
// }
</style>
