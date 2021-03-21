function Counter(props) {
  const [count, setCount] = React.useState(props.startValue);

  return (
    <div>
      <p>Número de cliques: {count}</p>
      <button onClick={() => setCount(count + 1)}>Clique aqui!</button>
    </div>
  );
}

ReactDOM.render(
  <Counter startValue={0} />,
  document.getElementById('root')
)
