function TransactionTable({ item }) {
  return (
    <tr>
      <th scope='row'>{item.id}</th>
      <td>{item.user_id}</td>
      <td>{item.count}</td>
      <td>{item.product_id}</td>
      <td>HKD ${item.total}</td>
      {/* <td><button>remove</button></td> */}
    </tr>
  );
}
export default TransactionTable;
