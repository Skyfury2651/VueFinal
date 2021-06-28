<template>
  <div>
    <div class="table">
      <table id="TH">
        <caption>Sale List</caption>
        <thead>
        <tr>
          <th>Author!</th>
          <th>Title</th>
          <th>Year</th>
          <th>ISBN-13</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Miguel De Cervantes</td>
          <td>The Ingenious Gentleman Don Quixote of La Mancha</td>
          <td>1605</td>
          <td>9783125798502</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product"
}
</script>
<style scoped>
body {
  font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto,
  Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  line-height: 1.4;
  color: #333;
  background-color: #fff;
  padding: 0 5vw;
}

/* Standard Tables */

table {
  margin: 1em 0;
  border-collapse: collapse;
  border: 0.1em solid #d6d6d6;
}

caption {
  text-align: left;
  font-style: italic;
  padding: 0.25em 0.5em 0.5em 0.5em;
}

th,
td {
  padding: 0.25em 0.5em 0.25em 1em;
  vertical-align: text-top;
  text-align: left;
  text-indent: -0.5em;
}

th {
  vertical-align: bottom;
  background-color: #666;
  color: #fff;
}

tr:nth-child(even) th[scope=row] {
  background-color: #f2f2f2;
}

tr:nth-child(odd) th[scope=row] {
  background-color: #fff;
}

tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.05);
}

tr:nth-child(odd) {
  background-color: rgba(255, 255, 255, 0.05);
}

td:nth-of-type(2) {
  font-style: italic;
}

th:nth-of-type(3),
td:nth-of-type(3) {
  text-align: right;
}

/* Fixed Headers */

#THEAD thead {
  position: sticky;
  top: 0;
  z-index: 2;
}

#TH th {
  position: sticky;
  top: 0;
  z-index: 2;
}

/* Strictly for making the scrolling happen. */

body {
  padding-bottom: 90vh;
}
</style>