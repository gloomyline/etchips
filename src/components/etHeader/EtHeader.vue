<template lang="html">
  <div class="et-header">
    <el-row class="contacts-wrap">
      <el-col :span="12">
        <ul class="contacts">
          <li class="contact"><a href="#" class="contact-link"><img src="./icon-weibo-grey.png" class="icon" width="35" height="27"></a></li>
          <li class="contact"><a href="#" class="contact-link"><img src="./icon-wechat-grey.png" class="icon" width="31" height="25"></a></li>
          <li class="contact"><a href="#" class="contact-link"><img src="./icon-qq-grey.png" class="icon" width="24" height="26"></a></li>
        </ul>
      </el-col>
      <el-col :span="12">
        <ul class="other-contacts">
          <li class="other-contact">
            <p class="contact-text">+86 569 425 158</p>
            <img src="./icon-phone.png" alt="" class="icon">
          </li>
          <li class="other-contact">
            <p class="contact-text">fight@etchips.com</p>
            <img src="./icon-email.png" alt="" class="icon">
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'EtHeader',
  props: {
    phone: { type: String, default: '+86 569 425 158' },
    email: {
      default: 'fight@etchips.com',
      validator(val) {
        if (!val) return true;

        return /^\w+@\w+.\w{2,3}$/.test(val);
      },
    },
  },
};
</script>

<style lang="stylus">
.et-header
  height: 80px
  color: $white
  background-color: $black
  .contacts-wrap
    width: 80%
    margin: 0 auto
    .contacts,.other-contacts
      display: flex
      align-items: center
      height: 80px
    .contacts .contact
      margin-right: 80px
    .other-contacts
      justify-content: flex-end
      .other-contact
        height: 100%
        font-size: 0
        &:first-child
          margin-right: 68px
        .contact-text
          display: inline-block
          vertical-align: middle
          line-height: 80px
          margin-right: 8px
          font-size: 20px
        .icon
          display: inline-block
          vertical-align: middle
          line-height: 80px
</style>
