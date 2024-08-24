'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface Question {
  id: number
  text: string
}

const questions: Question[] = [
  {
    id: 1,
    text: '大勢の人と一緒にいるとエネルギーが湧いてくる',
  },
  // 他の質問をここに追加
]

const options = [
  '全くそう思わない',
  'そう思わない',
  'どちらかというとそう思わない',
  'どちらともいえない',
  'どちらかというとそう思う',
  'そう思う',
  '非常にそう思う',
]

export default function TestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const router = useRouter()

  // コンポーネントがマウントされたときに状態をリセット
  useEffect(() => {
    setCurrentQuestion(0)
    setAnswers([])
    setSelectedOption(null)
  }, [])

  const handleAnswer = (answerIndex: number) => {
    setSelectedOption(answerIndex)
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answerIndex
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption(null) // 次の質問に移動したら選択をリセット
    } else {
      submitTest(newAnswers)
    }
  }

  const submitTest = async (finalAnswers: number[]) => {
    try {
      const response = await fetch('/api/diagnose', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answers: finalAnswers }),
      })

      if (response.ok) {
        const result = await response.json()
        router.push(`/result?type=${result.type}`)
      } else {
        console.error('診断結果の送信に失敗しました')
      }
    } catch (error) {
      console.error('エラーが発生しました', error)
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-serif font-bold mb-6 sm:mb-8 text-center text-gray-900">
        MBTI診断テスト
      </h1>
      <div className="bg-white shadow-sm rounded-lg p-4 sm:p-8">
        <div className="mb-4 sm:mb-6 text-center text-gray-500 font-serif">
          質問 {currentQuestion + 1} / {questions.length}
        </div>
        <div className="mb-6 sm:mb-8 text-lg sm:text-xl text-center text-gray-800 font-serif">
          {questions[currentQuestion].text}
        </div>
        <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-2 sm:mb-4">
          <div>全くそう思わない</div>
          <div>非常にそう思う</div>
        </div>
        <div className="flex justify-between items-center">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 ${
                selectedOption === index
                  ? 'border-gray-700 bg-gray-200'
                  : 'border-gray-300 hover:border-gray-500'
              } focus:outline-none transition-colors duration-200 active:animate-button-press`}
              aria-label={option}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
