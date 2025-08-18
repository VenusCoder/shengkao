<template>
  <div class="about">
    <div v-for="item in aboutUsDetailStore.aboutusdemo" :key="item.iid" class="section">
      <h2>{{ item.title }}</h2>
      <p>{{ item.content }}</p>

      <!-- 网站介绍 -->
      <div class="content-block">
        <h3>2026年广东省考技巧网站介绍</h3>
        <p>本网站定位与宗旨：<br>
          2026广东公考助手是一个专注于广东省公务员考试行测与申论备考技巧的公益性平台，致力于为考生提供最新、最实用的备考资源与方法指导。</p>
      </div>

      <!-- 核心内容与特色功能 -->
      <div class="accordion">
        <div class="accordion-item" v-for="(feature, index) in features" :key="index">
          <input type="checkbox" :id="'feature-' + index" class="accordion-input">
          <label :for="'feature-' + index" class="accordion-label">{{ feature.title }}</label>
          <div class="accordion-content">
            <ul>
              <li v-for="(subFeature, subIndex) in feature.subFeatures" :key="subIndex">{{ subFeature }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 服务承诺 -->
      <div class="service-commitment">
        <h3>服务承诺</h3>
        <ul>
          <li v-for="(commitment, index) in commitments" :key="index">{{ commitment }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useAboutUsDetailStore } from '@/stores/about/about'
import { useHead } from '@unhead/vue'

useHead({
  title: '广东省考技巧网_广东公务员考试备考指南_行测申论高分秘籍', // 设置页面标题
  meta: [
    { name: 'keywords', content: '广东省考,广东公务员考试,省考备考技巧,行测答题技巧,申论写作模板,广东公考指南,公务员考试资料,备考经验分享' },
    { name: 'description', content: '广东省考技巧网专注提供最新广东公务员考试备考资源，涵盖行测、申论高效答题技巧与高分模板，助力考生科学备考，提升应试能力，顺利通过省考。' }, 
  ],
})

const aboutUsDetailStore = useAboutUsDetailStore()
aboutUsDetailStore.aboutusResultAction()

// 核心内容与特色功能
const features = [
  {
    title: '行测专项突破系统',
    subFeatures: [
      '智能题库系统：包含5000+道广东省考特色题目，按模块、难度、考频三级分类，支持错题自动归类与薄弱环节诊断',
      '题型技巧库：言语理解、数量关系、判断推理等题型技巧',
      '时间管理工具：个性化答题节奏规划表'
    ]
  },
  {
    title: '申论高分培养体系',
    subFeatures: [
      '题型突破：比较型综合分析、对策题等',
      '本土化素材库：收录300+个广东典型案例，配套解析法',
      '智能批改系统：AI识别评分要点，提供逐项反馈与范文对比'
    ]
  }
]

// 服务承诺
const commitments = [
  '每日更新：政策变动24小时内解读',
  '全免费：所有题库、范文、直播课永久开放，无隐藏收费项目',
  '隐私保护：严格加密用户数据，绝不外泄备考信息'
]
</script>

<style scoped lang="less">
.about {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  .section {
    margin-bottom: 40px;
  }

  h2 {
    font-size: 2em;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 1em;
    line-height: 1.6;
    color: #555;
    margin-bottom: 20px;
  }

  .content-block {
    background-color: #f9f9f9;
    padding: 20px;
    border-left: 5px solid #4CAF50;
    margin-bottom: 20px;
  }

  .accordion {
    &-item {
      margin-bottom: 10px;
    }

    &-input {
      display: none;
    }

    &-label {
      display: block;
      padding: 10px;
      background-color: #ddd;
      cursor: pointer;
      font-weight: bold;
      transition: background-color 0.3s ease;
    }

    &-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-out;
      background-color: #eee;
      padding: 0 10px;
    }

    &-input:checked ~ &-content {
      max-height: 200px; // Adjust based on content height
    }

    &-input:checked ~ &-label {
      background-color: #4CAF50;
      color: white;
    }
  }

  .service-commitment {
    ul {
      list-style-type: disc;
      padding-left: 20px;
    }

    li {
      margin-bottom: 10px;
    }
  }
}
</style>