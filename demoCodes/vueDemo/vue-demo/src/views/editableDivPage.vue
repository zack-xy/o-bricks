<template>
  <div>
    <h1>尝试一个模拟一个受限编辑框</h1>
    <el-select
      v-model="selectVal"
      placeholder="请选择"
      @change="(val) => selectChanged(val, 'selectVal')"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <el-select
      v-model="selectVal2"
      placeholder="请选择"
      @change="(val) => selectChanged(val, 'selectVal2')"
    >
      <el-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <div id="textarea" placeholder="请输入内容">
      <div class="block" v-for="(item, idx) in textareaList" :key="idx">
        <div
          :class="['tag', item.type == 'input' ? 'no-display':'']"
          :style="{ color: item.type == 'tag1' ? '#409eff' : '#e6a23c' }"
          >{{ item.name }}</div
        >
        <input
          class="input"
          v-if="item.type == 'input'"
          type="text"
          v-model.trim="item.name"
          @keyup="(e)=>inputKeyUp(e, idx)"
          @input="inputChange"
          :style="{padding: item.name.length > 0 ? '0 5px' : '0'}"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from 'throttle-debounce';
export default {
  data() {
    return {
      options: [
        {
          value: "1",
          label: "$(a)",
        },
        {
          value: "2",
          label: "$(b)",
        },
        {
          value: "3",
          label: "$(c)",
        },
        {
          value: "4",
          label: "$(d)",
        },
        {
          value: "5",
          label: "$(e)",
        },
      ],
      options2: [
        {
          value: "1",
          label: ">",
        },
        {
          value: "2",
          label: "=",
        },
        {
          value: "3",
          label: "<",
        },
        {
          value: "4",
          label: "&&",
        },
        {
          value: "5",
          label: "||",
        },
      ],
      selectVal: "",
      selectVal2: "",
      textareaList: [],
      expression: "",
    };
  },
  computed: {},
  methods: {
    selectChanged(val, type) {
      let list = type == "selectVal" ? [...this.options] : [...this.options2];
      this[type] = "";
      let obj = list.find((item) => item.value == val);
      let inputObj = { type: "input", name: "", id: "" };
      let tagObj = {
        type: type == "selectVal" ? "tag1" : "tag2",
        name: obj.label,
        id: obj.value,
        ...obj,
      };
      // if (this.textareaList.length == 0) {
      //   this.textareaList.push({...inputObj});
      // }
      this.textareaList.push(tagObj);
      this.textareaList.push({...inputObj});
      this.expression = this.textareaList.reduce((str, curr) => {
        return (str += curr.name);
      }, "");
    },
    inputKeyUp(e, idx) {
      if(e.keyCode == 8 || e.keyCode == 37) {
        if(!e.target.value) {
          if(window.getSelection().toString()) {
            this.textareaList.splice(idx-1, 2)
            window.getSelection().removeAllRanges()
          }else{
            this.selectRemoveTag(e.target.parentNode.previousSibling)
          }
        }
      }
    },
    inputChange: debounce(100, (e) => {
      let width = window.getComputedStyle(e.target.previousSibling).width
      if(parseFloat(width) > 10) {
        e.target.style.width = width
      } else {
        e.target.style.width = '10px'
      }
    }),
    selectRemoveTag(node) {
      const selection = window.getSelection()
      selection.removeAllRanges()
      const range = document.createRange()
      range.selectNodeContents(node)
      selection.addRange(range)
    }
  },
};
</script>

<style lang="scss" scoped>
#textarea {
  height: 200px;
  width: 300px;
  padding: 4px;
  border: 1px solid #888;
  text-align: left;
  resize: vertical;
  overflow: auto;
}
#textarea:empty:before {
  content: attr(placeholder);
  color: #bbb;
}
.no-display {
  visibility: hidden;
  position: absolute;
}
.block {
  display: inline-block;
  position: relative;
}
.tag {
  display: inline-block;
  white-space: nowrap;
  font-size: 15px;
}
.input {
  width: 5px;
  font-size: 15px;
  border: none;
  &:focus-visible {
    outline: none;
  }
}
</style>