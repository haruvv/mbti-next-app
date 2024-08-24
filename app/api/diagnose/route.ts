import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { answers } = await request.json()

  // ここで MBTI タイプを計算するロジックを実装
  const type = calculateMBTIType(answers)

  return NextResponse.json({ type })
}

function calculateMBTIType(answers: number[]): string {
  // 仮の実装です。実際の MBTI 計算ロジックに置き換えてください。
  const dimensions = ['E', 'I', 'S', 'N', 'T', 'F', 'J', 'P']
  let result = ''

  for (let i = 0; i < 4; i++) {
    const score = answers.slice(i * 10, (i + 1) * 10).reduce((a, b) => a + b, 0)
    result += score > 25 ? dimensions[i * 2] : dimensions[i * 2 + 1]
  }

  return result
}
