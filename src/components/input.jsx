import './input.css';

function Input({ data }) {
  return (
    <div className="input-wrapper" data-testid="initial">
      {data}
    </div>
  );
}

export default Input;
