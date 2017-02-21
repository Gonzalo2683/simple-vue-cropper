import jQuery from 'jquery';
import 'cropper';

export default {
  deep: true,
  bind() { },
  update(options) {
    jQuery(this.el).cropper('destroy');

    setTimeout(() => {
      jQuery(this.el).cropper(options);
    }, 0);
  },
  unbind() {
    jQuery(this.el).cropper('destroy');
  },
};
