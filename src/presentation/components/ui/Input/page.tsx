type Props = {
  name: string;
  className: string;
  children?: string;
  placeholder: string;
  type?: string;
  onChange?: any;
  maxlength?: number;
  onFocus?: () => void;
  onBlur?: () => void;
};

export function Input({
  name,
  className,
  children,
  placeholder,
  type = "text",
  onChange,
  maxlength,
  onFocus,
  onBlur,
}: Props) {
  return (
    <div className={className}>
      {children && <label htmlFor={name}>{children}</label>}
      <input
        type={type}
        name={name}
        id={name}
        maxLength={maxlength}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className="w-full h-7 p-[0.7rem] rounded text-black text-xs placeholder-mediumGray placeholder:text-xs placeholder:text-left dark:placeholder-white dark:bg-mediumGray bg-lightGray"
        placeholder={placeholder}
      />
    </div>
  );
}
