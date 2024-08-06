import { FC, useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

interface CountProps {
  number: number;
  text?: string | null;
  add_style?: boolean;
}

const Count: FC<CountProps> = ({ number, text, add_style = false }) => {
  const [focus, setFocus] = useState(false);
  const visibleChangeHandler = (isVisible: boolean) => {
    if (isVisible) {
      if (!focus) {
        setFocus(true);
      }
    }
  };
  return (
    <>
      <CountUp start={focus ? 0 : undefined} end={number} duration={1}>
        {({ countUpRef }) => (
          <div className={`d-flex ${add_style ? 'align-items-center justify-content-center' : ''}`}>
            <span ref={countUpRef} />
            <InView
              as="span"
              onChange={(inView) => visibleChangeHandler(inView)}
            >
              {text && <span>{text}</span>}
            </InView>
          </div>
        )}
      </CountUp>
    </>
  );
};

export default Count;