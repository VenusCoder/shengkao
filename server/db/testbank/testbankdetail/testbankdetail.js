const testadminDetailData = [
  {
    // 政治题库
    nid: 0,

    nickname: 'zhengzhi',
    questions: [
      // 原zhengzhi数组内容
      {
        iid: 0,
        question: '问题：问全程有多远',
        options: [
          { value: 'A', label: '到2035年...', isCorrect: false },
          { value: 'B', label: '以果菜茶优势区...', isCorrect: true },
          { value: 'C', label: '区委叫停优势区...', isCorrect: false },
          { value: 'D', label: '目标优势区...', isCorrect: false },
        ],
        answer: '答案：一直全程用时10小时，则甲乙两',
        correctAnswer: 'B',
        title: '同向出发，中间相遇问题',
        paper: '甲乙两人从A地同时出发......',
        image: 'http://localhost:3000/upload/789fad453dddc49d6a15e7300.jpg',
        name: 'list',
        content: 'xingcheng',
        meta: {
          title: '数量关系-同向相遇问题',
          keywords: '追击问题,同向相遇,路程问题',
          description: '不同地点，不同时间的追击问题',
        },
      },
      {
        iid: 1,
        question: '马克思主义',
        options: [
          { value: 'A', label: '到2035年...', isCorrect: false },
          { value: 'B', label: '以果菜快捷链接可能势区...', isCorrect: true },
          { value: 'C', label: '区就好几个势区...', isCorrect: false },
          { value: 'D', label: '目标空间环境...', isCorrect: false },
        ],
        answer: '马克思是哪里人',
        correctAnswer: 'C',
        title: '同向出发，中间相遇问题',
        paper: '甲乙两人从A地同时出发......',
        image: 'http://localhost:3000/upload/789fad453dddc49d6a15e7300.jpg',
        name: 'list',
        content: '马克思',
        meta: {
          title: '常识问题-哲学问题问题',
          keywords: '历史问题,同向相遇,路程问题',
          description: '马克思主义哲学题',
        },
      },
      // 其他政治题目...
    ],
  },
  {
    // 常识题库
    nid: 1,

    nickname: 'changshi',
    questions: [
      // 原changshi数组内容
      {
        iid: 2,
        question: '关于计算机下列说法正确的是',
        options: [
          { value: 'A', label: '平板电脑属于小型计算机.', isCorrect: true },
          { value: 'B', label: '计算机断电后内存的信息会丢失', isCorrect: false },
          { value: 'C', label: '计算机的性能并非完全依靠CPU', isCorrect: false },
          { value: 'D', label: '计算机语言可以被计算机硬件直接执行', isCorrect: false },
        ],
        answer:
          '小型计算机是相对于大型计算机而言，小型计算机的软件、硬件系统规模比较小，但价格低、可靠性高、便于维护和使用。平板电脑属于微型计算机，不属于小型计算机。选项表述错误，当选A。',
        correctAnswer: 'A',
        title: '同向出发，中间相遇问题',
        paper: '甲乙两人从A地同时出发......',
        image: 'http://localhost:3000/upload/789fad453dddc49d6a15e7300.jpg',
        name: 'list',
        content: 'changshidenrieong',
        meta: {
          title: '常识问题关系-科技常识问题',
          keywords: '计算机问题,科技问题',
          description: '科技发展问题',
        },
      },
      // 其他常识题目...
    ],
  },

  {
    // 言语题库
    nid: 2,

    nickname: 'yanyu',
    questions: [
      // 原changshi数组内容
      {
        iid: 3,
        question: '言语问题',
        options: [
          { value: 'A', label: '看简历库考虑空间了空间来看.', isCorrect: false },
          { value: 'B', label: '以果了空间来看势区...', isCorrect: true },
          { value: 'C', label: '区委科技与i势区...', isCorrect: false },
          { value: 'D', label: '目标空间看区...', isCorrect: false },
        ],
        answer: '答案：一直全程用时10小时，则甲乙两',
        correctAnswer: 'D',
        title: '同向出发，中间相遇问题',
        paper: '甲乙两人从A地同时出发......',
        image: 'http://localhost:3000/upload/789fad453dddc49d6a15e7300.jpg',
        name: 'list',
        content: 'changshidenrieong',
        meta: {
          title: '言语问题-言语辨析问题',
          keywords: '追击问题,同向相遇,路程问题',
          description: '不同地点，不同时间的追击问题',
        },
      },
      // 其他常识题目...
    ],
  },
  {
    // 数量题库
    nid: 3,

    nickname: 'shuliang',
    questions: [
      //数字推理基础数列
      {
        iid: 33,
        question: '212，207，198，180，171，（）',
        options: [
          { value: 'A', label: '160', isCorrect: false },
          { value: 'B', label: '163', isCorrect: false },
          { value: 'C', label: '162', isCorrect: true },
          { value: 'D', label: '161', isCorrect: false },
        ],
        answer:
          '这个数列的规律是通过从每一项中减去其各位数字的和来得到下一项。具体来说： 212 - (2 + 1 + 2) = 207 207 - (2 + 0 + 7) = 198 198 - (1 + 9 + 8) = 180 180 - (1 + 8 + 0) = 171 171 - (1 + 7 + 1) = 162',
        correctAnswer: 'C',
        title: '同向出发，中间相遇问题',
        paper: '甲乙两人从A地同时出发......',
        image: 'http://localhost:3000/upload/789fad453dddc49d6a15e7300.jpg',
        name: 'list',
        content: 'changshidenrieong',
        meta: {
          title: '数量关系-数字推理问题',
          keywords: '数字推理问题,数学推理',
          description: '广东特色数字推理题',
        },
      },
      {
        iid: 33,
        question: '5，24，6，20，4，（），40，3',
        options: [
          { value: 'A', label: '28', isCorrect: false },
          { value: 'B', label: '30', isCorrect: true },
          { value: 'C', label: '36', isCorrect: false },
          { value: 'D', label: '42', isCorrect: false },
        ],
        answer: '解析：两组相乘等于120,5*24=120,6*20=120,4*30=120,40*3=120',
        correctAnswer: 'B',
        title: '同向出发，中间相遇问题',
        paper: '甲乙两人从A地同时出发......',
        image: 'http://localhost:3000/upload/789fad453dddc49d6a15e7300.jpg',
        name: 'list',
        content: 'changshidenrieong',
        meta: {
          title: '数量关系-数字推理问题',
          keywords: '数字推理问题,多重数学推理',
          description: '广东特色数字推理题',
        },
      },
      // 原changshi数组内容
      {
        iid: 4,
        question: '数量问题',
        options: [
          { value: 'A', label: '看简历库考虑空间了空间来看.', isCorrect: false },
          { value: 'B', label: '以果了空间来看势区...', isCorrect: true },
          { value: 'C', label: '区委科技与i势区...', isCorrect: false },
          { value: 'D', label: '目标空间看区...', isCorrect: false },
        ],
        answer: '答案：一直全程用时10小时，则甲乙两',
        correctAnswer: 'D',
        title: '同向出发，中间相遇问题',
        paper: '甲乙两人从A地同时出发......',
        image: 'http://localhost:3000/upload/789fad453dddc49d6a15e7300.jpg',
        name: 'list',
        content: 'changshidenrieong',
        meta: {
          title: '数量关系-数字推理问题',
          keywords: '数字推理问题,数学推理',
          description: '广东特色数字推理题',
        },
      },
      {
        iid: 37,
        question:
          '学校举办教师趣味运动会，教师自行分为甲、乙两队，甲队20人，乙队12人。为均衡两队实力，现将甲队中最年轻的4人调入乙队，则乙队平均年龄减少了1岁，甲队平均年龄增加了2岁。问调动之前，两队平均年龄相差多少岁?',
        options: [
          { value: 'A', label: '7', isCorrect: false },
          { value: 'B', label: '6', isCorrect: false },
          { value: 'C', label: '5', isCorrect: false },
          { value: 'D', label: '4', isCorrect: true },
        ],
        answer: `根据平均数变化公式之一的公式：两个原来平均数之差a-b（变动之前）=（A组剩下人数*平均数变化量+B组增加后的总人数*平均数变化量）/变化人数。注意：需要考虑平均数变化量的正负号。列式子：[（20-4）*2-（12+4）*1]/4=4，答案选D`,
        correctAnswer: 'D',
        title: '同向出发，中间相遇问题',
        paper: '甲乙两人从A地同时出发......',
        image: 'http://localhost:3000/upload/789fad453dddc49d6a15e7300.jpg',
        name: 'list',
        content: 'changshidenrieong',
        meta: {
          title: '数量关系-植树问题',
          keywords: '植树问题,植树公式',
          description: '广东特色数量关系推理题',
        },
      },
      {
        iid: 45,
        question:
          '有一矩形场地，长为 40 米，宽为 30 米。准备绕场地四周每隔 2 米插一根木桩，每根木 桩长度 1 米。有足够多长度为 6 米的圆木可用，现用机器进行切割，每次只能切割 1 根圆木， 则需切割多少次才能得到需要的所有木桩？',
        options: [
          { value: 'A', label: '59', isCorrect: true },
          { value: 'B', label: '60', isCorrect: false },
          { value: 'C', label: '69', isCorrect: false },
          { value: 'D', label: '70', isCorrect: false },
        ],
        answer: `矩形场地周长=（40+30）×2=140 米，根据环形植树问题公式：棵数=总长÷间隔，需要 140÷2=70 根木桩，共需圆木 70÷6=11 根……4 段，6 米长的圆木切成 6 段需切割 6÷1-1=5 次，11 根圆木共需切割 11×5=55 次，其余 4 段需切割 4 次，因此共需切割 55+4=59 次。答案选A`,
        correctAnswer: 'A',
        title: '同向出发，中间相遇问题',
        paper: '甲乙两人从A地同时出发......',
        image: 'http://localhost:3000/upload/789fad453dddc49d6a15e7300.jpg',
        name: 'list',
        content: 'changshidenrieong',
        meta: {
          title: '数量关系-两端植树问题',
          keywords: '植树问题,植树公式',
          description: '广东特色数量关系推理题',
        },
      },
      // 其他常识题目...
    ],
  },
  {
    // 判断题库
    nid: 4,

    nickname: 'panduan',
    questions: [
      // 原changshi数组内容
      {
        iid: 5,
        question: '判断问题',
        options: [
          { value: 'A', label: '看简历库考虑空间了空间来看.', isCorrect: false },
          { value: 'B', label: '以果了空间来看势区...', isCorrect: true },
          { value: 'C', label: '区委科技与i势区...', isCorrect: false },
          { value: 'D', label: '目标空间看区...', isCorrect: false },
        ],
        answer: '答案：一直全程用时10小时，则甲乙两',
        correctAnswer: 'D',
        title: '同向出发，中间相遇问题',
        paper: '甲乙两人从A地同时出发......',
        image: 'http://localhost:3000/upload/789fad453dddc49d6a15e7300.jpg',
        name: 'list',
        content: 'changshidenrieong',
        meta: {
          title: '数量关系-植树问题',
          keywords: '植树问题,植树公式',
          description: '广东特色数量关系推理题',
        },
      },
      // 其他常识题目...
    ],
  },
  {
    // 资料分析题库
    nid: 5,

    nickname: 'ziliao',
    questions: [
      // 原changshi数组内容
      {
        iid: 6,
        question: '资料问题',
        options: [
          { value: 'A', label: '看简历库考虑空间了空间来看.', isCorrect: false },
          { value: 'B', label: '以果了空间来看势区...', isCorrect: true },
          { value: 'C', label: '区委科技与i势区...', isCorrect: false },
          { value: 'D', label: '目标空间看区...', isCorrect: false },
        ],
        answer: '答案：一直全程用时10小时，则甲乙两',
        correctAnswer: 'D',
        title: '同向出发，中间相遇问题',
        paper: '甲乙两人从A地同时出发......',
        image: 'http://localhost:3000/upload/789fad453dddc49d6a15e7300.jpg',
        name: 'list',
        content: 'changshidenrieong',
        meta: {
          title: '资料分析问题',
          keywords: '植树问题,植树公式',
          description: '广东特色数量关系推理题',
        },
      },
      // 其他常识题目...
    ],
  },
]
module.exports = testadminDetailData
