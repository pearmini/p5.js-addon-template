export function addonTemplate(p5, fn, lifecycles){
  lifecycles.presetup = function(){};    // Everything here will run before the `setup()` step of a sketch

  fn.myAddonVariable = 'some value';     // This variable will be available in a sketch as `myAddonVariable`
  fn.drawSomething = function(){};       // This function will be available in the sketch as `drawSomething`
  fn.loadSomething = async function(){}; // This is an asynchronous function: for example, `await loadSomething()`
  p5.MyAddonClass = class {};            // This class will be available in a sketch as `new p5.MyAddonClass()`
};

if(typeof p5 !== 'undefined'){
  p5.registerAddon(addonTemplate);
}
