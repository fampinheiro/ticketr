import { UIEvent, MouseEvent, TouchEvent, useRef, useState } from "react";

type Props = {
  onLongClick?: Function;
  onClick?: Function;
};

const useTouchEvents = ({
  onLongClick = () => {},
  onClick = () => {},
}: Props) => {
  const target = useRef<EventTarget>();
  const timeout = useRef<NodeJS.Timeout>();
  const [invoked, setInvoked] = useState(false);

  const delay = 300;
  const preventDefault = true;

  const handleStart = (event: UIEvent) => {
    if (preventDefault && event.target) {
      target.current = event.target;
      event.target.addEventListener("touchend", listener, {
        passive: false,
      });
    }

    timeout.current = setTimeout(() => {
      setInvoked(true);
      onLongClick();
    }, delay);
  };

  const handleClear = (event: UIEvent, supress = false) => {
    timeout.current && clearTimeout(timeout.current);
    if (preventDefault && target.current) {
      target.current.removeEventListener("touchend", listener);
    }
    if (!supress && !invoked) {
      onClick();
    }
    setInvoked(false);
  };

  return {
    onMouseDown: (e: MouseEvent) => handleStart(e),
    onTouchStart: (e: TouchEvent) => handleStart(e),
    onMouseUp: (e: MouseEvent) => handleClear(e),
    onMouseLeave: (e: MouseEvent) => handleClear(e, true),
    onTouchEnd: (e: TouchEvent) => handleClear(e),
  };
};

const listener = (event: Event) => {
  const touchEvent = event as any;
  if (!("touches" in touchEvent)) {
    return;
  }

  if (touchEvent.touches?.length < 2 && event.preventDefault) {
    event.preventDefault();
  }
};

export default useTouchEvents;
