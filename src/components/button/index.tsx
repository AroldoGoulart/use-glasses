import { tw } from 'twind';

interface IButton {
  primary?: boolean;
  children: React.ReactNode;
  modifier?: string;
  onPress?: () => void;
}

const Button = ({ primary, modifier, onPress, children, ...rest }: IButton) => {
  const baseStyle = `font-sans font-medium py-2 px-4 border rounded`;
  const styles = primary
    ? `bg-glass text-white border-indigo-500 hover:bg-glass`
    : `bg-white text-gray-600 border-gray-300 hover:bg-gray-100`;

  return (
    <button
      onClick={() => {
        if (onPress) {
          onPress();
          return;
        }
        window.location.replace(`/#comecar-agora`);
      }}
      type="button"
      className={tw(`${baseStyle} ${styles} ${modifier ?? ``}`)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
