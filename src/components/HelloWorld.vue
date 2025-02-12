

<template>
  <div class="mh-bg">
    <header class="mh-header">
      <h1 class="mh-title">
        <p>{{ titleName }}</p>
        <p>
          所
          <b>见</b>
          即所
          <b>得</b>
          ，
          <b>开</b>
          啥
          <b>发</b>
          啥！
        </p>
      </h1>
    </header>
    <article class="mh-article">
      <aside class="mh-article-left">
        <h1>配比介绍</h1>
        <h5>
          每场次配备300张,每场配1个SSS评级卡,HP值高达6000！
          此外还含有SS,S,A,B,C,D,E多等级卡牌！下单随机选拆!
        </h5>
        <div class="left-table">
          <div class="title">卡位出率</div>
          <ul>
            <li>
              <div>
                <p>SSS</p>
                <p>1%</p>
              </div>
            </li>
            <li>
              <div>
                <p>SS</p>
                <p>2%</p>
              </div>
              <div>
                <p>S</p>
                <p>2%</p>
              </div>
            </li>
            <li>
              <div>
                <p>A</p>
                <p>2%</p>
              </div>
              <div>
                <p>B</p>
                <p>2%</p>
              </div>
            </li>
            <li>
              <div>
                <p>C</p>
                <p>2%</p>
              </div>
              <div>
                <p>D</p>
                <p>2%</p>
              </div>
            </li>
            <li>
              <div>
                <p>E</p>
                <p>2%</p>
              </div>
              <div>
                <p>F</p>
                <p>2%</p>
              </div>
            </li>
          </ul>
        </div>
        <!-- <h6>sss卡（1%）</h6>
        <h6>ss卡（1%）</h6>
        <h6>s卡（1%）</h6>
        <h6>A卡（1%）</h6> -->
      </aside>
      <div style="height: 100%; overflow: auto">
        <div class="mh-tap">
          <div class="btnBox">
            <button class="mh-tap-btn"
                    :style="{ backgroundColor: tapId === 1 ? '#0b412d' : '' }"
                    @click="changeTap(1)">
              全部卡池 【 {{ cardData.length }} 】
            </button>
            <button class="mh-tap-btn"
                    :style="{ backgroundColor: tapId === 2 ? '#0b412d' : '' }"
                    @click="changeTap(2)">
              已选卡池 【 {{ flipedCardData.length }} 】
            </button>
            <button class="mh-tap-btn"
                    :style="{ backgroundColor: tapId === 3 ? '#0b412d' : '' }"
                    @click="changeTap(3)">
              剩余卡池 【 {{ remainingCardData.length }} 】
            </button>
          </div>
        </div>
        <Simplebar class="center">
          <div class="card-container"
               v-show="tapId === 1">
            <div :class="['card', cardItem?.state ? 'isFlip' : '']"
                 @click="chooseCard(cardItem)"
                 v-for="(cardItem, index) in cardData"
                 :key="cardItem.id">
              卡牌{{ cardItem?.index }}
            </div>
          </div>
          <div class="card-container"
               v-show="tapId === 3">
            <div :class="['card', cardItem?.state ? 'isFlip' : '']"
                 @click="chooseCard(cardItem)"
                 v-for="(cardItem, index) in remainingCardData"
                 :key="cardItem.id">
              卡牌{{ cardItem?.index }}
            </div>
          </div>
          <div class="card-container"
               v-show="tapId === 2">
            <div :class="['card', cardItem?.state ? 'isFlip' : '']"
                 @click="chooseCard(cardItem)"
                 v-for="(cardItem, index) in flipedCardData"
                 :key="cardItem.id">
              卡牌{{ cardItem?.index }}
            </div>
          </div>
        </Simplebar>
      </div>
      <aside class="mh-article-right">
        <h1>器材安排</h1>
        <div>
          <table>
            <tr>
              <th rowspan="1">SSS级</th>
              <td>野豹G2</td>
            </tr>
            <tr>
              <th rowspan="2">SS级</th>
              <td>野豹G2</td>
            </tr>
            <tr>
              <td>野豹G2</td>
            </tr>
            <tr>
              <th rowspan="2">S级</th>
              <td>野豹G2</td>
            </tr>
            <tr>
              <td>野豹G2</td>
            </tr>
            <tr>
              <th rowspan="3">A级</th>
              <td>野豹G2</td>
            </tr>
            <tr>
              <td>野豹G2</td>
            </tr>
            <tr>
              <td>野豹G2</td>
            </tr>
            <tr>
              <th rowspan="3">B级</th>
              <td>野豹G2</td>
            </tr>
            <tr>
              <td>野豹G2</td>
            </tr>
            <tr>
              <td>野豹G2</td>
            </tr>
            <tr>
              <th rowspan="3">C级</th>
              <td>野豹G2</td>
            </tr>
            <tr>
              <td>野豹G2</td>
            </tr>
            <tr>
              <td>野豹G2</td>
            </tr>
            <tr>
              <th rowspan="2">D级</th>
              <td>野豹G2</td>
            </tr>
            <tr>
              <td>野豹G2</td>
            </tr>

            <tr>
              <th rowspan="3">F级</th>
              <td>野豹G2</td>
            </tr>
            <tr>
              <td>野豹G2</td>
            </tr>
            <tr>
              <td>野豹G2</td>
            </tr>
          </table>
        </div>
        <!-- <ul>

          <li>
            <div>
              ss

            </div>
            <div>
              <p>S</p>
              <p>2%</p>
            </div>
          </li>
          <li>
            <div>
              <p>A</p>
              <p>2%</p>
            </div>
            <div>
              <p>B</p>
              <p>2%</p>
            </div>
          </li>
          <li>
            <div>
              <p>C</p>
              <p>2%</p>
            </div>
            <div>
              <p>D</p>
              <p>2%</p>
            </div>
          </li>
          <li>
            <div>
              <p>E</p>
              <p>2%</p>
            </div>
            <div>
              <p>F</p>
              <p>2%</p>
            </div>
          </li>
        </ul> -->
        <!-- <h6>sss级--野豹G5*3</h6>
        <h6>ss级--天宫墨子*3</h6>
        <h6>s级--南匠致远*3</h6>
        <h6>A级--南匠致远*3</h6>
        <h6>B级--南匠致远*3</h6>
        <h6>c级--南匠致远*3</h6>
        <h6>D级--南匠致远*3</h6>
        <h6>E级--南匠致远*3</h6> -->
      </aside>
    </article>
    <footer class="mh-footer">
      <div class="mh-footer-title">
        <h1>当前卡池</h1>
        <div @click="cleanUp">清空</div>
      </div>
      <center style="width: 100%">
        <div class="mh-footer-container">
          <div class="flipped-card"
               v-for="(flipedCardItem, index) in currentFlipedCardData"
               :key="flipedCardItem.id">
            <span> 卡牌{{ flipedCardItem?.index }} </span>
            <span>{{ flipedCardItem.prizeName }}</span>
            <span style="color: red"> 100PH值 </span>
          </div>
        </div>
      </center>
      <div class="mh-footer-ph">
        <h1>
          合计【 <b>{{ currentFlipedCardData.length }}</b> 】张
        </h1>
        <h1>PH值【<b>100</b>】分</h1>
      </div>
    </footer>
  </div>
  <!-- 遮罩 -->
  <div class="mask-box"
       v-if="cardName">
    <!-- 二次确认 -->
    <div class="mask-box-content"
         v-if="!isFlipCard">
      <h1>
        是否打开 <span class="card-number">{{ cardName }}号</span> 卡牌
      </h1>
      <div class="mask-box-content-btn">
        <span class="btn-confirm"
              @click="onConfirm">确认</span>
        &emsp;
        <span class="btn-cancel"
              @click="onCancel">取消</span>
      </div>
    </div>
    <!-- 翻牌 -->
    <div class="card-box"
         v-if="isFlipCard"
         @click.stop="flipCard()">
      <div class="centerBox">
        <div class="close-btn"
             @click.stop="closeBox">×</div>
        <div class="title">光感台球器材评分收藏卡</div>
        <div :class="['card-inner', currentCardData?.state ? 'flipped' : '']">
          <div class="card-front">
            <!-- <img src="@/assets/imgs/front.png"
               alt="Card Back"> -->
            <p class="card-front-number">{{ currentCardData?.index }}号</p>
            <p class="card-front-number">请翻开卡片</p>
          </div>
          <div class="card-back">
            <!-- <img src="./assets/imgs/back.png" alt="Card Front"> -->
            <p class="card-front-number">{{ currentCardData?.prizeName }}</p>
            <div class="imgBox">
              <img src="../assets/imgs/back.png"
                   alt="" />
            </div>
            <p class="card-front-number">PH值->200</p>
            <p class="card-front-number">sss级</p>
            <p class="card-front-number">野豹G5</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue'

