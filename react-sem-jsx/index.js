function Counter(props) {
  const [count, setCount] = React.useState(props.startValue);

  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'Número de cliques: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: () => setCount(count + 1) },
      'Clique aqui!'
    )
  );
}

ReactDOM.render(
  React.createElement(Counter, { startValue: 0 }, null),
  document.getElementById('root')
);
