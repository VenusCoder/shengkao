const mongoose = require('mongoose')
// 创建存储的 Schema 和 Model

const xingzhengSchema = new mongoose.Schema({
  xiid: { type: Number, required: true, unique: true,sparse: true  },
      name: { type: String,  },
      salary: String,
      people:{ type: String, },
      state: { type: String,  },
      content: String,
      address:{ type: String,  },

      title: { type: String,   },

      requireds: { type: String, },
     
      path: String,
});

const shiyeSchema = new mongoose.Schema({
  siid: { type: Number, required: true, unique: true,sparse: true  },
      name: { type: String,  },
      salary: String,
      people:{ type: String, },
      state: { type: String,  },
      content: String,
      address:{ type: String,  },

      title: { type: String,   },

      requireds: { type: String, },
     
      path: String,
});

const guoqiSchema = new mongoose.Schema({
  giid: { type: Number, required: true, unique: true,sparse: true  },
      name: { type: String,  },
      salary: String,
      people:{ type: String, },
      state: { type: String,  },
      content: String,
      address:{ type: String,  },

      title: { type: String,   },

      requireds: { type: String, },
     
      path: String,
});

const JobListSchema = new mongoose.Schema(

    {
     xingzheng:[xingzhengSchema],

     shiye:[shiyeSchema],
     guoqi:[guoqiSchema ]
      
    },
  
)

const JobListModel = mongoose.model('JobListModel', JobListSchema)

module.exports = JobListModel
