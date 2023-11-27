/*
Did you hear about Dependency Injection pattern? The main idea of this pattern is that you may have ability to pass dependencies into your function in any order and they will be resolved automatically. Take a look at this:

var myDependentFunc = inject(function (secondDepency, firstDependency) {
  firstDependency();
  secondDepency();
});

myDependentFunc();

As you can see we just put some variables into the function's signature and work with them as usualy. But we know nothing about where these variables are located! Let's assume that all dependencies are stored in the single hash object (for instanse 'deps') and the injector function will be sought among 'deps' properties:

var deps = {
  'firstDependency': function () {return 'this is firstDependency';},
  'secondDepency': function () {return 'this is secondDepency';},
};

Ok, I hope this is clear. Also, in order to setup DependencyInjector (DI) we need to specify dependency object:

var DI = function (dependency) {
  this.dependency = dependency;
};

Your task is create DI.prototype.inject method that will return a new function with resolved dependencies. And don't forget about nested functions. You shouldn't handle them.
*/

/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
var DI = function (dependency) {
  this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
  var methods = func.toString().match(/function\s?\((.+)\)\s?{/);
  methods =
    methods &&
    methods[1].split(",").map(function (i) {
      return i.replace(/\s+/, "");
    });
  var funcs = [];

  for (var i = 0; methods && i < methods.length; i++) {
    funcs.push(this.dependency[methods[i]]);
  }

  return function () {
    return func.apply(func, funcs);
  };
};

const deps = {
  dep1: function () {
    return "this is dep1";
  },
  dep2: function () {
    return "this is dep2";
  },
  dep3: function () {
    return "this is dep3";
  },
  dep4: function () {
    return "this is dep4";
  },
};

const di = new DI(deps);

const myFunc = di.inject(function (dep3, dep1, dep2) {
  return [dep1(), dep2(), dep3()].join(" -> ");
});

console.log(myFunc());
//this is dep1 -> this is dep2 -> this is dep3
