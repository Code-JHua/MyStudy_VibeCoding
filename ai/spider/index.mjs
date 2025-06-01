import { createCrawl, createCrawlOpenAI } from 'x-crawl' // 爬虫工具
import dotenv from 'dotenv' // 环境变量
dotenv.config()

// 创建爬虫
const crawlApp = createCrawl({
    maxRetry: 3, // 最大重试次数
    intervalTime: { min: 1000, max: 3000 }, // 间隔时间
})

// 创建 openai 爬虫
const crawlOpenAI = createCrawlOpenAI({
    clientOptions: { // 配置参数
        // apiKey: process.env.OPENAI_API_KEY,
    },
    defaultModel: { // 默认模型
        chatModel: 'gpt-4.1'
    }
})


crawlApp.crawlPage('https://movie.douban.com/chart').then(async (res) => {
    console.log(res)
    //获取到页面的内容
    const { page, browser } = res.data

    //获取页面上的结构
    const targetSelector = await page.waitForSelector('.article')
    const highlyHTML = await page.$eval('.article', (el) => el.innerHTML)

    //console.log(highlyHTML)
    //让 ai 解析这份 html 字符串， 解析出我们要的数据
    const result = await crawlOpenAI.parseElements(
        highlyHTML,
        `获取电影评分，将评分不小于8.0的电影名称和评分和图片链接返回，返回的格式为数组，数组的每一项是一个对象，对象的属性为name,score,img`
    )

    console.log(result)

    //关闭浏览器
    await browser.close()
})