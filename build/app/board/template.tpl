<table>
  <% _.forEach(board, function (row) { %>
  <tr>
    <% _.forEach(row, function (cell) { %>
      <td><%=cell%></td>
    <% }); %>
  </tr>
  <% }); %>
</table>
