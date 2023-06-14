function Table({ item, index }) {
  return (
    <tr>
      <th scope='row'>{index + 1}</th>
      <td>{item.title}</td>
      <td>{item.count}</td>
      <td>${item.price}</td>
      <td></td>
    </tr>
  );
}

export default Table;
