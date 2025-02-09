

<template>
  <div class="mh-bg">
    <header class="mh-header">
      <h1 class="mh-title">
        <p>{{ titleName }}</p>
      </h1>
      <!-- <div class="mh-tap">
        <button class="mh-tap-btn"
                :style="{ backgroundColor: tapId === 1 ? '#0b412d' : '' }"
                @click="changeTap(1)">
          全部卡牌 【{{cardData.length}}】
        </button>
        <button class="mh-tap-btn"
                :style="{ backgroundColor: tapId === 2 ? '#0b412d' : '' }"
                @click="changeTap(2)">
          已选卡牌 【{{ flipedCardData.length }}】
        </button>
        <button class="mh-tap-btn"
                :style="{ backgroundColor: tapId === 3 ? '#0b412d' : '' }"
                @click="changeTap(3)">
          剩余卡牌 【{{ remainingCardData.length }}】
        </button>
      </div> -->
    </header>
    <article class="mh-article">
      <aside class="mh-article-left">
        <h1>箱配介绍</h1>
        <h5>
          每场次配备300张，每场配1个SSS评级卡，HP值高达6000！此外还含有SS,S,
          A,B,C,D,E多等级卡牌！下单随机选拆!
        </h5>
        <h6>sss卡（1%）</h6>
        <h6>ss卡（1%）</h6>
        <h6>s卡（1%）</h6>
        <h6>A卡（1%）</h6>
      </aside>
      <div style="height: 100%; overflow: auto">
        <div class="mh-tap">
          <div class="btnBox">
            <button class="mh-tap-btn"
                    :style="{ backgroundColor: tapId === 1 ? '#0b412d' : '' }"
                    @click="changeTap(1)">
              全部卡牌 【{{ cardData.length }}】
            </button>
            <button class="mh-tap-btn"
                    :style="{ backgroundColor: tapId === 2 ? '#0b412d' : '' }"
                    @click="changeTap(2)">
              已选卡牌 【{{ flipedCardData.length }}】
            </button>
            <button class="mh-tap-btn"
                    :style="{ backgroundColor: tapId === 3 ? '#0b412d' : '' }"
                    @click="changeTap(3)">
              剩余卡牌 【{{ remainingCardData.length }}】
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
        <h6>sss级--野豹G5*3</h6>
        <h6>ss级--天宫墨子*3</h6>
        <h6>s级--南匠致远*3</h6>
        <h6>A级--南匠致远*3</h6>
        <h6>B级--南匠致远*3</h6>
        <h6>c级--南匠致远*3</h6>
        <h6>D级--南匠致远*3</h6>
        <h6>E级--南匠致远*3</h6>
      </aside>
    </article>
    <footer class="mh-footer">
      <div class="mh-footer-title">
        <h1>卡位统计</h1>
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
        <h1>合计PH值</h1>
        <h1>【100】</h1>
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
        是否打开<span class="card-number">&nbsp;{{ cardName }}号&nbsp;</span>卡牌
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
            <b class="card-front-number">{{ currentCardData?.index }}号</b>
          </div>
          <div class="card-back">
            <!-- <img src="./assets/imgs/back.png" alt="Card Front"> -->
            <p class="card-front-number">{{ currentCardData?.prizeName }}</p>
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

defineProps<{
  msg: string
}>()

const titleName = ref('所见即所得，好运不打折')
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

onMounted(() => {})
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
    padding: 0.2rem;
    /* background-color: red; */
    border-bottom: 0.01rem dashed #9e9d9dd2;
    .mh-title {
      font-size: 0.5rem;
      text-align: center;
      color: #fff;
      letter-spacing: 0.05rem;
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
          border-radius: 0.05rem;
          padding: 0.05rem 0.2rem;
          margin: 0 1rem;
          color: #fff;
          font-size: 0.25rem;
          background-color: #000201;
          &:hover {
            background-color: #069469;
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
      font-size: 0.3rem;
      box-shadow: inset 0px 0px 23px rgba(0, 0, 0, 0.3);
      // background: #56ec38;
      text-align: center;
      b {
        word-wrap: break-all;
        text-align: left;
      }
    }
    &-right {
      color: #fff;
      font-size: 0.35rem;
      box-shadow: inset 0px 0px 23px rgba(0, 0, 0, 0.3);
      // background: #2624a7;
      text-align: center;
      b {
        word-wrap: break-all;
        text-align: left;
      }
    }
  }
  .mh-footer {
    height: 15%;
    display: grid;
    grid-template-columns: 10% 80% 10%;
    &-title {
      // writing-mode: vertical-lr;
      background: rgba(0, 0, 0, 0.411);
      border-right: 0.03rem dashed #ffffff73;
      color: #fff;
      font-size: 0.15rem;
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
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
        box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.3);
        background-image: radial-gradient(circle at center, #186143 0%, #05442d 100%);
      }
    }
    &-ph {
      background: rgba(0, 0, 0, 0.411);
      border-left: 0.03rem dashed #ffffff73;
      color: #fff;
      font-size: 0.15rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      h1 {
        font-size: 0.2rem;
        &:nth-of-type(2) {
          font-size: 0.3rem;
          color: red;
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
  color: white; /* 文字颜色 */
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
  box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.3);
  background-image: radial-gradient(circle at center, #186143 0%, #05442d 100%);

  // position: absolute;
  /* 卡片绝对定位 */
  // transition: transform 0.5s ease;
  /* 平滑过渡效果 */
}

.isFlip {
  filter: grayscale(0.8);
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
    border: 2px solid hsl(194, 100%, 50%);

    // perspective: 1000px;
    .centerBox {
      width: 100%;
      height: 100%;
      .title {
        height: 0.5rem;
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
          display: flex;
          justify-content: center;
          background-color: #fff;
          background: url('@/assets/imgs/b.jpg') no-repeat center;
          background-size: 100% 100%;
          &-number {
            margin-top: 0.7rem;
            font-size: 0.5rem;
            color: #fff;
          }
        }

        .card-back {
          // background: url('@/assets/imgs/f.jpg') no-repeat center;
          background: #186143;
          background-size: 100% 100%;
          // background-image: radial-gradient(circle at center, #186143 0%, #0e543c 100%);
          transform: rotateY(180deg);
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
