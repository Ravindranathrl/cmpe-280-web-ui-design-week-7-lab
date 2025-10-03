// Stretch Lab – Terms Checkbox
// Disable submit until terms are accepted and validate schema with z.literal(true)
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Section from './components/Section.jsx'
import FormField from './components/FormField.jsx'

const stretchSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
  terms: z.literal(true, { message: 'Must accept Terms' }),
})

export default function SignupFormStretchTerms() {
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm({
    resolver: zodResolver(stretchSchema),
    defaultValues: { name: '', email: '', password: '', terms: false },
  })

  const termsAccepted = watch('terms')

  function onSubmit(values) {
    alert(`Submitted Stretch: ${JSON.stringify(values, null, 2)}`)
    reset()
  }

  return (
    <Section title="Stretch Lab – Terms Checkbox">
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

        <div className="field">
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input type="checkbox" {...register('terms')} />
            I accept the Terms
          </label>
          <span className="error-text">{errors.terms?.message}</span>
        </div>

        <button className="button" type="submit" disabled={!termsAccepted}>Submit</button>
      </form>
    </Section>
  )
}


