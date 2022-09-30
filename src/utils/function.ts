export const generateArrayFromNumber = (length: number): number[] => {
  return Array.from({ length }, (_, i) => i + 1);
};

export const handleChangeAndResetPassword = (
  event: any,
  name: string,
  formik: any
) => {
  formik.setFieldError(name, "");
  formik.setFieldValue(name, event.target.value);
};
