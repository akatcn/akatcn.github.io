import { redirect } from 'next/navigation'

function HomePage() {
  redirect("/article")
}

export default HomePage