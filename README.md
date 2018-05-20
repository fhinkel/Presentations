# Speed, Speed, Speed: JavaScript vs C++ vs WebAssembly
[Slides from RevolutionConf 2018](https://fhinkel.github.io/JSEngines-HowDoTheyEven/RevolutionConf2018).

In Node.js, we can use WebAssembly modules and native C++ addons. If your app has performance critical parts, should you stay in JavaScript? Or write a native C++ addon? Or use WebAssembly? We’ll look at how these options compare performance wise and which one is best for different workloads. So the next time you need to optimize for speed, you know your options.

# The JavaScript Engine in Node.js: TurboFan and Ignition
[Slides from NodeFest 2017](https://fhinkel.github.io/JSEngines-HowDoTheyEven/NodeFest). [YouTube](https://youtu.be/J3ljqS0Q1a8)

V8 is the JavaScript engine in Node.js. Since Node 8.3, we use V8’s new compiler pipeline with TurboFan and Ignition. How can V8 be so fast and how does a Just-in-time compiler work? 
We’ll look at basic and not-so-basic concepts of V8 and discuss what TurboFan, the optimizing compiler, means for Node.js performance. You’ll learn how to write code that’s fast with the new compiler pipeline. 

# JSEngines - HowDoTheyEven
[Slides from JSChannel 2017](https://fhinkel.github.io/JSEngines-HowDoTheyEven/JSChannel). [YouTube](https://www.youtube.com/watch?v=WBkMm19ziUI).

[Slides from DinosaurJS 2017](https://fhinkel.github.io/JSEngines-HowDoTheyEven/DinosaurJS2017/).

[Slides from WebRebels 2017](https://fhinkel.github.io/JSEngines-HowDoTheyEven/WebRebels2017/). [YouTube](https://youtu.be/acIOV8wtkOo?t=2h8m54s).

[Slides from JSConfEU 2017](https://fhinkel.github.io/JSEngines-HowDoTheyEven/JSConfEU/). [YouTube](https://youtu.be/p-iiEDtpy6I).

Want to know how JavaScript engines work? Why is JavaScript so fast? What is just-in-time compilation? We’ll look at basic concepts of compilers, challenges posed by modern JavaScript, and how to write compiler-friendly JavaScript.

Franziska has a Ph.D. in mathematics and is a software engineer on Google’s V8 team. She's an expert on ES6 performance and a Node.js core collaborator. When she's not working hard on making JavaScript and Node faster, she's probably out horseback riding.