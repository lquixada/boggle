<header>
  <h2>Score: <%=counter%></h2>
</header>
<section class="box">
  <table>
  <% _.forEach(attempts, function (attempt) { %>
    <tr>
      <td><%=attempt.word%></td>
      <td><%=attempt.score%></td>
    </tr>
  <% }); %>
  </table>
</section>
