const testexplainlistData = [
  {
    iid: 0,
    nid: 0,

    label: '申论一',
    nickname: 'shenlunyi',
    children: [
      {
        iid: 1,
        label: '高质量发展',
        children: [
          {
            iid: 2,
            label: '科技创新',
          },
          {
            iid: 3,
            label: '科技对策',
          },
          {
            iid: 4,
            label: '大作文',
          },
        ],
      },
      {
        iid: 5,
        label: '科技自立自强',
        children: [
          {
            iid: 6,
            label: '新质生产力',
          },
          {
            iid: 7,
            label: '高质量发展问题对策',
          },
          {
            iid: 8,
            label: '大作文',
          },
        ],
      },
    ],
  },
  {
    iid: 9,
    nid: 1,
    nickname: 'shenluner',

    label: '申论二',
    children: [
      {
        iid: 10,

        label: '乡村振兴',
        children: [
          {
            iid: 11,

            label: '土特产做法',
          },
          {
            iid: 12,

            label: '科技赋能农业产业',
          },
          {
            iid: 13,

            label: '大作文',
          },
        ],
      },
    ],
  },
  {
    iid: 14,
    nid: 2,
    nickname: 'shenlunsan',

    label: '申论三四行政执法与公安',
    children: [
      {
        iid: 15,

        label: 'AI技术',
        children: [
          {
            iid: 16,

            label: 'AI警察',
          },
          {
            iid: 17,

            label: '高校反电诈',
          },
          {
            iid: 18,

            label: '枫桥经验',
          },
        ],
      },
    ],
  },
]
module.exports = testexplainlistData
