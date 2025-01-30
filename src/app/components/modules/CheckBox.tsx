import { SignUpFormValues } from "@/types";
import { FormikProps } from "formik";

interface CheckBoxProps {
  name: string;
  formHandler: FormikProps<SignUpFormValues>;
  className?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  name,
  formHandler,
  className,
}) => {
  return (
    <label
      className={`size-6 rounded-md bg-third cursor-pointer ${className} ${
        formHandler.values.check && "!bg-second"
      }`}
    >
      <input
        type="checkbox"
        name={name}
        checked={formHandler.values.check}
        onChange={formHandler.handleChange}
        onBlur={formHandler.handleBlur}
        hidden
      />
    </label>
  );
};

export default CheckBox;
