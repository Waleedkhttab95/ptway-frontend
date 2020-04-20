import * as yup from 'yup';

const validationSchema = yup.object().shape({
  workDays: yup
    .number()
    .max(7, 'يجب ان يكون عدد أيام العمل أقل من 7')
    .required('هذا الحقل مطلوب'),
  workHours: yup
    .number()
    .min(1, 'يجب ان يكون عدد ساعات العمل بين 1 و 6')
    .max(6, 'يجب ان يكون عدد ساعات العمل بين 1 و 6')
    .required('هذا الحقل مطلوب'),
  salary: yup.number().min(1500, 'الحد الشهري الأدنى هو 1500'),
  jobDescription: yup.string().required('هذا الحقل مطلوب'),
  jobTitle: yup.string().required('هذا الحقل مطلوب'),
  required_Number: yup.string().required('هذا الحقل مطلوب')
});

export default validationSchema;
