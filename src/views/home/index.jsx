import React, { memo, useEffect } from 'react'
import hyRequest from '@/services'
import { HomeWrapper } from './style'
import { useState } from 'react'
import HomeBanner from './c-cpns/home-banner'

const Home = memo(() => {
  // 定义状态
  const [highScore, setHighScore] = useState({})

  // 网络请求的代码
  useEffect(() => {
    hyRequest.get({ url: '/home/highscore' }).then((res) => {
      console.log(res)
      setHighScore(res)
    })
  }, [])

  return (
    <HomeWrapper>
      <HomeBanner />
    </HomeWrapper>
  )
})

export default Home
