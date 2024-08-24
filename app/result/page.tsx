'use client'

import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Button from '../../components/Button'

export default function ResultPage() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')
  const router = useRouter()

  const handleHomeClick = () => {
    window.scrollTo(0, 0)
    router.push('/')
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-serif font-bold mb-6 sm:mb-8 text-center text-gray-900">
        あなたの MBTI タイプ
      </h1>
      <div className="bg-white shadow-sm rounded-lg p-6 sm:p-8">
        <div className="text-4xl sm:text-5xl font-serif font-bold mb-6 sm:mb-8 text-center text-gray-800">
          {type}
        </div>
        <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            {/* ここにタイプの説明を追加 */}
            仲介者（INFP）は、一見すると静かで控えめな人に見えます。でも、心の中は情熱でいっぱいで、いつも何かを想像したり、物語を作ったりするのが大好きです。音楽や芸術、自然、そして周りの人たちとの触れ合いをとても大切にし、深く感情を揺さぶられます。
            高い理想を持って生きていて、誰かの役に立ちたいという気持ちがとても強いんです。でも、仲介者のようなタイプの人はそんなに多くないので、自分の気持ちをなかなか理解してもらえないこともあります。「自分はやっぱりどこか違うのかな…」と感じて、孤独を感じることもあるかもしれません。
          </p>
        </div>
        <div className="text-center">
          <Button href="/" onClick={handleHomeClick}>
            ホームに戻る
          </Button>
        </div>
      </div>
    </div>
  )
}
