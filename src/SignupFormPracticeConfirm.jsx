// Practice Lab – Confirm Password
// Task: Add confirmPassword; must match password using schema.refine
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Section from './components/Section.jsx'
import FormField from './components/FormField.jsx'

const practiceSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
  confirmPassword: z.string().min(6, { message: 'Confirm your password' }),
}).refine((data) => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: 'Passwords must match',
})

export default function SignupFormPracticeConfirm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(practiceSchema),
    defaultValues: { name: '', email: '', password: '', confirmPassword: '' },
  })

  function onSubmit(values) {
    alert(`Submitted Practice: ${JSON.stringify(values, null, 2)}`)
    reset()
  }

  return (
    <Section title="Practice Lab – Confirm Password">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormField id="name" label="Name" error={errors.name}>
          <input id="name" {...register('name')} aria-describedby="name-error" />
        </FormField>

        <FormField id="email" label="Email" error={errors.email}>
          <input id="email" type="email" {...register('email')} aria-describedby="email-error" />
        </FormField>

        <FormField id="password" label="Password" error={errors.password}>
          <input id="password" type="password" {...register('password')} aria-describedby="password-error" />
        </FormField>

        <FormField id="confirmPassword" label="Confirm Password" error={errors.confirmPassword}>
          <input id="confirmPassword" type="password" {...register('confirmPassword')} aria-describedby="confirmPassword-error" />
        </FormField>

        <button className="button" type="submit">Submit</button>
      </form>
    </Section>
  )
}


