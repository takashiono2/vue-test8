// #slotによる挿入
(function(){
  'use stirct';

  Vue.component('slot-test',{
    template: `<div>
    <h1><slot name="title">タイトル</slot></h1>
    <p><slot name="content">デフォルト</slot></p>
    </div>`
  })	
  
  var app = new Vue({
    el: '#app'
  });
})();

// #子から親へdataを送る
// (function(){
//   'use stirct';

//   Vue.component('emit-event',{
//     template: `<div>
//     <input type="text" v-model="inputText">
//     <button @click="clickEvent">送信ボタン</button>
//     </div>`,
//     data: function(){
//       return {
//         inputText : ''
//       }
//     },
//     methods: {
//       clickEvent: function(){
//         this.$emit('from-child',this.inputText)
//       }
//     },
//   })	
  
//   var app = new Vue({
//     el: '#app',
//     data: {
//       message: ''
//     },
//     methods:{
//       receiveMessage: function(message){
//         this.message = message;
//       }
//     }
//   });
// })();

// #$emitを使って子から親へ
// (function(){
//   'use stirct';

//   Vue.component('emit-event',{
//     template: '<button @click="clickEvent">ボタン</button>',
//     methods: {
//       clickEvent: function(){
//         this.$emit('from-child');
//       }
//     }
//   });
  
//   var app = new Vue({
//     el: '#app',
//     methods:{
//       alertMessage: function(){
//         alert('子からイベント受け取ったよ');
//       }
//     }
//   });
// })();

// #リストデータを子に渡す
// (function(){
//   'use stirct';

//   Vue.component('blog-post',{
//     template: '<div><h2>{{post.title}}</h2><p>{{post.content}}</p></div>',
//     props: ['post']
//   })
  
//   var app = new Vue({
//     el: '#app',
//     data: {
//       posts: [
//         {'id':0, 'title': 'vue.jsの基礎', 'content': 'about vue.js...'},
//         {'id':1, 'title': 'componentの基礎', 'content': 'about component...'},
//         {'id':2, 'title': 'Vue CLIの基礎', 'content': 'about Vue CLIの基礎...'},
//       ]
//     }
//   })
// })();

// v-bindを使うことで親コンポーネントのdataを子コンポーネントに渡す
// (function(){
//   'use stirct';

//   Vue.component('hello-world',{
//     template: '<h1>Hello World and {{ message }}</h1>',
//     props: ['message']
//   })
  
//   var app = new Vue({
//     el: '#app',
//     data: {
//       inputText: ''
//     }
//   })
  
// })();

// (function(){
//   'use stirct';

//   var likeComponent = Vue.extend({
//     template: `<button @click="countUp">{{message}}{{count}}</button>`,
//     props:{
//       message:{
//         type: String,
//         default: 'like'
//       }
//     },
//     data: function(){
//       return {
//         count: 0
//       }
//     },
//     methods: {
//       countUp: function(){
//         this.count++;
//         this.$emit('increment');
//       }
//     }
//   });
  
//   var app = new Vue({
//     el: '#app',
//     components: {
//       'like-component': likeComponent
//     },
//     data:{
//       total: 0
//     },
//     methods:{
//       incrementTotal: function(){
//         this.total++;
//       }
//     }
//   });
// })();