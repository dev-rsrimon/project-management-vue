<template>
  <div class="tork-form-group tork-mt-4">
    <label v-if="label" :style="{ color: color }" :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="updateInput"
      class="tork-form-control"
      :class="error.status ? 'error' : ''"
    />
    <span v-if="error.status" class="error__message">{{ error.message }}</span>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    color: {
      type: String,
      default: "#000000"
    },
    min: {
      type: Number,
      default: 0
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      error: {
        status: false,
        message: ""
      }
    };
  },
  methods: {
    updateInput(event) {
      let value = event.target.value.trim();

      if (event.target.type === "email") {
        let validate = this.validateEmail(value);

        //   Email validation
        if (validate) {
          this.error.status = false;
          this.$emit("update:modelValue", value);

        } else {
          this.error.status = true;
          this.error.message = "Email is invalid!";
        }
      } else if (this.min > 0) {
        if (value.length < this.min) {
          this.error.status = true;
          this.error.message = `${this.label} more than ${this.min} character`;
        } else {
          this.$emit("update:modelValue", value);
          this.error.status = false;
          this.error.message = "";
        }
      } else if (this.required) {
        if (value.length <= 0) {
          this.error.status = true;
          this.error.message = `${this.label} Feild is Required`;
        } else {
          this.$emit("update:modelValue", value);
          this.error.status = false;
        }
      } else {
        this.$emit("update:modelValue", value);
      }
    },
    validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  }
};
</script>

<style lang="scss" scoped>
.error__message {
  color: #c63c49;
  font-size: 0.875rem;
  font-weight: 400;
  display: block;
  margin-top: 5px;
  text-transform: capitalize;
}

.tork-form-control.error {
  border-color: #c63c49;
}
</style>
