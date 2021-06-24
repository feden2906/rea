export default function({ item }) {
  return (
      <li>
        <p>{item.userId}.{item.id}</p>
        <h2>{item.title}</h2>
        <h3>{item.body}</h3>
      </li>
  )
}
