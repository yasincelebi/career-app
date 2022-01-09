/* eslint-disable react/display-name */
import React, {
  ChangeEventHandler,
  FocusEventHandler,
  InputHTMLAttributes,
} from 'react'
import classNames from 'classnames'
const TextInput: React.FC<TextInputProps> = React.forwardRef(
  (props: TextInputProps, ref) => {
    const classes = classNames(
      'h-10 w-full focus:outline-primary border-gray-300  rounded border-solid border px-2',
      props.classnames
    )
    return <input className={classes} type="text" {...props} ref={ref} />
  }
)

export default TextInput

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: ChangeEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
  onFocus?: FocusEventHandler<HTMLInputElement>
  ref: React.Ref<HTMLInputElement>
  classnames: string
}
