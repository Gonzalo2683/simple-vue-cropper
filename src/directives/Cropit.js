import jQuery from 'jquery';
import 'cropit';

export default {
  deep: true,
  bind() { },
  update(options) {
    jQuery(this.el).cropit('destroy');

    setTimeout(() => {
      jQuery(this.el).cropit(options);
    }, 0);
  },
  unbind() {
    jQuery(this.el).cropit('destroy');
  },
};
