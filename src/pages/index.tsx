import Head from 'next/head'

type Props = {
  title: string
}

const sddd = 'ss'

export default function Home({ title = 'Boilerplate NextJs' }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{title}</h1>
      </main>
    </div>
  )
}
