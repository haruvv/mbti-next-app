import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-serif font-bold mb-8 text-gray-900">MBTI診断テスト</h1>
      <p className="text-xl mb-12 text-gray-700 leading-relaxed">
        あなたの性格タイプを診断し、自己理解を深めましょう。
      </p>
      <Link
        href="/test"
        className="inline-block bg-gray-900 text-white text-lg font-semibold py-4 px-8 rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-md"
      >
        診断を開始する
      </Link>
      <div className="mt-16 text-left">
        <h2 className="text-2xl font-serif font-semibold mb-6 text-gray-800">MBTIとは？</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          MBTIは、カール・ユングの心理学的タイプ理論を基にして、イザベル・ブリッグス・マイヤーとキャサリン・クッキーによって開発された性格診断法です。
        </p>
        <p className="text-gray-700 leading-relaxed">
          4つの指標（外向-内向、感覚-直感、思考-感情、判断-知覚）を組み合わせて、16の性格タイプを定義します。
        </p>
      </div>
    </div>
  )
}