import Simplebar from 'simplebar-vue'
import 'simplebar-vue/dist/simplebar.min.css'

import { getCardData, getRandomArray } from '@/lib/handleDate'

// import SqlData from '@/lib/sqlData'

defineProps<{
  msg: string
}>()

const titleName = ref('光感台球器材评级卡直播间')
const cardName = ref(0)
const isFlipCard = ref(false)
const cardData = ref([]) // 全部卡片
const flipedCardData = ref([]) // 已抽卡片
const remainingCardData = ref([]) // 剩余卡片
const currentFlipedCardData = ref([]) // 当前人员已抽卡片
const currentCardData = ref() // 当前卡片
const tapId = ref(1)

const chooseCard = (item) => {
  console.log(item)
  currentCardData.value = item
  cardName.value = Number(item.index)
}

const onCancel = () => {
  cardName.value = 0
  currentCardData.value = null
}

const onConfirm = () => {
  isFlipCard.value = true
}

const closeBox = () => {
  cardName.value = 0
  isFlipCard.value = false
  currentCardData.value = null
}

const flipCard = () => {
  if (currentCardData.value.state) {
    return
  }
  currentCardData.value.state = 1
  // const card = document.querySelector('.card-box')
  // card.classList.toggle('flipped')

  // 更新已抽卡片
  flipedCardData.value = cardData.value.filter((item) => {
    return item.state === 1
  })

  remainingCardData.value = cardData.value.filter((item) => {
    return item.state === 0
  })

  currentFlipedCardData.value.push(currentCardData.value)
}
const changeTap = (id) => {
  console.log(id)
  tapId.value = id
  switch (id) {
    case 1:
      break
    case 2:
      break
    case 3:
      break

    default:
      break
  }
}
const cleanUp = () => {
  currentFlipedCardData.value = []
}

