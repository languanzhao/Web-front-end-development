var myPlugin = {}
myPlugin.install = function(Vue,options){
    Vue.component("tab",{
        data(){
            return{
                list:options.list,
                con:options.con,
                index:options.index,
                timer:options.timer,
                delayTime:options.delayTime
            }
        },
        template:`<div class="tab" @mouseover="over" @mouseleave="leave">
        <div class="hd">
        <ul>
            <li 
                v-for="(item,i) of list" 
                @click="toClick(i)" 
                :class="i === index ? 'on' : null"
                >{{item}}</li>
        </ul>
            <a href="javascript:void(0)" class="prev" @click="leftBtn">&lt;</a>
            <a href="javascript:void(0)" class="next" @click="rightBtn">&gt;</a>
        </div>
        <div class="bd">
            <div 
            v-for="(item,i) of con" 
            :class="i === index ? 'on' : null"
            >{{item}}</div>
        </div>
        </div>`,
        methods:{
            toClick(i){
                this.index = i
            },
            leftBtn(){
                this.index <= 0 ? this.index = this.con.length -1 : this.index --
            },
            rightBtn(){
                this.index >= this.con.length -1 ? this.index = 0 : this.index ++
            },
            autoPlay(){
                var that = this
                this.timer = setInterval(function(){
                    that.rightBtn()
                },this.delayTime)
            },
            over(){
                clearInterval(this.timer)
            },
            leave(){
                this.autoPlay()
            }
        },
        mounted(){
            this.autoPlay()
        }
    })
}
    Vue.use(myPlugin,{
        list:["标题一","标题二","标题三"],
        con:["内容一","内容二","内容三"],
        index:0,
        timer:null,
        delayTime:1000
    })

    var vm = new Vue({
        el: '#app'
    })