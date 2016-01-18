<input type="text" class="box" onkeyup="app.checkOnEnter(event)" <%= (started ? '' : 'disabled') %>
 placeholder="<%= (started ? 'Type the word and hit Enter' : 'Press start to begin...') %>"/>