onBeforeMount(() => {
  const g = getCardData(1).then((res) => {
    console.log(res)
    cardData.value = res
    remainingCardData.value = cardData.value
  })
})

onMounted(() => {
  // const ggh = new SqlData()
})
</script>


<style lang="scss" scoped>
.mh-bg {
  background: url('../assets/imgs/bg.png') no-repeat center center;
  background-size: 100% 100%;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .mh-header {
    height: 15%;
    // padding: 0.2rem;
    /* background-color: red; */
    border-bottom: 0.01rem dashed #9e9d9dd2;
    .mh-title {
      height: 100%;
      font-size: 0.6rem;
      text-align: center;
      color: #000000;
      letter-spacing: 0.05rem;
      font-family: 'YunFengFeiYunTi' !important;
      p {
        height: 50%;
        line-height: 2;
        // line-height: 100%;
        &:nth-of-type(1) {
        }
        &:nth-of-type(2) {
          font-size: 0.4rem;
          color: #ff0000bf;
        }
        b {
          color: black !important;
          font-size: 0.5rem;
          font-style: italic;
        }
      }
    }
  }
  .mh-article {
    height: 70%;
    display: grid;
    grid-template-columns: 10% 80% 10%;
    padding: 0.01rem;
    background: rgba(255, 255, 255, 0.082);
    .mh-tap {
      height: 10%;
      // background: chartreuse;
      box-shadow: 5px 5px 5px 5px rgba(66, 31, 5, 0.521);

      display: flex;
      align-items: center;
      .btnBox {
        width: 100%;
        text-align: center;
        line-height: 100%;

        button {
          border: none;
          cursor: pointer;
          border-radius: 0.03rem;
          padding: 0.6vw 2vh;
          margin: 0 3vw;
          color: #fff;
          font-size: 0.2rem;
          background-color: #3f4022;
          &:hover {
            background-color: #0a6e10d6;
          }
        }
      }
    }
    .center {
      height: 90%;
      .card-container {
        // perspective: 1000px;
        // /* 定义3D空间 */
        // position: relative;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        // flex-wrap: wrap;

        box-sizing: border-box;
        padding: 0.2rem 0.5rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        // grid-template-columns: repeat(3, 33.33%);
        row-gap: 0.2rem;
        column-gap: 0.2rem;
        // overflow: hidden;
        // height: 400px;
      }
    }
    &-left {
      color: #fff;
      font-size: 0.35rem;
      box-shadow: inset 0px 0px 23px rgba(0, 0, 0, 0.3);
      // background: #56ec38;
      text-align: center;
      h1 {
        height: 10%;
        line-height: 2;
        color: #000000;
        box-shadow: 5px 5px 5px 5px rgba(66, 31, 5, 0.521);
        // font-weight: bolder;
        background: #ff0000bf;
        font-family: 'YunFengFeiYunTi';
      }
      h5 {
        font-size: 0.22rem;
        word-wrap: break-all;
        text-align: left;
        //  color: #d6ba2a;
        font-weight: bolder;
        line-height: 3.4vh;
        padding: 0.1rem;
        //  font-family: "YunFengFeiYunTi";
      }
      .left-table {
        background: #108961bf;
        margin: 0.1rem;
        .title {
          background: #fff;
          font-weight: bold;
          color: #000;
        }
        ul {
          li {
            display: flex;

            justify-content: space-around;
            border: 1px solid #fff;
            p {
              &:nth-of-type(2) {
                font-weight: bold;
                color: #000;
              }
            }
            div {
              width: 50%;
              font-size: 0.22rem;
              font-family: 'NSimSun';
              &:nth-of-type(2) {
                border-left: 1px solid #ffffff;
              }
            }
          }
        }
      }
    }
    &-right {
      color: #fff;
      font-size: 0.35rem;
      box-shadow: inset 0px 0px 23px rgba(0, 0, 0, 0.3);
      // background: #2624a7;
      text-align: center;
      h1 {
        box-shadow: 5px 5px 5px 5px rgba(66, 31, 5, 0.521);
        height: 10%;
        line-height: 2;
        color: #000000;
        background: #ff0000bf;
        // font-weight: bolder;
        font-family: 'YunFengFeiYunTi';
      }
      h6 {
        line-height: 2;
      }
      // h6 {
      //   line-height: 3.4vh;
      // }
    }
  }
  .mh-footer {
    height: 15%;
    display: grid;
    grid-template-columns: 10% 80% 10%;
    &-title {
      // writing-mode: vertical-lr;
      // background: rgba(0, 0, 0, 0.411);
      background: #c26d22a1;
      border-right: 0.03rem dashed #ffffff73;
      // color: #fff;
      color: #000000;
      font-size: 0.15rem;
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      h1 {
        font-family: 'YunFengFeiYunTi';
        //  color: #000000;
        margin-bottom: 0.5rem;
      }
      div {
        cursor: pointer;
        padding: 0.1rem 0.3rem;
        border-radius: 0.05rem;
        background: #5c9be4;
      }
    }
    &-container {
      display: inline-flex;
      // justify-content: start;
      align-items: center;
      flex-direction: row;
      display: inline-flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      .flipped-card {
        user-select: none;
        box-sizing: border-box;
        margin: 0 0.1rem;
        font-size: 0.16rem;
        color: white; /* 文字颜色 */
        width: 1rem;
        height: 80%;
        background-color: #f0f0f0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        // border: 1px solid #ccc;
        border-radius: 0.1rem;
        background: url(/src/assets/imgs/1.png) no-repeat center center;
        // box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.3);
        // background-image: radial-gradient(circle at center, #186143 0%, #05442d 100%);
        span {
          font-size: 0.2rem;
          margin: 0.04rem 0;
          font-weight: bold;
        }
      }
    }
    &-ph {
      // background: rgba(0, 0, 0, 0.411);
      background: #c26d22a1;
      border-left: 0.03rem dashed #ffffff73;
      color: #fff;
      font-size: 0.15rem;
      text-align: center;
      // display: flex;
      // justify-content: center;
      // align-items: center;
      // flex-direction: column;
      h1 {
        // text-align: left;
        font-weight: bold;
        font-size: 0.2rem;
        margin: 0.3rem 0.1rem;
        b {
          font-size: 0.3rem;
          color: #000000;
          font-weight: bold;
          font-family: 'YunFengFeiYunTi';
        }
        &:nth-of-type(2) {
        }
      }
    }
  }
}

