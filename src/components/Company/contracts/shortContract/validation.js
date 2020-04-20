import * as yup from 'yup';

const validationSchema = yup.object().shape({
  workDays: yup
    .number()
    .min(1, 'يجب ان يكون عدد أيام العمل بين 1 و 59')
    .max(59, 'يجب ان يكون عدد أيام العمل بين 1 و 59')
    .required('هذا الحقل مطلوب'),
  workHours: yup
    .number()
    .min(1, 'يجب ان يكون عدد ساعات العمل بين 1 و 12')
    .max(12, 'يجب ان يكون عدد ساعات العمل بين 1 و 12')
    .required('هذا الحقل مطلوب'),
  salary: yup.number().min(100, 'الحد اليومي الأدنى هو 100'),
  jobDescription: yup.string().required('هذا الحقل مطلوب'),
  jobTitle: yup.string().required('هذا الحقل مطلوب'),
  required_Number: yup.string().required('هذا الحقل مطلوب')
});

export default validationSchema;
