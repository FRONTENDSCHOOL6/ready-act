import {string} from 'prop-types';
import {forwardRef, useState} from 'react';
// import Input from "@/components/Input";

function TimePicker({title, className, ...restProps}, ref) {
  const [time, setTime] = useState(null);

  return (
    <div>
      {title}
      <input
        ref={ref}
        className={className}
        type="time"
        onChange={(e) => setTime(e.target.value)}
        {...restProps}
      />
    </div>
  );
}

TimePicker.propTypes = {
  title: string,
  className: string,
};
export default forwardRef(TimePicker);
