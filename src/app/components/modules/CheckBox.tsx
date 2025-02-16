import { SignUpFormValuesType } from "@/types";
import { FormikProps } from "formik";

interface CheckBoxProps {
  name: string;
  formHandler: FormikProps<SignUpFormValuesType>;
  className?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  name,
  formHandler,
  className,
}) => {
  return (
    <label
      className={`size-6 rounded-lg border border-first cursor-pointer ${className} ${
        formHandler.values.check && "!bg-second/70"
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
