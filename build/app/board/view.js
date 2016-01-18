define(["jquery","underscore","text!app/board/template.tpl"],function(a,b,c){"use strict";function d(){this.elementId="#board",this.board=new e}function e(){this.dim=4,this.minLength=2,this.dice=[new f("AOBBOJ"),new f("WHGEEN"),new f("NRNZHL"),new f("NAEAGE"),new f("DIYSTT"),new f("IESTSO"),new f("AOTTWO"),new f("HQUMNI"),new f("RYTLTE"),new f("POHCSA"),new f("LREVYD"),new f("EXLDIR"),new f("IENSUE"),new f("SFFKAP"),new f("IOTMUC"),new f("EHWVTR")],this.reset()}function f(a){this.sides=a.split("")}return d.prototype={template:b.template(c),check:function(a){return this.board.check(a)},render:function(){var b=this.template({board:this.board.matrix});a(this.elementId).html(b)},start:function(){this.board.start(),this.render()},stop:function(){this.board.stop(),this.render()}},e.prototype={get:function(a,b){try{return this.matrix[a][b]}catch(c){return"*"}},place:function(a){var c=b.groupBy(a,function(a,b){return b%this.dim},this);return b.toArray(c)},shake:function(){return b.invoke(this.dice,"roll")},start:function(){var a=this.shake();this.matrix=this.place(a)},stop:function(){this.reset()},reset:function(){this.matrix=[[" "," "," "," "],[" "," "," "," "],[" "," "," "," "],[" "," "," "," "]]},check:function(a){if(a.length<this.minLength)return!1;a=a.toUpperCase();for(var b=0;b<this.dim;b++)for(var c=0;c<this.dim;c++)if(this.get(b,c)===a.charAt(0)&&this.findSequence(a,b,c))return!0;return!1},findSequence:function(a,b,c){var d;if(a.length<=1)return!0;d=this.matrix[b][c],this.matrix[b][c]=" ";for(var e=-1;1>=e;e++)for(var f=-1;1>=f;f++)if(this.get(b+e,c+f)===a.charAt(1)&&this.findSequence(a.substr(1),b+e,c+f))return this.matrix[b][c]=d,!0;return this.matrix[b][c]=d,!1}},f.prototype={roll:function(){return b.sample(this.sides)}},d}),define(["app/board/view"],function(a){"use strict";describe("BoardView",function(){var b;beforeEach(function(){b=new a,b.render=jasmine.createSpy("render"),b.board.matrix=[["O","S","O","K"],["W","A","S","C"],["L","I","V","C"],["S","O","R","A"]]}),it("should respect the minimum length (2)",function(){expect(b.check("o")).toBeFalsy()}),it('should find word "socks"',function(){expect(b.check("socks")).toBeTruthy()}),it('should find word "liv"',function(){expect(b.check("liv")).toBeTruthy()}),it('should not find word "sucks"',function(){expect(b.check("sucks")).toBeFalsy()}),it('should not find word "soils"',function(){expect(b.check("soils")).toBeFalsy()}),it('should not find word "soar"',function(){expect(b.check("soar")).toBeFalsy()}),it("should initialize board on start",function(){b.start(),expect(b.board.matrix[0][0]).not.toBe(" ")})})});