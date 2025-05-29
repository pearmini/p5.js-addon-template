export function addonTemplate(p5, fn, lifecycles){
  lifecycles.presetup = function(){};

  fn.myAddonVariable = 'some value';
  fn.drawSomething = function(){};
  fn.loadSomething = async function(){};
};

if(typeof p5 !== 'undefined'){
  p5.registerAddon(addonTemplate);
}