.card {
  cursor: pointer;
  user-select: none;
  box-sizing: border-box;
  font-size: 0.4rem;
  color: #000000; /* 文字颜色 */
  font-weight: bold;
  text-shadow: -1px -1px 0 #000000, /* 左上角的阴影 */ 1px -1px 0 #000000,
    /* 右上角的阴影 */ -1px 1px 0 #000000, /* 左下角的阴影 */ 1px 1px 0 #000000,
    /* 右下角的阴影 */ 0 -2px 5px rgba(0, 0, 0, 0.5),
    /* 向下的主阴影，增加模糊程度 */ 0 2px 5px rgba(0, 0, 0, 0.5); /* 向上的主阴影，增加模糊程度 */

  // width: 200px;
  // height: 150px;
  width: 100%;
  height: 1.5rem;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  // border: 1px solid #ccc;
  border-radius: 0.1rem;
  background: url(/src/assets/imgs/2.png) no-repeat center center;
  // background-image: "../../src/assets/imgs/2.png";
  // box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.3);
  // background-image: radial-gradient(circle at center, #186143 0%, #05442d 100%);

  // position: absolute;
  /* 卡片绝对定位 */
  // transition: transform 0.5s ease;
  /* 平滑过渡效果 */
}

.isFlip {
  //
  filter: grayscale(0.1);
  pointer-events: none;
}

