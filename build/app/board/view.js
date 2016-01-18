define(["jquery","underscore","text!app/board/style.css","text!app/board/template.tpl"],function(a,b,c,d){"use strict";function e(){this.elementId="#board",this.board=new f,this.template=this.compile()}function f(){this.dim=4,this.minLength=2,this.dice=[new g("AOBBOJ"),new g("WHGEEN"),new g("NRNZHL"),new g("NAEAGE"),new g("DIYSTT"),new g("IESTSO"),new g("AOTTWO"),new g("HQUMNI"),new g("RYTLTE"),new g("POHCSA"),new g("LREVYD"),new g("EXLDIR"),new g("IENSUE"),new g("SFFKAP"),new g("IOTMUC"),new g("EHWVTR")],this.reset()}function g(a){this.sides=a.split("")}return e.prototype={compile:function(){var a="<style>"+c+"</style>"+d;return b.template(a)},check:function(a){return this.board.check(a)},render:function(){var b=this.template({board:this.board.matrix});a(this.elementId).html(b)},start:function(){this.board.start(),this.render()},stop:function(){this.board.stop(),this.render()}},f.prototype={get:function(a,b){try{return this.matrix[a][b]}catch(c){return"*"}},place:function(a){var c=b.groupBy(a,function(a,b){return b%this.dim},this);return b.toArray(c)},shake:function(){return b.invoke(this.dice,"roll")},start:function(){var a=this.shake();this.matrix=this.place(a)},stop:function(){this.reset()},reset:function(){this.matrix=[[" "," "," "," "],[" "," "," "," "],[" "," "," "," "],[" "," "," "," "]]},check:function(a){if(a.length<this.minLength)return!1;a=a.toUpperCase();for(var b=0;b<this.dim;b++)for(var c=0;c<this.dim;c++)if(this.get(b,c)===a.charAt(0)&&this.findSequence(a,b,c))return!0;return!1},findSequence:function(a,b,c){var d;if(a.length<=1)return!0;d=this.matrix[b][c],this.matrix[b][c]=" ";for(var e=-1;1>=e;e++)for(var f=-1;1>=f;f++)if(this.get(b+e,c+f)===a.charAt(1)&&this.findSequence(a.substr(1),b+e,c+f))return this.matrix[b][c]=d,!0;return this.matrix[b][c]=d,!1}},g.prototype={roll:function(){return b.sample(this.sides)}},e}),define(["app/board/view"],function(a){"use strict";describe("BoardView",function(){var b;beforeEach(function(){b=new a,b.render=jasmine.createSpy("render"),b.board.matrix=[["O","S","O","K"],["W","A","S","C"],["L","I","V","C"],["S","O","R","A"]]}),it("should respect the minimum length (2)",function(){expect(b.check("o")).toBeFalsy()}),it('should find word "socks"',function(){expect(b.check("socks")).toBeTruthy()}),it('should find word "liv"',function(){expect(b.check("liv")).toBeTruthy()}),it('should not find word "sucks"',function(){expect(b.check("sucks")).toBeFalsy()}),it('should not find word "soils"',function(){expect(b.check("soils")).toBeFalsy()}),it('should not find word "soar"',function(){expect(b.check("soar")).toBeFalsy()}),it("should initialize board on start",function(){b.start(),expect(b.board.matrix[0][0]).not.toBe(" ")})})});