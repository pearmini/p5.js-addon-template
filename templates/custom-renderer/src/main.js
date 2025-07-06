export function addonTemplate(p5, fn, lifecycles){
  class CustomRenderer extends p5.Renderer {
    constructor(pInst, w, h, isMainCanvas){
      super(pInst, w, h, isMainCanvas);
    }

    /**
     * The following methods are some of the expected methods
     * you may wish to implement. They are not mandatory to
     * implement, however, each method implemented will correspond
     * to a function that can be called by a user.
     *
     * Eg. The `ellipse` method below correspond to the `ellipse`
     * function a user may call in a p5.js sketch.
     *
     * The parameters of the methods are not mandatory as well.
     */

    background(...args) {}
    remove() { }
    pixelDensity(val) { }
    push() { }
    pop() { }
    resetMatrix() { }

    arc(x, y, w, h, start, stop, mode) { }
    ellipse(args) { }
    line(x1, y1, x2, y2) { }
    point(x, y) { }
    quad(x1, y1, x2, y2, x3, y3, x4, y4) { }
    rect(...args) { }
    triangle(...args) { }
  }

  p5.renderers['custom-renderer'] = CustomRenderer;
};

if(typeof p5 !== 'undefined'){
  p5.registerAddon(addonTemplate);
}