.mask-box {
  position: fixed;
  bottom: 0;
  left: 0;
  background: #00000086;
  height: 100%;
  width: 100%;
  &-content {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4rem;
    height: 2rem;
    background: #efefef;
    border-radius: 0.1rem;
    box-shadow: -5px 5px 15px rgba(70, 69, 69, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: url('@/assets/imgs/box.jpg') no-repeat center;
    background-size: 100% 100%;
    .card-number {
      color: #56ec38;
      font-size: 0.5rem;
    }
    &-btn {
      margin-top: 0.4rem;
      .btn-confirm,
      .btn-cancel {
        font-size: 0.2rem;
        color: #fff;
        cursor: pointer;
        // padding: 0.15rem 0.3rem;
        padding: 0.06rem 0.3rem;
        border-radius: 0.08rem;
      }
      .btn-confirm {
        background: #5c9be4;
      }
      .btn-cancel {
        background: #595a5c;
      }
    }
  }
  .card-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4rem;
    height: 6rem;
    border: 2px solid hsl(207, 96%, 50%);
    border-radius: 0.1rem;
    .centerBox {
      width: 100%;
      height: 100%;

      .title {
        height: 0.5rem;
        font-weight: bold;
        text-align: center;
        line-height: 0.5rem;
        background: hsla(194, 100%, 50%, 0.315);
        color: white;
        border-bottom: 2px solid hsl(194, 100%, 50%);
      }
      .close-btn {
        cursor: pointer;
        position: absolute;
        font-size: 0.2rem;
        z-index: 9;
        padding: 0.05rem;
        color: #fff;
        right: 0.01rem;
        top: 0rem;
      }
      .card-inner {
        width: calc(100% - 0.2rem);
        height: calc(100% - 0.7rem);
        margin-top: 0.1rem;
        margin: 0.1rem;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.6s;
        .card-front,
        .card-back {
          width: 100%;
          height: 100%;
          position: absolute;
          backface-visibility: hidden;
          // display: flex;
          justify-items: center;
          // align-items: center;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          img {
            max-width: 100%;
            max-height: 100%;
            border-radius: 10px;
          }
        }
        .card-front {
          p {
            display: inline-block;
          }
        }

        .card-front {
          display: flex;
          justify-content: center;
          // background-color: #fff;
          background: url(/src/assets/imgs/1.png) no-repeat center center;

          // background: url('@/assets/imgs/b.jpg') no-repeat center;
          background-size: 100% 100%;

          &-number {
            // margin-top: 0.4rem;
            font-size: 0.5rem;
            color: #fff;
          }
        }

        .card-back {
          width: 100%;
          text-align: center;
          // background: url('@/assets/imgs/f.jpg') no-repeat center;
          background: #186143;
          background-size: 100% 100%;
          // background-image: radial-gradient(circle at center, #186143 0%, #0e543c 100%);
          transform: rotateY(180deg);
          .imgBox {
            width: 100%;
            height: 50%;
            // background: url('../assets/imgs/back.png') no-repeat center center;
            // background: #069469;
          }
        }
      }
    }
  }
}
// .card-box.flipped .card-inner {
//   transform: rotateY(180deg);
// }
.flipped {
  transform: rotateY(180deg);
}
</style>
