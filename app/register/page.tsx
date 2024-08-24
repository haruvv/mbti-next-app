'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

interface Question {
  id: number
  text: string
  options: string[]
}

const questions: Question[] = [
  {
    id: 1,
    text: '大勢の人と一緒にいるとエネルギーが湧いてくる',
    options: [
      '全くそう思わない',
      'あまりそう思わない',
      'どちらともいえない',
      'ややそう思う',
      '非常にそう思う',
    ],
  },
  // ここに他の質問を追加
]

export default function TestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const router = useRouter()

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // テスト終了時の処理
      submitTest(newAnswers)
    }
  }

  const submitTest = async (finalAnswers: number[]) => {
    try {
      // ここでバックエンドAPIに結果を送信
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
        // エラー処理
        console.error('診断結果の送信に失敗しました')
      }
    } catch (error) {
      console.error('エラーが発生しました', error)
    }
  }

  if (questions.length === 0) {
    return <div>質問が読み込まれていません。</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">MBTI診断テスト</h1>
      <div className="mb-4">
        質問 {currentQuestion + 1} / {questions.length}
      </div>
      <div className="mb-4">{questions[currentQuestion].text}</div>
      <div className="space-y-2">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            className="w-full p-2 text-left border rounded hover:bg-gray-100"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
