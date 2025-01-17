import { Metadata } from 'next'
import LoginForm from '@/components/ui/login-form'

export const metadata: Metadata = {
  title: 'Login - VocAI',
  description: 'Login to your VocAI account',
}

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <LoginForm />
    </div>
  )
}
