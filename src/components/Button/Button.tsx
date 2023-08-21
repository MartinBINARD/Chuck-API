import './Button.scss';

interface ButtonProps {
  fetchJoke: () => Promise<void>;
}

function Button({ fetchJoke }: ButtonProps) {
  return (
    <button type="button" className="button" onClick={fetchJoke}>
      NEW JOKE
    </button>
  );
}

export default Button;
