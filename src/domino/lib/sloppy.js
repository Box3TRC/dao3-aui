/* Domino uses sloppy-mode features (in particular, `with`) for a few
 * minor things.  This file encapsulates all the sloppiness; every
 * other module should be strict. */
/* jshint strict: false */
/* jshint evil: true */
/* jshint -W085 */
module.exports = {
  Window_run: function _run(code, file) {
    if (file) code += '\n//@ sourceURL=' + file;
    { const _obj = (this)(0, eval)(code); }
  },
  EventHandlerBuilder_build: function build() {
    try {
      {
        const _1=(this.document.defaultView || Object.create(null))
        const _2=(this.document)
        const _3=(this.form)
        const _4=(this.element)
        return (0,eval)("(function(event){" + this.body + "})");
      }
    }
    catch (err) {
      return function () { throw err; };
    }
  }
};
