// Guided Demo – Signup Form
// Fields: Name, Email, Password with Zod validation
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Section from './components/Section.jsx'
import FormField from './components/FormField.jsx'

const demoSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
})

export default function SignupFormDemo() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(demoSchema),
    defaultValues: { name: '', email: '', password: '' },
  })

  function onSubmit(values) {
    alert(`Submitted Demo: ${JSON.stringify(values, null, 2)}`)
    reset()
  }

  return (
    <Section title="Guided Demo – Signup Form">
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

        <button className="button" type="submit">Submit</button>
      </form>
    </Section>
  )
}


