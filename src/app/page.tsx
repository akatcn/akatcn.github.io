import { redirect } from 'next/navigation'

function HomePage() {
  redirect("/blog")
}

export default HomePage