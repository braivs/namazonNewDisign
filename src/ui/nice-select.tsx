import {FC, useCallback, useRef, useState} from "react"
import {useClickAway} from "react-use"

// Define interfaces for option and props
interface Option {
  value: string | number;
  text: string;
}

interface NiceSelect {
  options: Option[];
  defaultCurrent: number;
  placeholder: string;
  className?: string;
  onChange: (item: Option, name: string) => void;
  name: string;
}

const NiceSelect: FC<NiceSelect> = ({
                                           options,
                                           defaultCurrent,
                                           placeholder,
                                           className = '',
                                           onChange,
                                           name,
                                         }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [current, setCurrent] = useState<Option>(options[defaultCurrent])
  const onClose = useCallback(() => {
    setOpen(false)
  }, [])
  const ref = useRef<HTMLDivElement>(null)

  useClickAway(ref, onClose)

  const currentHandler = (item: Option) => {
    setCurrent(item)
    onChange(item, name)
    onClose()
  }

  return (
    <div
      className={`nice-select ${className} ${open ? 'open' : ''}`}
      role="button"
      tabIndex={0}
      onClick={() => setOpen((prev) => !prev)}
      ref={ref}
    >
      <span className="current">{current?.text || placeholder}</span>
      <ul
        className="list"
        role="menubar"
        onClick={(e) => e.stopPropagation()}
      >
        {options?.map((item) => (
          <li
            key={item.value}
            data-value={item.value}
            className={`option ${
              item.value === current?.value ? 'selected focus' : ''
            }`}
            role="menuitem"
            onClick={() => currentHandler(item)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NiceSelect
